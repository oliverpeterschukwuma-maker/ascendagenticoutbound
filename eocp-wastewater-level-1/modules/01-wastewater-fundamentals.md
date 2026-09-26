# Module 1 — Wastewater Fundamentals

← [Course index](../README.md) · Next → [Module 2 — Safety](02-safety.md)

**NTK area:** Monitor, Evaluate & Adjust Treatment Processes (wastewater characteristics underpin every process) and Laboratory Analysis.

---

## 1. What you need to know (checklist)

Tick each item when you can explain it out loud without notes.

- [ ] Define wastewater, sewage, influent, effluent, and the difference between domestic, industrial, commercial, and infiltration/inflow (I/I) flows
- [ ] Explain why a treatment plant exists (protect public health + protect the receiving environment)
- [ ] List the **physical** characteristics: colour, odour, temperature, solids (total, suspended, dissolved, settleable, volatile, fixed), turbidity
- [ ] List the **chemical** characteristics: pH, alkalinity, organic matter (BOD, COD), nutrients (N, P), DO, toxic substances, FOG (fats/oils/grease)
- [ ] List the **biological** characteristics: bacteria, viruses, protozoa, helminths (worms); pathogens vs indicator organisms (coliforms / *E. coli*)
- [ ] Define BOD, CBOD, COD, TSS, TDS, VSS, DO, pH and say **why each matters** to an operator
- [ ] Describe fresh vs septic wastewater (colour, odour, H₂S)
- [ ] Know typical raw domestic wastewater strength (order of magnitude)
- [ ] Explain the effect of temperature on biological activity and on DO saturation
- [ ] Explain the "solids family tree" (TS = TSS + TDS; each split into volatile + fixed)
- [ ] Describe the overall flow of a treatment plant (preliminary → primary → secondary → disinfection → discharge; solids train)
- [ ] Explain daily flow patterns (diurnal variation) and wet-weather flow (I/I)

---

## 2. Plain-English teaching

### 2.1 What is wastewater?
**Wastewater** is used water plus whatever it carries away: toilet waste, food scraps, soap, grease, grit from roads, chemicals from businesses, and groundwater or rain that leaks into sewer pipes. It is **about 99.9% water** — only about 0.1% is "stuff." But that 0.1% is what makes it dangerous and what the plant exists to remove. **[SUPPLEMENTAL]**

| Term | Plain meaning |
|---|---|
| **Sewage** | Older word for wastewater (mainly from homes) |
| **Domestic wastewater** | From homes: toilets, sinks, showers, laundry. Fairly predictable |
| **Commercial wastewater** | From restaurants, offices, laundromats, car washes. Can add grease, detergents |
| **Industrial wastewater** | From factories/processing (food, dairy, metal plating, breweries). Can be very strong, hot, acidic/basic, or toxic. Often controlled by a **sewer-use bylaw** and pre-treatment |
| **Infiltration** | Groundwater leaking **into** sewers through cracks and bad joints |
| **Inflow** | Rain/surface water **entering directly** (roof drains, manhole lids, illegal storm connections) |
| **I/I** | Infiltration + inflow together. Dilutes wastewater, raises flow, can overload the plant in wet weather |
| **Influent** | What **flows in** to the plant (or into any one process) |
| **Effluent** | What **flows out** of the plant (or out of any one process) |
| **Receiving water / receiving environment** | Where the final effluent goes (river, lake, ocean, ground) |

**Memory trick:** **I**nfluent = **I**n. **E**ffluent = **E**xit.

> Note: "influent" and "effluent" also apply to individual processes. *Primary effluent* is the water leaving the primary clarifier, which is the *influent* to the aeration tank.

### 2.2 Why do we treat wastewater?
1. **Protect public health** — raw sewage carries pathogens (disease-causing organisms).
2. **Protect the environment** — organic matter uses up oxygen in rivers (fish die); nutrients cause algae blooms; ammonia and chlorine are toxic to fish; solids smother habitat.
3. **Meet the law** — plants discharge under a permit/registration with limits (Module 18).

### 2.3 The three families of characteristics

```
               WASTEWATER CHARACTERISTICS
     ┌──────────────────┼─────────────────────┐
  PHYSICAL          CHEMICAL             BIOLOGICAL
  (see/feel/smell)  (what's dissolved/    (what's alive)
                     reacting)
  • colour          • pH, alkalinity      • bacteria
  • odour           • organics (BOD/COD)  • viruses
  • temperature     • nutrients (N, P)    • protozoa
  • solids          • DO                  • helminths (worms)
  • turbidity       • toxics, metals      • indicator organisms
                    • FOG                   (coliforms, E. coli)
```

### 2.4 Physical characteristics

**Colour** — tells you the *age/condition* of the wastewater.
| Colour | Meaning |
|---|---|
| Grey / light brown | **Fresh** wastewater (has some oxygen, still aerobic) |
| Dark grey to **black** | **Septic** (stale) — no oxygen, anaerobic, sulphides forming |
| Unusual colours (red, green, blue, etc.) | Industrial discharge — investigate |

**Odour**
| Odour | Meaning |
|---|---|
| Musty, earthy, "soapy" | Fresh wastewater — normal |
| **Rotten eggs** | **Hydrogen sulphide (H₂S)** — septic conditions. Also a serious safety hazard (Module 2) |
| Solvent / fuel / chemical smell | Possible industrial discharge or spill — safety and process threat |

**Temperature**
- Wastewater is usually **warmer than the drinking water supply** (hot water use) and changes more slowly than air temperature.
- **Warmer = biology works faster** (roughly: rate of biological activity roughly doubles with each ~10 °C rise within the normal range). **[SUPPLEMENTAL]**
- **Warmer = water holds LESS dissolved oxygen.** So in summer, bugs need more oxygen while the water holds less — aeration systems work hardest in summer.
- **Cold = nitrification slows dramatically** (Module 7). BC winters matter!
- A sudden temperature change can indicate an industrial discharge.

**Solids** — "solids" means everything left when water is evaporated. The family tree:

```
                      TOTAL SOLIDS (TS)
                 everything left after evaporating
                ┌──────────────┴──────────────┐
    TOTAL SUSPENDED SOLIDS (TSS)       TOTAL DISSOLVED SOLIDS (TDS)
    caught on a filter                 pass through the filter
    (particles you could filter out)   (salts, dissolved minerals)
       ┌──────────┴─────────┐             ┌──────────┴─────────┐
   Volatile SS (VSS)   Fixed SS       Volatile DS          Fixed DS
   burns off at 550°C  (ash —         (organic)            (inorganic
   ≈ ORGANIC           inorganic,                           salts)
   (food / bugs)       e.g., grit)

   Settleable solids = the part of the SS that settles in a cone in a set time
   (Imhoff cone test, usually 60 minutes → reported as mL/L)
```

- **Volatile** = burns away at **550 °C** → organic (made of carbon — food, paper, microorganisms).
- **Fixed** = what's left (ash) → inorganic (sand, grit, minerals).
- Operators use **VSS** to estimate how much of the mixed liquor is actually *living organisms* (MLVSS, Module 5).

**Turbidity** — cloudiness caused by fine suspended particles. High effluent turbidity usually means solids are escaping (and interferes with UV disinfection).

### 2.5 Chemical characteristics

**pH** — how acidic or basic the water is. Scale 0–14.
```
0 ─────────── 7 ─────────── 14
  ACIDIC     NEUTRAL      BASIC (alkaline)
```
- Each whole number is **10×** stronger. pH 5 is 10× more acidic than pH 6, and 100× more than pH 7.
- Normal raw domestic wastewater: roughly **6.5–8.5**. **[SUPPLEMENTAL]**
- Microorganisms work best near **neutral (≈6.5–8.5)**. Nitrifiers prefer the upper part of that range.
- Sudden pH swings (e.g., pH 3 or pH 11 at the headworks) = likely industrial discharge → can kill the biology.

**Alkalinity** — the water's **buffering capacity**: its ability to *resist* a change in pH. Measured as mg/L as CaCO₃ (calcium carbonate).
- Think of alkalinity as the **"pH shock absorber."**
- Nitrification **uses up alkalinity** (Module 7). If alkalinity runs out, pH crashes and nitrification stops.
- Anaerobic digesters also depend on alkalinity (Module 9).

**Organic matter** — carbon-based material (food waste, feces, soaps, paper, grease). This is the **"food" for bacteria.** We can't measure every organic compound, so we measure how much **oxygen** it takes to break it down:

| Test | Stands for | Plain meaning | Notes |
|---|---|---|---|
| **BOD** (BOD₅) | Biochemical Oxygen Demand | How much oxygen **bacteria** use to eat the organics in 5 days at 20 °C | Measures *biodegradable* organics. Slow (5 days) |
| **CBOD** | Carbonaceous BOD | BOD with nitrification **inhibited** so it only measures carbon-eating | Many permits use CBOD |
| **COD** | Chemical Oxygen Demand | How much oxygen a **strong chemical** (dichromate) uses to oxidize organics | Fast (~2–3 h). Measures biodegradable **and** non-biodegradable. **COD is always ≥ BOD** |

**Why operators care about BOD/COD:** it's how we measure the *strength* of the wastewater (the "food load"), how well the plant is removing organics (% removal), and whether the effluent meets the permit. High BOD in the effluent means the plant is not doing its main job.

**Nutrients**
- **Nitrogen (N)** — enters mostly as **ammonia** (NH₃/NH₄⁺) and **organic nitrogen** (from urine and feces). **TKN** (Total Kjeldahl Nitrogen) = organic N + ammonia N.
  - Ammonia is **toxic to fish** and uses oxygen when bacteria convert it (nitrification).
- **Phosphorus (P)** — from human waste, food, some detergents/cleaners.
  - Main concern: **eutrophication** — too much nutrient in lakes/rivers → algae blooms → when algae die and decay, oxygen is used up → fish kills.
- **Microorganisms also need** nutrients to grow. A commonly used ratio for biological treatment is **BOD : N : P ≈ 100 : 5 : 1**. Domestic wastewater normally has plenty; some industrial wastes (e.g., food processing) may be nutrient-deficient. **[SUPPLEMENTAL]**

**Dissolved Oxygen (DO)** — oxygen gas dissolved in the water (mg/L).
- Raw wastewater usually has **little or no DO**.
- Aerobic bacteria need DO — we add it in aeration tanks.
- The receiving water needs DO for fish. Final effluent DO is often a permit or monitoring item.
- **Maximum DO the water can hold (saturation)** depends mostly on temperature: **[SUPPLEMENTAL — approximate, fresh water at sea level]**

| Water temperature | DO saturation (approx.) |
|---|---|
| 0 °C | ~14.6 mg/L |
| 10 °C | ~11.3 mg/L |
| 20 °C | ~9.1 mg/L |
| 30 °C | ~7.6 mg/L |

*Cold water holds more oxygen. You don't need to memorize the exact numbers — memorize the direction and "about 9 mg/L at 20 °C."*

**TDS (Total Dissolved Solids)** — salts and minerals dissolved in the water. Conventional treatment removes very little TDS. High TDS can come from industry, water softeners, or seawater infiltration in coastal sewers. It relates to **conductivity** (dissolved ions conduct electricity).

**FOG (Fats, Oils, Grease)** — from kitchens and restaurants. Coats pipes, blocks sewers and pumps, forms scum in clarifiers, interferes with aeration and oxygen transfer. Controlled by grease interceptors/traps and sewer-use bylaws.

**Toxic substances** — heavy metals, solvents, pesticides, cyanide, high-strength cleaning chemicals. Can **kill or inhibit the biology** (a "toxic upset") and some pass through to the environment or accumulate in biosolids.

### 2.6 Biological characteristics

| Organism group | Examples / notes |
|---|---|
| **Bacteria** | Most numerous. Some cause disease (e.g., *Salmonella*, *Shigella*, pathogenic *E. coli*, *Vibrio cholerae*). Most are harmless and are the "workers" of treatment |
| **Viruses** | Very small; hepatitis A, norovirus, enteroviruses. Can't reproduce outside a host but survive in water |
| **Protozoa** | Single-celled. Pathogenic: *Giardia*, *Cryptosporidium* (form resistant cysts/oocysts). Beneficial: ciliates/amoebae in activated sludge |
| **Helminths** | Parasitic worms and their eggs (e.g., roundworms). Eggs are very resistant |

**Pathogen** = an organism that causes disease.

**Indicator organisms:** It's impossible to test for every pathogen. Instead we test for **coliform bacteria** (especially **fecal coliforms** or ***E. coli***), which are found in huge numbers in human/animal intestines. Their presence **indicates fecal contamination** and therefore the *possible* presence of pathogens. They are used to judge **disinfection** performance.

### 2.7 Typical raw domestic wastewater strength [SUPPLEMENTAL — "medium strength" textbook values; your plant will differ]

| Parameter | Typical raw domestic (medium strength) |
|---|---|
| BOD₅ | ~200 mg/L (range roughly 100–400) |
| TSS | ~200 mg/L (range roughly 100–400) |
| COD | ~400–500 mg/L (about 2× BOD) |
| TKN | ~40 mg/L as N |
| Ammonia-N | ~25 mg/L |
| Total phosphorus | ~5–8 mg/L as P |
| pH | ~6.5–8.5 |
| DO | ~0 (little or none) |
| Volatile fraction of TSS | ~70–80% |

**Memory trick:** "**Two hundred, two hundred**" — raw BOD and TSS are both about 200 mg/L. COD roughly double BOD.

### 2.8 Flow patterns
- **Diurnal (daily) variation:** lowest flow in the early morning (~3–6 a.m.), peaks in late morning and again in the evening (people wake up, shower, cook). Strength (BOD, TSS) usually follows a similar pattern.
- **Peaking factor:** peak hourly flow ÷ average daily flow. Smaller communities have larger peaking factors (flows are "spikier").
- **Wet weather:** I/I increases flow dramatically (sometimes several times average) and dilutes the wastewater (lower mg/L), but can wash out biology and overload clarifiers. Also brings grit.
- **Seasonal:** tourist towns, schools, cold winters, snowmelt.

### 2.9 The big picture — the whole plant in one diagram

```
LIQUID TRAIN (the water)
Raw        ┌────────────┐   ┌──────────┐   ┌────────────────────────┐   ┌──────────────┐   ┌─────────────┐
influent ─►│PRELIMINARY │──►│ PRIMARY  │──►│ SECONDARY (biological) │──►│ DISINFECTION │──►│  DISCHARGE  │
           │screens,grit│   │clarifier │   │aeration + sec. clarifier│  │ Cl₂ / UV     │   │receiving    │
           └────┬───────┘   └────┬─────┘   └────┬─────────┬─────────┘   └──────────────┘   │water        │
                │                │              │RAS ▲    │                                └─────────────┘
          screenings &     primary sludge       │    └────┘ (return activated sludge)
          grit → landfill  & scum               │
                                 │              WAS (waste activated sludge)
SOLIDS TRAIN (the sludge)        ▼              ▼
                           ┌────────────┐  ┌───────────┐  ┌────────────┐
                           │ THICKENING │─►│ DIGESTION │─►│ DEWATERING │─► biosolids (beneficial use / disposal)
                           └────────────┘  └───────────┘  └────────────┘
```

| Stage | Main job | Removes |
|---|---|---|
| Preliminary | Protect downstream equipment | Rags, large debris, grit |
| Primary | Settle out what settles, skim what floats | Settleable solids, scum (~50–70% TSS, ~25–40% BOD) |
| Secondary | Biology eats dissolved/fine organics; clarifier settles the biology | Most remaining BOD and TSS (to ~85–95%+ overall) |
| Tertiary / advanced (some plants) | Extra polishing | Nutrients, extra solids (filters) |
| Disinfection | Kill/inactivate pathogens | Pathogens |
| Solids handling | Stabilize and reduce volume of sludge | — |

---

## 3. Operator-level understanding

What an operator actually does with this knowledge:

1. **Reads the influent every day.** Colour, odour, and flow at the headworks are the first warning of trouble. A black, rotten-egg-smelling influent tells you the collection system is septic (long travel times, low flows, warm weather) → H₂S hazards, corrosion, and harder treatment.
2. **Watches for industrial slugs.** Sudden pH change, unusual colour/odour, oil sheen, or foaming at the headworks → notify supervisor, sample immediately, protect the biology (Module 16), and follow the sewer-use bylaw / source-control procedure.
3. **Uses BOD/TSS loading to run the biology.** The "food" coming in determines how much biomass you need (F/M, Module 5) and how much air you need.
4. **Uses temperature to anticipate.** Cold weather → slower biology, especially nitrification → keep more biomass (longer SRT). Warm weather → more oxygen demand, lower DO saturation, more septic odours.
5. **Uses solids tests to track the process:** TSS in/out for removal efficiency, MLSS for biomass inventory, VSS to see how much is organic.
6. **Uses indicator bacteria to prove disinfection** is working.
7. **Knows wet-weather behaviour.** High flows → watch clarifier blankets, bypasses, grit, and screen blinding.

---

## 4. MUST MEMORIZE

> 🔴 **Memorize these word-for-word.**

1. **Influent** = flowing in. **Effluent** = flowing out.
2. Wastewater ≈ **99.9% water**, 0.1% solids.
3. **BOD** = oxygen used by **bacteria** to break down organics in **5 days at 20 °C** (in the dark). Measures biodegradable organic strength.
4. **CBOD** = BOD with **nitrification inhibited** (carbonaceous only).
5. **COD** = oxygen used by a **strong chemical oxidant** (dichromate). **COD ≥ BOD** always.
6. **TSS** = solids **caught on a filter** (dried at **103–105 °C**).
7. **TDS** = solids that **pass through** the filter (dissolved).
8. **TS = TSS + TDS.**
9. **Volatile solids** = burn off at **550 °C** → **organic**. **Fixed solids** = ash → **inorganic**.
10. **Fresh** wastewater: grey, musty. **Septic**: black, **rotten egg (H₂S)**.
11. **pH 7 = neutral**; below 7 acidic; above 7 basic. Each unit = **10×**.
12. **Alkalinity** = buffering capacity (resists pH change); expressed **as CaCO₃**.
13. Warmer water → **faster biology, LESS DO** saturation. Colder → slower biology, more DO.
14. DO saturation ≈ **9 mg/L at 20 °C**.
15. Raw domestic BOD and TSS ≈ **200 mg/L** each (medium strength).
16. **Coliforms / *E. coli*** = **indicator organisms** of fecal contamination (used to check disinfection).
17. **Pathogen** = disease-causing organism (bacteria, viruses, protozoa, helminths).
18. Nutrient ratio for biology **BOD:N:P ≈ 100:5:1**.
19. **Phosphorus** (and nitrogen) in receiving water → **eutrophication** (algae blooms, low DO).
20. **Ammonia** is toxic to fish and exerts an oxygen demand.
21. **Infiltration** = groundwater leaking in; **Inflow** = direct connections (roof drains, manhole covers).

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND (be able to explain why) | MEMORIZE (facts/numbers) | RECOGNIZE (know it when you see it) |
|---|---|---|
| Why BOD measures "food" for bacteria | BOD 5 days, 20 °C | TKN, VDS, FDS terms |
| Why COD is always higher than BOD | COD ≥ BOD | Specific pathogen names (*Giardia*, *Cryptosporidium*, *Salmonella*) |
| Why temperature changes both biology speed and DO | Warm = less DO, faster biology | Peaking factor |
| Why septic wastewater is a problem (H₂S, odour, corrosion, treatment) | Septic = black, rotten egg | Turbidity units (NTU) |
| Why alkalinity matters for nitrification and digesters | Alkalinity as CaCO₃ | Conductivity ↔ TDS |
| How I/I affects flow, strength, and the plant | TSS 103–105 °C; VSS 550 °C | Diurnal flow curve shape |
| Why indicator organisms are used instead of testing every pathogen | Raw BOD/TSS ≈ 200 mg/L | |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "COD is less than BOD" | **False.** COD ≥ BOD because the chemical oxidizes things bacteria can't. |
| Confusing **infiltration** and **inflow** | Infiltration = groundwater through cracks (slow, seasonal). Inflow = direct connection (fast, storm-driven). |
| "Cold water holds less oxygen" | **Backwards.** Cold water holds **more** oxygen. |
| "Volatile solids are inorganic" | **Backwards.** Volatile = organic (burns). Fixed = inorganic (ash). |
| "TDS is removed by the clarifier" | Clarifiers remove **settleable/suspended** solids, not dissolved solids. |
| "Coliforms are pathogens" | Most coliforms are **indicators**, not the disease-causing organisms themselves. |
| pH is "linear" | pH is **logarithmic**: pH 4 is **1,000×** more acidic than pH 7, not 3×. |
| "High alkalinity = high pH" | Not necessarily. Alkalinity is buffering capacity; pH is current acidity. They are related but different. |
| "Black wastewater is normal" | Black + rotten egg = **septic**, not normal fresh influent. |
| "Effluent" only means final plant discharge | It can mean the outflow of **any** unit process (e.g., primary effluent). |

---

## 7. Practice questions

1. Fresh domestic wastewater is normally described as:
   A. Black with a rotten-egg odour
   B. Grey with a musty odour
   C. Clear and odourless
   D. Green with a chlorine odour

2. Which test uses a strong chemical oxidant and is completed in a few hours?
   A. BOD₅
   B. CBOD₅
   C. COD
   D. TSS

3. A lab reports: total solids 800 mg/L, total dissolved solids 560 mg/L. What is the total suspended solids?
   A. 240 mg/L
   B. 560 mg/L
   C. 800 mg/L
   D. 1,360 mg/L

4. Volatile suspended solids are best described as the portion of suspended solids that:
   A. Remains as ash after ignition at 550 °C
   B. Passes through a glass-fibre filter
   C. Is lost on ignition at 550 °C and is mostly organic
   D. Settles in an Imhoff cone in 60 minutes

5. During a hot summer, the DO in an aeration tank drops even though the blowers are running at the same rate. The most likely explanation is:
   A. Warm water holds more oxygen, so the meter reads low
   B. Warm water holds less oxygen and the microorganisms are more active
   C. Warm temperatures stop biological activity
   D. BOD loading always decreases in summer

6. The PRIMARY reason coliform bacteria are measured in effluent is that they:
   A. Are the main cause of waterborne disease
   B. Indicate possible fecal contamination and therefore possible pathogens
   C. Consume dissolved oxygen in the receiving water
   D. Cause bulking in clarifiers

7. Groundwater entering a sanitary sewer through cracked pipes and leaking joints is called:
   A. Inflow
   B. Exfiltration
   C. Infiltration
   D. Cross-connection

8. A wastewater sample has pH 5. Compared to a sample with pH 7, it is:
   A. 2 times more acidic
   B. 20 times more acidic
   C. 100 times more acidic
   D. 2 times less acidic

9. Which characteristic describes a wastewater's ability to resist a change in pH?
   A. Hardness
   B. Alkalinity
   C. Conductivity
   D. Turbidity

10. Excess phosphorus discharged to a lake is a concern mainly because it:
    A. Is toxic to fish at low concentrations
    B. Causes eutrophication (algae growth and later oxygen depletion)
    C. Increases the pH to above 11
    D. Causes scaling in the outfall pipe

11. An operator notices the plant influent has suddenly turned bright blue and has a solvent-like odour. The BEST first action is to:
    A. Increase chlorine dose to kill the colour
    B. Ignore it; colour does not affect treatment
    C. Treat it as a possible industrial discharge — protect personnel, collect a sample, notify the supervisor, and follow the plant's response procedure
    D. Immediately shut down all aeration blowers

12. Which statement about BOD and COD is TRUE for the same sample?
    A. BOD is always higher than COD
    B. COD is always equal to BOD
    C. COD is normally higher than BOD
    D. The two tests measure exactly the same material

13. A commonly used nutrient ratio for healthy biological treatment is BOD : N : P =
    A. 100 : 1 : 5
    B. 100 : 5 : 1
    C. 10 : 5 : 1
    D. 1 : 5 : 100

14. Which pair of organisms are protozoan pathogens that form resistant cysts/oocysts?
    A. *Salmonella* and *Shigella*
    B. *Giardia* and *Cryptosporidium*
    C. Norovirus and hepatitis A
    D. Nitrosomonas and Nitrobacter

15. Wet-weather I/I usually causes influent BOD **concentration** (mg/L) to:
    A. Increase, because flow increases
    B. Decrease, because of dilution
    C. Stay exactly the same
    D. Become zero

---

## 8. Answers & explanations

| Q | Answer | Why it's right | Why the others are wrong |
|---|---|---|---|
| 1 | **B** | Fresh wastewater still has a little oxygen: grey, musty/earthy odour. | A = septic. C = not wastewater. D = over-chlorinated, not raw. |
| 2 | **C** | COD uses dichromate, a strong chemical oxidant; ~2–3 h digestion. | A/B take 5 days using bacteria. D is a solids test, not an oxygen-demand test. |
| 3 | **A** | TS = TSS + TDS → TSS = 800 − 560 = **240 mg/L**. | B is TDS; C is TS; D wrongly adds them. |
| 4 | **C** | "Volatile" = lost (burned) at 550 °C = organic. | A describes *fixed* solids. B = dissolved solids. D = settleable solids. |
| 5 | **B** | Two effects together: lower DO saturation **and** faster bug metabolism (higher oxygen uptake). | A is backwards. C: warm speeds biology up. D: no such rule. |
| 6 | **B** | Coliforms are indicators — their presence means fecal contamination may have occurred. | A: most coliforms aren't pathogens. C/D: not why we test them. |
| 7 | **C** | Infiltration = groundwater leaking in. | A = direct connections (roof drains, lids). B = sewage leaking *out*. D = drinking-water/backflow term. |
| 8 | **C** | 2 pH units = 10 × 10 = **100×**. | A/B treat pH as linear. D is backwards (lower pH = more acidic). |
| 9 | **B** | Alkalinity = buffering capacity. | A = Ca/Mg content. C = ability to conduct electricity (TDS). D = cloudiness. |
| 10 | **B** | Phosphorus is usually the limiting nutrient for algae in fresh water → blooms → oxygen depletion when algae die. | A: ammonia/chlorine are the fish-toxic ones. C/D not the main concern. |
| 11 | **C** | Unusual colour/odour = possible industrial slug. Safety first (solvent = possible flammable/toxic atmosphere), sample for evidence, notify, follow procedure. | A: chlorine won't fix it and can form by-products. B: industrial slugs can kill biology. D: stopping air would kill aerobic biology — drastic and wrong. |
| 12 | **C** | COD oxidizes biodegradable + non-biodegradable matter. | A/B/D contradict this. |
| 13 | **B** | 100:5:1. | A swaps N and P. C/D are nonsense ratios. |
| 14 | **B** | *Giardia* (cysts) and *Cryptosporidium* (oocysts) are protozoa. | A = bacteria. C = viruses. D = nitrifying bacteria (beneficial). |
| 15 | **B** | More water carrying roughly the same mass of BOD → lower mg/L. | A confuses mass with concentration. C/D wrong. (The **mass** load, kg/day, may stay similar or even rise with first-flush.) |

**Scoring:** 13–15 = strong · 10–12 = review the traps table · <10 = re-read sections 2.4–2.6 and redo tomorrow.
