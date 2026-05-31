"""
execution/enrich_exa.py
-----------------------
PURPOSE: Enrich leads with owner/contact info using Exa neural search.
         Uses category="people" + outputSchema for structured extraction.
         Works on any list of dicts with company_name, city, province fields.
INPUTS:  list of lead dicts (called by enrich_csv.py or standalone)
OUTPUTS: same list with owner_name, owner_title, owner_email, owner_linkedin,
         owner_source fields populated where found.
"""

import logging
import os
import re
import time
from pathlib import Path

from dotenv import load_dotenv
from exa_py import Exa

load_dotenv(Path(__file__).parent.parent / ".env")
log = logging.getLogger(__name__)

exa = Exa(api_key=os.getenv("EXA_API_KEY"))

# Schema Exa uses to extract structured owner data directly
OWNER_SCHEMA = {
    "type": "object",
    "properties": {
        "owner_name": {
            "type": "string",
            "description": (
                "Full name (First Last) of the person who owns or founded THIS SPECIFIC company. "
                "Must be a human name, not a company name, job title, or brand. "
                "If the search results mention a different company's founder/owner, return empty string. "
                "If uncertain or not found, return empty string — do not guess."
            ),
        },
        "owner_title": {
            "type": "string",
            "description": "Their role e.g. Owner, Founder, President, CEO. Empty string if name is empty.",
        },
    },
    "required": ["owner_name", "owner_title"],
}

JUNK_WORDS = {
    # web / UI noise
    "email", "contact", "book", "phone", "address", "facebook", "google",
    "reviews", "privacy", "policy", "click", "here", "learn", "more",
    "skip", "main", "content", "share", "edit", "remove", "profile",
    # business suffixes / generic words (company names, not people)
    "inc", "ltd", "llc", "corp", "co", "group", "team", "company",
    "enterprise", "holding", "holdings", "industries", "international",
    "solutions", "services", "systems", "technologies", "tech",
    # trades / industry words
    "plumbing", "heating", "hvac", "roofing", "mechanical", "refrigeration",
    "air", "repair", "installation", "contractor", "electric", "electrical",
    # geography
    "ontario", "canada", "quebec", "alberta", "british", "columbia",
    "calgary", "toronto", "ottawa", "montreal", "vancouver",
    # common false positives
    "the", "and", "manager", "business", "founder", "principle",
    "frostfire", "icemasters", "aquaman", "pjb",
}


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


def _result_mentions_company(result, company: str) -> bool:
    """Check that a result is actually about THIS company, not a random other business."""
    company_words = {w.lower() for w in re.split(r'\W+', company) if len(w) > 3
                     and w.lower() not in {"plumbing","heating","hvac","roofing","mechanical",
                                           "services","solutions","canada","inc","ltd"}}
    if not company_words:
        return True  # too generic to filter — allow
    haystack = " ".join([
        result.title or "",
        result.url or "",
        " ".join(result.highlights or []),
    ]).lower()
    return any(w in haystack for w in company_words)


def enrich_owner(company: str, city: str, industry: str = "plumber",
                 website: str = "") -> dict | None:
    """
    Search Exa for the owner/founder of a specific company.
    Returns dict with owner fields or None if not found.

    Key safeguard: results are validated to actually mention the target company
    before accepting the owner name, preventing cross-company hallucinations.
    """
    query = f"owner founder president of {company} {industry} in {city} Canada"
    system = (
        f'You are looking ONLY for the owner or founder of "{company}" located in {city}, Canada. '
        "If the search results are about a different business, return empty strings. "
        "Return a real human name (First Last). Never return a company name, brand, or job title as the name. "
        "If you are not certain, return empty strings."
    )

    try:
        # Pass 1: website-scoped search (most precise — only if we have the domain)
        from urllib.parse import urlparse
        domain = urlparse(website).netloc.replace("www.", "") if website else ""
        if domain:
            try:
                scoped = exa.search(
                    query,
                    type="auto",
                    num_results=3,
                    include_domains=[domain],
                    output_schema=OWNER_SCHEMA,
                    system_prompt=system,
                    contents={"highlights": True},
                )
                if hasattr(scoped, "output") and scoped.output and scoped.output.content:
                    name = (scoped.output.content.get("owner_name") or "").strip()
                    title = (scoped.output.content.get("owner_title") or "").strip()
                    if _is_real_name(name):
                        return {"owner_name": name, "owner_title": title or "Owner",
                                "owner_email": "", "owner_linkedin": "", "owner_source": "exa_site"}
            except Exception:
                pass  # domain-scoped search failed — fall through

        # Pass 2: people category + outputSchema
        results = exa.search(
            query,
            type="auto",
            category="people",
            num_results=5,
            output_schema=OWNER_SCHEMA,
            system_prompt=system,
            contents={"highlights": True},
        )

        # Structured output — only accept if at least one result mentions the company
        if hasattr(results, "output") and results.output and results.output.content:
            name  = (results.output.content.get("owner_name") or "").strip()
            title = (results.output.content.get("owner_title") or "").strip()
            company_confirmed = any(_result_mentions_company(r, company) for r in results.results)
            if _is_real_name(name) and company_confirmed:
                li = next((r.url for r in results.results if "linkedin.com" in r.url), "")
                return {"owner_name": name, "owner_title": title or "Owner",
                        "owner_email": "", "owner_linkedin": li, "owner_source": "exa"}

        # Highlight fallback — only from results that mention this company
        for result in results.results:
            if not _result_mentions_company(result, company):
                continue
            for text in [result.title or "", *(result.highlights or [])]:
                name, title = _extract_name_from_text(text)
                if name:
                    li = result.url if "linkedin.com" in result.url else ""
                    return {"owner_name": name, "owner_title": title,
                            "owner_email": "", "owner_linkedin": li, "owner_source": "exa"}

    except Exception as e:
        log.debug("Exa people search failed for %s: %s", company, e)

    # Pass 3: quoted company name general search
    try:
        results = exa.search(
            f'"{company}" {city} owner OR founder',
            type="auto",
            num_results=3,
            contents={"highlights": True},
        )
        for result in results.results:
            if not _result_mentions_company(result, company):
                continue
            for text in [result.title or "", *(result.highlights or [])]:
                name, title = _extract_name_from_text(text)
                if name:
                    li = result.url if "linkedin.com" in result.url else ""
                    return {"owner_name": name, "owner_title": title,
                            "owner_email": "", "owner_linkedin": li, "owner_source": "exa_general"}
    except Exception as e:
        log.debug("Exa general search failed for %s: %s", company, e)

    return None


# ---------------------------------------------------------------------------
# Text parsing fallback
# ---------------------------------------------------------------------------
_PATTERNS = [
    re.compile(r"([A-Z][a-z]+(?:[ ][A-Z][a-z''\-]+){1,3})\s*[-–—|,]\s*(?:owner|founder|co-founder|president|ceo|proprietor|principal)", re.IGNORECASE),
    re.compile(r"(?:owner|founder|co-founder|president|ceo|proprietor|principal)[:\s\-–—]+([A-Z][a-z]+(?:[ ][A-Z][a-z''\-]+){1,3})", re.IGNORECASE),
]
_TITLE_RE = re.compile(r"\b(owner|founder|co-founder|president|ceo|proprietor|principal|operator)\b", re.IGNORECASE)


def _extract_name_from_text(text: str) -> tuple[str, str]:
    for pat in _PATTERNS:
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
                return name, tm.group(0).title() if tm else "Owner"
    return "", ""


# ---------------------------------------------------------------------------
# Batch enrichment entry point
# ---------------------------------------------------------------------------

def enrich_leads(leads: list[dict], industry: str = "plumber", workers: int = 5) -> list[dict]:
    """
    Parallel in-place enrichment via Exa.
    Runs `workers` companies simultaneously — ~5x faster than sequential.
    """
    import threading
    from concurrent.futures import ThreadPoolExecutor, as_completed

    to_do = [r for r in leads if not r.get("owner_name")]
    log.info("Enriching %d leads via Exa (%d workers, %d already have owners)",
             len(to_do), workers, len(leads) - len(to_do))

    found = 0
    lock = threading.Lock()
    total = len(to_do)

    def process_one(args):
        nonlocal found
        idx, r = args
        company = r.get("company_name", "")
        city = r.get("city") or r.get("province") or "Canada"
        log.info("[%d/%d] %s", idx, total, company[:50])

        result = enrich_owner(company, city, industry, website=r.get("website", ""))
        if result:
            r.update(result)
            with lock:
                found += 1
            log.info("  -> %s (%s) [%s]", result["owner_name"], result["owner_title"], result["owner_source"])
        else:
            r.setdefault("owner_source", "not found")
            log.info("  -> not found")
        time.sleep(0.15)  # light rate-limit buffer per worker

    with ThreadPoolExecutor(max_workers=workers) as ex:
        futures = [ex.submit(process_one, (i + 1, r)) for i, r in enumerate(to_do)]
        for fut in as_completed(futures):
            fut.result()

    log.info("Exa found %d / %d owners", found, total)
    return leads
