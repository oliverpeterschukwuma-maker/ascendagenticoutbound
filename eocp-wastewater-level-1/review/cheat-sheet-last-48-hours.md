# Last 48 Hours Before the Exam — Master Cheat Sheet

← [Course index](../README.md)

> **In the last 48 hours: don't learn new material.** Read this sheet twice, flip through your flashcards and your mistake notebook, do 10 math problems to stay warm, and **sleep**.

**The exam:** WPI Wastewater Treatment Class I (EOCP Level I) · ~100 scored questions (+ unscored pretest items) · 4 options, one best answer · **70% to pass** · formula/conversion sheet provided · **π = 3.14** · weights ≈ **Equipment 39% · Process 38% · Safety/Admin 13% · Lab 10%**.

---

## 1. MUST-KNOW DEFINITIONS

| Term | Meaning |
|---|---|
| Influent / Effluent | Flowing in / flowing out |
| BOD | O₂ used by bacteria in 5 d at 20 °C — organic strength |
| CBOD | BOD with nitrification inhibited |
| COD | O₂ equivalent by chemical (dichromate) — always ≥ BOD |
| TSS / TDS | Caught on filter (103–105 °C) / passes filter |
| VSS | Burns off at 550 °C = organic |
| DO | Dissolved oxygen (aeration target ~2 mg/L) |
| Alkalinity | Buffering capacity, as CaCO₃ |
| MLSS / MLVSS | Solids in aeration / organic (living) part (~70–80%) |
| RAS / WAS | Returned to aeration / removed from system |
| F/M | Food per bug: kg BOD/d ÷ kg MLVSS |
| SRT (sludge age, MCRT) | Days bugs stay in system |
| SVI | mL occupied by 1 g sludge after 30 min |
| Aerobic / Anoxic / Anaerobic | DO / no DO + nitrate / neither |
| Facultative | Lives with or without O₂ |
| Nitrification / Denitrification | NH₃ → NO₂ → NO₃ (aerobic) / NO₃ → N₂ (anoxic) |
| Pathogen / Indicator | Disease organism / E. coli & fecal coliform |
| Dose / Demand / Residual | Added / used up / left over |
| Confined space | Not for continuous occupancy + restricted entry/exit |
| Cavitation | Low suction pressure → vapour bubbles collapse |
| Short-circuiting | Water takes a shortcut → less real detention time |
| Headloss | Energy lost to friction/restriction |

## 2. MUST-KNOW PROCESSES

```
Influent → SCREENS (remove rags) → GRIT (0.3 m/s) → PRIMARY (settle + skim: TSS 50–70%, BOD 25–40%)
        → AERATION (bugs + O₂ → floc) → SECONDARY CLARIFIER (settle floc) → DISINFECTION → outfall
                                        ↑ RAS (where)          ↓ WAS (how much) → thicken → digest → dewater → biosolids
```
- **Waste more → MLSS ↓ · SRT ↓ · F/M ↑ (young).** Waste less → the opposite (old).
- **RAS ↑ → blanket ↓.** Change wasting ≤ ~10–15%/day.
- **Extended aeration:** F/M 0.05–0.15, SRT 20–30+ d, HRT 18–36 h.
- **SBR:** Fill, React, Settle, Decant, Idle.
- **Lagoons:** DO & pH highest late afternoon, lowest at dawn. Pink/red = anaerobic overload. Green = good.
- **Trickling filter:** ponding, flies, odours → recirculate/flush. **RBC:** ~40% submerged; white growth = overload/H₂S.
- **Nitrification:** needs DO ≥ 2, long SRT, warm, pH 7–8, alkalinity (uses ~4.6 O₂ & ~7.1 alk per mg N).
- **Bio-P:** anaerobic (release) → aerobic (uptake) → leaves in WAS. **Chem-P:** alum/ferric → lowers pH, more sludge.
- **Anaerobic digester:** 35 °C, pH 6.8–7.2, VA/ALK < 0.1–0.2, gas 60–70% CH₄. **Upset: VA/ALK ↑ first, pH ↓ last** → cut feed, add alkalinity.
- **Aerobic digester:** DO ≥ 1; pH drops (nitrification).
- **Thickening:** gravity → primary; DAF → WAS. **Belt press:** gravity → wedge → pressure.

## 3. MUST-KNOW EQUIPMENT (39% of the exam!)

| Item | Key fact |
|---|---|
| Centrifugal pump | Head ↑ → flow ↓; must be primed; run near BEP |
| PD pump | Constant flow; **never against closed discharge**; relief valve |
| Packing | **Slight drip**; tighten evenly, a little at a time |
| Mechanical seal | **No leak**; never run dry |
| Wear rings worn | Less flow & pressure |
| Cavitation | Gravel sound; fix the **suction**; never throttle suction |
| Check valve | One way; leaking → pump spins backward / short cycling |
| Gate / Globe | Isolation / throttling |
| Butterfly / Plug / Ball | Quarter-turn; butterfly = air headers; plug = sludge |
| Knife gate, pinch | Sludge/slurry |
| Air release valve | High points of force mains |
| Air gap | Best backflow protection |
| Mag meter | Full pipe + conductive liquid |
| Parshall flume | Open channel; level → flow |
| 4–20 mA | 4 = 0%, 20 = 100%, 0 mA = fault |
| DO probe fouled | Reads LOW → over-aeration |
| pH meter | Buffers 7 then 4/10; store wet |
| HOA | Hand bypasses auto; **Off ≠ lockout** |
| Fuse/breaker · Overload · GFCI | Wires · Motor · People |
| VFD | Changes speed |
| Generator | Exercise regularly under load; ATS transfers; UPS for PLC/SCADA |
| Grease | Over-greasing = heat |
| Misalignment | Vibration, bearing & seal failure |
| Maintenance | Preventive (scheduled), predictive, corrective, emergency |

## 4. MUST-KNOW SAFETY

- **Hierarchy:** eliminate → substitute → engineer → administrate → **PPE last**.
- **H₂S:** heavier (low), rotten eggs, **deadens smell**, toxic, flammable.
- **Methane:** lighter (high), odourless, **5–15%** explosive.
- **Chlorine:** **2.5× heavier**, vents low, ammonia → white cloud for leaks, **never water**, SCBA.
- **O₂ 19.5–23%** · **flammables < 10% LEL** · test **O₂ → LEL → toxics**, top/middle/bottom.
- **Attendant never enters.** Non-entry rescue.
- **Lockout:** own lock, release stored energy, **verify (try)**.
- **Eyewash ≥ 15 min.** **SDS:** 2 hazards · 4 first aid · 6 spills · 7 storage · 8 PPE.
- **Hypochlorite + acid → Cl₂ gas; + ammonia → chloramines.** **HTH + oil → fire.** **Acid into water.**
- Cartridge respirator **≠ oxygen**. Fire C = electrical (no water). Ladder 4:1. BC right to refuse.

## 5. MUST-KNOW PARAMETERS (typical values)

| Parameter | Typical |
|---|---|
| Raw BOD / TSS | ~200 / ~200 mg/L |
| DO saturation at 20 °C | ~9 mg/L |
| Aeration DO | 1–3 (2) mg/L |
| pH for biology | 6.5–8.5 |
| MLVSS/MLSS | 70–80% |
| SVI good / bulking | 50–150 / > 150–200 |
| Grit velocity | 0.3 m/s (1 ft/s) |
| Sewer self-cleansing | 0.6 m/s (2 ft/s) |
| Primary DT | 1.5–2.5 h |
| Chlorine contact | ~15 min at peak flow |
| Hypochlorite strengths | NaOCl ~12%; Ca(OCl)₂ ~65% |
| Digester | 35 °C; pH 6.8–7.2; 60–70% CH₄ |
| Sludge solids | Primary 2–6%; WAS 0.5–1.5%; cake 15–30% |
| BOD test valid | Depletion ≥ 2.0, residual ≥ 1.0 mg/L |
| Federal WSER | CBOD 25, SS 25, TRC 0.02 mg/L |

## 6. MUST-KNOW FORMULAS

```
Area circle = 0.785 × D²          Circumference = 3.14 × D        Volume cyl = 0.785 × D² × depth
Q = A × V                         DT = Volume ÷ Flow (×24 for h)  SOR = Q ÷ area   WOR = Q ÷ weir length
kg/d = mg/L × m³/d ÷ 1,000        lb/d = mg/L × MGD × 8.34        product = active ÷ purity
Dose = Demand + Residual          % removal = (In − Out) ÷ In × 100
C₁V₁ = C₂V₂                       V₂ = V₁ × %₁ ÷ %₂               kg/d sludge = m³/d × % × 10
F/M = kg BOD/d ÷ kg MLVSS         SRT = kg in system ÷ (kg/d WAS + kg/d effluent)
SVI = SSV₃₀ × 1,000 ÷ MLSS        RAS % = RAS ÷ Q × 100
kPa = m × 9.81  ·  ft = psi × 2.31  ·  psi = ft × 0.433
whp = gpm × ft ÷ 3,960   ·   kW(water) = 9.81 × Q(m³/s) × H(m)   → ÷ pump eff ÷ motor eff
V = I × R  ·  P = V × I  ·  kW = hp × 0.746  ·  kWh = kW × h
TSS = Δg × 1,000,000 ÷ mL   ·   BOD = (DOi − DOf) × 300 ÷ mL   ·   °F = °C × 1.8 + 32
```

## 7. MUST-KNOW CONVERSIONS

| | |
|---|---|
| 1 m³ = 1,000 L · 1 ML = 1,000 m³ | 1 L water = 1 kg |
| 1 L/s = 86.4 m³/d · 1 m³/s = 86,400 m³/d | 1 day = 24 h = 1,440 min = 86,400 s |
| 1% = 10,000 mg/L · 1 mg/L = 1 ppm = 1 kg/ML | 1 ft³ = 7.48 gal · 1 gal = 8.34 lb |
| 1 MGD = 694.4 gpm = 1.55 cfs · 1 cfs = 448.8 gpm | 1 gal = 3.785 L · 1 kg = 2.205 lb |
| 1 psi = 2.31 ft = 6.895 kPa · 1 m ≈ 9.81 kPa | 1 hp = 0.746 kW · 1 m = 3.281 ft |

## 8. COMMON EXAM TRAPS

1. **"FIRST" questions** → safety, then **verify**, then **check equipment**, then a small process change.
2. **NOT / EXCEPT** questions — reverse your thinking.
3. **Forgetting × 24** in detention time; using **gpd instead of MGD**; forgetting **÷ 1,000** in kg/d.
4. **Using 65 instead of 0.65**; **multiplying** by purity/efficiency instead of **dividing**.
5. **psi ↔ ft mixed up** (feet is the bigger number).
6. **0.785 with radius** (use D²) or **area instead of circumference** for weirs.
7. **Pin floc = OLD** (not young). **White foam = YOUNG.**
8. **Rising sludge ≠ bulking.** Settles-then-floats vs won't settle.
9. **More air in aerated grit = LESS grit captured.**
10. **Packing should leak; seals shouldn't.**
11. **Off/stop button is not lockout.**
12. **pH is the LAST sign of digester trouble.**
13. **COD > BOD.** **Cold water holds MORE oxygen.**
14. **Attendant never enters.** **Methane rises, H₂S and chlorine sink.**

## 9. COMMONLY CONFUSED TERMS

| These… | …are different because |
|---|---|
| Influent vs effluent | In vs out |
| Infiltration vs inflow | Groundwater through cracks vs direct connections |
| BOD vs COD | Bacteria (5 d) vs chemical (2 h); COD bigger |
| TSS vs TDS | Filter catches vs passes |
| Volatile vs fixed | Organic (burns) vs inorganic (ash) |
| MLSS vs MLVSS | Total vs organic part |
| RAS vs WAS | Return (where) vs waste (how much) |
| SRT vs HRT | Bugs (days) vs water (hours) |
| Anoxic vs anaerobic | Nitrate present vs nothing |
| Nitrification vs denitrification | Aerobic NH₃ → NO₃ vs anoxic NO₃ → N₂ |
| Nitrite vs nitrate | NO₂ (middle; eats chlorine) vs NO₃ (end) |
| Bulking vs rising sludge | Won't settle vs settles then floats |
| Pin floc vs straggler floc | Old vs young |
| Dose vs residual | Added vs left over |
| Free vs combined chlorine | HOCl/OCl⁻ vs chloramines |
| Screen vs comminutor | Removes vs shreds |
| Suction lift vs suction head | Source below vs above pump |
| Packing vs mechanical seal | Drips vs no leak |
| Gate vs globe valve | Isolate vs throttle |
| Fuse vs overload vs GFCI | Wires vs motor vs people |
| Preventive vs corrective maintenance | Before vs after failure |
| Grab vs composite | One moment vs mixed over time |
| Duplicate vs blank vs standard | Precision vs contamination vs accuracy |
| SOR vs WOR | ÷ area vs ÷ weir length |
| LEL vs UEL | Too lean below vs too rich above |
| WorkSafeBC vs EOCP vs MWR | Worker safety vs operator certification vs discharge rules |

---

**Exam-day strategy:** last line first → circle the qualifier (FIRST/NOT/MOST LIKELY) → eliminate 2 wrong answers → pick the best of the last 2 → flag long math and come back → **answer everything**.

**You've done the work. Trust it. Good luck!**
