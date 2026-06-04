# Directive: Water Treatment Training Manual

## Purpose
Maintain a living, site-specific water treatment operating manual for a trainee operator with no prior experience. The manual lives in `water-treatment-manual/` and is updated every time the user provides new information.

## Inputs
Any of the following provided by the user:
- Documents (PDFs, Word, text): operating permits, SOPs, equipment manuals, chemical SDS, lab results, incident reports
- Images: process flow diagrams, P&IDs, equipment photos, SCADA screenshots, handwritten notes
- Verbal descriptions or corrections ("the pH target is actually 7.2–7.8 at our site")

## Outputs
Updated markdown sections in `water-treatment-manual/sections/`. Changes committed and pushed to `claude/water-treatment-manual-LveZY`.

## Sections to Maintain

| File | Triggered by |
|---|---|
| `00_orientation.md` | Site info, org chart, P&ID, process flow diagram |
| `01_daily_operations.md` | Daily log SOPs, shift schedules, round checklists |
| `02_startup.md` | Startup SOPs, P&IDs |
| `03_shutdown.md` | Shutdown SOPs |
| `04_sampling_testing.md` | Sampling plan, lab methods, permit monitoring schedule |
| `05_chemical_dosing.md` | Chemical SDS, dosing SOPs, jar test records |
| `06_equipment.md` | Equipment manuals, P&IDs, equipment photos |
| `07_maintenance.md` | PM schedules, equipment manuals, maintenance records |
| `08_troubleshooting.md` | Incident reports, equipment manuals, operator experience |
| `09_safety.md` | Chemical SDS, LOTO procedures, site safety plan |
| `10_emergency_response.md` | Emergency response plan, permit reporting requirements |
| `11_regulations_reporting.md` | Operating permit, provincial regulations |
| `12_glossary.md` | Any new technical terms encountered in uploaded documents |

## Update Process

1. User provides new information (file upload, verbal description, or correction).
2. Read the new information thoroughly.
3. Identify which sections are affected.
4. Update those sections:
   - Replace placeholder *(TBD)* fields with real data
   - Add site-specific detail to generic procedures
   - Add new equipment-specific sub-sections to Section 6 or 7
   - Add new troubleshooting rows to Section 8
   - Add new glossary terms to Section 12
5. Add a log entry at the bottom of each updated section: `*Last updated: [date] | Source: [document name]*`
6. Update the Document History table in `README.md`.
7. Update `uploads/README.md` to list newly added source documents.
8. Commit with message: `docs: update manual — [brief description of what changed]`
9. Push to branch.

## Writing Style Rules

- **Assume zero prior knowledge.** Explain every concept before using it.
- **Explain the WHY.** After each step, if the reason isn't obvious, add a `ℹ️ WHY:` callout.
- **Use warnings sparingly but seriously.** `⚠️ WARNING` = real safety or compliance risk.
- **Use checklists** for anything procedural (startup, shutdown, maintenance tasks).
- **Use tables** for comparisons, parameters, and multi-column information.
- **No jargon without explanation.** Every technical term must appear in the Glossary.
- **Do not invent procedures.** If you don't have a source, use a general best-practice with a note like "*(Update with your site's specific procedure.)*"

## Quality Gate

Before committing any update, verify:
- [ ] All *(TBD)* fields that could be filled from the new source have been filled
- [ ] No contradictions with existing manual content (if there are, flag them)
- [ ] New technical terms added to Glossary
- [ ] Writing style is accessible to a new operator
- [ ] Source document named in the section's revision history
