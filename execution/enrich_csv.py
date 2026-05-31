"""
execution/enrich_csv.py
-----------------------
PURPOSE: Read a raw Google Maps CSV export, clean columns, enrich with owner
         info (leadsEnrichment → Exa), push to Google Sheet.
INPUTS:  --input   path to CSV file
         --title   Google Sheet title
         --industry  industry keyword for Exa search (default: plumber)
OUTPUTS: Google Sheet URL
"""

import argparse
import ast
import csv
import json
import logging
import sys
from pathlib import Path

from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent / ".env")

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s", datefmt="%H:%M:%S")
log = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Owner selection from leadsEnrichment blob
# ---------------------------------------------------------------------------
def _score_contact(p: dict) -> int:
    score = 0
    seniority = (p.get("seniority") or "").lower()
    title = (p.get("jobTitle") or "").lower()
    if seniority == "owner" or "owner" in title or "founder" in title:
        score += 100
    elif seniority == "c_suite" or any(w in title for w in ("president", "ceo", "chief")):
        score += 80
    elif seniority in ("director", "manager"):
        score += 40
    if p.get("email"):
        score += 20
    if p.get("linkedinProfile"):
        score += 5
    return score


def best_from_enrichment(raw: str) -> dict | None:
    """Parse the leadsEnrichment cell (JSON or Python literal) and pick best contact."""
    if not raw or raw.strip() in ("", "[]", "nan"):
        return None
    try:
        people = json.loads(raw)
    except Exception:
        try:
            people = ast.literal_eval(raw)
        except Exception:
            return None
    if not isinstance(people, list) or not people:
        return None
    top = sorted(people, key=_score_contact, reverse=True)[0]
    name = top.get("fullName") or f"{top.get('firstName','')} {top.get('lastName','')}".strip()
    return {
        "owner_name": name,
        "owner_title": top.get("jobTitle") or "",
        "owner_email": top.get("email") or "",
        "owner_linkedin": top.get("linkedinProfile") or "",
        "owner_source": "enrichment",
    }

# ---------------------------------------------------------------------------
# Opening hours formatter
# ---------------------------------------------------------------------------
def _fmt_hours(raw: str) -> str:
    if not raw or raw.strip() in ("", "{}", "nan"):
        return ""
    try:
        items = ast.literal_eval(raw)
        if isinstance(items, list):
            return "; ".join(f"{h.get('day','')}: {h.get('hours','')}" for h in items)
    except Exception:
        pass
    return ""

# ---------------------------------------------------------------------------
# CSV → clean lead dicts
# ---------------------------------------------------------------------------
def csv_to_leads(path: Path) -> list[dict]:
    leads = []
    with open(path, encoding="utf-8-sig") as fh:
        for row in csv.DictReader(fh):
            leads.append({
                "company_name":  row.get("Job Title") or row.get("title") or "",
                "category":      row.get("Categoryname") or row.get("categoryName") or "",
                "address":       row.get("Address") or row.get("address") or "",
                "city":          row.get("City") or row.get("city") or "",
                "province":      row.get("State") or row.get("state") or "",
                "phone":         row.get("Phone") or row.get("phone") or "",
                "website":       row.get("Website") or row.get("website") or "",
                "google_rating": row.get("Totalscore") or row.get("totalScore") or "",
                "review_count":  row.get("Reviewscount") or row.get("reviewsCount") or "",
                "opening_hours": _fmt_hours(row.get("Openinghours") or row.get("openingHours") or ""),
                # Owner fields — filled by enrichment
                "owner_name":    "",
                "owner_title":   "",
                "owner_email":   "",
                "owner_linkedin":"",
                "owner_source":  "not found",
                # Raw enrichment blob for processing
                "_enrichment":   row.get("Leadsenrichment") or row.get("leadsEnrichment") or "",
            })
    log.info("Parsed %d leads from %s", len(leads), path.name)
    return leads


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input",    required=True, help="Path to CSV file")
    parser.add_argument("--title",    required=True, help="Google Sheet title")
    parser.add_argument("--industry", default="plumber", help="Industry keyword for Exa search")
    args = parser.parse_args()

    csv_path = Path(args.input)
    if not csv_path.exists():
        log.error("CSV not found: %s", csv_path)
        sys.exit(1)

    # 1. Parse CSV
    leads = csv_to_leads(csv_path)

    # 2. Apply leadsEnrichment data where available
    enriched_count = 0
    for r in leads:
        blob = r.pop("_enrichment", "")
        owner = best_from_enrichment(blob)
        if owner:
            r.update(owner)
            enriched_count += 1

    log.info("%d leads enriched from leadsEnrichment data", enriched_count)

    # 3. Exa enrichment for remaining leads
    from enrich_exa import enrich_leads
    enrich_leads(leads, industry=args.industry)

    # 4. Save intermediate JSON
    tmp = Path(__file__).parent.parent / ".tmp"
    tmp.mkdir(exist_ok=True)
    slug = args.title.lower().replace(" ", "_").replace("—", "").replace("-", "")[:30]
    out_json = tmp / f"{slug}.json"
    # Remove internal fields before saving
    clean = [{k: v for k, v in r.items() if not k.startswith("_")} for r in leads]
    out_json.write_text(__import__("json").dumps(clean, indent=2, ensure_ascii=False), encoding="utf-8")
    log.info("Saved → %s", out_json)

    # 5. Push to Google Sheets
    import subprocess
    result = subprocess.run(
        ["python", "execution/push_to_gsheets.py", "--input", str(out_json), "--title", args.title],
        capture_output=False,
        text=True,
    )
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
