"""
execution/push_to_gsheets.py
-----------------------------
PURPOSE: Read .tmp/leads.json and push to a new Google Sheet. Returns shareable link.
DIRECTIVE: directives/scrape_leads.md
INPUTS:  --input (.tmp/leads.json), --title (sheet name)
OUTPUTS: Google Sheet URL printed to stdout
"""

import argparse
import json
import logging
import os
import sys
from datetime import date
from pathlib import Path

# Force utf-8 for stdout on Windows to prevent UnicodeEncodeError with emojis
if sys.stdout.encoding.lower() != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

from dotenv import load_dotenv
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

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

REPO_ROOT = Path(__file__).parent.parent
CREDS_FILE = REPO_ROOT / os.getenv("GOOGLE_CLIENT_SECRETS_FILE", "credentials.json")
TOKEN_FILE = REPO_ROOT / os.getenv("GOOGLE_TOKEN_FILE", "token.json")
TMP_DIR = REPO_ROOT / ".tmp"

# Scopes needed: create sheets + share via Drive
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
]

# Preferred column order — any unlisted fields are appended alphabetically
PREFERRED_COLS = [
    "firstName", "lastName", "name", "title", "email", "phone",
    "linkedinUrl", "organization_name", "organization_industry",
    "city", "state", "country", "organization_website",
    "organization_employee_count",
]


# ---------------------------------------------------------------------------
# Auth
# ---------------------------------------------------------------------------

def get_credentials() -> Credentials:
    """Return valid Google OAuth credentials, refreshing or re-authorizing as needed."""
    creds = None

    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            try:
                log.info("Refreshing access token…")
                creds.refresh(Request())
            except Exception:
                log.info("Token refresh failed (revoked/expired) — re-authorizing…")
                creds = None
        if not creds or not creds.valid:
            if not CREDS_FILE.exists():
                raise FileNotFoundError(
                    f"credentials.json not found at {CREDS_FILE}.\n"
                    "Download it from Google Cloud Console and place it in the repo root."
                )
            log.info("Opening browser for Google OAuth…")
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)

        TOKEN_FILE.write_text(creds.to_json())
        log.info("Token saved to %s", TOKEN_FILE)

    return creds


# ---------------------------------------------------------------------------
# Data helpers
# ---------------------------------------------------------------------------

def build_columns(leads: list) -> list:
    """Return ordered column names from all keys found in the leads."""
    all_keys = set()
    for lead in leads:
        all_keys.update(lead.keys())

    ordered = [c for c in PREFERRED_COLS if c in all_keys]
    extras = sorted(k for k in all_keys if k not in ordered)
    return ordered + extras


def leads_to_rows(leads: list, columns: list) -> list:
    """Convert list of dicts to a 2D list (header + rows) for Sheets API."""
    # Friendly header labels
    label_map = {
        "firstName": "First Name", "lastName": "Last Name", "name": "Full Name",
        "title": "Job Title", "email": "Email", "phone": "Phone",
        "linkedinUrl": "LinkedIn", "organization_name": "Company",
        "organization_industry": "Industry", "city": "City", "state": "State",
        "country": "Country", "organization_website": "Website",
        "organization_employee_count": "Employees",
    }
    header = [label_map.get(c, c.replace("_", " ").title()) for c in columns]
    rows = [header]
    for lead in leads:
        row = []
        for col in columns:
            val = lead.get(col, "")
            if isinstance(val, list):
                val = ", ".join(str(v) for v in val)
            row.append(str(val) if val is not None else "")
        rows.append(row)
    return rows


# ---------------------------------------------------------------------------
# Google Sheets operations
# ---------------------------------------------------------------------------

def create_sheet(sheets_svc, title: str) -> str:
    """Create a new Google Spreadsheet and return its ID."""
    body = {"properties": {"title": title}}
    result = sheets_svc.spreadsheets().create(body=body, fields="spreadsheetId").execute()
    sheet_id = result["spreadsheetId"]
    log.info("Created spreadsheet: %s", sheet_id)
    return sheet_id


def write_data(sheets_svc, sheet_id: str, rows: list) -> None:
    """Write rows to Sheet1."""
    body = {"values": rows}
    sheets_svc.spreadsheets().values().update(
        spreadsheetId=sheet_id,
        range="Sheet1!A1",
        valueInputOption="RAW",
        body=body,
    ).execute()
    log.info("Wrote %d rows (%d columns)", len(rows), len(rows[0]) if rows else 0)


def format_sheet(sheets_svc, sheet_id: str, num_cols: int) -> None:
    """Bold header row, freeze it, and auto-resize columns."""
    requests_body = [
        # Bold header row
        {
            "repeatCell": {
                "range": {"sheetId": 0, "startRowIndex": 0, "endRowIndex": 1},
                "cell": {"userEnteredFormat": {"textFormat": {"bold": True}}},
                "fields": "userEnteredFormat.textFormat.bold",
            }
        },
        # Freeze header row
        {
            "updateSheetProperties": {
                "properties": {"sheetId": 0, "gridProperties": {"frozenRowCount": 1}},
                "fields": "gridProperties.frozenRowCount",
            }
        },
        # Auto-resize all columns
        {
            "autoResizeDimensions": {
                "dimensions": {
                    "sheetId": 0,
                    "dimension": "COLUMNS",
                    "startIndex": 0,
                    "endIndex": num_cols,
                }
            }
        },
    ]
    sheets_svc.spreadsheets().batchUpdate(
        spreadsheetId=sheet_id,
        body={"requests": requests_body},
    ).execute()
    log.info("Sheet formatted (bold header, frozen row, auto-resize)")


def share_sheet(drive_svc, sheet_id: str) -> str:
    """Share with 'anyone with link can view'. Returns the shareable URL."""
    drive_svc.permissions().create(
        fileId=sheet_id,
        body={"type": "anyone", "role": "reader"},
        fields="id",
    ).execute()
    url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/edit?usp=sharing"
    log.info("Sheet shared → %s", url)
    return url


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def clear_sheet(sheets_svc, sheet_id: str) -> None:
    """Clear all data from Sheet1 of an existing spreadsheet."""
    sheets_svc.spreadsheets().values().clear(
        spreadsheetId=sheet_id,
        range="Sheet1",
    ).execute()
    log.info("Cleared existing sheet %s", sheet_id)


def push_leads(input_path: str, title: str, sheet_id: str = "") -> str:
    # Load leads
    leads_file = Path(input_path)
    if not leads_file.exists():
        raise FileNotFoundError(f"Input file not found: {leads_file}")
    leads = json.loads(leads_file.read_text(encoding="utf-8"))
    log.info("Loaded %d leads from %s", len(leads), leads_file)

    if not leads:
        raise ValueError("No leads found in input file — nothing to push.")

    # Prepare data
    columns = build_columns(leads)
    rows = leads_to_rows(leads, columns)

    # Auth
    creds = get_credentials()
    sheets_svc = build("sheets", "v4", credentials=creds)
    drive_svc = build("drive", "v3", credentials=creds)

    if sheet_id:
        # Update existing sheet — clear and rewrite
        log.info("Updating existing sheet: %s", sheet_id)
        clear_sheet(sheets_svc, sheet_id)
        write_data(sheets_svc, sheet_id, rows)
        format_sheet(sheets_svc, sheet_id, len(columns))
        url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/edit?usp=sharing"
        log.info("Updated sheet → %s", url)
    else:
        # Create new sheet
        sheet_id = create_sheet(sheets_svc, title)
        write_data(sheets_svc, sheet_id, rows)
        format_sheet(sheets_svc, sheet_id, len(columns))
        url = share_sheet(drive_svc, sheet_id)

    print(f"\n{'='*60}")
    print(f"✅ Google Sheet ready!")
    print(f"   Leads    : {len(leads)}")
    print(f"   Columns  : {len(columns)}")
    print(f"   Link     : {url}")
    print(f"{'='*60}\n")

    return url


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args():
    p = argparse.ArgumentParser(description="Push leads JSON to a Google Sheet.")
    p.add_argument(
        "--input",
        default=str(TMP_DIR / "leads.json"),
        help="Path to leads JSON file (default: .tmp/leads.json)",
    )
    p.add_argument(
        "--title",
        default=f"Leads Export {date.today()}",
        help="Google Sheet title (default: 'Leads Export YYYY-MM-DD')",
    )
    p.add_argument(
        "--sheet-id",
        default="",
        help="Existing sheet ID to overwrite (skips creation, updates in-place)",
    )
    return p.parse_args()


if __name__ == "__main__":
    args = parse_args()
    push_leads(args.input, args.title, sheet_id=args.sheet_id)
