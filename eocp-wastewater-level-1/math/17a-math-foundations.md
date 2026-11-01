# Math 17A — Math Foundations (Absolute Beginner)

← [Course index](../README.md) · Next → [17B — Area, Volume, Flow & Time](17b-area-volume-flow-time.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **BOD** = Biochemical Oxygen Demand · **cfs** = cubic feet per second · **DT** = Detention Time · **EOCP** = Environmental Operators Certification Program · **F/M** = Food-to-Microorganism ratio · **gpm** = gallons per minute · **kPa** = kilopascal · **L/s** = litres per second · **mg/L** = milligrams per litre · **MGD** = Million Gallons per Day · **ML** = megalitre (1,000 m³) · **mL** = millilitre · **m³/d** = cubic metres per day · **m³/m²·d** = cubic metres per square metre per day · **OSHA** = Occupational Safety and Health Administration (US) · **psi** = pounds per square inch · **SOR** = Surface Overflow Rate · **SRT** = Solids Retention Time · **SVI** = Sludge Volume Index · **TSS** = Total Suspended Solids
<!-- abbr-end -->

> **Read this first if math makes you nervous.** Wastewater math is **not** advanced math. It's the same few skills used over and over: multiply, divide, convert units, and plug numbers into a formula you're **given on the exam sheet**. This lesson teaches those skills from zero. Go slowly. Do every practice question. It gets easier every day.

**How much math is on the exam?** Good news: the official 2025 Need-to-Know says only **about 10 of the 100 questions are calculations** — **9 in Treatment Process** and **1 in Laboratory** (none in Equipment or Safety/Admin). Each calculation question gives **US units first, with metric in brackets**, and you can solve it in **either** system. You get a **formula/conversion sheet** at the exam, so you don't have to memorize formulas — you have to **recognize which one to use** and **use it correctly**.

**Calculator:** Use a basic or scientific calculator (check EOCP (Environmental Operators Certification Program)'s current rules on which calculators are allowed). Practise with the **same calculator** you'll bring to the exam.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Water Operator Math: The Pounds Formula Explained (lbs/day, Dose, Flow)](https://www.youtube.com/watch?v=SjajSl783jc) · [mg/L to lbs/day Explained](https://www.youtube.com/watch?v=vmCvSvYvACU) · [Problem Solved: Detention Time Problem — Wastewater Math](https://www.youtube.com/watch?v=QWpbTKUuBro) · [Problem Solved: Flow Rate Formula](https://www.youtube.com/watch?v=B1rjSaOIm-s) · [Surface overflow rate (SOR) / Surface loading rate](https://www.youtube.com/watch?v=-cHHc67usc0) · [Weir loading rate / Weir overflow rate](https://www.youtube.com/watch?v=IMX7zhQ7C6Y) · [MGD to GPM](https://www.youtube.com/watch?v=fgAcVOLyM4U) · [Activated Sludge Process Control Calculations (webinar)](https://www.youtube.com/watch?v=5OeIVQzEnkE)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## Lesson 1 — The calculator and the order of operations

### 1.1 Order of operations (BEDMAS)
When a calculation has several steps, do them in this order:

| Letter | Means | Example |
|---|---|---|
| **B** | **Brackets** first | (2 + 3) × 4 = 5 × 4 = **20** |
| **E** | **Exponents** (squares, like D²) | 3² = 3 × 3 = **9** |
| **D/M** | **Division and Multiplication**, left to right | 12 ÷ 3 × 2 = 4 × 2 = **8** |
| **A/S** | **Addition and Subtraction**, left to right | 10 − 4 + 1 = **7** |

**Why it matters:** 2 + 3 × 4 is **14** (multiply first), **not** 20.

**Calculator tip:** when a formula has a top and a bottom (a fraction), **calculate the top, calculate the bottom, then divide** — or use brackets:
```
           840 × 24                      type it as:  840 × 24 ÷ 9000
   DT =  ───────────          or        or:          (840 × 24) ÷ (9000)
            9000
```
If the **bottom** has more than one number multiplied together, put the bottom in brackets:
```
              30000                  type:  30000 ÷ (1.2 × 0.12 × 1440)
   ─────────────────────────         NOT:   30000 ÷ 1.2 × 0.12 × 1440   ← wrong!
      1.2 × 0.12 × 1440
```

### 1.2 Rounding
- **Don't round in the middle** of a problem — keep all the digits until the final answer.
- Round the **final** answer to match the answer choices (usually 1–2 decimal places).
- If your answer is 3.287 and the choices are 3.3, 4.1, 32.9, 0.33 → pick **3.3**.

---

## Lesson 2 — Decimals

### 2.1 Place value
```
   1 , 2 3 4 . 5 6 7
   │   │ │ │   │ │ └── thousandths (0.001)
   │   │ │ │   │ └──── hundredths   (0.01)
   │   │ │ │   └────── tenths       (0.1)
   │   │ │ └────────── ones
   │   │ └──────────── tens
   │   └────────────── hundreds
   └────────────────── thousands
```

### 2.2 Multiplying and dividing by 10, 100, 1,000 — just move the decimal point
| Operation | Move the decimal | Example |
|---|---|---|
| × 10 | 1 place **right** | 4.5 × 10 = **45** |
| × 100 | 2 places right | 4.5 × 100 = **450** |
| × 1,000 | 3 places right | 4.5 × 1,000 = **4,500** |
| ÷ 10 | 1 place **left** | 4.5 ÷ 10 = **0.45** |
| ÷ 100 | 2 places left | 4.5 ÷ 100 = **0.045** |
| ÷ 1,000 | 3 places left | 4.5 ÷ 1,000 = **0.0045** |

**This is how most metric conversions work** (1 m³ = 1,000 L, so 4.5 m³ = 4,500 L).

**Quick check:** multiplying by a number **bigger than 1** makes the answer **bigger**; multiplying by a number **smaller than 1** (like 0.785 or 0.75) makes it **smaller**.

---

## Lesson 3 — Fractions

A fraction is just a **division**: the top **divided by** the bottom.
```
    3
   ───   =  3 ÷ 4  =  0.75
    4
```
| Fraction | Decimal | Percent |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/3 | 0.333 | 33.3% |
| 1/10 | 0.1 | 10% |
| 1/100 | 0.01 | 1% |

**Most wastewater formulas are fractions:** detention time = Volume **÷** Flow, SOR = Flow **÷** Area, % removal = (In − Out) **÷** In × 100.

---

## Lesson 4 — Percent

**Percent (%) means "out of 100".** 25% = 25 out of 100 = 0.25.

### 4.1 Converting
| From → To | How | Example |
|---|---|---|
| **Percent → decimal** | **÷ 100** (move decimal 2 left) | 65% → **0.65**; 4% → **0.04**; 0.5% → **0.005** |
| **Decimal → percent** | **× 100** (move decimal 2 right) | 0.93 → **93%**; 0.125 → **12.5%** |

> **The #1 math mistake on operator exams:** using 65 instead of 0.65 (or 4 instead of 0.04) in a formula. **Always convert % to a decimal before putting it into a formula** (unless the formula says "%" and handles it).

### 4.2 Three percent questions you'll see

**(a) What is X% of a number?** → **number × (X ÷ 100)**
- 75% of 2,400 mg/L (milligrams per litre) = 2,400 × 0.75 = **1,800 mg/L**

**(b) What percent is A of B?** → **(A ÷ B) × 100**
- 1,950 mg/L is what % of 2,500 mg/L? 1,950 ÷ 2,500 × 100 = **78%**

**(c) Percent removal / percent change** → **(Start − End) ÷ Start × 100**
- BOD (Biochemical Oxygen Demand) in 200, out 15: (200 − 15) ÷ 200 × 100 = 185 ÷ 200 × 100 = **92.5%**

### 4.3 Percent concentration
- **1% solution = 10,000 mg/L** (for water-like liquids).
- 4% sludge = 4 × 10,000 = **40,000 mg/L**.
- 0.5% = 0.5 × 10,000 = **5,000 mg/L**.

---

## Lesson 5 — Ratios and proportions

A **ratio** compares two amounts: BOD : N : P = 100 : 5 : 1 means "for every 100 parts BOD, you need 5 parts N and 1 part P".

**Proportion (scaling up):** If 100 mg/L BOD needs 5 mg/L N, how much N does 240 mg/L BOD need?
```
   5          N
  ───   =   ───        →  cross-multiply:  N = 5 × 240 ÷ 100 = 12 mg/L
  100        240
```
**Cross-multiplication:** if a/b = c/d, then **a × d = b × c**.

---

## Lesson 6 — Rearranging formulas (no algebra fear)

The exam sheet gives formulas in one form, e.g. **DT = V ÷ Q**. But the question may give DT and Q and ask for V. You need to **rearrange**.

### 6.1 The triangle method (works for any formula with 3 parts: A = B × C, or A = B ÷ C)

```
            ┌─────┐
            │  V  │        ← the one that's "on top" (the product)
            ├──┬──┤
            │DT│ Q│        ← the two multiplied together
            └──┴──┘

   Cover what you want:
   • want V?  → DT × Q          (they're side by side → multiply)
   • want DT? → V ÷ Q           (V is above Q → divide)
   • want Q?  → V ÷ DT
```

**Use the triangle for:**
| Formula | Triangle top | Bottom two |
|---|---|---|
| Q = A × V (flow) | Q | A, V |
| V = DT × Q (volume, detention time) | Volume | DT, Flow |
| Q = SOR × Area | Flow | SOR, Area |
| kg/d = mg/L × m³/d (cubic metres per day) ÷ 1,000 | (treat "mg/L × m³/d" carefully — see 17C) | |
| V = I × R (Ohm's law) | V | I, R |
| Distance = velocity × time | Distance | V, t |

> **On the official exam sheet these triangles are drawn as "pie wheels"** (circles split into wedges). Same rule: the top = the bottom wedges multiplied; cover the one you want and divide. See [the formula sheet page](formula-and-conversion-sheet.md#pie-wheels-last-page-of-the-official-sheet).

### 6.2 The "do the same to both sides" method
If **DT = V ÷ Q** and you want **V**: multiply both sides by Q → **V = DT × Q**.
If **Dose = Demand + Residual** and you want **Demand**: subtract Residual from both sides → **Demand = Dose − Residual**.

---

## Lesson 7 — Units: the secret to getting math right

### 7.1 Metric prefixes
| Prefix | Means | Example |
|---|---|---|
| **mega- (M)** | 1,000,000 | 1 ML = 1,000,000 L |
| **kilo- (k)** | 1,000 | 1 kg = 1,000 g; 1 km = 1,000 m; 1 kPa (kilopascal) = 1,000 Pa |
| (base unit) | 1 | gram, metre, litre |
| **centi- (c)** | 1/100 | 1 m = 100 cm |
| **milli- (m)** | 1/1,000 | 1 L = 1,000 mL; 1 g = 1,000 mg |
| **micro- (µ)** | 1/1,000,000 | recognize |

### 7.2 Key metric facts for water (memorize)
- **1 m³ = 1,000 L**
- **1 L of water weighs 1 kg** (so 1 m³ of water = 1,000 kg = 1 tonne)
- **1 ML (megalitre) = 1,000 m³ = 1,000,000 L**
- **1 mg/L = 1 g/m³ = 1 kg/ML**
- **1 day = 24 h = 1,440 min = 86,400 s**

### 7.3 Key US facts (memorize — they're also on the sheet)
- **1 ft³ = 7.48 gal**
- **1 gal of water = 8.34 lb**
- **1 MGD (Million Gallons per Day) = 1,000,000 gal/day ≈ 694 gpm (gallons per minute) ≈ 1.55 cfs (cubic feet per second)**
- **1 psi (pounds per square inch) = 2.31 ft of water**

### 7.4 Converting units with "unit fractions" (the safest method)

A conversion factor written as a fraction is just **"1"** (top and bottom are the same amount), so multiplying by it doesn't change the value — only the units.

**Example:** convert **4,500 m³/d to L/s (litres per second)**.
```
 4,500 m³    1,000 L      1 d        1 h        1 min
 ──────── × ───────── × ─────── × ──────── × ───────  = 52.08 L/s
    d          1 m³       24 h      60 min      60 s
```
**Cancel units that appear on top and bottom.** What's left (L/s) is your answer unit. If the units don't cancel to what you want, the setup is wrong — that's your **built-in error check**.

### 7.4b Using the EOCP Conversion Chart (given at the exam)
The chart shows units in circles joined by arrows with a number on each arrow.
- **Going the same way as the arrow → MULTIPLY** by the number.
- **Going against the arrow → DIVIDE** by the number.

| Question | Arrow on the chart | Direction | Work |
|---|---|---|---|
| 5 psi = ? kPa | psi → kPa (6.895) | with the arrow | 5 × 6.895 = **34.5 kPa** |
| 150 kPa = ? psi | psi → kPa (6.895) | against | 150 ÷ 6.895 = **21.8 psi** |
| 2 m³ = ? US gal | m³ → US gal (264.2) | with | 2 × 264.2 = **528 gal** |
| 500 US gal = ? m³ | m³ → US gal (264.2) | against | 500 ÷ 264.2 = **1.89 m³** |
| 10 ft = ? m | m → ft (3.28) | against | 10 ÷ 3.28 = **3.05 m** |
| 2.5 kg = ? lb | kg → lb (2.205) | with | 2.5 × 2.205 = **5.5 lb** |

**Check:** converting to a **smaller** unit (m → cm, kg → g) should give a **bigger** number. If it doesn't, you went the wrong way.
**Trap:** the chart also lists **Imperial gallons** (4.54 L). Exam gallons are **US gallons** (3.785 L).

### 7.5 Squares and square roots
- **D² ("D squared")** = D × D. If D = 18 m, D² = 18 × 18 = **324 m²**.
- **Square root (√)** undoes a square: √324 = 18. (Rare at Level I — e.g., finding diameter from area.)
- **Units square too:** m × m = m²; m × m × m = m³.

### 7.6 Averages
- **Mean (average)** = add all values ÷ number of values.
  - Effluent TSS (Total Suspended Solids) for 5 days: 12, 15, 9, 14, 10 → (12 + 15 + 9 + 14 + 10) ÷ 5 = 60 ÷ 5 = **12 mg/L**.
- **Median** = middle value when sorted (recognize).

---

## Lesson 8 — The 8-step method for every word problem

```
1. READ THE LAST LINE      What are they asking for? In what UNITS?
2. LIST THE GIVENS         Write every number WITH its unit.
3. DRAW IT                  A quick sketch of the tank/pipe/channel.
4. PICK THE FORMULA        From the sheet. Which formula has the thing you want + the things you have?
5. CONVERT UNITS FIRST     Make the units match the formula (e.g., m³/d, %, hours).
6. PLUG IN & CALCULATE     Carefully, with brackets.
7. CHECK THE ANSWER        Does it make sense? (DT of a clarifier ≈ 1–4 h, not 400 h.)
8. MATCH THE CHOICE        Round to fit the options.
```

**Sanity-check ranges (if your answer is way outside, re-check):**
| Calculation | Usual range |
|---|---|
| Clarifier detention time | ~1–4 hours |
| Aeration detention time | ~4–36 hours |
| Grit channel velocity | ~0.3 m/s (1 ft/s) |
| Primary SOR | ~30–50 m³/m²·d (800–1,200 gpd/ft²) |
| Secondary SOR | ~16–32 m³/m²·d (400–800 gpd/ft²) |
| F/M (Food-to-Microorganism ratio) | ~0.05–0.6 |
| SVI (Sludge Volume Index) | ~50–200 mL/g |
| SRT (Solids Retention Time) | ~3–30+ days |
| Chlorine dose | ~2–20 mg/L |
| % removal | 0–100% (can't be over 100!) |

### Lesson 8b — Long word problems: work BACKWARDS (EOCP's *Guide to Solving Math Problems*)

Long questions give you a whole story — most of it is **chaff** (extra details). Don't start calculating from the first number you see. Instead:

1. **Start from the question.** What do they want, and in what **units**? (e.g., "hours per week")
2. **Hunt for numbers with matching units.** Need hours? Look for anything "per hour" or "per day".
3. **Ask what you need to use that number.** A rate in **kg per hour** → you need **kg** → that's the **kg formula** (concentration × flow).
4. **"Per" means divide.** m³ per hour = m³ ÷ hours.
5. **Then write it out forwards**, step by step, each answer feeding the next.

**EOCP's example (short version):** a plant sends **227 m³/day** of mixed sludge at **2.5% solids** to **two centrifuges** running together, each rated at **272 kg/hour**. (The story also gives polymer bag sizes, prices, hopper sizes and landfill costs — **all chaff**.) *If one centrifuge breaks down, how many more hours per week must the other run?*
| Step | Work | Result |
|---|---|---|
| 1. % → mg/L | 2.5% × 10,000 | 25,000 mg/L (= 25 kg/m³) |
| 2. kg per day | 25 kg/m³ × 227 m³/d | 5,675 kg/d |
| 3. Hours per day (one machine does it all) | 5,675 ÷ 272 | 20.86 h/d |
| 4. Each machine's share now | 20.86 ÷ 2 | 10.43 h/d each |
| 5. Extra hours per week for the survivor | 10.43 × 7 | **≈ 73 hours/week** |

**Why it works:** the broken machine's 10.43 h/d of work moves to the other one, every day of the week.
*"How do you eat an elephant? One bite at a time."*

---

## Practice set 17A (answers at the bottom — cover them!)

**Order of operations & decimals**
1. 6 + 4 × 5 = ?
2. (6 + 4) × 5 = ?
3. 3.75 × 1,000 = ?
4. 2,250 ÷ 1,000 = ?
5. 840 × 24 ÷ 9,000 = ? (round to 2 decimals)

**Fractions & percent**
6. Convert 3/8 to a decimal.
7. Convert 12.5% to a decimal.
8. Convert 0.065 to a percent.
9. What is 78% of 3,200 mg/L?
10. 280 is what percent of 350?
11. Influent TSS 240 mg/L, effluent TSS 18 mg/L. What is the % removal?
12. Express 3.5% solids in mg/L.
13. Express 15,000 mg/L as a percent.

**Ratio & rearranging**
14. Using BOD:N:P = 100:5:1, how much phosphorus is needed for 300 mg/L BOD?
15. If DT = V ÷ Q, write the formula for Q.
16. If Q = A × V, and Q = 0.6 m³/s, A = 2 m², find V.
17. Dose = 9 mg/L, residual = 0.8 mg/L. What is the demand?

**Units**
18. How many litres are in 2.4 m³?
19. How many m³ are in 3.2 ML?
20. How many minutes are in one day?
21. Convert 7,200 m³/d to m³/h.
22. Convert 7,200 m³/d to L/s.
23. Convert 1,200 ft³ to gallons.
24. How many pounds does 500 gallons of water weigh?
25. Calculate 22².
26. Find the average of: 8.2, 7.6, 7.9, 8.1, 7.7.
27. Using the conversion chart rule, convert 40 m³ to ft³ (arrow: m³ → ft³ × 35.31).
28. Convert 12 L to US gallons (arrow: US gal → L × 3.785).
29. A gauge reads 30 m of water. Convert to psi (arrow: m → psi × 1.42).

---

### Answers 17A
| # | Answer | Work |
|---|---|---|
| 1 | **26** | 4 × 5 = 20 first, + 6 = 26 |
| 2 | **50** | brackets first: 10 × 5 |
| 3 | **3,750** | decimal 3 places right |
| 4 | **2.25** | decimal 3 places left |
| 5 | **2.24** | 840 × 24 = 20,160; ÷ 9,000 = 2.24 |
| 6 | **0.375** | 3 ÷ 8 |
| 7 | **0.125** | 12.5 ÷ 100 |
| 8 | **6.5%** | 0.065 × 100 |
| 9 | **2,496 mg/L** | 3,200 × 0.78 |
| 10 | **80%** | 280 ÷ 350 × 100 |
| 11 | **92.5%** | (240 − 18) ÷ 240 × 100 = 222 ÷ 240 × 100 |
| 12 | **35,000 mg/L** | 3.5 × 10,000 |
| 13 | **1.5%** | 15,000 ÷ 10,000 |
| 14 | **3 mg/L** | 1 × 300 ÷ 100 |
| 15 | **Q = V ÷ DT** | triangle |
| 16 | **0.3 m/s** | V = Q ÷ A = 0.6 ÷ 2 |
| 17 | **8.2 mg/L** | 9 − 0.8 |
| 18 | **2,400 L** | × 1,000 |
| 19 | **3,200 m³** | × 1,000 |
| 20 | **1,440 min** | 24 × 60 |
| 21 | **300 m³/h** | 7,200 ÷ 24 |
| 22 | **83.33 L/s** | 7,200 × 1,000 ÷ 86,400 |
| 23 | **8,976 gal** | 1,200 × 7.48 |
| 24 | **4,170 lb** | 500 × 8.34 |
| 25 | **484** | 22 × 22 |
| 26 | **7.9** | (8.2 + 7.6 + 7.9 + 8.1 + 7.7) = 39.5 ÷ 5 |
| 27 | **1,412 ft³** | 40 × 35.31 (with the arrow) |
| 28 | **3.17 US gal** | 12 ÷ 3.785 (against the arrow) |
| 29 | **42.6 psi** | 30 × 1.42 (with the arrow) |
