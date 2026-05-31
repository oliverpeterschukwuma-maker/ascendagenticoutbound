"""
execution/run_deep_enrich.py
----------------------------
PURPOSE: Run deep per-company enrichment on all "not found" leads in an
         existing enriched JSON file, then push the updated results to
         the specified Google Sheet.
USAGE:
    python execution/run_deep_enrich.py \
        --input .tmp/plumbing_canada__enriched.json \
        --title "Plumbing Canada — Enriched" \
        --sheet-id 1_SHEET_ID_HERE
"""

import argparse
import json
import logging
import subprocess
import sys
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


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True, help="Path to existing enriched JSON file")
    parser.add_argument("--title", required=True, help="Google Sheet title")
    parser.add_argument("--sheet-id", default="", help="Existing sheet ID to overwrite (optional)")
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        log.error("Input file not found: %s", input_path)
        sys.exit(1)

    # 1. Load existing enriched data
    leads = json.loads(input_path.read_text(encoding="utf-8"))
    before_count = sum(1 for r in leads if r.get("owner_name") and r.get("owner_source") != "not found")
    log.info("Loaded %d leads (%d already have owners, %d to enrich)",
             len(leads), before_count, len(leads) - before_count)

    # 2. Run deep enrichment
    sys.path.insert(0, str(Path(__file__).parent))
    from enrich_web import deep_enrich_leads
    deep_enrich_leads(leads)

    after_count = sum(1 for r in leads if r.get("owner_name") and r.get("owner_source") != "not found")
    log.info("Enrichment complete: %d → %d owners (+%d)", before_count, after_count, after_count - before_count)

    # 3. Save updated JSON (overwrite input file)
    clean = [{k: v for k, v in r.items() if not k.startswith("_")} for r in leads]
    input_path.write_text(json.dumps(clean, indent=2, ensure_ascii=False), encoding="utf-8")
    log.info("Saved → %s", input_path)

    # 4. Push to Google Sheet (update existing if sheet-id given, else create new)
    cmd = [
        sys.executable, "execution/push_to_gsheets.py",
        "--input", str(input_path),
        "--title", args.title,
    ]
    if args.sheet_id:
        cmd += ["--sheet-id", args.sheet_id]

    result = subprocess.run(cmd, capture_output=False, text=True)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
