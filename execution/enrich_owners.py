"""
execution/enrich_owners.py
--------------------------
PURPOSE: Extract best owner/contact from leadsEnrichment data; scrape company websites
         for the rest. Strips irrelevant columns. Outputs .tmp/leads_enriched.json.
INPUTS:  --input  (.tmp/leads.json)
         --output (.tmp/leads_enriched.json)
OUTPUTS: .tmp/leads_enriched.json  — cleaned leads with owner columns added
"""

import argparse
import json
import logging
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

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
# Column selection — only these survive into the output
# ---------------------------------------------------------------------------
KEEP_COLS = [
    "company_name", "category", "address", "city", "province",
    "phone", "website", "google_rating", "review_count",
    "owner_name", "owner_title", "owner_email", "owner_linkedin", "owner_source",
    "opening_hours",
]

# ---------------------------------------------------------------------------
# Owner selection from leadsEnrichment
# ---------------------------------------------------------------------------

OWNER_TITLES = re.compile(
    r"\b(owner|founder|co-founder|president|ceo|chief executive|proprietor|director)\b",
    re.IGNORECASE,
)

def _score_contact(person: dict) -> int:
    """Higher = better. Pick the most senior contact with most data."""
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
    ranked = sorted(enrichment, key=_score_contact, reverse=True)
    top = ranked[0]
    return {
        "owner_name": top.get("fullName") or f"{top.get('firstName', '')} {top.get('lastName', '')}".strip(),
        "owner_title": top.get("jobTitle") or "",
        "owner_email": top.get("email") or "",
        "owner_linkedin": top.get("linkedinProfile") or "",
        "owner_source": "enrichment",
    }

# ---------------------------------------------------------------------------
# Website scraping fallback
# ---------------------------------------------------------------------------

OWNER_PAGE_KEYWORDS = re.compile(r"\b(about|team|staff|contact|who we are|our story|meet)\b", re.IGNORECASE)
SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "Mozilla/5.0 (compatible; LeadEnricher/1.0)"})


def _fetch(url: str, timeout: int = 6) -> str | None:
    try:
        r = SESSION.get(url, timeout=timeout, allow_redirects=True)
        r.raise_for_status()
        return r.text
    except Exception:
        return None


def _find_owner_in_html(html: str) -> dict | None:
    """Scan HTML for owner/founder name near owner-title keywords."""
    soup = BeautifulSoup(html, "html.parser")
    text = soup.get_text(" ", strip=True)

    # Pattern: "Owner: John Smith" or "John Smith - Owner" or "Owner | John Smith"
    patterns = [
        r"(?:owner|founder|president|ceo|proprietor)[:\s|–\-]+([A-Z][a-z]+(?:\s[A-Z][a-z]+)+)",
        r"([A-Z][a-z]+(?:\s[A-Z][a-z]+)+)\s*[,\-|–]+\s*(?:owner|founder|president|ceo|proprietor)",
    ]
    for pat in patterns:
        m = re.search(pat, text, re.IGNORECASE)
        if m:
            name = m.group(1).strip()
            # Sanity: must be 2-4 words, no digits
            parts = name.split()
            if 2 <= len(parts) <= 4 and all(p.isalpha() for p in parts):
                # Guess title from match context
                full_match = m.group(0)
                title_match = re.search(r"owner|founder|president|ceo|proprietor", full_match, re.IGNORECASE)
                title = title_match.group(0).title() if title_match else "Owner"
                return {"owner_name": name, "owner_title": title, "owner_email": "", "owner_linkedin": "", "owner_source": "website"}

    # Also look for mailto: links with a name nearby
    for a in soup.find_all("a", href=re.compile(r"^mailto:")):
        email = a["href"].replace("mailto:", "").strip()
        if not email or "@" not in email:
            continue
        # Look for a name in the surrounding text
        parent_text = a.find_parent().get_text(" ", strip=True) if a.find_parent() else ""
        m = re.search(r"([A-Z][a-z]+(?:\s[A-Z][a-z]+)+)", parent_text)
        if m:
            return {"owner_name": m.group(1), "owner_title": "Contact", "owner_email": email, "owner_linkedin": "", "owner_source": "website"}

    return None


def scrape_website_for_owner(website: str) -> dict | None:
    if not website:
        return None

    base = f"{urlparse(website).scheme}://{urlparse(website).netloc}"

    # 1. Try homepage first
    html = _fetch(website)
    if html:
        result = _find_owner_in_html(html)
        if result:
            return result

        # 2. Find promising sub-pages (about, team, contact)
        soup = BeautifulSoup(html, "html.parser")
        candidate_links = []
        for a in soup.find_all("a", href=True):
            href = a["href"]
            text = a.get_text(" ", strip=True)
            if OWNER_PAGE_KEYWORDS.search(href) or OWNER_PAGE_KEYWORDS.search(text):
                full_url = urljoin(base, href)
                if urlparse(full_url).netloc == urlparse(base).netloc:
                    candidate_links.append(full_url)

        # Try up to 2 sub-pages
        for link in candidate_links[:2]:
            sub_html = _fetch(link)
            if sub_html:
                result = _find_owner_in_html(sub_html)
                if result:
                    return result

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
    parser.add_argument("--output", default=".tmp/leads_enriched.json")
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.is_absolute():
        input_path = Path(__file__).parent.parent / input_path

    leads = json.loads(input_path.read_text(encoding="utf-8"))
    log.info("Loaded %d leads from %s", len(leads), input_path)

    results = []
    from_enrichment = 0
    from_website = 0
    not_found = 0

    for i, lead in enumerate(leads, 1):
        name = lead.get("title", f"Lead {i}")
        enrichment = lead.get("leadsEnrichment") or []

        # Try enrichment data first
        owner = best_contact_from_enrichment(enrichment)
        if owner:
            from_enrichment += 1
            log.info("[%d/%d] %-40s → enrichment: %s (%s)", i, len(leads), name[:40], owner["owner_name"], owner["owner_title"])
        else:
            # Fall back to website scraping
            website = lead.get("website") or ""
            if website:
                owner = scrape_website_for_owner(website)
                time.sleep(0.3)  # polite delay between requests

            if owner:
                from_website += 1
                log.info("[%d/%d] %-40s → website: %s", i, len(leads), name[:40], owner["owner_name"])
            else:
                not_found += 1
                log.info("[%d/%d] %-40s → not found", i, len(leads), name[:40])

        results.append(flatten_lead(lead, owner))

    output_path = Path(args.output)
    if not output_path.is_absolute():
        output_path = Path(__file__).parent.parent / output_path
    output_path.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")

    log.info("=" * 55)
    log.info("Done. From enrichment: %d | From website: %d | Not found: %d", from_enrichment, from_website, not_found)
    log.info("Saved %d records → %s", len(results), output_path)


if __name__ == "__main__":
    main()
