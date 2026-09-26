# Module 4 — Primary Treatment (Primary Clarification)

← [Module 3](03-preliminary-treatment.md) · [Course index](../README.md) · Next → [Module 5 — Biological Treatment](05-biological-treatment.md)

**NTK area:** Monitor, Evaluate & Adjust Treatment Processes; Operate & Maintain Equipment. Heavy math overlap (detention time, surface overflow rate, weir overflow rate, % removal — see [Math 17B](../math/17b-area-volume-flow-time.md)).

---

## 1. What you need to know (checklist)

- [ ] Purpose of primary clarification; what it removes and typical removal percentages
- [ ] How settling works (gravity, quiescent conditions, time)
- [ ] Rectangular vs circular clarifier parts (inlet/feed well, baffles, sludge collector, hopper, scum skimmer, scum box/beach, effluent weirs, launders, drive)
- [ ] Primary sludge characteristics (solids %, odour, colour) and pumping control
- [ ] Scum: what it is, how it's removed, where it goes
- [ ] **Surface overflow rate (SOR/surface loading)**, **detention time (DT)**, **weir overflow rate (WOR)** — meaning and effect
- [ ] Short-circuiting — causes, effects, detection
- [ ] Hydraulic overload — causes, effects
- [ ] Solids carryover — causes and fixes
- [ ] Septic sludge / gasification / floating sludge
- [ ] What happens when loading/detention/pumping are too high or too low
- [ ] Routine operation, maintenance and safety

---

## 2. Plain-English teaching

### 2.1 What a primary clarifier does

A primary clarifier is a **big, quiet tank**. The water slows down so much that:
- **Heavier solids sink** to the bottom → **primary sludge**
- **Lighter material floats** to the top → **scum** (grease, oil, plastics, hair)
- **Clearer water** flows out over the **weirs** at the top → **primary effluent**

```
                   scum skimmer ─► scum box
                   ═══════════════════════════════ ◄── floating scum
 Influent ──► │feed│      calm settling zone        ┌─ weirs ─► PRIMARY EFFLUENT
 (from grit)  │well│     ↓   ↓   ↓   ↓   ↓   ↓     │           (to biological treatment)
              └────┘  solids settle slowly downward
             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ◄── sludge blanket
               ◄── collector (scraper) moves sludge to hopper
             └──────┐HOPPER┌──────────────────────────
                    └──┬───┘
                       ▼ primary sludge pump ─► thickener / digester
```

**Enters:** degritted raw wastewater
**What happens:** gravity settling (sinkers) + flotation (floaters) under quiet conditions
**Leaves:** primary effluent (to secondary), primary sludge (to solids handling), scum (to scum handling/digester/disposal)
**Why it matters:** removes a large share of the solids and some BOD **cheaply** (no air, no chemicals), reducing the load on the biological process.

**Typical performance [SUPPLEMENTAL]:**
| Parameter | Typical removal in primary clarification |
|---|---|
| TSS | **~50–70%** |
| BOD | **~25–40%** |
| Settleable solids | **~90–95%+** |

**Memory trick:** Primary gets "**half the solids, a third of the BOD**."

Primary clarification removes BOD only because some BOD is *attached to settleable solids*. **Dissolved BOD is not removed** — that's the biology's job.

### 2.2 Clarifier types and parts

| Part | What it does |
|---|---|
| **Inlet / feed well (center well)** | Slows incoming water and spreads it evenly; prevents jetting across the tank |
| **Baffles** | Direct flow, reduce short-circuiting, keep scum from escaping |
| **Sludge collector** | *Rectangular:* **chain-and-flight** scrapers (or travelling bridge). *Circular:* **rotating scraper arms/rakes** driven by a center drive. Pushes settled sludge to the hopper |
| **Hopper (sump)** | Low point where sludge collects to be pumped |
| **Scum skimmer & scum trough/box (beach)** | Pushes floating scum into a trough for removal |
| **Scum baffle** | Keeps floating material from reaching the weirs |
| **Effluent weirs (usually V-notch) & launders** | Collect clarified water evenly around/along the tank edge |
| **Drive unit** | Motor + gearbox; often has a **torque overload** alarm/shear pin to protect it if sludge is too heavy or something jams |

### 2.3 The three key loading parameters

These three numbers tell you whether the clarifier is being asked to do too much. (Full math in [17B](../math/17b-area-volume-flow-time.md).)

**1) Detention time (DT)** — how long, on average, water stays in the tank.
```
DT = Volume ÷ Flow
```
- Typical primary clarifier DT ≈ **1.5–2.5 hours** (at average flow). **[SUPPLEMENTAL]**
- **Too short** (high flow): solids don't have time to settle → carryover.
- **Too long** (low flow, oversized tank): wastewater and sludge go **septic** → odours, H₂S, gasified floating sludge, more soluble BOD sent downstream.

**2) Surface overflow rate (SOR) / surface loading rate** — flow per unit of **surface area**.
```
SOR = Flow ÷ Surface Area       units: m³/m²·d   (US: gpd/ft²)
```
- Think of it as the **upward speed** of water in the tank. If water rises faster than a particle sinks, the particle goes over the weir.
- Typical primary SOR ≈ **30–50 m³/m²·d (≈ 800–1,200 gpd/ft²)** at average flow; peak design higher. **[SUPPLEMENTAL]**
- **Higher SOR → poorer settling** (more solids leave).

**3) Weir overflow rate (WOR) / weir loading** — flow per unit **length of weir**.
```
WOR = Flow ÷ Weir length        units: m³/m·d   (US: gpd/ft)
```
- Typical primary WOR ≈ **125–250 m³/m·d (≈ 10,000–20,000 gpd/ft)**. **[SUPPLEMENTAL]**
- **Too high → high velocities near weirs pull solids up and over.**

### 2.4 Primary sludge and pumping

- **Primary sludge** is grey to dark grey/black, strong odour, with typical solids of about **2–6%** (varies by plant and pumping practice). **[SUPPLEMENTAL]**
- Pumped from the hopper by **positive displacement** (e.g., progressive cavity, plunger) or other sludge pumps, often on **timers** (cycle on/off).

**Getting pumping right:**
| Pumping | Result |
|---|---|
| **Too little / too infrequent** | Sludge blanket builds up → **septic** → gas bubbles lift clumps of **floating sludge**; sludge is carried over the weirs; collector torque increases (heavy sludge); odours |
| **Too much / too long** | Pumps a lot of **water** ("thin sludge") → hydraulic overload of thickeners/digesters, reduced digester detention time, wasted energy. You may see **"coning"** — the pump draws a hole through the sludge and pulls water |
| **Right** | Thick sludge (as high solids as practical) without septic conditions |

**How operators check:** sludge blanket depth (core sampler / "sludge judge"), % solids of pumped sludge (lab), watch the sight glass/density meter — pump until the sludge turns thin, then stop.

### 2.5 Scum
- Scum = grease, oil, fats, soap, plastics, hair, floating debris.
- Skimmed to a scum box/trough → pumped to digester, concentrator, or disposal (site-specific).
- Poor scum removal → scum over weirs, odours, flies, and scum passing to the aeration basin.
- Heavy scum loads can come from restaurants (FOG) — link to sewer-use bylaw enforcement.

### 2.6 Short-circuiting

**Short-circuiting** = some water takes a **shortcut** straight to the outlet, so it spends **much less time** in the tank than the calculated detention time. The rest of the tank becomes a **dead zone**.

```
 NORMAL                          SHORT-CIRCUITING
 inlet ──► ~~~~~~~~ ──► outlet   inlet ═══════════════► outlet  (fast channel)
       spread evenly                   ░░░ dead zone ░░░
```

**Causes:** uneven (un-level) weirs, damaged/missing baffles or feed well, **temperature/density currents** (cold, dense water dives under warm water), wind on the surface, poor inlet design, sludge build-up.
**Effects:** solids carryover, lower removal, septic dead zones.
**Detection:** **dye tracer test** (dye appears at the outlet much sooner than expected); uneven flow over weirs.
**Fix:** level and clean weirs, repair baffles, add wind screens, check inlet.

### 2.7 Hydraulic overload and solids carryover

**Hydraulic overload** = more flow than the clarifier can handle (storms/I-I, returned recycle flows, pumping surges, a unit out of service).
**Effects:** high SOR and WOR, short detention time → **solids carryover** to secondary treatment (extra load on biology, more sludge).

**Causes of solids carryover (summary)**
- Hydraulic overload (high SOR/WOR, short DT)
- Short-circuiting (un-level weirs, damaged baffles, density currents, wind)
- Sludge blanket too high (pumping too little / collector broken)
- Septic, gasified sludge floating up
- Scum passing baffles
- Recycle streams (e.g., supernatant, filtrate) returning heavy solids loads

### 2.8 What happens when things are too high or too low

| Condition | Too high | Too low |
|---|---|---|
| **Flow / SOR / WOR** | Short DT, solids carryover, poor removal | Long DT → septic, odours, floating sludge |
| **Detention time** | (Too long) septic conditions, H₂S, gas | (Too short) poor settling |
| **Sludge blanket** | Septic sludge, floating clumps, carryover, high collector torque | (Too thin a blanket from over-pumping) thin sludge to digester |
| **Sludge pumping rate/time** | Thin, watery sludge; hydraulic overload of solids train | Blanket builds, septic, carryover |
| **Temperature** | Faster septicity, more gas | Slower settling (colder water is more viscous) |

### 2.9 Other things you'll see (recognize)
- **Chemically enhanced primary treatment (CEPT)** — adding coagulant (alum/ferric) and sometimes polymer to improve removal and remove phosphorus.
- **Imhoff tanks / septic tanks** — combined settling + anaerobic digestion (small systems).
- **Co-settling** of waste activated sludge in the primary (some plants send WAS to the primary).

---

## 3. Operator-level understanding

**Routine checks each round**
- Weirs: clean (algae/scum), **level**, flowing evenly all around?
- Surface: floating sludge clumps? gas bubbles? scum escaping?
- Collector/drive: running, smooth, quiet; torque normal; shear pin intact; chains/flights not broken.
- Sludge blanket depth; sludge pump cycle and sludge consistency.
- Scum removal working.
- Effluent clarity; influent/effluent sampling for TSS/BOD/settleable solids → **% removal**.

**Maintenance**
- Brush/clean weirs and launders (algae) — watch for slippery surfaces and **fall hazards**.
- Lubricate drive units and chains per schedule; check oil level in gearboxes.
- Drain and inspect annually (or per schedule) — this is a **confined space** entry once drained.
- Lock out the drive before any work on mechanisms.

**Calculations you'll use:** detention time, SOR, WOR, % removal, sludge solids (kg/day pumped).

---

## 4. MUST MEMORIZE

1. Primary removes **settleable solids (sinkers) and scum (floaters)** by gravity/flotation.
2. Typical removal: **TSS 50–70%, BOD 25–40%** ("half the solids, a third of the BOD").
3. **DT = Volume ÷ Flow**; typical primary **1.5–2.5 h**.
4. **SOR = Flow ÷ Surface area**; higher SOR = poorer settling.
5. **WOR = Flow ÷ Weir length**; high WOR pulls solids over the weirs.
6. **Too little sludge pumping → septic, gasified, floating sludge, carryover.**
7. **Too much sludge pumping → thin sludge, hydraulic overload of downstream solids units.**
8. **Short-circuiting:** water takes a shortcut → less real detention time → carryover. Causes: **un-level weirs**, damaged baffles, **density/temperature currents**, **wind**. Detected with a **dye test**.
9. Primary sludge is typically **~2–6% solids**.
10. Long detention time = septic conditions (odour, H₂S).
11. Drained clarifier = **confined space**.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| SOR as the "upward water speed" vs particle settling speed | DT, SOR, WOR formulas | CEPT, Imhoff tank |
| Why long DT causes septic sludge | Typical % removal | Travelling bridge collector |
| Why over-pumping sludge hurts digesters | Typical DT 1.5–2.5 h | Stamford/McKinney baffles |
| Why short-circuiting reduces performance | Short-circuit causes | Density meter on sludge line |
| Why dissolved BOD isn't removed in primary | Sludge ~2–6% | |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Longer detention time is always better" | Too long → **septic** conditions and floating sludge. |
| "Primary clarifiers remove dissolved BOD" | Only BOD attached to settleable particles. |
| "Surface overflow rate is flow ÷ volume" | SOR = flow ÷ **surface area**. Flow ÷ volume is the inverse of detention time. |
| "Weir overflow rate uses the tank diameter" | It uses weir **length** — for a circular tank, **circumference = π × D** (3.14 × D). |
| "Pump sludge as long as possible to keep the blanket low" | Over-pumping sends thin, watery sludge downstream. |
| "Gas bubbles and rising clumps in a primary = bulking" | In a **primary**, that's **septic sludge** (pump more often). "Bulking" is an activated-sludge term. |
| "Adding a second clarifier increases the SOR" | More area → **lower** SOR. |

---

## 7. Practice questions

1. The primary purpose of a primary clarifier is to:
   A. Oxidize dissolved organic matter
   B. Remove settleable and floatable solids
   C. Disinfect the effluent
   D. Remove grit

2. Clumps of black sludge and gas bubbles are rising to the surface of a primary clarifier on a warm day. The most likely cause is:
   A. Sludge pumping is too frequent
   B. Sludge is remaining in the clarifier too long and turning septic
   C. The surface overflow rate is too low
   D. The weirs are too clean

3. Surface overflow rate is calculated by dividing flow by:
   A. Tank volume
   B. Weir length
   C. Tank surface area
   D. Tank depth

4. A dye test shows dye reaching the effluent weir in 15 minutes, although the calculated detention time is 2 hours. This indicates:
   A. Hydraulic underloading
   B. Short-circuiting
   C. Correct operation
   D. Sludge bulking

5. Which is a common cause of short-circuiting in a circular clarifier?
   A. Weirs that are not level
   B. Too-frequent sludge pumping
   C. Low BOD in the influent
   D. Cold air temperature above the tank

6. An operator notices primary sludge is only 0.5% solids and the digester is receiving far more volume than normal. The best adjustment is to:
   A. Increase sludge pumping time
   B. Reduce sludge pumping time/frequency so thicker sludge is pumped
   C. Increase the surface overflow rate
   D. Remove a clarifier from service

7. Typical BOD removal across a primary clarifier is about:
   A. 5–10%
   B. 25–40%
   C. 70–85%
   D. 95–99%

8. Excessively long detention time in a primary clarifier may result in:
   A. Improved removal of dissolved BOD
   B. Septic conditions and odours
   C. Higher dissolved oxygen
   D. Lower sludge solids

9. The drive unit on a circular primary clarifier trips on high torque. What is a likely process cause?
   A. The sludge blanket is too thin
   B. Excess sludge accumulation or a heavy/obstructed load on the scraper
   C. Weirs are clean
   D. Scum removal is excellent

10. During a storm, primary effluent TSS rises sharply. The most likely reason is:
    A. Increased surface overflow rate and shortened detention time
    B. Septic conditions from long detention time
    C. Reduced weir overflow rate
    D. Improved settling

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Settle sinkers + skim floaters. A = secondary. C = disinfection. D = grit chamber. |
| 2 | **B** | Septic sludge produces gas that floats clumps. A: frequent pumping prevents this. C: low SOR aids settling. D irrelevant. |
| 3 | **C** | SOR = Q ÷ surface area. A = related to DT. B = WOR. |
| 4 | **B** | Dye arriving far sooner than the theoretical DT = short-circuiting. |
| 5 | **A** | Uneven weirs draw more flow from one side. B/C/D don't cause it (though *water temperature* differences can). |
| 6 | **B** | Very thin sludge = over-pumping; reduce pumping. A worsens. C/D unrelated. |
| 7 | **B** | 25–40%. |
| 8 | **B** | Septic, odours, H₂S. A: primary doesn't remove dissolved BOD. C: DO drops. D: not the key effect. |
| 9 | **B** | Heavy accumulated sludge or obstruction raises torque. |
| 10 | **A** | Storm flow → high SOR/WOR and short DT → carryover. B is a low-flow issue. C is the opposite. |
