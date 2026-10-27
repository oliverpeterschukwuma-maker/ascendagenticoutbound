# Math 17F — The Other Formulas on the Official Exam Sheet

← [17E — Practice Bank](17e-math-practice-bank.md) · [Course index](../README.md) · Formula list → [Formula & Conversion Sheet](formula-and-conversion-sheet.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **ABC** = Association of Boards of Certification · **AC** = Alternating Current · **bhp** = brake horsepower · **BOD** = Biochemical Oxygen Demand · **CaCO₃** = calcium carbonate · **CFU** = Colony-Forming Units · **CFU/100 mL** = colony-forming units per 100 mL · **DC** = Direct Current · **EDTA** = ethylenediaminetetraacetic acid (titrant) · **EOCP** = Environmental Operators Certification Program · **F/M** = Food-to-Microorganism ratio · **gpm** = gallons per minute · **hp** = horsepower · **kPa** = kilopascal · **kW** = kilowatt · **L/s** = litres per second · **MCRT** = Mean Cell Residence Time · **mg/L** = milligrams per litre · **MGD** = Million Gallons per Day · **mhp** = motor horsepower · **mL** = millilitre · **MLSS** = Mixed Liquor Suspended Solids · **MLVSS** = Mixed Liquor Volatile Suspended Solids · **m³/d** = cubic metres per day · **m³/m²·d** = cubic metres per square metre per day · **OUR** = Oxygen Uptake Rate · **PE** = Population Equivalent · **RAS** = Return Activated Sludge · **RBC** = Rotating Biological Contactor · **RBCs** = Rotating Biological Contactors · **SDI** = Sludge Density Index · **SG** = Specific Gravity · **SOR** = Surface Overflow Rate · **SOUR** = Specific Oxygen Uptake Rate · **SS** = Suspended Solids · **SSV₃₀** = Settled Sludge Volume after 30 minutes · **SVI** = Sludge Volume Index · **TS** = Total Solids · **TSS** = Total Suspended Solids · **WAS** = Waste Activated Sludge · **whp** = water horsepower
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

## Formulas from the EOCP Formulae, Conversions & Abbreviations sheet

EOCP hands out **its own 4-page formula sheet** ("EOCP Formulae, Conversions, and Abbreviations", Sept 2006) **as well as** the ABC sheet. Most formulas are the same ideas written differently. These are the ones that are new or different.

**⚠ 9.8 vs 9.81:** the ABC sheet uses **9.8**; the EOCP sheet uses **9.81** (and lists 1 m of water = **9.807 kPa**). The difference is tiny (0.1%) — use either and **pick the closest answer choice**.

## F18. Volume of a lagoon (sloped sides)
**FORMULA (EOCP sheet):** `Vol = [(Length top + Length bottom) ÷ 2] × [(Width top + Width bottom) ÷ 2] × Depth`
**WHAT IT MEANS:** lagoons have sloped sides, so the top is bigger than the bottom. Use the **average** length and **average** width.
**WHY IT WORKS:** averaging the top and bottom gives the size of the "middle" of the lagoon, which is a good estimate of a sloped basin.
**EXAMPLE:** top 120 m × 80 m, bottom 100 m × 60 m, depth 2.5 m → (110) × (70) × 2.5 = **19,250 m³**.
**MISTAKE:** using only the top dimensions (overestimates the volume).

## F19. RBC loading — both sides of every disc
**FORMULAS (EOCP sheet):** `Hydraulic loading = Q ÷ (2 × π × r² × N)` · `Organic loading = Q × BOD ÷ (2 × π × r² × N)` (N = number of discs)
**WHY "2 ×":** each disc has **two faces** covered in biofilm, and each face is a circle (π × r²).
**EXAMPLE:** 40 discs, radius 1.8 m, flow 500 m³/d, BOD 120 mg/L → media area = 2 × 3.14 × 1.8² × 40 = 814 m² → hydraulic **0.61 m³/m²·d**; organic 500 × 120 = 60,000 g/d ÷ 814 = **74 g BOD/m²·d**.

## F20. Chemical feed rate in litres per day
**FORMULA (EOCP sheet):** `Feed (L/day) = Dose (mg/L) × Q (m³/day) ÷ (Concentration as decimal × Density (kg/L) × 1,000)`
**WHY IT WORKS:** dose × flow = grams per day of active chemical (because mg/L = g/m³). Each litre of product contains (density × 1,000 g) × concentration of active chemical. Divide grams needed by grams per litre → litres per day.
**EXAMPLE:** dose 6 mg/L, flow 3,000 m³/d, 12% hypochlorite, density 1.2 → 18,000 ÷ (0.12 × 1.2 × 1,000) = **125 L/day** (÷ 1,440 = 87 mL/min).

## F21. Chlorine dosage for a tank or reservoir (batch dosing)
**FORMULAS (EOCP sheet):** `Dose (mg/L) = Weight of chlorine (kg) × 1,000 ÷ Volume of water (m³)` · liquid: `Dose = Concentration (decimal) × Volume of liquid (L) × 1,000 ÷ Volume of water (m³)`
**WHY IT WORKS:** kg × 1,000 = grams, and grams per m³ is the same as mg per litre (1 g/m³ = 1 mg/L). So kg × 1,000 ÷ m³ gives mg/L.
**EXAMPLE:** 2 kg of chlorine into a 500 m³ tank → 2 × 1,000 ÷ 500 = **4 mg/L**. 20 L of 12% hypochlorite into 500 m³ → 0.12 × 20 × 1,000 ÷ 500 = **4.8 mg/L**.

## F22. Sludge recycle (RAS) rate from SVI
**FORMULA (EOCP sheet):** `Q_R = Q ÷ [(100 ÷ (MLSS% × SVI)) − 1]` — MLSS% is the MLSS **as a percent** (2,500 mg/L = 0.25%).
**WHAT IT MEANS:** how much RAS you need, based on how much space the settled sludge takes up.
**EXAMPLE:** Q = 4,000 m³/d, MLSS 2,500 mg/L (0.25%), SVI 120 → 100 ÷ (0.25 × 120) = 3.33; − 1 = 2.33 → 4,000 ÷ 2.33 = **1,714 m³/d (≈ 43%)**. (Same answer as the settleometer shortcut SSV₃₀ (Settled Sludge Volume after 30 minutes) ÷ (1,000 − SSV₃₀) in Module 6.)
**MISTAKE:** using MLSS in mg/L instead of %.

## F23. Sludge wasting volume to reach a target MLSS
**FORMULA (EOCP sheet):** `Q_W = (MLSS initial − MLSS final) × V_aeration ÷ RAS suspended solids`
**WHAT IT MEANS:** how much RAS/WAS must be wasted to bring the MLSS down to the target.
**WHY IT WORKS:** (MLSS change × tank volume) is the mass of sludge you need to remove; dividing by how concentrated the waste sludge is gives the volume to pump out.
**EXAMPLE:** lower MLSS from 3,000 to 2,800 mg/L in a 1,500 m³ tank; RAS = 8,000 mg/L → 200 × 1,500 ÷ 8,000 = **37.5 m³**.

## F24. F/M and MCRT — EOCP sheet versions
- **F/M (EOCP):** `Q × BOD ÷ [MLVSS × (V_aeration + V_clarifier)]` — counts the bugs in the **clarifier** too. The ABC sheet counts **aeration tank MLVSS (Mixed Liquor Volatile Suspended Solids) only**. **Use what the question gives**: if it gives a clarifier volume, include it.
  - *Example:* Q 4,000 m³/d, BOD 150 mg/L, MLVSS 2,000 mg/L, aeration 1,500 m³, clarifier 500 m³ → 600,000 ÷ (2,000 × 2,000) = **0.15**.
- **MCRT (EOCP):** `MLSS × (V_AT + V_C) ÷ [(Q × TSS effluent) + (Q_W × WAS SS)]` — same idea as 17D.

## F25. Brake horsepower with specific gravity, and efficiencies
**FORMULAS (EOCP sheet):** `BHP (hp) = Q (US gpm) × H (ft) × SG ÷ (3,960 × pump efficiency)` · `BHP (kW) = 9.81 × Q (m³/s) × H (m) × SG ÷ pump efficiency`
**WHY SG:** heavier liquids (thick sludge, chemicals) take more power to lift. For water, **SG = 1** and the formula is the same as in 17D.
**EXAMPLE:** 300 gpm of sludge (SG 1.03) against 50 ft, pump 75% → 300 × 50 × 1.03 ÷ (3,960 × 0.75) = **5.2 hp**.
**Efficiencies (EOCP sheet):** **motor efficiency** = bhp ÷ mhp (motor horsepower) × 100 · **pump efficiency** = whp (water horsepower) ÷ bhp × 100 · **overall (wire-to-water)** = whp ÷ mhp × 100 · **treatment efficiency** = (BOD in − BOD out) ÷ BOD in × 100.
*Example:* whp 15, bhp 20, mhp 22 → pump **75%**, overall **68%**.

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

15. A lagoon is 100 m × 60 m at the top and 80 m × 40 m at the bottom, 2 m deep. Volume?
16. An RBC (Rotating Biological Contactor) has 30 discs of 1.5 m radius and receives 800 m³/d. Hydraulic loading (m³/m²·d)?
17. Dose 4 mg/L into 5,000 m³/d using 12.5% hypochlorite (density 1.2). Feed in L/day?
18. 1.5 kg of chlorine is added to a 300 m³ reservoir. Dose?
19. Q = 6,000 m³/d, MLSS 3,000 mg/L, SVI 100. RAS flow (EOCP SVI method)?
20. Lower MLSS from 3,200 to 3,000 mg/L in a 2,000 m³ tank; RAS SS 9,000 mg/L. Volume to waste?
21. 200 gpm of sludge (SG 1.1) against 40 ft; pump 70%. Brake horsepower?

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
| 15 | **9,000 m³** | (100 + 80) ÷ 2 = 90; (60 + 40) ÷ 2 = 50; 90 × 50 × 2 |
| 16 | **1.89 m³/m²·d** | area = 2 × 3.14 × 1.5² × 30 = 423.9 m²; 800 ÷ 423.9 |
| 17 | **133 L/day** | 4 × 5,000 ÷ (0.125 × 1.2 × 1,000) |
| 18 | **5 mg/L** | 1.5 × 1,000 ÷ 300 |
| 19 | **2,571 m³/d (≈ 43%)** | MLSS% = 0.3; 100 ÷ (0.3 × 100) = 3.33; − 1 = 2.33; 6,000 ÷ 2.33 |
| 20 | **44 m³** | 200 × 2,000 ÷ 9,000 |
| 21 | **3.2 hp** | 200 × 40 × 1.1 ÷ (3,960 × 0.70) |
