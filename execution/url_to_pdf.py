"""
execution/url_to_pdf.py
-----------------------
PURPOSE: Paste a URL, get the page's content saved as a PDF.
DIRECTIVE: directives/url_to_pdf.md
INPUTS:  One or more URLs (CLI args), or none for an interactive prompt,
         or --serve for a local web page with a paste box.
OUTPUTS: PDF files in .tmp/pdfs/ (or --out DIR). In --serve mode the PDF is
         also sent straight to the browser as a download.

Modes:
  page    — full page exactly as a browser prints it (default)
  article — strips nav/ads/sidebars/footers and keeps the main readable content

Examples:
  python execution/url_to_pdf.py https://example.com
  python execution/url_to_pdf.py https://a.com https://b.com --mode article
  python execution/url_to_pdf.py                 # prompts: paste URLs one by one
  python execution/url_to_pdf.py --serve         # open http://localhost:8765
"""

import argparse
import asyncio
import html
import logging
import os
import re
import sys
import threading
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse

from playwright.async_api import async_playwright

# ---------------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------------

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)

DEFAULT_OUT = Path(__file__).parent.parent / ".tmp" / "pdfs"

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
)

# Runs inside the page in "article" mode: keep the main content, drop chrome.
ARTICLE_JS = r"""
() => {
  const pick = () => {
    const cands = [...document.querySelectorAll(
      'article, main, [role="main"], #content, .content, .post, .entry-content, .article-body'
    )];
    if (!cands.length) return document.body;
    // Choose the candidate with the most text
    return cands.sort((a, b) => b.innerText.length - a.innerText.length)[0];
  };
  const root = pick().cloneNode(true);
  root.querySelectorAll(
    'script, style, noscript, iframe, nav, header, footer, aside, form, button, ' +
    '[role="navigation"], [role="banner"], [role="complementary"], [aria-hidden="true"], ' +
    '[class*="cookie"], [id*="cookie"], [class*="newsletter"], [class*="share"], ' +
    '[class*="advert"], [class*="promo"], [class*="related"], [class*="comment"]'
  ).forEach(el => el.remove());
  const title = document.title;
  document.head.innerHTML = '<meta charset="utf-8"><title></title>';
  document.title = title;
  const style = document.createElement('style');
  style.textContent = `
    body { font-family: Georgia, 'Times New Roman', serif; font-size: 12pt;
           line-height: 1.6; color: #111; max-width: 46em; margin: 0 auto; }
    h1, h2, h3, h4 { font-family: Helvetica, Arial, sans-serif; line-height: 1.25; }
    img, video, figure, svg { max-width: 100% !important; height: auto !important; }
    pre, code { white-space: pre-wrap; word-break: break-word; font-size: 10pt; }
    table { border-collapse: collapse; } td, th { border: 1px solid #ccc; padding: 4px; }
    a { color: #1a4fa0; }
    .src { font: 9pt Helvetica, Arial, sans-serif; color: #666; margin-bottom: 1.5em; }
  `;
  document.head.appendChild(style);
  document.body.innerHTML =
    `<h1>${title.replace(/</g, '&lt;')}</h1>` +
    `<div class="src">${location.href.replace(/</g, '&lt;')}</div>`;
  document.body.appendChild(root);
}
"""

# Scroll through the page so lazy-loaded images/content render before printing.
SCROLL_JS = r"""
async () => {
  const step = window.innerHeight;
  for (let y = 0; y < document.body.scrollHeight && y < 60000; y += step) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 150));
  }
  window.scrollTo(0, 0);
  document.querySelectorAll('img[loading="lazy"]').forEach(i => i.loading = 'eager');
}
"""


# ---------------------------------------------------------------------------
# Core logic
# ---------------------------------------------------------------------------

def normalize_url(url: str) -> str:
    """Trim whitespace and add https:// if the scheme was left off."""
    url = url.strip()
    if not re.match(r"^https?://", url, re.I):
        url = "https://" + url
    parsed = urlparse(url)
    if not parsed.netloc:
        raise ValueError(f"Not a valid URL: {url!r}")
    return url


def make_filename(title: str, url: str) -> str:
    """Build a safe, readable PDF filename from the page title (or the domain)."""
    base = title.strip() or urlparse(url).netloc
    base = re.sub(r"[^\w\s.-]", "_", base)
    base = re.sub(r"\s+", "_", base).strip("._")[:80] or "page"
    return f"{base}_{datetime.now():%Y%m%d_%H%M%S}.pdf"


async def _launch(pw):
    """Launch Chromium (honouring HTTPS_PROXY); fall back to a pre-installed browser path."""
    opts = {}
    proxy = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy")
    if proxy:
        # Chromium wants credentials separately from the proxy URL
        pu = urlparse(proxy)
        opts["proxy"] = {"server": f"{pu.scheme}://{pu.hostname}:{pu.port}"}
        if pu.username:
            opts["proxy"].update(username=unquote(pu.username), password=unquote(pu.password or ""))
        no_proxy = os.environ.get("NO_PROXY") or os.environ.get("no_proxy")
        if no_proxy:
            opts["proxy"]["bypass"] = no_proxy
    try:
        return await pw.chromium.launch(**opts)
    except Exception:
        alt = os.environ.get("PW_CHROMIUM_PATH", "/opt/pw-browsers/chromium")
        if Path(alt).exists():
            return await pw.chromium.launch(executable_path=alt, **opts)
        raise


async def url_to_pdf(url: str, out_dir: Path, mode: str = "page", browser=None) -> Path:
    """
    Download a URL's content and save it as a PDF.

    Args:
        url: The page to capture (scheme optional).
        out_dir: Directory to write the PDF into.
        mode: "page" (as printed by the browser) or "article" (main content only).
        browser: Optional already-launched Playwright browser to reuse.

    Returns:
        Path to the written PDF.
    """
    url = normalize_url(url)
    out_dir.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as pw:
        own_browser = browser is None
        if own_browser:
            browser = await _launch(pw)
        context = await browser.new_context(
            user_agent=USER_AGENT,
            viewport={"width": 1280, "height": 900},
            accept_downloads=True,
        )
        page = await context.new_page()
        try:
            log.info("Opening %s", url)
            # If the URL is already a PDF, just save the bytes.
            resp = await context.request.get(url, timeout=60_000)
            ctype = resp.headers.get("content-type", "")
            if "application/pdf" in ctype:
                path = out_dir / make_filename(Path(urlparse(url).path).stem, url)
                path.write_bytes(await resp.body())
                log.info("URL is already a PDF — saved %s", path)
                return path

            try:
                await page.goto(url, wait_until="networkidle", timeout=45_000)
            except Exception:
                # Some sites never go network-idle (ads, websockets); DOM is enough.
                await page.goto(url, wait_until="domcontentloaded", timeout=60_000)
                await page.wait_for_timeout(3000)

            await page.evaluate(SCROLL_JS)
            await page.wait_for_timeout(800)
            title = await page.title()

            if mode == "article":
                await page.evaluate(ARTICLE_JS)
                await page.wait_for_timeout(500)
                await page.emulate_media(media="print")
            else:
                await page.emulate_media(media="screen")

            path = out_dir / make_filename(title, url)
            await page.pdf(
                path=str(path),
                format="A4",
                print_background=True,
                margin={"top": "15mm", "bottom": "15mm", "left": "12mm", "right": "12mm"},
                display_header_footer=True,
                header_template="<span></span>",
                footer_template=(
                    '<div style="font-size:8px;width:100%;text-align:center;color:#888;">'
                    f"{html.escape(url[:120])} — <span class='pageNumber'></span>/"
                    "<span class='totalPages'></span></div>"
                ),
            )
            log.info("Saved %s", path)
            return path
        finally:
            await context.close()
            if own_browser:
                await browser.close()


def convert(url: str, out_dir: Path, mode: str) -> Path:
    """Synchronous wrapper around url_to_pdf."""
    return asyncio.run(url_to_pdf(url, out_dir, mode))


# ---------------------------------------------------------------------------
# Web UI (--serve)
# ---------------------------------------------------------------------------

FORM_HTML = """<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>URL to PDF</title>
<style>
  body { font-family: system-ui, sans-serif; background:#f4f5f7; margin:0; padding:16px; }
  .card { max-width:640px; margin:10vh auto; background:#fff; border-radius:12px;
          padding:28px; box-shadow:0 2px 12px rgba(0,0,0,.08); }
  h1 { margin:0 0 6px; font-size:22px; } p { color:#555; margin:0 0 18px; }
  input[type=text] { width:100%; box-sizing:border-box; padding:12px; font-size:16px;
          border:1px solid #ccc; border-radius:8px; }
  .row { display:flex; gap:16px; align-items:center; margin:14px 0; flex-wrap:wrap; }
  button { background:#1a4fa0; color:#fff; border:0; border-radius:8px; padding:12px 20px;
           font-size:16px; cursor:pointer; } button:disabled { opacity:.6; }
  .err { color:#b00020; margin-top:12px; } #status { color:#555; margin-top:12px; }
</style></head><body><div class="card">
<h1>URL &rarr; PDF</h1><p>Paste a link and download its content as a PDF.</p>
<form id="f" method="post" action="/convert">
  <input type="text" name="url" placeholder="https://example.com/article" required autofocus>
  <div class="row">
    <label><input type="radio" name="mode" value="page" checked> Full page</label>
    <label><input type="radio" name="mode" value="article"> Article only (clean text)</label>
  </div>
  <button id="b" type="submit">Download PDF</button>
</form>
<div id="status"></div>__ERROR__
</div>
<script>
document.getElementById('f').addEventListener('submit', async (e) => {
  e.preventDefault();
  const b = document.getElementById('b'), s = document.getElementById('status');
  b.disabled = true; s.textContent = 'Rendering page… this can take up to a minute.';
  try {
    const r = await fetch('/convert', { method: 'POST', body: new URLSearchParams(new FormData(e.target)) });
    if (!r.ok) throw new Error(await r.text());
    const blob = await r.blob();
    const name = (r.headers.get('Content-Disposition') || '').match(/filename="(.+)"/)?.[1] || 'page.pdf';
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: name });
    a.click(); s.textContent = 'Done: ' + name;
  } catch (err) { s.innerHTML = '<span class="err">Failed: ' + err.message.replace(/</g,'&lt;') + '</span>'; }
  b.disabled = false;
});
</script></body></html>"""


def serve(host: str, port: int, out_dir: Path) -> None:
    """Run a small local web page with a paste box that returns the PDF."""
    lock = threading.Lock()  # one render at a time keeps memory use predictable

    class Handler(BaseHTTPRequestHandler):
        def _send(self, code, body: bytes, ctype: str, extra=None):
            self.send_response(code)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(len(body)))
            for k, v in (extra or {}).items():
                self.send_header(k, v)
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self):
            self._send(200, FORM_HTML.replace("__ERROR__", "").encode(), "text/html; charset=utf-8")

        def do_POST(self):
            if self.path != "/convert":
                return self._send(404, b"Not found", "text/plain")
            length = int(self.headers.get("Content-Length", 0))
            form = parse_qs(self.rfile.read(length).decode())
            url = (form.get("url") or [""])[0]
            mode = (form.get("mode") or ["page"])[0]
            if mode not in ("page", "article"):
                mode = "page"
            try:
                with lock:
                    path = convert(url, out_dir, mode)
            except Exception as e:
                log.error("Failed for %s: %s", url, e)
                return self._send(500, str(e).splitlines()[0].encode(), "text/plain; charset=utf-8")
            self._send(200, path.read_bytes(), "application/pdf",
                       {"Content-Disposition": f'attachment; filename="{path.name}"'})

        def log_message(self, fmt, *args):
            log.info("web: " + fmt, *args)

    server = ThreadingHTTPServer((host, port), Handler)
    log.info("Open http://%s:%d in your browser (Ctrl+C to stop)", host, port)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Save a web page's content as a PDF.")
    parser.add_argument("urls", nargs="*", help="URL(s) to convert. Omit to be prompted.")
    parser.add_argument("--mode", choices=["page", "article"], default="page",
                        help="page = full page as printed; article = main content only")
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT, help="Output folder")
    parser.add_argument("--serve", action="store_true", help="Start the local web UI")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()

    if args.serve:
        serve(args.host, args.port, args.out)
        return

    urls = args.urls
    interactive = not urls
    failures = 0
    while True:
        if interactive:
            try:
                raw = input("\nPaste a URL (or press Enter to quit): ").strip()
            except EOFError:
                break
            if not raw:
                break
            urls = [raw]
        for url in urls:
            try:
                path = convert(url, args.out, args.mode)
                print(f"PDF saved: {path}")
            except Exception as e:
                failures += 1
                log.error("Failed for %s: %s", url, str(e).splitlines()[0])
        if not interactive:
            break

    sys.exit(1 if failures else 0)


if __name__ == "__main__":
    main()
