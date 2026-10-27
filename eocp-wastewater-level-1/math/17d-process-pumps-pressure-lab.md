# Math 17D — Process Control (F/M, SRT, SVI), Pressure & Head, Pump Power, Electricity, Lab Math

← [17C](17c-loading-dosage-concentration.md) · [Course index](../README.md) · Next → [17E — Math Practice Bank](17e-math-practice-bank.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **ABC** = Association of Boards of Certification · **bhp** = brake horsepower · **BOD** = Biochemical Oxygen Demand · **DO** = Dissolved Oxygen · **F/M** = Food-to-Microorganism ratio · **gpm** = gallons per minute · **hp** = horsepower · **kPa** = kilopascal · **kW** = kilowatt · **kWh** = kilowatt-hour · **L/s** = litres per second · **MCRT** = Mean Cell Residence Time · **MG** = million gallons · **mg/L** = milligrams per litre · **MGD** = Million Gallons per Day · **mhp** = motor horsepower · **mL** = millilitre · **MLSS** = Mixed Liquor Suspended Solids · **MLVSS** = Mixed Liquor Volatile Suspended Solids · **m³/d** = cubic metres per day · **OSHA** = Occupational Safety and Health Administration (US) · **psi** = pounds per square inch · **RAS** = Return Activated Sludge · **SRT** = Solids Retention Time · **SSV₃₀** = Settled Sludge Volume after 30 minutes · **SVI** = Sludge Volume Index · **TSS** = Total Suspended Solids · **VSS** = Volatile Suspended Solids · **WAS** = Waste Activated Sludge · **whp** = water horsepower
<!-- abbr-end -->

> These formulas build on 17C (the kg/day formula). If F/M (Food-to-Microorganism ratio) or SRT (Solids Retention Time) looks scary, notice that **every one of them is just "kg ÷ kg" or "kg ÷ kg/day"** — you calculate two masses with the kg formula, then divide.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Activated Sludge Process Control Calculations (webinar)](https://www.youtube.com/watch?v=5OeIVQzEnkE) · [What is SVI (sludge volume index)?](https://www.youtube.com/watch?v=7roYQ3jMVD4) · [How to Read a Pump Curve: Simple Explanation](https://www.youtube.com/watch?v=VuD1yuvB5mg)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## D1. MLVSS from MLSS

**FORMULA:** `MLVSS (mg/L) = MLSS (mg/L) × (% volatile ÷ 100)`

**WHAT IT MEANS:** the organic (living) part of the mixed liquor solids.

**WHY IT WORKS (plain words):** The volatile (organic) part is a percentage of the total solids. To find a percentage of something, multiply by the percent written as a decimal.

**WHEN TO USE IT:** before calculating F/M (which uses MLVSS (Mixed Liquor Volatile Suspended Solids)), or when given % volatile.

**EASY EXAMPLE:** MLSS (Mixed Liquor Suspended Solids) 2,000 mg/L (milligrams per litre), 75% volatile → 2,000 × 0.75 = **1,500 mg/L**.

**LEVEL I EXAMPLE:** MLSS 2,500 mg/L, 78% volatile → **1,950 mg/L**.

**EXAM QUESTION:** *MLSS is 2,600 mg/L and the volatile fraction is 76%. MLVSS?* → **1,976 mg/L**.

**COMMON MISTAKE:** using 76 instead of 0.76.

---

## D2. Food-to-Microorganism ratio (F/M)

**FORMULA:**
```
          BOD entering aeration (kg/d)            BOD (mg/L) × Flow (m³/d) ÷ 1,000
F/M  =  ────────────────────────────────  =  ──────────────────────────────────────────
          MLVSS in aeration tank (kg)            MLVSS (mg/L) × Volume (m³) ÷ 1,000

US:  F/M = [BOD (mg/L) × Flow (MGD) × 8.34] ÷ [MLVSS (mg/L) × Volume (MG) × 8.34]
```

**WHAT IT MEANS:** how much **food** per day each kg of **bugs** gets. High F/M = lots of food per bug (young, overloaded sludge). Low F/M = little food per bug (old, starving sludge).

**WHY IT WORKS (plain words):** F/M compares the **food** arriving each day with the **bugs** available to eat it. Food per day comes from the kg/day formula (BOD (Biochemical Oxygen Demand) × flow). The bugs are what's sitting in the tank (MLVSS × tank volume). Divide food by bugs: a big number means lots of food per bug (young, fast-growing sludge); a small number means each bug gets little food (old, starving sludge).

**WHEN TO USE IT:** activated sludge process control; deciding how much biomass to keep.

**UNITS:** kg/d ÷ kg = **per day** (often written kg BOD/kg MLVSS·d). Typical: ~0.2–0.4 conventional; ~0.05–0.15 extended aeration.

**EASY EXAMPLE:** 100 kg/d of BOD fed to 1,000 kg of MLVSS → 100 ÷ 1,000 = **0.1**.

**LEVEL I EXAMPLE:** primary effluent BOD 150 mg/L at 4,000 m³/d (cubic metres per day); aeration tank 1,500 m³ with MLVSS 2,000 mg/L.
1. Food = 150 × 4,000 ÷ 1,000 = **600 kg/d**
2. Bugs = 2,000 × 1,500 ÷ 1,000 = **3,000 kg**
3. F/M = 600 ÷ 3,000 = **0.2**

**US EXAMPLE:** BOD 180 mg/L at 1.5 MGD (Million Gallons per Day); 0.75 MG aeration tank at 2,000 mg/L MLVSS →
food = 180 × 1.5 × 8.34 = 2,251.8 lb/d; bugs = 2,000 × 0.75 × 8.34 = 12,510 lb → F/M = **0.18**.

**EXAM QUESTION:** *BOD to aeration 160 mg/L, flow 5,000 m³/d; aeration volume 2,000 m³; MLVSS 2,200 mg/L. F/M?* → 800 ÷ 4,400 = **0.18**.

**Rearranged (MLVSS needed):** `kg MLVSS needed = kg BOD/d ÷ desired F/M`
*800 kg/d BOD at a target F/M of 0.25 → 3,200 kg MLVSS → in a 2,000 m³ tank = 3,200 × 1,000 ÷ 2,000 = 1,600 mg/L MLVSS.*

**COMMON MISTAKES:** using **flow** for the bugs (use **volume**); using **MLSS** when the formula says **MLVSS**; using influent BOD when the question gives **primary effluent** BOD (use what enters the aeration tank).

---

## D3. Solids Retention Time (SRT) / Mean Cell Residence Time (MCRT)

**FORMULA:**
```
                 kg of solids in the system
SRT (days) = ───────────────────────────────────────────────────
               kg/d solids wasted (WAS) + kg/d solids lost in effluent
```
(The **official exam sheet** writes it as **(Aeration tank TSS (Total Suspended Solids) + Clarifier TSS) ÷ (TSS wasted per day + Effluent TSS per day)**. If the question gives clarifier solids, add them to the inventory; if not, use the aeration tank only.)

**WHAT IT MEANS:** the average number of **days** a bug stays in the system before it's wasted or lost. Longer SRT = older sludge.

**WHY IT WORKS (plain words):** Think of the aeration tank as a bus. The number of passengers on board (kg of sludge) divided by how many get off each day (kg wasted + kg lost in the effluent) tells you how many days an average passenger stays on the bus. That's the sludge age. Waste more → more get off each day → shorter stay → younger sludge.

**WHEN TO USE IT:** setting the wasting rate; nitrification (needs longer SRT).

**EASY EXAMPLE:** 1,000 kg in the system; 100 kg/d leaves → **10 days**.

**LEVEL I EXAMPLE:** aeration tank 1,500 m³ at MLSS 2,500 mg/L; WAS (Waste Activated Sludge) removes 250 kg/d; effluent TSS (Total Suspended Solids) 10 mg/L at 4,000 m³/d.
1. Inventory = 2,500 × 1,500 ÷ 1,000 = **3,750 kg**
2. Effluent loss = 10 × 4,000 ÷ 1,000 = **40 kg/d**
3. SRT = 3,750 ÷ (250 + 40) = 3,750 ÷ 290 = **12.9 days**

**EXAM QUESTION:** *Aeration tank 2,000 m³ at 3,000 mg/L MLSS. WAS = 400 kg/d. Effluent TSS = 15 mg/L at 5,000 m³/d. SRT?* → 6,000 ÷ (400 + 75) = **12.6 days**.

**Rearranged — how much to waste:**
```
kg/d WAS = (kg inventory ÷ target SRT) − kg/d lost in effluent
m³/d WAS = kg/d WAS × 1,000 ÷ WAS concentration (mg/L)
```
*Inventory 6,000 kg, target SRT 15 d, effluent loss 75 kg/d → 400 − 75 = 325 kg/d. If WAS is 6,500 mg/L → 325 × 1,000 ÷ 6,500 = **50 m³/d**.*

**Related — "Sludge age" (ABC (Association of Boards of Certification)-style formula):**
```
Sludge age (days) = kg of MLSS in aeration ÷ kg/d of TSS entering the aeration tank
```
*MLSS 2,400 mg/L in 1,800 m³ = 4,320 kg; primary effluent TSS 80 mg/L at 6,000 m³/d = 480 kg/d → sludge age = 9 days.*
**Read the question carefully** — "sludge age" (solids **in**) and "SRT/MCRT" (solids **out**) use different denominators.

**COMMON MISTAKES:** forgetting effluent solids; mixing MLSS and MLVSS; using flow instead of volume for the inventory.

---

## D4. Sludge Volume Index (SVI)

**FORMULA:** `SVI (mL/g) = SSV₃₀ (mL/L) × 1,000 ÷ MLSS (mg/L)`

**WHAT IT MEANS:** the volume (mL) that **1 gram** of sludge takes up after 30 minutes of settling. Low = compact, settles well; high = fluffy, bulking.

**WHY IT WORKS (plain words):** The settleometer shows how much space the sludge takes up after 30 minutes (mL per litre). MLSS tells you how many grams of sludge were in that litre (mg/L ÷ 1,000 = g/L). Space ÷ grams = how much room 1 gram takes up. Fluffy, bulking sludge takes up lots of room per gram → high SVI. The × 1,000 is just there to convert mg into g.

**WHEN TO USE IT:** daily settleability check (Modules 5, 6).

**Typical:** ~50–150 good; > ~150–200 bulking tendency.

**EASY EXAMPLE:** SSV₃₀ (Settled Sludge Volume after 30 minutes) 200 mL/L, MLSS 2,000 mg/L → 200 × 1,000 ÷ 2,000 = **100 mL/g**.

**LEVEL I EXAMPLE:** SSV₃₀ 300 mL/L, MLSS 2,500 mg/L → **120 mL/g** (good).

**EXAM QUESTION:** *Settleometer reads 600 mL/L after 30 min; MLSS is 2,400 mg/L. SVI? Is the sludge bulking?* → 600 × 1,000 ÷ 2,400 = **250 mL/g** → yes, bulking.

**COMMON MISTAKE:** forgetting × 1,000 (answer 0.25 instead of 250).

---

## D5. RAS rate (% of influent flow)

**WHY IT WORKS (plain words):** It's simply "what percent of the incoming flow is being pumped back as RAS (Return Activated Sludge)": part ÷ whole × 100.

**FORMULA:** `RAS % = RAS flow ÷ Influent flow × 100`

**LEVEL I EXAMPLE:** RAS 2,000 m³/d; influent 5,000 m³/d → **40%**.

**EXAM QUESTION:** *RAS flow 1,800 m³/d; influent 4,500 m³/d. RAS %?* → **40%**.

*(Recognize: estimated RAS % ≈ SSV₃₀ ÷ (1,000 − SSV₃₀) × 100 → SSV₃₀ = 300 gives ≈ 43%.)*

---

## D6. Pressure and head

**FORMULAS:**
```
Metric:  Pressure (kPa) = Head (m) × 9.8          Head (m) = Pressure (kPa) ÷ 9.8
US:      Pressure (psi) = Head (ft) × 0.433        Head (ft) = Pressure (psi) × 2.31
```

**WHAT IT MEANS:** water pressure and height of water are two ways to say the same thing (Module 12).

**WHY IT WORKS (plain words):** Water pressure comes from the weight of the water above. One metre of water presses down with about 9.8 kPa (one foot presses with 0.433 psi (pounds per square inch)). Two metres presses twice as hard, and so on — so pressure = depth × 9.8. Going the other way, 1 psi holds up a column of water 2.31 ft tall.

**WHEN TO USE IT:** pressure gauges, tank depths, pump head, transducer levels.

**EASY EXAMPLE:** 1 m of water ≈ 9.8 kPa; 10 m ≈ **98 kPa**. 1 psi = 2.31 ft.

**LEVEL I EXAMPLE:** a pump gauge reads 50 psi → 50 × 2.31 = **115.5 ft** of head. A pump develops 30 m of head → 30 × 9.8 = **294 kPa**.

**EXAM QUESTIONS:**
- *Pressure at the bottom of a tank with 18 ft of water?* → 18 × 0.433 = **7.79 psi**.
- *A gauge reads 400 kPa. Head in metres?* → 400 ÷ 9.8 = **40.8 m**.
- *65 psi = how many feet of head?* → 65 × 2.31 = **150.2 ft**.

**COMMON MISTAKES:** mixing 2.31 and 0.433 (**psi → ft: × 2.31**; **ft → psi: × 0.433**). Sanity check: feet are always a **bigger** number than psi.

---

## D7. Pump power (horsepower and kilowatts)

**FORMULAS (US — horsepower):**
```
Water horsepower (whp)  = Flow (gpm) × Total head (ft) ÷ 3,960
Brake horsepower (bhp)  = whp ÷ Pump efficiency (decimal)
Motor horsepower (mhp)  = bhp ÷ Motor efficiency (decimal)
kW = hp × 0.746
```
**FORMULAS (Metric — kilowatts):**
```
Water power (kW)        = 9.8 × Flow (m³/s) × Head (m)
Pump input power (kW)   = Water power ÷ Pump efficiency
Motor input power (kW)  = Pump input ÷ Motor efficiency
```

**WHAT IT MEANS:**

**WHY IT WORKS (plain words):** Lifting water takes energy: the more water you lift and the higher you lift it, the more power you need — so power = flow × head (× a constant for the units: 9.8 in metric, ÷ 3,960 in US). No machine is perfect: a 75% efficient pump wastes 25% as heat and noise, so the motor must supply **more** than the water receives. That's why you **divide** by each efficiency — each step back toward the electrical supply needs more power.
- **Water power** = the useful work done on the water.
- **Brake power** = what the pump shaft needs (more, because the pump isn't 100% efficient).
- **Motor power** = what the motor draws from the wires (more again, because the motor isn't 100% efficient).
- **Each step up gets BIGGER** — dividing by an efficiency (less than 1) always increases the number.

**EASY EXAMPLE:** 396 gpm (gallons per minute) × 10 ft ÷ 3,960 = **1 whp (water horsepower)**.

**LEVEL I EXAMPLE (US):** 500 gpm against 100 ft; pump 75% efficient; motor 90% efficient.
1. whp = 500 × 100 ÷ 3,960 = **12.6 whp**
2. bhp (brake horsepower) = 12.63 ÷ 0.75 = **16.8 bhp**
3. mhp (motor horsepower) = 16.84 ÷ 0.90 = **18.7 hp**  (= 18.7 × 0.746 ≈ **14.0 kW (kilowatt)**)

**LEVEL I EXAMPLE (metric):** 0.03 m³/s (30 L/s (litres per second)) against 30 m; pump 75%; motor 90%.
1. Water power = 9.8 × 0.03 × 30 = **8.82 kW**
2. Pump input = 8.82 ÷ 0.75 = **11.76 kW**
3. Motor input = 11.76 ÷ 0.90 = **13.07 kW**

**EXAM QUESTION:** *A pump delivers 0.05 m³/s against 20 m. Pump efficiency 70%, motor 90%. Motor input power?* → 9.8 × 0.05 × 20 = 9.8 kW ÷ 0.7 = 14.0 ÷ 0.9 = **15.6 kW**.

**Wire-to-water efficiency** = pump eff × motor eff → 0.78 × 0.92 = **0.718 = 71.8%**.

**COMMON MISTAKES:** multiplying by efficiency (answer gets smaller — wrong); using L/s instead of **m³/s** (30 L/s = 0.03 m³/s); using psi instead of **feet** of head (convert first: psi × 2.31).

---

## D8. Electrical energy and cost

**WHY IT WORKS (plain words):** A kilowatt is how fast you use energy; a kilowatt-hour is how much energy you used in total. Using 15 kW for 24 hours uses 15 × 24 = 360 kWh — like driving at a speed for a number of hours gives a distance.

**FORMULAS:** `kWh = kW × hours` · `Cost = kWh × price per kWh` · `kW = hp × 0.746`

**LEVEL I EXAMPLE:** a 15 kW blower runs 24 h/d at $0.10/kWh → 15 × 24 = 360 kWh × 0.10 = **$36/day**.

**EXAM QUESTION:** *A 22 kW pump runs 18 h/d. Power costs $0.12/kWh. Daily cost?* → 22 × 18 × 0.12 = **$47.52**.

*(Ohm's law V = I × R and power P = V × I are in [Module 14](../modules/14-electrical-mechanical.md).)*

---

## D9. Lab calculations

**WHY IT WORKS (plain words):** TSS: the filter gains weight because it caught solids. That weight gain (in grams) ÷ the sample volume gives concentration. Grams → milligrams is × 1,000 and mL → L is × 1,000, so together you multiply by 1,000,000. BOD: the bugs used up (initial DO (Dissolved Oxygen) − final DO) of oxygen in the bottle, but the sample was diluted (e.g., 10 mL in a 300 mL bottle = 30× dilution), so multiply by 300 ÷ sample mL to get the BOD of the undiluted sample.

### TSS
**FORMULA:** `TSS (mg/L) = [(filter + dry solids, g) − (filter, g)] × 1,000,000 ÷ sample volume (mL)`
- **Level I example:** filter 1.2500 g → 1.2535 g after drying; 100 mL sample → 0.0035 × 1,000,000 ÷ 100 = **35 mg/L**.
- **Exam:** filter 1.1250 g → 1.1292 g; 50 mL → 0.0042 × 1,000,000 ÷ 50 = **84 mg/L**.
- **Mistake:** forgetting 1,000,000 (g → mg is ×1,000, and mL → L is ×1,000 → together × 1,000,000).

### VSS and % volatile
**FORMULA:** `VSS (mg/L) = [(after drying, g) − (after ignition, g)] × 1,000,000 ÷ mL`; `% volatile = VSS ÷ TSS × 100`
- **Example:** after drying 1.2535 g; after 550 °C ignition 1.2507 g; 100 mL → 0.0028 × 1,000,000 ÷ 100 = **28 mg/L**; % volatile = 28 ÷ 35 × 100 = **80%**.
- **Exam:** dried 1.1292 g → ignited 1.1259 g, 50 mL → **66 mg/L VSS (Volatile Suspended Solids)**; % volatile = 66 ÷ 84 × 100 = **78.6%**.

### BOD (unseeded)
**FORMULA:** `BOD (mg/L) = (Initial DO − Final DO) × 300 ÷ sample volume (mL)` (300 mL bottle)
- **Example:** DOi 8.6, DOf 4.2, 10 mL sample → 4.4 × 30 = **132 mg/L** (depletion 4.4 ≥ 2.0 ✓; residual 4.2 ≥ 1.0 ✓).
- **Exam:** DOi 8.8, DOf 5.0, 15 mL → 3.8 × 300 ÷ 15 = **76 mg/L**.

### SVI → see D4. % removal → see 17C.

---

## D10. Temperature conversion

**WHY IT WORKS (plain words):** Water freezes at 0 °C = 32 °F and boils at 100 °C = 212 °F. So 100 Celsius degrees cover the same range as 180 Fahrenheit degrees — each °C is 1.8 °F. Multiply by 1.8 to change the size of the degrees, then add 32 because the Fahrenheit scale starts 32 degrees higher.

**FORMULAS:** `°F = (°C × 1.8) + 32` · `°C = (°F − 32) ÷ 1.8`

| Example | Work |
|---|---|
| 20 °C (BOD incubator) | 20 × 1.8 + 32 = **68 °F** |
| 35 °C (digester) | 35 × 1.8 + 32 = **95 °F** |
| 12 °C | 12 × 1.8 + 32 = **53.6 °F** |
| 77 °F | (77 − 32) ÷ 1.8 = **25 °C** |
| 50 °F | (50 − 32) ÷ 1.8 = **10 °C** |

**COMMON MISTAKE:** adding 32 before multiplying (order matters).

---

## D11. Averages for reporting

**WHY IT WORKS (plain words):** An average shares the total equally: add everything up, then divide by how many values there are.

**FORMULA:** `Average = Sum of values ÷ Number of values`
**Example:** effluent TSS for 7 days: 14, 9, 11, 22, 16, 12, 7 → 91 ÷ 7 = **13 mg/L**.
*(Bacteria results are often reported as a **geometric mean** — recognize the term.)*

---

## D12. Chemical supply (days)

**WHY IT WORKS (plain words):** If you have 68 kg and use 9 kg each day, the number of days is how many 9s fit into 68: 68 ÷ 9.

**FORMULA:** `Days of supply = Amount on hand ÷ Daily use`
**Example:** a 68 kg chlorine cylinder at 9 kg/d → 68 ÷ 9 = **7.6 days**. At 12 kg/d → **5.7 days**.

---

## Practice set 17D (answers below)

1. BOD to aeration 160 mg/L, flow 5,000 m³/d; aeration volume 2,000 m³; MLVSS 2,200 mg/L. F/M?
2. US: BOD 150 mg/L at 2 MGD; aeration volume 1.0 MG; MLVSS 2,500 mg/L. F/M?
3. MLSS 2,600 mg/L, 76% volatile. MLVSS?
4. SSV₃₀ 280 mL/L, MLSS 2,800 mg/L. SVI?
5. SSV₃₀ 600 mL/L, MLSS 2,400 mg/L. SVI? Bulking?
6. Aeration 2,000 m³ at MLSS 3,000 mg/L; WAS 400 kg/d; effluent TSS 15 mg/L at 5,000 m³/d. SRT?
7. Same plant: target SRT 15 days. kg/d to waste? If WAS is 6,500 mg/L, how many m³/d?
8. MLSS 2,400 mg/L in 1,800 m³; primary effluent TSS 80 mg/L at 6,000 m³/d. Sludge age?
9. RAS 1,800 m³/d; influent 4,500 m³/d. RAS %?
10. Convert 65 psi to feet of head.
11. Convert 25 m of head to kPa.
12. Pressure (psi) at the bottom of 18 ft of water?
13. A gauge reads 400 kPa. Head in metres?
14. A pump delivers 800 gpm against 75 ft. Pump 80%, motor 92%. whp, bhp, mhp? Water power in kW?
15. Metric: 0.05 m³/s against 20 m; pump 70%; motor 90%. Water power, pump input, motor input (kW)?
16. A 22 kW pump runs 18 h/d at $0.12/kWh. Daily cost?
17. TSS: filter 1.1250 g; after drying 1.1292 g; 50 mL sample.
18. VSS: same filter after ignition 1.1259 g. VSS and % volatile?
19. BOD: DOi 8.8 mg/L, DOf 5.0 mg/L, 15 mL sample in a 300 mL bottle.
20. Convert 12 °C to °F, and 77 °F to °C.
21. A 68 kg chlorine cylinder is used at 9 kg/d. Days of supply?
22. Pump efficiency 78%, motor 92%. Wire-to-water efficiency?
23. Average of 14, 9, 11, 22, 16, 12, 7 mg/L?
24. BOD load 800 kg/d; target F/M 0.25; aeration volume 2,000 m³. Required MLVSS (mg/L)?

---

### Answers 17D
| # | Answer | Work |
|---|---|---|
| 1 | **0.18** | 800 kg/d ÷ 4,400 kg |
| 2 | **0.12** | 2,502 lb/d ÷ 20,850 lb |
| 3 | **1,976 mg/L** | 2,600 × 0.76 |
| 4 | **100 mL/g** | 280 × 1,000 ÷ 2,800 |
| 5 | **250 mL/g — yes** | 600 × 1,000 ÷ 2,400 |
| 6 | **12.6 d** | 6,000 ÷ (400 + 75) |
| 7 | **325 kg/d; 50 m³/d** | 6,000 ÷ 15 = 400 − 75 = 325; 325 × 1,000 ÷ 6,500 |
| 8 | **9 d** | 4,320 kg ÷ 480 kg/d |
| 9 | **40%** | 1,800 ÷ 4,500 × 100 |
| 10 | **150.2 ft** | 65 × 2.31 |
| 11 | **245 kPa** | 25 × 9.8 |
| 12 | **7.79 psi** | 18 × 0.433 |
| 13 | **40.8 m** | 400 ÷ 9.8 |
| 14 | **15.2 whp; 18.9 bhp; 20.6 mhp; 11.3 kW water power** | 800 × 75 ÷ 3,960 = 15.15; ÷ 0.8; ÷ 0.92; 15.15 × 0.746 |
| 15 | **9.8 kW; 14.0 kW; 15.6 kW** | 9.8 × 0.05 × 20; ÷ 0.7; ÷ 0.9 |
| 16 | **$47.52** | 22 × 18 × 0.12 |
| 17 | **84 mg/L** | 0.0042 × 1,000,000 ÷ 50 |
| 18 | **66 mg/L; 78.6%** | 0.0033 × 1,000,000 ÷ 50; 66 ÷ 84 |
| 19 | **76 mg/L** | 3.8 × 300 ÷ 15 |
| 20 | **53.6 °F; 25 °C** | 12 × 1.8 + 32; (77 − 32) ÷ 1.8 |
| 21 | **7.6 d** | 68 ÷ 9 |
| 22 | **71.8%** | 0.78 × 0.92 |
| 23 | **13 mg/L** | 91 ÷ 7 |
| 24 | **1,600 mg/L** | 800 ÷ 0.25 = 3,200 kg × 1,000 ÷ 2,000 |
