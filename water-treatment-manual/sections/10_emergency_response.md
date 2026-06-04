# Section 10 — Emergency Response

> Emergencies are rare but their consequences can be catastrophic. Your job during an emergency is simple: protect public health, protect your people, and communicate. Read this section before an emergency happens — not during one.

---

## 10.1 Universal Emergency Protocol

Regardless of the type of emergency, your first four actions are always the same:

```
STEP 1: ASSESS
         Is anyone in immediate danger?
         Are you in immediate danger?
         
STEP 2: PROTECT
         Evacuate or isolate people from the hazard.
         If finished water quality is in question — STOP distribution.
         
STEP 3: COMMUNICATE
         Call 911 if life safety is at risk.
         Call your supervisor immediately.
         Notify the regulatory authority as required.
         
STEP 4: DOCUMENT
         Start recording from the moment you notice the emergency.
         Time of first observation, actions taken, readings, who was called and when.
```

---

## 10.2 Chemical Spill

### Small spill (within your training and PPE capabilities)

A small spill is one you can safely control with your spill kit — typically < 20 L of a diluted chemical.

`[ACTION]`  
1. Put on full PPE (face shield, splash goggles, chemical gloves, apron) before approaching.  
2. Eliminate ignition sources if the chemical is flammable (most water treatment chemicals are not, but check SDS).  
3. Stop the source of the spill if possible (close valve, upright container).  
4. Contain the spread: use absorbent berms or pigs from your spill kit to stop the spill from reaching floor drains.  
5. Absorb the spill using appropriate spill absorbent (check SDS — some chemicals require neutralization before disposal).  
6. Collect all contaminated material in a labelled, sealed waste container.  
7. Decontaminate the area with clean water.  
8. Dispose of waste per your facility's chemical waste procedures.  
9. Report the spill in the logbook and to your supervisor, even if it was minor.

### Large spill or any chlorine gas release

`[ACTION]`  
1. Do NOT attempt to control a large spill yourself or any chlorine gas release.  
2. **Evacuate** the area immediately — upwind and uphill.  
3. **Alert** all personnel in the building.  
4. **Call 911** — emergency responders (HAZMAT team) will manage the scene.  
5. Call your supervisor.  
6. Meet emergency responders at the entry point and provide them with the SDS and a description of what happened.  
7. Do NOT re-enter until the all-clear is given by emergency responders.

`ℹ️ WHY:` Chlorine gas at even low concentrations (3 ppm) causes severe respiratory distress. At 30 ppm, it is life-threatening within 30 minutes. You cannot fight it without SCBA and training. Call the professionals.

---

## 10.3 Power Failure

### In the first 60 seconds:

`[CHECK]`  
- Did the backup generator start automatically? (You should hear it within 15–30 seconds.)
- Are critical systems (pumps, dosing, instrumentation) on the backed-up circuit?
- Is the SCADA/HMI screen live or black?

### If generator auto-starts successfully:

`[ACTION]`  
1. Confirm all critical processes are running on generator power.  
2. Check all chemical dosing pumps — some may need to be manually restarted after a power blip.  
3. Note the time of the outage in the logbook.  
4. Contact the utility company to report the outage and get an estimated restoration time.  
5. Monitor generator fuel level — know how long your fuel supply lasts at current load.

### If generator does NOT start automatically:

`[ACTION]`  
1. Attempt manual start at the generator (per your generator's SOP).  
2. If unsuccessful, call maintenance immediately.  
3. Assess how long the plant can coast on the clear well storage before water supply is affected.  
4. Notify the regulatory authority and your supervisor.  
5. Begin load-shedding: prioritize disinfection and distribution pumps above everything else.

### Returning to grid power:

When utility power is restored:  
- Do not switch back to grid power during a power surge — wait for stable voltage.  
- Transfer back to grid in coordination with the generator's transfer switch procedure.  
- After transfer, inspect all equipment for restart — some pumps and instruments may need manual reset.

---

## 10.4 Equipment Failure — Critical Equipment

### Raw water pump failure

`[ACTION]`  
1. Confirm the failure (trip alarm, no flow on meter, breaker tripped).  
2. Start the standby raw water pump (you do have a standby, right? — confirm during your orientation).  
3. Investigate the failed pump (see Section 8 — Troubleshooting).  
4. If both pumps fail: notify supervisor; manage on clear well storage; initiate emergency repair.

### Filter failure (turbidity spike)

`[ACTION]`  
1. Take the affected filter offline (close inlet valve).  
2. Divert flow to other filters (increase their load, staying within design limits).  
3. Do NOT send high-turbidity filter water to the clear well.  
4. Backwash the failed filter; if turbidity doesn't recover, investigate (see Section 8.3).

### Chlorine dosing failure (no chlorine residual)

`[ACTION]`  
1. **Immediately** close the distribution system entry valve. Under-disinfected water must not leave the plant.  
2. Diagnose and fix the dosing failure (see Section 8.5).  
3. Once repaired, confirm residual is restored.  
4. DO NOT resume distribution until the finished water free chlorine meets the minimum residual requirement.  
5. Notify the regulatory authority per your permit requirements (this is often a mandatory reporting event).

---

## 10.5 Contamination Event / Adverse Water Quality

This covers: detection of an unusual taste or odour in finished water, an unexpected turbidity spike, a microbiological positive, or a chemical detection event.

### Immediate response:

`[ACTION]`  
1. **Stop distribution** if the contaminant poses a health risk or if you are uncertain. Do not wait for confirmation to stop.  
2. **Collect and preserve samples** from all points in the treatment train immediately — these are your evidence.  
3. **Notify your supervisor** and the regulatory authority immediately. Most jurisdictions require notification within a few hours of a contamination event — check your permit.  
4. **Do not flush the system yet** — preserve the evidence first.  
5. Document everything: first sign of the problem, all test results, all actions taken, all people contacted.

### Investigation:

Work backward through the treatment train:
- Where in the process did the contamination enter or originate?
- Was there an upstream event? (algal bloom, agricultural runoff, spill in the watershed, infrastructure failure?)
- Was there a treatment failure? (missed dose, equipment failure, bypassed process?)
- Was there contamination in the distribution system? (backflow event, main break, unauthorized connection?)

### Communication during a Boil Water Advisory:

If a Boil Water Advisory (BWA) is issued by the regulatory authority:
- You are a technical resource; the regulatory authority issues the advisory and manages public communication.
- Cooperate fully with the authority's investigation.
- Document every step of the corrective action.
- BWA lifting requires: corrective actions complete, adequate disinfection restored, bacteriological samples confirming safety (typically two consecutive clean samples, 24 hours apart).

---

## 10.6 Flooding or Extreme Weather Events

`[ACTION]`  
1. Monitor Environment Canada / local weather forecasts during severe weather seasons.  
2. If flooding is possible:
   - Raise or sandbag critical electrical equipment
   - Ensure backup generator is fuelled and tested
   - Pre-position equipment and chemical supplies
   - Ensure you have contact information for all emergency services
3. If intake turbidity increases rapidly during a storm event: immediately run a jar test, increase coagulant dose, and increase monitoring frequency.
4. Extreme cold: ensure all chemical lines (especially sodium hypochlorite, which freezes near 0°C), instrument sample lines, and water lines are protected from freezing.

---

## 10.7 Emergency Contacts and Reporting Requirements

> *(Fill in with your site and jurisdiction-specific information.)*

| Event | Who to Notify | When |
|---|---|---|
| Finished water turbidity exceeds permit limit | Supervisor + Regulatory authority | Per your permit — often within 24 hours |
| Chlorine residual below minimum | Supervisor + Regulatory authority | Per permit — often within hours |
| Confirmed positive E. coli in distribution | Regulatory authority + Public Health | Immediately (same business day) |
| Boil Water Advisory issued | Follow regulatory authority direction | As directed |
| Chemical spill > reportable quantity | Regulatory authority + SPILLS line | Immediately |
| Power failure > X hours | Supervisor | Per your protocol |
| Major equipment failure affecting treatment | Supervisor | Immediately |

**Regulatory reporting hotline:** *(TBD — check your operating permit)*

---

*Last updated: 2026-06-04 | Source: Initial framework*
