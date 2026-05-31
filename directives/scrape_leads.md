# Directive: Scrape Leads → Google Sheet

> **Status:** Active  
> **Last Updated:** 2026-05-15  
> **Version:** 1.0

## Goal

Scrape business leads for a specified industry using **gosom/google-maps-scraper** (open-source, Docker, free).
Run a 25-lead test first, verify ≥80% are in scope, then execute the full run and deliver results
in a Google Sheet with a shareable link.

**Requires:** Docker installed and running. Pull image once: `docker pull gosom/google-maps-scraper`

## Inputs

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `industry` | string | Yes | — | Target industry, e.g. `"SaaS"`, `"Real Estate"` |
| `job_title` | string | No | `""` | Job title filter, e.g. `"CEO"`, `"VP Sales"` |
| `location` | string | No | `""` | Location filter, e.g. `"United States"` |
| `count` | int | Yes | 100 | Full-run lead count |
| `email_status` | list | No | `["validated"]` | Email validation filter |
| `sheet_title` | string | No | `"{industry} Leads"` | Google Sheet tab name |

## Tools / Scripts

Run in this order:

1. `execution/scrape_leads.py` — Test run → quality check → full run → saves `.tmp/leads.json`
2. `execution/push_to_gsheets.py` — Reads `.tmp/leads.json` → creates Google Sheet → returns link

## Step-by-Step

1. Gather: `industry`, `job_title`, `location`, `count` from user
2. Run `execution/scrape_leads.py --industry "..." --count N [--job_title "..."] [--location "..."]`
   - Script does a 25-lead test, verifies quality, then runs full scrape if ≥80% pass
   - Exit code 0 = success, exit code 2 = quality failure
3. If exit code 2: report quality breakdown to user, ask for adjusted filters, retry
4. Run `execution/push_to_gsheets.py --input .tmp/leads.json --title "Sheet Title"`
   - First run opens a browser for Google OAuth — user must authenticate once
   - Saves `token.json` for future runs
5. Return the Google Sheet link to the user

## Outputs

- **Primary deliverable:** Google Sheet (shareable "anyone with link can view" URL)
- **Intermediates in `.tmp/`:**
  - `leads_test.json` — 25-lead test batch
  - `leads.json` — Full leads dataset
  - `quality_report.json` — Match rate breakdown

## Quality Check Logic

- Script checks `organization_industry` (and 4 fallback fields) on each test lead
- If target industry string appears in the value → lead is "in scope"
- Match rate < 80% → exit code 2; provide `quality_report.json` for diagnosis
- Remedies to try: add `--keywords`, tighten `--job_title`, change `--location`

## Edge Cases & Notes

- **Actor ID:** `compass~crawler-google-places` — scrapes Google Maps business listings (name, phone, address, category). This is NOT a person-level contact actor.
- **Actor input fields:** `searchStringsArray` (array), `locationQuery` (string), `maxCrawledPlacesPerSearch` (int), `language`, `includeContactInfo` (bool), `maximumLeadsEnrichmentRecords` (int)
- **Note on `code_crafter~leads-finder`:** This is a different actor (B2B person contacts — emails, LinkedIn). It uses entirely different input/output formats. Do not switch actors without rewriting `build_input()` and `verify_quality()` in the script.
- **Google OAuth:** Requires Sheets API + Drive API enabled in Google Cloud Console project `concise-perigee-451802-q8`
- **Redirect URI mismatch:** credentials are for an n8n OAuth app — if OAuth fails, create a Desktop app credential instead
- **Rate limits:** Apify queues runs; large counts (500+) may take 5–10 min
- **Polling:** Script polls every 8s with a 20-min timeout for full runs

## Changelog

| Date | Change |
|------|--------|
| 2026-05-15 | Initial version |
