# Module 6 — Secondary Clarification

← [Module 5](05-biological-treatment.md) · [Course index](../README.md) · Next → [Module 7 — Nutrient Removal](07-nutrient-removal.md)

**NTK areas:** Treatment Process Evaluation & Adjustment (38%) and Equipment (39%). Math overlap: surface overflow rate, solids loading, RAS rate, detention time ([Math 17B](../math/17b-area-volume-flow-time.md), [17D](../math/17d-process-pumps-pressure-lab.md)).

> **Big idea:** The aeration tank turns dissolved "food" into bugs. **The secondary clarifier is where you find out if the bugs settle.** If they don't settle, they leave in the effluent — and the whole biological process has failed. Most "activated sludge problems" show up first in the secondary clarifier.

---

## 1. What you need to know (checklist)

- [ ] Purpose of a secondary clarifier and how it differs from a primary clarifier
- [ ] Parts: center feed well, sludge collector/suction headers, scum skimmer, weirs, launders, RAS/WAS pumps
- [ ] How sludge settles: zones in the clarifier (clear water, settling, thickening/blanket)
- [ ] Measuring the **sludge blanket** and what a rising blanket means
- [ ] Setting and adjusting the **RAS rate**; what happens if RAS is too high or too low
- [ ] Role of **WAS** (inventory control) vs RAS (blanket control)
- [ ] **Surface overflow rate (hydraulic loading)** and **solids loading rate** — what they mean
- [ ] Scum: sources and removal
- [ ] Weirs: cleaning, levelling, algae
- [ ] Solids carryover — causes
- [ ] **Bulking vs rising sludge vs pin floc vs straggler floc vs hydraulic washout** — how to tell them apart
- [ ] Troubleshooting scenarios: symptoms → causes → checks → response

---

## 2. Plain-English teaching

### 2.1 What a secondary clarifier does

**Enters:** **mixed liquor** from the aeration tank (water + bug flocs, typically 1,500–4,000 mg/L of solids)
**What happens:** the water slows down; **flocs settle** to the bottom and form a **sludge blanket**; clear water rises and flows over the weirs
**Leaves:**
- **Clear secondary effluent** (over the weirs) → disinfection
- **Settled sludge** (from the bottom) → mostly **RAS** back to aeration; a little is **WAS**
- **Scum** (from the surface) → scum handling

```
                                    scum skimmer → scum box
       MIXED LIQUOR         ══════════════════════════════════════ ← scum
  from aeration ──► ┌feed┐  CLEAR WATER ZONE           ─► weir ─► SECONDARY EFFLUENT
                    │well│  ~~~~~~~~~~~~~~~~~~~~~~~~~~~            (to disinfection)
                    └────┘  SETTLING ZONE  ↓ ↓ ↓ flocs sinking
                    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ← top of SLUDGE BLANKET
                    ▓▓▓  THICKENING ZONE (blanket)  ▓▓▓▓▓▓▓▓▓
                    └───────────── collector ────────────────┘
                                     │
                          ┌──────────┴──────────┐
                     RAS pump                 WAS pump
                 (back to aeration)      (out to solids handling)
```

### 2.2 Primary vs secondary clarifier — what's different?

| | Primary clarifier | Secondary clarifier |
|---|---|---|
| What comes in | Raw wastewater (after grit removal) | Mixed liquor (bug flocs) |
| What settles | Raw organic and inorganic solids | **Biological floc** (light, fluffy, easily disturbed) |
| Sludge goes to | Thickener/digester | **Mostly back to aeration (RAS)**; some wasted (WAS) |
| Sludge is | Thick-ish, septic quickly | Light, **must be removed quickly** (stays alive; goes septic/denitrifies if held) |
| Typical surface overflow rate | Higher (~30–50 m³/m²·d) | **Lower (~16–32 m³/m²·d, ≈ 400–800 gpd/ft²)** because floc settles slower **[SUPPLEMENTAL]** |
| Extra concern | — | **Solids loading rate** — how many kg of solids per m² per day the clarifier must settle |

### 2.3 The sludge blanket

The **sludge blanket** is the layer of settled sludge on the clarifier floor. It's the most important thing to watch.

**How to measure:** a **"sludge judge"** (clear core-sampler tube lowered to the bottom, closed, pulled up — you read the blanket depth on the tube) or an online **blanket level sensor** (ultrasonic/optical).

**Target [SUPPLEMENTAL]:** keep the blanket **low and stable** — commonly around **0.3–0.9 m (1–3 ft)** deep, and well under a quarter of the tank's water depth. Your plant's O&M manual sets the real target.

| Blanket | What can happen |
|---|---|
| **Too high / rising** | Solids **wash over the weirs** (high effluent TSS). Sludge sits too long → goes **septic** or **denitrifies** (rising sludge) |
| **Too low / almost none** | RAS is pumping **water** instead of sludge (thin RAS) → extra hydraulic load, less efficient |
| **Stable, low** | Good |

### 2.4 RAS — Return Activated Sludge

**RAS controls the sludge blanket (where the sludge is).**

| RAS rate | Effect |
|---|---|
| **Increase RAS** | Pulls sludge out of the clarifier faster → **blanket drops**. RAS gets **thinner**. More flow goes through the clarifier (hydraulic load ↑). Moves more sludge into aeration (MLSS ↑ short-term) |
| **Decrease RAS** | **Blanket rises**. RAS gets **thicker**. Sludge stays longer in the clarifier (risk of septic/denitrification/washout) |

**RAS rate is usually expressed as a % of influent flow:**
```
RAS % = (RAS flow ÷ influent flow) × 100
```
Typical: about **25–100%** of influent flow for conventional plants, often higher for extended aeration. **[SUPPLEMENTAL]**

**One simple way to estimate RAS from the settleometer [SUPPLEMENTAL — Sacramento State method]:**
```
RAS % ≈ SSV₃₀ ÷ (1,000 − SSV₃₀) × 100
```
Example: SSV₃₀ = 300 mL/L → 300 ÷ 700 × 100 = **43%** of influent flow.
*(This is a Level I "recognize" item — the exam is more likely to ask what happens when RAS changes.)*

**Two RAS control approaches:**
- **Constant RAS flow** — set a fixed rate; simple, but the blanket moves up and down with the daily flow.
- **RAS proportional to influent flow** — RAS follows the flow (constant %); blanket more stable.

### 2.5 WAS — Waste Activated Sludge

**WAS controls how much sludge is in the whole system** (MLSS, SRT, F/M — Module 5).
- WAS may be taken from the RAS line or directly from the clarifier/aeration tank.
- Waste in **small, steady amounts** (continuous or many short cycles), not huge slugs.

**Remember the golden rule:** **RAS = where. WAS = how much.**

### 2.6 Loading rates (what limits a clarifier)

**1) Surface overflow rate (SOR) — hydraulic loading**
```
SOR = Flow ÷ Surface area      (m³/m²·d  or  gpd/ft²)
```
Too high → water rises faster than flocs can sink → solids carried over. **Storm flows** are the usual cause.

**2) Solids loading rate (SLR)**
```
SLR = Solids entering the clarifier (kg/d) ÷ Surface area (m²)
Solids entering = MLSS (mg/L) × (influent flow + RAS flow) (m³/d) ÷ 1,000
```
Too high → the blanket can't thicken fast enough and **rises**. High MLSS + high flow + poor settling = solids overload. **[SUPPLEMENTAL — recognize]**

**Notice:** raising the RAS rate **adds** to the solids loading (more flow carrying MLSS into the clarifier). That's why a very high RAS rate during a storm can sometimes make washout worse.

**3) Weir overflow rate** — flow ÷ weir length. Less important for secondary clarifiers if weirs are well designed, but uneven weirs still cause problems.

### 2.7 Scum and weirs

- **Scum** on secondary clarifiers: brown foam carried from aeration (foaming organisms), grease, floating sludge clumps.
- **Removal:** scum skimmer → scum box → pumped away. **Don't recycle foam-causing scum back to aeration** — it re-seeds the foam organisms. Send it to the solids train.
- **Weirs:** must be **level** (otherwise short-circuiting) and **clean** — algae growth on weirs and launders can break off and raise effluent TSS. Brush them regularly (fall hazard — work from proper platforms).

### 2.8 Telling the problems apart — THE most important table in this module

Five problems all "put solids in the effluent". Learn how to tell them apart:

| Problem | What you see in the CLARIFIER | What you see in the SETTLEOMETER | Usual cause | Fix |
|---|---|---|---|---|
| **Filamentous bulking** | Blanket **high and rising**; solids flowing over weirs in large amounts; clear water above blanket at first | Settles **very slowly**; SSV₃₀ very high (e.g., 800+ mL/L); **high SVI (>150–200)** | Low DO, low F/M, nutrient deficiency, septic influent, low pH, grease | Short-term: ↑RAS, chlorinate RAS, polymer. Long-term: fix the cause (Module 5) |
| **Rising sludge (denitrification)** | **Clumps/rafts of sludge floating up**, often with **tiny gas bubbles**; patches all over the surface | Settles well, then **floats after ~1–2 hours** | Nitrate in sludge + sludge held too long → N₂ gas | **↑ RAS rate** (lower blanket/shorter time), consider ↓ SRT or add anoxic zone |
| **Pin floc** | Effluent has **tiny pinpoint flocs**; clear-ish but with fine particles | Settles fast and compact, but **supernatant has fine particles (cloudy)** | **Old sludge** (long SRT), over-aeration/turbulence | ↑ wasting gradually (lower SRT), reduce excess turbulence |
| **Straggler floc / dispersed growth** | **Cloudy / turbid** effluent; small, light, fluffy particles | Settles slowly, **cloudy/turbid** supernatant | **Young sludge** (high F/M, low SRT), toxic shock, start-up | ↓ wasting to build SRT; check for toxic discharge |
| **Hydraulic washout (overload)** | Blanket gets pushed up during **high flow**; solids pour over weirs **during storm/peak** only | Normal settling | Storm flow, I/I, too few clarifiers online, high RAS during peak | Put all clarifiers online; adjust RAS; step-feed/storm mode; reduce flow (equalization) |

**Memory trick — "settles then floats" = Rising. "Won't settle" = Bulking. "Tiny dots" = Pin floc (old). "Cloudy fluff" = Straggler (young). "Only in storms" = Washout.**

### 2.9 Other clarifier problems

| Problem | Cause | Response |
|---|---|---|
| **Septic sludge** (black, H₂S odour) | RAS pump down or too low; collector broken; sludge holding too long | Restore RAS; repair collector; lower blanket |
| **Collector/rake stopped, drive tripped** | Heavy sludge, broken shear pin, ice, obstruction | Lock out; inspect; never put hands in while able to move |
| **Uneven flow between clarifiers** | Unequal flow splitting, weir differences | Adjust splitter box gates; level weirs |
| **Short-circuiting** | Un-level weirs, density currents, wind, damaged baffles | Dye test; level weirs; repair baffles |
| **"Ashing"** (grey ash-like particles on surface) | Old sludge, grease, early denitrification | Adjust SRT; check grease |
| **Excessive scum/foam** | Foaming organisms (old sludge), grease | ↑ wasting, remove scum from system |

---

## 3. Operator-level understanding

**Daily clarifier rounds**
1. **Look at the surface:** clear? floating clumps? scum? bubbles? colour?
2. **Look at the weirs:** even flow all around? solids going over? algae?
3. **Measure the blanket** (same time each day, same location — e.g., halfway out from the center). Record it.
4. **Check RAS flow and RAS concentration** (thick or thin?).
5. **Check the drive:** running? noise? torque normal?
6. **Run the settleometer** (with Module 5) — it predicts what the clarifier will do.
7. **Review effluent TSS/turbidity** trends.

**The decision logic (most exam scenarios follow this)**
```
Rising blanket / solids in effluent?
   │
   ├─ During a storm only? ─────────────► HYDRAULIC overload → all clarifiers in service, storm procedures
   │
   ├─ Settleometer settles SLOWLY? ─────► BULKING → find cause (DO, F/M, nutrients, septic), ↑RAS short-term
   │
   ├─ Settles fine, then FLOATS later? ─► DENITRIFICATION (rising sludge) → ↑RAS, reduce sludge holding time
   │
   ├─ Settles fine, cloudy supernatant? ─► pin floc (old) or straggler (young) → adjust wasting
   │
   └─ Settles fine, nothing odd? ────────► RAS too LOW or RAS pump/collector problem → check equipment, ↑RAS
```

**First check the equipment** (Is the RAS pump running? Is the line plugged? Is the collector turning?) — an equipment failure looks like a process problem. This is often the "best first action" in exam questions.

---

## 4. MUST MEMORIZE

1. Secondary clarifier settles **biological floc** from mixed liquor → clear effluent + RAS + WAS.
2. **RAS controls the blanket** (where the sludge is). **WAS controls the inventory** (how much sludge).
3. **↑ RAS → blanket ↓, RAS thinner.** **↓ RAS → blanket ↑, RAS thicker.**
4. **RAS % = RAS flow ÷ influent flow × 100.**
5. Keep the **blanket low and stable** (commonly ~0.3–0.9 m / 1–3 ft).
6. **SOR = Flow ÷ Surface area.** Secondary SOR is **lower** than primary.
7. **Solids loading** = kg/d of solids ÷ area — high MLSS + high flow = overload.
8. **Bulking = slow settling, high SVI.**
9. **Rising sludge = settles, then floats with gas bubbles (denitrification) → ↑ RAS.**
10. **Pin floc = old sludge.** **Straggler/dispersed = young sludge.**
11. **Washout = hydraulic overload (storms).**
12. Don't recycle foam/scum back to aeration.
13. Level, clean weirs; algae on weirs can raise effluent TSS.
14. Check **equipment** (RAS pump, collector) before changing the process.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why RAS ≠ WAS | The 5-problem table | Solids flux theory, state-point analysis |
| Why sludge held too long rises | ↑RAS → ↓blanket | RAS % ≈ SSV/(1000−SSV) |
| Why storms wash out solids | Blanket target | Suction-header (organ-pipe) sludge removal |
| Why high RAS increases solids loading | SOR formula | Density-current baffles (Stamford/McKinney) |
| How to use the settleometer to predict the clarifier | Secondary SOR lower than primary | Sludge blanket ultrasonic sensors |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Increase WAS to lower the blanket" | **RAS** lowers the blanket. WAS changes total inventory over days. |
| "Rising sludge = bulking" | Rising = **settles, then floats** (gas). Bulking = **doesn't settle**. |
| "Pin floc means young sludge" | Pin floc = **old** sludge. Young sludge = straggler/dispersed floc. |
| "A higher RAS rate always fixes washout" | During hydraulic overload, more RAS adds flow and solids to the clarifier — it may make things worse. |
| "Thick RAS is always good" | Very thick RAS can mean sludge is held too long (septic/denitrification risk). |
| "Secondary clarifiers can handle the same SOR as primaries" | Biological floc settles more slowly → **lower** SOR. |
| Jumping to a process change | The best first step is often **check equipment / verify the reading**. |

---

## 7. Practice questions (including scenarios)

1. The main purpose of a secondary clarifier in an activated sludge plant is to:
   A. Remove grit
   B. Settle biological floc and return it to the aeration tank
   C. Add oxygen to the mixed liquor
   D. Disinfect the effluent

2. An operator notices increasing solids in the secondary effluent. The settleometer test shows the sludge settles slowly and the SSV₃₀ is 900 mL/L. Which condition is most likely responsible?
   A. Rising sludge from denitrification
   B. Filamentous bulking
   C. Pin floc from old sludge
   D. Hydraulic washout

3. In a nitrifying plant, the operator sees clumps of sludge with small gas bubbles floating on the secondary clarifier. The settleometer settles well in 30 minutes but floats after 90 minutes. The BEST response is to:
   A. Decrease the RAS rate
   B. Increase the RAS rate to reduce the time sludge stays in the clarifier
   C. Stop wasting
   D. Turn off the aeration blowers

4. To lower a rising sludge blanket in a secondary clarifier quickly, the operator should:
   A. Increase the WAS rate
   B. Increase the RAS rate
   C. Decrease the RAS rate
   D. Decrease the aeration rate

5. The effluent contains many tiny pinpoint flocs. The settleometer settles quickly with a compact sludge but a slightly cloudy supernatant. The sludge age has been increasing for weeks. The most likely cause is:
   A. Young sludge
   B. Old sludge (pin floc)
   C. Hydraulic overload
   D. Low RAS rate

6. During a heavy rainstorm, solids pour over the secondary clarifier weirs. The settleometer looks normal. What is the most likely cause?
   A. Filamentous bulking
   B. Hydraulic overload (high surface overflow rate)
   C. Denitrification
   D. Nutrient deficiency

7. The secondary clarifier blanket has risen from 0.6 m to 2 m overnight, the RAS concentration is very low, and the settleometer is normal. What should the operator check FIRST?
   A. The influent BOD
   B. Whether the RAS pump is operating and the RAS line is not plugged
   C. The chlorine residual
   D. The digester temperature

8. If the RAS rate is decreased, the sludge blanket in the secondary clarifier will:
   A. Drop
   B. Rise
   C. Not change
   D. Disappear

9. RAS flow is 2,000 m³/d and influent flow is 5,000 m³/d. What is the RAS rate as a percentage of influent flow?
   A. 2.5%
   B. 25%
   C. 40%
   D. 250%

10. Which statement about WAS is TRUE?
    A. WAS controls the sludge blanket depth from hour to hour
    B. WAS controls the total amount of sludge in the system (MLSS and sludge age)
    C. WAS is returned to the aeration tank
    D. WAS should be removed in large slugs once a week

11. Foam and scum from a secondary clarifier caused by foaming organisms should be:
    A. Returned to the aeration tank
    B. Removed from the liquid system and sent to solids handling
    C. Left on the surface
    D. Discharged with the effluent

12. A cloudy, turbid effluent with light fluffy particles appears a few days after a large increase in wasting. The most likely cause is:
    A. Old sludge
    B. Young sludge / dispersed (straggler) floc
    C. Denitrification
    D. Septic sludge

13. Algae is growing heavily on the weirs and launders of a secondary clarifier. The main concern is:
    A. Algae adds oxygen to the effluent
    B. Algae can break off and raise effluent TSS, and uneven weirs can short-circuit flow
    C. Algae lowers the sludge blanket
    D. Algae increases chlorine residual

14. Compared to a primary clarifier, a secondary clarifier is normally designed for a:
    A. Higher surface overflow rate
    B. Lower surface overflow rate
    C. Shorter detention time only
    D. Smaller weir length only

15. Black, septic sludge with an H₂S odour is found in the secondary clarifier. A likely cause is:
    A. RAS rate too high
    B. Sludge held too long because the RAS pump or collector is not working properly
    C. Too much DO in the aeration tank
    D. Too much wasting

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Settle floc, return it as RAS. A = grit chamber. C = aeration. D = disinfection. |
| 2 | **B** | Slow settling + very high SSV₃₀ = bulking. A floats *after* settling. C settles fast. D: settleometer would be normal. |
| 3 | **B** | Denitrification → reduce sludge time in clarifier by ↑RAS. A makes it worse. C raises SRT (more nitrification/nitrate). D kills the process. |
| 4 | **B** | RAS controls the blanket. A works over days, not immediately. C raises it. D unrelated. |
| 5 | **B** | Pin floc + increasing sludge age = old sludge. |
| 6 | **B** | Normal settleometer + storm = hydraulic overload. |
| 7 | **B** | Thin RAS + rising blanket + normal settling = RAS isn't being removed → check pump/line first. |
| 8 | **B** | Less sludge removed → blanket rises. |
| 9 | **C** | 2,000 ÷ 5,000 × 100 = **40%**. A/B misplace decimals. D inverts the ratio. |
| 10 | **B** | WAS controls inventory. A = RAS. C = RAS. D: waste steadily, not in slugs. |
| 11 | **B** | Recycling foam re-seeds foaming organisms. |
| 12 | **B** | Over-wasting → young sludge → dispersed/straggler floc. |
| 13 | **B** | Algae breaks off → TSS; growth can make weir flow uneven. |
| 14 | **B** | Biological floc settles slower → lower SOR. |
| 15 | **B** | Sludge held too long goes septic — check RAS pump and collector. |

**Scoring:** 14–15 strong · 11–13 review section 2.8 · < 11 re-read the whole module.
