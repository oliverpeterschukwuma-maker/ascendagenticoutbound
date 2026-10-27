# Module 15 — Laboratory & Sampling

← [Module 14](14-electrical-mechanical.md) · [Course index](../README.md) · Next → [Module 16 — Troubleshooting](16-troubleshooting.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **BOD** = Biochemical Oxygen Demand · **CaCO₃** = calcium carbonate · **CBOD** = Carbonaceous Biochemical Oxygen Demand · **COC** = Chain of Custody · **COD** = Chemical Oxygen Demand · **DO** = Dissolved Oxygen · **DPD** = N,N-diethyl-p-phenylenediamine (chlorine test reagent) · **F/M** = Food-to-Microorganism ratio · **GGA** = Glucose–Glutamic Acid (BOD check standard) · **H₂SO₄** = sulphuric acid · **ISE** = Ion-Selective Electrode · **mg/L** = milligrams per litre · **mL** = millilitre · **MLSS** = Mixed Liquor Suspended Solids · **MLVSS** = Mixed Liquor Volatile Suspended Solids · **MPN** = Most Probable Number · **NH₃** = ammonia · **NH₃-N** = ammonia measured as nitrogen · **NO₂** = nitrite · **NO₂-N** = nitrite measured as nitrogen · **NO₃** = nitrate · **NO₃-N** = nitrate measured as nitrogen · **NTK** = Need-to-Know Criteria · **NTU** = Nephelometric Turbidity Unit · **OSHA** = Occupational Safety and Health Administration (US) · **O₂** = oxygen · **PPE** = Personal Protective Equipment · **QA** = Quality Assurance · **QC** = Quality Control · **RAS** = Return Activated Sludge · **SDS** = Safety Data Sheet · **SOP** = Standard Operating Procedure · **SOPs** = Standard Operating Procedures · **SRT** = Solids Retention Time · **SSV₃₀** = Settled Sludge Volume after 30 minutes · **SVI** = Sludge Volume Index · **TDS** = Total Dissolved Solids · **TKN** = Total Kjeldahl Nitrogen · **TS** = Total Solids · **TSS** = Total Suspended Solids · **UV** = Ultraviolet · **VA/ALK** = Volatile Acids to Alkalinity ratio · **VSS** = Volatile Suspended Solids · **WAS** = Waste Activated Sludge
<!-- abbr-end -->

**NTK (Need-to-Know Criteria) area:** Laboratory Analysis (≈10% of the exam) — plus lab results appear in many process questions. Math: BOD (Biochemical Oxygen Demand), TSS (Total Suspended Solids), VSS (Volatile Suspended Solids), % removal, SVI ([Math 17D](../math/17d-process-pumps-pressure-lab.md)).

> **Why the lab matters:** you can't control what you don't measure. Lab results tell you how the process is working and prove to regulators that the effluent meets the permit. **A perfect test on a bad sample is still a bad result** — so sampling is just as important as testing.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Biochemical Oxygen Demand (BOD) test: How to do](https://www.youtube.com/watch?v=PnX83_d11GI) · [BOD Test Procedure Explained](https://www.youtube.com/watch?v=Q_1JTkhOGPY) · [Total Suspended Solids (TSS) Demonstration (Clemson University lab)](https://www.youtube.com/watch?v=K98KUOFrFpw) · [How to determine TS, TSS, TDS, TFS, TVS](https://www.youtube.com/watch?v=MicvXMlQ3es) · [How to Calibrate pH Sensors with Two Buffer Solutions](https://www.youtube.com/watch?v=wHTM3f-v-9I)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## 1. What you need to know (checklist)

**Sampling**
- [ ] **Representative sampling** — what it means and how to get it
- [ ] **Grab vs composite** samples; time- vs flow-proportional composites; which tests **must** be grab samples
- [ ] **Sampling locations** (influent, process, effluent)
- [ ] **Sample containers** (plastic, glass, sterile), labelling
- [ ] **Preservation** (cooling, acid) and **holding times**
- [ ] **Chain of custody**
- [ ] **QA/QC**: calibration, blanks, duplicates, standards, records

**Tests (for each: what it measures, why operators care, what high/low means)**
- [ ] pH, temperature, DO (Dissolved Oxygen), BOD/CBOD, COD (Chemical Oxygen Demand), TSS, VSS, settleable solids, MLSS (Mixed Liquor Suspended Solids), MLVSS (Mixed Liquor Volatile Suspended Solids), settleometer/SVI
- [ ] Ammonia, nitrite, nitrate, phosphorus, alkalinity
- [ ] Chlorine residual, turbidity, *E. coli*/fecal coliform
- [ ] Lab safety

---

## 2. Plain-English teaching — SAMPLING

### 2.1 Representative sampling

A **representative sample** truly reflects the water you're trying to measure. A bad sample gives a wrong answer no matter how good the lab work is.

**How to get a representative sample:**
- Sample where the flow is **well mixed** (turbulent) — e.g., just downstream of a weir drop or in a channel, not in a dead corner.
- **Avoid** surface scum, floating material, and bottom deposits (unless that's what you're sampling).
- Sample at the **same location and time** each time so results are comparable.
- Use **clean** equipment; rinse with sample water first (except for bacteria and some tests where containers are pre-prepared).
- Keep **automatic sampler** intake lines clean; make sure the intake is submerged in flowing water.
- Mix composite containers well before pouring off sub-samples.

### 2.2 Grab vs composite samples

| | **Grab sample** | **Composite sample** |
|---|---|---|
| What | **One** sample collected at **one time** | **Many** small samples **combined** over a period (usually 24 h) |
| Shows | Conditions at **that moment** | **Average** conditions over the period |
| Used for | Tests that **change quickly** or can't be composited | BOD, COD, TSS, nutrients for **loading and permit** reporting |

**MUST be grab samples (memorize):** **pH, temperature, DO, chlorine residual, bacteria (*E. coli*/fecal coliform), oil & grease, sulphide.** These change quickly or are affected by the compositing process.

**Composite types:**
- **Time-proportional** — equal volume every set time interval (e.g., 100 mL every hour).
- **Flow-proportional** — **sample volume (or frequency) proportional to flow** → **most representative** of the actual load, because high-flow periods contribute more. **[SUPPLEMENTAL]**
- Composite samples must be **kept cold (≤ 6 °C, not frozen)** during collection — refrigerated samplers.

### 2.3 Sampling locations

| Location | Why |
|---|---|
| **Influent** (raw) | Incoming load; % removal calculation. Usually after screening/grit, **before** return streams join (so you measure what the community sends) |
| **Primary effluent** | Primary performance; load on secondary |
| **Mixed liquor** (aeration tank) | MLSS, MLVSS, settleometer, DO, microscope |
| **RAS (Return Activated Sludge) / WAS (Waste Activated Sludge)** | Solids for wasting calculations |
| **Secondary/final effluent** | Process performance; permit compliance |
| **After disinfection** | Bacteria, chlorine residual (after dechlorination too) |
| **Digesters / sludge** | % solids, volatile solids, VA/alkalinity, pH |
| **Receiving water** (if required) | Upstream/downstream impact |

### 2.4 Containers, labels, preservation & holding times

**Containers**
- **Plastic** (polyethylene) for most tests.
- **Glass** for **oil & grease** and some organics.
- **Sterile** bottles for **bacteria** — often pre-dosed with **sodium thiosulphate** to neutralize chlorine (so chlorine doesn't keep killing bacteria after sampling). Don't rinse; don't touch the inside of the cap or bottle.
- **BOD** sample bottles should be filled to minimize air.

**Label every sample** with: location, date, time, sampler's name, sample type (grab/composite), preservative, tests required.

**Preservation & holding times [SUPPLEMENTAL — common Standard Methods / regulatory values; your lab's SOP (Standard Operating Procedure) and permit govern]**
| Test | Preservation | Max holding time |
|---|---|---|
| **pH** | None | **Analyze immediately** (~15 min) |
| **Temperature** | None | **Immediately, on site** |
| **DO** | None (probe) / fix on site (Winkler) | **Immediately** |
| **Chlorine residual** | None | **Immediately** (~15 min) |
| **BOD / CBOD (Carbonaceous Biochemical Oxygen Demand)** | **Cool ≤ 6 °C** | **48 h** (start as soon as possible) |
| **TSS / VSS** | Cool ≤ 6 °C | 7 days |
| **COD** | Cool; **H₂SO₄ (sulphuric acid) to pH < 2** | 28 days |
| **Ammonia, TKN (Total Kjeldahl Nitrogen)** | Cool; **H₂SO₄ to pH < 2** | 28 days |
| **Nitrite, nitrate** (unpreserved) | Cool ≤ 6 °C | **48 h** |
| **Total phosphorus** | Cool; H₂SO₄ to pH < 2 | 28 days |
| **Orthophosphate** | Filter promptly; cool | 48 h |
| ***E. coli* / fecal coliform** | Cool (< 10 °C), sterile bottle with thiosulphate | **About 8 hours** (start incubation ASAP) |
| **Oil & grease** | Glass; acid; cool | 28 days |

**Main ideas:** **Cool** almost everything; **acid** for nutrients/COD; **analyze immediately**: pH, temp, DO, chlorine residual; **bacteria within hours**.

### 2.5 Chain of custody

A **chain of custody (COC)** form is the paper (or electronic) trail that records **every person who had the sample, from collection to analysis**, with dates, times and signatures. It proves the sample wasn't tampered with — essential for **permit/legal** samples and for samples sent to outside labs.
Typical info: sample ID, location, date/time collected, collector, preservation, tests requested, and **signatures for each transfer** ("relinquished by / received by").

### 2.6 QA/QC (Quality Assurance / Quality Control)

**QA** (Quality Assurance) = the overall program that makes results reliable (training, SOPs (Standard Operating Procedures), documentation). **QC** (Quality Control) = the specific checks done with the tests:
| QC check | Purpose |
|---|---|
| **Instrument calibration** (pH buffers, DO, balances, spectrophotometers) | Accurate readings |
| **Blanks** (e.g., BOD dilution-water blank) | Detect contamination |
| **Duplicates** (test the same sample twice) | Check **precision** (repeatability) |
| **Standards / check samples** (e.g., GGA (Glucose–Glutamic Acid, BOD check standard) for BOD) | Check **accuracy** |
| **Spikes** (add known amount) | Check recovery/interference (recognize) |
| **Control charts** | Spot drift and trends |
| **Records**: bench sheets, logbooks, temperatures of fridges/incubators/ovens, reagent dates | Defensible data |

Permit/compliance testing may need to be done by an **accredited laboratory** (check your permit/authorization). **[GENERAL]**

---

## 2B. THE TESTS — what, why, high/low

### 2.7 pH
- **Measures:** acidity/basicity (0–14). **Method:** pH meter (calibrated with buffers).
- **Why:** bugs work best ~6.5–8.5; nitrification lowers pH; digesters need ~6.8–7.2; chlorine works better at lower pH; permit limits.
- **High:** industrial (caustic) discharge, algae in lagoons (afternoon), lime overdose. **Low:** acid discharge, nitrification consuming alkalinity, sour digester, alum/ferric overdose, septic conditions.

### 2.8 Temperature
- **Measures:** °C (°F). **Method:** calibrated thermometer, on site.
- **Why:** controls biological rates (nitrification!), DO saturation, digester performance; also needed for DO and pH meters.
- **High:** summer, industrial hot water → low DO, fast septicity. **Low:** winter/snowmelt/I-I → slow biology, loss of nitrification.

### 2.9 Dissolved Oxygen (DO)
- **Measures:** oxygen dissolved in water (mg/L). **Method:** membrane or optical (luminescent) probe; **Winkler (iodometric) titration** is the reference lab method.
- **Why:** aeration control; effluent quality; receiving water.
- **High (aeration):** over-aeration (energy waste), low load, or **toxic upset** (bugs stopped using O₂). **Low:** overload, not enough air, fouled diffusers, high temperature, septic influent.

### 2.10 BOD (and CBOD)
- **Measures:** oxygen used by bacteria to break down organics in **5 days at 20 °C** in the **dark**, in **300 mL BOD bottles**.
- **Method summary [SUPPLEMENTAL]:** dilute sample with **dilution water** (nutrients + buffer, aerated); **seed** with bacteria if the sample is disinfected/industrial; **dechlorinate** chlorinated samples; adjust pH to ~6.5–7.5 if needed; measure **initial DO**; incubate 5 days at **20 ± 1 °C**; measure **final DO**.
  - **Valid result:** DO **depletion of at least 2.0 mg/L (milligrams per litre)** and **at least 1.0 mg/L DO left** at the end.
  - **Dilution water blank** should deplete **no more than ~0.2 mg/L**.
  - **GGA (glucose–glutamic acid) check standard** verifies the test (expected ~198 ± 30.5 mg/L).
  - **CBOD:** add a **nitrification inhibitor** so only carbonaceous demand is measured.
- **Formula (unseeded):** **BOD (mg/L) = (Initial DO − Final DO) × 300 mL ÷ sample volume (mL)**.
- **Why:** measures organic strength; % removal; permit compliance.
- **High effluent BOD:** process overload, low DO, toxic upset, solids carryover (bugs in effluent are BOD!), short-circuiting. **Low:** good treatment (or a test problem like toxicity in the bottle — check QC).

### 2.11 COD
- **Measures:** oxygen equivalent of organics oxidized by **potassium dichromate** in hot **sulphuric acid** (with a silver catalyst; ~**2 hours at 150 °C**), read by colorimeter or titration. **[SUPPLEMENTAL]**
- **Why:** **fast** (same day) estimate of organic load; tracks industrial waste. **COD ≥ BOD always.**
- **Safety:** reagents contain **mercury, chromium, strong acid** → hazardous waste disposal, PPE (Personal Protective Equipment).
- **High:** strong/industrial influent, poor treatment. Watch the **COD:BOD ratio** — a jump can mean non-biodegradable (possibly toxic) industrial waste.

### 2.12 TSS (Total Suspended Solids)
- **Measures:** solids caught on a **glass-fibre filter**, **dried at 103–105 °C**, cooled in a **desiccator**, weighed.
- **Formula:** **TSS (mg/L) = (weight of filter + solids − weight of filter) (g) × 1,000,000 ÷ sample volume (mL)**.
- **Why:** removal efficiency; permit compliance; solids in effluent carry BOD, phosphorus and bacteria.
- **High effluent TSS:** clarifier problems (bulking, rising sludge, hydraulic overload), pin/straggler floc, algae (lagoons). **Low:** good settling.

### 2.13 VSS (Volatile Suspended Solids)
- **Measures:** the part of TSS that **burns off at 550 °C** in a **muffle furnace** (organic).
- **Formula:** **VSS (mg/L) = (dry weight − ash weight) (g) × 1,000,000 ÷ sample mL**; **% volatile = VSS ÷ TSS × 100**.
- **Why:** estimates the organic/biological fraction (MLVSS); digester performance (volatile solids reduction).
- **% volatile dropping** in mixed liquor → more inert solids (grit, chemical precipitate) or very old sludge.

### 2.14 Settleable solids
- **Measures:** volume of solids that settle in a **1-L Imhoff cone** in **60 minutes** (mL/L).
- **Why:** quick check of primary/secondary clarifier performance and influent strength.

### 2.15 MLSS and MLVSS
- **Measures:** TSS and VSS of the **mixed liquor** (aeration tank).
- **Why:** how much sludge/biomass you have → F/M (Food-to-Microorganism ratio), SRT (Solids Retention Time), wasting decisions.
- **High MLSS:** under-wasting, old sludge, solids overloading the clarifier. **Low:** over-wasting, washout, toxicity.

### 2.16 Settleometer (SSV₃₀) and SVI
- **Measures:** sludge settled volume after **30 minutes** in a 1–2 L settleometer (mL/L); **SVI = SSV₃₀ (Settled Sludge Volume after 30 minutes) × 1,000 ÷ MLSS**.
- **Why:** predicts clarifier performance.
- **High SVI (> ~150–200):** bulking. **Very low SVI** with cloudy supernatant: old sludge/pin floc. **Settles then floats:** denitrification.

### 2.17 Ammonia (NH₃-N)
- **Measures:** ammonia nitrogen (mg/L as N). **Methods:** ion-selective electrode (ISE), colorimetric (phenate/salicylate), distillation-titration.
- **Why:** nitrification performance; toxicity to fish; permit.
- **High effluent ammonia:** loss of nitrification (cold, low SRT, low DO, low alkalinity/pH, toxics), overload, ammonia-rich return streams. **Low:** good nitrification.

### 2.18 Nitrite (NO₂-N) and Nitrate (NO₃-N)
- **Measures:** intermediate (nitrite) and end product (nitrate) of nitrification. **Methods:** colorimetric (e.g., cadmium reduction for nitrate), ion chromatography, ISE (nitrate).
- **Why:** nitrite → partial nitrification & **chlorine demand**; nitrate → denitrification performance, rising sludge risk.
- **High nitrite:** nitrification stressed/incomplete. **High nitrate:** full nitrification without denitrification (anoxic zone not working, DO in anoxic zone, low carbon).

### 2.19 Phosphorus
- **Measures:** **orthophosphate** (dissolved, reactive) and **total phosphorus** (needs **digestion** first). **Method:** colorimetric (**ascorbic acid** method — turns **blue**).
- **Why:** chemical/biological P removal control; permit (eutrophication).
- **High effluent P:** chemical feed failure/underdose, solids carryover, bio-P upset (nitrate/DO in anaerobic zone), secondary release, P-rich return streams.

### 2.20 Alkalinity
- **Measures:** buffering capacity, mg/L as CaCO₃ (calcium carbonate). **Method:** **titration with acid** (e.g., sulphuric acid) to an endpoint around **pH 4.5**.
- **Why:** nitrification consumes it; digesters depend on it (VA/ALK (Volatile Acids to Alkalinity ratio) ratio); chemical P removal consumes it.
- **Low:** risk of pH crash and nitrification failure → add alkalinity.

### 2.21 Chlorine residual
- **Measures:** free and/or total chlorine (mg/L). **Methods:** **DPD** (N,N-diethyl-p-phenylenediamine, chlorine test reagent) colorimetric (pink), amperometric titration, online analyzers. **Immediately.**
- **Why:** disinfection control; effluent toxicity (after dechlorination).
- **Low:** feed failure, high demand (nitrite, ammonia, solids). **High:** overdose; dechlorination failure → toxic to fish.

### 2.22 Turbidity
- **Measures:** cloudiness by light scatter (**nephelometer**, **NTU** (Nephelometric Turbidity Unit)).
- **Why:** quick indicator of effluent solids; UV performance.

### 2.23 Bacteria — *E. coli* / fecal coliform
- **Measures:** indicator bacteria count, reported **per 100 mL** (CFU/100 mL or MPN/100 mL).
- **Methods:** **membrane filtration** (count colonies on a filter), **MPN** (Most Probable Number — multiple tubes), **enzyme substrate** tests (e.g., colour/fluorescence). Fecal coliforms are incubated at **44.5 °C**; total coliforms at **35 °C** (recognize). **[SUPPLEMENTAL]**
- **Aseptic technique:** sterile bottles, don't touch inside, flame/sterilize tools as required.
- **Why:** proves disinfection works.
- **High:** disinfection failure (low residual, fouled UV, high TSS, short-circuiting) or contaminated sample.

### 2.24 Lab safety
- **PPE:** lab coat, safety glasses/goggles, gloves; **face shield** for acids.
- **Always add acid to water**; use a **fume hood** for acids/volatile reagents.
- **Never pipette by mouth** — use a pipette bulb/pump.
- **No food or drink** in the lab or lab fridges.
- **COD waste (mercury, chromium)** and other reagents → **hazardous waste**, not the drain.
- **Hot equipment:** muffle furnace (550 °C), drying oven, autoclave — tongs and heat-resistant gloves.
- Know the **eyewash/shower** and **SDS** (Safety Data Sheet) locations; label all reagents with dates.

---

## 3. Operator-level understanding

- **Results must make sense together.** If effluent TSS is high, expect BOD and phosphorus to be up too (solids carry them). If a result doesn't fit, **check the sample and QC** before acting.
- **Trend everything.** One result is a snapshot; trends show where the process is going.
- **Field tests (pH, DO, temperature, chlorine) — do them right away**, at the sampling point if possible.
- **A missed holding time = invalid result** for compliance — plan sampling around lab and courier schedules (and long weekends!).
- **Document everything** — sample time, sampler, temperature of samples on arrival, calibration records.

---

## 4. MUST MEMORIZE

1. **Representative** = well-mixed, consistent location/time, avoid scum and deposits.
2. **Grab only: pH, temperature, DO, chlorine residual, bacteria, oil & grease, sulphide.**
3. **Flow-proportional composite** is most representative of loads; keep composites **≤ 6 °C**.
4. Preservation: **cool** most samples; **H₂SO₄ to pH < 2** for COD, ammonia, TKN, total P.
5. **Immediately:** pH, temperature, DO, chlorine residual. **BOD within 48 h. Bacteria within ~8 h.**
6. Bacteria bottles: **sterile + sodium thiosulphate** (neutralizes chlorine).
7. **Chain of custody** = documented handling from collection to analysis.
8. QC: **calibration, blanks, duplicates (precision), standards (accuracy), control charts, records.**
9. **BOD:** 5 d, **20 °C**, dark, 300 mL bottle; valid if depletion **≥ 2.0 mg/L** and residual **≥ 1.0 mg/L**; blank ≤ 0.2 mg/L; **GGA** check; **CBOD = nitrification inhibited**.
10. **BOD = (DOi − DOf) × 300 ÷ sample mL.**
11. **COD:** dichromate + acid, ~2 h at 150 °C; mercury waste; **COD ≥ BOD**.
12. **TSS:** glass-fibre filter, **103–105 °C**; **VSS: 550 °C**.
13. **TSS (mg/L) = weight gain (g) × 1,000,000 ÷ mL sample.**
14. **Settleable solids:** Imhoff cone, **60 min**, mL/L.
15. **Alkalinity:** acid titration to **~pH 4.5**, as CaCO₃.
16. **Chlorine residual: DPD (pink)**. **Phosphorus: ascorbic acid (blue)**.
17. **Bacteria: per 100 mL**; membrane filtration or MPN.
18. **Never pipette by mouth; add acid to water.**

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why some tests must be grab samples | Grab-only list | Winkler azide modification |
| Why flow-proportional composites are better | Preservation & holding times | Kjeldahl digestion (TKN) |
| Why BOD needs dilution & seed | BOD validity rules | Ion chromatography, ISE |
| Why results should agree with each other | TSS/VSS temperatures & formulas | Spikes, method detection limits |
| What high/low results suggest | DPD/pink; ascorbic acid/blue | Colilert, MPN tables |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "pH can be composited" | pH must be a **grab**, analyzed **immediately**. |
| "BOD is incubated at 35 °C" | **20 °C** (35 °C is total coliform). |
| "TSS is dried at 550 °C" | TSS **103–105 °C**; **VSS** at 550 °C. |
| "Freeze BOD samples to preserve them" | **Cool**, don't freeze. |
| "COD is lower than BOD" | COD is **higher**. |
| "Bacteria samples should be rinsed first" | **Never** rinse sterile bottles (washes out thiosulphate). |
| "Time-proportional composites are best for loading" | **Flow-proportional** is more representative. |
| "A BOD with 0.2 mg/L DO left is valid" | Needs **≥ 1.0 mg/L** residual. |

---

## 7. Practice questions

1. Which test must be collected as a grab sample?
   A. BOD
   B. TSS
   C. pH
   D. Total phosphorus

2. The most representative composite sample for calculating daily loads is:
   A. A single grab at noon
   B. A time-proportional composite
   C. A flow-proportional composite
   D. A sample from the clarifier surface

3. BOD samples should be preserved by:
   A. Adding sulphuric acid
   B. Cooling to 6 °C or below (not freezing)
   C. Freezing
   D. Adding chlorine

4. The standard BOD test is incubated for:
   A. 2 hours at 150 °C
   B. 5 days at 20 °C in the dark
   C. 24 hours at 35 °C
   D. 5 days at 35 °C

5. A BOD test shows an initial DO of 8.2 mg/L and a final DO of 0.4 mg/L. The result is:
   A. Valid
   B. Invalid because the final DO is below 1.0 mg/L
   C. Invalid because depletion is below 2.0 mg/L
   D. Valid only if seeded

6. A 10 mL sample in a 300 mL BOD bottle had an initial DO of 8.5 mg/L and a final DO of 4.3 mg/L. What is the BOD?
   A. 4.2 mg/L
   B. 42 mg/L
   C. 126 mg/L
   D. 252 mg/L

7. A 100 mL sample is filtered for TSS. The filter weighed 1.2480 g before and 1.2510 g after drying. What is the TSS?
   A. 3 mg/L
   B. 30 mg/L
   C. 300 mg/L
   D. 0.003 mg/L

8. Volatile suspended solids are determined by igniting the filter at:
   A. 103–105 °C
   B. 180 °C
   C. 550 °C
   D. 20 °C

9. Sterile bottles for effluent bacteria samples from a chlorinated plant contain sodium thiosulphate to:
   A. Kill the bacteria
   B. Neutralize chlorine so it doesn't keep killing bacteria after sampling
   C. Lower the pH
   D. Add nutrients

10. A chain of custody form is used to:
    A. Calibrate the pH meter
    B. Document every person who handled the sample from collection to analysis
    C. Calculate the BOD
    D. Order lab chemicals

11. Testing the same sample twice to check how repeatable the results are is called a:
    A. Blank
    B. Duplicate
    C. Spike
    D. Standard

12. Effluent ammonia has increased from 1 mg/L to 18 mg/L over two weeks in late fall. Which is the most likely cause?
    A. Loss of nitrification due to colder temperatures and/or insufficient SRT
    B. Excellent nitrification
    C. Too much alkalinity
    D. Too much chlorine

13. Alkalinity is measured by:
    A. Titrating with acid to an endpoint around pH 4.5
    B. Burning at 550 °C
    C. Incubating for 5 days
    D. Filtering through a glass-fibre filter

14. The DPD test for chlorine residual produces a:
    A. Blue colour
    B. Pink/red colour
    C. Green colour
    D. Yellow colour

15. Which laboratory practice is unsafe?
    A. Using a pipette bulb
    B. Adding acid slowly to water
    C. Pipetting a sample by mouth
    D. Wearing safety glasses

16. Settleable solids are measured using a(n):
    A. Imhoff cone for 60 minutes
    B. BOD bottle for 5 days
    C. Muffle furnace
    D. DPD comparator

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **C** | pH changes quickly — grab, analyze immediately. |
| 2 | **C** | Flow-proportional weights high-flow periods correctly. |
| 3 | **B** | Cool ≤ 6 °C; acid kills the bugs needed for BOD; don't freeze. |
| 4 | **B** | 5 days, 20 °C, dark. A = COD. C = total coliform. |
| 5 | **B** | Residual must be ≥ 1.0 mg/L (depletion here is 7.8, fine, but residual too low → oxygen ran out). |
| 6 | **C** | (8.5 − 4.3) × 300 ÷ 10 = 4.2 × 30 = **126 mg/L**. |
| 7 | **B** | (1.2510 − 1.2480) = 0.0030 g × 1,000,000 ÷ 100 = **30 mg/L**. |
| 8 | **C** | 550 °C. A = TSS drying. |
| 9 | **B** | Stops chlorine action after collection. |
| 10 | **B** | Chain of custody. |
| 11 | **B** | Duplicate = precision. |
| 12 | **A** | Cold + insufficient SRT → nitrifiers slow/wash out. |
| 13 | **A** | Acid titration to ~pH 4.5. |
| 14 | **B** | DPD turns pink. |
| 15 | **C** | Never mouth pipette. |
| 16 | **A** | Imhoff cone, 60 min. |
