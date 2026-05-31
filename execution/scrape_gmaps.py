"""
execution/scrape_gmaps.py
-------------------------
PURPOSE: Scrape Google Maps business listings using Playwright (no Docker, no API key).
         Navigates Google Maps, clicks each result, extracts all fields.
INPUTS:  query (str), count (int)
OUTPUTS: list of dicts matching the pipeline's expected field format
"""

import asyncio
import logging
import re
import time
from urllib.parse import quote

from playwright.async_api import async_playwright, TimeoutError as PWTimeout

log = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Province lookup
# ---------------------------------------------------------------------------
PROVINCE_MAP = {
    "AB": "Alberta", "BC": "British Columbia", "MB": "Manitoba",
    "NB": "New Brunswick", "NL": "Newfoundland and Labrador",
    "NS": "Nova Scotia", "NT": "Northwest Territories", "NU": "Nunavut",
    "ON": "Ontario", "PE": "Prince Edward Island", "QC": "Quebec",
    "SK": "Saskatchewan", "YT": "Yukon",
}


def _clean(text: str) -> str:
    """Strip Material Design icon chars (private-use U+E000-F8FF) and normalize whitespace."""
    text = re.sub(r"[-]", "", text)
    return re.sub(r"\s+", " ", text).strip()


def _parse_city(address: str) -> str:
    """Extract city from 'Street, City, Province Postal, Canada' format."""
    address = _clean(address)
    # Explicit pattern: look for ', City, AB X1X ...'
    m = re.search(r",\s*([A-Za-z\s\-\'\.]+),\s*([A-Z]{2})\s+[A-Z0-9]", address)
    if m:
        return m.group(1).strip()
    parts = [p.strip() for p in address.split(",") if p.strip()]
    return parts[1] if len(parts) >= 3 else (parts[0] if parts else "")


def _parse_state(address: str) -> str:
    """Extract full province name from address string."""
    address = _clean(address)
    m = re.search(r",\s*([A-Z]{2})\s+[A-Z0-9]", address)
    if m:
        return PROVINCE_MAP.get(m.group(1), m.group(1))
    for code in PROVINCE_MAP:
        if re.search(r"\b" + code + r"\b", address):
            return PROVINCE_MAP[code]
    return ""


# ---------------------------------------------------------------------------
# Async scraper core
# ---------------------------------------------------------------------------

async def _extract_text(page, *selectors, attr=None, default="") -> str:
    """Try multiple selectors, return first non-empty result (stripped of icon chars)."""
    for sel in selectors:
        try:
            el = await page.query_selector(sel)
            if el:
                val = (await el.get_attribute(attr)) if attr else (await el.inner_text())
                val = _clean(val or "")
                if val:
                    return val
        except Exception:
            continue
    return default


async def _extract_detail(page) -> dict | None:
    """Extract all fields from the currently open business detail panel."""
    # Wait for the panel heading to confirm it loaded
    try:
        await page.wait_for_selector("h1", timeout=4000)
    except PWTimeout:
        return None

    # --- Name ---
    title = await _extract_text(
        page,
        "h1.DUwDvf",
        "h1.x3AX1-LfntMc",
        "h1",
    )
    if not title:
        return None

    # --- Category ---
    raw_cat = await _extract_text(
        page,
        "button.DkEaL",
        "button.CsEnBe",
        "span.YhemCb",
        "div[jsaction*='category'] span",
    )

    # --- Rating ---
    rating = None
    rating_el = await page.query_selector("span.ceNzKf, span.MW4etd")
    if rating_el:
        aria = await rating_el.get_attribute("aria-label") or ""
        m = re.search(r"([\d.]+)", aria)
        if m:
            try:
                rating = float(m.group(1))
            except ValueError:
                pass
    if rating is None:
        # fallback: look for visible rating number
        try:
            span = await page.query_selector("div.F7nice span[aria-hidden='true']")
            if span:
                text = (await span.inner_text()).strip()
                rating = float(text) if text else None
        except Exception:
            pass

    # --- Review count ---
    review_count = None
    for sel in ["span.RDApEe", "button[jsaction*='review'] span", "span.F7nice + span"]:
        try:
            el = await page.query_selector(sel)
            if el:
                text = re.sub(r"[^\d]", "", await el.inner_text())
                if text:
                    review_count = int(text)
                    break
        except Exception:
            continue

    # --- Address ---
    address = await _extract_text(
        page,
        "button[data-item-id='address']",
        "button[data-tooltip='Copy address']",
        "div[data-item-id='address']",
    )

    # --- Phone ---
    phone = await _extract_text(
        page,
        "button[data-item-id^='phone:tel:']",
        "button[data-tooltip='Copy phone number']",
        "a[href^='tel:']",
        attr=None,
    )
    # Clean phone: some selectors return aria-label not text
    if not phone:
        try:
            phone_el = await page.query_selector("button[data-item-id^='phone']")
            if phone_el:
                phone = (await phone_el.get_attribute("aria-label") or "").replace("Phone:", "").strip()
        except Exception:
            pass

    # --- Website ---
    website = ""
    for sel in ["a[data-item-id='authority']", "a[href][data-tooltip='Open website']",
                "a[data-tooltip='Open website']"]:
        try:
            el = await page.query_selector(sel)
            if el:
                website = (await el.get_attribute("href") or "").strip()
                if website:
                    break
        except Exception:
            continue

    # --- Hours ---
    hours = []
    try:
        # Sometimes hours are in an aria-label on a collapsible section
        hours_btn = await page.query_selector(
            "div[aria-label*='hour'], button[aria-label*='hour'], div.t39EBf"
        )
        if hours_btn:
            aria = await hours_btn.get_attribute("aria-label") or ""
            # Parse "Monday: 8 AM to 5 PM; Tuesday: 8 AM to 5 PM; ..."
            for chunk in aria.split(";"):
                chunk = chunk.strip()
                if ":" in chunk:
                    day, _, hrs = chunk.partition(":")
                    hours.append({"day": day.strip(), "hours": hrs.strip()})
    except Exception:
        pass

    # If aria-label parsing failed, try table approach
    if not hours:
        try:
            rows = await page.query_selector_all("table.WgFkxc tr, tr.y0skZc")
            for row in rows:
                cells = await row.query_selector_all("td")
                if len(cells) >= 2:
                    day = (await cells[0].inner_text()).strip()
                    hrs = (await cells[1].inner_text()).strip()
                    if day:
                        hours.append({"day": day, "hours": hrs})
        except Exception:
            pass

    # --- Parse city/state from address ---
    city  = _parse_city(address)
    state = _parse_state(address)

    return {
        "title":          title,
        "categoryName":   raw_cat,
        "categories":     [raw_cat] if raw_cat else [],
        "address":        address,
        "city":           city,
        "state":          state,
        "phone":          phone,
        "website":        website,
        "totalScore":     rating,
        "reviewsCount":   review_count,
        "openingHours":   hours,
        "emails":         [],
        "leadsEnrichment": [],
        "latitude":       None,
        "longitude":      None,
    }


BROWSER_ARGS = [
    "--no-sandbox",
    "--disable-blink-features=AutomationControlled",
    "--disable-dev-shm-usage",
]

CONTEXT_OPTS = dict(
    locale="en-CA",
    timezone_id="America/Toronto",
    user_agent=(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    viewport={"width": 1280, "height": 900},
)


async def _collect_urls(browser, query: str, need: int) -> list[tuple[str, str]]:
    """
    Phase 1: Scroll the search results feed to collect (url, name_hint) pairs.
    Extracts the business name from each card's aria-label so Phase 2 can
    deduplicate by name BEFORE loading any detail pages (eliminates wasted loads).
    """
    context = await browser.new_context(**CONTEXT_OPTS)
    page = await context.new_page()

    search_url = f"https://www.google.com/maps/search/{quote(query)}?hl=en&gl=ca"
    log.info("Phase 1 — collecting URLs: %s", search_url)
    await page.goto(search_url, wait_until="domcontentloaded", timeout=30000)

    for btn_text in ["Accept all", "Reject all"]:
        try:
            btn = await page.query_selector(f'button:has-text("{btn_text}")')
            if btn:
                await btn.click()
                await page.wait_for_timeout(1000)
                break
        except Exception:
            pass

    try:
        await page.wait_for_selector('div[role="feed"]', timeout=20000)
    except PWTimeout:
        log.warning("No results feed found")
        await context.close()
        return []

    results = []
    seen_hrefs = set()
    no_new_streak = 0

    while len(results) < need:
        cards = await page.query_selector_all("a.hfpxzc")
        new_found = 0
        for card in cards:
            href = await card.get_attribute("href") or ""
            if href and href not in seen_hrefs:
                seen_hrefs.add(href)
                # aria-label contains the business name — used for pre-Phase-2 dedup
                name_hint = (await card.get_attribute("aria-label") or "").strip()
                results.append((href, name_hint))
                new_found += 1

        if new_found == 0:
            no_new_streak += 1
            if no_new_streak >= 4:
                log.info("End of results at %d URLs", len(results))
                break
        else:
            no_new_streak = 0

        feed = await page.query_selector('div[role="feed"]')
        if feed:
            await feed.evaluate("el => el.scrollTop = el.scrollHeight")
        await page.wait_for_timeout(800)

    await context.close()
    log.info("Phase 1 done — collected %d URLs (need %d)", len(results), need)
    return results[:need]


async def _process_url(browser, url: str, idx: int, total: int) -> dict | None:
    """
    Phase 2: Open a place URL in a new page and extract all details.
    """
    context = await browser.new_context(**CONTEXT_OPTS)
    page = await context.new_page()
    try:
        await page.goto(url, wait_until="domcontentloaded", timeout=12000)
        await page.wait_for_timeout(700)
        detail = await _extract_detail(page)
        if detail and detail.get("title") and len(detail["title"]) > 3:
            if detail.get("address") or detail.get("phone"):
                log.info("[%d/%d] %s | %s | %s",
                         idx, total,
                         detail["title"][:40],
                         detail.get("city", ""),
                         detail.get("phone", ""))
                return detail
    except Exception as e:
        log.debug("Error processing %s: %s", url[:60], e)
    finally:
        await context.close()
    return None


async def _scrape_maps_async(query: str, count: int, workers: int = 12) -> list[dict]:
    """Single-query scraper (used by standalone CLI)."""
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=BROWSER_ARGS)
        pairs = await _collect_urls(browser, query, need=int(count * 1.3) + 10)
        urls = [url for url, _ in pairs]
        if not urls:
            await browser.close()
            return []

        log.info("Phase 2 — extracting details for %d URLs (%d workers)", len(urls), workers)
        results = []
        seen_titles = set()
        semaphore = asyncio.Semaphore(workers)

        async def bounded_process(url, idx):
            async with semaphore:
                return await _process_url(browser, url, idx, len(urls))

        completed = await asyncio.gather(
            *[bounded_process(url, i + 1) for i, url in enumerate(urls)],
            return_exceptions=True
        )
        for item in completed:
            if item and isinstance(item, dict):
                key = item["title"].lower()
                if key not in seen_titles:
                    seen_titles.add(key)
                    results.append(item)
            if len(results) >= count:
                break

        await browser.close()

    log.info("Scrape done: %d results (requested %d)", len(results), count)
    return results[:count]


async def _scrape_multi_async(city_queries: list[tuple[str, int]], workers: int = 12) -> list[dict]:
    """
    Multi-city parallel scraper — the fast path used by run_scraper().

    Architecture:
      Phase 1: ALL cities scroll simultaneously (asyncio.gather), each extracting
               (url, name_hint) pairs. name_hint comes from aria-label on search cards
               — available without loading any detail page.
      Pre-dedup: Drop URLs whose name_hint already appeared in another city.
               This eliminates loading the same business twice (e.g. Mr. Rooter in
               every city) and is the biggest single speed gain.
      Phase 2: Only unique URLs processed under one global semaphore(workers).
    """
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=BROWSER_ARGS)

        # Phase 1 — all cities simultaneously
        log.info("Phase 1 — collecting URLs from %d cities in parallel", len(city_queries))
        batches = await asyncio.gather(*[
            _collect_urls(browser, query, need)
            for query, need in city_queries
        ], return_exceptions=True)

        # Pre-dedup by name_hint before any Phase 2 page loads
        seen_names: set[str] = set()
        unique_urls: list[str] = []
        for batch in batches:
            if not isinstance(batch, list):
                continue
            for url, name_hint in batch:
                name_key = name_hint.lower().strip()
                if name_key and name_key in seen_names:
                    continue  # same business already queued from another city
                if name_key:
                    seen_names.add(name_key)
                unique_urls.append(url)

        if not unique_urls:
            await browser.close()
            return []

        log.info("Phase 2 — extracting %d unique URLs (%d workers, pre-deduped from all cities)",
                 len(unique_urls), workers)

        seen_titles: set[str] = set()
        results: list[dict] = []
        lock = asyncio.Lock()
        semaphore = asyncio.Semaphore(workers)

        async def bounded_process(url, idx):
            async with semaphore:
                detail = await _process_url(browser, url, idx, len(unique_urls))
                if detail and isinstance(detail, dict):
                    async with lock:
                        key = detail["title"].lower()
                        if key not in seen_titles:
                            seen_titles.add(key)
                            results.append(detail)
                return detail

        await asyncio.gather(
            *[bounded_process(url, i + 1) for i, url in enumerate(unique_urls)],
            return_exceptions=True
        )
        await browser.close()

    log.info("Multi-city scrape done: %d unique results", len(results))
    return results


# ---------------------------------------------------------------------------
# Public entry points (sync wrappers)
# ---------------------------------------------------------------------------

def scrape_google_maps(query: str, count: int) -> list[dict]:
    """Single-query scrape. Used by standalone CLI."""
    return asyncio.run(_scrape_maps_async(query, count))


def scrape_google_maps_multi(city_queries: list[tuple[str, int]], workers: int = 12) -> list[dict]:
    """
    Multi-city parallel scrape. All cities run simultaneously.
    city_queries: list of (search_query_string, url_count_to_fetch) tuples.
    """
    return asyncio.run(_scrape_multi_async(city_queries, workers))


# ---------------------------------------------------------------------------
# Standalone CLI for testing
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    import argparse, json
    logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

    ap = argparse.ArgumentParser()
    ap.add_argument("--query", required=True, help='e.g. "plumber in Toronto Canada"')
    ap.add_argument("--count", type=int, default=10)
    ap.add_argument("--out", default=".tmp/gmaps_test.json")
    args = ap.parse_args()

    items = scrape_google_maps(args.query, args.count)
    print(f"\nScraped {len(items)} businesses")
    for r in items[:3]:
        print(f"  {r['title']} | {r['city']} | {r['phone']} | {r['website']}")

    from pathlib import Path
    Path(args.out).parent.mkdir(exist_ok=True)
    Path(args.out).write_text(json.dumps(items, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Saved -> {args.out}")
