#!/usr/bin/env python3
"""Regenerate all 3 manual PDFs: WATER_TREATMENT_MANUAL.pdf, LOGBOOK.pdf, and
CHEMICAL_MIXING_GUIDE.pdf.

Usage: python3 generate_pdfs.py
"""
import os
import markdown
from playwright.sync_api import sync_playwright
from generate_chemical_mixing_guide import build_guide as build_chemical_mixing_guide

ROOT = os.path.dirname(os.path.abspath(__file__))
SECTIONS_DIR = os.path.join(ROOT, "sections")
MD_EXTENSIONS = ["tables", "fenced_code", "sane_lists", "nl2br"]

CSS = """
@page { size: Letter; margin: 0.85in 0.75in; }
body { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11pt; line-height: 1.45; color: #1a1a1a; }
h1 { font-size: 22pt; border-bottom: 3px solid #1a4d8f; padding-bottom: 6px; margin-top: 0; }
h2 { font-size: 16pt; color: #1a4d8f; margin-top: 28px; border-bottom: 1px solid #ccc; padding-bottom: 3px; }
h3 { font-size: 13pt; color: #333; margin-top: 18px; }
h4 { font-size: 11.5pt; color: #333; margin-top: 14px; }
p, li { font-size: 10.5pt; }
table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 9.5pt; }
th, td { border: 1px solid #999; padding: 5px 8px; text-align: left; vertical-align: top; }
th { background: #1a4d8f; color: white; }
tr:nth-child(even) { background: #f4f7fb; }
code { background: #eef1f6; padding: 1px 5px; border-radius: 3px; font-size: 9.5pt; }
pre { background: #f0f0f0; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 9pt; }
blockquote { border-left: 4px solid #1a4d8f; margin: 10px 0; padding: 4px 14px; background: #f4f7fb; color: #333; }
hr { border: none; border-top: 1px solid #ccc; margin: 26px 0; }
.section-break { page-break-before: always; }
.cover { text-align: center; padding-top: 30%; page-break-after: always; }
.cover h1 { border: none; font-size: 30pt; }
.cover p { font-size: 13pt; color: #555; }
a { color: #1a4d8f; }
"""


def render_pdf(html_body, out_path, title):
    html = f"""<!DOCTYPE html><html><head><meta charset="utf-8">
<title>{title}</title><style>{CSS}</style></head><body>{html_body}</body></html>"""
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path="/opt/pw-browsers/chromium")
        page = browser.new_page()
        page.set_content(html)
        page.pdf(path=out_path, format="Letter", print_background=True,
                 margin={"top": "0.85in", "bottom": "0.85in", "left": "0.75in", "right": "0.75in"})
        browser.close()
    print(f"Wrote {out_path}")


def build_manual():
    section_files = sorted(f for f in os.listdir(SECTIONS_DIR) if f.endswith(".md"))
    cover = """<div class="cover">
<h1>Water Treatment Manual</h1>
<p>Site Operations Reference</p>
<p>Created by Oliver Peters &middot; June 2026</p>
</div>"""
    body_parts = [cover]
    for fname in section_files:
        with open(os.path.join(SECTIONS_DIR, fname), encoding="utf-8") as f:
            text = f.read()
        section_html = markdown.markdown(text, extensions=MD_EXTENSIONS)
        body_parts.append(f'<div class="section-break">{section_html}</div>')
    render_pdf("\n".join(body_parts), os.path.join(ROOT, "WATER_TREATMENT_MANUAL.pdf"), "Water Treatment Manual")


def build_logbook():
    with open(os.path.join(ROOT, "LOGBOOK.md"), encoding="utf-8") as f:
        text = f.read()
    html_body = markdown.markdown(text, extensions=MD_EXTENSIONS)
    render_pdf(html_body, os.path.join(ROOT, "LOGBOOK.pdf"), "Daily Logbook")


if __name__ == "__main__":
    build_manual()
    build_logbook()
    build_chemical_mixing_guide()
