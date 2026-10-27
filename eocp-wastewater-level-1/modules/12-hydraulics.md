# Module 12 — Hydraulics (How Water Moves)

← [Module 11](11-valves-piping.md) · [Course index](../README.md) · Next → [Module 13 — Instrumentation & Controls](13-instrumentation-controls.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **cfs** = cubic feet per second · **gpm** = gallons per minute · **H₂S** = hydrogen sulphide · **kPa** = kilopascal · **L/s** = litres per second · **MGD** = Million Gallons per Day · **m³/d** = cubic metres per day · **NTK** = Need-to-Know Criteria · **OSHA** = Occupational Safety and Health Administration (US) · **psi** = pounds per square inch · **TDH** = Total Dynamic Head
<!-- abbr-end -->

**NTK (Need-to-Know Criteria) areas:** Equipment (pumps, pipes, pressure) and Treatment Process (flow through the plant). Math: flow, velocity, pressure, head ([Math 17B](../math/17b-area-volume-flow-time.md), [17D](../math/17d-process-pumps-pressure-lab.md)).

> **Hydraulics** just means **how water moves and pushes**. You already know a lot of it from daily life: water runs downhill, a garden hose sprays faster when you squeeze the end, and your ears hurt at the bottom of a pool. This module puts names on those ideas.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Problem Solved: Flow Rate Formula (Q = A × V)](https://www.youtube.com/watch?v=B1rjSaOIm-s) · [Pump Curve vs System Curve — Example Problem](https://www.youtube.com/watch?v=MffwvbGMgJk)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## 1. What you need to know (checklist)

- [ ] **Flow (Q)**, **velocity (V)**, **area (A)** and how they connect: **Q = A × V**
- [ ] **Continuity**: when a pipe gets smaller, water speeds up
- [ ] **Pressure**: what it is, units (kPa (kilopascal), psi (pounds per square inch)), gauge vs absolute (recognize)
- [ ] **Head**: pressure expressed as a height of water; converting pressure ↔ head
- [ ] Pressure depends on **depth only** (not tank shape or width)
- [ ] **Friction / headloss**: what increases it (length, smaller diameter, rough pipe, higher velocity, fittings/valves)
- [ ] **Elevation** and **gravity flow** vs **pressure flow** (force mains)
- [ ] Self-cleansing **velocities** (sewers ~0.6 m/s; grit channel ~0.3 m/s)
- [ ] The plant's **hydraulic profile** (water flows through by gravity from unit to unit)
- [ ] How pumps fit in: **total dynamic head**, **system curve** (recognize)
- [ ] **Water hammer** and surges
- [ ] Weirs and flumes (basic)

---

## 2. Plain-English teaching

### 2.1 Flow, velocity and area — the core relationship

| Word | Symbol | Meaning | Units |
|---|---|---|---|
| **Flow** | Q | **How much** water passes per unit time | m³/s, m³/d (cubic metres per day), L/s (litres per second), ML/d · US: cfs (cubic feet per second), gpm (gallons per minute), MGD (Million Gallons per Day) |
| **Velocity** | V | **How fast** the water is moving | m/s · US: ft/s (fps) |
| **Area** | A | Cross-sectional area the water flows through (the "opening") | m² · US: ft² |

```
          Q   =   A   ×   V
   (how much)  (opening) (how fast)
```

**Picture it:** a channel 1 m wide with water 0.5 m deep has a flow area of 0.5 m². If the water moves at 0.3 m/s, then every second 0.5 × 0.3 = 0.15 m³ passes by. That's the flow: **0.15 m³/s**.

**Triangle trick (for rearranging):**
```
        ┌───────┐
        │   Q   │        cover the one you want:
        ├───┬───┤        Q = A × V
        │ A │ V │        A = Q ÷ V
        └───┴───┘        V = Q ÷ A
```

### 2.2 Continuity — squeeze the hose

The **same flow** must pass through every section of a pipe (water doesn't disappear). So:
```
   A₁ × V₁  =  A₂ × V₂
```
**If the area gets smaller, the velocity gets bigger.**
- Put your thumb over a hose: smaller opening → faster spray.
- A pipe that narrows from 300 mm to 150 mm diameter has **¼ the area** (area depends on diameter **squared**), so the water goes **4 times faster**.

**Plant examples:**
- Taking a grit channel **out of service** → same flow through less area → **faster** velocity.
- Putting a second channel **in service** → more area → **slower** velocity.

### 2.3 Pressure

**Pressure** = force pushing on an area.
- Metric unit: **kilopascal (kPa)**. US unit: **pounds per square inch (psi)**.
- **1 psi ≈ 6.9 kPa.** (Normal atmospheric pressure ≈ 101 kPa ≈ 14.7 psi — recognize.)
- **Gauge pressure** (what normal pressure gauges show) reads **zero at atmospheric pressure**. **Absolute pressure** includes the atmosphere. (Recognize.)

**Water pressure comes from the weight of the water above you.** The deeper you go, the more water is on top of you, the higher the pressure.

### 2.4 Head — pressure as a height

**Head** expresses pressure as the **height of a column of water** that would create that pressure.

**The conversions (MEMORIZE):**
| Metric | US |
|---|---|
| **1 m of water ≈ 9.81 kPa** | **1 ft of water = 0.433 psi** |
| **1 kPa ≈ 0.102 m of water** | **1 psi = 2.31 ft of water** |

**Examples:**
- Pressure at the bottom of a tank with **4 m** of water: 4 × 9.81 = **39.2 kPa**.
- Pressure at the bottom of a tank with **10 ft** of water: 10 × 0.433 = **4.33 psi**.
- A pressure gauge on a pump discharge reads **50 psi**: head = 50 × 2.31 = **115.5 ft**.
- A gauge reads **300 kPa**: head = 300 ÷ 9.81 = **30.6 m**.

### 2.5 Pressure depends on DEPTH only

A tall skinny pipe 5 m deep and a huge wide tank 5 m deep have the **same pressure at the bottom**. Width and shape don't matter — **only the vertical depth of water** does.

*This is why a pressure transducer at the bottom of a wet well can measure the water level: pressure ÷ 9.81 = depth in metres.*

### 2.6 Friction and headloss

As water moves through pipes, it rubs against the walls and swirls through fittings. This **friction** uses up energy. The energy lost is called **headloss** (or **friction loss**), measured in m or ft.

**Headloss increases when:**
| Factor | Why |
|---|---|
| **Longer pipe** | More wall to rub against |
| **Smaller diameter** | Water moves faster through a smaller area, and more of it is near the wall |
| **Higher velocity / flow** | Friction rises steeply with velocity (roughly with the **square** of velocity) |
| **Rougher pipe** | Old, corroded, scaled, or greasy pipes |
| **More fittings and valves** | Every elbow, tee, partly closed valve adds loss |
| **Partly closed valve / blockage** | Big localized loss |

**Plant examples of headloss:** across a **clogged bar screen** (Module 3), a **dirty filter**, a **fouled diffuser** (higher blower pressure), a **plugged pump suction** (cavitation), a **scaled force main** (pump delivers less flow).

### 2.7 Gravity flow vs pressure flow

| | **Gravity flow (open channel)** | **Pressure flow (full pipe)** |
|---|---|---|
| Where | Gravity sewers, channels, flumes, plant piping between tanks | **Force mains**, pump discharges, water mains |
| What moves the water | **Slope** (elevation drop) | **Pump** (or a high tank) |
| Pipe full? | Usually **partly full**, with a free water surface | **Completely full**, under pressure |
| Measuring flow | Flumes/weirs + level | Magnetic flow meters, etc. |

**Self-cleansing velocity [SUPPLEMENTAL]:** gravity sewers are designed for at least about **0.6 m/s (2 ft/s)** so solids don't settle in the pipe. Too slow → solids settle → septic conditions, H₂S (hydrogen sulphide), blockages. (Grit channels are deliberately run slower — ~0.3 m/s — to drop grit.)

### 2.8 Elevation and the plant's hydraulic profile

Most plants are built so water flows from unit to unit **by gravity**: the headworks is highest, each tank's water surface is a little lower than the one before, and the outfall is lowest. Pumps lift the water **once** (influent pumps) and gravity does the rest.

```
 Influent pumps lift ▲
                     │  Headworks ~~~~~~~
                     │                     Primary ~~~~~~
                     │                                   Aeration ~~~~~~
                     │                                                   Secondary ~~~~~
                     │                                                               Disinfection ~~~
                     │                                                                                Outfall
```
- Each unit has a small **headloss** (weirs, pipes, gates).
- If one unit is **overloaded** or blocked, water **backs up** into the unit before it — e.g., a high water level in the primary clarifier could mean the downstream pipe or weir is restricted.
- During **high flows**, water levels rise throughout the plant; **freeboard** (distance from water surface to tank top) shrinks → risk of overflow.

### 2.9 Pumps and the system (connecting to Module 10)

- The **total dynamic head (TDH)** a pump must supply = **static head (elevation difference) + friction headloss** (+ small velocity head).
- The **system curve** shows how much head the piping system needs at each flow (it rises with flow because friction increases). Where the **pump curve** crosses the **system curve** is where the pump actually operates. (Recognize.)
- If the force main gets **scaled or partly blocked**, the system curve gets steeper → the pump operates at **higher head and lower flow**.

### 2.10 Water hammer and surges

- Water is heavy and nearly incompressible. If moving water is **stopped suddenly** (valve slammed, pump trips), its momentum creates a **pressure spike** that travels through the pipe — **water hammer**.
- Sounds like a **bang**; can crack pipes, blow gaskets, damage valves and pumps.
- Prevent with: **slow valve closing**, cushioned/controlled check valves, surge tanks or relief valves, **soft starts/VFDs**.

### 2.11 Weirs and flumes (more in Module 13)

- **Weir** = a sharp-edged plate that water flows over. The **height of water above the weir crest (head)** tells the flow. Types: **V-notch** (good for low flows), rectangular, Cipolletti (recognize).
- **Parshall flume** = a shaped constriction in a channel; the **upstream water level** tells the flow. Self-cleaning; good for raw wastewater.
- Both are **primary devices**; a level sensor (ultrasonic, bubbler) is the **secondary device** that measures the level and calculates the flow.

---

## 3. Operator-level understanding

- When a pump's discharge **pressure goes up** but **flow goes down**, think **more resistance downstream** (closed/partly closed valve, plugged line, scaled force main).
- When **pressure goes down and flow goes down**, think **pump problem** (worn impeller/rings, air binding, clogged suction, wrong rotation).
- **Rising upstream levels** in channels/tanks point to a **restriction downstream** (blinded screen, stuck gate, plugged pipe, too much flow).
- A **pressure gauge is a level gauge** for water: pressure ÷ 9.81 = metres of water (or psi × 2.31 = feet).
- **Uneven flow split** between parallel units (two clarifiers) is usually a weir/gate level problem — fix the splitter box.

---

## 4. MUST MEMORIZE

1. **Q = A × V** (flow = area × velocity). V = Q ÷ A. A = Q ÷ V.
2. **Continuity: A₁V₁ = A₂V₂** — smaller area → faster.
3. Halving pipe **diameter** → **¼ the area** → **4× the velocity** (same flow).
4. **1 m of water ≈ 9.81 kPa**; **1 psi = 2.31 ft**; **1 ft = 0.433 psi**; 1 psi ≈ 6.9 kPa.
5. **Pressure depends only on depth**, not on tank shape or width.
6. **Headloss increases** with longer pipe, smaller diameter, higher velocity, rougher pipe, more fittings, partly closed valves.
7. **Gravity flow** = slope, partly full; **pressure flow** = pump/force main, full pipe.
8. Self-cleansing sewer velocity **≈ 0.6 m/s (2 ft/s)**; grit channel **≈ 0.3 m/s (1 ft/s)**.
9. **TDH = static head + friction losses.**
10. **Water hammer** = sudden stop of flowing water → pressure spike → close valves slowly.
11. Weirs & flumes = **primary** flow devices; level sensor = **secondary**.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why smaller pipes = faster water | Q = AV | Bernoulli's equation |
| Why depth (not width) sets pressure | Pressure ↔ head conversions | Hydraulic grade line / energy grade line |
| What increases friction | Self-cleansing velocity | Hazen-Williams C factor |
| How a plant flows by gravity | TDH components | Inverted siphon, hydraulic jump |
| Pressure vs flow clues for troubleshooting | | Absolute vs gauge pressure |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "A wider tank has more pressure at the bottom" | Pressure depends on **depth only**. |
| "Halving the diameter doubles the velocity" | Halving diameter → **¼ area → 4×** velocity. |
| "Smaller pipe = less friction" | Smaller pipe = **more** friction. |
| "1 psi = 2.31 m" | **1 psi = 2.31 FEET.** 1 m ≈ 9.81 kPa. |
| "Adding a parallel channel speeds up the water" | More area → **slower**. |
| "Velocity and flow are the same thing" | Flow = **how much**; velocity = **how fast**. |

---

## 7. Practice questions

1. Water flows in a channel 0.8 m wide and 0.5 m deep at 0.3 m/s. What is the flow?
   A. 0.012 m³/s
   B. 0.12 m³/s
   C. 1.2 m³/s
   D. 0.4 m³/s

2. A pipe reduces from 200 mm to 100 mm diameter. If the velocity in the 200 mm pipe is 0.5 m/s, the velocity in the 100 mm pipe is approximately:
   A. 0.25 m/s
   B. 1.0 m/s
   C. 2.0 m/s
   D. 0.5 m/s

3. The pressure at the bottom of a tank filled with 6 m of water is approximately:
   A. 6 kPa
   B. 0.6 kPa
   C. 58.9 kPa
   D. 600 kPa

4. A discharge pressure gauge reads 40 psi. This is equal to a head of approximately:
   A. 17.3 ft
   B. 40 ft
   C. 92.4 ft
   D. 120 ft

5. Two tanks are both 3 m deep. Tank A is 2 m wide; Tank B is 20 m wide. The pressure at the bottom of Tank B is:
   A. 10 times greater than Tank A
   B. The same as Tank A
   C. One-tenth of Tank A
   D. Impossible to determine

6. Which change would INCREASE friction headloss in a pipeline?
   A. Increasing the pipe diameter
   B. Decreasing the flow velocity
   C. Adding several elbows and a partly closed valve
   D. Replacing old corroded pipe with smooth new pipe

7. Gravity sewers are designed with a minimum velocity of about 0.6 m/s (2 ft/s) to:
   A. Settle grit in the sewer
   B. Keep solids in suspension and prevent deposits
   C. Increase H₂S production
   D. Reduce pumping costs

8. A pump's discharge pressure has increased and its flow has decreased. The most likely cause is:
   A. A worn impeller
   B. A partly closed discharge valve or restriction in the force main
   C. Air binding
   D. Wrong rotation

9. The total dynamic head on a pump is made up of:
   A. Static head plus friction losses
   B. Friction losses only
   C. Atmospheric pressure only
   D. Pump speed plus flow

10. A plant takes one of its two grit channels out of service while flow stays the same. The velocity in the remaining channel will:
    A. Decrease
    B. Increase
    C. Stay the same
    D. Drop to zero

11. A Parshall flume measures flow by measuring:
    A. Water temperature
    B. The upstream water level (depth) at a specific point
    C. Water pressure in a full pipe
    D. Electrical conductivity

12. Water hammer is best prevented by:
    A. Closing valves quickly
    B. Closing valves slowly and using controlled-closing check valves
    C. Running pumps dry
    D. Removing air release valves

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | A = 0.8 × 0.5 = 0.4 m²; Q = 0.4 × 0.3 = **0.12 m³/s**. D is the area, not flow. |
| 2 | **C** | Half the diameter → ¼ the area → 4× velocity: 0.5 × 4 = **2.0 m/s**. |
| 3 | **C** | 6 × 9.81 = **58.9 kPa**. |
| 4 | **C** | 40 × 2.31 = **92.4 ft**. A used 0.433 incorrectly. |
| 5 | **B** | Depth only. |
| 6 | **C** | Fittings and a partly closed valve add friction. A/B/D reduce it. |
| 7 | **B** | Self-cleansing velocity. |
| 8 | **B** | More resistance downstream → higher pressure, less flow. A/C/D lower both pressure and flow. |
| 9 | **A** | TDH = static + friction (+ velocity head). |
| 10 | **B** | Less area, same flow → faster. |
| 11 | **B** | Flume = level → flow. |
| 12 | **B** | Slow closure prevents pressure spikes. |
