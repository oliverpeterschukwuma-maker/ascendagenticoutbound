"""
execution/template.py
---------------------
PURPOSE: [One sentence describing what this script does]
DIRECTIVE: directives/[relevant_directive].md
INPUTS:  [List of CLI args or input files]
OUTPUTS: [What gets written — .tmp/ file, Google Sheet, etc.]
"""

import argparse
import os
import sys
import json
import logging
from pathlib import Path
from dotenv import load_dotenv

# ---------------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------------

# Load environment variables from .env in repo root
load_dotenv(Path(__file__).parent.parent / ".env")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)

TMP_DIR = Path(__file__).parent.parent / ".tmp"
TMP_DIR.mkdir(exist_ok=True)


# ---------------------------------------------------------------------------
# Core logic
# ---------------------------------------------------------------------------

def run(arg1: str, arg2: str) -> dict:
    """
    Main logic for this script.

    Args:
        arg1: Description of arg1
        arg2: Description of arg2

    Returns:
        A dict with result data
    """
    log.info("Starting %s with arg1=%s", __file__, arg1)

    # TODO: implement core logic here

    result = {"status": "ok", "data": []}
    return result


# ---------------------------------------------------------------------------
# Output
# ---------------------------------------------------------------------------

def save_output(result: dict, output_path: Path) -> None:
    """Save result to a JSON file in .tmp/"""
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    log.info("Output saved to %s", output_path)


# ---------------------------------------------------------------------------
# CLI entrypoint
# ---------------------------------------------------------------------------

def parse_args():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--arg1", required=True, help="Description of arg1")
    parser.add_argument("--arg2", default="default_value", help="Description of arg2")
    parser.add_argument(
        "--output",
        default=str(TMP_DIR / "output.json"),
        help="Path to write JSON output (default: .tmp/output.json)",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    result = run(args.arg1, args.arg2)
    save_output(result, Path(args.output))
    log.info("Done.")
