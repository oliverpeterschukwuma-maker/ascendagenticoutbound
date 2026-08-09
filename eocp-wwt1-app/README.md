# EOCP Study App — Operator-in-Training (OIT) + Wastewater Treatment Level I

A self-contained study application covering **two EOCP exams** (British Columbia / Yukon).
Switch between them with the **OIT / WWT 1** button at the top right. Progress on each is
saved separately.

## The two tracks

| | **OIT** (Operator-in-Training) | **WWT 1** (Wastewater Treatment Level I) |
|---|---|---|
| Scope | **All four streams** — water treatment, water distribution, wastewater collection, wastewater treatment | Wastewater treatment only |
| Depth | Broad and shallow, practical, safety-heavy | Narrow and deep |
| Questions | 100 | 100 scored + up to 10 unscored |
| Entry | High school + 3 months (500 h) experience **or** 90 h (9.0 CEUs) training | High school + 12 months (1,800 h) experience |
| Required? | **Optional** — not a prerequisite for Level I | — |
| In this app | 8 modules, 12 lessons, 40 questions, 91 flashcards | 12 modules, 30 lessons, 128 questions, 402 flashcards, math, 5 mock exams |

**Important:** studying the Level I material will NOT cover the OIT exam — half of OIT is
water treatment and distribution, which Level I never touches. Do the OIT track for OIT.

Math training, the formula sheet and the five mock exams are **Level I only** and are hidden
in the OIT track, because OIT has no published formula sheet or calculation weighting.

---

The Level I track is built around the current **WPI/ABC standardized Class I exam**
framework introduced in **July 2025**.

## Running it

Open `index.html` in any browser. That's it — no build step, no server, no installs.
Plain `<script>` tags are used deliberately (not ES modules) so it works from `file://`.

On a phone: copy the folder to the device, or serve it from any static host and add it to
your home screen. All progress is stored in `localStorage`, so it works offline after the
first load and persists between sessions.

## What the exam actually looks like

EOCP administers the WPI (Water Professionals International, formerly ABC) standardized exams.
The Class I Wastewater Treatment exam is **100 questions**:

| Duty area | Questions | Notes |
|---|---|---|
| Equipment Evaluation, Maintenance and/or Operation | 39 | 13 recall, 26 application, 0 calculations |
| Treatment Process Evaluation and Adjustment | 38 | 6 recall, 32 application, 9 calculations |
| Laboratory Analysis | 13 | |
| Security, Safety and Administrative Procedures | 10 | |

Roughly **40% recall / 60% application**, with about **14% of all questions** requiring
calculations.

**Exam rules (OFFICIAL, verified against EOCP and WPI material):**

| | |
|---|---|
| Format | 100 **scored** questions + up to 10 **unscored pre-test** questions, scattered and unidentified |
| Duration | **3 hours** |
| Passing standard | **70% scaled score units** |
| Conditions | **Closed book** — no personal books, notes or **programmable calculators** |
| Provided | **ABC Formula/Conversion Table**; a basic four-function calculator is sufficient |
| Units | Calculations appear in **both US Standard and Metric** — US first, metric in parentheses |

**EOCP Level I requirements:** 12 months / 1,800 hours of directly related hands-on
experience, proof of high school completion, and employment (or an offer) with a BC or
Yukon employer. Certification is renewed with CEUs.

Because the exam is dual-unit, **every math topic in this app carries a US Units practice
problem alongside the metric ones.**

The in-app **Exam Requirements** page carries all of this with sources, and flags what could
*not* be verified — fees, the raw-to-scaled score conversion, and whether EOCP applies the
WPI pre-test policy — as **UNVERIFIED — CONFIRM WITH EOCP** rather than guessing.

## Files

| File | Contains |
|---|---|
| `index.html` | Page shell and script loading |
| `styles.css` | All styling; light/dark themes via CSS custom properties |
| `app.js` | UI, routing, state, grading, readiness logic — **no study content** |
| `curriculum.js` | 12 modules, 30 lessons, glossary source (215 terms) |
| `questions.js` | 122 practice questions (also power the section tests) |
| `flashcards.js` | 397 cards (auto-generated definitions + hand-written concept cards) |
| `math.js` | 18 formula topics, 65 practice problems (metric + US), conversion tables |
| `exams.js` | 125-question mock bank + the 5 exam definitions |
| `references.js` | Exam requirements, reference library, 3 study plans |

Study content is kept entirely separate from UI code, so you can add material without
touching `app.js`.

## Adding your own content

**A practice question** — append to the array in `questions.js`:

```js
{id:'q999', m:'m4', l:'m4l2', t:'mc',
 q:'Your question text?',
 o:['Option A','Option B','Option C','Option D'],
 a:0,                       // zero-based index of the correct answer
 e:'Why that answer is right.'}
```

`m` is the module id, `l` the lesson id, `t` is `mc` (knowledge), `sc` (scenario) or
`calc` (calculation). It appears automatically in that lesson's practice set and in the
module's section test.

**A flashcard** — append to `EXTRA_CARDS` in `flashcards.js`:

```js
{m:'m4', tag:'concept', q:'Front of card?', a:'Back of card.'}
```

Definition cards are generated automatically from every `terms` entry in `curriculum.js`,
so adding a term to a lesson also creates its flashcard and glossary entry.

**A mock exam question** — append to `MOCK_BANK` in `exams.js` with `d` (duty: `TPE`,
`EQP`, `LAB`, `SSA`) and `lvl` (1 basic, 2 intermediate, 3 difficult). Exams re-assemble
themselves from the bank using the real duty weighting.

**A math topic** — append to `MATH_TOPICS` in `math.js`. Each needs a formula, variable
table, a "when to use it" note, a worked example, and Easy/Medium/Hard/US Units practice
problems with a numeric answer and tolerance.

## How progress and readiness work

- **Flashcards** use a 5-box Leitner system. Right moves a card up a box, wrong resets it
  to box 1. Boxes resurface after 0, 1, 3, 7 and 16 days.
- **Section tests** hide all answers until submission, then show every wrong answer with an
  explanation and link to the lesson behind it.
- **Mock exams** grade by duty area and flag any area below 70%.
- **Weak Areas** combines section test scores with practice accuracy; a module appears when
  the combined score drops under 70%.
- **Exam Readiness** requires *all seven* checks to pass before it will say "Exam Ready" —
  every lesson read, all 12 section tests done, test/math/mock averages at 80%+, all 5 mock
  exams taken, and zero weak areas. It is deliberately hard to reach.

Reset everything from the bottom of the navigation drawer.

## Content audit (August 2026)

A full exam-content audit was run against the current framework. Findings and fixes:

- **Answer-position bias.** Every question was authored with the correct answer first, so
  100% of answers were option A — trivially gameable. Options are now shuffled
  deterministically from each question's id, so the correct answer moves but a review
  screen still matches what you answered. Any question you add with `a:0` is handled
  automatically.
- **Dual units.** The exam is US + metric; the app was metric-only. Added US Standard
  practice problems across all calculation topics, plus US conversion constants (7.48 gal/ft³,
  62.4 lb/ft³, 8.34 lb/gal, 694.4 gpm/MGD).
- **Flow equalization was missing** although the Need-to-Know Criteria names it as a
  preliminary treatment process. Added a full lesson (with grinding/comminution), plus
  flashcards, practice and mock questions.
- **PRNG bug.** `seed * 1103515245` overflowed JavaScript's 2^53 exact-integer range, so
  every seed collapsed to the same permutation. Fixed with `Math.imul`.
- **Duplicate questions** between the practice and mock banks (11 exact or near-duplicate
  stems) were rewritten so the two banks stay distinct.
- **Length cues.** In 12 questions the correct option was far longer than the distractors.
  Distractors were lengthened to remove the tell.
- **Coverage:** 44/44 Need-to-Know areas have a lesson, flashcards and questions (100%).

## Honesty notes

- The five mock exams are **original questions**, not real EOCP or WPI exam questions. They
  test the same knowledge areas as the published Need-to-Know Criteria.
- The 80% readiness benchmark is **this app's own internal study benchmark, NOT an EOCP
  passing requirement**. It is set deliberately above the real standard to leave margin.
  EOCP's official passing standard is **70% scaled score units**.
- **Links could not be opened and confirmed live.** The network policy on the build machine
  blocks eocp.ca and gowpi.org, so URLs were gathered from indexed search results. They are
  best-known addresses, not verified-live links.
- Where the official material doesn't state something, the app says so rather than inventing it.

## Sources

- [WPI — Wastewater Treatment Class I Need-to-Know Criteria (June 2025)](https://www.gowpi.org/wp-content/uploads/2025/06/WastewaterTreatment-%E2%80%93-Class-1.pdf)
- [WPI — Standardized Wastewater Treatment Operator Exams](https://gowpi.org/services/abc-testing/standardized-exams/standardized-wastewater-treatment-operator-exams/)
- [EOCP — New Standardized Exams, July 2025](https://eocp.ca/operator-digest/new-standardized-exams-coming-in-july-2025/)
- [EOCP — How to Become an Operator](https://eocp.ca/certified-operators/how-to-become-an-operator/)
- [EOCP — Exam Preparation](https://eocp.ca/certified-operators/preparing-for-your-exam/)
- [ABC/EOCP Canadian Formula & Conversion Table — Wastewater](https://eocp.ca/wp-content/uploads/2015/03/ABC-Formula-Sheet-WWTWWC.pdf)
