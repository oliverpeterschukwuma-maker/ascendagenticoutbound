# Section 1 — Daily Operations

> Daily operations are the heartbeat of the plant. Every shift, you walk a predictable route, check the same things, and record what you see. Consistency is what catches problems early.

---

## 1.1 The Golden Rule of Shift Work

**Leave the plant in better shape than you found it.**

Before you leave, your relief operator should be able to open your logbook and understand exactly what happened — and what to watch.

---

## 1.2 Shift Start Routine (First 30 Minutes)

### Step 1 — Review the logbook and task list

`[ACTION]` Pick up the logbook and any task notes (e.g., "Brennan's List") from the previous shift. Read every entry.

Look for:
- Any equipment that is offline, locked out, or bypassed
- Frac tank levels and status (clean / dirty / in treatment)
- Any chemical shortages flagged
- Ongoing treatment batches in progress — what stage are they at?
- Unusual water quality (high turbidity, pH out of range, petroleum odour in effluent)
- Tasks carried over to your shift

`ℹ️ WHY:` This system runs in batches. Water is staged across multiple tanks at different treatment stages. If you don't read the handoff, you won't know where each batch is, and you could mix clean water with dirty water — a costly mistake.

---

### Step 2 — Visual check of control panel and equipment indicators

`[ACTION]` Walk to each piece of powered equipment and note its status.

`[CHECK]`

| Equipment | Expected status | Actual |
|---|---|---|
| PACl dosing pump (blue) | Running / standby per dosing plan | ______ |
| CL-200 flocculant pump (yellow LMI) | Running / standby per dosing plan | ______ |
| CD30TIX ozone generator | ON indicator lit; pressure gauge normal | ______ |
| AERQUS ozone diffuser | Operating (bubbling in contact water) | ______ |
| Bag filter housing | Flow OK, bag not overloaded | ______ |
| Kontek filter press (if in cycle) | Status per previous shift note | ______ |
| H₂O₂ drums | Level — note on log | ______ |
| Cal-Hypo tablets in chlorinator | Level — confirm not empty | ______ |

`ℹ️ WHY:` This system does not have centralized SCADA — you are the monitoring system. Each piece of equipment must be individually checked.

---

### Step 3 — Physical rounds (indoor and outdoor)

Walk the full site in the same order every time. Use all your senses.

**Outdoor:**
- [ ] Settling ponds: level, oil sheen, debris blocking outlet?
- [ ] Frac tanks: levels, labels current (clean/dirty/in treatment)?
- [ ] OWS (oil/water separator): any visible petroleum around the housing?
- [ ] Any hoses or connections showing leaks?

**Indoor chemical/treatment room:**
- [ ] Any chemical spills on the floor?
- [ ] Strong chemical smell other than faint ozone or faint chlorine?
- [ ] PACl and CL-200 pump tubing — cracked, kinked, or spraying?
- [ ] Bag filter housing — any drips or leaks at the lid seal?
- [ ] SRS-CV-15 carbon vessel — petroleum odour coming from effluent?
- [ ] Wet cell — sludge accumulation visible; water clarity normal?

**Smell specifically for:**
- Petroleum/fuel smell in treated water → carbon vessel likely exhausted
- Rotten egg (H₂S) smell → possible biological activity in an anaerobic sludge pocket
- Strong bleach → possible Cal-Hypo over-dose or spill
- Sharp metallic/bleach smell (ozone) → normal near ozone system; strong ozone elsewhere = ventilate

Record everything you observe, normal or not.

---

### Step 4 — Take daily samples

*(See Section 4 for full procedures)*

| Sample Point | Tests to Run | Frequency |
|---|---|---|
| Settling pond outlet / wet cell inlet | pH, turbidity (visual OK in field) | Each shift |
| After chemical dosing (wet cell outflow) | pH, turbidity | Each shift |
| Bag filter outlet | pH, turbidity (NTU) | Each shift |
| Carbon vessel (SRS-CV-15) effluent | pH, turbidity, petroleum odour check | Each shift |
| Final treated water (pre-discharge) | pH, free chlorine, turbidity | Each shift — this is your compliance sample |
| Oil/water separator — weekly dip | Fuel thickness, sludge thickness, liquid level | Weekly (Shell Canada log sheet) |

`[ACTION]` Run tests immediately after collection. Record all results in the log with time.

---

## 1.3 Continuous Monitoring During the Shift

**Every 1–2 hours:**
- [ ] Check chemical drum/tank levels — are the dosing pumps consuming at the expected rate?
- [ ] Check frac tank levels and update status labels if any transfers occurred
- [ ] Check bag filter housing — is flow rate maintained, or is the bag loading up?
- [ ] Check ozone system — CD30TIX indicator still on? Pressure gauge normal?
- [ ] Test free chlorine in treated water — confirm residual is maintained
- [ ] Log everything — even "no change" is worth noting

**If something is out of range:**
1. Confirm it's real (re-test manually, don't just trust one reading).
2. Protect the discharge point first — if treated water quality is in question, stop the discharge valve.
3. Find the cause (Section 8 — Troubleshooting).
4. Fix or escalate to supervisor.
5. Record: time of problem, reading that flagged it, what you did, result.

`ℹ️ WHY:` BC Ministry of Environment can inspect at any time and ask to see your records. A discharge that exceeds permit limits AND has no log entry looks much worse than one that was caught, logged, and corrected.

---

## 1.4 Key Parameters and Target Ranges

> *Operational targets below are typical for industrial discharge treatment. Confirm your site-specific permit limits with your supervisor — your actual permit limits govern.*

| Parameter | Typical Discharge Limit | Operational Target | Why It Matters |
|---|---|---|---|
| Turbidity (final discharge) | ≤ 25 NTU (typical BC permit) | ≤ 5 NTU | Turbidity carries other contaminants and harms fish habitat |
| pH (final discharge) | 6.5–9.5 (typical BC permit) | 7.0–8.5 | Too acidic or alkaline is toxic to aquatic life |
| Total suspended solids (TSS) | ≤ 25–75 mg/L (varies by permit) | Minimize | Settled solids can smother fish spawning areas |
| Free chlorine (final discharge) | ≤ 0.1 mg/L (protect aquatic life) | ≤ 0.05 mg/L | Chlorine is toxic to fish even at low levels |
| Total petroleum hydrocarbons (TPH) | ≤ 1–5 mg/L (varies) | Not detectable | Petroleum is toxic to aquatic life |
| Iron (total) | ≤ 0.3–1 mg/L (varies by permit) | Minimize | Iron precipitation in receiving waters harms fish |

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

## 1.6a Log Sheet Columns (Site-Specific)

`ℹ️ Built from confirmed site procedure — use these columns going forward:`

| Date | Time | Operator | Sample point (C Can / outdoor weir tank / indoor weir tank–settling bins / bag filter / carbon vessel / storage tank) | pH | Clear/cloudy? (or NTU if you have the meter) | Lime added? (Y/N + bags) | PACl added (amount or stroke setting) | Flocculant added (amount or stroke setting) | Ozone turned on before pump? | Intake pipe valve opened? | Storage tank valve opened? | AODD pump used (which tank)? | Observations / issues | Action taken |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

`ℹ️ WHY these columns:` pH and clarity (or NTU) are your two real test numbers at this site (Section 4.3). Lime/PACl/flocculant columns track what was actually dosed, since the dose changes daily by observation, not a fixed number. The ozone and valve columns exist because forgetting them either skips treatment or lets pressure sit on the pipes (Section 6.1a, 6.7). The AODD column tracks sludge removal — your actual last task each cycle (Section I). Observations + action taken is what makes the log useful to the next person, not just a list of numbers.

`📄 A ready-to-print version of this table is in [`LOGBOOK.md`](../LOGBOOK.md) — print one page per shift starting Monday.`

---

## 1.6 Sample Logbook Entry

```
DATE: 2026-06-29    SHIFT: 07:30–16:00    OPERATOR: [Name]

07:35  Reviewed previous shift notes. Carbon vessel clean-out [done/in progress].
07:45  Morning rounds complete. No leaks. C Can drums checked (lime/PACl/flocculant levels OK).
08:00  C Can check: pH 7.1 (below 8 — added lime, 1 bag). PACl and flocculant dosed per usual setting.
09:15  Outdoor weir tank: visually clear, settled well overnight. Ozone turned ON, then started
         intake pump. AERQUS flow meter ball moving, reading [X] SCFH.
10:30  Indoor weir tank/settling bins: clear as tap water, NTU checked — within range.
         Submersible pump started, pushing water to bag filter and carbon vessel.
12:00  Midday check — all within targets.
13:30  Pumped treated water into storage tank. Job on this batch ends here.
13:45  Used AODD pump to clear settled sludge from indoor settling bins and outdoor weir tank,
         ran through Kontek filter press. 1 cake bin filled.
15:45  Briefed incoming operator — sludge bin needs pickup, PACl drum getting low.

Signature: ________________
```

---

*Last updated: 2026-06-28 | Source: Site photos and operator-confirmed walkthrough, Sections A-J*
