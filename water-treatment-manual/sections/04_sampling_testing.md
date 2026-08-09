# Section 4 — Sampling & Lab Testing

> Your samples are the evidence that the plant is working. A bad sample gives you bad data. Bad data leads to bad decisions. Learn to sample and test correctly — it protects public health and protects you legally.

---

## 4.1 The Cardinal Rules of Sampling

1. **Take samples consistently** — same location, same method, every time.
2. **Label immediately** — write the sample point, date, and time on the container before you fill it, not after.
3. **Analyze promptly** — most water quality parameters degrade quickly. Chlorine, for example, must be tested within minutes of collection.
4. **Record results immediately** — don't trust memory.
5. **Never manipulate results** — if a result looks off, re-sample to confirm. Falsifying records is a serious offence.

---

## 4.2 Sample Collection Procedures

### 4.2.1 Grab Sample (Most Common)

A single snapshot in time. Suitable for turbidity, pH, temperature, chlorine, and most routine parameters.

**Equipment needed:** Sample bottle (type depends on test — see table below), gloves, marker.

`[ACTION]`  
1. Run the tap or sample tap for at least 2–3 minutes before collecting (flush stagnant water from the line).  
   - *Exception:* Lead and copper samples must NOT be flushed — check your protocol.  
2. Hold the bottle downstream of the flow (not directly under the tap).  
3. Fill to the required volume. Do not fill to the brim if preservatives are needed.  
4. Cap immediately.  
5. Label: location, date, time, your initials.  
6. Deliver to the lab or analyze within the holding time for that parameter.

---

### 4.2.2 Composite Sample

Multiple grab samples combined over time to get an average. Used for parameters that vary throughout the day (e.g., BOD, certain metals).

`ℹ️ WHY:` A grab sample is like a photograph. A composite sample is like a time-lapse — it captures variation.

*Your site may or may not require composite sampling. Update this section when you have your sampling schedule.*

---

## 4.3 Sample Points and What to Test

> *The table below is a generic framework. Your site-specific sampling plan (from your operating permit) will be filled in once provided.*

| Sample Point | Parameter | Frequency | Holding Time | Notes |
|---|---|---|---|---|
| Raw water intake | Turbidity, pH, temperature | Every shift | Analyze immediately | Baseline for process control |
| Raw water intake | Alkalinity | Daily | 24 hours | Determines coagulant dose |
| Post-coagulation (rapid mix) | pH | Each jar test | Analyze immediately | Optimal coag pH varies by chemical |
| Settled water (clarifier effluent) | Turbidity, pH | Every 2–4 hours | Analyze immediately | Should be significantly lower than raw |
| Filter inlet | Turbidity | Every 2–4 hours | Analyze immediately | Should match settled water |
| Filter effluent (each filter) | Turbidity | Continuously (online) + manual grab 1×/shift | Analyze immediately | Key compliance parameter |
| Finished water (entry to distribution) | Turbidity, free chlorine, total chlorine, pH, temperature | Every 2–4 hours (min 1×/shift) | Chlorine: immediate | Primary compliance point |
| Clear well | Free chlorine, total chlorine | Every 4 hours | Chlorine: immediate | Verify residual for CT calculation |
| Distribution system (remote points) | Free chlorine, pH | Per your sampling plan | Chlorine: immediate | Verify residual to end of system |
| Backwash waste | Turbidity | During backwash | Analyze immediately | Verify when backwash is complete |
| **Bag filter outlet / Carbon vessel outlet — CONFIRMED BY OPERATOR** | Turbidity (NTU meter) | *(confirm frequency)* | Analyze immediately | Site-specific compliance point — this site checks turbidity at the bag filter or carbon vessel (sand filter is bypassed, Section 6.4), not at a sand filter effluent |

---

## 4.4 How to Run Each Test

### 4.4.1 Turbidity (NTU)

**Instrument:** Bench-top or portable turbidimeter (e.g., Hach 2100Q, Hach TU5).

`[ACTION]`  
1. Rinse the sample cell twice with sample water (discard rinses).  
2. Fill the sample cell to the fill line. Do not overfill.  
3. Wipe the outside of the cell with a lint-free cloth (fingerprints affect readings).  
4. Place in the instrument, cap, and press READ.  
5. Record the result in NTU.

**Common errors:**
- Air bubbles in the cell → give a falsely high reading. Tap the cell gently to release bubbles before reading.
- Cell scratches → cause light scatter. Replace scratched cells.
- Instrument not calibrated → calibrate before shift per instrument manual (Section 6 will cover instrument calibration once provided).

---

### 4.4.2 Free and Total Chlorine Residual (mg/L)

**Method:** DPD colorimetric (most common). DPD = N,N-Diethyl-p-phenylenediamine.

`[ACTION]`  
1. Collect the sample directly in the test vial — do NOT let the sample sit before testing. Chlorine degrades in minutes.  
2. Fill to the correct volume (usually 10 mL).  
3. Add one DPD-1 tablet (or DPD-1 powder pillow) for **free chlorine**. Cap and invert gently 3× to mix.  
4. Within 60 seconds, compare the colour to the comparator wheel OR read in the colorimeter.  
5. Record **free chlorine** result.  
6. For **total chlorine**, add a DPD-3 tablet to the same vial. Read again within 60 seconds.  
7. Record **total chlorine** result.  
8. **Combined chlorine** = total chlorine − free chlorine.

`ℹ️ WHY:` Free chlorine is the active disinfectant. Total chlorine includes combined chlorine (chloramines), which is a weaker disinfectant. If your free chlorine is very low but total chlorine is high, you may have a chloramine problem.

**Common errors:**
- Waiting too long to read → chlorine dissipates → falsely low result.
- Using old/damp DPD reagent → colour doesn't develop properly.
- Very high chlorine bleaches the indicator → gives a falsely low result. Dilute the sample 1:10 and multiply by 10.

---

### 4.4.3 pH

**Instrument:** Bench-top or portable pH meter (e.g., Hach HQ series, YSI).

`⚠️ RULE:` Rinse the probe with clean/distilled water immediately before EVERY test — before each buffer during calibration, and before every single sample. No exceptions — skipping this carries residue between readings and throws off the result.

`[ACTION]`  
1. Calibrate the electrode with pH 7.0 and pH 4.0 (or 10.0) buffer solutions before each shift or as specified, rinsing the electrode between each buffer.  
2. Rinse the electrode with distilled water. Blot dry (do not rub).  
3. Immerse in sample. Wait for the reading to stabilize (typically 30–60 seconds).  
4. Record the result.  
5. Rinse electrode with distilled water before taking the next sample, if any.  
6. Rinse electrode with distilled water and store in electrode storage solution (NOT distilled water — this damages the electrode).

`ℹ️ WHY:` pH affects almost every process in the plant. Coagulant works best at a specific pH range. Chlorine disinfection is much more effective at lower pH. Too-low or too-high pH corrodes pipes.

---

### 4.4.4 Temperature

**Instrument:** Thermometer or probe on the pH/DO meter.

`[ACTION]`  
1. Immerse the probe in the sample or in-situ at the sample point.  
2. Wait for the reading to stabilize.  
3. Record in °C.

`ℹ️ WHY:` Temperature affects chlorine demand (colder water needs more contact time), coagulant dose (cold water coagulates poorly), and biological activity.

---

### 4.4.5 Alkalinity (mg/L as CaCO₃)

**Method:** Titration with sulphuric acid (H₂SO₄).

> *Detailed titration method will be added once your site's specific procedure is provided.*

`ℹ️ WHY:` Alkalinity is the water's ability to buffer pH changes. It's critical for coagulation — alum consumes alkalinity, so water with low alkalinity may need alkalinity supplementation (e.g., lime or sodium bicarbonate added) to allow coagulation to work.

---

### 4.4.6 Jar Test (Coagulant Optimization)

The jar test is a miniature version of the coagulation/flocculation process. You use it to find the optimal coagulant type and dose before changing the full-scale process.

**Equipment:** Jar test apparatus (gang stirrer), 6 identical 1-L beakers, dosing syringes.

`[ACTION]`  
1. Fill 6 beakers with 1 L of raw water each.  
2. Set up the jar test apparatus and insert all 6 paddles.  
3. Add different doses of coagulant to each beaker (e.g., 5, 10, 15, 20, 25, 30 mg/L).  
4. **Rapid mix:** Stir at high speed (100–150 RPM) for 1 minute to simulate rapid mixing.  
5. **Slow mix (flocculation):** Reduce to low speed (20–30 RPM) for 15–20 minutes. Observe floc formation.  
6. **Settling:** Stop stirrers and allow to settle for 10–15 minutes.  
7. Draw off settled water from each jar (do not disturb settled floc).  
8. Measure turbidity and pH of each sample.  
9. The jar with the lowest settled turbidity at the correct pH is your optimal dose.  
10. Record results. Adjust full-scale dose accordingly.

`ℹ️ WHY:` Raw water quality changes constantly — rain events, seasonal algae, temperature shifts all affect how much coagulant you need. A jar test takes 30–40 minutes and saves hours of poor treatment.

---

## 4.5 Sample Containers and Preservation

| Parameter | Container Type | Preservative | Max Holding Time |
|---|---|---|---|
| Turbidity | Plastic or glass, dark | None | 24 hours (ASAP preferred) |
| pH | Plastic or glass | None | Analyze immediately |
| Free/Total Chlorine | Plastic | None | Analyze immediately |
| Temperature | N/A (in-situ) | N/A | N/A |
| Alkalinity | Plastic | Ice (4°C) | 24 hours |
| Coliform bacteria | Sterile plastic bottle (Na₂S₂O₃ pre-dosed) | Ice (4°C) | 6–24 hours (check lab) |
| Metals (Fe, Mn) | Plastic | HNO₃ to pH < 2 | 28 days |

---

## 4.6 Quality Assurance

- **Calibrate instruments** before each shift. Log calibration check results.
- **Run a blank** (distilled water) and a known-concentration standard periodically. If the standard reads outside ±5%, the instrument needs service.
- **Duplicate samples** — occasionally take two samples from the same point at the same time and analyze both. Results should agree within ±10%.
- **Never re-use sample containers** for bacteriological testing without re-sterilizing.

---

*Last updated: 2026-06-04 | Source: Initial framework*
