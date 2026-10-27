# Module 10 — Pumps

← [Module 9](09-sludge-biosolids.md) · [Course index](../README.md) · Next → [Module 11 — Valves & Piping](11-valves-piping.md)

**NTK area:** **Equipment Evaluation, Maintenance and/or Operation — the biggest part of the exam (≈39%).** Pumps are the most common piece of equipment at any plant, so expect many questions here. Math: head, pressure, pump power, pumping rate ([Math 17D](../math/17d-process-pumps-pressure-lab.md)).

---

## 1. What you need to know (checklist)

- [ ] Two families of pumps: **centrifugal (dynamic)** and **positive displacement** — how each works and where each is used
- [ ] **Centrifugal pump parts**: impeller, volute/casing, shaft, sleeve, wear rings, stuffing box, packing, lantern ring, seal water, mechanical seal, bearings, coupling
- [ ] **PD pump types**: plunger/piston, diaphragm, progressive cavity, lobe, peristaltic (hose); metering pumps
- [ ] **Submersible pumps** and wet-well controls (floats, level sensors, lead/lag, alternation)
- [ ] **Suction vs discharge**; **head** terms (static, friction, total dynamic head); suction lift vs suction head
- [ ] **Priming**; **air locking / air binding**
- [ ] **Cavitation** — cause, sound, damage, fixes
- [ ] **Pump curves** (head vs flow, efficiency, best efficiency point, shutoff head)
- [ ] Starting and stopping procedures (centrifugal vs PD)
- [ ] **Check valves** and water hammer
- [ ] Packing vs mechanical seals — normal leakage, adjustment
- [ ] Pump **troubleshooting** (no flow, low flow, vibration, noise, overheating, tripping)
- [ ] **Preventive maintenance** (lubrication, alignment, vibration, temperature, amps, run hours)

---

## 2. Plain-English teaching

### 2.1 What a pump does

A pump **adds energy** to a liquid so it can move **uphill** (gain height), move **through pipes** (overcome friction), or move **into a pressurized system**.

There are two families:

| | **Centrifugal (dynamic)** | **Positive displacement (PD)** |
|---|---|---|
| How it works | A spinning **impeller** flings liquid outward (centrifugal force), building pressure in the casing | Traps a **fixed volume** of liquid and **pushes** it out — every stroke/turn moves the same amount |
| Flow vs pressure | Flow **changes** a lot with pressure (more head → less flow) | Flow stays **nearly constant** no matter the pressure |
| Closed discharge valve | Pump keeps spinning; flow stops; water **heats up** (don't run long — but won't instantly blow up) | **Pressure builds until something breaks** (pipe, pump, motor) — **NEVER run against a closed discharge.** Needs a **pressure relief valve** |
| Good for | Large flows of water/wastewater: influent pumps, lift stations, RAS, effluent | **Thick sludge**, scum, **chemical metering** (exact amounts), polymer |
| Self-priming? | Usually **no** (unless designed as self-priming) | Most are self-priming |
| Examples | End-suction, split-case, vertical turbine, submersible, recessed-impeller | Plunger, piston, diaphragm, progressive cavity, lobe, gear, peristaltic (hose) |

**Memory trick:** **Centrifugal = "Spin and fling." PD = "Trap and push."**

### 2.2 Centrifugal pump parts — follow the water

```
            DISCHARGE (out) ▲
                            │
         ┌──────────────────┴───────┐
         │   VOLUTE / CASING          │  ← spiral-shaped housing; turns speed into pressure
         │      ┌──────────┐          │
SUCTION ─┼─►    │ IMPELLER │  ◄── spins; flings water outward
 (in)    │ eye  └────┬─────┘          │
         │   wear rings│               │  ← tight gap between impeller & casing
         └─────────────┼──────────────┘
                       │ SHAFT (with SHAFT SLEEVE to protect it)
             ┌─────────┴─────────┐
             │ STUFFING BOX       │  ← holds PACKING (+ LANTERN RING + SEAL WATER)
             │ or MECHANICAL SEAL │     or a MECHANICAL SEAL — stops leaks along the shaft
             └─────────┬─────────┘
                  BEARINGS (support the shaft)
                       │
                  COUPLING ─────── MOTOR
```

| Part | What it does | Operator notes |
|---|---|---|
| **Impeller** | Spinning part with vanes; water enters at the **eye** (centre) and is thrown outward | **Clogging** (rags) and **wear** (grit) reduce flow. Types: **closed/enclosed** (efficient, clean water), **semi-open/open** (handles solids), **recessed/vortex** (sludge, rags) |
| **Volute / casing** | Spiral housing that collects water and converts speed into pressure | |
| **Wear rings** | Replaceable rings that keep a **tight gap** between impeller and casing | When worn, water **recirculates** inside the pump → **less flow and pressure**. Cheaper to replace rings than impeller/casing |
| **Shaft & shaft sleeve** | Shaft carries the impeller; sleeve protects the shaft where the packing rubs | Scored sleeve = leaks |
| **Stuffing box** | Chamber where the shaft exits the casing | Holds packing |
| **Packing** | Rings of braided material squeezed around the shaft | **Must leak slightly** (cools & lubricates) |
| **Lantern ring** | Spacer in the middle of the packing that lets **seal water** in | Must line up with the seal-water port |
| **Seal water (flushing water)** | Clean water fed to the packing/seal | Keeps grit out, cools, lubricates. Must be at a pressure **slightly higher than the pressure inside the stuffing box** |
| **Mechanical seal** | Two very flat, polished faces (one spinning, one stationary) pressed together | **Should NOT leak.** **Never run dry** — faces burn |
| **Bearings** | Support the shaft (radial loads and thrust/axial loads) | Need correct lubrication; noise/heat = failing |
| **Coupling** | Connects motor shaft to pump shaft | **Alignment** critical — misalignment causes vibration, bearing and seal failure |

### 2.3 Packing vs mechanical seals

| | **Packing** | **Mechanical seal** |
|---|---|---|
| Normal leakage | **A slow, steady drip** (commonly quoted as about **20–60 drops per minute** — a few drops per second at most) **[SUPPLEMENTAL]** | **No visible leakage** |
| Too little leakage | Packing **overheats**, burns, **scores the shaft sleeve** | — |
| Too much leakage | Wasted water, mess, lets air in on suction side | Seal has **failed** — replace |
| Adjustment | Tighten the **gland nuts evenly, a little at a time** (e.g., 1/6 turn), with the pump running, then wait and watch | Not adjustable |
| Replacing | Remove all old rings, clean, cut new rings to size, **stagger the joints** (e.g., 90–120° apart), line up the lantern ring | Specialized; exact installation |

**Over-tightening packing to "stop the drip" is a classic mistake** — and a classic exam question.

### 2.4 Positive displacement pumps

| Type | How it works | Typical use | Notes |
|---|---|---|---|
| **Plunger / piston** | Piston moves back and forth with check valves | Primary sludge | Pulsing flow; adjustable stroke |
| **Diaphragm** | Flexible diaphragm pulses with check valves | **Chemical metering**, scum, small sludge | Very accurate dosing; diaphragm can rupture |
| **Progressive cavity (PC)** | Corkscrew **rotor** turns inside a rubber **stator**, moving "cavities" of liquid | **Thick sludge**, polymer, cake | **Never run dry** (stator burns in seconds/minutes); grinders often protect it |
| **Rotary lobe / gear** | Meshing lobes or gears | Sludge, viscous liquids | |
| **Peristaltic (hose/tube)** | Rollers squeeze a hose | Chemical feed, lab samplers | Only the hose touches the liquid |

**Metering pumps** (often diaphragm or peristaltic) are adjusted by **stroke length** and **stroke speed (frequency)**. Hypochlorite metering pumps can **air-lock** from off-gassing — bleed the air.

**All PD pumps:** need a **pressure relief valve** on the discharge, and **all discharge valves must be open before starting.**

### 2.5 Submersible pumps & wet wells

- **Submersible pump** = pump + sealed motor in one unit that sits **underwater** in the wet well. Water around the motor helps cool it.
- Installed on **guide rails** so it can be lifted out without entering the wet well (a big **safety** advantage — avoids confined-space entry).
- Protection: **moisture/leak sensors** (seal failure), **thermal switches** in the motor windings (overheating).
- **Must stay submerged** enough to cool and to avoid **vortexing** (whirlpools pulling air into the pump).

**Wet well controls**
```
        ── HIGH-LEVEL ALARM ──  (call out!)
        ── LAG PUMP ON ───────  (second pump starts if level keeps rising)
        ── LEAD PUMP ON ──────
                ~ water level ~
        ── PUMPS OFF ─────────
        ── LOW-LEVEL ALARM / cutoff ── (protects pumps from running dry / vortexing)
```
- Level sensed by **floats**, **ultrasonic** sensor, **pressure transducer**, or **bubbler** (Module 13).
- **Lead/lag:** the **lead** pump starts first; the **lag** pump starts only if the level keeps rising.
- **Alternation:** pumps take turns being lead so they wear evenly.
- **Short cycling** (starting/stopping too often) overheats motors — caused by float settings too close together, a leaking check valve (water flows back), or a pump that's too big.

### 2.6 Suction, discharge, and head

**Head** = energy expressed as a **height of liquid** (metres or feet). If a pump makes 30 m of head, it could push water 30 m straight up (ignoring friction).

| Term | Meaning |
|---|---|
| **Suction side** | Inlet of the pump |
| **Discharge side** | Outlet of the pump |
| **Suction lift** | The water source is **below** the pump centreline — the pump must "lift" water up to itself (harder) |
| **Suction head (flooded suction)** | The water source is **above** the pump centreline — water flows into the pump by gravity (easier; no priming problem) |
| **Static discharge head** | Height from pump centreline to the discharge water surface/outlet |
| **Total static head** | Vertical distance from the supply water surface to the discharge water surface |
| **Friction head (friction loss)** | Energy lost to friction in pipes, fittings, valves |
| **Total dynamic head (TDH)** | Total static head + friction losses (+ velocity head) — what the pump actually works against while running |

```
                                       ┌── discharge water surface
                                       │
              STATIC DISCHARGE HEAD    │ ↑
                                       │ │  TOTAL
        PUMP ●─────────────────────────┘ │  STATIC
             │                           │  HEAD
  SUCTION    │ STATIC SUCTION LIFT       │
  LIFT       ↓                           ↓
  ───────────── supply water surface (below pump = suction LIFT)
```

**Pressure ↔ head (memorize for math):** **1 psi = 2.31 ft of water**; **1 ft = 0.433 psi**; **1 m of water ≈ 9.81 kPa**.

### 2.7 Priming, air locking and air binding

- **Priming** = filling the pump casing and suction line with liquid before starting. A centrifugal pump **can't pump air** — if it's full of air, the impeller just spins.
- How: flooded suction (easiest), **foot valve** (a check valve at the bottom of the suction pipe holds water in), priming tank, vacuum priming system, or a **self-priming** pump design.
- **Air locking / air binding** = an air pocket trapped in the pump or a high point in the line blocks flow. Causes: air leaks in the suction line, low wet-well level (vortexing), gas from wastewater/hypochlorite. Fix: **vent the air** (air release valve/petcock), fix suction leaks, raise wet-well level.
- **Never run a pump dry** — seals and PC stators are destroyed.

### 2.8 CAVITATION — explained simply

**What it is:** Water boils when its pressure gets low enough — even when it's cold. (At the top of a very high mountain, water boils at a lower temperature. Same idea.)

1. As water rushes into the **eye** of the impeller, the pressure there drops.
2. If the pressure drops **too low**, the water **boils** and forms tiny **vapour bubbles**.
3. The bubbles are carried into higher-pressure areas, where they **collapse (implode) violently**.
4. Each collapse is like a tiny hammer blow. Millions of them **chew holes in the impeller** (it looks pitted/spongy) and cause **noise and vibration**.

**What it sounds like:** like the pump is pumping **gravel, marbles or rocks**.

**Why it happens (low pressure at the pump inlet):**
- **Suction lift too high** / wet-well level too low
- **Suction valve partly closed** or **clogged suction line/screen/impeller eye**
- Suction pipe **too small or too long** (too much friction)
- Liquid **too hot** (boils more easily)
- Pump running **too far out on its curve** (very high flow, low head — "runout")

**How to fix it:**
- **Fully open the suction valve** — **never throttle a pump on the suction side**
- Clear blockages in the suction line or impeller eye
- **Raise the wet-well level** / reduce suction lift
- Throttle the **discharge** slightly or reduce speed (VFD) to move the pump back to its normal operating range
- Fix the design (larger suction pipe) if it's chronic

*(Technical name to recognize: cavitation happens when **NPSH available** (Net Positive Suction Head — the pressure available at the suction) is **less than NPSH required** by the pump.)*

**Memory trick: "Starved suction → bubbles → gravel sound → pitted impeller."**

### 2.9 Pump curves

A **pump curve** (from the manufacturer) shows how a centrifugal pump performs:

```
 HEAD │●  shutoff head (zero flow, max head)
      │  ●
      │     ●  ← H-Q curve: as HEAD goes UP, FLOW goes DOWN
      │        ●
      │           ★ ← BEP (Best Efficiency Point) — run near here
      │              ●
      │                 ●  ← runout (high flow, low head; cavitation/overload risk)
      └──────────────────────── FLOW
```
- **As head increases, flow decreases** (and vice versa).
- **Shutoff head** = head at **zero flow** (discharge closed).
- **BEP (Best Efficiency Point)** — where the pump runs most efficiently with least wear. Running far from BEP causes vibration, heat, seal/bearing problems.
- Curves also show **efficiency**, **power (bhp/kW)**, and **NPSH required**.
- **Changing speed (VFD)** shifts the curve (recognize the **affinity laws**: flow changes with speed; head with speed²; power with speed³).
- **Pumps in parallel** → more **flow**. **Pumps in series** → more **head**. (Recognize.)

### 2.10 Starting and stopping

**Centrifugal pump (typical SOP — follow your plant's):**
1. Check that it's safe (guards on, no lockout, people clear).
2. **Open the suction valve fully.**
3. Make sure the pump is **primed** (vent air).
4. Check seal water/lubrication.
5. Start with the **discharge valve closed or slightly open** (reduces starting load on large pumps), then **open the discharge slowly** (prevents water hammer and motor overload).
6. Check pressure, amps, noise, vibration, leakage.
7. **Don't run long against a closed discharge** — the water inside heats up and damages the pump.

**Positive displacement pump:**
- **Open ALL discharge valves first** (and suction). Starting against a closed discharge can burst pipes or the pump.
- Confirm relief valve is in service.

**Stopping centrifugal pumps on long discharge lines:** close the discharge valve slowly (or use a slow-closing/controlled check valve) to avoid **water hammer**.

### 2.11 Check valves and water hammer

- A **check valve** on the pump discharge stops water from **flowing backward** when the pump stops (which would spin the pump backward, drain the line, and could flood the wet well).
- **Water hammer** = a pressure shock wave when moving water is **stopped suddenly** (valve slams shut, pump stops). Sounds like a **bang/hammering** in the pipe; can break pipes and fittings.
- Prevented by: slow-closing valves, cushioned or controlled check valves, surge tanks/relief valves, soft starters/VFDs.

### 2.12 Troubleshooting table

| Problem | Possible causes | Checks / actions |
|---|---|---|
| **No flow** | Not primed / air-bound; suction or discharge valve closed; impeller clogged; **wrong rotation** (3-phase wired backward); broken shaft/coupling; suction lift too high | Vent/prime; check valves; clear clog (lockout!); check rotation; inspect coupling |
| **Low flow / low pressure** | **Worn impeller or wear rings**; partly clogged impeller/suction; air leaks in suction; cavitation; speed too low; system head higher than expected (partly closed discharge, plugged line) | Check pressures and amps vs normal; inspect wear rings; check suction |
| **Noisy (gravel sound)** | **Cavitation** | Open suction, clear blockage, raise level, reduce speed |
| **Vibration** | **Misalignment**, worn **bearings**, unbalanced/clogged impeller, cavitation, loose mounting bolts, bent shaft | Check alignment, bearings, clogs, base bolts |
| **Bearings hot** | Too much **or** too little grease, wrong lubricant, misalignment, worn bearings | Lubricate per schedule (don't over-grease!), check alignment |
| **Motor overheats / trips on overload** | Pump overloaded (clog, binding, runout flow), low/unbalanced voltage, single-phasing, bad bearings, too frequent starts | Check amps vs nameplate, voltage, clogs, cycle frequency |
| **Packing leaks too much** | Worn packing, scored sleeve, gland loose | Adjust evenly; repack; replace sleeve |
| **Packing smokes/hot** | Packing too tight, no seal water | Loosen slightly; restore seal water |
| **Mechanical seal leaking** | Seal worn/damaged, ran dry, grit | Replace seal; fix seal water/flush |
| **Short cycling** | Float settings too close, leaking check valve, oversized pump | Adjust levels; repair check valve |
| **Pump runs backward after stopping** | Leaking/failed check valve | Repair check valve; isolate before working |

**Wrong rotation tip:** a centrifugal pump running backward still pumps **some** water, but much **less** and at lower pressure. On a three-phase motor, an electrician fixes it by **swapping two of the three power leads**.

### 2.13 Preventive maintenance (PM)

| Task | Why |
|---|---|
| **Daily rounds**: look, listen, feel (carefully), smell | Catch problems early — noise, heat, vibration, leaks |
| Record **pressures, amps, run hours, flows** | Trends show wear (e.g., same amps but less flow = worn impeller/rings) |
| **Lubricate** bearings per schedule — **right lubricant, right amount** | **Over-greasing** is as bad as under-greasing (heat, seal damage) |
| Check **oil levels** and condition | |
| Check **alignment** after any work on pump/motor | Misalignment = vibration, bearing and seal failure |
| Check **packing leakage** / seal condition | |
| **Vibration** and **temperature** readings (IR thermometer) | Early warning of bearing failure |
| **Exercise standby pumps** and alternate duty | Standby must work when needed |
| Inspect/clean **impellers**, check **wear rings** (shutdown, lockout) | Restore capacity |
| Keep **guards** in place | Safety |

**Always lock out before any hands-on work** — float-controlled pumps can start automatically.

---

## 3. Operator-level understanding

- **Know "normal"** for every pump: normal discharge pressure, amps, sound, temperature, run time. Most troubleshooting is comparing today to normal.
- **Amps tell a story:** low amps + low flow → pump is moving little (air bound, clogged suction, closed discharge). High amps → overloaded (clog/binding, runout, bad bearings, low voltage).
- **Rags are the #1 pump problem in wastewater** — clogged impellers, tripped motors. Good screening upstream (Module 3) prevents this.
- **Run time is a measuring tool:** if a lift-station pump suddenly runs much longer to empty the well, it's either more inflow (I/I) or a worn/clogged pump.
- **Submersibles:** pull on guide rails to inspect — avoid entering the wet well.

---

## 4. MUST MEMORIZE

1. **Centrifugal = spin and fling** (impeller); **PD = trap and push** (fixed volume per stroke/turn).
2. **Never run a PD pump against a closed discharge** — needs a relief valve.
3. Centrifugal: **as head ↑, flow ↓**; shutoff head at zero flow; run near **BEP**.
4. **Packing should drip slightly**; **mechanical seals should not leak**.
5. Adjust packing **evenly, a little at a time**; **don't over-tighten** (burns packing, scores sleeve).
6. **Lantern ring** lines up with **seal water**; seal water pressure **slightly above stuffing box pressure**.
7. **Worn wear rings → less flow and pressure** (internal recirculation).
8. **Cavitation = low suction pressure → vapour bubbles collapse → gravel/marbles sound, pitting.** Fix the **suction**; **never throttle the suction valve**.
9. **Priming** = fill pump with liquid; centrifugal pumps can't pump air. **Foot valve** holds prime.
10. **Air binding** → vent air; fix suction leaks.
11. **Suction lift** = source below pump; **suction head** = source above pump.
12. **TDH = static head + friction losses.**
13. **1 psi = 2.31 ft; 1 ft = 0.433 psi; 1 m ≈ 9.81 kPa.**
14. **Check valves** prevent backflow; sudden closure → **water hammer**.
15. **Misalignment** → vibration, bearing and seal failure.
16. **Over-greasing** bearings causes overheating.
17. Three-phase **wrong rotation** → swap two leads; pump gives low flow.
18. **PC pumps must never run dry.**
19. Wet wells: **lead/lag, alternation, high-level alarm**; short cycling overheats motors.
20. **Parallel = more flow; series = more head** (recognize).

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why PD pumps break things against a closed valve | Packing drips / seal doesn't | NPSHa vs NPSHr |
| Why cavitation happens and how to stop it | Cavitation sound + fixes | Affinity laws |
| How the pump curve trades head for flow | psi ↔ ft ↔ kPa | Vertical turbine, split-case, axial-flow pumps |
| Why misalignment destroys bearings/seals | Lead/lag/alternation | Radial vs thrust bearings |
| How amps/pressure reveal pump condition | Startup sequence | Specific speed, impeller trimming |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Tighten packing until it stops leaking" | Packing **must** drip slightly. |
| "Throttle the suction valve to reduce flow" | **Never** throttle suction — causes cavitation. Throttle **discharge** if needed. |
| "Start a PD pump with the discharge closed" | **Never** — open discharge first. |
| "More grease is better" | Over-greasing causes heat and seal damage. |
| "Cavitation is caused by high suction pressure" | Caused by **low** suction pressure. |
| "A pump running backward pumps nothing" | It pumps **some** water — just much less. |
| "A mechanical seal should drip like packing" | A dripping mechanical seal has **failed**. |
| "Centrifugal pumps self-prime" | Most **don't** — they must be primed. |
| "When head increases, flow increases" | Flow **decreases**. |

---

## 7. Practice questions

1. A centrifugal pump sounds as if it is pumping gravel, and the impeller shows pitting. The most likely cause is:
   A. Over-greased bearings
   B. Cavitation
   C. Water hammer
   D. Wrong motor rotation

2. Which action is MOST likely to correct cavitation?
   A. Partially close the suction valve
   B. Fully open the suction valve and clear any suction blockage
   C. Increase pump speed
   D. Lower the wet-well level

3. A positive displacement sludge pump should be started:
   A. With the discharge valve closed
   B. With all discharge valves open
   C. Dry, to check rotation
   D. Against a closed relief valve

4. Correctly adjusted packing on a centrifugal pump should:
   A. Not leak at all
   B. Leak a slow, steady drip
   C. Leak a steady stream
   D. Be tightened until the pump slows down

5. A mechanical seal on a pump is dripping. This indicates:
   A. Normal operation
   B. The seal is failing and should be replaced
   C. The packing needs tightening
   D. The seal water is too clean

6. The purpose of the lantern ring in a stuffing box is to:
   A. Hold the impeller on the shaft
   B. Distribute seal (flushing) water into the packing
   C. Measure pump speed
   D. Prevent cavitation

7. A pump's flow and discharge pressure have gradually decreased over months while the motor amps are normal. Which part is MOST likely worn?
   A. Coupling
   B. Wear rings (and/or impeller)
   C. Check valve
   D. Motor windings

8. On a centrifugal pump curve, as the total head increases, the flow:
   A. Increases
   B. Decreases
   C. Stays the same
   D. Doubles

9. A pump draws water from a tank whose surface is 3 m BELOW the pump centreline. This is called:
   A. Suction head
   B. Suction lift
   C. Discharge head
   D. Friction head

10. Excessive vibration after a pump motor was replaced is MOST likely caused by:
    A. Clean seal water
    B. Misalignment of the coupling
    C. Correct packing adjustment
    D. Low wet-well level alarms

11. A newly installed three-phase pump runs but delivers much less flow than expected. One likely cause is:
    A. The motor is turning in the wrong direction
    B. The check valve is working
    C. The packing is dripping
    D. The pump is primed

12. A lift-station pump starts and stops every two minutes. A likely cause is:
    A. Correct float spacing
    B. Float/level settings too close together or a leaking check valve
    C. The pump is too small
    D. The high-level alarm is working

13. A pump continues to spin backward after it stops. The operator should suspect:
    A. A failed or leaking check valve
    B. A clogged impeller
    C. Over-tightened packing
    D. Low voltage

14. Which pump type is best suited to accurately feed small amounts of chemical?
    A. Large centrifugal pump
    B. Diaphragm metering pump
    C. Axial-flow pump
    D. Vertical turbine pump

15. Bearings on a pump are running hot shortly after the operator added a large amount of grease. The most likely cause is:
    A. Too little lubrication
    B. Over-greasing
    C. Low flow
    D. Correct maintenance

16. A progressive cavity pump's stator was destroyed in a few minutes. The most likely cause is:
    A. Pumping thick sludge
    B. Running dry (no liquid in the pump)
    C. Correct discharge valve position
    D. Using a grinder upstream

17. Water hammer is MOST likely to occur when:
    A. A valve is opened slowly
    B. A valve closes suddenly or a pump stops abruptly
    C. A pump is primed
    D. Packing is adjusted

18. Two identical pumps operating in parallel will mainly:
    A. Increase total head
    B. Increase total flow
    C. Reduce flow
    D. Reduce pressure to zero

19. Before removing a rag from a submersible pump impeller, the operator must:
    A. Wait for the pump to stop on low level
    B. Lock out the pump at the disconnect and verify it cannot start
    C. Turn the HOA switch to "Off" only
    D. Ask a co-worker to watch the float

20. Seal water to a pump's stuffing box should be supplied at a pressure:
    A. Lower than the stuffing box pressure
    B. Slightly higher than the stuffing box pressure
    C. Equal to atmospheric pressure
    D. As high as possible

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Gravel sound + pitting = cavitation. A → heat. C → banging in pipes. D → low flow. |
| 2 | **B** | Cavitation is low suction pressure → open/clear suction. A/D lower suction pressure further. C worsens it. |
| 3 | **B** | PD against closed discharge → extreme pressure → rupture. |
| 4 | **B** | Slight drip cools/lubricates. A burns packing/sleeve. D overloads motor. |
| 5 | **B** | Mechanical seals shouldn't leak. |
| 6 | **B** | Lantern ring spaces packing to distribute seal water. |
| 7 | **B** | Worn wear rings/impeller → internal recirculation → less flow/pressure. |
| 8 | **B** | H-Q curve slopes down. |
| 9 | **B** | Source below pump = suction lift. |
| 10 | **B** | Re-installation without proper alignment → vibration. |
| 11 | **A** | Reverse rotation gives reduced flow; swap two leads. |
| 12 | **B** | Short cycling from float settings or backflow through a leaking check valve. |
| 13 | **A** | Backflow through the check valve spins the pump backward. |
| 14 | **B** | Diaphragm metering pumps give accurate, adjustable small flows. |
| 15 | **B** | Over-greasing causes churning/heat. |
| 16 | **B** | Dry running burns the rubber stator. |
| 17 | **B** | Sudden stop of moving water → pressure surge. |
| 18 | **B** | Parallel adds flow; series adds head. |
| 19 | **B** | Lockout and verify; HOA "Off" is a control, not isolation. |
| 20 | **B** | Slightly higher, so clean water flows in and grit stays out. |

**Scoring:** 18–20 strong · 14–17 review cavitation and packing · < 14 redo sections 2.2–2.8.
