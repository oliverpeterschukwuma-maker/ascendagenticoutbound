# Module 9 — Sludge (Solids) Handling & Biosolids

← [Module 8](08-disinfection.md) · [Course index](../README.md) · Next → [Module 10 — Pumps](10-pumps.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **BOD** = Biochemical Oxygen Demand · **CaCO₃** = calcium carbonate · **CH₄** = methane · **CO₂** = carbon dioxide · **DAF** = Dissolved Air Flotation · **DO** = Dissolved Oxygen · **GBT** = Gravity Belt Thickener · **H₂S** = hydrogen sulphide · **mg/L** = milligrams per litre · **NTK** = Need-to-Know Criteria · **OMRR** = Organic Matter Recycling Regulation · **OSHA** = Occupational Safety and Health Administration (US) · **PC** = Progressive Cavity · **PD** = Positive Displacement · **RDT** = Rotary Drum Thickener · **SOP** = Standard Operating Procedure · **TSS** = Total Suspended Solids · **VA** = Volatile Acids · **VA/ALK** = Volatile Acids to Alkalinity ratio · **WAS** = Waste Activated Sludge
<!-- abbr-end -->

**NTK (Need-to-Know Criteria) areas:** Treatment Process (solids handling, dewatering, disposal) and Equipment (thickeners, digesters, presses, centrifuges, sludge pumps). Math: % solids, kg/day of solids, volume reduction ([Math 17C](../math/17c-loading-dosage-concentration.md)).

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Anaerobic Digestion Wastewater Treatment Explained](https://www.youtube.com/watch?v=QAyJS7ZH4PA) · [How Anaerobic Digestion Works: Complete Guide](https://www.youtube.com/watch?v=IJUr-2708yA) · [Working of Belt Filter Press](https://www.youtube.com/watch?v=8Yp2El8zsOU) · [Belt Press — Working principle (Alfa Laval)](https://www.youtube.com/watch?v=076HPlJpp5s)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## 1. What you need to know (checklist)

- [ ] Types of sludge: primary, waste activated (WAS), scum, chemical; typical % solids
- [ ] Goals of solids handling: **reduce volume (remove water), stabilize (reduce odour, pathogens, vector attraction), dispose/beneficially use**
- [ ] **Thickening**: gravity thickener, dissolved air flotation (DAF), gravity belt / rotary drum thickeners
- [ ] **Anaerobic digestion**: stages, temperature, pH, volatile acids/alkalinity, gas, mixing, heating, signs of trouble ("sour" digester)
- [ ] **Aerobic digestion**: air/DO, pH drop, supernatant decanting
- [ ] **Dewatering**: belt filter press, centrifuge, screw press, drying beds; polymer use
- [ ] Return streams (supernatant, filtrate, centrate) and their impact on the plant
- [ ] **Biosolids**: what they are, BC regulation (Organic Matter Recycling Regulation), basic uses
- [ ] Sludge pumps and equipment
- [ ] Safety: methane, H₂S (hydrogen sulphide), confined space, polymer slips, pinch points, pathogens

---

## 2. Plain-English teaching

### 2.1 Why sludge handling matters

Treating water creates **sludge** — and sludge is mostly **water** (often 95–99.5% water). Moving and disposing of water is expensive. So the solids train has three jobs:
1. **Remove water** (thickening → dewatering) — reduce volume.
2. **Stabilize** (digestion, lime, composting) — reduce **odour**, **pathogens**, and **vector attraction** (flies, rodents), and destroy some organic matter.
3. **Dispose of or beneficially use** the final product (biosolids).

```
 Primary sludge ─┐
                 ├─► THICKENING ─► DIGESTION/STABILIZATION ─► DEWATERING ─► BIOSOLIDS
 WAS ────────────┘   (remove some    (stabilize; reduce        (make a "cake")   (land application,
                      water)          organics; maybe gas)                        compost, landfill)
        ▲                 │                 │                      │
        └─────────── RETURN STREAMS (supernatant, filtrate, centrate) back to the headworks ◄──┘
```

### 2.2 Types of sludge and typical solids [SUPPLEMENTAL — typical ranges]

| Sludge | Typical % solids | Notes |
|---|---|---|
| **Primary sludge** | **~2–6%** | Grey/black, strong odour, contains grit & grease |
| **WAS (waste activated sludge)** | **~0.5–1.5%** | Light brown, fluffy, hard to thicken |
| **Thickened sludge** | ~3–8% | After thickener/DAF |
| **Anaerobically digested sludge** | ~2–5% | Black, tarry/earthy odour (not offensive when well digested) |
| **Dewatered cake** | **~15–30%** | Belt press/centrifuge; feels like moist soil |
| **Dried (drying beds, dryers)** | 40–90% | |

**Remember:** **1% solids = 10,000 mg/L (milligrams per litre).**

**Volume shrinks a lot as % solids rises:** going from **2% to 4%** solids cuts the sludge volume **in half**. (Formula in 17C.)

### 2.3 Thickening

**Enters:** thin sludge (primary, WAS, or blended)
**What happens:** water is separated from solids by gravity or flotation
**Leaves:** thicker sludge + liquid (overflow/subnatant → back to plant)
**Why it matters:** smaller volume → digesters and dewatering work better and cost less

| Thickener | How it works | Best for | Operator watches |
|---|---|---|---|
| **Gravity thickener** | Circular tank like a clarifier; slow "picket fence" rake helps water escape | **Primary sludge** | Blanket depth, sludge pumping, odours (septic if held too long), overflow solids |
| **DAF (Dissolved Air Flotation)** | Water saturated with air under pressure is released → **tiny bubbles stick to solids and float them** to the surface → skimmed off | **WAS** (light, fluffy) | Air-to-solids ratio, polymer, float thickness, subnatant clarity |
| **Gravity belt thickener (GBT)** | Sludge + polymer spread on a moving porous belt; plows turn it; water drains | WAS, blends | Polymer dose, belt wash, filtrate clarity |
| **Rotary drum thickener (RDT)** | Rotating screen drum with polymer | WAS, blends | Polymer, drum speed, screen cleaning |
| **Centrifuge** | Spins to separate solids | Various | Capture, cake/thickened %, vibration |

### 2.4 Anaerobic digestion (heated, no oxygen)

**Enters:** thickened primary + WAS
**What happens:** two groups of bacteria work **without oxygen**:
```
  STAGE 1: ACID FORMERS (fast, tough)                STAGE 2: METHANE FORMERS (slow, fussy)
  organics ──► volatile (organic) acids        ──►   volatile acids ──► METHANE (CH₄) + CO₂
```
**Leaves:** digested sludge (more stable, less volume) + **digester gas (biogas)** + **supernatant** (if two-stage)
**Why it matters:** destroys about **40–60% of volatile solids**, reduces pathogens and odour, and makes **methane fuel** for heating.

**Keep the methane formers happy — they're the weak link.**

| Parameter | Typical target [SUPPLEMENTAL] | Why |
|---|---|---|
| **Temperature** | **Mesophilic ~35 °C (95 °F)** (range ~30–38 °C). Thermophilic ~50–57 °C (recognize) | Methane formers are very sensitive to temperature **changes** — change no more than about **1 °C per day** |
| **pH** | **~6.8–7.2** (roughly 6.8–7.4) | Methane formers stop below ~6.5 |
| **Volatile acids / alkalinity ratio (VA/ALK)** | **Below ~0.1–0.2** is healthy; a **rising trend** is the early warning | Acids building faster than methane formers can use them |
| **Alkalinity** | High (often 2,000–5,000 mg/L as CaCO₃ (calcium carbonate)) | Buffers the acids |
| **Gas composition** | **~60–70% methane, ~30–35% CO₂ (carbon dioxide)**, trace H₂S | CO₂ rising above normal = trouble |
| **Solids retention time** | ~15–30 days (heated, mixed "high-rate") | Methane formers grow slowly |
| **Mixing** | Continuous/regular (gas mixing, pumps, mechanical) | Keeps food, bugs and heat even; prevents scum/grit layers |
| **Feeding** | **Small, frequent, consistent** feedings | Big slugs overload the acid stage |

**The "sour" (upset) digester — know these signs:**
1. **Volatile acids rising** and **VA/ALK (Volatile Acids to Alkalinity ratio) ratio rising** (first sign)
2. **Alkalinity dropping**
3. **pH dropping** (a **late** sign — by the time pH drops, it's serious)
4. **Gas production dropping**, **CO₂ % rising**, methane % falling
5. Sour odour; foaming

**Causes:** overfeeding (organic overload), temperature change, toxic substances, poor mixing, too much thin (watery) sludge (short detention time).
**Response:** **reduce or stop feeding**, **add alkalinity** (e.g., sodium bicarbonate, lime — per SOP (Standard Operating Procedure)), keep temperature steady, keep mixing, find the cause. **[SUPPLEMENTAL]**

**Memory trick: "Acids up, alkalinity down, pH last to frown."**

**Two-stage digesters:** the **primary** (heated, mixed) does the digesting; the **secondary** (not heated/mixed) lets solids settle so **supernatant** can be drawn off and digested sludge stored.

**Digester gas safety & equipment [SUPPLEMENTAL]:**
- Methane is **explosive (5–15% in air)** → **no smoking, no open flames, no sparks**; explosion-proof electrical; gas detectors.
- **Flame arrestors** (stop a flame travelling back into the gas system), **pressure/vacuum relief valves** (protect the cover from over-pressure or collapse when withdrawing sludge), **drip traps/condensate traps** (drain water from gas lines — must be drained regularly), **waste gas burner (flare)** (burns excess gas).
- **Floating covers** rise and fall with the volume. Never let a digester go under vacuum — the cover can collapse.
- Digesters are **confined spaces**; H₂S and methane; draining and cleaning is a major, planned job.

**Supernatant:** liquid drawn off the top of the secondary digester — **very strong** (high BOD (Biochemical Oxygen Demand), TSS (Total Suspended Solids), ammonia, phosphorus). Return it to the plant **slowly** and at low-load times, or it can upset the liquid process.

### 2.5 Aerobic digestion (with air)

Common at small and extended-aeration plants.
- Sludge is **aerated** for a long time; bugs run out of outside food and **eat themselves** ("endogenous respiration"). Volatile solids drop (~35–50%).
- Keep **DO (Dissolved Oxygen) ≥ ~1 mg/L** (often 1–2 mg/L) to avoid odours. **[SUPPLEMENTAL]**
- **pH drops** over time because of **nitrification** (alkalinity consumed) — may need alkalinity addition or anoxic cycles (turning air off periodically to denitrify and recover alkalinity).
- **Decanting supernatant:** turn off air, let solids settle, draw off the clear liquid (return to plant) → thickens the sludge.
- Cold weather slows aerobic digestion.
- No methane produced — **simpler and safer** than anaerobic, but uses more electricity (blowers).

### 2.6 Dewatering

**Enters:** digested (or thickened) sludge + **polymer**
**What happens:** squeezing, spinning or drying removes much more water
**Leaves:** **cake** (~15–30% solids) + **filtrate/centrate** (liquid → back to plant)
**Why it matters:** cake is much cheaper to haul and use

| Equipment | How it works | Watch for |
|---|---|---|
| **Belt filter press** | Polymer-conditioned sludge drains on a belt (**gravity zone**), then is squeezed between two belts (**wedge zone**, then **pressure/shear zone** around rollers) | Belt **tracking**, belt **wash** sprays (plugged nozzles → belt blinding), polymer dose, sludge squeezing out the sides, cake dryness, filtrate clarity. **Pinch points** — guards! |
| **Centrifuge** | High-speed bowl spins solids to the wall; scroll pushes them out | Vibration, bearing temperature, torque, polymer, centrate clarity |
| **Screw press** | Slow screw squeezes sludge inside a screen | Polymer, screen cleaning |
| **Sand drying beds** | Sludge spread on sand; water drains and evaporates | Weather-dependent; needs space; good for small plants |
| **Plate-and-frame (filter) press** | **Batch** press: a feed pump pushes sludge into chambers between **cloth-covered plates**; water (**filtrate**) passes through and the solids build up as a **cake**. When it's full, the plates are opened and the **cake drops out**. It makes a **drier cake** than a belt press. | Cycle time, feed pressure, **cloth blinding** (needs washing), torn cloths (dirty filtrate), wet cake (stopped too soon or poor conditioning), leaks between plates. **High hydraulic closing force**: lockout, never reach between plates. |

**Polymer — get the dose right:**
| Polymer dose | Result |
|---|---|
| **Too little** | Poor floc; **dirty filtrate/centrate** (solids escape), wet cake, sludge squeezes out |
| **Right** | Strong floc, clear water drains fast, good cake |
| **Too much** | Wasted money; **slimy sludge**, belts **blind**, can also give poor results |

Polymer must be properly **mixed and aged** (made-down) per the supplier. **Spilled polymer is extremely slippery.**

### 2.7 Return streams

Thickener overflow, DAF subnatant, digester supernatant, filtrate and centrate all go **back to the plant**. They can carry high **BOD, TSS, ammonia and phosphorus**. If they come back in big slugs, they can **overload** the biological process. Return them gradually and track them.

### 2.8 Biosolids

**Biosolids** = sludge that has been **treated and stabilized** so it can be **beneficially used** (e.g., land application, soil/compost products, land reclamation) or disposed of.

**[BC-LAW]** In BC, the **Organic Matter Recycling Regulation (OMRR)** under the *Environmental Management Act* sets the rules for producing and using biosolids and compost — including **pathogen reduction**, **vector attraction reduction**, **metal (trace element) limits**, quality classes (e.g., **Class A** and **Class B** biosolids), and land-application requirements. *(Level I: know that OMRR exists and that biosolids must meet quality criteria before use; you don't need the numbers.)*

### 2.9 Sludge pumps & equipment

| Pump | Use | Key point |
|---|---|---|
| **Progressive cavity (PC) pump** | Thick sludge, polymer | Positive displacement; **must never run dry** (stator burns); never against closed discharge |
| **Plunger (piston) pump** | Primary sludge | Positive displacement; pulsing flow |
| **Diaphragm pump** | Scum, chemicals, small sludge flows | Positive displacement |
| **Recessed-impeller ("torque flow") centrifugal** | Sludge with rags/grit | Passes solids well |
| **Grinders** | Before PC pumps | Protect pumps from rags |

Sludge lines can **plug** — flush with water after pumping thick sludge, and know where clean-outs are.

---

## 3. Operator-level understanding

**Daily anaerobic digester checks:** temperature (steady), gas production and composition, pressure, **VA and alkalinity** (several times per week; trend the ratio), pH, feed volume and % solids, mixing equipment, heat exchanger, drip traps drained, cover position, gas detectors.

**Daily aerobic digester checks:** DO, pH, temperature, foam, odour, air distribution, decant schedule.

**Dewatering checks:** polymer make-down and dose, cake appearance (% solids), filtrate/centrate clarity, belt tracking/wash, unusual noise/vibration, guards in place.

**Decision patterns:**
- **VA/ALK ratio climbing** → cut feeding, check temperature and mixing; add alkalinity if needed. Don't wait for pH to drop.
- **Filtrate is dirty** → polymer too low (or wrong), sludge changed, feed rate too high.
- **Belts blinding** → wash sprays plugged, too much polymer, grease.
- **Ammonia spike in plant** → check if supernatant/filtrate was returned in a slug.

---

## 4. MUST MEMORIZE

1. Solids train goals: **reduce volume, stabilize, dispose/beneficially use**.
2. Typical solids: **primary 2–6%, WAS 0.5–1.5%, cake 15–30%**. **1% = 10,000 mg/L**.
3. Doubling % solids **halves** the volume.
4. **Gravity thickener → primary sludge; DAF → WAS** (tiny bubbles float solids).
5. Anaerobic digestion: **acid formers (fast) → methane formers (slow, sensitive)**.
6. Mesophilic **~35 °C (95 °F)**; change temperature **≤ ~1 °C/day**.
7. Digester pH **~6.8–7.2**; **VA/ALK < ~0.1–0.2**; gas **~60–70% methane, ~30–35% CO₂**.
8. Sour digester: **VA ↑ → alkalinity ↓ → pH ↓ (last) → gas ↓, CO₂ ↑**. Response: **cut feed, add alkalinity, keep temp & mixing**.
9. Methane explosive **5–15%**; flame arrestors, pressure/vacuum relief, drip traps, waste gas burner.
10. Aerobic digestion: **DO ≥ ~1 mg/L**; **pH drops** (nitrification); decant supernatant.
11. Belt press zones: **gravity → wedge → pressure**; polymer too low = dirty filtrate; too much = blinding/slimy.
12. Return streams (supernatant, filtrate, centrate) are **strong** — return slowly.
13. **PC pumps must never run dry**; PD (Positive Displacement) pumps never against a closed valve.
14. BC biosolids rules: **Organic Matter Recycling Regulation (OMRR)**.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why methane formers are the weak link | Digester targets | Thermophilic, two-phase digestion |
| Why pH is a late warning | Sour digester sequence | Struvite scaling |
| Why WAS is hard to thicken | Typical % solids | Plate-and-frame press, dryers |
| Why return streams upset plants | Thickener types by sludge | Class A vs Class B details |
| Why polymer dose matters | Gas safety devices | Air-to-solids ratio (DAF) |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "pH is the first sign of digester upset" | **VA/ALK ratio** rises first; pH drops **last**. |
| "Acid formers are the sensitive bugs" | **Methane formers** are slow and sensitive. |
| "Heat the digester quickly to fix it" | Change temperature **slowly** (≤ ~1 °C/day). |
| "Feed a sour digester more to help it" | **Reduce** feeding. |
| "Aerobic digesters produce methane" | Only **anaerobic** digesters do. |
| "DAF is for grit" | DAF floats **light** solids like WAS. |
| "More polymer is always better" | Overdosing wastes money and **blinds** belts. |
| "A PC pump can run dry briefly" | Dry running quickly **burns the stator**. |

---

## 7. Practice questions

1. The earliest indicator of an upset in an anaerobic digester is usually:
   A. A drop in pH
   B. An increase in the volatile acids/alkalinity ratio
   C. An increase in methane production
   D. A decrease in CO₂

2. A typical mesophilic anaerobic digester operates at about:
   A. 15 °C (59 °F)
   B. 35 °C (95 °F)
   C. 55 °C (131 °F)
   D. 75 °C (167 °F)

3. Healthy digester gas is approximately:
   A. 30% methane, 70% CO₂
   B. 60–70% methane, 30–35% CO₂
   C. 95% methane, 5% CO₂
   D. 20% oxygen, 80% nitrogen

4. An anaerobic digester's VA/ALK ratio has risen from 0.08 to 0.35 over a week and gas production is falling. The operator should FIRST:
   A. Double the sludge feed
   B. Reduce feeding and check temperature and mixing; add alkalinity if needed per SOP
   C. Turn off the mixers
   D. Raise the temperature by 10 °C

5. Which thickening process uses fine air bubbles to float solids to the surface?
   A. Gravity thickener
   B. Dissolved air flotation (DAF)
   C. Drying beds
   D. Anaerobic digester

6. A belt filter press filtrate has become very dirty and the cake is wet. The most likely cause is:
   A. Too much polymer
   B. Too little polymer (poor conditioning)
   C. Belt wash pressure is too high
   D. The sludge is too thick

7. In an aerobic digester, the pH has been slowly dropping. The most likely cause is:
   A. Methane production
   B. Nitrification consuming alkalinity
   C. Too little aeration
   D. Too much polymer

8. Which device prevents a flame from travelling back into a digester gas line?
   A. Drip trap
   B. Flame arrestor
   C. Pressure relief valve
   D. Rotameter

9. Thickening sludge from 2% solids to 4% solids will reduce its volume by about:
   A. 10%
   B. 25%
   C. 50%
   D. 75%

10. A progressive cavity sludge pump should never be:
    A. Started with the suction valve open
    B. Run dry or against a closed discharge valve
    C. Used for thick sludge
    D. Lubricated

11. Digester supernatant returned to the plant all at once may cause:
    A. Improved effluent quality
    B. A shock load of BOD, solids, ammonia and phosphorus
    C. Lower chlorine demand
    D. Lower influent flow

12. In BC, the regulation that sets requirements for the beneficial use of biosolids is the:
    A. Drinking Water Protection Act
    B. Organic Matter Recycling Regulation
    C. Building Code
    D. Fisheries Act only

13. Typical waste activated sludge (WAS) solids concentration is about:
    A. 0.5–1.5%
    B. 5–8%
    C. 15–30%
    D. 50%

14. The belt filter press zone where free water first drains by gravity is the:
    A. Pressure zone
    B. Wedge zone
    C. Gravity drainage zone
    D. Shear zone

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | VA/ALK rises first; pH drops last. |
| 2 | **B** | Mesophilic ≈ 35 °C. C is thermophilic. |
| 3 | **B** | ~60–70% CH₄ (methane), ~30–35% CO₂. |
| 4 | **B** | Reduce feed, stabilize conditions, add alkalinity. A worsens. C stops mixing. D shocks methane formers. |
| 5 | **B** | DAF. |
| 6 | **B** | Under-conditioned sludge doesn't release water; solids escape in filtrate. A → slimy/blinding. |
| 7 | **B** | Nitrification uses alkalinity. A: no methane in aerobic digesters. |
| 8 | **B** | Flame arrestor. A removes condensate. C protects against pressure. D measures gas flow (chlorinators). |
| 9 | **C** | V₂ = V₁ × (2 ÷ 4) = half. |
| 10 | **B** | Dry running burns the stator; PD pumps against closed valves over-pressure. |
| 11 | **B** | Supernatant is very strong. |
| 12 | **B** | OMRR. |
| 13 | **A** | WAS is thin. C = cake. |
| 14 | **C** | Gravity zone first, then wedge, then pressure/shear. |
