# Section 7 — Preventive Maintenance

> Preventive maintenance (PM) is doing the work before the equipment breaks. A pump bearing replaced on a PM schedule costs $50 in parts and 30 minutes. A pump that fails at 2 AM during a storm costs thousands and puts the plant at risk. Do your PMs.

---

## 7.1 The PM Philosophy

**Reactive maintenance** = fix it when it breaks. High cost. Unpredictable downtime. Emergency repairs during bad weather.

**Preventive maintenance** = fix it before it breaks. Predictable. Cheaper. Keeps you in control.

**Predictive maintenance** = monitor equipment condition and intervene when data says it's degrading (vibration analysis, oil sampling, thermal imaging). This is the gold standard but requires specialized tools.

For most water treatment plants, a solid preventive maintenance program is the goal.

---

## 7.2 PM Frequencies and Tasks

> *The following table represents a comprehensive generic PM schedule. Once you provide your equipment manuals, site-specific frequencies, and existing maintenance records, this will be refined for each piece of equipment.*

### Daily (Every Shift)

| Task | Equipment | What to Check | Action if Problem |
|---|---|---|---|
| Visual inspection | All pumps | Unusual noise, vibration, heat, leaks | Log; escalate if abnormal |
| Seal/packing check | All pumps | Leakage amount (a small drip from packing is normal — a stream is not) | Adjust packing gland; schedule seal replacement |
| Lubrication check | Pump bearings | Temperature by touch; bearing housing level indicator if present | If hot, stop pump, check oil level |
| Chemical level check | All dosing tanks | Levels recorded; reorder trigger | Order if at reorder level |
| Instrument reading vs. grab sample | Turbidimeters, Cl₂ analyzers | Within ±10% of manual test | Calibrate instrument |
| Clean flow-through cells | Online turbidimeters | Algae/fouling | Clean with brush and DI water |

---

### Weekly

| Task | Equipment | Procedure |
|---|---|---|
| Lubricate bearings | Pumps, mixers | Grease per manufacturer spec. Do not over-grease — it damages seals |
| Calibrate online turbidimeters | All | Use StablCal or Formazin standard; document |
| Calibrate chlorine analyzers | All | Use DPD manual test on same stream; adjust if needed |
| Calibrate pH meters/sensors | All | 2-point calibration with pH 7 and pH 4 (or 10) buffers |
| Inspect dosing pump tubing | All peristaltic pumps | Look for cracks, kinks, soft spots — replace before failure |
| Check chemical injection points | All | Clear, no crystal buildup, injecting visibly |
| Check all valve packing | Manual valves used regularly | Adjust packing gland if leaking; do not over-tighten (valve will be hard to operate) |
| Test high-turbidity alarm | Online turbidimeter | Verify alarm triggers at setpoint; test notification path |
| Test low-chlorine alarm | Chlorine analyzer | Verify alarm triggers at setpoint |
| Inspect filter media surface | All filters | Even surface, no "rat holes" or cracking (these bypass water around the media) |

---

### Monthly

| Task | Equipment | Procedure |
|---|---|---|
| Motor insulation check | All motors | Use megohmmeter; record reading and compare to baseline |
| Check coupling alignment | Motor/pump couplings | Misalignment causes vibration and premature bearing failure |
| Inspect all electrical connections | Control panels, MCC | Look for discolouration, corrosion, loose terminals — DO NOT touch live circuits |
| Test all alarms end-to-end | SCADA/panel | Simulate fault conditions; verify alarm reaches intended recipients |
| Inspect chemical storage area | All chemical rooms | Spills, container integrity, SDS current, ventilation working |
| Sludge blanket measurement | Sedimentation basins | Record depth; compare to previous month; adjust drain schedule if rising |
| Filter media inspection | All filters | Check for media loss, compaction, biological growth |
| Backwash pump flow test | Backwash pump | Confirm flow and pressure meet design spec |
| Clear well inspection | Clear well | Check for cracks, algae growth, animal intrusion, disinfection residual uniformity |

---

### Quarterly (Every 3 Months)

| Task | Equipment | Procedure |
|---|---|---|
| Change oil in gearboxes | Mixer gearboxes, multi-stage pump gearboxes | Use manufacturer-specified oil grade |
| Replace dosing pump diaphragms | Diaphragm dosing pumps | Even if not failed — prevents chemical spills |
| Inspect and clean UV lamps/sleeves | UV disinfection unit | Wipe sleeves; measure lamp intensity; replace if below minimum |
| Calibrate flow meters | All | Verify against a portable meter or timed fill |
| Full valve exercise | All normally-closed or rarely-operated valves | Open/close fully to prevent them seizing; lubricate stem |
| Inspect and test generator | Backup generator | Load test: run on full generator power for 30 min; check fuel level |
| Inspect HVAC in chemical rooms | Ventilation fans | Confirm adequate air changes; replace filters |

---

### Annually (Every 12 Months or Per Permit)

| Task | Equipment | Procedure |
|---|---|---|
| Pump curve verification | All major pumps | Measure flow at multiple heads; compare to original curve — large deviation = worn impeller |
| Motor winding resistance | All motors | Record and trend; significant drop = insulation failure approaching |
| Pressure vessel inspection | Hydropneumatic tanks, any pressurized vessels | Check for internal corrosion; pressure test |
| Comprehensive electrical inspection | All panels | Qualified electrician thermographic scan; check arc flash labeling |
| Calibrate all instruments against certified standards | All | Keep calibration certificates on file — regulators may ask for them |
| Review and update all emergency procedures | All | Are contact numbers current? Is equipment still as described? |
| Confined space entry permit review | All confined spaces (clear well, basins, wet wells) | Confirm entry procedures, equipment, and trained staff are current |
| Chemical dosing pump overhaul | All | Replace all wetted parts on a schedule; cost far less than emergency repair |

---

## 7.3 LOTO (Lockout/Tagout) — The Non-Negotiable PM Step

Before ANY maintenance on equipment that could move, energize, or release stored energy:

1. **Identify** all energy sources (electrical, pneumatic, hydraulic, stored pressure, gravity).
2. **Notify** all affected personnel.
3. **Isolate** each energy source (turn off the breaker, close the isolation valve, etc.).
4. **Lock** the isolation device with YOUR personal lock. Each person working on the equipment puts on their own lock. No shared locks.
5. **Tag** the lockout point with your name, date, and reason.
6. **Verify** zero energy state: press the start button to confirm nothing happens; check pressure gauges for zero.

Only the person who placed the lock can remove it.

`⚠️ WARNING:` This is not bureaucratic paperwork. Workers are killed every year by equipment that was assumed to be de-energized. There are no exceptions to LOTO.

---

## 7.4 Maintenance Log

Every PM task should be logged:

```
DATE: 2026-06-04    TASK: Weekly bearing lubrication — Raw water pumps 1, 2, 3
TECHNICIAN: [Name]
FINDINGS: All bearings normal temperature. RW Pump #2 — slight increase in 
vibration vs. last week. Greased per spec. Scheduled vibration check for next week.
PARTS USED: None (lubrication only)
NEXT ACTION: Monitor Pump #2 vibration.
```

---

## 7.5 Spare Parts Inventory

Keep a minimum stock of:

| Item | Why Critical | Recommended Stock |
|---|---|---|
| Dosing pump tubing (peristaltic) | Fails without warning; plant stops dosing | 2 sets per pump type |
| Dosing pump diaphragms | Same | 2 per pump type |
| Pump mechanical seals | Failure causes flooding | 1 per pump type |
| UV lamp(s) | Must be replaced on schedule | 1–2 per UV unit |
| UV quartz sleeve(s) | Can crack | 1 per UV unit |
| DPD reagents (tablets or powder) | Used daily | 2–4 week supply |
| Calibration standards (turbidity, pH) | Required for daily calibration | Maintain per shelf life |
| Chemical injection check valves | Fail from chemical exposure | 2–3 per injection point type |
| Motor contactors | Electrical failure | 1 per motor type |
| Fuses and breakers | Electrical protection | As per electrical panel schedule |

---

*Last updated: 2026-06-04 | Source: Initial framework — update with equipment-specific intervals from manufacturer manuals*
