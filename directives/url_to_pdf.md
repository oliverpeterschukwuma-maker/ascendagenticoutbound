# Directive: URL to PDF

> **Status:** Active  
> **Last Updated:** 2026-10-27  
> **Version:** 1.0

## Goal

Paste a web link and get that page's content saved as a PDF — either the full page as a browser would print it, or a clean "article only" version with menus, ads, sidebars and footers stripped out.

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urls` | list | No | One or more URLs. `https://` is added if missing. Omit to be prompted to paste URLs one at a time. |
| `--mode` | string | No | `page` (default, full page) or `article` (main readable content only) |
| `--out` | path | No | Output folder, defaults to `.tmp/pdfs/` |
| `--serve` | flag | No | Start a local web page with a paste box at http://127.0.0.1:8765 |

## Tools / Scripts

1. `execution/url_to_pdf.py` — renders the URL in headless Chromium (Playwright) and prints it to PDF.

## Usage

```bash
python execution/url_to_pdf.py https://example.com/article              # one URL
python execution/url_to_pdf.py https://a.com https://b.com --mode article
python execution/url_to_pdf.py                                         # paste URLs interactively
python execution/url_to_pdf.py --serve                                 # web UI → browser download
```

First-time setup: `pip install -r requirements.txt && playwright install chromium`.

## Outputs

- PDF named after the page title + timestamp, in `.tmp/pdfs/` (or `--out`).
- Web UI mode also sends the PDF straight to the browser as a download.
- Every page has a footer with the source URL and page numbers.

## Edge Cases & Notes

- **URL is already a PDF:** detected by `Content-Type: application/pdf` and saved as-is (no re-render).
- **Lazy-loaded images:** the script scrolls the full page before printing (capped at 60,000px).
- **Pages that never go network-idle** (ads, live widgets): falls back to DOM-loaded + 3s wait.
- **Proxies:** honours `HTTPS_PROXY` (credentials in the URL are supported) and `NO_PROXY`.
- **Article mode** picks the largest `article`/`main`/content block; on unusual layouts it may keep too much or too little — use `page` mode then.
- **Login-walled / paywalled pages** render as the logged-out view; there is no cookie/session support.
- Exit code `1` if any URL failed (CLI mode).
- Interactive prompting only happens when no URLs are passed — pass URLs as args for unattended runs.

## Changelog

| Date | Change |
|------|--------|
| 2026-10-27 | Initial version |
