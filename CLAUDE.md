# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

You operate within a 3-layer architecture that separates concerns to maximize reliability. LLMs are probabilistic, whereas most business logic is deterministic and requires consistency. This system fixes that mismatch.

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- Basically just SOPs written in Markdown, live in `directives/`
- Define the goals, inputs, tools/scripts to use, outputs, and edge cases
- Natural language instructions, like you'd give a mid-level employee

**Layer 2: Orchestration (Decision making)**
- This is you. Your job: intelligent routing.
- Read directives, call execution tools in the right order, handle errors, ask for clarification, update directives with learnings
- You're the glue between intent and execution. E.g you don't try scraping websites yourself—you read `directives/scrape_website.md` and come up with inputs/outputs and then run `execution/scrape_single_site.py`

**Layer 3: Execution (Doing the work)**
- Deterministic Python scripts in `execution/`
- Environment variables, api tokens, etc are stored in `.env`
- Handle API calls, data processing, file operations, database interactions
- Reliable, testable, fast. Use scripts instead of manual work. Commented well.

**Why this works:** if you do everything yourself, errors compound. 90% accuracy per step = 59% success over 5 steps. The solution is push complexity into deterministic code. That way you just focus on decision-making.

## Operating Principles

**1. Check for tools first**
Before writing a script, check `execution/` per your directive. Only create new scripts if none exist.

**2. Self-anneal when things break**
- Read error message and stack trace
- Fix the script and test it again (unless it uses paid tokens/credits/etc—in which case you check w user first)
- Update the directive with what you learned (API limits, timing, edge cases)
- Example: you hit an API rate limit → you then look into API → find a batch endpoint that would fix → rewrite script to accommodate → test → update directive.

**3. Update directives as you learn**
Directives are living documents. When you discover API constraints, better approaches, common errors, or timing approaches—update the directive. But don't create or overwrite directives without asking unless explicitly told to. Directives are your instruction set and must be preserved (and improved upon over time, not extemporaneously used and then discarded).

## Self-annealing loop

Errors are learning opportunities. When something breaks:
1. Fix it
2. Update the tool
3. Test tool, make sure it works
4. Update directive to include new flow
5. System is now stronger

## File Organization

**Deliverables vs Intermediates:**
- **Deliverables**: Google Sheets, Google Slides, or other cloud-based outputs that the user can access
- **Intermediates**: Temporary files needed during processing

**Directory structure:**
- `.tmp/` - All intermediate files (dossiers, scraped data, temp exports). Never commit, always regenerated.
- `execution/` - Python scripts (the deterministic tools)
- `directives/` - SOPs in Markdown (the instruction set)
- `.env` - Environment variables and API keys
- `credentials.json`, `token.json` - Google OAuth credentials (required files, in `.gitignore`)

**Key principle:** Local files are only for processing. Deliverables live in cloud services (Google Sheets, Slides, etc.) where the user can access them. Everything in `.tmp/` can be deleted and regenerated.

## Summary

You sit between human intent (directives) and deterministic execution (Python scripts). Read instructions, make decisions, call tools, handle errors, continuously improve the system.

Be pragmatic. Be reliable. Self-anneal.

---

## Script Commands

```bash
# Single industry scrape (test → quality gate → full run)
python execution/scrape_leads.py --industry "HVAC" --location "Canada" --count 100

# Optional filters
python execution/scrape_leads.py --industry "Roofing" --location "Canada" --count 100 --job_title "Owner" --email_status validated

# Push leads to Google Sheet (opens browser for OAuth on first run)
python execution/push_to_gsheets.py --input .tmp/leads.json --title "HVAC Canada Leads"

# Update an EXISTING Google Sheet in-place (by sheet ID)
python execution/push_to_gsheets.py --input .tmp/leads.json --title "HVAC Canada Leads" --sheet-id SHEET_ID_HERE

# Enrich a CSV file (Google Maps export) with owner data → push to new Google Sheet
python execution/enrich_csv.py --input path/to/file.csv --title "Plumbing Canada — Enriched" --industry plumber

# Enrich raw Playwright-scraped leads.json → owner names → Google Sheet (NEW — preferred)
# Runs Exa first, then deep web for stragglers, then pushes to Sheet
python execution/enrich_json.py --input .tmp/leads.json --title "Plumbing Canada" --industry plumber
python execution/enrich_json.py --input .tmp/leads.json --title "Plumbing Canada" --industry plumber --sheet-id SHEET_ID_HERE

# Deep per-company enrichment on existing enriched JSON (website scraping + directory search)
# Runs on all "not found" leads, saves updated JSON, pushes to sheet
python execution/run_deep_enrich.py --input .tmp/plumbing_canada__enriched.json \
    --title "Plumbing Canada — Enriched" [--sheet-id EXISTING_ID]

# Run the full 3-industry Canadian campaign (HVAC + Roofing + Plumbing, multi-tab sheet)
python execution/run_canadian_campaign.py --count 100
```

Exit codes for `scrape_leads.py`: `0` = success, `2` = quality gate failed (< 80% in-scope leads).

Install dependencies: `pip install -r requirements.txt`

## Current Project State (as of 2026-05-30)

**Apify is fully replaced.** The pipeline now uses a pure-Python Playwright scraper (`execution/scrape_gmaps.py`) — no Docker, no API keys, no cost.

**Plumbing Canada:** 250 leads scraped (old Apify run), enriched. 220/250 owners found (88%). Deep enrichment on remaining 126 completed via `enrich_web.py`.
**HVAC Canada:** 100 leads scraped (old Apify run), enriched. 87/100 owners found (87%). Both pushed to Google Sheets.
**Playwright scraper:** Confirmed working end-to-end — 25-lead test + full run both passed (92% quality gate, 5 cities, ~11 min wall time). Output in `.tmp/leads.json`.
**What's in `.tmp/`:** `leads.json` (25 plumbing leads, Playwright run), `leads_test.json`, `quality_report.json` (92% match rate).

**Owner enrichment pipeline (3 stages, applied in order):**
1. `leadsEnrichment` blob from Apify (LinkedIn contacts, ~28% coverage) — parsed by `enrich_csv.py`
2. `enrich_exa.py` — Exa neural search (website-scoped → category="people" → quoted general). Has company-validation fix to prevent hallucinations.
3. `enrich_web.py` — Deep enrichment: website scraping (About/Team/Contact pages) + directory search via Exa (HomeStars, YellowPages, BBB, Yelp) + varied query templates. **Runs with 4 parallel workers by default** (~4x faster). Typical result: 85–90% owner coverage total.

**Typical enrichment results:**
- Plumbing Canada (250 leads): 220/250 owners found (88%)
- HVAC Canada (100 leads): in progress
- Sources in order of effectiveness: exa_dir (HomeStars/YP/BBB) > yellowpages > website scraping > exa_varied
- Chain stores (Wolseley, Reliance, Home Depot) are auto-skipped — no individual owner to find
- Companies with no web presence at all (ultra-rural) account for most "not found"

**In-progress work:** The multi-industry Canadian campaign (`run_canadian_campaign.py`) exists but has not been fully validated end-to-end. It calls `scrape_leads.py` and `push_to_gsheets.py` in sequence for HVAC, Roofing, and Plumbing, then creates a multi-tab Google Sheet with a summary.

## Technical Reference

**Google Maps scraping (Playwright — pure Python, no Docker, no API key)**
- `execution/scrape_gmaps.py` — core scraper. `execution/scrape_leads.py` — orchestrator (test → quality gate → full run).
- **2-phase architecture:** Phase 1 scrolls `div[role="feed"]` collecting `a.hfpxzc` URLs (fast). Phase 2 opens each URL in parallel (4 workers via `asyncio.Semaphore`) to extract fields.
- **Multi-city strategy:** Distributes count across `CANADA_CITIES` (20 cities) to avoid IP geo-clustering. ~5 leads/city, deduped by `title.lower()`.
- **Speed:** ~11–12s per lead (4 parallel workers). 25 leads ≈ 11 min. 100 leads ≈ 40 min.
- **Key selectors:** `h1.DUwDvf` (name), `button.DkEaL` (category), `button[data-item-id='address']`, `button[data-item-id^='phone:tel:']`, `a[data-item-id='authority']` (website).
- **Icon char stripping:** Google injects Material Design private-use Unicode (U+E000–F8FF) into `inner_text()`. `_clean()` strips these — applied to every extracted field.
- **Ghost card filter:** Results with no address AND no phone are discarded (Google sometimes returns placeholder cards).
- Output shape exactly matches the pipeline contract — zero downstream code changes needed.
- Does NOT provide LinkedIn contacts (`leadsEnrichment` is always `[]` — Exa/deep-web enrichment handles owner discovery).

**Google OAuth**
- Scopes: Sheets API v4 + Drive API v3
- Project: `concise-perigee-451802-q8`
- First run opens a browser; saves `token.json` for subsequent runs
- If OAuth fails with redirect URI mismatch: `credentials.json` is a Desktop app credential — recreate it in Google Cloud Console as type "Desktop app" if needed

**Quality gate logic**
- Checks `categoryName`, `categories`, `title`, `organization_industry` on each test lead (in order)
- Industry synonym map handles aliases (e.g., HVAC matches "air conditioning", "heating and cooling", etc.)
- Threshold: 80% of 25 test leads must match before the full run proceeds

**APIs configured but not yet used in scripts:** OpenAI, Anthropic, Google GenAI (in `.env`), Serper, Airtable, Notion, Slack.
