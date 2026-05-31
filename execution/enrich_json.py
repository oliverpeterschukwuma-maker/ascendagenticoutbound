"""
execution/enrich_json.py
------------------------
PURPOSE: Enrich raw Playwright-scraped leads.json with owner data (Exa + deep web),
         then push to Google Sheets.
         Bridges the gap between scrape_leads.py JSON output and the enrichment pipeline
         which expects company_name / province fields.
INPUTS:  --input   path to raw leads JSON (default: .tmp/leads.json)
         --title   Google Sheet title
         --sheet-id  existing sheet ID to overwrite (optional)
         --industry  industry keyword for Exa search (default: plumber)
         --skip-deep  skip deep web enrichment (faster, less coverage)
OUTPUTS: .tmp/leads_enriched.json + Google Sheet URL
"""

import argparse
import json
import logging
import sys
import subprocess
from pathlib import Path

from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent / ".env")

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)

TMP_DIR = Path(__file__).parent.parent / ".tmp"


# ---------------------------------------------------------------------------
# Field conversion: scraper JSON -> enrichment format
# ---------------------------------------------------------------------------

def _fmt_hours(hours: list) -> str:
    """Convert openingHours list of dicts to a flat string."""
    if not hours or not isinstance(hours, list):
        return ""
    return "; ".join(
        f"{h.get('day', '')}: {h.get('hours', '')}"
        for h in hours
        if h.get("day")
    )


def scraper_to_enrichment(lead: dict) -> dict:
    """
    Convert a raw scraper lead dict (title, state, totalScore...) to
    the enrichment pipeline format (company_name, province, google_rating...).
    """
    return {
        "company_name":   lead.get("title", ""),
        "category":       lead.get("categoryName", ""),
        "address":        lead.get("address", ""),
        "city":           lead.get("city", ""),
        "province":       lead.get("state", ""),
        "phone":          lead.get("phone", ""),
        "website":        lead.get("website", ""),
        "google_rating":  str(lead.get("totalScore") or ""),
        "review_count":   str(lead.get("reviewsCount") or ""),
        "opening_hours":  _fmt_hours(lead.get("openingHours", [])),
        # Owner fields — to be filled by enrichment
        "owner_name":     "",
        "owner_title":    "",
        "owner_email":    "",
        "owner_linkedin": "",
        "owner_source":   "not found",
        # Keep enrichment blob in case it ever has data
        "_enrichment":    json.dumps(lead.get("leadsEnrichment", [])),
    }


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Enrich Playwright leads JSON → owner names → Google Sheet"
    )
    parser.add_argument("--input",     default=".tmp/leads.json",
                        help="Raw leads JSON from scrape_leads.py (default: .tmp/leads.json)")
    parser.add_argument("--title",     required=True, help="Google Sheet title")
    parser.add_argument("--sheet-id",  default="", help="Existing sheet ID to update in-place")
    parser.add_argument("--industry",  default="plumber",
                        help="Industry keyword for Exa search (default: plumber)")
    parser.add_argument("--skip-deep", action="store_true",
                        help="Skip deep web enrichment (Exa only, faster)")
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        log.error("Input file not found: %s", input_path)
        sys.exit(1)

    # ── Load raw scraped leads ───────────────────────────────────────────
    raw = json.loads(input_path.read_text(encoding="utf-8"))
    log.info("Loaded %d raw leads from %s", len(raw), input_path)

    # Detect if already in enrichment format (has company_name) or scraper format (has title)
    if raw and "title" in raw[0] and "company_name" not in raw[0]:
        log.info("Converting scraper format (title/state) -> enrichment format (company_name/province)")
        leads = [scraper_to_enrichment(r) for r in raw]
    else:
        log.info("Already in enrichment format — using as-is")
        leads = raw

    # ── Stage 1: Exa enrichment ──────────────────────────────────────────
    log.info("=" * 55)
    log.info("STAGE 1 -- Exa neural search enrichment")
    log.info("=" * 55)
    sys.path.insert(0, str(Path(__file__).parent))
    from enrich_exa import enrich_leads
    enrich_leads(leads, industry=args.industry)

    exa_found = sum(1 for r in leads if r.get("owner_name") and r.get("owner_source") != "not found")
    log.info("After Exa: %d / %d owners found", exa_found, len(leads))

    # ── Stage 2: Deep web enrichment ─────────────────────────────────────
    if not args.skip_deep:
        still_needed = [r for r in leads if not r.get("owner_name") or r.get("owner_source") == "not found"]
        if still_needed:
            log.info("=" * 55)
            log.info("STAGE 2 -- Deep web enrichment (%d leads without owners)", len(still_needed))
            log.info("=" * 55)
            from enrich_web import deep_enrich_leads
            deep_enrich_leads(leads)
        else:
            log.info("All owners found via Exa — skipping deep enrichment")

    # ── Final counts ─────────────────────────────────────────────────────
    total_found = sum(1 for r in leads if r.get("owner_name") and r.get("owner_source") != "not found")
    log.info("=" * 55)
    log.info("ENRICHMENT COMPLETE: %d / %d owners found (%.0f%%)",
             total_found, len(leads), total_found / len(leads) * 100 if leads else 0)
    log.info("=" * 55)

    # ── Save enriched JSON ────────────────────────────────────────────────
    out_path = TMP_DIR / "leads_enriched.json"
    clean = [{k: v for k, v in r.items() if not k.startswith("_")} for r in leads]
    out_path.write_text(json.dumps(clean, indent=2, ensure_ascii=False), encoding="utf-8")
    log.info("Saved -> %s", out_path)

    # ── Push to Google Sheet ──────────────────────────────────────────────
    log.info("Pushing to Google Sheets...")
    cmd = [
        sys.executable, "execution/push_to_gsheets.py",
        "--input", str(out_path),
        "--title", args.title,
    ]
    if args.sheet_id:
        cmd += ["--sheet-id", args.sheet_id]

    result = subprocess.run(cmd, capture_output=False, text=True)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
