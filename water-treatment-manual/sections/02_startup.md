# Section 2 — Startup Procedures

> Starting the plant (or restarting after a shutdown) is one of the highest-risk moments in operations. Rushing startup causes more problems than almost anything else. Work slowly, verify each step, never skip.

---

## 2.1 Types of Startup

| Type | When it happens | Key difference |
|---|---|---|
| **Cold start** | Plant has been fully offline (power outage, extended maintenance) | All systems from scratch; longest and most methodical |
| **Warm start** | Plant briefly offline (a few hours); systems still primed | Shorter checklist; equipment likely still primed |
| **Unit process restart** | A single unit (e.g., one filter, one clarifier) coming back online after maintenance | Only the checklist for that unit |

> **If you're unsure which type applies, treat it as a cold start.** It's always safer.

---

## 2.2 Pre-Startup Checklist (All Types)

Complete this before turning anything on.

### Safety checks
- [ ] Confirm all lockout/tagout (LOTO) locks have been removed by the person who placed them
- [ ] Verify no personnel are inside basins, tanks, or vessels
- [ ] Confirm all manhole covers, hatches, and access points are closed and secured
- [ ] Check that all safety shower and eyewash stations are operational
- [ ] Review the logbook — any open work orders or known issues?

### Mechanical checks
- [ ] Inspect all pump packing glands / mechanical seals — no significant leaks
- [ ] Check all valve positions — confirm they match the startup configuration (refer to your P&ID)
- [ ] Verify all motor coupling guards are in place
- [ ] Confirm all chemical injection points are clear (no blockages)

### Chemical checks
- [ ] Verify chemical tanks have sufficient inventory for at least one full day of operation
- [ ] Confirm chemical dosing pump tubing is not cracked or kinked
- [ ] Prime dosing pumps if they have been dry (follow Section 2.5 below)

### Electrical / instrumentation checks
- [ ] Confirm all control panels are energized
- [ ] Check that all online instruments (turbidimeters, chlorine analyzers, flow meters) are reading and not in fault
- [ ] Confirm SCADA communications are live (if applicable)

---

## 2.3 Cold Start — Sequence

> *(This sequence follows a conventional coagulation/flocculation/sedimentation/filtration/disinfection plant. Your site-specific sequence will be refined once you provide your process flow diagrams and SOPs.)*

### Phase 1: Raw Water Intake

`[ACTION]` 1. Slowly open the raw water intake valve (if manual) — open no more than 25% initially.  
`[ACTION]` 2. Start the raw water (low-lift) pumps at minimum speed/flow.  
`[CHECK]` 3. Confirm flow on the raw water meter. Wait for stable flow before proceeding.  
`[CHECK]` 4. Watch for air release at high points in the suction line — open air release valves as needed.

`ℹ️ WHY:` Starting at low flow prevents water hammer (a pressure surge that can crack pipes and damage valves). Letting air escape prevents air locks and inaccurate flow readings.

---

### Phase 2: Chemical Dosing — Coagulant

`[ACTION]` 5. Start the coagulant dosing pump (typically alum or polyaluminium chloride/PACl).  
`[ACTION]` 6. Set the dose to your baseline starting point (from your dosing table — see Section 5).  
`[CHECK]` 7. Confirm the pump is actually injecting: watch the injection point for the chemical plume, or verify the tank level is dropping.

`ℹ️ WHY:` You must be dosing coagulant BEFORE water enters the flocculation basin. If water passes through without coagulant, it will carry suspended solids straight to the filters — and turbidity spikes can take an hour or more to clear.

---

### Phase 3: Flocculation

`[ACTION]` 8. Start flocculation mixers at low speed.  
`[CHECK]` 9. Observe the forming floc in the basin. Healthy floc looks like small white or grey snowflakes that grow and settle. Poor floc is pinpoint-sized or stays in suspension.

`ℹ️ WHY:` Flocculation uses gentle mixing to help coagulated particles collide and stick together into larger, heavier "floc" that can settle.

---

### Phase 4: Sedimentation / Clarification

`[ACTION]` 10. Confirm sedimentation basin outlet valve is open.  
`[CHECK]` 11. As flow enters the basin, watch for even distribution across the inlet. Uneven flow causes short-circuiting (water bypasses settling and exits too fast).  
`[CHECK]` 12. Do NOT expect good settled water quality for the first 1–2 hours of startup. The basin needs time to reach steady state.

---

### Phase 5: Filtration

`[ACTION]` 13. Before opening a filter to flow, confirm it has been backwashed recently (within the last backwash cycle). If not, run a backwash first (see Section 6).  
`[ACTION]` 14. Slowly open the inlet valve to the filter — no more than 25% initially.  
`[CHECK]` 15. Monitor the filter effluent turbidity continuously. During startup, turbidity may be elevated for 10–30 minutes ("filter ripening").  
`[ACTION]` 16. Do NOT send filter effluent to the distribution system until turbidity is below your target (typically ≤ 0.3 NTU, often ≤ 0.1 NTU per your permit).

`ℹ️ WHY:` Filter ripening is normal — the filter media needs time to re-establish its biological and physical filtering layer. The first-flush water can contain elevated turbidity and should go to waste or back to the head of the plant.

---

### Phase 6: Disinfection

`[ACTION]` 17. Start the disinfection system (chlorine dosing pump, UV system, or both — per your plant design).  
`[ACTION]` 18. Set the dose to your target CT value (contact time × concentration — see Section 5).  
`[CHECK]` 19. DO NOT allow water to enter the distribution system until you have confirmed:
  - Finished water turbidity ≤ permit limit
  - Free chlorine residual ≥ regulatory minimum at the entry point to distribution

`⚠️ WARNING:` Sending under-disinfected water to the distribution system is a public health emergency. If you are unsure, recirculate or send to waste. Call your supervisor.

---

### Phase 7: Ramp Up to Normal Flow

`[ACTION]` 20. Gradually increase raw water flow to the operational target over 30–60 minutes.  
`[ACTION]` 21. Adjust chemical doses proportionally as flow increases (see dosing table in Section 5).  
`[CHECK]` 22. Take a set of startup samples (raw, settled, filter effluent, finished water) and record in logbook.  
`[CHECK]` 23. Confirm all online instruments are reading correctly and agree with your grab samples (within ±10%).

---

## 2.4 Unit Process Restart

When restarting just one unit (e.g., a filter or clarifier that was taken offline for maintenance):

1. Confirm maintenance work order is signed off and LOTO removed.
2. Run the relevant portion of the Pre-Startup Checklist above.
3. Bring the unit online slowly while keeping the rest of the plant at stable operation.
4. Monitor the effluent quality of that unit for 30 minutes before returning it to normal service.
5. Record in the logbook: time offline, reason, time returned to service.

---

## 2.5 Priming Chemical Dosing Pumps

If a dosing pump has been dry (empty tube/tank), you must prime it before use:

`[ACTION]` 1. Ensure the chemical tank has liquid.  
`[ACTION]` 2. Disconnect the discharge tubing from the injection point (hold a rag over it to catch chemical).  
`[ACTION]` 3. Run the pump until chemical flows steadily from the discharge — no bubbles.  
`[ACTION]` 4. Reconnect the tubing.  
`[ACTION]` 5. Verify the pump is injecting correctly at the injection point.

`⚠️ WARNING:` Wear appropriate PPE (gloves, goggles, face shield) when working with dosing chemicals. See Section 9.

---

## 2.6 Startup Completion Checklist

Before declaring startup complete, confirm all of the following:

- [ ] All processes are running at target flow
- [ ] Chemical doses are set and confirmed injecting
- [ ] Finished water turbidity is within target
- [ ] Finished water chlorine residual is within target
- [ ] Finished water pH is within target
- [ ] All online instruments are reading and calibrated
- [ ] Startup logged with start time and initial readings
- [ ] Supervisor notified if this was an unplanned startup

---

*Last updated: 2026-06-04 | Source: Initial framework*
