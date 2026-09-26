# Module 2 — Safety

← [Module 1](01-wastewater-fundamentals.md) · [Course index](../README.md) · Next → [Module 3 — Preliminary Treatment](03-preliminary-treatment.md)

**NTK area:** Perform Security, Safety & Administrative Procedures. Safety questions also appear inside every other area ("what should the operator do FIRST?").

> **The #1 exam rule:** When a question involves a person's life or health, the answer that **protects people first** is almost always correct. Process second. Paperwork third.

**BC legal framework for safety [BC-LAW]:** The *Workers Compensation Act* and the **WorkSafeBC Occupational Health and Safety (OHS) Regulation**. Key parts for operators: Part 3 (rights & responsibilities, right to refuse), Part 4 (general conditions incl. working alone), Part 5 (chemical & biological substances, WHMIS), Part 7 (noise), Part 8 (PPE), **Part 9 (confined spaces)**, **Part 10 (de-energization & lockout)**, Part 11 (fall protection), Part 20 (construction/excavation), and the exposure-limit tables. **WHMIS 2015** comes from the federal *Hazardous Products Act* + WorkSafeBC Part 5. The exam tests operator safety knowledge; you don't need section numbers.

---

## 1. What you need to know (checklist)

- [ ] Choose correct PPE for a task and explain its limits (PPE is the **last** line of defence)
- [ ] State the hazards, properties and warning signs of **H₂S, methane, oxygen deficiency, chlorine, CO₂, CO**
- [ ] Explain why gases collect **low** (heavier than air) or **high** (lighter than air)
- [ ] Describe biological hazards and hygiene practices
- [ ] Use WHMIS 2015: labels, pictograms, **SDS (16 sections)**
- [ ] Store chemicals safely and identify **incompatible** combinations
- [ ] Respond to a chemical spill and a chlorine leak (small vs large)
- [ ] Use an eyewash/shower correctly (**15 minutes minimum**)
- [ ] Follow **lockout/tagout** steps including verifying zero energy and releasing stored energy
- [ ] Define a **confined space**; list entry requirements (hazard assessment, permit/entry procedures, testing, ventilation, isolation, standby/attendant, rescue plan)
- [ ] Perform atmospheric testing in the right **order** (O₂ → LEL → toxics) and at **multiple levels**
- [ ] Know acceptable atmosphere limits (O₂ 19.5–23%, flammables < 10% LEL)
- [ ] Explain rescue principles (no unplanned entry rescue; non-entry retrieval preferred)
- [ ] Control slips/trips/falls, work safely around open tanks, pumps and rotating machinery
- [ ] Know electrical safety basics and fire extinguisher classes
- [ ] Know worker rights in BC (right to know, participate, refuse unsafe work) and working-alone check-ins

---

## 2. Plain-English teaching

### 2.1 The Hierarchy of Controls — the thinking behind all safety answers

```
MOST EFFECTIVE
   ▲  1. ELIMINATION       – remove the hazard (don't enter the tank; use a camera)
   │  2. SUBSTITUTION      – use something less hazardous (hypochlorite instead of chlorine gas)
   │  3. ENGINEERING       – guards, ventilation, interlocks, gas detectors, railings
   │  4. ADMINISTRATIVE    – procedures, permits, training, signs, lockout program, schedules
   ▼  5. PPE               – gloves, respirators, harnesses (LAST line of defence)
LEAST EFFECTIVE
```

If an exam asks for the **best** way to control a hazard, higher on this list is better.

### 2.2 PPE — Personal Protective Equipment

| Hazard | PPE |
|---|---|
| Head impact | Hard hat |
| Eye splash/particles | Safety glasses; **chemical goggles** for liquids; **face shield over goggles** for corrosives |
| Hands (chemicals/sewage) | Chemical-resistant gloves (nitrile, neoprene, etc. — match to SDS) |
| Feet | Steel/composite toe, slip-resistant boots |
| Noise | Ear plugs/muffs (BC: hearing protection needed above the **85 dBA** 8-hour exposure limit) |
| Falls | Full-body harness + lanyard/lifeline, anchor |
| Drowning (open tanks/lagoons) | Personal flotation device (PFD) / life ring nearby |
| Traffic | High-visibility vest |
| Airborne contaminants | Respirator (air-purifying) — **only if oxygen is adequate and the contaminant is known** |
| IDLH atmospheres / O₂ deficiency / chlorine leak | **SCBA** (self-contained breathing apparatus) or supplied-air with escape bottle |

**Key PPE rules**
- An **air-purifying respirator (APR, cartridge mask) does NOT supply oxygen.** Never use it in an oxygen-deficient atmosphere or for unknown/IDLH atmospheres.
- Respirators require **fit testing** and training; facial hair can prevent a seal.
- Inspect PPE before use; damaged PPE is removed from service.

### 2.3 The dangerous gases — know these cold

**Specific gravity (SG) of a gas** compares its weight to air (air = 1.0).
- **SG > 1 → heavier than air → collects LOW** (bottoms of wet wells, pits, manholes, tanks).
- **SG < 1 → lighter than air → collects HIGH** (ceilings, tops of domes, upper parts of spaces).

| Gas | Source in a plant | Properties | Main hazard |
|---|---|---|---|
| **Hydrogen sulphide (H₂S)** | Septic wastewater, wet wells, sludge, digesters, headworks | Colourless; **rotten-egg odour** at low levels; **SG ≈ 1.19 (heavier → low)**; flammable (LEL ≈ 4%); corrosive | **Toxic** — paralyses breathing. **Olfactory fatigue:** at ~100 ppm and above it can **deaden your sense of smell** quickly, so "I can't smell it anymore" may mean it's *worse*. ~100 ppm is IDLH; several hundred ppm can cause collapse in minutes |
| **Methane (CH₄)** | Anaerobic decomposition: digesters, sewers, wet wells, sludge storage | Colourless, **odourless**; **SG ≈ 0.55 (lighter → high)**; **explosive range 5–15% in air** | **Explosion/fire**; also asphyxiant (displaces O₂) |
| **Oxygen deficiency** | Oxygen displaced by other gases or consumed by bacteria/rust/decay in enclosed spaces | Normal air = **20.9% O₂** | Below **19.5%** = deficient → impaired judgement, collapse, death. **You cannot sense it.** |
| **Oxygen enrichment** | Leaking O₂ systems, pure-oxygen processes | Above **23%** | Greatly increased fire/explosion risk |
| **Chlorine (Cl₂)** | Gas disinfection systems | **Greenish-yellow gas**, pungent/bleach odour; **SG ≈ 2.5 (heavy → low)**; not flammable but **supports combustion**; liquid expands ~**460×** to gas | **Toxic, corrosive** to lungs, eyes, skin |
| **Carbon dioxide (CO₂)** | Digester gas, respiration, decay | Colourless, odourless; heavier than air | Asphyxiant (displaces O₂) |
| **Carbon monoxide (CO)** | Engines, generators, combustion in enclosed spaces | Colourless, odourless; about the same weight as air | Toxic — binds to blood |
| **Ammonia (NH₃)** | Some chemical feeds, sludge | Pungent; lighter than air | Irritant/toxic |

**Memory tricks**
- **"H₂S Hides low, Hurts, and Hides its smell."**
- **"Methane Moves up, and Makes things explode (5–15)."** → *"Five to fifteen, methane is mean."*
- **Chlorine: "2.5 times heavier — it goes down to the floor, so vents are at the floor."**
- **Oxygen: "19.5 to 23 — that's the zone for me."**

### 2.4 Biological hazards

Wastewater contains pathogens (Module 1). Routes of infection: **ingestion** (hand-to-mouth — the most common), **cuts/breaks in skin**, **eyes/mucous membranes**, **inhalation** of aerosols/sprays.

**Controls**
- Wash hands **before eating, drinking, smoking, or touching your face**, and after work.
- **No eating/drinking/smoking** in process areas or the lab.
- Wear gloves; cover cuts; report injuries.
- Keep work clothes and boots at work; don't take contaminated clothing home.
- Avoid spray/aerosols (e.g., when hosing down).
- Vaccinations — recommended ones (commonly tetanus/diphtheria and hepatitis A, sometimes others) are decided with your employer's occupational health provider. **[GENERAL]**
- **Never pipette by mouth** in the lab.

### 2.5 Chemical hazards, WHMIS 2015 and SDS

**WHMIS 2015** (Workplace Hazardous Materials Information System) is Canada's hazard communication system, aligned with the global GHS. **[BC-LAW / FEDERAL-LAW]** It has three parts:
1. **Labels** (supplier labels + workplace labels)
2. **Safety Data Sheets (SDS)**
3. **Worker education and training**

**SDS** — 16 standard sections. The ones operators use most:

| SDS section | What it tells you |
|---|---|
| 1 Identification | Product name, supplier, emergency phone |
| 2 Hazard identification | Hazard classes, pictograms, signal word (**Danger** = more severe; **Warning** = less severe) |
| 4 First-aid measures | What to do if exposed |
| 5 Fire-fighting measures | Suitable extinguishers |
| 6 Accidental release measures | **Spill response** |
| 7 Handling and storage | Storage conditions, **incompatibilities** |
| 8 Exposure controls / PPE | Exposure limits, required PPE |
| 10 Stability and reactivity | **What it reacts dangerously with** |

**Memory trick for key sections:** "**2** hazards, **4** first aid, **6** spills, **7** storage, **8** PPE."

**The SDS must be readily available to workers** — read it **before** you handle a chemical, not after something goes wrong.

**Common wastewater chemicals & hazards [SUPPLEMENTAL]**

| Chemical | Use | Hazards | Never mix with |
|---|---|---|---|
| Chlorine gas | Disinfection | Toxic, corrosive, supports combustion | Ammonia, organics, oils, grease |
| Sodium hypochlorite (liquid bleach, ~10–15%) | Disinfection, odour | Corrosive; **loses strength** with heat, sunlight, and time | **Acids → release chlorine gas**; **ammonia → chloramine gas** |
| Calcium hypochlorite (HTH, ~65% available Cl₂, granules/tablets) | Disinfection | **Strong oxidizer — fire/explosion** risk with organics (oil, grease, rags, sawdust) | Organics, fuels, acids |
| Sodium bisulphite / sulphur dioxide | Dechlorination | SO₂ is toxic; bisulphite releases SO₂ with acid | Acids, oxidizers |
| Alum, ferric chloride, ferric sulphate | Phosphorus removal, coagulation | Acidic/corrosive; ferric stains | Strong bases; hypochlorite |
| Sodium hydroxide (caustic), lime | pH/alkalinity adjustment | **Very corrosive** (caustic burns can be worse than acid burns — no immediate pain); lime dust irritant; heat when mixed with water | **Acids** (violent heat) |
| Polymer | Thickening/dewatering | **Extremely slippery** when spilled | — |
| Sulphuric acid (lab) | Sample preservation | Corrosive | Bases; water added *to* acid (always add **acid to water**) |

**Lab rule:** "**Always Add Acid to water**" (AAA) — adding water to concentrated acid can boil and splatter violently.

### 2.6 Chemical storage & compatibility

- Store by **compatibility**, not alphabetically.
- Keep **acids away from bases**, **oxidizers away from organics/fuels**, **hypochlorite away from acids and ammonia**.
- Use **secondary containment** (bunds/berms) sized for the largest container (practice: at least 110% of the largest tank — follow your site's design/code).
- Cool, dry, ventilated, out of direct sun (especially hypochlorite).
- Label every container (workplace labels on transfers).
- Keep only needed quantities; first-in, first-out (FIFO) for chemicals that degrade.
- Chlorine cylinders (68 kg / 150 lb) stored **upright and chained**; ton containers (~907 kg / 2,000 lb) stored **horizontally** on trunnions/rollers. Keep valve protection hoods on when not connected. **[SUPPLEMENTAL]**

### 2.7 Spill response (general sequence)

```
1. PROTECT PEOPLE  → warn others, evacuate if needed, go upwind/uphill
2. IDENTIFY        → what is it? check label / SDS (section 6)
3. ASSESS          → small & manageable with available training/PPE? or large/unknown?
4. CONTROL         → if trained & safe: stop the source, contain (dike, absorbent, drain covers)
5. CLEAN UP        → approved absorbent/neutralizer, proper disposal
6. REPORT          → supervisor; external reporting if required (Module 18)
7. RECORD / REVIEW → incident report, restock spill kit, learn
```

**Keep spills out of floor drains** — the drain may lead back into the plant (upsetting the biology) or straight to the environment.

### 2.8 Chlorine leak response [SUPPLEMENTAL]

- **Detect small leaks with ammonia vapour** (a squeeze bottle of ammonia water/aqua ammonia held near — **never** spray it on). A **white cloud** (ammonium chloride) shows the leak location.
- **Never put water on a chlorine leak** — chlorine + water forms acids that make the leak **worse** (corrodes the metal).
- Leak response requires **SCBA** and a trained team (two-person minimum). Emergency repair kits: **Kit A** = 68 kg cylinders, **Kit B** = ton containers, **Kit C** = tank cars/trucks.
- If a container is leaking liquid, turn it so the leak is on **top** (gas escapes instead of liquid — liquid releases ~460× more volume).
- Chlorine rooms: ventilation fans **draw from near the floor** (chlorine is heavy); fan switch and gas detector readout **outside** the room; ventilate before entry.
- **Fusible plugs** on containers melt at about **70–74 °C (158–165 °F)** to prevent rupture in a fire.
- Evacuate **upwind** and **uphill**.

### 2.9 Eyewash stations & emergency showers

- Flush eyes/skin for **at least 15 minutes** (longer for some chemicals, e.g., caustics — follow the SDS), holding eyelids open, then get medical attention.
- Stations must be **reachable quickly and without obstruction** (industry standard ANSI Z358.1 uses ~10 seconds travel). **[SUPPLEMENTAL]**
- Activate/test **weekly** to flush lines and confirm operation; keep the path clear.
- Tempered (lukewarm) water is preferred.

### 2.10 Lockout (de-energization)

**Purpose:** prevent unexpected startup or release of energy while someone works on equipment.

**Energy sources to think of:** electrical, mechanical (rotating shafts, springs), **hydraulic, pneumatic, gravity** (raised gates, counterweights), **pressure in pipes**, thermal, chemical, and **stored electrical** (capacitors). Also **flow** — a pump can spin backwards if the check valve leaks.

**Steps (general) [GENERAL / BC-LAW principles]:**
```
1. PREPARE      – identify all energy sources (use written procedure)
2. NOTIFY       – tell affected workers / control room
3. SHUT DOWN    – normal stop
4. ISOLATE      – open disconnect, close & lock valves, block moving parts
5. LOCK & TAG   – EACH worker applies their OWN personal lock (and tag)
6. RELEASE / BLOCK STORED ENERGY – bleed pressure, block gravity, discharge capacitors
7. VERIFY       – TEST that it cannot start (try the start button/local control,
                  use a meter to test for voltage) → return controls to OFF
8. WORK
9. REMOVE       – tools cleared, guards back, people clear; each person removes ONLY their own lock
```

**Key rules**
- **Each worker uses their own personal lock** and keeps the key. Never remove someone else's lock (only under the employer's written procedure for abandoned locks).
- A **tag alone is not a lock** — tags warn; locks prevent.
- **Stop buttons, interlocks and control circuits are NOT energy isolation devices.**
- **Verify** zero energy every time — this is the step most often tested.

### 2.11 Confined spaces

**A confined space** (general definition) is an area that is:
1. Enclosed or partially enclosed,
2. **Not designed or intended for continuous human occupancy**, and
3. Has **limited or restricted entry/exit** (or its configuration hinders first aid/rescue/evacuation),
and it's big enough for a worker to enter. **[BC-LAW — WorkSafeBC Part 9 has the precise definition]**

**Examples at a plant:** wet wells, manholes, digesters, tanks, pits, vaults, valve chambers, clarifier center wells when drained, channels, sewers, silos.

**Why they kill:** atmosphere (O₂ deficiency, H₂S, methane), engulfment (sludge, water), moving equipment, flowing liquid, and **rescuers** — untrained would-be rescuers are a large share of confined-space deaths.

**Entry requirements [BC-LAW principles — WorkSafeBC Part 9; your employer's program provides the details]:**
- A written **hazard assessment** and **written entry procedures** by a qualified person
- **Training** for entrants, attendants/standby, and rescuers
- **Isolation** of energy and piping (lockout; blanking/blinding or double block-and-bleed of lines; not just a closed valve)
- **Atmospheric testing** before entry and **continuous** (or as frequently as required) during the work
- **Ventilation** (mechanical, continuous, from a clean air source)
- **Standby person (attendant)** outside, in constant contact, able to summon rescue — **does not enter** to rescue
- **Rescue plan** and equipment ready **before** entry (harness, lifeline, tripod/winch for vertical entries)
- **Entry permit** / sign-in log

**Atmospheric testing — ORDER MATTERS**
```
1. OXYGEN          – first, because (a) low O₂ is deadly and (b) many LEL sensors
                     need enough O₂ to read correctly
2. FLAMMABLES (LEL) – second
3. TOXICS (H₂S, CO, etc.) – third
```
**Memory trick:** "**O-F-T**" → "**O**nly **F**ools **T**rust their nose."

- Test from **outside** the space first, using a probe/sample line.
- Test at **top, middle and bottom** (gases stratify: methane high, H₂S and chlorine low).
- **Bump-test** the detector (expose to known gas) before each day's use and **calibrate** per the manufacturer.
- Keep testing (continuous monitor on the entrant) — conditions can change (e.g., stirring sludge releases H₂S).

**Acceptable limits (typical, for entry) [BC-LAW principles — confirm with WorkSafeBC Part 9 and your program]:**

| Hazard | Acceptable |
|---|---|
| Oxygen | **19.5% to 23%** |
| Flammable gas | **Below 10% of the LEL** (alarms commonly set at 10% LEL) |
| Toxic gases | Below the applicable exposure limit (H₂S: WorkSafeBC lists a ceiling limit — commonly **10 ppm**; confirm in the WorkSafeBC exposure limit table) |

**LEL / UEL explained:** A flammable gas only burns when mixed with air within a certain range.
- **LEL (Lower Explosive Limit)** — too little fuel below this ("too lean"). Methane LEL = 5%.
- **UEL (Upper Explosive Limit)** — too much fuel above this ("too rich"). Methane UEL = 15%.
- A meter reading "**10% LEL**" methane means 10% **of** the 5% → **0.5% methane by volume** — **not** 10% methane.
- **Above the UEL is still deadly** — it will become explosive as fresh air mixes in, and there's no oxygen to breathe.

**Rescue**
- **Never enter to rescue** unless you are trained, equipped (SCBA/supplied air), and part of the planned rescue.
- **Non-entry rescue** (retrieval by winch/lifeline from outside) is preferred.
- Attendant's job: **stay outside, call for help, attempt non-entry retrieval**.

### 2.12 Working around tanks, lagoons, pumps and machinery

- **Guardrails**, covers and grating must be in place; replace immediately after work.
- **Open tanks and lagoons:** life rings, PFDs, never work alone near open water without a plan; **aerated water is less dense — a person may not float well in aerated tanks**. **[SUPPLEMENTAL]**
- **Rotating equipment:** guards on couplings, belts, chains, shafts. No loose clothing, long hair, jewellery. Never reach around guards.
- **Automatic equipment can start without warning** (float-controlled pumps, timers, SCADA). Lock out before touching.
- **Clarifier mechanisms, bar screen rakes, grit collectors** — high torque, pinch points.

### 2.13 Slips, trips and falls

- Most common operator injuries. Causes: wet/slimy surfaces, algae, **polymer**, grease, ice, hoses left out, missing grating.
- Controls: housekeeping, coil hoses, clean spills immediately, anti-slip surfaces, lighting, handrails, **three points of contact** on ladders.
- **Ladders:** 4:1 angle (1 m out for every 4 m up); extend about **1 m (3 ft)** above the landing; face the ladder; one person at a time.
- **Fall protection** (WorkSafeBC Part 11) — required where a worker could fall **3 m (10 ft) or more**, or where a shorter fall could cause serious injury (e.g., into a tank or onto machinery). **[BC-LAW — confirm details]**
- **Excavations/trenches** deeper than **1.2 m (4 ft)** need shoring/sloping/benching per WorkSafeBC Part 20. **[BC-LAW]**

### 2.14 Electrical safety (details in Module 14)

- Treat all circuits as **live until tested**.
- Only **qualified/authorized** workers work on electrical equipment.
- Keep electrical panels closed and clear (maintain access clearance).
- Water + electricity: dry hands, GFCI (ground-fault circuit interrupter) protection for portable tools in wet areas.
- **Arc flash** hazard when opening panels/racking breakers — requires specialized PPE and training.

### 2.15 Fire safety

| Class | Fuel | Extinguisher |
|---|---|---|
| **A** | Ordinary combustibles: wood, paper, rags ("A = Ash") | Water, ABC dry chemical |
| **B** | Flammable liquids/gases: fuel, oil, solvents ("B = Barrel") | CO₂, ABC dry chemical, foam |
| **C** | Energized electrical ("C = Current") | CO₂, ABC dry chemical — **never water** |
| **D** | Combustible metals | Special dry powder |
| **K** | Kitchen oils/fats | Wet chemical |

**PASS:** **P**ull pin · **A**im at base · **S**queeze · **S**weep.

### 2.16 Worker rights & responsibilities in BC [BC-LAW]

- **Right to know** (hazards, WHMIS, training)
- **Right to participate** (joint health & safety committee / worker representative)
- **Right to refuse unsafe work** — report to supervisor; the employer must investigate; there are specific steps under the OHS Regulation. Workers can't be punished for a legitimate refusal.
- **Responsibilities:** follow procedures, use PPE, report hazards/injuries, don't work impaired.
- **Working alone or in isolation:** employer must have a **check-in procedure** (regular contact at set intervals) — very relevant for small plants and lift stations.

---

## 3. Operator-level understanding

- **Before any entry**: Is this a confined space? If yes — permit/procedure, test (O₂ → LEL → toxics, top/middle/bottom), ventilate, isolate, attendant, rescue plan. No exceptions for "just a quick look."
- **Your gas detector is life-critical equipment.** Bump test daily, calibrate on schedule, wear it in the breathing zone.
- **Your nose is not a detector.** H₂S deadens smell; methane, CO, CO₂ and low O₂ have no smell at all.
- **When a co-worker collapses in a wet well: do NOT go in.** Call for help (911 / site emergency), use the non-entry retrieval system, ventilate, wait for the trained rescue team.
- **Chemicals:** read the SDS, wear the PPE it lists, know where the eyewash is, never mix hypochlorite with acids or ammonia, keep calcium hypochlorite away from oil/grease/rags.
- **Lockout** every time you put hands, tools or body into equipment — including float-controlled pumps and "just clearing a rag."
- **Report** every incident and near miss — this is how programs improve.

---

## 4. MUST MEMORIZE

> 🔴 **These are the most frequently tested safety facts.**

1. **Hierarchy of controls:** Elimination → Substitution → Engineering → Administrative → **PPE (last)**.
2. **H₂S:** rotten eggs, **heavier than air (SG ~1.19)**, deadens smell (olfactory fatigue ~100 ppm), toxic, flammable, corrosive. BC exposure limit: check WorkSafeBC table (commonly cited 10 ppm ceiling).
3. **Methane:** odourless, **lighter than air (SG ~0.55)**, explosive range **5–15%**.
4. **Chlorine:** greenish-yellow, **~2.5× heavier than air**, supports combustion, liquid → gas ~**460×**, detect leaks with **ammonia vapour (white cloud)**, **never use water on a leak**, SCBA for response.
5. **Oxygen:** normal **20.9%**; acceptable **19.5–23%**; <19.5% deficient; >23% enriched.
6. **Flammables:** keep **< 10% LEL**. 10% LEL of methane = 0.5% methane by volume.
7. **Gas test order: O₂ → Flammable → Toxic** (O-F-T). Test **top, middle, bottom**.
8. **Confined space attendant never enters** to rescue; non-entry rescue first.
9. **Lockout:** own lock, own key; release stored energy; **VERIFY** (try to start) before work.
10. Stop buttons/interlocks ≠ isolation.
11. **Eyewash/shower: at least 15 minutes.** Test weekly.
12. **SDS:** 16 sections — 2 hazards, 4 first aid, 6 spills, 7 storage, 8 PPE, 10 reactivity.
13. **Never mix hypochlorite + acid** (→ chlorine gas) or **hypochlorite + ammonia** (→ chloramines).
14. **Calcium hypochlorite + oil/grease/organics → fire.**
15. **Always add acid to water.**
16. Air-purifying respirators **do not supply oxygen**.
17. Fire classes **A (ash), B (barrel), C (current)**; never water on C.
18. Ladders **4:1**, extend ~**1 m** above landing, 3-point contact.
19. Trenches > **1.2 m** need protection.
20. Hearing protection: BC **85 dBA** (8-h) exposure limit.
21. BC workers have the **right to refuse unsafe work**.
22. Wash hands before eating/drinking/smoking — **ingestion** is the main route for biological hazards.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why gases stratify (SG) and where to test | SG: H₂S 1.19, CH₄ 0.55, Cl₂ 2.5 | CO, CO₂, NH₃ properties |
| Why O₂ is tested first | O₂ 19.5–23% | Kit A/B/C for chlorine |
| Why "above UEL" is still dangerous | Methane 5–15% | IDLH meaning (Immediately Dangerous to Life or Health) |
| Why the attendant never enters | < 10% LEL | ANSI Z358.1 (eyewash standard) |
| Why tags alone are not enough | 15-minute eyewash | Specific SDS sections 3, 9, 11–16 |
| Why PPE is last resort | SDS key sections | Fusible plug temperature |
| Why chemicals are stored by compatibility | Incompatible pairs | WorkSafeBC Part numbers |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "If you can't smell H₂S it's safe" | **False** — olfactory fatigue. Only a meter tells you. |
| "Methane collects at the bottom of a wet well" | Methane is **lighter** than air → rises. H₂S and chlorine sink. |
| "Test for toxic gases first" | **Oxygen first**, then flammables, then toxics. |
| "The attendant should enter immediately to help a collapsed worker" | **Never.** Call for help and use non-entry rescue. |
| "A cartridge respirator is fine in a wet well" | APRs don't supply oxygen; not for O₂-deficient/unknown atmospheres. |
| "10% LEL means 10% methane" | 10% **of** the LEL = 0.5% methane. |
| "Spray water on a chlorine leak to knock it down" | **Never** — makes the leak worse (corrosion). |
| "Pressing the stop button is lockout" | Control devices are not isolation. Lock the disconnect, then **verify**. |
| "One lock per crew is enough" | **Each** worker applies their own lock (unless using an approved group lockout procedure). |
| "Store chemicals alphabetically" | Store by **compatibility**. |
| "Flush eyes for 5 minutes" | **At least 15 minutes.** |
| "PPE is the best control" | PPE is the **least** effective — the *last* line of defence. |
| "Chlorine is flammable" | It's **not flammable** but it **supports combustion** (an oxidizer). |

---

## 7. Practice questions

1. An operator is preparing to enter a wet well. In what order should the atmosphere be tested?
   A. Toxic gases, flammable gases, oxygen
   B. Oxygen, flammable gases, toxic gases
   C. Flammable gases, oxygen, toxic gases
   D. The order does not matter if a 4-gas meter is used

2. Which gas is most likely to accumulate near the TOP of an enclosed digester control building?
   A. Hydrogen sulphide
   B. Chlorine
   C. Methane
   D. Carbon dioxide

3. An operator notices a strong rotten-egg smell near the headworks, but after a few minutes can no longer smell it. The operator should conclude:
   A. The H₂S has dissipated and the area is safe
   B. The odour was probably from grease
   C. The sense of smell may be deadened; check the area with a calibrated gas detector
   D. The wind has changed direction, so work can continue

4. A gas meter shows 20.1% oxygen, 12% LEL, and 2 ppm H₂S in a valve chamber. The chamber:
   A. Is safe to enter because oxygen is above 19.5%
   B. Should not be entered — flammable gas exceeds the acceptable limit; ventilate and retest
   C. Is oxygen-enriched
   D. Is safe because H₂S is below 10 ppm

5. The explosive range of methane in air is approximately:
   A. 1–5%
   B. 5–15%
   C. 15–25%
   D. 19.5–23%

6. A co-worker collapses at the bottom of a manhole. The standby person should FIRST:
   A. Climb down immediately to give CPR
   B. Lower a fan into the manhole and climb down
   C. Call for emergency help and begin non-entry retrieval using the lifeline/winch
   D. Remove the gas detector from the entrant

7. Which statement about lockout is correct?
   A. A supervisor's lock protects the whole crew in all cases
   B. After locking the disconnect, the operator should attempt to start the equipment to verify it is de-energized
   C. A "Do Not Operate" tag alone provides the same protection as a lock
   D. Pressing the emergency stop is an acceptable energy-isolation method

8. Which chemical combination is dangerous because it releases chlorine gas?
   A. Sodium hypochlorite and water
   B. Sodium hypochlorite and an acid
   C. Polymer and water
   D. Lime and water

9. Small chlorine gas leaks are located by:
   A. Spraying water on the valve
   B. Holding an open flame near the fittings
   C. Holding an ammonia vapour source near the fittings and looking for a white cloud
   D. Listening with a stethoscope

10. Why are exhaust fan intakes in a chlorine gas room located near the floor?
    A. Chlorine is lighter than air
    B. Chlorine is heavier than air
    C. To cool the chlorinator
    D. Building code requires all fans near the floor

11. Which SDS section describes what to do in an accidental spill?
    A. Section 2
    B. Section 4
    C. Section 6
    D. Section 8

12. A worker gets sodium hydroxide solution splashed in the eyes. The correct immediate response is to:
    A. Neutralize with a weak acid
    B. Flush with clean water at an eyewash for at least 15 minutes, then get medical attention
    C. Rub the eyes gently with a dry cloth
    D. Flush for 1 minute and return to work if no pain

13. An air-purifying (cartridge) respirator is appropriate:
    A. In any confined space
    B. In an oxygen-deficient atmosphere
    C. Only where oxygen is adequate and the contaminant and its concentration are known and within the cartridge's rating
    D. For chlorine leak repair on a ton container

14. Calcium hypochlorite should be stored away from:
    A. Water softener salt
    B. Oils, grease, and other organic material
    C. Concrete floors
    D. Other sealed containers of calcium hypochlorite

15. Which is the MOST effective way to control the hazard of entering a wet well to clear a float?
    A. Wear a harness
    B. Install a float system that can be removed and serviced from outside the wet well
    C. Train the operator in confined space entry
    D. Post a warning sign

16. A 10% LEL reading for methane means the atmosphere contains approximately:
    A. 10% methane by volume
    B. 5% methane by volume
    C. 0.5% methane by volume
    D. 15% methane by volume

17. Which fire extinguisher class should NOT be water-based?
    A. Class A
    B. Class C (electrical)
    C. Burning paper
    D. Burning wood pallets

18. In BC, a worker who believes a task would create an undue hazard to health or safety:
    A. Must complete it and report afterwards
    B. Has the right to refuse the unsafe work and must report it to the supervisor
    C. Must call WorkSafeBC before speaking to the supervisor
    D. Can only refuse if a co-worker agrees

19. Before entering a digester that has been drained, the operator's tests show 19.0% oxygen. The operator should:
    A. Enter wearing an air-purifying respirator
    B. Enter quickly and leave within 5 minutes
    C. Not enter; ventilate and retest until the atmosphere is acceptable (or use supplied air under the entry procedure)
    D. Enter because 19.0% is close enough to normal

20. Which energy source is MOST often overlooked when locking out a pump?
    A. The motor's electrical disconnect
    B. Backflow through the discharge line that can spin the impeller
    C. The lighting circuit
    D. The pump nameplate

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | O₂ first (deadly if low, and LEL sensors need O₂), then flammables, then toxics. A/C wrong order. D: order still matters for interpretation and many sensors. |
| 2 | **C** | Methane SG ≈ 0.55 → rises. A (1.19), B (2.5) and D are heavier than air → low. |
| 3 | **C** | Olfactory fatigue. The smell disappearing can mean concentration increased. A/B/D all trust the nose. |
| 4 | **B** | 12% LEL exceeds the < 10% LEL limit. A ignores flammables. C: enriched is > 23%. D ignores flammables. |
| 5 | **B** | Methane LEL 5%, UEL 15%. D is the acceptable O₂ range — a distractor. |
| 6 | **C** | Attendant never enters; call for rescue and use non-entry retrieval. A/B create a second victim. D is irrelevant. |
| 7 | **B** | Verification ("try" step) is required. A: each worker applies their own lock. C: tags warn but don't prevent. D: E-stop is a control device, not isolation. |
| 8 | **B** | Hypochlorite + acid → chlorine gas. A is normal dilution. C: slippery, not toxic gas. D: lime + water = heat, not chlorine. |
| 9 | **C** | Ammonia + chlorine → white ammonium chloride cloud. A worsens leak. B: fire hazard/irrelevant. D not the method. |
| 10 | **B** | Cl₂ SG ~2.5 → accumulates low. |
| 11 | **C** | Section 6 = accidental release. 2 = hazards; 4 = first aid; 8 = exposure controls/PPE. |
| 12 | **B** | Flush ≥ 15 min (caustic often longer per SDS), then medical attention. A: never neutralize in eyes. C/D cause more damage. |
| 13 | **C** | APRs filter only; require adequate O₂ and known contaminant. A/B/D need supplied air/SCBA. |
| 14 | **B** | Strong oxidizer — contact with organics can cause fire/explosion. |
| 15 | **B** | Elimination/engineering beats training, PPE, or signs (hierarchy of controls). |
| 16 | **C** | 10% × 5% = 0.5%. |
| 17 | **B** | Electrical (C) fires — water conducts electricity. A/C/D are Class A fuels where water is fine. |
| 18 | **B** | BC right to refuse; report to supervisor who investigates. A/C/D not the process. |
| 19 | **C** | 19.0% < 19.5% = oxygen-deficient. APR doesn't supply oxygen (A). B/D are dangerous. |
| 20 | **B** | Water draining back through a leaking check valve can rotate the pump; isolate suction and discharge valves too. |

**Scoring:** 18–20 strong · 14–17 review traps · < 14 redo sections 2.3, 2.10, 2.11.
