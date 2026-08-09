# EOCP Wastewater Treatment Level I — Study & Exam Prep

A self-contained study application for the **EOCP Wastewater Treatment Level I** certification
(British Columbia / Yukon), built around the current **WPI/ABC standardized Class I exam**
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
calculations. A **formula and conversion table is provided at the exam** — the skill being
tested is choosing the right formula and handling units, not memorising them.

**EOCP Level I requirements:** 12 months / 1,800 hours of directly related hands-on
experience, proof of high school completion, and employment (or an offer) with a BC or
Yukon employer. Certification is renewed with CEUs.

The in-app **Exam Requirements** page carries all of this with sources, and explicitly lists
what could *not* be verified (exam duration, pass mark, fees) rather than guessing at it.

## Files

| File | Contains |
|---|---|
| `index.html` | Page shell and script loading |
| `styles.css` | All styling; light/dark themes via CSS custom properties |
| `app.js` | UI, routing, state, grading, readiness logic — **no study content** |
| `curriculum.js` | 12 modules, 29 lessons, glossary source |
| `questions.js` | 114 practice questions (also power the section tests) |
| `flashcards.js` | 382 cards (auto-generated definitions + hand-written concept cards) |
| `math.js` | 18 formula topics, 54 practice problems, conversion table |
| `exams.js` | 108-question mock bank + the 5 exam definitions |
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
table, a "when to use it" note, a worked example, and Easy/Medium/Hard practice problems
with a numeric answer and tolerance.

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

## Honesty notes

- The five mock exams are **original questions**, not real EOCP or WPI exam questions. They
  test the same knowledge areas as the published Need-to-Know Criteria.
- The 80% readiness benchmark is this app's own standard. EOCP's official pass mark could not
  be verified during research — **confirm it with EOCP directly**.
- Where the official material doesn't state something, the app says so rather than inventing it.

## Sources

- [WPI — Wastewater Treatment Class I Need-to-Know Criteria (June 2025)](https://www.gowpi.org/wp-content/uploads/2025/06/WastewaterTreatment-%E2%80%93-Class-1.pdf)
- [WPI — Standardized Wastewater Treatment Operator Exams](https://gowpi.org/services/abc-testing/standardized-exams/standardized-wastewater-treatment-operator-exams/)
- [EOCP — New Standardized Exams, July 2025](https://eocp.ca/operator-digest/new-standardized-exams-coming-in-july-2025/)
- [EOCP — How to Become an Operator](https://eocp.ca/certified-operators/how-to-become-an-operator/)
- [EOCP — Exam Preparation](https://eocp.ca/certified-operators/preparing-for-your-exam/)
- [ABC/EOCP Canadian Formula & Conversion Table — Wastewater](https://eocp.ca/wp-content/uploads/2015/03/ABC-Formula-Sheet-WWTWWC.pdf)
