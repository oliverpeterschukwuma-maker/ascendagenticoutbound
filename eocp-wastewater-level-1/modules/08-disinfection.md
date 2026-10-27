# Module 8 — Disinfection

← [Module 7](07-nutrient-removal.md) · [Course index](../README.md) · Next → [Module 9 — Sludge & Biosolids](09-sludge-biosolids.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **BOD** = Biochemical Oxygen Demand · **Ca(OCl)₂** = calcium hypochlorite · **Cl₂** = chlorine gas · **COD** = Chemical Oxygen Demand · **CT** = Concentration × Time · **DO** = Dissolved Oxygen · **DPD** = N,N-diethyl-p-phenylenediamine (chlorine test reagent) · **HOCl** = hypochlorous acid · **HTH** = High-Test Hypochlorite (calcium hypochlorite) · **H₂S** = hydrogen sulphide · **mg/L** = milligrams per litre · **NaOCl** = sodium hypochlorite · **NTK** = Need-to-Know Criteria · **OCl⁻** = hypochlorite ion · **OSHA** = Occupational Safety and Health Administration (US) · **SCBA** = Self-Contained Breathing Apparatus · **SOP** = Standard Operating Procedure · **SO₂** = sulphur dioxide · **THMs** = Trihalomethanes (disinfection by-products) · **TRC** = Total Residual Chlorine · **TSS** = Total Suspended Solids · **UV** = Ultraviolet · **UVT** = Ultraviolet Transmittance
<!-- abbr-end -->

**NTK (Need-to-Know Criteria) areas:** Treatment Process (38%), Equipment (39% — chlorinators, feed pumps, UV systems), Safety (chlorine). Math: chlorine dose/demand/residual, kg/day, feed rates ([Math 17C](../math/17c-loading-dosage-concentration.md)).

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Breakpoint Chlorination (combined, free and total residual; chlorine demand)](https://www.youtube.com/watch?v=Auz0cpObjI8) · [How Ultraviolet Light Treats Wastewater (city plant)](https://www.youtube.com/watch?v=Yc_BoxZh2M4) · [How UV Disinfection Works in Wastewater Treatment](https://www.youtube.com/watch?v=NaRJemsGfTI) · [Chlorine Safety Tour: A Training Guide for Chlorine Emergency Response](https://www.youtube.com/watch?v=S8uZ37ivX7c)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## 1. What you need to know (checklist)

- [ ] Purpose of disinfection; disinfection vs sterilization
- [ ] Chlorine chemistry basics: HOCl (hypochlorous acid) vs OCl⁻ (hypochlorite ion), effect of pH; free vs combined chlorine
- [ ] **Chlorine dose, demand, residual** — and why **dose ≠ residual**
- [ ] What creates chlorine demand
- [ ] **Contact time** and **CT**; contact chamber design (baffles, short-circuiting)
- [ ] Factors affecting disinfection (dose, time, temperature, pH, TSS (Total Suspended Solids), mixing, organisms)
- [ ] Forms of chlorine: gas, sodium hypochlorite, calcium hypochlorite — pros, cons, % strength
- [ ] Gas chlorination equipment basics (vacuum system, ejector, rotameter, scales, withdrawal rates)
- [ ] **Dechlorination** (why and with what)
- [ ] **UV disinfection**: how it works, what affects it, maintenance, safety
- [ ] **Ozone** (recognize)
- [ ] Measuring chlorine residual (DPD); indicator organisms (*E. coli*/fecal coliform)
- [ ] Chlorine safety (see Module 2)

---

## 2. Plain-English teaching

### 2.1 What is disinfection?

**Disinfection** kills or **inactivates** (makes unable to reproduce/infect) **pathogens** — the disease-causing organisms — before effluent goes to the receiving water.
- **Disinfection ≠ sterilization.** Sterilization kills **all** organisms. Disinfection reduces **pathogens** to a safe level.
- It works best on **clean** effluent. Solids **shield** germs from chlorine and UV. **Good settling upstream = good disinfection.**

### 2.2 DOSE ≠ RESIDUAL — the most important idea in this module

Imagine paying off debts:
- You bring **$10** (the **dose**).
- You owe **$7** in bills (the **demand** — chlorine gets "used up" reacting with things in the water).
- You have **$3** left in your pocket (the **residual** — what's left to keep killing germs).

```
        DOSE   =   DEMAND   +   RESIDUAL
   (what you add) (what gets used up) (what's left over)

    10 mg/L    =   7 mg/L    +   3 mg/L
```
Rearranged:
```
   DEMAND   = DOSE − RESIDUAL
   RESIDUAL = DOSE − DEMAND
```

**Why dose ≠ residual:** wastewater contains many things that **react with chlorine and use it up before it can disinfect**:
- **Ammonia** (forms chloramines)
- **Nitrite** (big demand — Module 7)
- **Organic matter** and **suspended solids**
- **Hydrogen sulphide** (H₂S), **iron**, **manganese** (reducing agents)

So the residual is always **less** than the dose. And if the water changes (more solids, more ammonia, more nitrite), the **same dose gives a lower residual**. That's why operators **measure the residual** — it tells you whether enough chlorine is left to do the job.

### 2.3 Chlorine chemistry (just enough)

When chlorine is added to water:
```
Cl₂  +  H₂O  →  HOCl  +  HCl
                (hypochlorous acid — the strong disinfectant)

HOCl  ⇌  H⁺  +  OCl⁻
                (hypochlorite ion — much weaker disinfectant)
```
- **HOCl** is roughly **80–100× more effective** than OCl⁻. **[SUPPLEMENTAL]**
- **Lower pH → more HOCl → better disinfection.** At higher pH (above ~7.5) more of it turns into the weaker OCl⁻.
- **Free chlorine** = HOCl + OCl⁻.
- **Combined chlorine** = **chloramines** (chlorine + ammonia). Weaker disinfectant but **lasts longer**. In wastewater with ammonia, most residual is combined.
- **Total chlorine residual = free + combined.**

**Breakpoint chlorination [recognize]:** if you keep adding chlorine to water containing ammonia, eventually all the ammonia is destroyed and **free** chlorine starts to build up — that point is the "breakpoint" (roughly 8–10 mg chlorine per mg of ammonia-N). Most wastewater plants disinfect **with combined chlorine** and do **not** go to breakpoint.

### 2.4 Contact time and CT

Chlorine needs **time** to kill germs.
- **Contact chamber:** a tank, often with **baffles** in a back-and-forth (serpentine) pattern, so every bit of water stays long enough. **Short-circuiting = some water leaves too soon = germs survive.**
- Typical design: about **15 minutes at peak hourly flow** (often ~30 minutes at average flow). **[SUPPLEMENTAL — design guidance; your permit/design governs]**
- **CT = Concentration (mg/L) × Time (minutes).** More concentration **or** more time = more kill.
  - Example: 1.5 mg/L (milligrams per litre) residual × 20 min = **CT of 30 mg·min/L**.
- **At high flow, contact time shrinks** (Time = Volume ÷ Flow) → you may need a higher dose.

### 2.5 Factors affecting disinfection

| Factor | Effect |
|---|---|
| **Dose / residual** | More = more kill (to a point) |
| **Contact time** | Longer = more kill |
| **Mixing** | Rapid, thorough mixing at the injection point is essential |
| **Temperature** | **Warmer = faster** kill; cold = slower |
| **pH** | **Lower pH = more HOCl** = better chlorine disinfection |
| **Suspended solids / turbidity** | **Shield** organisms; also exert demand → poorer disinfection |
| **Ammonia, nitrite, organics, H₂S, iron** | Exert chlorine **demand** |
| **Type of organism** | Bacteria easiest; viruses harder; protozoan cysts (*Giardia*, *Cryptosporidium*) hardest |
| **Short-circuiting** | Reduces actual contact time |

### 2.6 Forms of chlorine

| Form | Strength (available chlorine) | Pros | Cons / safety |
|---|---|---|---|
| **Chlorine gas (Cl₂)** — 68 kg (150 lb) cylinders, 907 kg (1-ton) containers | **100%** | Cheapest per kg; very effective | **Toxic gas** — leak risk; strict safety programs; SCBA (Self-Contained Breathing Apparatus); leak detection |
| **Sodium hypochlorite (NaOCl)** — liquid "bleach" | **~10–15%** (commonly 12%) | Safer than gas; easy to feed with metering pumps | **Loses strength** over time (faster with heat and sunlight); corrosive; **off-gasses → airlocks metering pumps**; never mix with acids/ammonia |
| **Calcium hypochlorite (Ca(OCl)₂, "HTH (High-Test Hypochlorite, calcium hypochlorite)")** — granules/tablets | **~65–70%** | Easy storage for small plants; tablet feeders | **Strong oxidizer — fire risk** with oil, grease, organics; keep dry |

### 2.7 Gas chlorination equipment [SUPPLEMENTAL]

```
CYLINDER/TON ─► VACUUM REGULATOR ─► ROTAMETER ─► (vacuum line) ─► EJECTOR/INJECTOR ─► solution line ─► diffuser in effluent
 (on scale)       (at the cylinder)   (shows        (under vacuum,    (water flowing through creates
                                       feed rate)    so a break        the vacuum that pulls the gas)
                                                     pulls air IN,
                                                     not gas OUT)
```
- **Vacuum systems are safer:** if a line breaks, air is sucked **in** rather than chlorine leaking **out**.
- **Scales** under cylinders track how much chlorine has been used (kg/day) and when to change containers.
- **Maximum gas withdrawal** at room temperature (approximately): **~18 kg/day (40 lb/day) from a 68 kg cylinder**, **~180 kg/day (400 lb/day) from a ton container**. Withdrawing faster cools the container → **frost forms** → gas flow drops. Use more containers (manifold) or an evaporator — **never heat a container with a flame or direct heat**.
- **Ton containers:** two valves — the **upper valve gives gas**, the **lower valve gives liquid**.
- **Changing cylinders:** wear proper PPE/SCBA per SOP (Standard Operating Procedure), new gasket (lead or fibre washer) every time, check for leaks with **ammonia vapour**.
- Chlorine room: ventilation from **near the floor**; switch and detector display **outside**.

### 2.8 Measuring chlorine residual

- **DPD (N,N-diethyl-p-phenylenediamine, chlorine test reagent) method** (colorimetric): reagent turns the sample **pink**; darker = more chlorine. Measured with a colorimeter/comparator. Can measure **free** and **total** chlorine.
- **Amperometric titration** (lab reference method) and **online analyzers**.
- Test **immediately** — chlorine residual changes quickly (grab sample, no holding).
- Proof of disinfection: ***E. coli*** or **fecal coliform** counts in the effluent (Module 15).

### 2.9 Dechlorination

**Why:** chlorine residual is **toxic to fish and aquatic life**. Federal rules (Wastewater Systems Effluent Regulations) limit **total residual chlorine to 0.02 mg/L** for systems that chlorinate. **[FEDERAL-LAW]**

**How:** add a **reducing chemical** after the contact chamber:
| Chemical | Notes |
|---|---|
| **Sulphur dioxide (SO₂)** gas | ~1 mg SO₂ per 1 mg chlorine; fed like chlorine (vacuum system); toxic gas |
| **Sodium bisulphite / sodium metabisulphite** | Liquid/solid; common at small plants |
| **Sodium thiosulphate** | Used in the lab (and some plants) — also added to sample bottles for bacteria testing to stop chlorine |

Dechlorination happens **almost instantly**, so it needs good mixing but little contact time. **Overdosing** dechlorination chemical can **lower DO (Dissolved Oxygen) and pH** of the effluent.

### 2.10 UV disinfection

**How it works:** effluent flows past **UV lamps** (in quartz sleeves). UV light at about **254 nm** damages the organisms' **DNA/RNA** so they **can't reproduce** (inactivated). **[SUPPLEMENTAL]**

| Advantages | Disadvantages |
|---|---|
| No chemicals to store or handle | **No residual** (no ongoing protection after the lamps) |
| No toxic residual → **no dechlorination needed** | Needs **clear water** — performance drops with high TSS/turbidity |
| Very short contact time (seconds) | Lamps age and must be replaced; sleeves foul |
| Effective against *Cryptosporidium* and *Giardia* | Electrical system; power outage = no disinfection (needs backup) |

**What affects UV:**
- **UV transmittance (UVT)** — how easily UV passes through the water. **Lower UVT (Ultraviolet Transmittance) = less disinfection.**
- **TSS/turbidity** — particles shield organisms.
- **Sleeve fouling** (iron, calcium/hardness, grease, algae) — blocks light. Cleaned by automatic **wipers** and/or chemical cleaning (e.g., mild acid).
- **Lamp age** — output drops over time; replace at the manufacturer's rated hours.
- **Flow rate** — higher flow = less exposure time.
- **UV dose** = intensity × time (reported in mJ/cm²) — recognize.

**UV safety:** UV light **burns eyes and skin** — never look at energized lamps; use interlocks/shielding. Lamps contain **mercury** — handle broken lamps per SDS/procedure. Electrical hazards in wet areas — lock out.

### 2.11 Ozone (recognize)
- **Strongest** common disinfectant/oxidant; generated **on site** from air or oxygen with an electrical discharge (corona).
- **No residual**; ozone gas is **toxic**; expensive; uncommon at small plants.

---

## 3. Operator-level understanding

**Daily disinfection checks**
- **Residual** at the end of the contact chamber (and after dechlorination). Compare to targets.
- **Chlorine use** (scale readings / hypochlorite tank level) → kg/day; does it match dose × flow?
- **Feed equipment:** rotameter steady? ejector working (vacuum)? metering pump primed (no airlock)? leaks? tablet feeder stocked?
- **UV:** lamps all on? alarms? intensity readings? wipers working? UVT? hours on lamps?
- **Effluent clarity** — high TSS will hurt disinfection.
- **Bacteria results** — trends.

**Common problems**
| Symptom | Likely causes | Response |
|---|---|---|
| Low/no residual | Feed stopped (empty cylinder/tank, airlocked pump, plugged ejector, frosted cylinder), **higher demand** (nitrite, ammonia, solids), higher flow | Check equipment first; test nitrite/TSS; increase dose |
| High *E. coli* despite normal residual | Short-circuiting in contact tank, high TSS shielding, sampling error | Dye test/baffles, improve clarification, check sampling |
| Hypochlorite feed dropping | Old/weak hypochlorite, off-gassing airlock, pump wear | Check product age/strength; bleed air; maintain pump |
| UV not meeting limits | Fouled sleeves, failed lamps, low UVT, high TSS, high flow | Clean sleeves, replace lamps, check upstream process |
| High effluent residual (toxicity) | Dechlorination failure or overdose of chlorine | Check dechlor feed; reduce dose |

---

## 4. MUST MEMORIZE

1. **Dose = Demand + Residual.** Dose ≠ residual because the water **uses up** chlorine.
2. Chlorine demand comes from **ammonia, nitrite, organics, solids, H₂S, iron, manganese**.
3. **HOCl** (hypochlorous acid) is the strong disinfectant; **lower pH → more HOCl**.
4. **Free** = HOCl + OCl⁻. **Combined** = chloramines. **Total** = free + combined.
5. **CT = concentration × time.**
6. Typical chlorine contact ≈ **15 min at peak flow** (~30 min at average).
7. Factors: dose, time, mixing, temperature, pH, TSS, demand, organism type, short-circuiting.
8. Strengths: **gas 100%, calcium hypochlorite ~65–70%, sodium hypochlorite ~10–15% (commonly 12%)**.
9. Sodium hypochlorite **loses strength** with time, heat, sunlight.
10. Gas withdrawal: **~18 kg/d per 68 kg cylinder; ~180 kg/d per ton container**; frost = too fast. **Never heat with flame.**
11. Ton container: **top valve gas, bottom valve liquid.**
12. Residual measured by **DPD** (pink colour); test **immediately**.
13. **Dechlorinate** with **SO₂ / sodium bisulphite**; federal TRC (Total Residual Chlorine) limit **0.02 mg/L**.
14. **UV ≈ 254 nm; damages DNA; no residual; needs clear water; clean sleeves, replace lamps.**
15. Indicator organisms for disinfection: ***E. coli* / fecal coliform**.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why dose ≠ residual | Dose = demand + residual | Breakpoint curve |
| Why TSS hurts disinfection | % strengths | Amperometric titration |
| Why pH matters | Withdrawal rates | Ozone generation (corona) |
| Why vacuum systems are safer | Dechlor chemicals, 0.02 mg/L | UV dose mJ/cm² |
| Why contact time drops at peak flow | UV basics | Disinfection by-products (THMs) |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Residual = dose" | Residual = dose **minus** demand. |
| "Demand = dose + residual" | Demand = dose **−** residual. |
| "Higher pH improves chlorination" | **Lower** pH → more HOCl → better. |
| "UV leaves a residual" | UV leaves **no** residual. |
| "Hypochlorite keeps its strength forever" | It **degrades** with time, heat, light. |
| "Heat a frosted cylinder with a torch" | **Never.** Reduce withdrawal rate or add containers. |
| "Bottom valve of a ton container gives gas" | Bottom = **liquid**; top = **gas**. |
| "Disinfection sterilizes effluent" | It reduces pathogens; it doesn't kill everything. |
| "More chlorine in the effluent is always safer" | Residual chlorine is **toxic to fish** — dechlorinate. |

---

## 7. Practice questions

1. A plant adds chlorine at a dose of 8.0 mg/L. The chlorine residual after the contact chamber is 0.6 mg/L. What is the chlorine demand?
   A. 0.6 mg/L
   B. 7.4 mg/L
   C. 8.0 mg/L
   D. 8.6 mg/L

2. The chlorine demand of an effluent is 5.5 mg/L. The required residual is 0.5 mg/L. What dose is required?
   A. 5.0 mg/L
   B. 5.5 mg/L
   C. 6.0 mg/L
   D. 11.0 mg/L

3. Which form of chlorine is the most effective disinfectant?
   A. Hypochlorite ion (OCl⁻)
   B. Hypochlorous acid (HOCl)
   C. Chloramine
   D. Chloride ion (Cl⁻)

4. Chlorine disinfection is generally more effective at:
   A. Higher pH
   B. Lower pH
   C. pH has no effect
   D. pH above 10

5. The chlorine residual dropped sharply during a storm, although the dose setting did not change. The most likely reason is:
   A. Lower flow increased contact time
   B. Higher flow and higher solids increased demand and reduced contact time
   C. The effluent became cleaner
   D. The pH increased to 12

6. Frost is forming on a 68 kg chlorine cylinder and the feed rate is dropping. The operator should:
   A. Heat the cylinder with a torch
   B. Spray the cylinder with hot water
   C. Reduce the withdrawal rate or connect additional cylinders
   D. Turn the cylinder upside down

7. A major disadvantage of UV disinfection compared to chlorine is:
   A. It produces toxic residual chlorine
   B. It leaves no residual disinfectant
   C. It requires dechlorination
   D. It cannot inactivate bacteria

8. UV disinfection performance has declined. Which is the MOST likely cause?
   A. Quartz sleeves are fouled
   B. Effluent TSS has decreased
   C. UV transmittance has increased
   D. Lamps were recently replaced

9. Why is effluent dechlorinated before discharge?
   A. To raise the BOD
   B. Because chlorine residual is toxic to aquatic life
   C. To increase disinfection
   D. To remove phosphorus

10. Which chemical is used for dechlorination?
    A. Sodium hypochlorite
    B. Sodium bisulphite
    C. Ferric chloride
    D. Alum

11. Sodium hypochlorite stored in a hot, sunny building will:
    A. Become stronger
    B. Lose strength faster
    C. Turn into chlorine gas immediately
    D. Not change

12. The chlorine residual test that turns pink in the presence of chlorine is:
    A. BOD
    B. DPD
    C. COD
    D. Winkler

13. A dye test of a chlorine contact chamber shows the dye exits much sooner than the design contact time. This indicates:
    A. Good mixing
    B. Short-circuiting, reducing effective contact time
    C. Excess chlorine residual
    D. High pH

14. A plant's effluent *E. coli* counts are high even though the residual target is met. Effluent TSS is 45 mg/L. The most likely reason is:
    A. TSS is shielding organisms from the chlorine
    B. The pH is too low
    C. The residual is too high
    D. Too much contact time

15. On a chlorine ton container, gas is withdrawn from the:
    A. Bottom valve
    B. Top valve
    C. Fusible plug
    D. Either valve

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Demand = dose − residual = 8.0 − 0.6 = **7.4 mg/L**. |
| 2 | **C** | Dose = demand + residual = 5.5 + 0.5 = **6.0 mg/L**. |
| 3 | **B** | HOCl is far stronger than OCl⁻ and chloramines. Chloride has no disinfecting power. |
| 4 | **B** | Lower pH favours HOCl. |
| 5 | **B** | More flow = less time; more solids/organics = more demand. |
| 6 | **C** | Withdrawal too fast → frost. Never apply direct heat (A/B). D would feed liquid. |
| 7 | **B** | No residual. A/C apply to chlorine. D is false. |
| 8 | **A** | Fouled sleeves block UV. B/C/D would improve performance. |
| 9 | **B** | Residual chlorine is toxic to fish. |
| 10 | **B** | Bisulphite is a reducing agent. A adds chlorine. C/D are coagulants. |
| 11 | **B** | Heat and sunlight speed up decomposition. |
| 12 | **B** | DPD = pink. Winkler is a DO titration. |
| 13 | **B** | Short-circuiting. |
| 14 | **A** | Solids shield bacteria and exert demand. |
| 15 | **B** | Top = gas, bottom = liquid. |
