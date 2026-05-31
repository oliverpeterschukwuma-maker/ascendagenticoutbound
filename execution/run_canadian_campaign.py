"""
execution/run_canadian_campaign.py
----------------------------------
PURPOSE: Master script to orchestrate lead generation for HVAC, Roofing, and Plumbing in Canada.
DIRECTIVE: directives/scrape_leads.md
"""

import argparse
import json
import logging
import os
import subprocess
import sys
from datetime import date
from pathlib import Path

# Force utf-8 for stdout on Windows to prevent UnicodeEncodeError with emojis
if sys.stdout.encoding.lower() != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

# Add execution directory to sys.path to import push_to_gsheets
sys.path.append(str(Path(__file__).parent))
from push_to_gsheets import get_credentials, build_columns, leads_to_rows, share_sheet
from googleapiclient.discovery import build

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s", datefmt="%H:%M:%S")
log = logging.getLogger(__name__)

REPO_ROOT = Path(__file__).parent.parent
TMP_DIR = REPO_ROOT / ".tmp"

INDUSTRIES = ["HVAC", "Roofing", "Plumbing"]

def run_campaign(count: int):
    log.info("Starting Canadian Lead Generation Campaign...")
    
    industry_data = {}
    
    for ind in INDUSTRIES:
        log.info(f"--- Processing {ind} ---")
        cmd = [
            sys.executable,
            str(REPO_ROOT / "execution" / "scrape_leads.py"),
            "--industry", ind,
            "--location", "Canada",
            "--count", str(count)
        ]
        result = subprocess.run(cmd)
        
        if result.returncode != 0:
            log.warning(f"Failed to process {ind}. Exit code {result.returncode}")
            continue
            
        leads_path = TMP_DIR / "leads.json"
        quality_path = TMP_DIR / "quality_report.json"
        
        if leads_path.exists() and quality_path.exists():
            leads = json.loads(leads_path.read_text(encoding="utf-8"))
            quality = json.loads(quality_path.read_text(encoding="utf-8"))
            
            industry_data[ind] = {
                "leads": leads,
                "quality": quality
            }
        else:
            log.error(f"Missing output files for {ind}")
            
    if not industry_data:
        log.error("No industries processed successfully. Exiting.")
        sys.exit(1)
        
    log.info("All scraping finished. Preparing to push to Google Sheets...")
    
    # Authenticate
    creds = get_credentials()
    sheets_svc = build("sheets", "v4", credentials=creds)
    drive_svc = build("drive", "v3", credentials=creds)
    
    # Prepare spreadsheet creation body
    sheets_body = [{"properties": {"title": "Summary Report", "sheetId": 0}}]
    sheet_id_counter = 1
    for ind in industry_data.keys():
        sheets_body.append({"properties": {"title": ind, "sheetId": sheet_id_counter}})
        sheet_id_counter += 1
        
    title = f"Canadian Leads Export {date.today()}"
    body = {
        "properties": {"title": title},
        "sheets": sheets_body
    }
    
    # Create the sheet
    result = sheets_svc.spreadsheets().create(body=body, fields="spreadsheetId").execute()
    sheet_id = result["spreadsheetId"]
    log.info(f"Created multi-tab spreadsheet: {sheet_id}")
    
    # Prepare data to write
    sheet_data = {}
    
    # 1. Summary Report
    summary_rows = [
        ["Industry", "Test Count", "In Scope Count", "Match Rate", "Passed", "Total Scraped Leads"]
    ]
    for ind, data in industry_data.items():
        q = data["quality"]
        summary_rows.append([
            ind,
            str(q.get("test_count", "")),
            str(q.get("in_scope_count", "")),
            str(q.get("match_rate_pct", "")) + "%",
            str(q.get("passed", "")),
            str(len(data["leads"]))
        ])
    sheet_data["Summary Report"] = summary_rows
    
    # 2. Industry tabs
    for ind, data in industry_data.items():
        # Pre-process leads to extract enriched emails
        for lead in data["leads"]:
            enrich = lead.pop("leadsEnrichment", [])
            if isinstance(enrich, list) and len(enrich) > 0:
                contact = next((c for c in enrich if c.get("email")), enrich[0])
                lead["firstName"] = contact.get("firstName", lead.get("firstName", ""))
                lead["lastName"] = contact.get("lastName", lead.get("lastName", ""))
                lead["name"] = contact.get("fullName", lead.get("name", ""))
                lead["title"] = contact.get("jobTitle", lead.get("title", ""))
                lead["email"] = contact.get("email", lead.get("email", ""))
                lead["linkedinUrl"] = contact.get("linkedinProfile", lead.get("linkedinUrl", ""))
                
        cols = build_columns(data["leads"])
        rows = leads_to_rows(data["leads"], cols)
        sheet_data[ind] = rows
        
    # Write data to tabs
    for sheet_name, rows in sheet_data.items():
        sheets_svc.spreadsheets().values().update(
            spreadsheetId=sheet_id,
            range=f"'{sheet_name}'!A1",
            valueInputOption="RAW",
            body={"values": rows},
        ).execute()
        log.info(f"Wrote {len(rows)} rows to '{sheet_name}' tab.")
        
    # Formatting
    requests_body = []
    for s_info in sheets_body:
        s_title = s_info["properties"]["title"]
        s_id = s_info["properties"]["sheetId"]
        num_cols = len(sheet_data[s_title][0])
        requests_body.extend([
            {
                "repeatCell": {
                    "range": {"sheetId": s_id, "startRowIndex": 0, "endRowIndex": 1},
                    "cell": {"userEnteredFormat": {"textFormat": {"bold": True}}},
                    "fields": "userEnteredFormat.textFormat.bold",
                }
            },
            {
                "updateSheetProperties": {
                    "properties": {"sheetId": s_id, "gridProperties": {"frozenRowCount": 1}},
                    "fields": "gridProperties.frozenRowCount",
                }
            },
            {
                "autoResizeDimensions": {
                    "dimensions": {
                        "sheetId": s_id,
                        "dimension": "COLUMNS",
                        "startIndex": 0,
                        "endIndex": num_cols,
                    }
                }
            }
        ])
        
    sheets_svc.spreadsheets().batchUpdate(
        spreadsheetId=sheet_id,
        body={"requests": requests_body},
    ).execute()
    log.info("Formatting applied to all tabs.")
    
    # Share sheet
    url = share_sheet(drive_svc, sheet_id)
    
    print(f"\n{'='*60}")
    print(f"✅ Canadian Leads Campaign Complete!")
    print(f"   Link: {url}")
    print(f"{'='*60}\n")
    
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run Canadian Leads Campaign.")
    parser.add_argument("--count", type=int, default=100, help="Leads per industry to scrape")
    args = parser.parse_args()
    
    run_campaign(args.count)
