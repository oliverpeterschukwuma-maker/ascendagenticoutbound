# Section 8 — Troubleshooting

> Something looks wrong. Before you panic, use this guide. Troubleshooting is structured detective work: observe → form a hypothesis → test it → fix it → verify the fix → record everything.

---

## 8.1 The Troubleshooting Mindset

1. **Stay calm.** Panicking makes it worse.
2. **Confirm it's real.** Is the instrument malfunctioning? Take a manual sample and re-test.
3. **Protect the public first.** If finished water quality is in question, stop distribution and call your supervisor before anything else.
4. **Work upstream.** Most finished water problems have causes upstream in the process. Start at the raw water and work forward.
5. **Change one thing at a time.** If you adjust multiple variables simultaneously, you won't know what fixed it.
6. **Document everything.** Every observation, every action, every result.

---

## 8.2 Finished Water Turbidity High

> Turbidity is your primary real-time indicator of treatment performance. High turbidity at the tap means something upstream is failing.

### Rapid diagnosis flowchart

```
Finished water turbidity HIGH
         │
         ├─ Is the turbidimeter reading accurate? (manual grab sample test)
         │         │
         │    No → Calibrate/clean instrument. Monitor with manual samples.
         │         │
         │    Yes → Continue ↓
         │
         ├─ Check filter effluent turbidity
         │         │
         │    HIGH → filter problem (see 8.3)
         │         │
         │    LOW → problem is AFTER the filters (check clear well inlet valve,
         │           check for sediment disturbance in clear well)
         │
         └─ If filter is fine but finished water is still high → re-check sample point,
            confirm clear well is not short-circuiting, check entry point meter vs. clear well
```

---

## 8.3 Filter Turbidity High (Filter Breakthrough)

| Possible Cause | How to Confirm | Fix |
|---|---|---|
| Filter is due for backwash | Check headloss and run time | Initiate backwash |
| Poor coagulation upstream — floc passing through media | Check settled water turbidity (if low, coagulation is fine; if high, see 8.4) | Fix coagulation; consider backwash to reset filter |
| Media compaction / "mudball" formation | Visual inspection of media surface during backwash | Increase backwash intensity; air scour if available; if persistent, media may need replacement |
| Filter ran too long and exhausted adsorption capacity | Check run time vs. normal | Backwash immediately; re-evaluate max run time |
| Damage to media or underdrains | Inspect during backwash — turbidity spike that doesn't clear | Take filter offline; inspect; repair |
| Filter ripening after backwash | Turbidity elevated in first 15–30 min after backwash, then clears | Normal — route to waste until turbidity meets target |

---

## 8.4 Settled Water Turbidity High (Clarifier/Sedimentation Problem)

| Possible Cause | How to Confirm | Fix |
|---|---|---|
| Under-dosing of coagulant | Settled turbidity rising; pinpoint or no floc visible | Increase coagulant dose; run jar test |
| Over-dosing of coagulant (charge reversal) | Also causes high turbidity but floc may be very small; check dose vs. jar test optimum | Decrease dose; re-run jar test |
| pH outside optimal range for coagulant | Check post-coagulation pH vs. optimal range for your chemical | Adjust pH first, then re-optimize dose |
| Raw water alkalinity too low (coagulant consuming all alkalinity) | Test alkalinity after coagulant addition | Add lime or sodium bicarbonate |
| Sludge blanket too deep — solids carrying over weir | Measure sludge blanket depth | Increase sludge drain frequency |
| Sudden increase in raw water turbidity (storm event) | Check raw turbidity vs. recent trend | Increase coagulant dose; run jar test immediately |
| Mixing problem (short-circuiting in flocculation) | Observe flow patterns; dye test if needed | Check weirs/baffles; ensure mixers are running |
| Temperature change (cold water — poor coagulation) | Check raw water temperature vs. recent weeks | Consider switching from alum to PACl (better cold-water performance); increase dose |

---

## 8.5 Chlorine Residual Low in Finished Water

| Possible Cause | How to Confirm | Fix |
|---|---|---|
| Chlorine dose too low | Check dosing pump output; check tank level | Increase dose; calibrate pump |
| High chlorine demand in raw water (organics, iron, manganese, ammonia) | Test raw water; check NOM levels | Increase dose to meet demand; investigate source |
| Chlorine dosing pump failed | Visual inspection; check tank level hasn't changed | Switch to backup pump; repair primary |
| High turbidity protecting demand (chlorine "hidden" by particles) | Check turbidity — if high, fix turbidity first | Fix coagulation/filtration; once turbidity resolved, chlorine residual often recovers |
| Warm water increases decay rate | Check temperature | Increase dose; adjust for seasonal conditions |
| Long hydraulic detention time (low flow through contact chamber) | Check flow rate | Ensure minimum flow maintained; do not reduce flow too drastically |
| Chlorine solution degraded (old/warm NaOCl) | Check tank: dark brown/yellow = degraded bleach | Order fresh chemical; improve storage (cool, dark, sealed) |

---

## 8.6 pH Out of Range

| Symptom | Possible Cause | Fix |
|---|---|---|
| pH too low (acidic) — finished water | Coagulant consuming alkalinity; high CO₂ in source | Add lime or caustic; add alkalinity; reduce CO₂ via aeration |
| pH too high — finished water | Over-addition of lime or caustic | Reduce dose; check pH probe calibration first |
| pH fluctuating erratically | Dosing pump running inconsistently; instrument error | Check pump for air in lines; calibrate probe |
| pH drop at filter effluent vs. inlet | CO₂ release from biological activity in filter | Normal if small; large drops suggest biological fouling — review filter operation |

---

## 8.7 Pump Problems

### Pump Not Starting

| Possible Cause | Check |
|---|---|
| Tripped breaker or overload | Check MCC / panel; reset if tripped. If it trips again immediately, do NOT keep resetting — investigate the cause |
| E-stop engaged | Check E-stop buttons — are any pressed in? |
| Control signal missing | Check the PLC/SCADA output; check local/remote switch position |
| Pump seized | Try to rotate shaft manually (only when confirmed de-energized and LOTO applied) |

### Pump Running But No/Low Flow

| Possible Cause | Check |
|---|---|
| Discharge valve closed | Walk to the pump and check all valves in the discharge line |
| Air lock (lost prime) | Check suction line for air; open vent valve |
| Impeller clogged | Take pump offline (LOTO); inspect and clear obstruction |
| Pump running backwards (wrong phase sequence) | Compare rotation direction to arrow on casing; if reversed, swap two electrical phases (qualified electrician only) |

### Pump Vibration / Noise

| Symptom | Cause | Action |
|---|---|---|
| Grinding/gravel sound | Cavitation | Check suction pressure, reduce discharge restriction, reduce speed |
| Rhythmic thumping | Misalignment or imbalance | Check alignment; inspect impeller for damage |
| Bearing whine | Bearing failure approaching | Schedule bearing replacement; increase monitoring frequency |
| Loud knocking | Water hammer | Add slow-closing valve; check check valve |

---

## 8.8 Chemical Dosing Problems

| Problem | Likely Cause | Fix |
|---|---|---|
| Dose dropping despite no pump changes | Tank is getting low | Refill; switch to backup tank |
| Dosing pump running but no chemical delivered | Air in tubing; cracked tubing; failed check valve on injection point | Prime pump; inspect and replace tubing; check injection check valve |
| Dose going up but no change in treatment | Chemical has degraded (NaOCl especially) | Test chemical concentration; replace if degraded |
| Crystals forming around injection point | Chemical concentration too high; slow flush after injection | Flush injection line; dilute if needed; increase flush flow |
| Peristaltic tubing failed (chemical spraying) | Tubing age / UV damage / incompatible material | Immediate LOTO; replace tubing; clean spill |

---

## 8.9 Alarm Response Quick Reference

| Alarm | Immediate Check | Escalate if |
|---|---|---|
| High filter turbidity | Manual grab sample; check upstream coagulation | Turbidity > permit limit; cannot reduce within 15 min |
| Low chlorine residual | Manual test; check dosing pump | Residual below regulatory minimum; cannot restore within 15 min |
| High raw water turbidity | Check source conditions; check coagulant dose | Turbidity > 10× normal or cannot achieve settled water target |
| Pump fail / trip | Check for E-stop, tripped breaker, overload | After 2 reset attempts; any sign of mechanical failure |
| High clear well level | Check all flows; check distribution pump | Risk of overflow |
| Low clear well level | Check all flows; check raw water pump output | < 20% of capacity (risk of running out of water) |
| Power failure (UPS alarm) | Confirm generator started | Generator does not start automatically within 30 sec |

---

*Last updated: 2026-06-04 | Source: Initial framework*
