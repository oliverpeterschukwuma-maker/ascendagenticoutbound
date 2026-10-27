# Module 11 — Valves & Piping

← [Module 10](10-pumps.md) · [Course index](../README.md) · Next → [Module 12 — Hydraulics](12-hydraulics.md)

**NTK area:** Equipment Evaluation, Maintenance and/or Operation (≈39%). Valves appear in pump questions, safety (lockout of valves), and troubleshooting.

---

## 1. What you need to know (checklist)

- [ ] The five jobs a valve can do: **isolate, throttle (control), prevent backflow, relieve/regulate pressure, release air**
- [ ] **Gate, globe, ball, butterfly, plug, check** valves — how each works and what it's normally used for
- [ ] Special valves: knife gate, pinch, diaphragm, telescoping, mud, air release, air/vacuum, pressure relief, pressure reducing
- [ ] **Control valves** and actuators (manual, electric, pneumatic); fail-open / fail-closed
- [ ] **Isolation valves** and their role in lockout
- [ ] **Flow direction** — arrows on valves; installing direction-sensitive valves correctly
- [ ] **Backflow and cross-connections**; backflow preventers; air gap
- [ ] Basic piping terms: materials, fittings, joints, supports, thrust blocks, labelling/colour coding
- [ ] Valve operation and maintenance (exercising, packing, lubrication, closing slowly)

---

## 2. Plain-English teaching

### 2.1 The five jobs of valves

| Job | Meaning | Typical valves |
|---|---|---|
| **Isolation (on/off)** | Fully open or fully closed — to shut off a section for maintenance | Gate, ball, plug, butterfly, knife gate |
| **Throttling (flow control)** | Partly open to control flow | **Globe**, butterfly, plug (eccentric), control valves |
| **Backflow prevention** | Allow flow one way only | **Check valves**, backflow preventers |
| **Pressure relief/regulation** | Open at a set pressure, or reduce pressure | Pressure relief valve, pressure-reducing valve (PRV) |
| **Air release / vacuum relief** | Let trapped air out, or let air in to prevent vacuum | Air release valve, air/vacuum valve, combination air valve |

### 2.2 The main valve types

| Valve | How it works | Normally used for | Don't use for / watch out |
|---|---|---|---|
| **Gate valve** | A flat **gate (wedge/disc) slides up and down** across the flow; many turns of the handwheel | **Isolation** — fully open or fully closed. Very little headloss when open | **Don't throttle** — the gate vibrates and the seats/edges wear (and won't seal later). Sediment can stop it closing fully. **Rising stem (OS&Y)** shows position; non-rising stem doesn't |
| **Globe valve** | A **disc/plug presses down onto a seat**; water changes direction inside the round "globe" body | **Throttling** (fine flow control); small lines, water/air services | **High headloss** even when fully open. Install with **flow arrow** in the right direction |
| **Ball valve** | A **ball with a hole** through it turns **¼ turn** | Quick **on/off isolation**; small lines, chemicals, sample lines | Closes **fast** → can cause water hammer. Not ideal for fine throttling |
| **Butterfly valve** | A **disc on a shaft rotates ¼ turn** in the pipe | **Isolation and throttling** in large pipes; **air headers** (blower air control) | The disc stays in the flow (some headloss); rags can catch on it; quick operation → water hammer on large lines (use gear operators) |
| **Plug valve** | A **tapered or cylindrical plug** with an opening turns ¼ turn. **Eccentric plug valves** are very common in wastewater | **Sludge, scum, raw wastewater** — isolation and some throttling | Lubricated plug types need regular lubrication |
| **Check valve** | Opens with forward flow; **closes automatically** when flow reverses | **Prevent backflow** — pump discharges, lift stations | Install with **flow arrow** correct; **slamming** → water hammer; rags can hold it open |

**Memory tricks**
- **Gate = Gone or Go** (fully closed or fully open — never in between).
- **Globe = Good for Getting fine control** (throttling).
- **Ball & Butterfly & Plug = Quarter-turn** (¼ turn from open to closed).
- **Check = Checks the flow goes one way.**

### 2.3 Check valve types

| Type | Description |
|---|---|
| **Swing check** | A hinged flapper swings open with flow and falls closed. May have an **outside lever and weight** or spring to help it close (cushioned) |
| **Ball check** | A rubber-coated ball rolls out of the way with flow and back into the seat when flow stops — **common in sewage/lift stations** (handles solids) |
| **Lift check** | Disc lifts vertically off the seat |
| **Tilting disc / double-door (wafer)** | Faster closing, less slam |

**Problems:** rags or grit hold it **open** → backflow, pump spins backward, wet well refills, short cycling. Slamming → water hammer.

### 2.4 Special valves you'll see

| Valve | Use |
|---|---|
| **Knife gate valve** | Sharp-edged gate **cuts through solids/sludge** — sludge lines, slurries |
| **Pinch valve** | A rubber **sleeve is squeezed** shut — grit, slurries, sludge (nothing to clog) |
| **Diaphragm valve** | Flexible diaphragm closes against a weir — **chemicals** (corrosive), clean lines |
| **Telescoping valve** | Adjustable-height pipe (like a movable weir) — **draw off sludge or supernatant** from clarifiers/digesters by gravity |
| **Mud valve** | Valve in the floor of a tank used to **drain** it |
| **Air release valve** | Installed at **high points** of force mains/pipelines; **releases trapped air** while the line is under pressure (trapped air reduces flow and causes surges) |
| **Air/vacuum valve** | Lets **large amounts of air out** when filling a line and **lets air in** when draining (prevents vacuum and pipe collapse). "Combination air valve" does both jobs |
| **Pressure relief valve** | Opens automatically when pressure exceeds a setpoint — **required on positive displacement pump discharges** |
| **Pressure-reducing valve (PRV)** | Lowers and holds a steady downstream pressure |
| **Sluice gate / slide gate** | Large gates in channels to isolate or divert flow |

*Wastewater air valves get fouled with grease and solids — they need regular **back-flushing and cleaning**.*

### 2.5 Control valves and actuators

A **control valve** is any valve **moved automatically** by an **actuator** following a signal from a controller (PLC/SCADA).

| Actuator | Powered by |
|---|---|
| **Manual** | Handwheel, lever, chainwheel (for high valves), gear operator, valve key (buried valves) |
| **Electric (motor-operated valve, MOV)** | Electric motor + gearbox; limit switches stop it at open/closed |
| **Pneumatic** | Compressed air pushing a diaphragm or piston |
| **Hydraulic** | Oil or water pressure |

- **On/off** control valves are either open or closed; **modulating** valves can be positioned anywhere (e.g., 37% open) by a **positioner**.
- **Fail-safe position:** what the valve does when it loses power/air — **fail-open (FO)**, **fail-closed (FC)**, or **fail-last-position**. Chosen for safety (e.g., a chemical feed valve may fail **closed**).
- Example: **DO control** — the PLC opens/closes the **air butterfly valve** on an aeration header to hold the DO setpoint.
- Most control valves have a **manual override** (handwheel) for emergencies.

### 2.6 Isolation valves and lockout

- Equipment is usually installed with **isolation valves on both sides** (suction and discharge of a pump; inlet and outlet of a meter) so it can be removed for maintenance.
- During lockout, **valves are energy-isolating devices** for liquids/pressure — **close and lock them** (chains, valve lockout covers) and **bleed pressure** before opening anything.
- A **closed valve may leak** — for confined-space entry, lines may need **blanking/blinding** or **double block and bleed** (two closed valves with a drain open between them).

### 2.7 Flow direction

Many valves only work correctly in **one direction** and have an **arrow cast on the body**: **check valves, globe valves, many control valves, pressure relief/reducing valves, backflow preventers.**
- A check valve installed backward **blocks all forward flow** (the pump will dead-head).
- Always confirm the arrow matches the flow direction when installing or reinstalling.

### 2.8 Backflow and cross-connections

- **Backflow** = water flowing **the opposite way** from what's intended. It happens by:
  - **Back-pressure** — downstream pressure becomes higher than supply pressure (e.g., a pump pushing into a potable line).
  - **Back-siphonage** — supply pressure drops (e.g., water main break, fire flow), sucking water backward.
- **Cross-connection** = any actual or potential connection between **drinking (potable) water** and a **non-potable** source (wastewater, effluent, chemicals). At a treatment plant, **all** hoses and process connections are potential cross-connections.

**Backflow prevention methods (from most to least protective):**
| Method | Notes |
|---|---|
| **Air gap** | A physical **open air space** between the water outlet and the flood level of the receiving tank/sink — **the most reliable protection.** Commonly at least **2× the supply pipe diameter** (and not less than ~25 mm/1 inch) **[SUPPLEMENTAL — confirm with local code]** |
| **Reduced Pressure Principle Backflow Assembly (RP / RPBA)** | Two check valves plus a relief valve between them that dumps water if backflow starts — **high hazard** protection |
| **Double Check Valve Assembly (DCVA)** | Two independent check valves — lower hazard |
| **Vacuum breakers** (atmospheric, pressure) | Back-siphonage only (e.g., hose bibs) |

- Testable backflow assemblies must be **tested by a certified tester** (commonly **annually**) per local bylaws. **[GENERAL — follow your municipality]**
- At plants, **non-potable water** (often treated effluent used for washdown, seal water, sprays) must be clearly **labelled** "non-potable — do not drink" and **never connected** to the potable system.

### 2.9 Basic piping terms

| Term | Meaning |
|---|---|
| **Nominal diameter** | The "name size" of a pipe (e.g., 150 mm / 6 in) — not always the exact inside diameter |
| **Schedule / class / pressure rating** | Wall thickness / strength rating |
| **Pipe materials** | **PVC** (plastic, corrosion-resistant), **HDPE** (flexible plastic, fused joints), **ductile iron** (strong, common for force mains/plant piping), **steel/stainless steel** (air lines, chemical lines), **concrete** (large gravity sewers), **cast iron** (older) |
| **Fittings** | **Elbow (bend)** — change direction; **tee** — branch at 90°; **wye** — branch at 45°; **reducer/increaser** — change size; **coupling** — join two pipes; **union** — joint that can be taken apart easily; **flange** — bolted connection; **cap/plug** — closes the end; **nipple** — short threaded pipe; **bushing** — reduces a threaded opening |
| **Joints** | Flanged (bolted, with gasket), threaded, welded, **bell and spigot / push-on** (with rubber gasket), mechanical joint, solvent-welded (PVC), fusion-welded (HDPE) |
| **Thrust block / restraint** | Concrete block or restrained joints at bends/tees that keep pressure from **pushing pipe joints apart** |
| **Pipe supports / hangers** | Hold pipe weight so pumps/valves aren't stressed |
| **Expansion joint / flexible coupling** | Allows movement, vibration isolation, or misalignment |
| **Headloss** | Every pipe, fitting and valve adds **friction** — more fittings, smaller pipe, longer pipe = more headloss (Module 12) |
| **Colour coding & labelling** | Plants colour-code pipes and mark **contents and flow direction arrows**. Learn your plant's code (many follow *Ten States Standards*) |
| **Clean-out** | Access point to clear a plugged pipe (common on sludge lines) |
| **Blind flange / blank** | Solid plate that seals off a pipe end (used for positive isolation) |

---

## 3. Operator-level understanding

- **Exercise valves regularly** (fully close and reopen on a schedule) — valves that never move **seize** and won't work in an emergency. Count and record the **number of turns** to close (tells you if the valve is fully closed later).
- **Close valves slowly**, especially large valves on long lines → prevents **water hammer**.
- **Never use a "cheater bar"** on a handwheel — you'll break the stem; a stuck valve needs maintenance.
- **Valve stem packing** can leak — tighten the packing gland evenly or repack (just like pump packing).
- **Lubricate** stems, gears and plug valves per schedule.
- **Know every isolation valve** for your critical equipment — in an emergency you need to isolate fast.
- **Check valves:** listen for slam; inspect for rags if a pump runs backward or the wet well refills.
- **Air release valves** on force mains: inspect and back-flush; a stuck one can reduce pumping capacity.

---

## 4. MUST MEMORIZE

1. **Gate valve = isolation (fully open/closed); don't throttle.**
2. **Globe valve = throttling; high headloss; flow arrow.**
3. **Ball, butterfly, plug = quarter-turn.** Butterfly → large pipes and **air headers**. **Plug (eccentric) → sludge/wastewater.**
4. **Check valve = one-way; prevents backflow; flow arrow; slam → water hammer.** **Ball checks** common in lift stations.
5. **Knife gate & pinch valves → sludge/slurries.** **Diaphragm valves → chemicals.** **Telescoping valve → sludge draw-off.**
6. **Air release valves at high points** of force mains; **air/vacuum valves** prevent vacuum.
7. **Pressure relief valve required on PD pump discharge.**
8. Control valves: actuator + positioner; **fail-open / fail-closed**.
9. **Air gap = best backflow protection.** RP assembly = high hazard.
10. **Backflow causes: back-pressure and back-siphonage.**
11. **Exercise valves regularly; close slowly.**
12. Isolation valves are part of **lockout**; use blanks/double block-and-bleed for positive isolation.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why gates aren't used for throttling | Valve → use table | OS&Y vs non-rising stem |
| Why quick-closing valves cause water hammer | Air gap = best | DCVA vs RPBA details |
| Why air in force mains is a problem | Flow-direction valves | Ten States colour code |
| Why valves need exercising | PD → relief valve | Specific fitting names (bushing, nipple) |
| How back-siphonage happens | Fail-safe terms | Gear operators, chainwheels |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Gate valves are best for throttling" | **Globe** for throttling; gate is on/off. |
| "Check valves work in either direction" | One direction only — follow the **arrow**. |
| "A closed valve is enough isolation for entry" | Valves can leak — **blank/blind or double block and bleed** when required. |
| "Close large valves quickly in an emergency" | Fast closure → **water hammer** — close steadily. |
| "An RP assembly is better than an air gap" | **Air gap** is the most reliable. |
| "Air release valves go at low points" | **High points** (air rises). Drains/blow-offs go at low points. |
| "Butterfly valves can't throttle" | They can isolate **and** throttle. |

---

## 7. Practice questions

1. Which valve is normally used ONLY in the fully open or fully closed position?
   A. Globe valve
   B. Gate valve
   C. Needle valve
   D. Control valve

2. Which valve is best suited for throttling (fine flow control) on a small water line?
   A. Gate valve
   B. Globe valve
   C. Check valve
   D. Knife gate valve

3. A butterfly valve is commonly used to:
   A. Prevent backflow in sewage force mains
   B. Control airflow on aeration headers
   C. Measure flow
   D. Relieve pressure on PD pumps

4. A ball check valve in a lift station is held open by rags. A likely result is:
   A. Higher pump discharge pressure
   B. Water flowing back to the wet well and the pump spinning backward when stopped
   C. Cavitation in the force main
   D. Higher chlorine residual

5. Air release valves on a sewage force main are installed at:
   A. Low points
   B. High points
   C. The pump suction
   D. The outfall only

6. What type of valve is required on the discharge side of a positive displacement pump to protect it from over-pressure?
   A. Gate valve
   B. Pressure relief valve
   C. Globe valve
   D. Air release valve

7. Which backflow prevention method gives the MOST reliable protection?
   A. Single check valve
   B. Air gap
   C. Gate valve
   D. Hose bib vacuum breaker

8. Backflow caused by a sudden drop in supply pressure (e.g., a water main break) is called:
   A. Back-pressure
   B. Back-siphonage
   C. Water hammer
   D. Cavitation

9. A new check valve was installed and the pump now delivers no flow; discharge pressure is high. The most likely problem is:
   A. The check valve was installed backward
   B. The pump is cavitating
   C. The packing is too loose
   D. The impeller is worn

10. Which valve is best for drawing off sludge or supernatant at an adjustable level by gravity?
    A. Telescoping valve
    B. Ball valve
    C. Pressure-reducing valve
    D. Diaphragm valve

11. A pneumatic control valve is specified as "fail-closed". If the plant loses instrument air, the valve will:
    A. Open fully
    B. Close
    C. Stay in its last position
    D. Modulate to 50%

12. Why should valves be exercised on a regular schedule?
    A. To increase headloss
    B. To make sure they will operate when needed and do not seize
    C. To drain the line
    D. To calibrate the flowmeter

13. A gate valve that has been used for throttling for years no longer seals when closed. The most likely reason is:
    A. Throttling wore and damaged the gate and seats
    B. It was exercised too often
    C. The stem was lubricated
    D. The flow direction was wrong

14. A fitting used to join two pipes so they can easily be taken apart later is a:
    A. Tee
    B. Union
    C. Reducer
    D. Cap

15. Concrete thrust blocks are placed at pipe bends to:
    A. Prevent corrosion
    B. Resist forces that would push pipe joints apart
    C. Reduce headloss
    D. Stop backflow

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Gate = isolation. |
| 2 | **B** | Globe = throttling. D is for sludge isolation. |
| 3 | **B** | Butterfly valves are common on air headers. A = check valves. D = relief valves. |
| 4 | **B** | Backflow through stuck-open check. |
| 5 | **B** | Air collects at high points. |
| 6 | **B** | Relief valve protects PD pumps. |
| 7 | **B** | Air gap = physical separation. |
| 8 | **B** | Back-siphonage = supply pressure drop. |
| 9 | **A** | Backward check valve blocks forward flow (dead-heads the pump). |
| 10 | **A** | Telescoping valve = adjustable gravity draw-off. |
| 11 | **B** | Fail-closed closes on loss of power/air. |
| 12 | **B** | Exercising prevents seizing. |
| 13 | **A** | Throttling erodes the gate/seats. |
| 14 | **B** | Union. |
| 15 | **B** | Thrust restraint. |
