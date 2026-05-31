"""
execution/enrich_deep.py
------------------------
PURPOSE: Deep owner enrichment using DuckDuckGo search (no API key needed).
         For each lead without owner data:
           1. Search DDG for LinkedIn profile: site:linkedin.com/in "{company}" {city}
           2. Search DDG for owner name: "{company}" {city} owner plumber
           3. Scrape company website (improved — up to 6 sub-pages)
         Outputs .tmp/leads_deep_enriched.json with clean columns.
INPUTS:  --input  (.tmp/leads.json)
         --output (.tmp/leads_deep_enriched.json)
"""

import argparse
import json
import logging
import random
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse, quote_plus

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent / ".env")

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s", datefmt="%H:%M:%S")
log = logging.getLogger(__name__)

TMP_DIR = Path(__file__).parent.parent / ".tmp"
TMP_DIR.mkdir(exist_ok=True)

# ---------------------------------------------------------------------------
# HTTP session
# ---------------------------------------------------------------------------
SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "en-CA,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
})

JUNK_WORDS = {
    "email", "contact", "book", "now", "phone", "address", "facebook",
    "google", "reviews", "financing", "available", "mailing", "send",
    "inquiries", "general", "fast", "response", "site", "privacy",
    "policy", "avenue", "street", "drive", "place", "road", "us",
    "our", "has", "been", "left", "with", "at", "in", "house", "for",
    "on", "call", "first", "generation", "st", "pl", "ave", "dr",
    "platonic", "plumbing", "heating", "mechanical", "click", "here",
    "read", "more", "learn", "view", "see", "get", "free", "quote",
    "services", "service", "repair", "installation", "drain", "pipe",
}

OWNER_SENIORITY = re.compile(
    r"\b(owner|founder|co-founder|president|ceo|chief executive|proprietor|director|manager|operator)\b",
    re.IGNORECASE,
)

# ---------------------------------------------------------------------------
# Name validation
# ---------------------------------------------------------------------------
def is_real_name(name: str) -> bool:
    if not name:
        return False
    parts = name.strip().split()
    if not (2 <= len(parts) <= 4):
        return False
    for p in parts:
        if not p.isalpha():
            return False
        if p.lower() in JUNK_WORDS:
            return False
        if not p[0].isupper():
            return False
    return True


def clean_name(raw: str) -> str:
    """Strip trailing noise words from a matched name string."""
    parts = raw.strip().split()
    clean = []
    for p in parts:
        if p.lower() in JUNK_WORDS or not p[0].isupper():
            break
        clean.append(p)
    return " ".join(clean)

# ---------------------------------------------------------------------------
# Owner selection from leadsEnrichment (unchanged from enrich_owners.py)
# ---------------------------------------------------------------------------
def _score_contact(person: dict) -> int:
    score = 0
    seniority = (person.get("seniority") or "").lower()
    title = (person.get("jobTitle") or "").lower()
    if seniority == "owner" or "owner" in title or "founder" in title:
        score += 100
    elif seniority == "c_suite" or any(w in title for w in ("president", "ceo", "chief executive")):
        score += 80
    elif seniority == "director":
        score += 50
    elif seniority == "manager":
        score += 30
    if person.get("email"):
        score += 20
    if person.get("linkedinProfile"):
        score += 5
    return score


def best_contact_from_enrichment(enrichment: list) -> dict | None:
    if not enrichment:
        return None
    top = sorted(enrichment, key=_score_contact, reverse=True)[0]
    return {
        "owner_name": top.get("fullName") or f"{top.get('firstName','')} {top.get('lastName','')}".strip(),
        "owner_title": top.get("jobTitle") or "",
        "owner_email": top.get("email") or "",
        "owner_linkedin": top.get("linkedinProfile") or "",
        "owner_source": "enrichment",
    }

# ---------------------------------------------------------------------------
# DuckDuckGo search
# ---------------------------------------------------------------------------
DDG_URL = "https://html.duckduckgo.com/html/"
_last_ddg_call = 0.0


def ddg_search(query: str, max_results: int = 5) -> list[dict]:
    """Return list of {title, url, snippet} from DDG HTML search."""
    global _last_ddg_call
    # Polite rate limiting: at least 2-4s between DDG calls
    gap = random.uniform(2.0, 4.0)
    since_last = time.time() - _last_ddg_call
    if since_last < gap:
        time.sleep(gap - since_last)
    _last_ddg_call = time.time()

    try:
        resp = SESSION.post(DDG_URL, data={"q": query, "kl": "ca-en"}, timeout=10)
        resp.raise_for_status()
    except Exception as e:
        log.debug("DDG request failed: %s", e)
        return []

    soup = BeautifulSoup(resp.text, "html.parser")
    results = []
    for r in soup.select(".result")[:max_results]:
        title_el = r.select_one(".result__title")
        url_el = r.select_one(".result__url")
        snippet_el = r.select_one(".result__snippet")
        results.append({
            "title": title_el.get_text(" ", strip=True) if title_el else "",
            "url": url_el.get_text(" ", strip=True) if url_el else "",
            "snippet": snippet_el.get_text(" ", strip=True) if snippet_el else "",
        })
    return results

# ---------------------------------------------------------------------------
# LinkedIn search via DDG
# ---------------------------------------------------------------------------
# LinkedIn titles look like: "John Smith - Owner at XYZ Plumbing | LinkedIn"
_LI_TITLE_RE = re.compile(
    r"^([A-Z][a-z]+(?:\s[A-Z][a-z''\-]+){1,3})\s*[-–|]\s*(.+?)\s*(?:\|\s*LinkedIn|$)",
    re.IGNORECASE,
)


def _parse_linkedin_title(title: str) -> dict | None:
    m = _LI_TITLE_RE.match(title.strip())
    if not m:
        return None
    name = m.group(1).strip()
    role_str = m.group(2).strip()
    if not is_real_name(name):
        return None
    # Extract job title (before "at Company")
    job = re.split(r"\s+at\s+", role_str, maxsplit=1, flags=re.IGNORECASE)[0].strip()
    return {"name": name, "title": job, "url": ""}


def search_linkedin(company: str, city: str) -> dict | None:
    query = f'site:linkedin.com/in "{company}" {city}'
    results = ddg_search(query, max_results=5)
    for r in results:
        if "linkedin.com" not in r.get("url", "") and "linkedin" not in r.get("title", "").lower():
            continue
        parsed = _parse_linkedin_title(r["title"])
        if parsed:
            # Prefer owner/founder/president titles
            if OWNER_SENIORITY.search(parsed["title"]):
                parsed["url"] = r["url"]
                return parsed
    # Second pass — take any LinkedIn result
    for r in results:
        if "linkedin.com" not in r.get("url", "") and "linkedin" not in r.get("title", "").lower():
            continue
        parsed = _parse_linkedin_title(r["title"])
        if parsed:
            parsed["url"] = r["url"]
            return parsed
    return None

# ---------------------------------------------------------------------------
# General DDG owner search (non-LinkedIn)
# ---------------------------------------------------------------------------
_NAME_NEAR_OWNER_RE = [
    re.compile(r"([A-Z][a-z]+(?:\s[A-Z][a-z''\-]+){1,3})\s*,?\s*(?:owner|founder|president|ceo|operator)", re.IGNORECASE),
    re.compile(r"(?:owner|founder|president|ceo|operator)[,:\s]+([A-Z][a-z]+(?:\s[A-Z][a-z''\-]+){1,3})", re.IGNORECASE),
]


def search_owner_ddg(company: str, city: str) -> dict | None:
    query = f'"{company}" {city} owner plumber'
    results = ddg_search(query, max_results=5)
    for r in results:
        text = r["title"] + " " + r["snippet"]
        for pat in _NAME_NEAR_OWNER_RE:
            m = pat.search(text)
            if m:
                name = clean_name(m.group(1))
                if is_real_name(name):
                    title_m = OWNER_SENIORITY.search(text)
                    title = title_m.group(0).title() if title_m else "Owner"
                    return {"name": name, "title": title, "url": r["url"]}
    return None

# ---------------------------------------------------------------------------
# Website scraping (improved — up to 6 sub-pages)
# ---------------------------------------------------------------------------
OWNER_PAGE_RE = re.compile(r"\b(about|team|staff|contact|who.we.are|our.story|meet|people|bios?)\b", re.IGNORECASE)
_OWNER_PAT = [
    re.compile(r"(?:owner|founder|co-founder|president|ceo|proprietor)[:\s|–\-]+([A-Z][a-z]+(?:\s[A-Z][a-z''\-]+)+)", re.IGNORECASE),
    re.compile(r"([A-Z][a-z]+(?:\s[A-Z][a-z''\-]+)+)\s*[,\-|–]+\s*(?:owner|founder|co-founder|president|ceo|proprietor)", re.IGNORECASE),
]


def _fetch(url: str, timeout: int = 7) -> str | None:
    try:
        r = SESSION.get(url, timeout=timeout, allow_redirects=True)
        r.raise_for_status()
        return r.text
    except Exception:
        return None


def _find_owner_in_html(html: str, company: str) -> dict | None:
    soup = BeautifulSoup(html, "html.parser")
    text = soup.get_text(" ", strip=True)

    for pat in _OWNER_PAT:
        m = pat.search(text)
        if m:
            name = clean_name(m.group(1) if "owner" in pat.pattern[:20].lower() else m.group(1))
            if is_real_name(name):
                title_m = OWNER_SENIORITY.search(m.group(0))
                title = title_m.group(0).title() if title_m else "Owner"
                return {"owner_name": name, "owner_title": title, "owner_email": "", "owner_linkedin": "", "owner_source": "website"}

    # Mailto links with nearby name
    for a in soup.find_all("a", href=re.compile(r"^mailto:")):
        email = a["href"].replace("mailto:", "").split("?")[0].strip()
        if not email or "@" not in email:
            continue
        parent = a.find_parent()
        nearby = parent.get_text(" ", strip=True) if parent else ""
        m = re.search(r"([A-Z][a-z]+(?:\s[A-Z][a-z''\-]+)+)", nearby)
        if m:
            name = clean_name(m.group(1))
            if is_real_name(name):
                return {"owner_name": name, "owner_title": "Contact", "owner_email": email, "owner_linkedin": "", "owner_source": "website"}

    return None


def scrape_website(website: str, company: str) -> dict | None:
    if not website:
        return None
    base = f"{urlparse(website).scheme}://{urlparse(website).netloc}"

    html = _fetch(website)
    if not html:
        return None

    result = _find_owner_in_html(html, company)
    if result:
        return result

    soup = BeautifulSoup(html, "html.parser")
    visited = {website}
    candidates = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        label = a.get_text(" ", strip=True)
        if OWNER_PAGE_RE.search(href) or OWNER_PAGE_RE.search(label):
            full = urljoin(base, href)
            if urlparse(full).netloc == urlparse(base).netloc and full not in visited:
                candidates.append(full)
                visited.add(full)

    for link in candidates[:6]:
        sub = _fetch(link)
        if sub:
            result = _find_owner_in_html(sub, company)
            if result:
                return result
        time.sleep(0.2)

    return None

# ---------------------------------------------------------------------------
# Column cleanup
# ---------------------------------------------------------------------------
def format_hours(hours_list: list) -> str:
    if not hours_list:
        return ""
    return "; ".join(f"{h.get('day','')}: {h.get('hours','')}" for h in hours_list)


def flatten_lead(lead: dict, owner: dict | None) -> dict:
    row = {
        "company_name": lead.get("title") or "",
        "category": lead.get("categoryName") or (lead.get("categories") or [""])[0],
        "address": lead.get("address") or "",
        "city": lead.get("city") or "",
        "province": lead.get("state") or "",
        "phone": lead.get("phone") or "",
        "website": lead.get("website") or "",
        "google_rating": lead.get("totalScore") or "",
        "review_count": lead.get("reviewsCount") or "",
        "owner_name": "",
        "owner_title": "",
        "owner_email": "",
        "owner_linkedin": "",
        "owner_source": "not found",
        "opening_hours": format_hours(lead.get("openingHours") or []),
    }
    if owner:
        row.update(owner)
    return row

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", default=".tmp/leads.json")
    parser.add_argument("--output", default=".tmp/leads_deep_enriched.json")
    args = parser.parse_args()

    base_dir = Path(__file__).parent.parent
    input_path = Path(args.input) if Path(args.input).is_absolute() else base_dir / args.input
    output_path = Path(args.output) if Path(args.output).is_absolute() else base_dir / args.output

    leads = json.loads(input_path.read_text(encoding="utf-8"))
    log.info("Loaded %d leads", len(leads))

    results = []
    stats = {"enrichment": 0, "linkedin": 0, "ddg_web": 0, "website": 0, "not_found": 0}

    for i, lead in enumerate(leads, 1):
        company = lead.get("title", f"Lead {i}")
        city = lead.get("city") or lead.get("state") or "Canada"
        website = lead.get("website") or ""
        enrichment = lead.get("leadsEnrichment") or []

        # 1 — existing enrichment data (fastest, best quality)
        owner = best_contact_from_enrichment(enrichment)
        if owner:
            stats["enrichment"] += 1
            log.info("[%d/%d] %-42s enrichment  → %s", i, len(leads), company[:42], owner["owner_name"])
            results.append(flatten_lead(lead, owner))
            continue

        log.info("[%d/%d] %-42s searching...", i, len(leads), company[:42])

        # 2 — LinkedIn via DuckDuckGo
        li = search_linkedin(company, city)
        if li and is_real_name(li["name"]):
            owner = {
                "owner_name": li["name"],
                "owner_title": li["title"],
                "owner_email": "",
                "owner_linkedin": li["url"] if "linkedin.com" in li.get("url","") else "",
                "owner_source": "linkedin_search",
            }
            stats["linkedin"] += 1
            log.info("[%d/%d] %-42s linkedin    → %s (%s)", i, len(leads), company[:42], li["name"], li["title"])
            results.append(flatten_lead(lead, owner))
            continue

        # 3 — General DDG owner search
        ddg = search_owner_ddg(company, city)
        if ddg and is_real_name(ddg["name"]):
            owner = {
                "owner_name": ddg["name"],
                "owner_title": ddg["title"],
                "owner_email": "",
                "owner_linkedin": "",
                "owner_source": "web_search",
            }
            stats["ddg_web"] += 1
            log.info("[%d/%d] %-42s web search  → %s (%s)", i, len(leads), company[:42], ddg["name"], ddg["title"])
            results.append(flatten_lead(lead, owner))
            continue

        # 4 — Website scraping fallback
        ws = scrape_website(website, company)
        if ws:
            stats["website"] += 1
            log.info("[%d/%d] %-42s website     → %s", i, len(leads), company[:42], ws["owner_name"])
            results.append(flatten_lead(lead, ws))
            continue

        stats["not_found"] += 1
        log.info("[%d/%d] %-42s not found", i, len(leads), company[:42])
        results.append(flatten_lead(lead, None))

    output_path.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
    log.info("=" * 60)
    log.info("Enrichment: %d | LinkedIn: %d | Web search: %d | Website: %d | Not found: %d",
             stats["enrichment"], stats["linkedin"], stats["ddg_web"], stats["website"], stats["not_found"])
    log.info("Saved %d records → %s", len(results), output_path)


if __name__ == "__main__":
    main()
