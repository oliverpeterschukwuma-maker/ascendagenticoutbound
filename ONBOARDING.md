# What This Workflow Does

## The Business Problem

The owner of this system wants to cold outreach to **small Canadian trade businesses** — plumbers, HVAC companies, roofers. To do that, he needs:
1. A list of those businesses (name, phone, address, website, Google rating)
2. The **name of the actual owner or decision-maker** at each business — not just the company name

Finding owner names is the hard part. Small trade businesses don't publish their owner's name anywhere obvious. You have to dig — scrape their website About page, search LinkedIn, check HomeStars, YellowPages, BBB, etc.

This workflow automates all of that, end to end, and delivers a clean Google Sheet the owner can hand to a sales team.

---

## What Happens Step by Step

### Step 1: Pull business listings from Google Maps

We search Google Maps for e.g. "plumber" in Canada and pull back up to 250+ business listings. Each listing gives us: company name, address, city, province, phone, website, Google star rating, number of reviews, and opening hours.

Google Maps also sometimes includes a `leadsEnrichment` field — a pre-matched list of LinkedIn contacts associated with that business (up to 5 people). These LinkedIn contacts have names, job titles, seniority levels, emails, and LinkedIn URLs. This is gold when it exists, but it only covers about 28% of businesses.

**Currently this step uses Apify** (a paid cloud scraping platform). The goal is to replace Apify with a free open-source Google Maps scraper that does the same thing. The rest of the pipeline doesn't change at all.

### Step 2: Find the owner for each business

Once we have the list of businesses, we try to find who actually runs each one. We run three strategies in sequence, stopping as soon as we find a valid name:

**Strategy A — Use the LinkedIn data Apify already pulled**
If Google Maps returned LinkedIn contacts for this business, we look through them and pick the most senior person: Owner > Founder > CEO/President > Director > Manager. If they have an email, that scores higher. If we find someone here, great — we're done for this company.

**Strategy B — Search with Exa (a neural search engine)**
Exa is like Google but with an API, and it can do structured extraction. We search for the owner of the specific company using 3 sub-approaches:
- First, scope the search to their own website domain (most precise)
- Then search in Exa's "people" category with AI-structured output
- Then do a quoted general search like `"Smith Plumbing Ottawa" owner`

There's a critical validation step here: before accepting any name Exa returns, we check that the search results actually mention words from THIS company's name. Without this check, Exa would hallucinate — returning the founder of a completely different plumbing company.

**Strategy C — Deep web scraping (the nuclear option)**
For leads still without an owner, we go manual-style but automated:
- Scrape the company's own website — homepage, then hunt for About/Team/Contact/Staff pages
- Search HomeStars (Canada's biggest contractor directory — very effective, often has owner names listed)
- Search YellowPages Canada
- Search BBB (Better Business Bureau)
- Search Yelp
- Try several other Exa query variations

This step runs 4 companies in parallel to keep runtime under 15 minutes for 100 companies.

**What we do NOT do:** We don't try LinkedIn directly (requires login/premium). We don't use Apollo (free plan has zero API access — needs $49/mo upgrade to do anything).

### Step 3: Deliver a Google Sheet

Once enrichment is done, we push the cleaned data to a Google Sheet and share it as "anyone with the link can view." The sheet has 14 columns:

`Company Name | Category | Address | City | Province | Phone | Website | Google Rating | Review Count | Owner Name | Owner Title | Owner Email | Owner LinkedIn | Opening Hours`

The owner/decision-maker columns are filled in wherever we found them, and left blank where we couldn't.

---

## Real Results

- **Plumbing Canada (250 companies):** Found 220/250 owner names (88%)
- **HVAC Canada (100 companies):** Found 87/100 owner names (87%)

The ~12% we couldn't find are mostly: chain stores (Wolseley, Reliance) that have no individual owner, and ultra-rural companies with zero web presence.

---

## How Step 1 Works (The Scraper)

Apify has been fully replaced with a free, pure-Python scraper using **Playwright** (a headless browser library). No Docker, no API key, no cost.

The scraper works in two phases:
1. **Collect URLs** — Scrolls the Google Maps search results feed to gather business listing URLs. Fast, no clicking.
2. **Extract details** — Opens 4 listings at a time in parallel and pulls all the fields from each business page.

Because Google Maps localizes results to your IP address, a search for "plumber in Canada" would return mostly results near wherever the server is. To get true national coverage, the scraper runs separate searches for each major Canadian city and combines the results. This is why you get leads from Toronto, Calgary, Vancouver, Ottawa, Edmonton, etc. rather than all from one region.

**Tested and confirmed:** 25-lead plumbing test — 92% quality gate, results from 5 cities, ~11 minutes total.

---

## Files That Matter

- `execution/scrape_gmaps.py` — The core Playwright scraper (the engine).
- `execution/scrape_leads.py` — Orchestrates the full workflow: test run → quality gate → full run. Calls `scrape_gmaps.py`.
- `execution/enrich_exa.py` — Exa search enrichment (Strategy B above)
- `execution/enrich_web.py` — Deep web enrichment with parallel workers (Strategy C above)
- `execution/push_to_gsheets.py` — Pushes final data to Google Sheets
- `execution/enrich_csv.py` — Full pipeline runner when starting from a CSV file
- `execution/run_deep_enrich.py` — Runs the deep enrichment on an existing JSON file + pushes to Sheets
- `.env` — API keys live here (Exa, Google OAuth)
- `.tmp/` — All intermediate files (raw scrape, enriched JSON, quality report). Safe to delete and regenerate.
- `directives/scrape_leads.md` — Plain English SOP for the scraping step

## Key API Keys in Use

- `EXA_API_KEY` — Used for owner search (Strategies B and C). This is actively used and working.
- Google OAuth (`credentials.json` + `token.json`) — For writing to Google Sheets. Already set up and working.
- `APIFY_API_KEY` — No longer used. Apify is fully replaced by the Playwright scraper.
