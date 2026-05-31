"""
execution/scrape_leads.py
--------------------------
PURPOSE: Scrape Google Maps leads using gosom/google-maps-scraper (open-source, Docker).
         Replaces Apify. Runs 25-lead test -> quality check (>=80%) -> full run.
DIRECTIVE: directives/scrape_leads.md
INPUTS:  --industry, --location, --count
OUTPUTS: .tmp/leads.json, .tmp/leads_test.json, .tmp/quality_report.json
REQUIRES: Docker installed and running.
          Pull image once: docker pull gosom/google-maps-scraper
"""

import argparse
import json
import logging
import os
import sys
from pathlib import Path

# Force utf-8 for stdout on Windows to prevent UnicodeEncodeError
if sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

from dotenv import load_dotenv

# ---------------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------------

load_dotenv(Path(__file__).parent.parent / ".env")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)

TEST_COUNT = 25
QUALITY_THRESHOLD = 0.80

TMP_DIR = Path(__file__).parent.parent / ".tmp"
TMP_DIR.mkdir(exist_ok=True)

# Fields checked for industry matching (in order)
INDUSTRY_FIELDS = ["categoryName", "categories", "title"]

# ---------------------------------------------------------------------------
# Province code -> full name
# ---------------------------------------------------------------------------
PROVINCE_MAP = {
    "AB": "Alberta", "BC": "British Columbia", "MB": "Manitoba",
    "NB": "New Brunswick", "NL": "Newfoundland and Labrador",
    "NS": "Nova Scotia", "NT": "Northwest Territories", "NU": "Nunavut",
    "ON": "Ontario", "PE": "Prince Edward Island", "QC": "Quebec",
    "SK": "Saskatchewan", "YT": "Yukon",
}

# ---------------------------------------------------------------------------
# Category normalization
# gosom returns raw Google Maps category strings; map to consistent values
# so the quality gate synonym check works correctly.
# ---------------------------------------------------------------------------
CATEGORY_NORMALIZER = {
    "hvac contractor":             "HVAC contractor",
    "air conditioning contractor": "HVAC contractor",
    "air conditioning repair service": "HVAC contractor",
    "furnace repair service":      "HVAC contractor",
    "heating contractor":          "HVAC contractor",
    "heating equipment supplier":  "HVAC contractor",
    "mechanical contractor":       "HVAC contractor",
    "refrigeration service":       "HVAC contractor",
    "plumbing contractor":         "Plumber",
    "drainage service":            "Plumber",
    "water softening equipment supplier": "Plumber",
    "roofing contractor":          "Roofing contractor",
    "roof consultant":             "Roofing contractor",
    "siding contractor":           "Roofing contractor",
}


def normalize_category(raw: str) -> str:
    return CATEGORY_NORMALIZER.get(raw.lower().strip(), raw)


# ---------------------------------------------------------------------------
# Address parsing helpers (fallback when complete_address field is missing)
# ---------------------------------------------------------------------------

def _parse_city(address: str) -> str:
    """Extract city from '123 Main St, Calgary, AB T2A 6K8, Canada'"""
    parts = [p.strip() for p in address.split(",")]
    return parts[1] if len(parts) >= 3 else ""


def _parse_state(address: str) -> str:
    """Extract province name from address string."""
    parts = [p.strip() for p in address.split(",")]
    if len(parts) >= 3:
        # 'AB T2A 6K8' -> 'Alberta'
        code = parts[2].split()[0].upper() if parts[2].split() else ""
        return PROVINCE_MAP.get(code, parts[2])
    return ""


# ---------------------------------------------------------------------------
# Docker path helper (Windows needs special treatment)
# ---------------------------------------------------------------------------

def _docker_path(host_path: Path) -> str:
    """Convert a Windows path to Docker-compatible mount path."""
    p = str(host_path).replace("\\", "/")
    if platform.system() == "Windows" and len(p) >= 2 and p[1] == ":":
        # C:/Users/... -> /c/Users/...
        p = "/" + p[0].lower() + p[2:]
    return p


# ---------------------------------------------------------------------------
# Core scraper — replaces run_apify()
# ---------------------------------------------------------------------------


# Major Canadian cities — spread queries across these for national coverage
CANADA_CITIES = [
    "Toronto Ontario", "Calgary Alberta", "Vancouver British Columbia",
    "Ottawa Ontario", "Edmonton Alberta", "Winnipeg Manitoba",
    "Quebec City Quebec", "Hamilton Ontario", "Halifax Nova Scotia",
    "London Ontario", "Kelowna British Columbia", "Victoria British Columbia",
    "Saskatoon Saskatchewan", "Regina Saskatchewan", "Kitchener Ontario",
    "Windsor Ontario", "Barrie Ontario", "Sudbury Ontario",
    "Sherbrooke Quebec", "Saguenay Quebec",
]


def run_scraper(query: str, count: int, timeout_secs: int = 600) -> list[dict]:
    """
    Multi-city parallel scraper.
    All cities run simultaneously — Phase 1 (URL collection) and Phase 2
    (detail extraction) are both fully parallel across cities.
    """
    import sys
    sys.path.insert(0, str(Path(__file__).parent))
    from scrape_gmaps import scrape_google_maps_multi

    industry = query.split(" in ")[0].strip()

    # Spread count across cities
    per_city = max(5, count // len(CANADA_CITIES) + 1)
    cities_needed = min(len(CANADA_CITIES), -(-count // per_city))
    cities = CANADA_CITIES[:cities_needed]

    # Fetch generously per city — pre-dedup in Phase 1 (by name_hint) eliminates
    # cross-city duplicates before any detail pages are loaded, so overshooting is cheap.
    fetch_per_city = max(25, per_city * 3)
    city_queries = [(f"{industry} in {city} Canada", fetch_per_city) for city in cities]

    log.info("Parallel multi-city scrape: %d cities x ~%d each (need %d total)",
             len(cities), fetch_per_city, count)

    try:
        raw = scrape_google_maps_multi(city_queries)
    except Exception as e:
        log.error("Multi-city scrape failed: %s", e)
        raw = []

    # Normalize categories and deduplicate
    seen_titles = set()
    all_results = []
    for place in raw:
        place["categoryName"] = normalize_category(place.get("categoryName", ""))
        place["categories"] = [place["categoryName"]] if place["categoryName"] else []
        key = place.get("title", "").lower().strip()
        if key and key not in seen_titles:
            seen_titles.add(key)
            all_results.append(place)

    log.info("Parallel scrape done: %d unique results (requested %d)",
             len(all_results), count)
    return all_results[:count]


# ---------------------------------------------------------------------------
# Input builder — now returns a query string instead of an Apify payload dict
# ---------------------------------------------------------------------------

def build_input(industry: str, job_title: str, location: str, count: int,
                email_status=None, label: str = "", **kwargs) -> str:
    """
    Build the search query string for gosom.
    job_title and email_status are legacy Apify params — ignored here.
    """
    parts = [industry]
    if kwargs.get("keywords"):
        parts.append(kwargs["keywords"])
    if location:
        parts.append(f"in {location}")
    return " ".join(parts)


# ---------------------------------------------------------------------------
# Industry synonym map
# ---------------------------------------------------------------------------
INDUSTRY_SYNONYMS = {
    "hvac": [
        "hvac", "air conditioning", "heating", "ventilation", "furnace",
        "heat pump", "refrigeration", "ac repair", "boiler", "ductwork",
        "mechanical contractor",
    ],
    "roofing": [
        "roofing", "roofer", "roof repair", "roof contractor", "shingles",
        "flat roof", "metal roof", "gutters", "siding", "exteriors",
    ],
    "plumbing": [
        "plumbing", "plumber", "pipe", "drain", "sewer", "water heater",
        "gasfitter", "gas fitter", "gas fitting",
    ],
}


def _synonyms_for(target: str) -> list:
    t = target.lower()
    if t in INDUSTRY_SYNONYMS:
        return INDUSTRY_SYNONYMS[t]
    for key, syns in INDUSTRY_SYNONYMS.items():
        if t in key or key in t:
            return syns
    return [t]


# ---------------------------------------------------------------------------
# Quality gate
# ---------------------------------------------------------------------------

def _extract_industry(lead: dict) -> str:
    for field in INDUSTRY_FIELDS:
        val = lead.get(field)
        if val:
            return (", ".join(str(v) for v in val) if isinstance(val, list) else str(val)).lower()
    return ""


def verify_quality(leads: list, target: str) -> tuple:
    """Returns (rate, in_scope_count, detail_list)."""
    synonyms = _synonyms_for(target)
    details, in_scope = [], 0
    for lead in leads:
        found = _extract_industry(lead)
        matched = bool(found) and any(syn in found for syn in synonyms)
        if matched:
            in_scope += 1
        name = lead.get("title", "")
        details.append({"name": name, "industry_found": found or "(not set)", "in_scope": matched})
    return (in_scope / len(leads) if leads else 0.0), in_scope, details


# ---------------------------------------------------------------------------
# Main workflow
# ---------------------------------------------------------------------------

def run_workflow(industry, job_title, location, count, email_status, keywords=None):

    # ── STEP 1: Test run ──────────────────────────────────────────────────
    log.info("=" * 55)
    log.info("STEP 1 -- Test run (%d leads)", TEST_COUNT)
    log.info("=" * 55)
    test_query = build_input(industry, job_title, location, TEST_COUNT, email_status,
                             "Test Run", keywords=keywords)
    log.info("Query: %s", test_query)
    test_leads = run_scraper(test_query, count=TEST_COUNT, timeout_secs=300)
    log.info("Received %d test leads", len(test_leads))
    (TMP_DIR / "leads_test.json").write_text(
        json.dumps(test_leads, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    # ── STEP 2: Quality check ─────────────────────────────────────────────
    log.info("=" * 55)
    log.info("STEP 2 -- Industry quality check (target: '%s')", industry)
    log.info("=" * 55)
    rate, in_scope, details = verify_quality(test_leads, industry)
    log.info("Match rate: %d / %d = %.0f%%", in_scope, len(test_leads), rate * 100)

    quality_report = {
        "target_industry": industry,
        "test_count": len(test_leads),
        "in_scope_count": in_scope,
        "match_rate_pct": round(rate * 100, 1),
        "threshold_pct": QUALITY_THRESHOLD * 100,
        "passed": rate >= QUALITY_THRESHOLD,
        "lead_details": details,
    }
    (TMP_DIR / "quality_report.json").write_text(
        json.dumps(quality_report, indent=2), encoding="utf-8"
    )

    if rate < QUALITY_THRESHOLD:
        log.warning("QUALITY FAILED -- %.0f%% < %.0f%% threshold", rate * 100, QUALITY_THRESHOLD * 100)
        print(f"\nQuality check failed: only {rate*100:.0f}% of leads match '{industry}'")
        print(f"   {in_scope}/{len(test_leads)} leads were in scope.")
        print("   Fix: adjust --industry phrasing, add --keywords, or check CATEGORY_NORMALIZER map.")
        print("   Report: .tmp/quality_report.json\n")
        sys.exit(2)

    log.info("QUALITY PASSED -- %.0f%% >= %.0f%%", rate * 100, QUALITY_THRESHOLD * 100)

    # ── STEP 3: Full run ──────────────────────────────────────────────────
    log.info("=" * 55)
    log.info("STEP 3 -- Full run (%d leads)", count)
    log.info("=" * 55)
    full_query = build_input(industry, job_title, location, count, email_status,
                             f"{industry} Leads", keywords=keywords)
    full_leads = run_scraper(full_query, count=count, timeout_secs=600)
    log.info("Received %d full leads", len(full_leads))

    output_path = TMP_DIR / "leads.json"
    output_path.write_text(
        json.dumps(full_leads, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    # Count how many already have emails (from gosom's -email flag)
    with_email = sum(1 for r in full_leads if r.get("emails"))
    print(f"\n{'='*55}")
    print(f"Scrape complete!")
    print(f"   Industry  : {industry}")
    print(f"   Leads     : {len(full_leads)}")
    print(f"   Quality   : {rate*100:.0f}% in scope")
    print(f"   Emails    : {with_email} businesses have website emails")
    print(f"   File      : {output_path}")
    print(f"{'='*55}\n")
    print("Next step: run execution/enrich_csv.py or push_to_gsheets.py")


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args():
    p = argparse.ArgumentParser(
        description="Scrape Google Maps leads via gosom Docker scraper + quality gate."
    )
    p.add_argument("--industry",  required=True, help='Target industry e.g. "plumber"')
    p.add_argument("--location",  default="Canada", help='Location e.g. "Canada" (default: Canada)')
    p.add_argument("--count",     type=int, default=100, help="Full-run lead count (default: 100)")
    p.add_argument("--keywords",  default="", help='Extra keywords appended to search query')
    # Legacy args kept for compatibility with run_canadian_campaign.py
    p.add_argument("--job_title", default="", help="(unused — legacy Apify param)")
    p.add_argument("--email_status", nargs="+", default=["validated"],
                   help="(unused — legacy Apify param)")
    return p.parse_args()


if __name__ == "__main__":
    args = parse_args()
    run_workflow(
        industry=args.industry,
        job_title=args.job_title,
        location=args.location,
        count=args.count,
        email_status=args.email_status,
        keywords=args.keywords,
    )
