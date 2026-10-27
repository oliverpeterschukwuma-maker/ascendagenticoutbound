# Math 17B — Area, Volume, Flow, Velocity, Detention Time & Loading Rates

← [17A — Foundations](17a-math-foundations.md) · [Course index](../README.md) · Next → [17C — Loading, Dosage & Concentration](17c-loading-dosage-concentration.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **cfs** = cubic feet per second · **DT** = Detention Time · **EOCP** = Environmental Operators Certification Program · **gpd** = gallons per day · **gpm** = gallons per minute · **HRT** = Hydraulic Retention Time · **L/s** = litres per second · **MGD** = Million Gallons per Day · **m³/d** = cubic metres per day · **m³/m²·d** = cubic metres per square metre per day · **OSHA** = Occupational Safety and Health Administration (US) · **RAS** = Return Activated Sludge · **SOR** = Surface Overflow Rate · **WOR** = Weir Overflow Rate
<!-- abbr-end -->

**Use π = 3.14** (the EOCP (Environmental Operators Certification Program) exam value) and **0.785** for circle areas (0.785 = π ÷ 4).
Every formula below follows the same layout: **FORMULA → WHAT IT MEANS → WHEN TO USE IT → VARIABLES & UNITS → EASY EXAMPLE → LEVEL I EXAMPLE → EXAM QUESTION → COMMON MISTAKE.**
Practice problems with full answers are at the end.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Problem Solved: Detention Time Problem — Wastewater Math](https://www.youtube.com/watch?v=QWpbTKUuBro) · [Problem Solved: Flow Rate Formula](https://www.youtube.com/watch?v=B1rjSaOIm-s) · [Surface overflow rate (SOR) / Surface loading rate](https://www.youtube.com/watch?v=-cHHc67usc0) · [Weir loading rate / Weir overflow rate](https://www.youtube.com/watch?v=IMX7zhQ7C6Y) · [MGD to GPM](https://www.youtube.com/watch?v=fgAcVOLyM4U)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## B1. Area of a rectangle

**FORMULA:** `Area = Length × Width`

**WHAT IT MEANS:** how much flat surface something covers (the top of a tank, the floor of a channel).

**WHY IT WORKS (plain words):** Area means "how many 1 m × 1 m squares fit on the surface". A tank 30 m long and 8 m wide has 8 rows of 30 squares = 240 squares. Multiplying length × width is just a fast way of counting those squares. That's also why the unit is **m²** (metres × metres).

**WHEN TO USE IT:** surface of a rectangular tank (for surface overflow rate), cross-section of a channel (for velocity), lagoon surface.

**VARIABLES & UNITS:** Length (m or ft) × Width (m or ft) → **m²** or **ft²**.

**EASY EXAMPLE:** a 4 m × 3 m slab → 4 × 3 = **12 m²**.

**LEVEL I EXAMPLE:** a primary clarifier is 30 m long and 8 m wide → 30 × 8 = **240 m²**. (US: 100 ft × 25 ft = **2,500 ft²**.)

**EXAM QUESTION:** *A rectangular settling tank is 25 m long and 6 m wide. What is its surface area?* → 25 × 6 = **150 m²**.

**COMMON MISTAKE:** multiplying by the **depth** when only area is asked (that gives volume).

---

## B2. Area of a circle

**FORMULA:** `Area = 0.785 × D²`  (same as `π × r²` = 3.14 × r × r)

**WHAT IT MEANS:** the surface of a round tank or the opening of a round pipe.

**WHY IT WORKS (plain words):** Picture a circle sitting inside a square whose sides are D long. The square's area is D × D = D². The circle doesn't fill the corners — it covers about **78.5%** of the square. That's where **0.785** comes from (it's π ÷ 4). So 0.785 × D² = "the square, minus the corners". Using π × r² gives the same answer because r is half of D.

**WHEN TO USE IT:** circular clarifiers, digesters, trickling filters (surface area); pipes (flow area).

**VARIABLES & UNITS:** D = diameter (m or ft); r = radius = D ÷ 2. Answer in m² or ft².

**EASY EXAMPLE:** D = 2 m → 0.785 × 2 × 2 = 0.785 × 4 = **3.14 m²**.

**LEVEL I EXAMPLE:** clarifier D = 18 m → 0.785 × 18 × 18 = 0.785 × 324 = **254.34 m²**.
Check with πr²: r = 9 → 3.14 × 9 × 9 = 3.14 × 81 = **254.34 m²** ✓ (same answer).

**EXAM QUESTION:** *What is the surface area of a 60-ft diameter clarifier?* → 0.785 × 60 × 60 = 0.785 × 3,600 = **2,826 ft²**.

**COMMON MISTAKES:**
- Using **0.785 with the radius** (wrong) — 0.785 goes with **D²**; 3.14 goes with **r²**.
- Forgetting to **square** (0.785 × 18 = 14.1 — far too small).
- Pipe sizes in **mm** — convert to **m** first (300 mm = 0.3 m).

---

## B3. Circumference (distance around a circle)

**FORMULA:** `Circumference = π × D = 3.14 × D`

**WHAT IT MEANS:** the length around the edge.

**WHY IT WORKS (plain words):** If you rolled a circle along the ground for one full turn, it would travel a distance of about 3.14 times its diameter. That distance is the circumference — the same as the length of weir around the edge of a round clarifier.

**WHEN TO USE IT:** the **weir length** of a circular clarifier (for weir overflow rate).

**EASY EXAMPLE:** D = 10 m → 3.14 × 10 = **31.4 m**.

**LEVEL I EXAMPLE:** clarifier D = 18 m → 3.14 × 18 = **56.52 m** of weir.

**EXAM QUESTION:** *A 60-ft diameter clarifier has a peripheral weir. How long is the weir?* → 3.14 × 60 = **188.4 ft**.

**COMMON MISTAKE:** using 0.785 × D² (that's area, not length).
*(If the weir is set in from the wall, use the **weir's** diameter, not the tank's.)*

---

## B4. Volume of a rectangular tank

**FORMULA:** `Volume = Length × Width × Depth`

**WHAT IT MEANS:** how much the tank holds.

**WHY IT WORKS (plain words):** Volume counts "1 m × 1 m × 1 m cubes". First you count how many squares cover the floor (length × width = area), then how many layers of cubes stack up to the water depth. Area × depth = number of cubes = m³.

**WHEN TO USE IT:** detention time, chemical dosing of a tank, solids inventory, filling/draining time.

**UNITS:** m × m × m = **m³** (× 1,000 = litres). US: ft³ (× 7.48 = gallons).

**EASY EXAMPLE:** 2 m × 2 m × 2 m = **8 m³ = 8,000 L**.

**LEVEL I EXAMPLE:** aeration tank 30 m × 8 m × 3.5 m = **840 m³** (= 840,000 L).
US: 100 ft × 25 ft × 12 ft = 30,000 ft³ × 7.48 = **224,400 gal**.

**EXAM QUESTION:** *A tank is 25 m long, 6 m wide and 3.8 m deep. What is its volume in litres?* → 25 × 6 × 3.8 = 570 m³ × 1,000 = **570,000 L**.

**COMMON MISTAKES:** using **total tank height** instead of **water depth** (use water depth unless asked otherwise); forgetting × 7.48 for gallons.

---

## B5. Volume of a cylinder (round tank)

**WHY IT WORKS (plain words):** Same idea as a rectangular tank: floor area × depth. The floor of a round tank is a circle, so the floor area is 0.785 × D². Stack that up to the water depth and you get the volume.

**FORMULA:** `Volume = 0.785 × D² × Depth`  (= area of circle × depth)

**WHEN TO USE IT:** circular clarifiers, digesters, round wet wells, chemical tanks.

**EASY EXAMPLE:** D = 2 m, depth 1 m → 0.785 × 4 × 1 = **3.14 m³**.

**LEVEL I EXAMPLE:** clarifier D = 18 m, water depth 4 m → 254.34 × 4 = **1,017.36 m³**.

**EXAM QUESTION (US):** *A digester is 60 ft in diameter with 12 ft of sludge. How many gallons does it hold?* → 0.785 × 3,600 × 12 = 33,912 ft³ × 7.48 = **253,662 gal** (≈ 253,661.76).

**COMMON MISTAKE:** forgetting the depth, or using the radius with 0.785.

---

## B6. Flow from area and velocity

**FORMULA:** `Q = A × V`   (Flow = Area × Velocity)

**WHAT IT MEANS:** how much water passes = how big the opening is × how fast the water moves.

**WHY IT WORKS (plain words):** Imagine standing beside a channel. Every second, a slab of water with the channel's cross-section area moves past you, and it moves forward a distance equal to the velocity. So the volume going past each second = area of the slab × how far it moved = A × V. That volume per second **is** the flow.

**WHEN TO USE IT:** flow in a channel or pipe when you know its size and the water speed; or velocity when you know flow and size (V = Q ÷ A).

**VARIABLES & UNITS:** A in **m²**, V in **m/s** → Q in **m³/s**. (US: ft² × ft/s = **ft³/s = cfs (cubic feet per second)**.)
For a channel: **A = width × water depth**. For a full pipe: **A = 0.785 × D²**.

**EASY EXAMPLE:** A = 1 m², V = 0.5 m/s → Q = **0.5 m³/s**.

**LEVEL I EXAMPLE:** grit channel 0.6 m wide, water 0.4 m deep, velocity 0.3 m/s →
A = 0.6 × 0.4 = 0.24 m² → Q = 0.24 × 0.3 = **0.072 m³/s** (= 72 L/s (litres per second) = 6,220.8 m³/d (cubic metres per day)).

**EXAM QUESTION (pipe):** *A 300 mm pipe flows full at 0.9 m/s. What is the flow in L/s?* →
A = 0.785 × 0.3 × 0.3 = 0.07065 m² → Q = 0.07065 × 0.9 = 0.0636 m³/s × 1,000 = **63.6 L/s**.
*US version:* 12-in (1 ft) pipe at 3 ft/s → 0.785 × 1 × 1 × 3 = 2.355 cfs × 448.8 = **1,057 gpm (gallons per minute)**.

**COMMON MISTAKES:** using pipe diameter in mm (convert to m!); using the channel's **full height** instead of the **water depth**; mixing m/min with m/s.

---

## B7. Flow conversions

**WHAT IT MEANS:** the same flow expressed in different units. The exam mixes units on purpose.

**WHY IT WORKS (plain words):** Converting units never changes the amount of water — only the "size of the measuring cup". There are 86,400 seconds in a day, so a flow per second must be multiplied by 86,400 to get the flow per day. 1 L/s = 86,400 L/d = 86.4 m³/d (because 1,000 L = 1 m³).

**Metric conversions (memorize or derive):**
| From | To | Multiply by |
|---|---|---|
| m³/s | L/s | × 1,000 |
| m³/s | m³/d | × 86,400 |
| L/s | m³/d | × 86.4 |
| m³/d | m³/h | ÷ 24 |
| m³/d | ML/d | ÷ 1,000 |
| ML/d | m³/d | × 1,000 |

**US conversions:**
| From | To | Multiply by |
|---|---|---|
| MGD (Million Gallons per Day) | gpm | × 694.4 |
| MGD | cfs | × 1.547 |
| cfs | gpm | × 448.8 |
| gpm | gpd (gallons per day) | × 1,440 |
| gpd | MGD | ÷ 1,000,000 |

**EASY EXAMPLE:** 1 L/s = 86.4 m³/d (because 1 L/s × 86,400 s/d = 86,400 L/d = 86.4 m³/d).

**LEVEL I EXAMPLE:** 50 L/s → 50 × 86.4 = **4,320 m³/d** = **4.32 ML/d**.

**EXAM QUESTION:** *A plant treats 3,600 m³/d. What is the average flow in L/s?* → 3,600 × 1,000 ÷ 86,400 = **41.7 L/s**.
*US:* 2.5 MGD × 694.4 = **1,736 gpm**.

**COMMON MISTAKE:** dividing when you should multiply. **Check:** a per-second number should be **much smaller** than the same flow per day.

---

## B8. Velocity from distance and time

**WHY IT WORKS (plain words):** Speed is always distance ÷ time — the same as driving 100 km in 1 hour = 100 km/h. A float in a channel moves at the same speed as the water.

**FORMULA:** `Velocity = Distance ÷ Time`

**WHEN TO USE IT:** float or dye tests in channels; checking grit channel velocity.

**EASY EXAMPLE:** 10 m in 20 s → **0.5 m/s**.

**LEVEL I EXAMPLE:** a float travels 45 m in 2.5 minutes → 45 ÷ 2.5 = 18 m/min ÷ 60 = **0.3 m/s**.
US: 150 ft in 2 min → 75 ft/min ÷ 60 = **1.25 ft/s**.

**EXAM QUESTION:** *A float travels 60 m down a channel in 4 minutes. What is the velocity in m/s?* → 60 ÷ 4 = 15 m/min ÷ 60 = **0.25 m/s**.

**COMMON MISTAKE:** forgetting to convert minutes to seconds.

---

## B9. Detention time (DT / HRT)

**FORMULA:** `Detention Time = Volume ÷ Flow`

**WHAT IT MEANS:** the **average time** water stays in a tank.

**WHY IT WORKS (plain words):** If a 100 m³ tank receives 50 m³ every hour, it takes 2 hours to push a full tank's worth of water through it. That's the average time each drop stays inside. So detention time = how big the tank is ÷ how fast water flows through it. If the flow is per **day**, the answer comes out in **days** — multiply by 24 to get hours.

**WHEN TO USE IT:** clarifiers, aeration tanks, chlorine contact tanks, lagoons, digesters (with sludge flow).

**UNITS — the most important part:** volume and flow must use the **same volume unit**:
- m³ ÷ (m³/d) = **days** → × 24 = **hours**
- m³ ÷ (m³/h) = **hours**
- gal ÷ (gal/day) = **days** → × 24 = hours

**EASY EXAMPLE:** a 100 m³ tank with 50 m³/h flowing through → 100 ÷ 50 = **2 h**.

**LEVEL I EXAMPLE:** an 840 m³ aeration tank receives 9,000 m³/d → 840 ÷ 9,000 = 0.0933 d × 24 = **2.24 h**.
US: 224,400 gal tank, 2.0 MGD (2,000,000 gpd) → 224,400 ÷ 2,000,000 × 24 = **2.69 h**.

**EXAM QUESTION:** *A circular clarifier is 18 m in diameter with a 3.5 m water depth. Flow is 6,500 m³/d. Calculate the detention time in hours.*
1. Volume = 0.785 × 18² × 3.5 = 0.785 × 324 × 3.5 = **890.19 m³**
2. DT = 890.19 ÷ 6,500 = 0.13695 d × 24 = **3.29 h** (≈ 3.3 h)

**Rearranged:** `Volume = DT × Flow` · `Flow = Volume ÷ DT`
*A 900 m³ tank must have a 3-hour DT. What flow does that allow?* → 900 ÷ 3 = 300 m³/h × 24 = **7,200 m³/d**.

**COMMON MISTAKES:**
- Forgetting **× 24** to convert days to hours (answer 0.137 instead of 3.29).
- Using **MGD with gallons** without changing MGD to gallons/day (2 MGD = **2,000,000** gpd).
- Mixing **L** and **m³**.

---

## B10. Surface overflow rate (SOR) / surface loading rate

**FORMULA:** `SOR = Flow ÷ Surface Area`

**WHAT IT MEANS:** how much flow each square metre of tank surface must handle — think of it as the **upward speed** of the water. If water rises faster than particles sink, solids escape.

**WHY IT WORKS (plain words):** Water enters a clarifier and must rise up to the weirs to leave. If you divide the daily flow by the surface area, you get how many metres the water surface rises each day (m³/m²·d (cubic metres per square metre per day) is really m/d). Solids must sink faster than the water rises, or they get carried out. So a higher SOR means a faster upward current and poorer settling.

**WHEN TO USE IT:** clarifiers (primary and secondary).

**UNITS:** m³/d ÷ m² = **m³/m²·d** (which is really m/d). US: gpd ÷ ft² = **gpd/ft²**.

**EASY EXAMPLE:** 1,000 m³/d on a 100 m² tank → **10 m³/m²·d**.

**LEVEL I EXAMPLE:** 6,500 m³/d to an 18 m clarifier (254.34 m²) → 6,500 ÷ 254.34 = **25.6 m³/m²·d**.
US: 2.0 MGD to a 60-ft clarifier (2,826 ft²) → 2,000,000 ÷ 2,826 = **708 gpd/ft²**.

**EXAM QUESTION:** *A 22 m diameter secondary clarifier receives 7,600 m³/d. What is the SOR?* → area = 0.785 × 484 = 379.94 m² → 7,600 ÷ 379.94 = **20.0 m³/m²·d**.

**⚠ OFFICIAL SHEET UNITS:** the exam sheet writes metric SOR as **Lpd/m²** (litres per day per m²). 1 m³ = 1,000 L, so **25.6 m³/m²·d = 25,600 Lpd/m²**. If the answer choices are ~1,000× bigger than yours, convert.

**COMMON MISTAKES:** dividing by **volume** instead of area; using MGD without converting to gpd.
*(For secondary clarifiers, SOR is normally based on influent flow only — not including RAS (Return Activated Sludge) — unless the question says otherwise.)*

---

## B11. Weir overflow rate (WOR) / weir loading

**FORMULA:** `WOR = Flow ÷ Weir Length`

**WHAT IT MEANS:** flow over each metre (or foot) of weir. Too high → fast currents near the weir pull solids over.

**WHY IT WORKS (plain words):** All the water leaving the clarifier has to squeeze over the weir edge. If there's only a short weir, a lot of water crowds over each metre, creating fast currents that drag solids up and over. Dividing flow by weir length tells you how crowded each metre of weir is.

**WHEN TO USE IT:** clarifiers.

**UNITS:** m³/d ÷ m = **m³/m·d**. US: gpd ÷ ft = **gpd/ft**.

**EASY EXAMPLE:** 1,000 m³/d over 50 m of weir → **20 m³/m·d**.

**LEVEL I EXAMPLE:** 6,500 m³/d, 18 m clarifier with a peripheral weir (3.14 × 18 = 56.52 m) → 6,500 ÷ 56.52 = **115 m³/m·d**.
US: 2,000,000 gpd ÷ 188.4 ft = **10,616 gpd/ft**.

**EXAM QUESTION:** *Calculate the WOR (Weir Overflow Rate) for a 22 m clarifier receiving 7,600 m³/d.* → weir = 3.14 × 22 = 69.08 m → 7,600 ÷ 69.08 = **110 m³/m·d**.

**⚠ OFFICIAL SHEET UNITS:** metric WOR is written as **Lpd/m** on the exam sheet → 115 m³/m·d = **115,000 Lpd/m**.

**COMMON MISTAKE:** using area (0.785 D²) instead of **circumference** (3.14 × D). For **rectangular** tanks, add up the length of **every** weir edge given.

---

## B12. Hydraulic loading rate (filters, trickling filters)

**WHY IT WORKS (plain words):** Same as SOR: flow spread over the area it must pass through. For a trickling filter, the recirculated water also lands on the media, so it counts as part of the flow.

**FORMULA:** `Hydraulic Loading Rate = Flow ÷ Surface Area` (same math as SOR; include **recirculation** flow for trickling filters if stated)

**LEVEL I EXAMPLE:** a trickling filter 18 m in diameter (254.34 m²) receives 2,500 m³/d including recirculation → 2,500 ÷ 254.34 = **9.83 m³/m²·d**.

**COMMON MISTAKE:** forgetting to add the recirculation flow when the question says the loading includes it.

---

## B13. Filling, draining and pumping rates from level changes

**FORMULAS:**
```
Time to fill (or empty) = Volume ÷ Flow
Flow from a level change = (Length × Width × Level change) ÷ Time
Pump rate = Volume pumped out ÷ Time  (+ inflow, if water kept coming in while pumping)
```

**WHAT IT MEANS:** if you know a tank's area and how fast the level moves, you know the flow.

**WHY IT WORKS (plain words):** A tank's level only changes when more water comes in than goes out (or the reverse). If you know the floor area and how much the level moved, area × level change = volume that came in or went out. Divide by the time and you get a flow. When a pump runs while water keeps flowing in, the pump is removing the **inflow plus** the drop you see — that's why you add them.

**EASY EXAMPLE:** a 570 m³ tank fills at 1,900 m³/d → 570 ÷ 1,900 = 0.3 d × 24 = **7.2 h**.

**LEVEL I EXAMPLE (EOCP-style):** an influent tank is 12 m long and 8 m wide. The level **drops** 0.25 m per hour. What is the flow out of the tank?
→ 12 × 8 × 0.25 = **24 m³/h** (× 24 = **576 m³/d**).

**EXAM QUESTION (wet well, two steps):** a wet well is 3 m × 4 m.
- With pumps **off**, the level **rises** 0.5 m in 10 min → inflow = 3 × 4 × 0.5 = 6 m³ ÷ 10 min = **0.6 m³/min**.
- With the pump **on**, the level **falls** 0.3 m in 5 min → 3 × 4 × 0.3 = 3.6 m³ ÷ 5 = 0.72 m³/min drop.
- **Pump rate = drop rate + inflow** = 0.72 + 0.6 = **1.32 m³/min** = 1.32 × 1,000 ÷ 60 = **22 L/s**.

**COMMON MISTAKE:** forgetting that **inflow continues** while the pump runs — the pump is removing the inflow **plus** the drawdown.

---

## Practice set 17B (answers below)

1. A rectangular tank is 25 m long and 6 m wide. Surface area?
2. Surface area of a 22 m diameter clarifier?
3. Weir length (circumference) of a 22 m clarifier?
4. Volume in litres of a tank 25 m × 6 m × 3.8 m deep?
5. Volume in gallons of a tank 80 ft × 20 ft × 10 ft deep?
6. Volume of a round tank 12 m in diameter and 3 m deep?
7. A channel is 1.2 m wide with water 0.5 m deep flowing at 0.4 m/s. Flow in m³/s, L/s and m³/d?
8. A float travels 60 m in 4 min. Velocity in m/s?
9. A 250 mm pipe flows full at 0.8 m/s. Flow in L/s?
10. Convert 25 L/s to m³/d.
11. Convert 1.8 MGD to gpm.
12. Detention time (h) of a 570 m³ tank with 4,800 m³/d flow?
13. Detention time (h) of a 119,680 gal tank with 1.2 MGD flow?
14. SOR of a 22 m clarifier receiving 7,600 m³/d?
15. WOR of the same clarifier (peripheral weir)?
16. SOR (gpd/ft²) of a 50-ft clarifier receiving 1.5 MGD?
17. A 900 m³ tank must have a 3-hour detention time. Maximum flow in m³/d?
18. A 2.5 m × 3 m wet well rises 0.4 m in 6 min with pumps off. Inflow in m³/h?
19. How many hours to fill a 570 m³ tank at 1,900 m³/d?
20. A grit channel 0.5 m wide carries 0.09 m³/s at a depth of 0.6 m. Velocity? Is it about right for grit removal?
21. A tank is 11 m long and 7 m wide. The level drops 0.2 m per hour. Flow in m³/h and m³/d?
22. Hydraulic loading on an 18 m trickling filter receiving 2,500 m³/d (incl. recirculation)?
23. A 2-ft-wide channel carries 3 cfs at a depth of 1.25 ft. Velocity?
24. A lagoon is 200 m × 150 m with 1.5 m water depth. Flow is 600 m³/d. Detention time in days?

---

### Answers 17B
| # | Answer | Work |
|---|---|---|
| 1 | **150 m²** | 25 × 6 |
| 2 | **379.94 m²** | 0.785 × 22 × 22 = 0.785 × 484 |
| 3 | **69.08 m** | 3.14 × 22 |
| 4 | **570,000 L** | 25 × 6 × 3.8 = 570 m³ × 1,000 |
| 5 | **119,680 gal** | 80 × 20 × 10 = 16,000 ft³ × 7.48 |
| 6 | **339.12 m³** | 0.785 × 144 × 3 |
| 7 | **0.24 m³/s = 240 L/s = 20,736 m³/d** | 1.2 × 0.5 = 0.6 m²; × 0.4 = 0.24; × 1,000; × 86,400 |
| 8 | **0.25 m/s** | 60 ÷ 4 = 15 m/min ÷ 60 |
| 9 | **39.25 L/s** | 0.785 × 0.25 × 0.25 = 0.0490625 m² × 0.8 = 0.03925 m³/s × 1,000 |
| 10 | **2,160 m³/d** | 25 × 86.4 |
| 11 | **1,250 gpm** | 1.8 × 694.4 = 1,249.9 |
| 12 | **2.85 h** | 570 ÷ 4,800 × 24 |
| 13 | **2.39 h** | 119,680 ÷ 1,200,000 × 24 |
| 14 | **20.0 m³/m²·d** | 7,600 ÷ 379.94 |
| 15 | **110 m³/m·d** | 7,600 ÷ 69.08 |
| 16 | **764 gpd/ft²** | area = 0.785 × 2,500 = 1,962.5 ft²; 1,500,000 ÷ 1,962.5 |
| 17 | **7,200 m³/d** | 900 ÷ 3 = 300 m³/h × 24 |
| 18 | **30 m³/h** | 2.5 × 3 × 0.4 = 3 m³ in 6 min = 0.5 m³/min × 60 |
| 19 | **7.2 h** | 570 ÷ 1,900 = 0.3 d × 24 |
| 20 | **0.3 m/s — yes** | A = 0.5 × 0.6 = 0.3 m²; 0.09 ÷ 0.3 |
| 21 | **15.4 m³/h = 369.6 m³/d** | 11 × 7 × 0.2; × 24 |
| 22 | **9.83 m³/m²·d** | 2,500 ÷ 254.34 |
| 23 | **1.2 ft/s** | A = 2 × 1.25 = 2.5 ft²; 3 ÷ 2.5 |
| 24 | **75 days** | 200 × 150 × 1.5 = 45,000 m³ ÷ 600 |
