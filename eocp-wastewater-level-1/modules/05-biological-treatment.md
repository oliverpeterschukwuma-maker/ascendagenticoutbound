# Module 5 — Biological (Secondary) Treatment

← [Module 4](04-primary-treatment.md) · [Course index](../README.md) · Next → [Module 6 — Secondary Clarification](06-secondary-clarification.md)

**NTK area:** Monitor, Evaluate & Adjust Treatment Processes — the single most important process area for Level I. Math overlap: F/M, SRT, SVI, MLVSS, loading (see [Math 17D](../math/17d-process-pumps-pressure-lab.md)).

**Why this module includes lagoons and fixed-film:** Many BC Level I facilities are **lagoons**, **package extended-aeration plants**, **SBRs**, **oxidation ditches**, **RBCs** or **trickling filters**. The WPI treatment exams cover common biological processes, so you need basic operation of each (Part B and C below), with activated sludge as the core.

---

## 1. What you need to know (checklist)

**Biology basics**
- [ ] What microorganisms do in treatment (eat organics → CO₂ + water + new cells)
- [ ] **Aerobic, anaerobic, anoxic, facultative** — definitions and where each occurs
- [ ] Organisms seen under the microscope and what they indicate (flagellates, amoebae, ciliates, rotifers, filaments)
- [ ] Oxygen requirement; why DO is controlled; typical DO range
- [ ] Factors affecting biology: food, DO, temperature, pH, nutrients, toxics, time

**Activated sludge (Part A)**
- [ ] Complete flow: influent → aeration → secondary clarifier → RAS/WAS → effluent
- [ ] Aeration equipment: diffused (fine/coarse bubble), mechanical surface aerators, blowers
- [ ] Define and use **MLSS, MLVSS, RAS, WAS, SRT/sludge age/MCRT, F/M, SVI, SSV₃₀ (settleometer)**
- [ ] Relationships: what happens to MLSS, F/M, SRT when you waste more or less
- [ ] RAS controls **where** the sludge is; WAS controls **how much** sludge is in the system
- [ ] Process variations: conventional, complete mix, extended aeration, oxidation ditch, contact stabilization, SBR
- [ ] Filamentous organisms & **bulking**; **foaming** (white vs brown vs dark); **rising sludge**; pin floc; dispersed growth
- [ ] What to look for when the process is not performing

**Lagoons (Part B)**
- [ ] Facultative, aerated, and anaerobic lagoons; algae–bacteria relationship
- [ ] Daily DO/pH swings; seasonal effects (ice, turnover); colour indicators
- [ ] Routine operation/maintenance (dikes, vegetation, animals, short-circuiting, levels)

**Fixed-film (Part C)**
- [ ] Trickling filters: parts, recirculation, sloughing, ponding, flies, odours
- [ ] Rotating biological contactors (RBCs): parts, normal biomass, white biomass, shaft problems

---

## 2. Plain-English teaching

### 2.1 The big idea

Secondary treatment uses **living microorganisms (mostly bacteria)** to **eat** the organic matter (BOD) that is dissolved or too fine to settle. The bacteria:
1. **Use the organics as food** (energy + building blocks),
2. **Use oxygen** to "burn" part of the food (aerobic respiration) → **CO₂ + water + energy**,
3. **Grow and reproduce** → more bacteria (new "sludge"),
4. **Clump together into flocs** (sticky clusters) that can be **settled** in a clarifier.

```
   ORGANICS (BOD)  +  OXYGEN  +  BACTERIA   ──►   CO₂ + H₂O + MORE BACTERIA (sludge) + energy
      "food"          "air"      "workers"          (gone)          (settle & remove)
```

**So biological treatment converts dissolved "food" into settleable "bugs"** — then the clarifier removes the bugs. If the bugs don't settle, the treatment fails (that's why Modules 5 and 6 are linked).

### 2.2 Oxygen conditions — learn these 4 words

| Condition | Oxygen available | Where it happens | What happens |
|---|---|---|---|
| **Aerobic** | **Dissolved oxygen (O₂) present** | Aeration tanks, top of lagoons, trickling filters | Fast, odour-free breakdown of BOD; nitrification |
| **Anoxic** | **No DO**, but **nitrate (NO₃⁻)** present (bound oxygen) | Anoxic zones, sludge blanket in clarifier | Bacteria "breathe" nitrate → **denitrification** (N₂ gas) |
| **Anaerobic** | **No DO and no nitrate** | Digesters, bottom of lagoons, septic sewers, bio-P anaerobic zone | Slow breakdown; produces **methane, H₂S, CO₂**, odours |
| **Facultative** (organism) | — | Everywhere | Bacteria that can live **with or without** oxygen (switch methods). Most treatment bacteria are facultative |

**Memory trick:** **A-N-O-X-ic = "Aerobic? NO. But X (nitrate) is there."**

### 2.3 What the bacteria need (factors affecting biological treatment)

| Factor | Why it matters | Normal target [SUPPLEMENTAL] |
|---|---|---|
| **Food (BOD)** | Too little → starving, old sludge; too much → overloaded, poor settling | Balanced with biomass (F/M) |
| **DO** | Aerobic bugs need it | Aeration tank **~1–3 mg/L** (2 mg/L common target) |
| **Temperature** | Warmer = faster; cold slows everything (nitrifiers most) | Stable is better; avoid sudden changes |
| **pH** | Bugs work best near neutral | ~**6.5–8.5** (nitrification best ~7–8) |
| **Nutrients** | Needed for cell growth | BOD:N:P ≈ **100:5:1** |
| **Toxics** | Metals, solvents, high chlorine, extreme pH kill/inhibit bugs | None |
| **Time** | Contact time for bugs to work | Adequate HRT and SRT |
| **Mixing** | Keep bugs in contact with food, prevent settling in the tank | Uniform suspension |

---

## PART A — ACTIVATED SLUDGE

### 2.4 The complete activated sludge flow

```
                        AIR (blowers/diffusers)
                          ↓   ↓   ↓   ↓
Primary     ┌──────────────────────────────────────┐   mixed      ┌──────────────────────┐   clear
effluent ──►│          AERATION TANK               │──liquor ───►│ SECONDARY CLARIFIER  │──effluent──► disinfection
(or screened│   bugs + food + oxygen = MIXED LIQUOR│             │ floc settles         │
 raw)       └──────────────────────────────────────┘             └──────────┬───────────┘
                 ▲                                                          │ settled sludge
                 │                                                          ▼
                 │                  RAS (Return Activated Sludge)      ┌─────────┐
                 └──────────────────────────────────────────────────────│ RAS/WAS │
                           most of the settled sludge goes BACK          │ pumps   │
                                                                         └────┬────┘
                                                                              │ WAS (Waste Activated Sludge)
                                                                              ▼ a small portion is REMOVED
                                                                        to thickening/digestion
```

**Step by step**
1. **Influent (primary effluent)** enters the aeration tank.
2. **Aeration tank:** air is added; bugs + food + water = **mixed liquor**. The bugs eat BOD and form floc.
3. **Secondary clarifier:** the floc settles; clear water leaves over the weirs.
4. **RAS (Return Activated Sludge):** most settled sludge is pumped **back** to the aeration tank so there are always enough hungry bugs. (The bugs are "activated" — already adapted and ready to eat.)
5. **WAS (Waste Activated Sludge):** because the bugs keep growing, the **excess** must be removed, or the system fills up with sludge. WAS goes to the solids train.
6. **Effluent** goes to disinfection and discharge.

**Why "activated"?** Because the returned sludge contains a large, acclimated population of organisms ready to rapidly consume organics.

### 2.5 Aeration equipment

| Type | Description | Notes |
|---|---|---|
| **Fine-bubble diffusers** (membrane discs/tubes, ceramic) | Small bubbles at tank floor | **Highest oxygen transfer efficiency** (more surface area per volume of air). Can foul/clog → higher backpressure |
| **Coarse-bubble diffusers** | Larger bubbles | Lower efficiency, less clogging, good mixing |
| **Mechanical surface aerators** | Rotating impellers/brushes splash water into the air (e.g., brush rotors in oxidation ditches) | Common in oxidation ditches/lagoons; control by speed/immersion depth |
| **Blowers** | Supply air to diffusers (positive displacement or centrifugal) | Control air by blower speed, inlet throttling, or valves; DO-based automatic control common |

**Aeration has two jobs:** (1) supply **oxygen**; (2) **mix** the tank to keep solids suspended.

### 2.6 Activated sludge vocabulary (the heart of the exam)

| Term | Meaning | Why it matters |
|---|---|---|
| **Mixed liquor** | Contents of aeration tank (wastewater + bugs) | — |
| **MLSS** (Mixed Liquor Suspended Solids, mg/L) | Total suspended solids in the aeration tank | Rough measure of how much sludge (biomass + inert) is in the tank |
| **MLVSS** (Mixed Liquor Volatile Suspended Solids, mg/L) | The **organic (volatile)** part of MLSS | Better estimate of **living organisms**. Typically **~70–80%** of MLSS |
| **RAS** | Settled sludge returned to aeration | Keeps biomass in the system; controls clarifier **blanket** |
| **WAS** | Sludge removed from the system | **Main control of sludge inventory, sludge age, F/M** |
| **F/M ratio** (Food-to-Microorganism) | kg BOD entering per day ÷ kg MLVSS in aeration | Balance of food vs bugs |
| **SRT / sludge age / MCRT** | Average time (days) bugs stay in the system | Determines the "age" and type of the biomass; nitrification needs a long enough SRT |
| **HRT** (hydraulic retention time) | Tank volume ÷ flow (hours) | How long the **water** stays — *different* from how long the **bugs** stay |
| **SSV₃₀** (settled sludge volume) | mL/L of sludge after 30 min settling in a settleometer | Shows settleability |
| **SVI** (Sludge Volume Index, mL/g) | SSV₃₀ × 1000 ÷ MLSS | Volume 1 g of sludge occupies after settling. **Low = settles well; high = bulking** |

**Formulas (details in 17D):**
```
F/M     = BOD (kg/d) entering aeration ÷ MLVSS (kg) in aeration
SRT     = kg of solids in system ÷ kg of solids leaving per day (WAS + effluent)
SVI     = SSV₃₀ (mL/L) × 1000 ÷ MLSS (mg/L)
MLVSS   = MLSS × (% volatile ÷ 100)
```

**SRT vs HRT — a key concept:** The water passes through in hours (HRT); the bugs are recycled and stay for **days** (SRT). Recycling is what lets activated sludge keep a large population of slow-growing organisms.

### 2.7 THE RELATIONSHIPS TABLE (memorize the directions)

**If you WASTE MORE sludge (increase WAS):**
```
MLSS ↓     SRT (sludge age) ↓     F/M ↑     sludge becomes "younger"
```
**If you WASTE LESS sludge (decrease WAS):**
```
MLSS ↑     SRT (sludge age) ↑     F/M ↓     sludge becomes "older"
```

| Parameter change | Effect |
|---|---|
| **Increase WAS** | Lower MLSS, lower SRT, higher F/M, younger sludge |
| **Decrease WAS** | Higher MLSS, higher SRT, lower F/M, older sludge |
| **Increase RAS rate** | Lower sludge blanket in clarifier; more sludge in aeration short-term; more hydraulic load on clarifier; thinner RAS |
| **Decrease RAS rate** | Higher blanket in clarifier (risk of denitrification/rising sludge & solids loss); thicker RAS |
| **Influent BOD load increases** (same MLVSS) | F/M increases |
| **Temperature drops** | Biology slows; nitrifiers wash out unless SRT increased |

**Golden rule:** **WAS controls HOW MUCH sludge is in the system. RAS controls WHERE the sludge is (aeration tank vs clarifier).**

**Make changes gradually** — generally no more than about **10–15% change in wasting rate per day**, and give the system time (often 1–3 SRTs) to respond. **[SUPPLEMENTAL]**

### 2.8 Young vs old sludge — what you'll see

| | **Young sludge** (low SRT, high F/M) | **Healthy** | **Old sludge** (high SRT, low F/M) |
|---|---|---|---|
| Settling | Slow, cloudy supernatant, dispersed | Settles well, clear supernatant, firm floc | Settles fast, but leaves **pin floc** (tiny particles) in a cloudy/turbid supernatant |
| Foam | **White, billowy, crisp** (like soap suds) | Light tan, thin, small amount | **Thick, dark brown, greasy/stable** (often *Nocardia/Gordonia*-type) |
| Colour of mixed liquor | Light tan | **Chocolate / medium brown** | Dark brown |
| Microscope (typical sequence) | Many **flagellates & amoebae**, dispersed bacteria, few free-swimming ciliates | **Stalked ciliates** (e.g., *Vorticella*), crawling ciliates, some rotifers, firm floc | Many **rotifers**, nematodes (worms), water bears; stalked ciliates |
| Oxygen uptake | High | Moderate | Low |

**Microorganism "ladder" [SUPPLEMENTAL]** — as sludge ages, the dominant "higher life forms" move up this ladder:
```
Amoebae → Flagellates → Free-swimming ciliates → Stalked / crawling ciliates → Rotifers → Nematodes (worms)
   YOUNG (high F/M) ─────────────────────────────── HEALTHY ──────────────────── OLD (low F/M)
```
Protozoa and rotifers are **indicators** — they eat free bacteria, which helps produce a clear effluent.

### 2.9 Process variations (recognize their typical ranges)

| Process | Description | F/M (kg BOD/kg MLVSS·d) | MLSS (mg/L) | SRT (d) | HRT (h) |
|---|---|---|---|---|---|
| **Conventional (plug flow)** | Long tank; food high at inlet, low at end | ~0.2–0.4 | ~1,500–3,000 | ~5–15 | ~4–8 |
| **Complete mix** | Influent spread throughout; uniform tank; resists shock loads | ~0.2–0.6 | ~2,500–4,000 | ~5–15 | ~3–5 |
| **Extended aeration** (incl. many **package plants** and **oxidation ditches**) | Long aeration, low F/M, lots of biomass; little sludge produced; usually no primary | **~0.05–0.15** | ~3,000–6,000 | **~20–30+** | **~18–36** |
| **Oxidation ditch** | Racetrack-shaped extended aeration with rotors/brushes or diffusers | as extended | as extended | as extended | as extended |
| **Contact stabilization** | Short contact tank + separate stabilization (re-aeration) tank for RAS | varies | — | — | contact ~0.5–1 |
| **SBR (Sequencing Batch Reactor)** | Everything in **one tank in timed steps**: **Fill → React → Settle → Decant → Idle** (and waste) | varies | — | — | — |

*[SUPPLEMENTAL — typical textbook ranges; values differ slightly between references.]*

**Memory trick for SBR steps: "Fat Rats Sit Down Inside" = Fill, React, Settle, Decant, Idle.**

### 2.10 Dissolved oxygen control

- Target **~1–3 mg/L** in the aeration tank (2 mg/L common). **[SUPPLEMENTAL]**
- **Too low (< ~0.5–1 mg/L):** incomplete BOD removal, **low-DO filamentous bulking**, poor nitrification, septic odours, dark colour.
- **Too high (e.g., > 4 mg/L continuously):** **wasted energy** (blowers are usually the biggest power user), possible floc shearing/pin floc from over-mixing, DO carried into anoxic zones (hurts denitrification).
- Measure DO at several points; DO profile changes along a plug-flow tank (lowest near the inlet where food is highest).
- **Sudden DO rise with no change in air** can mean the bugs have **stopped consuming oxygen** → possible **toxic upset** (or very low load). Investigate!

### 2.11 Filamentous organisms, bulking, foaming and rising sludge

**Filamentous organisms** are bacteria that grow in long threads.
- A **few** filaments are good — they form a "backbone" for floc strength.
- **Too many** filaments stick out of the floc and hold flocs apart → the sludge **won't compact** → **filamentous bulking**.

**Bulking sludge** = sludge that settles **slowly and compacts poorly** → high SVI (commonly **> 150–200 mL/g**), high clarifier blanket → solids washout.

**Causes of filamentous bulking [SUPPLEMENTAL]:**
| Cause | Why |
|---|---|
| **Low DO** | Filaments survive low DO better than floc-formers |
| **Low F/M** (too little food, long SRT) | Filaments compete better at low food |
| **Nutrient deficiency** (N or P) | Common with industrial/food-processing waste |
| **Septic wastewater / sulphides** | Favour sulphur-oxidizing filaments (e.g., *Thiothrix*, *Beggiatoa*) |
| **Low pH** | Favours fungi/some filaments |
| **Grease/oil (FOG)** | Favours certain filaments and foaming organisms |

**Non-filamentous (viscous/"zoogloeal") bulking** — slimy, jelly-like sludge, often from nutrient deficiency or high F/M. Recognize only.

**Short-term control of bulking** (buy time while fixing the cause): increase RAS to keep the blanket down, adjust wasting, **chlorinate or add hydrogen peroxide to the RAS** (kills exposed filaments; done carefully), add polymer at the clarifier. **Long-term:** fix the cause (DO, F/M, nutrients, septicity). **[SUPPLEMENTAL]**

**Foaming — identify by colour and texture**
| Foam | Likely cause | Action |
|---|---|---|
| **White, billowy, crisp** (soap-sud-like) | **Young sludge**: start-up, low MLSS, high F/M, low SRT; or surfactants/detergents; possible toxic upset | **Reduce wasting** (build MLSS/SRT); water sprays |
| **Thick, dark tan/brown, greasy, stable (scummy)** | **Old sludge**, high SRT, low F/M; filamentous foaming organisms (e.g., *Nocardia/Gordonia*, *Microthrix*); grease | **Increase wasting** (lower SRT), remove foam from the system (don't recycle it), reduce FOG |
| **Very dark brown to black** | **Septic/anaerobic** conditions; low DO | Increase aeration, check for septic influent/recycle streams |

**Rising sludge** (in the secondary clarifier) — sludge settles, then **clumps float back up** with tiny gas bubbles, often in **patches**. Caused by **denitrification**: nitrate in the settled sludge is converted by bacteria to **nitrogen gas** bubbles, which float the sludge. Happens when the plant **nitrifies** and sludge sits too long in the clarifier. Fix: **increase RAS rate** (shorter clarifier time), **lower blanket**, adjust SRT/DO (see Module 6 & 7).
- **Rising sludge settles well in the settleometer at first and then floats after a while** (e.g., 1–2 hours) — this separates it from bulking (which settles slowly from the start). **[SUPPLEMENTAL]**

**Other floc problems**
| Problem | Appearance | Common cause |
|---|---|---|
| **Pin floc** | Tiny, dense floc particles in a clear-ish effluent; high effluent turbidity | Old sludge (long SRT), over-aeration/turbulence |
| **Dispersed growth / straggler floc** | Turbid, cloudy; bugs not forming floc | Young sludge (high F/M), toxic shock, low DO in some cases |
| **Ashing** | Fine grey ash-like particles on clarifier surface | Old sludge, excessive grease, early denitrification |

### 2.12 How operators run activated sludge — process control

Operators control activated sludge mainly with **three knobs**:
1. **Aeration (DO)** — blower/aerator output.
2. **RAS rate** — to control the clarifier blanket.
3. **WAS rate** — to control MLSS, SRT and F/M.

**Common process-control strategies** (plants usually pick one as the main guide):
- **Constant MLSS** — waste enough to keep MLSS at a target.
- **Constant SRT (sludge age)** — waste a set fraction of the inventory each day. Widely considered the most reliable basic strategy. **[SUPPLEMENTAL]**
- **Constant F/M** — adjust MLVSS to match incoming BOD.
- Plus daily **settleometer**, **DO profile**, **blanket depth**, **microscopic exam**, visual observations (foam, colour, odour).

### 2.13 What to look for when activated sludge is not performing

| Observation | What it suggests |
|---|---|
| **Chocolate-brown mixed liquor, light tan foam, earthy smell, clear effluent** | Healthy |
| Light-coloured mixed liquor, **white billowy foam** | Young sludge / low MLSS / high F/M / possible toxicity |
| **Dark brown, thick, greasy foam** | Old sludge / foaming organisms / grease |
| **Black mixed liquor, rotten-egg odour** | Septic, low DO, anaerobic |
| Settleometer: slow settling, large volume (high SVI) | **Bulking** (check filaments, DO, F/M, nutrients) |
| Settleometer: settles fast, **cloudy supernatant with pin floc** | Old sludge / over-aeration |
| Settleometer: settles then **floats** after 1–2 h | **Denitrification** (rising sludge) |
| **DO rising with no air change + poor BOD removal** | Biology inhibited — **toxic upset** suspected |
| DO can't be maintained even at max air | Overload (high BOD load), diffuser fouling, blower problem, high temperature |
| Clarifier blanket rising | RAS too low, bulking, hydraulic overload (Module 6) |

---

## PART B — LAGOONS (STABILIZATION PONDS)

### 2.14 How lagoons work
Lagoons are large earthen basins where wastewater is held for **weeks to months**. They are simple, cheap, and common in smaller BC communities.

**Facultative lagoon** (most common) — has three layers:
```
 SUNLIGHT ☀
 ┌────────────────────────────────────────────────┐
 │  AEROBIC layer (top)  – algae make O₂ by photosynthesis;  │
 │                         aerobic bacteria eat BOD          │
 ├────────────────────────────────────────────────┤
 │  FACULTATIVE layer (middle) – bacteria work with/without O₂│
 ├────────────────────────────────────────────────┤
 │  ANAEROBIC layer (bottom sludge) – settled solids digest; │
 │                         methane, CO₂, H₂S produced         │
 └────────────────────────────────────────────────┘
```
**The algae–bacteria partnership:** algae use sunlight + CO₂ → make **oxygen**; bacteria use that oxygen to eat BOD → produce **CO₂** that algae use. Win-win.

**Types**
| Type | Oxygen source | Notes |
|---|---|---|
| **Facultative** | Algae (photosynthesis) + wind | Typical depth roughly 1.5–2 m; long detention |
| **Aerated** (partial-mix or complete-mix) | Mechanical aerators or diffused air | Smaller footprint; less algae dependence |
| **Anaerobic** | None | Deep, strong wastes (often industrial); odour risk |
| **Polishing/maturation** | Algae | After other treatment; pathogen reduction |

### 2.15 Daily and seasonal patterns (very testable)
- **DO and pH are HIGHEST in the late afternoon** (algae have been photosynthesizing all day: they add O₂ and remove CO₂ → pH rises, can exceed 9).
- **DO and pH are LOWEST just before dawn** (at night, algae and bacteria both *respire* — use O₂ and give off CO₂).
- **Winter/ice cover:** no sunlight/wind → little O₂ → BOD removal slows; odours at **spring break-up**.
- **Spring and fall turnover:** water layers mix as temperatures change → bottom sludge and odours brought up temporarily.

### 2.16 Lagoon colours [SUPPLEMENTAL]
| Colour | Meaning |
|---|---|
| **Bright/medium green** | Healthy algae; good condition |
| **Blue-green**, scummy "paint-like" | Blue-green algae (cyanobacteria) bloom — can indicate poor conditions; can produce toxins |
| **Pink/red/purple** | **Purple sulphur bacteria** → anaerobic/overloaded conditions, H₂S present |
| **Grey/black** | **Septic/anaerobic** — overloaded or short-circuited |
| **Brown/tan** | Could be diatoms, or silt/erosion |

### 2.17 Lagoon operation & maintenance
- Keep **dikes (berms)** mowed and free of trees/shrubs (roots cause leaks); control **burrowing animals** (muskrats, beavers); watch for erosion and seepage.
- Control **emergent weeds** (cattails) and **duckweed** (blocks sunlight → low DO).
- Maintain proper **water depth** (too shallow → weeds; too deep → less aerobic zone).
- Prevent **short-circuiting** (inlet/outlet placement, series operation).
- Monitor DO, pH, temperature, colour, odours, freeboard, and effluent quality; some lagoons discharge only in certain seasons (per permit).
- Remove accumulated sludge every several years.
- **Drowning hazard** — never work alone near the water; PFD and life ring.

---

## PART C — FIXED-FILM (ATTACHED GROWTH) PROCESSES

In fixed-film processes the bugs grow as a **slime layer (biofilm)** attached to a surface (rock, plastic, discs) — the wastewater flows past them. (In activated sludge, bugs are *suspended* in the water.)

### 2.18 Trickling filters
```
      rotating distributor arms spray wastewater
          ─────────────╋─────────────
     ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼
   ┌──────────────────────────────────────┐
   │  MEDIA (rock or plastic) covered in    │ ◄── air flows through (natural draft/fans)
   │  biofilm slime; water trickles down    │
   └──────────────────────────────────────┘
          UNDERDRAIN (collects water + sloughed slime, lets air in)
                  │
                  ▼ to secondary clarifier (removes sloughed biofilm = "humus")
         ◄── RECIRCULATION back to filter inlet
```
- **Not a filter** in the straining sense — it's a biological contactor.
- **Sloughing:** biofilm grows thick, the inner layer loses access to food/oxygen, and the slime falls off. Normal in moderation; massive sloughing (e.g., after temperature/load change) raises effluent solids.
- **Recirculation** of effluent: keeps media wet, dilutes strong/toxic influent, helps flush, reduces flies and ponding.
- **Common problems [SUPPLEMENTAL]:**
  | Problem | Cause | Fix |
  |---|---|---|
  | **Ponding** (water pools on surface) | Excess biofilm growth, debris, broken/small media plugging voids | Increase recirculation/hydraulic flushing, clean surface, chlorinate lightly, remove debris |
  | **Filter flies** (*Psychoda*) | Intermittently wet media, low hydraulic load | Increase recirculation, flood filter briefly, keep walls wet |
  | **Odours** | Anaerobic zones, overloading, poor ventilation | Increase recirculation, improve ventilation, reduce load |
  | **Icing** | Cold weather | Reduce recirculation, windbreaks/covers |
  | **Uneven distribution** | Clogged orifices on distributor arms, arm not level | Clean nozzles, flush arms, check bearings |

### 2.19 Rotating Biological Contactors (RBCs)
- Large **plastic discs on a horizontal shaft**, about **40% submerged**, slowly rotating (~1–2 rpm). The biofilm alternately contacts wastewater (food) and air (oxygen).
- Usually in **stages** (first stage gets the most load).
- **Normal biomass:** **brown to grey, shaggy**.
- **White/grey-white biomass** (especially on first stages): **sulphur bacteria** (e.g., *Beggiatoa*) → **overloading, low DO, septic influent/H₂S**. Fix: reduce load on first stage (remove baffle/step feed), add air, pre-aerate/control septicity. **[SUPPLEMENTAL]**
- **Excess biomass** can overload the shaft → **shaft/bearing failure**. Check load cells/shaft, bearings, drive.
- Covered to protect media from UV and cold, and to control odours.

---

## 3. Operator-level understanding

**Daily activated sludge routine**
1. **Look/smell/listen:** colour of mixed liquor, foam type and amount, odours, surface turbulence (even air distribution — big boils may mean a broken diffuser; dead spots mean clogging).
2. **DO:** check readings; confirm with a portable meter; adjust air.
3. **Settleometer (SSV₃₀):** read at 5, 10, 15, 20, 30, 60 min; watch supernatant clarity; check for floating after 1–2 h.
4. **Clarifier blanket depth:** adjust RAS.
5. **Lab data:** MLSS, MLVSS, RAS/WAS solids, influent/effluent BOD & TSS, ammonia → calculate F/M, SRT, SVI.
6. **Decide wasting** (small changes), record everything.
7. **Microscope** weekly or when things change.

**Golden troubleshooting habits**
- **Confirm the data** before acting (recalibrate DO probe, re-sample).
- **Change one thing at a time, in small steps**, and wait for the response.
- **Look for the cause upstream** (industrial discharge, septage, recycle flows, weather).
- **Record** what you did and why.

---

## 4. MUST MEMORIZE

1. Biology converts dissolved **organics → CO₂ + water + new cells**; clarifier removes the cells.
2. **Aerobic** = DO present. **Anoxic** = no DO, nitrate present. **Anaerobic** = no DO, no nitrate. **Facultative** = can live either way.
3. Aeration tank DO ≈ **1–3 mg/L** (2 mg/L common).
4. **MLVSS ≈ 70–80% of MLSS** and estimates the living biomass.
5. **RAS** = returned to aeration (controls **where** sludge is / blanket). **WAS** = removed (controls **how much** — MLSS, SRT, F/M).
6. **Waste more → MLSS ↓, SRT ↓, F/M ↑ (younger).** **Waste less → MLSS ↑, SRT ↑, F/M ↓ (older).**
7. **F/M = kg BOD/d ÷ kg MLVSS.** **SVI = SSV₃₀ × 1000 ÷ MLSS.** **SRT = kg solids in system ÷ kg solids leaving/day.**
8. SVI: **~50–150 good**; **> 150–200 bulking**; very low with cloudy supernatant = old/pin floc.
9. Extended aeration: **low F/M (~0.05–0.15), long SRT (20–30+ d), long HRT (18–36 h)**, less sludge.
10. Conventional: F/M ~0.2–0.4, SRT ~5–15 d, HRT ~4–8 h.
11. **SBR: Fill, React, Settle, Decant, Idle.**
12. **Bulking causes: low DO, low F/M, nutrient deficiency, septic/sulphide, low pH, grease.**
13. **White billowy foam = young sludge. Thick brown greasy foam = old sludge / Nocardia. Black = septic.**
14. **Rising sludge = denitrification** (N₂ gas) in the clarifier → increase RAS, lower blanket.
15. Microorganism progression young → old: **amoebae/flagellates → free-swimming ciliates → stalked ciliates → rotifers → nematodes**.
16. **Sudden DO increase without air change = possible toxic upset.**
17. Lagoons: DO & pH **highest late afternoon**, **lowest before dawn**; algae make O₂.
18. Lagoon **pink/red = purple sulphur bacteria (anaerobic/overloaded)**; **grey/black = septic**; **green = healthy**.
19. Trickling filter problems: **ponding, filter flies, odours, icing, sloughing**; **recirculation** fixes many.
20. RBC: ~**40% submerged**; **brown/grey shaggy = normal**; **white = sulphur bacteria (overload/H₂S/low DO)**.
21. Make process changes **gradually** (≈10–15%/day for wasting).

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why RAS and WAS are different controls | Directions in the relationships table | Contact stabilization, step feed |
| SRT vs HRT | F/M, SRT, SVI formulas | *Thiothrix*, *Beggiatoa*, *Microthrix*, *Nocardia/Gordonia* names |
| Why low DO/low F/M favours filaments | Bulking causes list | Oxygen uptake rate (OUR/SOUR) |
| Why lagoon DO/pH swing daily | Foam colours & meanings | Selector (anoxic/aerobic) zones to control filaments |
| Why rising sludge floats (N₂ gas) | Typical ranges table (roughly) | Biotowers, moving-bed biofilm reactors (MBBR) |
| How fixed-film differs from suspended growth | SBR steps | Membrane bioreactors (MBR) |
| Why sudden DO rise can mean toxicity | Lagoon colours | Viscous bulking |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Increase RAS to reduce the amount of sludge in the system" | RAS moves sludge; **WAS removes** it. |
| "To increase sludge age, waste more" | **Waste less** to increase sludge age. |
| "High F/M = old sludge" | High F/M = **young** sludge (lots of food per bug). |
| "White foam = old sludge" | White billowy = **young**. Brown greasy = old. |
| "Bulking and rising sludge are the same" | Bulking = settles **slowly**. Rising = settles, then **floats** (gas). |
| "Anoxic and anaerobic mean the same thing" | Anoxic has **nitrate**; anaerobic has **neither** DO nor nitrate. |
| "SRT and HRT are the same" | HRT = hours (water). SRT = days (bugs). |
| "Lagoon DO is lowest in the afternoon" | Lowest **before dawn**; highest late afternoon. |
| "A trickling filter strains out solids" | It's a **biological** process (biofilm on media). |
| "White growth on RBC discs is healthy" | White = **sulphur bacteria / overload**. Healthy = brown/grey. |
| "More DO is always better" | Excess DO wastes energy and can cause pin floc and hurt denitrification. |
| "MLSS = living bacteria" | MLSS includes inert solids; **MLVSS** estimates the living part. |

---

## 7. Practice questions

1. In the activated sludge process, the main purpose of **returning** sludge (RAS) is to:
   A. Remove excess biomass from the system
   B. Maintain an adequate population of microorganisms in the aeration tank
   C. Disinfect the effluent
   D. Thicken sludge for the digester

2. An operator wants to increase the sludge age (SRT). The operator should:
   A. Increase the WAS rate
   B. Decrease the WAS rate
   C. Increase the RAS rate
   D. Increase the air supply

3. An aeration tank has thick, dark brown, greasy foam that is difficult to break up. The MLSS has been increasing for weeks. The most likely cause is:
   A. Young sludge from low SRT
   B. Old sludge / foaming organisms associated with a long SRT
   C. Toxic shock load
   D. Excessive wasting

4. A new activated sludge plant has just started up. The aeration tank is covered in crisp, white, billowy foam. The operator should most likely:
   A. Increase wasting
   B. Reduce wasting to build up the MLSS
   C. Shut down the blowers
   D. Add chlorine to the aeration tank

5. The condition in which **no dissolved oxygen** is present but **nitrate** is available is called:
   A. Aerobic
   B. Anaerobic
   C. Anoxic
   D. Facultative

6. Which condition is LEAST likely to cause filamentous bulking?
   A. Low DO in the aeration tank
   B. Nutrient deficiency
   C. Septic influent with sulphides
   D. Maintaining DO at 2 mg/L with balanced nutrients and normal F/M

7. A settleometer test shows the sludge settles well in 30 minutes, but after 90 minutes clumps of sludge float to the top. This indicates:
   A. Filamentous bulking
   B. Denitrification (rising sludge)
   C. Young sludge
   D. Pin floc

8. The DO in the aeration tank suddenly rises from 2 to 6 mg/L without any change to blower output, and effluent turbidity increases. The operator should suspect:
   A. Excellent treatment
   B. A toxic or inhibitory discharge reducing microbial activity
   C. A higher organic load
   D. A clogged diffuser

9. Which process typically operates at the LOWEST F/M ratio and longest SRT?
   A. Conventional activated sludge
   B. Complete mix activated sludge
   C. Extended aeration
   D. High-rate activated sludge

10. A microscopic exam shows many rotifers and nematodes and very few flagellates. This suggests:
    A. Young sludge, high F/M
    B. Old sludge, low F/M, long SRT
    C. A recent start-up
    D. Toxic conditions

11. The correct order of steps in a sequencing batch reactor (SBR) is:
    A. Fill, settle, react, decant, idle
    B. Fill, react, settle, decant, idle
    C. React, fill, decant, settle, idle
    D. Decant, fill, react, settle, idle

12. In a facultative lagoon, dissolved oxygen is normally lowest:
    A. At noon
    B. In the late afternoon
    C. Just before sunrise
    D. Just after sunset

13. A facultative lagoon has turned pink/red and smells of rotten eggs. This most likely indicates:
    A. Healthy algae growth
    B. Purple sulphur bacteria due to anaerobic/overloaded conditions
    C. Excessive DO
    D. Low pH from nitrification

14. RBC discs in the first stage are covered with a white biomass. The most likely cause is:
    A. Normal healthy growth
    B. Organic overload / low DO / sulphide causing sulphur bacteria growth
    C. Underloading
    D. Excess nitrate

15. Water is ponding on the surface of a rock trickling filter. A reasonable corrective action is to:
    A. Stop recirculation
    B. Increase hydraulic flushing/recirculation and remove surface debris
    C. Reduce air flow through the filter
    D. Add more rock on top

16. Filter flies around a trickling filter are best controlled by:
    A. Stopping the distributor arm
    B. Keeping the media continuously wet (increase recirculation / brief flooding)
    C. Reducing influent flow to zero
    D. Heating the media

17. An operator increases the WAS rate by 50% in one day to reduce the MLSS quickly. Why is this poor practice?
    A. WAS has no effect on MLSS
    B. Large sudden changes can upset the process; changes should be gradual (about 10–15%/day)
    C. It will raise the SRT too much
    D. It will lower the F/M too much

18. What is the typical fraction of MLSS that is volatile (MLVSS) in an activated sludge plant?
    A. 5–10%
    B. 30–40%
    C. 70–80%
    D. 100%

19. Which statement about aeration is TRUE?
    A. Coarse-bubble diffusers have higher oxygen transfer efficiency than fine-bubble diffusers
    B. Aeration provides both oxygen and mixing
    C. DO should be kept above 6 mg/L at all times
    D. Aeration is not needed in extended aeration plants

20. A plant's mixed liquor is black with a rotten-egg odour. The most likely cause is:
    A. Too much air
    B. Insufficient DO (septic/anaerobic conditions)
    C. Too much wasting
    D. Low influent BOD

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | RAS keeps the biomass in the aeration tank. A = WAS. C/D unrelated. |
| 2 | **B** | Less wasting → sludge stays longer → SRT ↑. A lowers SRT. C moves sludge but doesn't change inventory. D affects DO. |
| 3 | **B** | Thick, brown, stable foam + rising MLSS (long SRT) = old sludge/foaming organisms. A = white foam. C = typically dispersed/white. D would lower SRT. |
| 4 | **B** | White billowy foam at start-up = young sludge, low MLSS → **reduce wasting** to build biomass. A worsens it. C kills the process. D not appropriate. |
| 5 | **C** | Anoxic = nitrate, no DO. |
| 6 | **D** | Normal DO, nutrients and F/M discourage filaments. A/B/C are classic bulking causes. |
| 7 | **B** | Settles, then floats after time = N₂ gas from denitrification. A settles slowly from the start. C = cloudy. D = fine particles in supernatant. |
| 8 | **B** | Bugs stopped using oxygen → DO climbs. Investigate a toxic slug. A: turbidity rising isn't "excellent". C would *lower* DO. D would lower DO/transfer. |
| 9 | **C** | Extended aeration: F/M ~0.05–0.15, SRT 20–30+ d. |
| 10 | **B** | Rotifers/nematodes dominate old sludge. |
| 11 | **B** | Fill → React → Settle → Decant → Idle. |
| 12 | **C** | Algae respire all night; lowest DO just before dawn. |
| 13 | **B** | Pink/red = purple sulphur bacteria, anaerobic, H₂S. |
| 14 | **B** | White = *Beggiatoa*-type sulphur bacteria from overload/H₂S/low DO. |
| 15 | **B** | Flushing removes excess growth/debris. A worsens ponding. C: filters need air. D would worsen plugging. |
| 16 | **B** | Flies breed on intermittently wet media; keep it wet. |
| 17 | **B** | Large changes shock the process; change gradually and observe. A false. C: more wasting *lowers* SRT. D: more wasting *raises* F/M. |
| 18 | **C** | ~70–80%. |
| 19 | **B** | Aeration = oxygen + mixing. A reversed. C wastes energy. D: extended aeration needs a lot of air. |
| 20 | **B** | Black + H₂S odour = anaerobic/septic from low DO. |

**Scoring:** 18–20 strong · 14–17 review the relationships table and foam table · < 14 re-read 2.6–2.11.
