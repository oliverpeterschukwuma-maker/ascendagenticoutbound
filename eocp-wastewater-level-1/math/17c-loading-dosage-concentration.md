# Math 17C — Concentration, Loading (kg/day), Chemical Dosage & Solutions

← [17B](17b-area-volume-flow-time.md) · [Course index](../README.md) · Next → [17D — Process, Pumps, Pressure & Lab](17d-process-pumps-pressure-lab.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **BOD** = Biochemical Oxygen Demand · **Cl₂** = chlorine gas · **EOCP** = Environmental Operators Certification Program · **F/M** = Food-to-Microorganism ratio · **gpd** = gallons per day · **HTH** = High-Test Hypochlorite (calcium hypochlorite) · **H₂S** = hydrogen sulphide · **MG** = million gallons · **mg/L** = milligrams per litre · **MGD** = Million Gallons per Day · **ML** = megalitre (1,000 m³) · **mL** = millilitre · **MLSS** = Mixed Liquor Suspended Solids · **m³/d** = cubic metres per day · **OSHA** = Occupational Safety and Health Administration (US) · **ppm** = parts per million · **SG** = Specific Gravity · **SRT** = Solids Retention Time · **TSS** = Total Suspended Solids · **WAS** = Waste Activated Sludge
<!-- abbr-end -->

> **The single most important formula in wastewater math is the "pounds formula" (US) / "kilograms formula" (metric).** It converts a **concentration** (mg/L) into a **mass per day** (kg/d or lb/d). Once you understand it, half the exam math becomes easy: BOD (Biochemical Oxygen Demand) loading, solids loading, chlorine feed, chemical feed, sludge wasting, solids inventory.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Water Operator Math: The Pounds Formula Explained (lbs/day, Dose, Flow)](https://www.youtube.com/watch?v=SjajSl783jc) · [mg/L to lbs/day Explained](https://www.youtube.com/watch?v=vmCvSvYvACU)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## C1. Concentration units

**WHY IT WORKS (plain words):** mg/L (milligrams per litre) tells you how many milligrams of stuff are in each litre. Because 1 m³ holds 1,000 L and 1 g = 1,000 mg, 1 mg in every litre = 1 g in every m³ — so mg/L and g/m³ are the same number. And 1 ML has a million litres, so 1 mg/L = 1 kg per ML. A 1% solution has 1 part in 100 → 10,000 parts per million → 10,000 mg/L.

| Unit | Meaning | Equivalent |
|---|---|---|
| **mg/L** | milligrams of stuff per litre of water | **= ppm** (parts per million) in water |
| **g/m³** | grams per cubic metre | **= mg/L** (exactly) |
| **kg/ML** | kilograms per megalitre | **= mg/L** (exactly) |
| **%** | parts per hundred (by weight) | **1% = 10,000 mg/L** |

**Why 1 mg/L = 1 kg/ML:** 1 ML = 1,000,000 L, and 1,000,000 mg = 1 kg. So 1 mg in every litre of a megalitre = 1 kg.

---

## C2. Mass loading — the "kilograms formula"

**FORMULA (metric):**
```
kg/day = Concentration (mg/L) × Flow (m³/d) ÷ 1,000
   or
kg/day = Concentration (mg/L) × Flow (ML/d)
```
**FORMULA (US):**
```
lb/day = Concentration (mg/L) × Flow (MGD) × 8.34
```

**WHAT IT MEANS:** concentration tells you how *strong* the water is; flow tells you how *much* water. Multiply them to get the *total mass* of stuff arriving each day.

**WHY IT WORKS (plain words):** Think of the stuff in wastewater as sugar dissolved in water. **Concentration** tells you how much sugar is in each litre. **Flow** tells you how many litres arrive each day. Total sugar per day = sugar per litre × litres per day. The ÷ 1,000 just converts grams into kilograms (mg/L × m³ = g, because 1 mg/L = 1 g/m³). In US units, the 8.34 converts "million gallons" of water into pounds (1 gallon weighs 8.34 lb).

**WHEN TO USE IT:** whenever the question asks for **kg/d or lb/d** of anything — BOD, TSS (Total Suspended Solids), ammonia, chlorine, chemical, solids wasted, solids removed.

**VARIABLES & UNITS:**
| Variable | Metric | US |
|---|---|---|
| Concentration | mg/L | mg/L |
| Flow | m³/d (÷ 1,000) **or** ML/d | **MGD** (million gallons per day) |
| Answer | kg/d | lb/d |
| Why the constant? | 1,000 converts g to kg (mg/L × m³ = g) | **8.34** = weight of 1 gallon of water in lb |

**EASY EXAMPLE:** 1 mg/L × 1,000 m³/d ÷ 1,000 = **1 kg/d**. (Or 1 mg/L × 1 ML/d = 1 kg/d.)

**LEVEL I EXAMPLE:** influent BOD 220 mg/L, flow 4,500 m³/d → 220 × 4,500 ÷ 1,000 = **990 kg/d**.
(Same with ML/d: 220 × 4.5 = 990 kg/d ✓)
US: 220 mg/L × 1.2 MGD × 8.34 = **2,201.8 lb/d**.

**EXAM QUESTION:** *Influent TSS is 240 mg/L and effluent TSS is 12 mg/L. Flow is 3.2 ML/d. How many kg/d of TSS are removed?*
→ removed concentration = 240 − 12 = 228 mg/L → 228 × 3.2 = **729.6 kg/d**.

**COMMON MISTAKES:**
- Using m³/d **without** ÷ 1,000 (answer 1,000× too big).
- In US problems, using **gpd** (gallons per day) instead of **MGD** (1,500,000 gpd = **1.5** MGD).
- Forgetting 8.34 in US problems.

---

## C3. Mass in a tank (inventory)

**FORMULA:** `kg = Concentration (mg/L) × Volume (m³) ÷ 1,000`  · US: `lb = mg/L × Volume (MG) × 8.34`

**WHAT IT MEANS:** the total mass of solids (or chemical) **sitting in** a tank right now (not per day).

**WHY IT WORKS (plain words):** Same as the kg/day formula, but instead of litres **per day** you use the litres **sitting in the tank**. So you get a mass (kg), not a mass per day. Use it whenever the question is about what's *in* a tank (MLSS (Mixed Liquor Suspended Solids) inventory) rather than what flows *through* it.

**WHEN TO USE IT:** solids inventory for SRT (Solids Retention Time) and F/M (MLSS/MLVSS in the aeration tank), chemical needed to dose a tank.

**EASY EXAMPLE:** 1,000 mg/L in 1 m³ → 1,000 × 1 ÷ 1,000 = **1 kg**.

**LEVEL I EXAMPLE:** MLSS 2,800 mg/L in a 1,200 m³ aeration tank → 2,800 × 1,200 ÷ 1,000 = **3,360 kg**.
US: 2,800 mg/L in a 0.3 MG tank → 2,800 × 0.3 × 8.34 = **7,005.6 lb**.

**EXAM QUESTION:** *How many kg of MLSS are in a 1,500 m³ aeration tank at 3,000 mg/L?* → **4,500 kg**.

**COMMON MISTAKE:** using flow instead of volume (or vice versa). **Per day → flow. In the tank → volume.**

---

## C4. Chemical feed rate (kg/d) — including purity

**FORMULA:**
```
kg/day of pure chemical  = Dose (mg/L) × Flow (m³/d) ÷ 1,000
kg/day of product         = kg/day of pure chemical ÷ (purity as a decimal)
US: lb/day of product     = Dose (mg/L) × Flow (MGD) × 8.34 ÷ purity
```

**WHAT IT MEANS:** if the product isn't 100% active (e.g., calcium hypochlorite is 65% available chlorine), you need **more product** to deliver the same amount of active chemical.

**WHY IT WORKS (plain words):** If a product is only 65% chlorine, every 1 kg of product delivers only 0.65 kg of chlorine. To get the chlorine you need, you must use more product — so you **divide** by 0.65, which makes the number bigger. (Multiplying by 0.65 would make it smaller — the opposite of what you need.)

**WHEN TO USE IT:** chlorine, hypochlorite, alum, ferric, lime, polymer.

**EASY EXAMPLE:** 10 kg/d of chlorine needed, using a 50% product → 10 ÷ 0.5 = **20 kg/d** of product.

**LEVEL I EXAMPLE:** chlorine dose 6 mg/L, flow 3,000 m³/d → 6 × 3,000 ÷ 1,000 = **18 kg/d** of chlorine.
With **65% calcium hypochlorite (HTH)** → 18 ÷ 0.65 = **27.7 kg/d** of HTH (High-Test Hypochlorite, calcium hypochlorite).
US: 5 mg/L × 0.8 MGD × 8.34 = 33.36 lb/d Cl₂ (chlorine gas) → with 65% HTH: 33.36 ÷ 0.65 = **51.3 lb/d**.

**EXAM QUESTION:** *How many kg/d of liquid alum (48% strength) are needed to dose 30 mg/L into 2,000 m³/d?*
→ 30 × 2,000 ÷ 1,000 = 60 kg/d of alum ÷ 0.48 = **125 kg/d** of product.

**COMMON MISTAKES:**
- **Multiplying** by the purity instead of **dividing** (you need **more** product, so the answer must get **bigger**).
- Using 65 instead of 0.65.

---

## C5. Dose from a feed rate (working backwards)

**WHY IT WORKS (plain words):** This is the kg/day formula turned around. If you know how many kg per day you're feeding and how much water it's mixed into, then the dose (concentration) = mass ÷ water. The 1,000 converts kg back to grams so the units come out in mg/L.

**FORMULA:** `Dose (mg/L) = Feed (kg/d) × 1,000 ÷ Flow (m³/d)` · US: `Dose = lb/d ÷ (MGD × 8.34)`

**LEVEL I EXAMPLE:** a chlorinator feeds 15 kg/d into 2,500 m³/d → 15 × 1,000 ÷ 2,500 = **6 mg/L**.
US: 40 lb/d into 1.0 MGD → 40 ÷ (1.0 × 8.34) = **4.8 mg/L**.

**EXAM QUESTION:** *A chlorinator is set at 22 kg/d and plant flow is 4,400 m³/d. What is the dose?* → **5 mg/L**.

---

## C6. Chlorine dose, demand and residual

**FORMULA:** `Dose = Demand + Residual` → `Demand = Dose − Residual` → `Residual = Dose − Demand`

**WHAT IT MEANS:** what you add (dose) = what gets used up (demand) + what's left (residual). (Module 8.)

**WHY IT WORKS (plain words):** Chlorine is like money paying bills. The water has "bills" (ammonia, organics, iron, H₂S (hydrogen sulphide)) that use up chlorine first — that's the demand. Whatever is left over is the residual that keeps protecting the water. What you put in (dose) must cover the bills plus leave something over: dose = demand + residual.

**LEVEL I EXAMPLE:** demand 6.5 mg/L, desired residual 0.5 mg/L → dose = **7.0 mg/L**. At 4,000 m³/d → 7 × 4,000 ÷ 1,000 = **28 kg/d**.
**How long will a 68 kg cylinder last?** 68 ÷ 28 = **2.4 days**.

**EXAM QUESTION:** *Dose 8.0 mg/L; residual after contact 0.6 mg/L. Demand?* → **7.4 mg/L**.

**COMMON MISTAKE:** adding when you should subtract — say it out loud: "**dose is the biggest number**."

---

## C7. Percent removal (efficiency)

**FORMULA:** `% Removal = (In − Out) ÷ In × 100`

**WHAT IT MEANS:** what fraction of the incoming stuff the process took out.

**WHY IT WORKS (plain words):** You're asking "out of what came in, what fraction did we take out?" The amount taken out is In − Out. Dividing by In gives the fraction removed, and × 100 turns the fraction into a percent. It's always divided by **In**, because "percent removed" is a percent of what arrived.

**WHEN TO USE IT:** BOD, TSS, ammonia, phosphorus removal for a unit or the whole plant.

**EASY EXAMPLE:** in 100, out 10 → 90 ÷ 100 × 100 = **90%**.

**LEVEL I EXAMPLE:** BOD in 210 mg/L, out 14 mg/L → (210 − 14) ÷ 210 × 100 = 196 ÷ 210 × 100 = **93.3%**.

**EXAM QUESTION:** *Influent TSS 250 mg/L, effluent 20 mg/L. % removal?* → 230 ÷ 250 × 100 = **92%**.

**Rearranged — find effluent from % removal:** `Out = In × (1 − removal as decimal)`
*Influent BOD 200 mg/L, 90% removal → effluent = 200 × 0.10 = 20 mg/L.*

**COMMON MISTAKES:** dividing by **Out** instead of **In**; getting an answer over 100% (impossible — re-check).

---

## C8. Percent strength of a solution

**FORMULA:** `% strength = (mass of chemical ÷ mass of solution) × 100`
For water-based solutions: **1 L ≈ 1 kg**, so **1% ≈ 10 g per litre ≈ 10 kg per m³**.

**WHAT IT MEANS:** how concentrated a solution is.

**WHY IT WORKS (plain words):** Percent means "parts per hundred" by weight. Because 1 L of water weighs about 1 kg, 1,000 L of solution weighs about 1,000 kg — so a 0.25% solution contains 0.25 kg of chemical in every 100 kg, i.e., 2.5 kg in 1,000 kg.

**EASY EXAMPLE:** 1 kg of polymer in 100 kg of solution = **1%**.

**LEVEL I EXAMPLE:** make 1,000 L of 0.25% polymer → 1,000 kg × 0.0025 = **2.5 kg** of polymer.
US: 500 gal of 0.5% solution → 500 × 8.34 × 0.005 = **20.85 lb** of chemical.

**EXAM QUESTION:** *How many kg of dry polymer are needed for 2,000 L of 0.3% solution?* → 2,000 × 0.003 = **6 kg**.

**COMMON MISTAKE:** using 0.3 instead of 0.003.

---

## C9. Dilution — C₁V₁ = C₂V₂

**FORMULA:** `C₁ × V₁ = C₂ × V₂`
- C₁ = strength of the concentrated (stock) solution
- V₁ = volume of stock needed
- C₂ = strength you want
- V₂ = final volume you want

**WHAT IT MEANS:** the amount of chemical doesn't change when you add water — only the volume does.

**WHY IT WORKS (plain words):** When you add water to a chemical, the **amount** of chemical doesn't change — it just spreads out into more water. Amount = strength × volume. So (strength × volume) before = (strength × volume) after: C₁V₁ = C₂V₂.

**EASY EXAMPLE:** dilute 10% to 5% to make 10 L → V₁ = 5 × 10 ÷ 10 = **5 L** of stock + 5 L water.

**LEVEL I EXAMPLE:** make 20 L of 1% hypochlorite from 12% stock → V₁ = 1 × 20 ÷ 12 = **1.67 L** of 12% + **18.33 L** water.
US: make 50 gal of 2% from 15% → V₁ = 2 × 50 ÷ 15 = **6.67 gal** of 15%.

**EXAM QUESTION:** *How many litres of 12.5% sodium hypochlorite are needed to make 40 L of a 2% solution?* → 2 × 40 ÷ 12.5 = **6.4 L**.

**COMMON MISTAKE:** putting the numbers in the wrong spots. Check: the stock volume (V₁) must be **smaller** than the final volume (V₂).

### C9b. The dilution box — mixing two solutions (from EOCP's 2022 math guide)
Use it when you mix a **strong** solution with a **weak** one (not plain water) to get a strength in between.
```
 Strong  15% ─┐        ┌─  8 − 2.1 = 5.9 parts of the 15%
              ├─  8% ──┤
 Weak   2.1% ─┘        └─ 15 − 8  = 7.0 parts of the 2.1%
                              total = 12.9 parts
```
Subtract **diagonally** (ignore minus signs). *Make 2,500 L of 8%:* 15% → 5.9 ÷ 12.9 × 2,500 = **1,143 L**; 2.1% → 7.0 ÷ 12.9 × 2,500 = **1,357 L**. Check: 1,143 + 1,357 = 2,500 ✔.
**WHY IT WORKS:** the closer the target is to one solution, the more of that solution you need — so each side gets the "distance" from the *other* side.

---

## C10. Chemical feed pump setting (mL/min) — liquid chemicals

**FORMULA (metric — EOCP/ABC style):**
```
                     Flow (m³/d) × Dose (mg/L)
Feed (mL/min) = ─────────────────────────────────────────────────
                 Density (g/mL) × Active strength (decimal) × 1,440
```
**FORMULA (US):**
```
Feed (gpd) = lb/day of active chemical ÷ (8.34 × specific gravity × active strength)
```

**WHAT IT MEANS:** how fast a metering pump must deliver a liquid product to give the target dose.

**WHY IT WORKS (plain words):** Step by step: flow (m³/d) × dose (mg/L) = grams per day of pure chemical needed. The product is only partly active and each mL weighs a certain amount (density), so dividing by (density × active fraction) turns grams of pure chemical into mL of product per day. Dividing by 1,440 (minutes in a day) gives mL per minute for the pump.

> ⚠ **EOCP (Environmental Operators Certification Program)'s 2022 math guide notes the two sheet formulas don't match:** the metric version divides by the chemical's **% strength (as a decimal)** but the US version (MGD × mg/L × 3.785 × 1,000,000 ÷ (density mg/mL × 1,440)) does **not**. The guide says this is "under review by ABC/EOCP" and to **use the formula exactly as printed on the handout** for the units you choose. So: if the question gives a % strength, use the **metric** formula (or divide your US answer by the strength).

**WHY IT WORKS:** m³/d × mg/L = g/d of active chemical → ÷ (g/mL × fraction active) = mL/d of product → ÷ 1,440 min/d = mL/min.

**LEVEL I EXAMPLE:** flow 3,000 m³/d, dose 10 mg/L, sodium hypochlorite 12% with density 1.2 g/mL →
```
3,000 × 10 = 30,000
1.2 × 0.12 × 1,440 = 207.36
30,000 ÷ 207.36 = 144.7 mL/min
```
US: 33.36 lb/d of chlorine from 12.5% hypochlorite (SG (Specific Gravity) 1.2) → 33.36 ÷ (8.34 × 1.2 × 0.125) = 33.36 ÷ 1.251 = **26.7 gpd**.

**EXAM QUESTION:** *Flow 5,000 m³/d, dose 4 mg/L, 12% hypochlorite (density 1.2 g/mL). Pump setting?* → 20,000 ÷ 207.36 = **96.5 mL/min**.

**COMMON MISTAKE:** typing the bottom line without brackets (see 17A Lesson 1).

---

## C11. Sludge volume reduction when thickening

**WHY IT WORKS (plain words):** Thickening only removes water — the dry solids stay the same. If sludge goes from 2% to 4% solids, the same solids now sit in half as much water. So volume shrinks in the same ratio that % solids grows: V₂ = V₁ × (old % ÷ new %).

**FORMULA:** `V₂ = V₁ × (%₁ ÷ %₂)` (the dry solids stay the same; only the water changes)

**LEVEL I EXAMPLE:** 50 m³ of sludge at 2% thickened to 4% → 50 × 2 ÷ 4 = **25 m³** (half the volume).

**EXAM QUESTION:** *80 m³ of WAS (Waste Activated Sludge) at 1.5% is thickened to 5%. New volume?* → 80 × 1.5 ÷ 5 = **24 m³**.

**COMMON MISTAKE:** flipping the fraction — thicker sludge must have **less** volume.

---

## C12. Dry solids in a sludge flow

**WHY IT WORKS (plain words):** 1% solids = 10,000 mg/L = 10 kg of dry solids in every m³ of sludge. So each 1% gives 10 kg per m³. Multiply by the % and by the m³ per day pumped, and you get kg of dry solids per day.

**FORMULA (metric):** `kg/d dry solids = Sludge flow (m³/d) × % solids × 10`
*(Because 1% = 10,000 mg/L = 10 kg/m³.)*
**FORMULA (US):** `lb/d = Sludge (gpd) × 8.34 × (% ÷ 100)`

**LEVEL I EXAMPLE:** 30 m³/d of primary sludge at 4% → 30 × 4 × 10 = **1,200 kg/d** dry solids.
US: 6,000 gpd at 4% → 6,000 × 8.34 × 0.04 = **2,001.6 lb/d**.

**EXAM QUESTION:** *45 m³/d of thickened sludge at 3.5% solids — how many kg/d of dry solids?* → 45 × 3.5 × 10 = **1,575 kg/d**.

---

## C13. Converting mg/L ↔ %

**WHY IT WORKS (plain words):** 1% = 10,000 mg/L, so to go from mg/L to % divide by 10,000; to go from % to mg/L multiply by 10,000.

- **% = mg/L ÷ 10,000** → 25,000 mg/L = **2.5%**
- **mg/L = % × 10,000** → 0.8% = **8,000 mg/L**

---

## Practice set 17C (answers below)

1. Influent BOD is 180 mg/L at 6,000 m³/d. BOD load in kg/d?
2. TSS 210 mg/L, flow 2.4 ML/d. Load in kg/d?
3. US: BOD 250 mg/L at 0.75 MGD. Load in lb/d?
4. BOD in 200 mg/L, out 10 mg/L, flow 5,000 m³/d. kg/d removed?
5. MLSS 3,000 mg/L in a 1,500 m³ tank. kg of MLSS?
6. Chlorine dose 7 mg/L at 4,000 m³/d. kg/d of chlorine? How many days will a 68 kg cylinder last?
7. How many kg/d of 65% HTH supply 28 kg/d of chlorine?
8. US: chlorine dose 6 mg/L at 1.5 MGD. lb/d?
9. A chlorinator feeds 22 kg/d into 4,400 m³/d. Dose?
10. Chlorine demand 6.2 mg/L, residual 0.8 mg/L. Dose? kg/d at 3,500 m³/d?
11. TSS in 260 mg/L, out 13 mg/L. % removal?
12. Influent BOD 180 mg/L, removal 94%. Effluent BOD?
13. kg of dry polymer for 2,000 L of 0.3% solution?
14. Litres of 12.5% hypochlorite to make 40 L of 2%?
15. Feed pump setting: 5,000 m³/d, dose 4 mg/L, 12% hypochlorite, density 1.2 g/mL?
16. 80 m³ of sludge at 1.5% thickened to 5%. New volume?
17. 45 m³/d of sludge at 3.5%. Dry solids kg/d?
18. US: 8,000 gpd of sludge at 4%. Dry solids lb/d?
19. Express 25,000 mg/L as a percent.
20. Liquid alum (48%) to dose 30 mg/L at 2,000 m³/d. kg/d of product?

---

### Answers 17C
| # | Answer | Work |
|---|---|---|
| 1 | **1,080 kg/d** | 180 × 6,000 ÷ 1,000 |
| 2 | **504 kg/d** | 210 × 2.4 |
| 3 | **1,563.75 lb/d** | 250 × 0.75 × 8.34 |
| 4 | **950 kg/d** | (200 − 10) × 5,000 ÷ 1,000 |
| 5 | **4,500 kg** | 3,000 × 1,500 ÷ 1,000 |
| 6 | **28 kg/d; 2.4 days** | 7 × 4,000 ÷ 1,000; 68 ÷ 28 = 2.43 |
| 7 | **43.1 kg/d** | 28 ÷ 0.65 |
| 8 | **75.06 lb/d** | 6 × 1.5 × 8.34 |
| 9 | **5 mg/L** | 22 × 1,000 ÷ 4,400 |
| 10 | **7.0 mg/L; 24.5 kg/d** | 6.2 + 0.8; 7 × 3,500 ÷ 1,000 |
| 11 | **95%** | 247 ÷ 260 × 100 |
| 12 | **10.8 mg/L** | 180 × 0.06 |
| 13 | **6 kg** | 2,000 × 0.003 |
| 14 | **6.4 L** | 2 × 40 ÷ 12.5 |
| 15 | **96.5 mL/min** | 5,000 × 4 = 20,000 ÷ (1.2 × 0.12 × 1,440 = 207.36) |
| 16 | **24 m³** | 80 × 1.5 ÷ 5 |
| 17 | **1,575 kg/d** | 45 × 3.5 × 10 |
| 18 | **2,668.8 lb/d** | 8,000 × 8.34 × 0.04 |
| 19 | **2.5%** | 25,000 ÷ 10,000 |
| 20 | **125 kg/d** | 30 × 2,000 ÷ 1,000 = 60 ÷ 0.48 |
