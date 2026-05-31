"""
execution/enrich_web.py
-----------------------
PURPOSE: Deep per-company enrichment via website scraping + multi-source Exa search.
         Strategy 1: Scrape company website About/Team/Contact pages.
         Strategy 2: Search HomeStars, YellowPages, Facebook, LinkedIn via Exa.
         Strategy 3: Re-run Exa with varied query templates for harder cases.
INPUTS:  list of lead dicts (company_name, city, province, website fields)
OUTPUTS: same list with owner_name, owner_title, owner_email, owner_source populated
"""

import logging
import os
import re
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from exa_py import Exa

load_dotenv(Path(__file__).parent.parent / ".env")
log = logging.getLogger(__name__)

exa = Exa(api_key=os.getenv("EXA_API_KEY"))

# ─── Shared name validation ────────────────────────────────────────────────────

JUNK_WORDS = {
    "email", "contact", "book", "phone", "address", "facebook", "google",
    "reviews", "privacy", "policy", "click", "here", "learn", "more",
    "skip", "main", "content", "share", "edit", "remove", "profile",
    "inc", "ltd", "llc", "corp", "co", "group", "team", "company",
    "enterprise", "holding", "holdings", "industries", "international",
    "solutions", "services", "systems", "technologies", "tech",
    "plumbing", "heating", "hvac", "roofing", "mechanical", "refrigeration",
    "air", "repair", "installation", "contractor", "electric", "electrical",
    "ontario", "canada", "quebec", "alberta", "british", "columbia",
    "calgary", "toronto", "ottawa", "montreal", "vancouver", "winnipeg",
    "the", "and", "manager", "business", "founder", "principle",
    "wolseley", "jiffy", "empire", "atlas", "apex", "elite", "premier",
    "residential", "commercial", "industrial", "emergency", "call", "us",
    "home", "about", "staff", "our", "meet", "team", "licensed", "certified",
}

_NAME_PATTERNS = [
    re.compile(
        r"([A-Z][a-z]+(?:[ ][A-Z][a-z''\\-]+){1,3})\s*[-–—|,]\s*"
        r"(?:owner|founder|co-founder|president|ceo|proprietor|principal|operator|director|manager)",
        re.IGNORECASE,
    ),
    re.compile(
        r"(?:owner|founder|co-founder|president|ceo|proprietor|principal|operator)[:\s\-–—]+([A-Z][a-z]+(?:[ ][A-Z][a-z''\\-]+){1,3})",
        re.IGNORECASE,
    ),
    re.compile(
        r"(?:my name is|i(?:'m| am)|hi,? i(?:'m| am))\s+([A-Z][a-z]+(?:[ ][A-Z][a-z''\\-]+){1,2})",
        re.IGNORECASE,
    ),
]
_TITLE_RE = re.compile(
    r"\b(owner|founder|co-founder|president|ceo|proprietor|principal|operator|director)\b",
    re.IGNORECASE,
)


def _is_real_name(name: str) -> bool:
    if not name or len(name) < 4:
        return False
    parts = name.strip().split()
    if not (2 <= len(parts) <= 4):
        return False
    for p in parts:
        if not re.match(r"^[A-Za-z'\-]+$", p):
            return False
        if p.lower() in JUNK_WORDS:
            return False
        if not p[0].isupper():
            return False
    return True


def _extract_name_from_text(text: str) -> tuple[str, str]:
    for pat in _NAME_PATTERNS:
        m = pat.search(text)
        if m:
            raw = m.group(1).strip()
            parts = []
            for p in raw.split():
                if p.lower() in JUNK_WORDS or not p[0].isupper():
                    break
                parts.append(p)
            name = " ".join(parts)
            if _is_real_name(name):
                tm = _TITLE_RE.search(m.group(0))
                title = tm.group(0).title() if tm else "Owner"
                return name, title
    return "", ""


def _result_mentions_company(result, company: str) -> bool:
    company_words = {
        w.lower() for w in re.split(r"\W+", company)
        if len(w) > 3 and w.lower() not in {
            "plumbing", "heating", "hvac", "roofing", "mechanical",
            "services", "solutions", "canada", "inc", "ltd", "heating",
        }
    }
    if not company_words:
        return True
    haystack = " ".join([
        result.title or "",
        result.url or "",
        " ".join(getattr(result, "highlights", None) or []),
    ]).lower()
    return any(w in haystack for w in company_words)


# ─── Strategy 1: Website page scraper ─────────────────────────────────────────

ABOUT_SLUGS = [
    "/about", "/about-us", "/our-team", "/team", "/staff",
    "/meet-the-team", "/meet-us", "/who-we-are", "/company",
    "/contact", "/contact-us", "/our-story", "/history",
]

_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-CA,en;q=0.5",
}


def _fetch_text(url: str, timeout: int = 10) -> str:
    """Fetch a URL and return visible text content, or empty string on failure."""
    try:
        resp = requests.get(url, headers=_HEADERS, timeout=timeout, allow_redirects=True)
        if resp.status_code != 200:
            return ""
        soup = BeautifulSoup(resp.text, "html.parser")
        for tag in soup(["script", "style", "nav", "footer", "head"]):
            tag.decompose()
        return " ".join(soup.get_text(separator=" ").split())
    except Exception:
        return ""


def _find_about_links(website: str) -> list[str]:
    """Fetch homepage and find links to About/Team/Contact pages."""
    try:
        resp = requests.get(website, headers=_HEADERS, timeout=10, allow_redirects=True)
        if resp.status_code != 200:
            return []
        soup = BeautifulSoup(resp.text, "html.parser")
        base = f"{urlparse(resp.url).scheme}://{urlparse(resp.url).netloc}"
        found = []
        for a in soup.find_all("a", href=True):
            href = a["href"].lower()
            text = a.get_text().lower().strip()
            if any(slug in href or slug.strip("/") in text for slug in ABOUT_SLUGS):
                full = urljoin(base, a["href"])
                if urlparse(full).netloc == urlparse(base).netloc and full not in found:
                    found.append(full)
        return found[:6]
    except Exception:
        return []


def scrape_website_for_owner(website: str, company: str) -> dict | None:
    """
    Scrape company website (home + about/team/contact pages) looking for owner name.
    Returns owner dict or None.
    """
    if not website or "facebook.com" in website:
        return None

    # Get homepage + discover about/team pages
    pages_to_check = [website]
    pages_to_check += _find_about_links(website)
    # Also try direct About slug hits
    base = f"{urlparse(website).scheme}://{urlparse(website).netloc}"
    for slug in ABOUT_SLUGS[:6]:
        url = base + slug
        if url not in pages_to_check:
            pages_to_check.append(url)

    seen = set()
    for url in pages_to_check[:10]:
        if url in seen:
            continue
        seen.add(url)
        text = _fetch_text(url)
        if not text:
            continue
        # Scan chunks for owner patterns
        for chunk in re.split(r"[.!?;]|\n", text):
            name, title = _extract_name_from_text(chunk)
            if name:
                # Sanity check: name shouldn't match company name words
                company_lc = company.lower()
                if not any(n.lower() in company_lc for n in name.split()):
                    log.debug("Website hit: %s from %s", name, url)
                    return {
                        "owner_name": name,
                        "owner_title": title,
                        "owner_email": _extract_email_from_text(text),
                        "owner_linkedin": "",
                        "owner_source": "website",
                    }
        time.sleep(0.3)

    return None


def _extract_email_from_text(text: str) -> str:
    m = re.search(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}", text)
    return m.group(0) if m else ""


# ─── Strategy 2: Directory search via Exa ─────────────────────────────────────

OWNER_SCHEMA = {
    "type": "object",
    "properties": {
        "owner_name": {
            "type": "string",
            "description": (
                "Full name (First Last) of the person who owns, founded, or runs THIS SPECIFIC company. "
                "Must be a real human name — not a company name, brand, or job title. "
                "Return empty string if uncertain."
            ),
        },
        "owner_title": {
            "type": "string",
            "description": "Their role e.g. Owner, Founder, President, CEO. Empty if name is empty.",
        },
        "owner_email": {
            "type": "string",
            "description": "Their email address if found. Empty string if not found.",
        },
    },
    "required": ["owner_name", "owner_title", "owner_email"],
}


def _exa_directory_search(company: str, city: str, province: str) -> dict | None:
    """
    Search HomeStars, YellowPages, Yelp, Facebook via Exa for owner/contact info.
    """
    location = city or province or "Canada"
    queries = [
        # HomeStars (Canadian contractor directory — often has owner names)
        f'site:homestars.com "{company}" {location}',
        # YellowPages Canada
        f'site:yellowpages.ca "{company}" {location}',
        # Yelp Canada
        f'"{company}" {location} owner plumber site:yelp.ca OR site:yelp.com',
        # Local news / press mentions
        f'"{company}" {location} owner OR founder plumbing',
        # BBB (Better Business Bureau)
        f'site:bbb.org "{company}" {location}',
    ]

    system = (
        f'Extract the owner, founder, or president of "{company}" in {location}, Canada. '
        "Return a real human name (First Last). If not clearly about this company, return empty strings."
    )

    for query in queries:
        try:
            results = exa.search(
                query,
                type="auto",
                num_results=3,
                output_schema=OWNER_SCHEMA,
                system_prompt=system,
                contents={"highlights": True},
            )
            if hasattr(results, "output") and results.output and results.output.content:
                name = (results.output.content.get("owner_name") or "").strip()
                title = (results.output.content.get("owner_title") or "").strip()
                email = (results.output.content.get("owner_email") or "").strip()
                company_confirmed = any(
                    _result_mentions_company(r, company) for r in results.results
                )
                if _is_real_name(name) and company_confirmed:
                    source_url = next(
                        (r.url for r in results.results if _result_mentions_company(r, company)),
                        "",
                    )
                    source_tag = "homestars" if "homestars" in source_url else \
                                 "yellowpages" if "yellowpages" in source_url else \
                                 "bbb" if "bbb.org" in source_url else "exa_dir"
                    li = next((r.url for r in results.results if "linkedin.com" in r.url), "")
                    return {
                        "owner_name": name,
                        "owner_title": title or "Owner",
                        "owner_email": email,
                        "owner_linkedin": li,
                        "owner_source": source_tag,
                    }
            # Highlight fallback
            for result in results.results:
                if not _result_mentions_company(result, company):
                    continue
                for text in [result.title or "", *(getattr(result, "highlights", None) or [])]:
                    name, title = _extract_name_from_text(text)
                    if name:
                        return {
                            "owner_name": name,
                            "owner_title": title,
                            "owner_email": "",
                            "owner_linkedin": result.url if "linkedin.com" in result.url else "",
                            "owner_source": "exa_dir",
                        }
            time.sleep(0.3)
        except Exception as e:
            log.debug("Exa dir query failed for %s [%s]: %s", company, query[:60], e)

    return None


def _exa_varied_queries(company: str, city: str, province: str, website: str) -> dict | None:
    """
    Try varied Exa query templates that work well for small Canadian businesses.
    """
    location = city or province or "Canada"
    from urllib.parse import urlparse as _up
    domain = _up(website).netloc.replace("www.", "") if website else ""

    templates = [
        f"{company} {location} contact owner email",
        f"{company} plumbing {location} team staff",
        f'"{company}" Canada licensed plumber owner',
    ]
    if domain:
        templates.insert(0, f"site:{domain} owner about team contact")

    system = (
        f'Find the owner or main contact person for "{company}" in {location}, Canada. '
        "Return only a real human name (First Last). Return empty if uncertain."
    )

    for query in templates:
        try:
            results = exa.search(
                query,
                type="auto",
                num_results=4,
                output_schema=OWNER_SCHEMA,
                system_prompt=system,
                contents={"highlights": True},
            )
            if hasattr(results, "output") and results.output and results.output.content:
                name = (results.output.content.get("owner_name") or "").strip()
                title = (results.output.content.get("owner_title") or "").strip()
                email = (results.output.content.get("owner_email") or "").strip()
                company_confirmed = any(
                    _result_mentions_company(r, company) for r in results.results
                )
                if _is_real_name(name) and company_confirmed:
                    li = next((r.url for r in results.results if "linkedin.com" in r.url), "")
                    return {
                        "owner_name": name,
                        "owner_title": title or "Owner",
                        "owner_email": email,
                        "owner_linkedin": li,
                        "owner_source": "exa_varied",
                    }
            time.sleep(0.3)
        except Exception as e:
            log.debug("Exa varied query failed for %s: %s", company, e)

    return None


# ─── Main enrichment function ──────────────────────────────────────────────────

def deep_enrich_lead(r: dict) -> dict | None:
    """
    Run all strategies for a single lead. Returns owner dict or None.
    Strategy order:
      1. Website scraping (About/Team/Contact pages)
      2. Directory search via Exa (HomeStars, YellowPages, BBB)
      3. Varied Exa queries
    """
    company = r.get("company_name", "")
    city = r.get("city") or r.get("province") or ""
    province = r.get("province") or ""
    website = r.get("website") or ""

    # Skip chain stores / supply stores that won't have individual owners
    skip_keywords = {"wolseley", "rona", "home depot", "plumbing supply"}
    if any(k in company.lower() for k in skip_keywords):
        log.info("  → skipping chain store: %s", company)
        return None

    log.info("  [1/3] Website scrape: %s", website or "(none)")
    result = scrape_website_for_owner(website, company)
    if result:
        return result

    log.info("  [2/3] Directory search (HomeStars/YP/BBB)")
    result = _exa_directory_search(company, city, province)
    if result:
        return result

    log.info("  [3/3] Varied Exa queries")
    result = _exa_varied_queries(company, city, province, website)
    return result


def deep_enrich_leads(leads: list[dict], workers: int = 6) -> list[dict]:
    """
    In-place deep enrichment for leads that still have no owner.
    Skips leads that already have owner_name set.
    workers > 1 enables parallel processing (default=6 for ~6x speed).
    """
    import threading
    from concurrent.futures import ThreadPoolExecutor, as_completed

    to_do = [r for r in leads if not r.get("owner_name") or r.get("owner_source") == "not found"]
    log.info("Deep enrichment: %d leads to process (%d already have owners) [workers=%d]",
             len(to_do), len(leads) - len(to_do), workers)

    counter_lock = threading.Lock()
    completed = [0]
    found_count = [0]

    def process_one(r):
        company = r.get("company_name", "")
        city = r.get("city", "")
        with counter_lock:
            completed[0] += 1
            idx = completed[0]
        log.info("[%d/%d] %s (%s)", idx, len(to_do), company[:50], city)

        result = deep_enrich_lead(r)
        if result:
            r.update(result)
            with counter_lock:
                found_count[0] += 1
            log.info("  FOUND: %s (%s) [%s]",
                     result["owner_name"], result["owner_title"], result["owner_source"])
        else:
            r.setdefault("owner_source", "not found")
            log.info("  not found: %s", company[:40])

    if workers <= 1:
        for r in to_do:
            process_one(r)
            time.sleep(0.4)
    else:
        with ThreadPoolExecutor(max_workers=workers) as ex:
            futures = {ex.submit(process_one, r): r for r in to_do}
            for fut in as_completed(futures):
                try:
                    fut.result()
                except Exception as e:
                    log.warning("Worker error: %s", e)

    log.info("Deep enrichment complete: found %d / %d", found_count[0], len(to_do))
    return leads
