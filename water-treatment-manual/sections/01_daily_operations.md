# Section 1 — Daily Operations

> Daily operations are the heartbeat of the plant. Every shift, you walk a predictable route, check the same things, and record what you see. Consistency is what catches problems early.

---

## 1.1 The Golden Rule of Shift Work

**Leave the plant in better shape than you found it.**

Before you leave, your relief operator should be able to open your logbook and understand exactly what happened — and what to watch.

---

## 1.2 Shift Start Routine (First 30 Minutes)

### Step 1 — Sign in and review the logbook

`[ACTION]` Pick up the logbook from the previous shift. Read every entry.

Look for:
- Any alarms that fired and how they were resolved
- Any equipment that is locked out, offline, or running in manual
- Unusual readings (high turbidity, low pressure, pH excursions)
- Tasks carried over to your shift
- Chemical levels — were any tanks refilled? Any shortages flagged?

`ℹ️ WHY:` Operators hand off to each other continuously. The logbook is your briefing. Skipping it means you're flying blind.

---

### Step 2 — Check the SCADA / control panel

`[ACTION]` Look at the main control screen (or panel, if your plant has no SCADA).

`[CHECK]` Verify all of the following:

| Item | Expected | Actual |
|---|---|---|
| Active alarms | None (or known/acknowledged) | ______ |
| Raw water flow rate | Within target range | ______ |
| Finished water flow rate | Within target range | ______ |
| Clear well level | Within target range | ______ |
| All pumps showing "run" status | Per current operating plan | ______ |
| Chemical dosing pumps running | Per current dosing plan | ______ |

`ℹ️ WHY:` The SCADA gives you the plant state from 30,000 feet. It tells you if something changed overnight before you walk out there and find a surprise.

---

### Step 3 — Physical rounds

Walk the entire plant, in the same order every time (develop your route with your supervisor). Use your senses:

**See:** Any leaks, overflows, unusual colour in basins, floc settling unevenly, foam, dead equipment indicator lights?

**Hear:** Any unusual pump noises (cavitation sounds like gravel in a blender), grinding, banging, or silence where there should be a hum?

**Smell:** Chlorine stronger or weaker than normal? Rotten-egg smell (hydrogen sulphide)? Musty/algae smell from raw water?

**Feel:** Any pipes or motors unusually hot to the touch?

Record everything you observe, even if it seems fine.

---

### Step 4 — Take and record morning samples

*(See Section 4 for full sampling and testing procedures.)*

At minimum, most plants require:

| Sample Point | Typical Tests |
|---|---|
| Raw water | Turbidity, pH, temperature |
| Post-coagulation / settled | Turbidity, pH |
| Filter effluent | Turbidity, pH |
| Finished water (pre-distribution) | Turbidity, free chlorine residual, pH, temperature |
| Clear well | Free chlorine, total chlorine |
| Distribution system entry | Free chlorine, pH |

`[ACTION]` Run tests and record results in the log immediately. Do not wait until the end of the shift.

---

## 1.3 Continuous Monitoring During the Shift

You are not just watching a screen — you are the sensor of last resort.

**Every 1–2 hours (or per your SOP):**
- [ ] Check online turbidity meters — do they match your grab samples?
- [ ] Check chlorine analyzers — do they match your manual tests?
- [ ] Check chemical tank levels — are dosing pumps consuming at the expected rate?
- [ ] Check filter levels and differential pressure (if applicable)
- [ ] Check flows and pressures against targets
- [ ] Log everything

**If something is out of range:**
1. Don't panic.
2. Confirm it's a real reading, not an instrument error (take a manual sample).
3. Identify the cause (see Section 8 — Troubleshooting).
4. Make an adjustment or escalate to your supervisor.
5. Record the deviation, what you did, and the result.

`ℹ️ WHY:` Regulators require you to log exceedances. If you fix a problem but don't record it, it looks like you were unaware of it — that's a compliance violation.

---

## 1.4 Key Parameters and Target Ranges

> *The table below uses generic regulatory benchmarks. Your site-specific permit limits and operational targets will be filled in once you provide your operating permit and SOPs.*

| Parameter | Regulatory Maximum | Operational Target | Why It Matters |
|---|---|---|---|
| Finished water turbidity | ≤ 1 NTU (typical) | ≤ 0.3 NTU (common target) | High turbidity shields pathogens from disinfection |
| Free chlorine residual (entry point) | ≥ 0.2 mg/L min | 0.5–1.0 mg/L (typical) | Must maintain residual through distribution |
| pH (finished water) | 6.5–8.5 | 7.0–7.5 (common target) | Affects disinfection efficacy and pipe corrosion |
| Temperature | N/A | Seasonal variation | Affects chemical dosing rates and CT calculations |
| Filter turbidity | ≤ 0.3 NTU | ≤ 0.1 NTU | Early warning of filter breakthrough |

---

## 1.5 Shift End Routine (Last 30 Minutes)

`[ACTION]` Before your relief arrives:

- [ ] Complete all log entries and test results — no blanks
- [ ] Note any equipment that is offline, in manual, or acting abnormally
- [ ] Check chemical inventory — flag anything running low
- [ ] List any tasks you couldn't complete (for the next shift)
- [ ] Prepare a verbal briefing for your relief operator (5 minutes face-to-face is worth more than a page of notes)

`[ACTION]` Brief the incoming operator:
- What happened during your shift
- Current status of all major processes
- Anything to watch closely
- Any ongoing issues or anomalies

`[ACTION]` Sign the logbook. The moment you sign, you own that shift's record.

---

## 1.6 Sample Logbook Entry

```
DATE: 2026-06-04    SHIFT: 07:00–15:00    OPERATOR: [Name]    License #: [___]

07:15  Morning rounds complete. No alarms. All equipment running normally.
07:30  Morning samples collected. Results:
         Raw turbidity: 4.2 NTU | pH 7.1 | Temp 12°C
         Filter effluent turbidity: 0.08 NTU | pH 7.2
         Finished water: Turbidity 0.05 NTU | Free Cl2 0.72 mg/L | pH 7.3
09:45  Filter #2 differential pressure increasing faster than normal.
         Initiated manual backwash at 09:52. Backwash complete 10:04. 
         Post-backwash turbidity spike to 0.18 NTU, returned to 0.06 NTU by 10:20. Normal.
12:00  Midday samples — all within target ranges.
13:30  Alum tank at approximately 20% — called Chemical Supply Co. (555-0100).
         Delivery scheduled for tomorrow AM.
14:50  End-of-shift samples collected. Results within targets.
15:00  Briefed incoming operator J. Smith on filter #2 and alum delivery.

Signature: ________________
```

---

*Last updated: 2026-06-04 | Source: Initial framework*
