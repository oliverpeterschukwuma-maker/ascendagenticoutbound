#!/usr/bin/env python3
"""Build CHEMICAL_MIXING_GUIDE.pdf from the photos in images/chemical_mixing_guide/.

Usage: python3 generate_chemical_mixing_guide.py

This is the photo-illustrated quick-reference companion to Section 5 (Chemical
Dosing) and Section 6.16 (Equipment Guide) of the full manual. Unlike the main
manual, this guide has no markdown source -- its content lives directly in
this script so the ratios/steps stay in sync with whatever Section 5 says.
"""
import os
import base64
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(ROOT, "images", "chemical_mixing_guide")

CSS = """
@page { size: Letter; margin: 0.5in; }
body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; margin: 0; }
h1 { font-size: 20pt; color: #1a4d8f; margin: 0 0 2px 0; }
.subtitle { font-size: 10pt; color: #555; margin: 0; }
.credit { font-size: 9.5pt; color: #777; margin: 2px 0 16px 0; }
.card { background: #f7f7f7; border: 1px solid #ddd; border-radius: 6px; padding: 14px 16px; margin-bottom: 14px;
        break-inside: avoid; page-break-inside: avoid; }
.card h2 { font-size: 13pt; color: #1a4d8f; margin: 0 0 8px 0; }
.pill { display: inline-block; background: #e3f3e6; color: #1f5c2e; font-size: 10pt; font-weight: bold;
        border-radius: 4px; padding: 4px 10px; margin-bottom: 10px; }
.row { display: flex; gap: 14px; }
.photo-col { flex: 0 0 130px; }
.photo-col img { width: 130px; border-radius: 4px; display: block; }
.photo-col .cap { font-size: 8pt; color: #666; text-align: center; margin-top: 4px; }
.photo-col.two { flex: 0 0 270px; display: flex; gap: 8px; }
.photo-col.two .single { flex: 1; }
.photo-col.two img { width: 125px; }
.steps { flex: 1; font-size: 10pt; line-height: 1.5; }
.steps ol { margin: 0; padding-left: 20px; }
.callout { background: #fff8e1; border: 1px solid #e0b94a; border-radius: 4px; padding: 8px 10px;
           margin-top: 10px; font-size: 9.5pt; color: #6b5210; }
.note { font-size: 9pt; color: #555; margin-top: 8px; }
.footer { font-size: 8.5pt; color: #888; margin-top: 6px; }
"""


def _img(fname):
    path = os.path.join(IMG_DIR, fname)
    with open(path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode("ascii")
    return f"data:image/jpeg;base64,{b64}"


def build_html():
    lime_img = _img("lime.jpeg")
    pacl_img = _img("pacl.jpeg")
    floc_img = _img("flocculant.jpeg")
    mixer1_img = _img("mixer1.jpeg")
    mixer2_img = _img("mixer2.jpeg")

    return f"""<!DOCTYPE html><html><head><meta charset="utf-8">
<title>Chemical Mixing Guide</title><style>{CSS}</style></head><body>

<h1>Chemical Mixing Guide</h1>
<p class="subtitle">Lime &middot; PACl Coagulant &middot; Flocculant &middot; SUMAS Water Treatment, Kamloops BC</p>
<p class="credit">Created by Oliver Peters &middot; June 2026</p>

<div class="card">
  <h2>1. Lime</h2>
  <span class="pill">1 bag (50 lbs) per 200L of water</span>
  <div class="row">
    <div class="photo-col">
      <img src="{lime_img}">
      <div class="cap">TEXLIME High Calcium Hydrated Lime &mdash; confirmed on-site bag</div>
    </div>
    <div class="steps">
      <ol>
        <li>Add 200L of clean water to the mixing tote.</li>
        <li>Add 1 bag (50 lbs) of lime.</li>
        <li>Turn on the air mixer (open the red valve) &mdash; let it blend.</li>
        <li><b>Keep the mixer running the whole time you're pumping it into the system.</b> If the blade stops, the lime settles and hardens fast, and the dose won't work.</li>
      </ol>
      <div class="callout"><b>Critical:</b> this is not "mix once and walk away." The blade has to stay on for as long as you're drawing lime out &mdash; mixing and pumping happen at the same time.</div>
    </div>
  </div>
</div>

<div class="card">
  <h2>2. PACl Coagulant</h2>
  <span class="pill">1 bag (25kg dry powder) per 100L of clean water</span>
  <div class="row">
    <div class="photo-col">
      <img src="{pacl_img}">
      <div class="cap">Poly Aluminum Chloride, 25kg bag &mdash; confirmed on-site bag</div>
    </div>
    <div class="steps">
      <ol>
        <li>Add 100L of clean water to the mixing tote (not the water being treated).</li>
        <li>Add 1 bag (25kg) of dry PACl powder.</li>
        <li>Mix until dissolved.</li>
        <li><b>Let it sit 3 hours before using</b> &mdash; don't dose straight from a freshly mixed batch.</li>
        <li>Meter the resulting solution into the process with the dosing pump.</li>
      </ol>
      <div class="callout"><b>Plan ahead:</b> mix a new batch before you run out mid-shift &mdash; the 3-hour rest means you can't make more on demand.</div>
    </div>
  </div>
</div>

<div class="card">
  <h2>3. Flocculant (Flopham Dry Polymer)</h2>
  <span class="pill">100g per 200L of water (~500 mg/L) &mdash; half a scoop from the white pail</span>
  <div class="row">
    <div class="photo-col">
      <img src="{floc_img}">
      <div class="cap">Flopham water-soluble polymer &mdash; confirmed product label</div>
    </div>
    <div class="steps">
      <ol>
        <li>Add 200L of clean water to the mixing tote.</li>
        <li>Turn the mixer on first (open the red valve &mdash; go gradual for this one, see Section 4 below).</li>
        <li>Sprinkle the Flopham powder in slowly while the mixer keeps running &mdash; never dump it in all at once.</li>
        <li>Keep mixing until it looks clear and uniform &mdash; about 1 hour.</li>
        <li>Meter the resulting solution into the process alongside PACl. <b>Rule: flocculant dose must always be equal to or more than the coagulant dose &mdash; never less.</b></li>
      </ol>
      <div class="callout"><b>Never</b> dump dry polymer straight into still water &mdash; it forms lumps that won't dissolve. Always pour it in slowly while the mixer is running.</div>
      <div class="note">&#9999;&#65039; Updated: this replaces an earlier 1kg/1000L, 24-hour-rest ratio logged here for a different product/account. The Flopham dry polymer actually in routine use at the C Can is mixed at 100g/200L and only needs about 1 hour before use &mdash; see Section 5.5 of the full manual.</div>
    </div>
  </div>
</div>

<div class="card">
  <h2>4. The Mixer (Air-Driven Tote Mixer)</h2>
  <div class="row">
    <div class="photo-col two">
      <div class="single"><img src="{mixer1_img}"><div class="cap">Mixer clamped on top of the tote</div></div>
      <div class="single"><img src="{mixer2_img}"><div class="cap">Close-up: red air valve, shaft &amp; propeller</div></div>
    </div>
    <div class="steps">
      <ol>
        <li>Connect the air hose to the compressed air supply (quick-connect fitting).</li>
        <li>Open the <b>red-handled valve</b> &mdash; air spins the motor, which turns the propeller inside the tote.</li>
        <li>Open it gradually for flocculant &mdash; full-blast air can tear the polymer apart instead of dissolving it. Lime and PACl can run full open.</li>
        <li>Close the red valve to stop.</li>
      </ol>
      <div class="callout"><b>Don't confuse it with the nearby cross-handled valve</b> &mdash; that one's the tote's drain/outlet, not the mixer.</div>
    </div>
  </div>
</div>

<p class="footer">Full detail and safety info: Section 5 (Chemical Dosing) and Section 6.16 (Equipment Guide) of the full manual.</p>

</body></html>"""


def build_guide():
    html = build_html()
    out_path = os.path.join(ROOT, "CHEMICAL_MIXING_GUIDE.pdf")
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path="/opt/pw-browsers/chromium")
        page = browser.new_page()
        page.set_content(html)
        page.pdf(path=out_path, format="Letter", print_background=True,
                 margin={"top": "0.5in", "bottom": "0.5in", "left": "0.5in", "right": "0.5in"})
        browser.close()
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    build_guide()
