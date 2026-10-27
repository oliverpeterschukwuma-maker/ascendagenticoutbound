# Math 17F — The Other Formulas on the Official Exam Sheet

← [17E — Practice Bank](17e-math-practice-bank.md) · [Course index](../README.md) · Formula list → [Formula & Conversion Sheet](formula-and-conversion-sheet.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **ABC** = Association of Boards of Certification · **AC** = Alternating Current · **bhp** = brake horsepower · **BOD** = Biochemical Oxygen Demand · **CaCO₃** = calcium carbonate · **CFU** = Colony-Forming Units · **CFU/100 mL** = colony-forming units per 100 mL · **DC** = Direct Current · **EDTA** = ethylenediaminetetraacetic acid (titrant) · **EOCP** = Environmental Operators Certification Program · **gpm** = gallons per minute · **hp** = horsepower · **kPa** = kilopascal · **kW** = kilowatt · **L/s** = litres per second · **mg/L** = milligrams per litre · **MGD** = Million Gallons per Day · **mL** = millilitre · **MLSS** = Mixed Liquor Suspended Solids · **m³/d** = cubic metres per day · **m³/m²·d** = cubic metres per square metre per day · **OUR** = Oxygen Uptake Rate · **PE** = Population Equivalent · **RAS** = Return Activated Sludge · **RBCs** = Rotating Biological Contactors · **SDI** = Sludge Density Index · **SG** = Specific Gravity · **SOR** = Surface Overflow Rate · **SOUR** = Specific Oxygen Uptake Rate · **SS** = Suspended Solids · **SVI** = Sludge Volume Index · **TS** = Total Solids
<!-- abbr-end -->

**Why this lesson exists:** The **ABC (Association of Boards of Certification) Formula/Conversion Table for Wastewater** (the sheet EOCP (Environmental Operators Certification Program) hands out at every exam) contains formulas that Lessons 17B–17D didn't cover. Most are simple. Only about **10 exam questions are calculations** (9 process, 1 lab), so you don't need to master every formula — but you should **recognize** each one and know when it applies.

**Two things about the official sheet you must know:**
1. **It uses 9.8, not 9.81**, for metric pressure and power (1 m of water = 9.8 kPa (kilopascal); kW (kilowatt) = 9.8 × Q × H). This course now uses 9.8 everywhere.
2. **Metric surface overflow rate and weir overflow rate are written in litres per day** (Lpd/m² and Lpd/m), not m³. **1 m³ = 1,000 L**, so 25.5 m³/m²·d (cubic metres per square metre per day) = **25,500 Lpd/m²**. If the answer choices look 1,000× too big, that's why.

**Pie wheels:** the last page of the official sheet shows "pie wheels" for some formulas. They work exactly like the **triangle method** in [17A](17a-math-foundations.md): the quantity **above the line = the wedges below the line multiplied together**. To find a wedge below the line, **cover it and divide** the top by the other wedges. Where US and metric differ, **metric is shown in brackets** — e.g., Loading Rate lb/day (kg/day) = Flow MGD (m³/day) × Concentration mg/L (milligrams per litre) × 8.34 (0.001).

Each formula below: **FORMULA → WHAT IT MEANS → WHY IT WORKS → WHEN TO USE → EXAMPLE → COMMON MISTAKE.** Practice problems with answers are at the end.

---

## F1. Alkalinity (lab titration)
**FORMULA:** `Alkalinity (mg/L as CaCO₃) = Titrant volume (mL) × Acid normality × 50,000 ÷ Sample volume (mL)`
**WHAT IT MEANS:** you add acid until the sample reaches the endpoint (about pH 4.5); the more acid it takes, the more alkalinity (buffer) the water had.
**WHY IT WORKS:** mL × normality = how much acid was neutralized. 50,000 converts that into mg of calcium carbonate per litre (50 = the equivalent weight of CaCO₃ in mg/meq, × 1,000 mL/L). Dividing by the sample volume makes it a concentration.
**WHEN:** lab alkalinity; checking whether nitrification or a digester has enough buffer.
**EXAMPLE:** 8.2 mL of 0.02 N sulphuric acid for a 100 mL sample → 8.2 × 0.02 × 50,000 ÷ 100 = **82 mg/L as CaCO₃**.
**MISTAKE:** using 1,000 instead of 50,000.

## F2. Bacteria — colonies per 100 mL
**FORMULA:** `CFU/100 mL = Colonies on plate × 100 ÷ mL of sample filtered`
**WHAT/WHY:** bacteria results are always reported "per 100 mL". If you filtered 50 mL and counted 42 colonies, 100 mL would have twice as many.
**EXAMPLE:** 42 colonies from 50 mL → 42 × 100 ÷ 50 = **84 CFU/100 mL** (CFU = colony-forming units).
**MISTAKE:** forgetting to scale to 100 mL.

## F3. Composite sample — size of each portion
**FORMULA:** `Portion (mL) = Instantaneous flow × Total sample volume ÷ (Number of portions × Average flow)`
**WHAT IT MEANS:** for a **flow-proportional** composite, each grab portion is bigger when the flow is high and smaller when it's low.
**WHY IT WORKS:** if every portion were equal, you'd split the total volume evenly (total ÷ number of portions). Multiplying by (instantaneous flow ÷ average flow) scales each portion up or down with the flow at that moment.
**EXAMPLE:** total composite wanted 5,000 mL in 24 portions; average flow 4.0 ML/d; flow right now 5.2 ML/d → 5.2 × 5,000 ÷ (24 × 4.0) = **271 mL**.
**MISTAKE:** flow units must match (both ML/d, or both MGD).

## F4. Pump cycle time (wet wells)
**FORMULA:** `Cycle time (min) = Storage volume ÷ (Pump capacity − Wet-well inflow)`
**WHAT IT MEANS:** how long the pump takes to empty the working volume of the wet well **while water keeps flowing in**.
**WHY IT WORKS:** the pump removes its capacity, but the inflow keeps refilling the well, so the well only empties at the **difference** between them.
**EXAMPLE:** 3,000 gal (11.4 m³) storage, pump 400 gpm (gallons per minute), inflow 150 gpm → 3,000 ÷ (400 − 150) = **12 min**. Metric: 12 m³, pump 1.5 m³/min, inflow 0.6 m³/min → 12 ÷ 0.9 = **13.3 min**.
**MISTAKE:** adding the inflow instead of subtracting it.

## F5. Return sludge rate — solids balance
**FORMULA:** `RAS flow = MLSS × Influent flow ÷ (RAS suspended solids − MLSS)`
**WHAT IT MEANS:** the RAS (Return Activated Sludge) flow needed to keep the aeration tank at its MLSS (Mixed Liquor Suspended Solids), given how thick the RAS is.
**WHY IT WORKS:** solids going **into** the aeration tank from the RAS must equal the solids needed to keep the mixed liquor at its MLSS. Thicker RAS → less RAS flow needed.
**EXAMPLE:** MLSS 2,500 mg/L, influent 2.0 MGD (7,570 m³/d (cubic metres per day)), RAS 8,000 mg/L → 2,500 × 2.0 ÷ (8,000 − 2,500) = **0.91 MGD** (3,441 m³/d) — about 45% of influent flow.
**Related — Return rate %:** `RAS flow ÷ Influent flow × 100` (Module 6).
**MISTAKE:** dividing by RAS SS instead of (RAS SS − MLSS).

## F6. Trickling filter — recirculation ratio and organic loading
**FORMULAS:** `Recirculation ratio = Recirculated flow ÷ Primary effluent flow` · `Organic loading (kg BOD/m³·d) = kg BOD/d ÷ Media volume (m³)` (US: lb BOD/d per 1,000 ft³). RBCs (Rotating Biological Contactors) use media **surface area** instead of volume (soluble BOD (Biochemical Oxygen Demand) per m² or per 1,000 ft²).
**EXAMPLE:** 3,000 m³/d recirculated, 1,500 m³/d primary effluent → ratio **2.0** (or 2:1). Filter 20 m diameter × 2 m deep = 628 m³; 400 kg BOD/d → **0.64 kg/m³·d**.
**MISTAKE:** dividing by total flow instead of primary effluent flow.

## F7. Population equivalent
**FORMULAS:** `Organic PE = BOD load ÷ BOD per person per day` → US: Flow (MGD) × BOD × 8.34 ÷ **0.17 lb/person/d**; metric: Flow (m³/d) × BOD ÷ (1,000 × **0.077 kg/person/d**). **Hydraulic PE (Population Equivalent):** **100 gal (378.5 L) per person per day**.
**WHAT IT MEANS:** "this industry's waste is as strong as X people's sewage".
**EXAMPLE:** 4,500 m³/d at 220 mg/L BOD → 990 kg/d ÷ 0.077 = **12,857 people**.
**MISTAKE:** forgetting the ÷ 1,000 in the metric version.

## F8. Slope
**FORMULA:** `Slope % = Drop (or rise) ÷ Distance × 100`
**EXAMPLE:** a sewer drops 0.6 m over 150 m → 0.6 ÷ 150 × 100 = **0.4%**.

## F9. Specific gravity
**FORMULA:** `SG = Weight of substance (lb/gal) ÷ 8.34` (metric: kg/L ÷ 1.0)
**WHAT IT MEANS:** how heavy a liquid is compared with water. SG (Specific Gravity) > 1 sinks/heavier (most chemicals); SG < 1 floats (oil, grease).
**EXAMPLE:** a hypochlorite solution weighs 10.0 lb/gal → 10.0 ÷ 8.34 = **1.2**.

## F10. Sludge Density Index (SDI)
**FORMULA:** `SDI = 100 ÷ SVI` · **EXAMPLE:** SVI (Sludge Volume Index) 120 → SDI (Sludge Density Index) **0.83**. (Higher SDI = denser, better-settling sludge — the opposite direction from SVI.)

## F11. Volatile solids reduction (digesters)
**FORMULA:** `VS reduction % = (In − Out) ÷ [In − (In × Out)] × 100` — **In and Out are the volatile fractions as decimals** (e.g., 75% = 0.75).
**WHY IT'S NOT A NORMAL % REMOVAL:** digestion destroys volatile solids but leaves the fixed (ash) solids, so the *fraction* that is volatile changes. This formula (the "Van Kleeck" formula) corrects for that.
**EXAMPLE:** feed sludge 75% volatile, digested sludge 55% volatile → (0.75 − 0.55) ÷ (0.75 − 0.75 × 0.55) × 100 = 0.20 ÷ 0.3375 × 100 = **59%**.
**MISTAKE:** using percentages (75, 55) instead of decimals.

## F12. Total solids % (sludge in a dish)
**FORMULA:** `TS % = (Dried weight − Tare) × 100 ÷ (Wet weight − Tare)` (all in grams)
**EXAMPLE:** dish 25.10 g; dish + wet sludge 45.10 g; dish + dried sludge 25.45 g → 0.35 × 100 ÷ 20.00 = **1.75%**.
**Related — Volatile solids %:** `(Dry solids − Fixed solids) ÷ Dry solids × 100`.

## F13. Blending — "Three Normal Equation"
**FORMULA:** `C₁V₁ + C₂V₂ = C₃V₃`, where V₁ + V₂ = V₃
**WHAT IT MEANS:** mixing two solutions (or two flows) of different strengths; the final strength is a weighted average.
**EXAMPLE:** 500 gal of 3% + 1,500 gal of 1% → (500 × 3 + 1,500 × 1) ÷ 2,000 = **1.5%**.
*(The "Two Normal Equation" C₁V₁ = C₂V₂ is the dilution formula from 17C.)*

## F14. Filter backwash rate and rise rate
**FORMULAS:** `Backwash rate (gpm/ft²) = Flow (gpm) ÷ Filter area (ft²)` · metric: L/s (litres per second) ÷ m² · `Rise rate (in/min) = Backwash rate (gpm/ft²) × 12 ÷ 7.48` · metric rise rate (cm/min) = water rise (cm) ÷ time (min)
**EXAMPLE:** 720 gpm on a 6 ft × 8 ft (48 ft²) filter → **15 gpm/ft²**; rise rate = 15 × 12 ÷ 7.48 = **24 in/min**. Metric: 180 L/s on 20 m² → **9 L/s per m²**.

## F15. Power, efficiency and electrical
| Formula (as on the sheet) | Example |
|---|---|
| **Power, kW = Flow (L/s) × Head (m) × 9.8 ÷ 1,000** | 50 L/s × 25 m × 9.8 ÷ 1,000 = **12.25 kW** (same as 9.8 × 0.05 m³/s × 25) |
| **Motor efficiency % = Brake hp ÷ Motor hp × 100** | 18 bhp (brake horsepower) ÷ 20 hp → **90%** |
| **Wire-to-water efficiency % = Water hp ÷ Motor hp × 100** | 26.3 ÷ 37.5 → **70%** |
| **Watts (AC) = Volts × Amps × Power factor** · Watts (DC) = Volts × Amps | 240 V × 20 A × 0.85 = **4,080 W** |
| **Amps = Volts ÷ Ohms** · **Volts = Amps × Ohms** | Ohm's law (Module 14) |

## F16. Chemical feed pump settings
- **% stroke = Desired flow ÷ Maximum flow × 100** → a pump that can deliver 120 mL/min, set for 40 mL/min → **33%**.
- **US mL/min = Flow (MGD) × Dose (mg/L) × 3.785 × 1,000,000 ÷ [Feed chemical density (mg/mL) × 1,440]**. Here "density" means **mg of active chemical per mL** of the product: for 12.5% hypochlorite with SG 1.2, that's 1,200 mg/mL × 0.125 = **150 mg/mL**.
  - **Example:** 1.5 MGD, 5 mg/L → 1.5 × 5 × 3,785,000 ÷ (150 × 1,440) = **131 mL/min**.
- Metric version (17C): `m³/d × mg/L ÷ (density g/cm³ × active decimal × 1,440)`.

## F17. Recognize-only formulas (on the sheet, unlikely at Level I)
Geometric mean (bacteria averages — use a calculator), hardness (EDTA (ethylenediaminetetraacetic acid, titrant) titration), force = pressure × area, molarity/normality/milliequivalents, oxygen uptake rate (OUR) and specific OUR (SOUR), filter yield, centrifuge solids capture, area of cone/cylinder surfaces, water use per capita. Know what each is **for**; skip memorizing.

---

## Practice set 17F (answers below)
1. 6.5 mL of 0.02 N acid titrates a 100 mL sample. Alkalinity?
2. 27 colonies grow from 25 mL of effluent. Result per 100 mL?
3. Wet well storage 20 m³; pump 2.0 m³/min; inflow 0.8 m³/min. Cycle time? (US: 4,000 gal, 500 gpm pump, 200 gpm inflow?)
4. MLSS 3,000 mg/L; influent 4,500 m³/d; RAS 9,000 mg/L. RAS flow needed (solids balance)?
5. Trickling filter: 3,200 m³/d recirculated; 1,600 m³/d primary effluent. Recirculation ratio?
6. A dairy discharges 9,460 m³/d at 240 mg/L BOD. Organic population equivalent?
7. Digester feed 70% volatile; digested sludge 50% volatile. VS reduction?
8. Mix 800 L of 2% polymer with 200 L of 12%. Final strength?
9. SVI = 150. SDI?
10. A pump moves 30 L/s against 20 m of head. Water power (kW)?
11. A metering pump's maximum is 90 mL/min; you need 30 mL/min. % stroke?
12. US: 2.0 MGD, dose 8 mg/L, hypochlorite at 150 mg/mL active. Pump setting (mL/min)?
13. Dish 31.20 g; dish + wet sludge 51.20 g; dish + dry 31.62 g. Total solids %?
14. Convert an SOR (Surface Overflow Rate) of 30 m³/m²·d to Lpd/m².

### Answers 17F
| # | Answer | Work |
|---|---|---|
| 1 | **65 mg/L as CaCO₃** | 6.5 × 0.02 × 50,000 ÷ 100 |
| 2 | **108 CFU/100 mL** | 27 × 100 ÷ 25 |
| 3 | **16.7 min** (US: **13.3 min**) | 20 ÷ (2.0 − 0.8); 4,000 ÷ (500 − 200) |
| 4 | **2,250 m³/d** | 3,000 × 4,500 ÷ (9,000 − 3,000) |
| 5 | **2.0** | 3,200 ÷ 1,600 |
| 6 | **≈ 29,490 people** | 9,460 × 240 ÷ (1,000 × 0.077) |
| 7 | **57%** | (0.70 − 0.50) ÷ (0.70 − 0.35) × 100 |
| 8 | **4%** | (800 × 2 + 200 × 12) ÷ 1,000 |
| 9 | **0.67** | 100 ÷ 150 |
| 10 | **5.9 kW** | 30 × 20 × 9.8 ÷ 1,000 = 5.88 |
| 11 | **33%** | 30 ÷ 90 × 100 |
| 12 | **280 mL/min** | 2.0 × 8 × 3,785,000 ÷ (150 × 1,440) |
| 13 | **2.1%** | 0.42 × 100 ÷ 20.00 |
| 14 | **30,000 Lpd/m²** | × 1,000 |
