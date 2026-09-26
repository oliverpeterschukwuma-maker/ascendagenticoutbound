# Module 3 — Preliminary Treatment (Headworks)

← [Module 2](02-safety.md) · [Course index](../README.md) · Next → [Module 4 — Primary Treatment](04-primary-treatment.md)

**NTK area:** Monitor, Evaluate & Adjust Treatment Processes; Operate & Maintain Equipment.

---

## 1. What you need to know (checklist)

- [ ] State the **purpose** of preliminary treatment (protect downstream equipment and processes)
- [ ] Describe the **headworks** and the order of units
- [ ] Coarse vs fine screens; manually cleaned vs mechanically cleaned
- [ ] How bar screens are cleaned and controlled (timer, differential level/headloss)
- [ ] Handling and disposal of **screenings** (washing, compacting, odour/vector control)
- [ ] Define **grit**; types of grit chambers (velocity-controlled channel, aerated, vortex); why grit is removed
- [ ] Why **~0.3 m/s (1 ft/s)** velocity is the target in a velocity-controlled grit channel
- [ ] How to adjust an aerated grit chamber (air rate)
- [ ] Grit washing/classifying; checking grit for organic content
- [ ] **Comminutors/grinders** — purpose and problems
- [ ] Hydraulic considerations: channel velocity, headloss, flow measurement (flumes/weirs), bypasses, overflows
- [ ] Problems caused by poor screening or grit removal
- [ ] Safety at the headworks (H₂S, moving rakes, lockout)

---

## 2. Plain-English teaching

### 2.1 The job of preliminary treatment

Raw sewage contains things that **don't belong in a treatment plant's machinery**: rags, wipes ("flushable" wipes don't break down), plastics, sticks, rocks, sand, gravel, coffee grounds, eggshells. Preliminary treatment removes them **so they don't**:
- plug or wrap around pumps,
- wear out pumps, pipes and valves (grit is like sandpaper),
- fill up tanks and digesters,
- jam clarifier mechanisms and sludge lines.

**Preliminary treatment does NOT remove much BOD.** Its job is **protection**, not purification.

### 2.2 The headworks — typical layout

```
 Raw        ┌──────────────┐    ┌───────────────┐    ┌────────────────┐    ┌──────────────┐
 sewage ───►│  SCREENING   │───►│ GRIT REMOVAL  │───►│ FLOW MEASURING │───►│ to PRIMARY   │
 (influent  │ bar screen / │    │ grit channel, │    │ Parshall flume │    │ clarifier or │
  sewer or  │ fine screen  │    │ aerated or    │    │ or weir +      │    │ secondary    │
  force     └──────┬───────┘    │ vortex        │    │ level sensor   │    └──────────────┘
  main)            │            └──────┬────────┘    └────────────────┘
                   ▼                   ▼
             SCREENINGS           GRIT
             (washer/compactor)   (grit pump → cyclone/classifier)
                   ▼                   ▼
                landfill            landfill
```
(Order and equipment vary. Some plants measure flow first. Some have pre-aeration, septage receiving, or odour control here.)

### 2.3 Screening

**Enters:** raw wastewater with rags, plastics, sticks, debris
**What happens:** water passes through openings; solids larger than the openings are caught
**Leaves:** screened wastewater (downstream) + **screenings** (the caught material)
**Why it matters:** protects pumps and all downstream equipment from clogging

| Type | Opening size (typical) [SUPPLEMENTAL] | Notes |
|---|---|---|
| **Coarse / bar screen (bar rack)** | ~**6–50 mm (¼–2 in)** clear spacing; older racks ~25–50 mm | Parallel steel bars. First line of defence |
| **Fine screen** | ~**6 mm or smaller** (some 1–3 mm) | Drum, step, band, perforated-plate screens. Catch more rags/hair; more screenings |
| **Manually cleaned** | Usually coarse | Operator rakes by hand; installed at an angle (~30–60° from horizontal) so it's easier to rake. Often used as a **bypass** screen |
| **Mechanically cleaned** | Coarse or fine | Rake/teeth move up the screen and dump screenings into a trough/conveyor |

**How mechanical screens are controlled:**
- **Timer** (runs every X minutes), and/or
- **Differential level (headloss)** — sensors measure water level **upstream and downstream** of the screen. As the screen blinds (gets clogged), the upstream level rises. When the difference reaches a setpoint, the rake starts.
- **High-level alarm/override** — rake runs continuously.

**Headloss** = the drop in water level (energy) as water passes through the screen. **Clean screen = low headloss. Clogged (blinded) screen = high headloss.**

**Channel velocity** [SUPPLEMENTAL — typical design guidance]:
- **Too slow** in the approach channel (below roughly 0.3–0.4 m/s, ~1–1.25 ft/s) → **grit settles** in the channel.
- **Too fast** through the bars (above roughly 0.9–1.0 m/s, ~3 ft/s) → debris is **forced through** the screen.

**Screenings handling**
- Screenings are wet, smelly, attract flies/rodents, and contain pathogens.
- **Washer/compactor** — washes organics back into the flow and squeezes out water → reduces weight/volume and odour.
- Stored in covered bins; disposed of at a landfill (per local rules).
- Some plants add lime or cover to control odours/flies.
- Always wear gloves; beware of sharps (needles).

### 2.4 Comminution (comminutors, grinders, macerators)

**Enters:** raw wastewater with solids
**What happens:** a rotating cutter shreds solids into smaller pieces that **stay in the flow**
**Leaves:** wastewater with shredded solids (nothing is removed!)
**Why it matters:** protects pumps from large objects — but...

**Problems with comminutors [SUPPLEMENTAL]:**
- Shredded rags can **re-weave ("rope") into mats** downstream → clogging pumps, diffusers, clarifier mechanisms, digester mixers, heat exchangers.
- Cutting teeth wear and need sharpening/replacement.
- Grit damages cutters → grit is often removed **before** comminution where possible.
- Many plants now prefer **fine screens** (which remove material) over comminutors.

Key difference: **Screens remove. Comminutors reduce size and leave it in.**

### 2.5 Grit removal

**What is grit?** Heavy inorganic particles: **sand, gravel, cinders, eggshells, bone fragments, coffee grounds, seeds**. Specific gravity ≈ **2.65** (sand) — much heavier than organic solids (~1.0–1.2). **[SUPPLEMENTAL]**

**Enters:** screened wastewater with grit
**What happens:** flow is slowed enough for **heavy grit to settle** but kept fast enough for **light organics to stay suspended**
**Leaves:** degritted wastewater + **grit** (removed from the bottom)
**Why it matters:** grit **abrades** (wears out) pumps, pipes, valves, and **accumulates** in channels, clarifiers, aeration tanks and digesters, taking up volume.

**The key concept — selective settling**
```
TOO SLOW (< ~0.3 m/s)         JUST RIGHT (~0.3 m/s ≈ 1 ft/s)     TOO FAST (> ~0.3 m/s)
Grit AND organics settle  →   Grit settles, organics stay   →    Grit carried downstream
Grit is smelly, putrescible   suspended                          (wear, accumulation)
(high volatile content)
```

**Types of grit chambers**
| Type | How it works | Operator control |
|---|---|---|
| **Velocity-controlled (horizontal-flow) grit channel** | Long narrow channel with a control section (e.g., proportional weir or Parshall flume) that keeps velocity ≈ **0.3 m/s (1 ft/s)** across a range of flows | Put more/fewer channels in service as flow changes; clean on schedule |
| **Aerated grit chamber** | Air diffusers along one side create a **spiral roll**. Heavy grit falls out to a hopper; lighter organics stay suspended | **Adjust air rate**: too much air → grit carried out; too little air → organics settle with grit |
| **Vortex (cyclonic) grit chamber** | Flow enters tangentially and spins; grit drops to a central hopper; paddle/propeller maintains the vortex | Keep paddle speed and grit pump/air-lift schedule correct |
| **Detritus tank / square grit tank** | Low-velocity tank; settles grit + some organics; organics washed out later | Washing/classification |

**Grit handling**
- Grit is pumped (grit pumps — hardened, abrasion-resistant) or air-lifted to a **cyclone** and **classifier (grit washer)** that separates organics and drains water.
- **Good grit** is washed, relatively **clean and inoffensive**, low in organic (volatile) content.
- **Grey, greasy, smelly grit** with a high volatile content → too many organics settling → velocity too low (grit channel) or air too low (aerated chamber).

**Checking grit removal performance [SUPPLEMENTAL]:**
- Measure grit volume removed per volume of wastewater (track trends; spikes after storms/snowmelt/road sanding).
- Test the **volatile content** of the grit (low = good washing).
- Watch for grit in primary sludge, digesters, and wear on sludge pumps.

### 2.6 Flow measurement at the headworks

Most plants measure influent flow at the headworks using an **open-channel primary device** plus a **level sensor**:
- **Parshall flume** — a shaped constriction; flow is calculated from the upstream water level. Self-cleaning (good for raw sewage).
- **Weirs** (V-notch, rectangular) — used more for cleaner water (solids build up behind weirs).
- **Magnetic flow meter** — in pressure pipes (e.g., force mains).
Details in Module 13.

### 2.7 Hydraulic considerations
- The headworks must pass **peak wet-weather flow**. Units are often installed in parallel (duty + standby).
- **Bypass channel** with a manually cleaned bar screen is used during maintenance or if the mechanical screen fails.
- **Overflows** (at the headworks or upstream) must be reported as required by the permit/regulation (Module 18).
- Rising upstream level = blockage (blinded screen, stuck gate, grit build-up) or flow exceeding capacity.

### 2.8 Other headworks processes you may see (recognize)
- **Pre-aeration** — adds air to freshen septic wastewater, reduce odours, help grease separation.
- **Septage receiving station** — accepts septic-tank haulers' loads (strong, high solids; can shock the plant; screen and meter it).
- **Odour control** — covers + scrubbers/biofilters, especially for H₂S.
- **Flow equalization** — basins that store peak flows and release them evenly (sometimes after grit removal).

---

## 3. Operator-level understanding

**Daily headworks rounds** — look, listen, record:
- Screen: is the rake cycling? Any jams, broken teeth, overload trips? Differential level normal? Screenings bin full?
- Grit: chambers operating, air rate/paddle normal, grit pump/classifier running, grit look and smell (clean vs greasy)?
- Flow: meter reading sensible compared to yesterday and time of day? Flume clean (no debris or grease buildup at the level sensor)?
- Gas detector: H₂S at headworks is common.
- Odours, colours, unusual influent (industrial discharge, septage).

**Common adjustments**
| Situation | Operator action |
|---|---|
| Storm flows coming | Put standby screens/grit channels in service; increase rake frequency; check bypass ready |
| Screen blinding frequently | Increase rake frequency/switch to continuous; check for grease; check the controls and differential level sensors |
| Grit has high organic content / smells | Increase velocity (take a channel out of service) or reduce air in aerated chamber |
| Grit showing up downstream | Decrease velocity (add a channel) or increase air in aerated chamber; check grit pump/collector |
| Screenings too wet/smelly | Check washer/compactor operation |

**Always lock out** a mechanical screen before clearing a jam. Screens can restart automatically on timer or level.

---

## 4. MUST MEMORIZE

1. Preliminary treatment **protects downstream equipment**; removes **rags, debris, grit** (little BOD removal).
2. **Screens remove** material. **Comminutors shred** and leave it in the flow.
3. Comminuted rags can **re-form ("rope")** and clog equipment downstream.
4. **Grit** = heavy inorganic particles (sand, gravel, eggshells, coffee grounds); SG ≈ **2.65**.
5. Grit channel velocity ≈ **0.3 m/s (1 ft/s)** — settle grit, keep organics suspended.
6. **Too slow → organics settle with grit** (smelly, high volatile grit). **Too fast → grit passes downstream.**
7. **Aerated grit chamber:** more air = less grit captured; less air = more organics captured.
8. Mechanical screens start on **timer and/or differential level (headloss)**.
9. **Blinded screen → upstream level rises / headloss increases.**
10. Screenings → **washer/compactor → landfill**; odour, flies, pathogens, sharps.
11. Inadequate grit removal → **abrasion** of pumps/pipes, **accumulation** in tanks/digesters (lost volume).
12. Inadequate screening → **clogged pumps**, wrapped mixers/impellers, plugged pipes, jammed mechanisms, rag mats in digesters.
13. **Parshall flume** = common headworks open-channel flow device (self-cleaning).
14. Headworks = frequent **H₂S** exposure point.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why selective settling works (heavy grit vs light organics) | 0.3 m/s ≈ 1 ft/s | Step screen, drum screen, band screen, perforated plate |
| How headloss signals a blinded screen | Grit SG 2.65 | Detritus tank |
| How air rate controls an aerated grit chamber | Screens remove / comminutors shred | Cyclone, classifier, grit washer |
| Why comminutors create downstream problems | Grit problems = abrasion + accumulation | Septage receiving, pre-aeration |
| Why velocity changes with number of channels in service (Q = A × V) | | Proportional weir |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Preliminary treatment removes most of the BOD" | It removes very little BOD. It **protects** equipment. |
| "A comminutor removes rags from the wastewater" | It **shreds** them; they stay in the flow. |
| "Increase air in an aerated grit chamber to capture more grit" | **More air = less grit captured** (keeps it suspended). |
| "Grit that smells septic means velocity is too high" | Smelly/organic grit = velocity **too low** (organics settling). |
| "Putting another grit channel in service increases velocity" | More channels = more area = **lower** velocity (V = Q ÷ A). |
| "Grit is organic" | Grit is mostly **inorganic** (fixed). |
| "Differential level increases when the screen is clean" | Increases as the screen **blinds**. |

---

## 7. Practice questions

1. The main purpose of preliminary treatment is to:
   A. Remove most of the BOD
   B. Protect downstream equipment and processes from damage and clogging
   C. Disinfect the wastewater
   D. Remove dissolved phosphorus

2. A velocity-controlled grit channel is operated at about:
   A. 0.03 m/s (0.1 ft/s)
   B. 0.3 m/s (1 ft/s)
   C. 3 m/s (10 ft/s)
   D. 30 m/s (100 ft/s)

3. The grit removed from a grit channel is grey, greasy, and has a strong septic odour. The most likely cause is:
   A. The channel velocity is too high
   B. The channel velocity is too low, allowing organics to settle with the grit
   C. The bar screen openings are too small
   D. Too much grit is entering the plant

4. An operator wants to capture MORE organic-free grit in an aerated grit chamber where organics are settling with the grit. The operator should:
   A. Decrease the air rate
   B. Increase the air rate slightly
   C. Shut off the air completely
   D. Bypass the chamber

5. A mechanically cleaned bar screen runs on a differential-level control. The rake starts when:
   A. The downstream level is higher than the upstream level
   B. The difference between upstream and downstream levels increases to the setpoint
   C. Flow drops below average
   D. The screenings bin is empty

6. A disadvantage of comminutors compared to screens is that:
   A. They remove too many solids
   B. Shredded rags remain in the flow and can re-form into mats that clog downstream equipment
   C. They require no maintenance
   D. They cannot be used with grit

7. Which material is NOT considered grit?
   A. Sand
   B. Eggshells
   C. Coffee grounds
   D. Fecal solids

8. A plant has two identical grit channels, with one in service. Flow increases sharply during a storm and grit is observed in the primary clarifier. The operator should:
   A. Take the working channel out of service
   B. Place the second channel in service to reduce velocity
   C. Increase velocity further
   D. Stop the grit pump

9. Inadequate grit removal would most likely cause:
   A. Improved digester performance
   B. Excessive wear on pumps and loss of volume in tanks and digesters
   C. Lower effluent TSS
   D. Higher dissolved oxygen in the aeration tank

10. Screenings from a washer/compactor are normally:
    A. Returned to the aeration tank
    B. Disposed of in a landfill (or as permitted locally)
    C. Discharged with the effluent
    D. Sent to the digester

11. Before clearing a jam in a mechanically cleaned screen, the operator must:
    A. Wait for the timer to stop the rake
    B. Lock out and verify the screen cannot start
    C. Press the local stop button and proceed
    D. Put a tag on the control panel

12. A Parshall flume at the headworks is used to:
    A. Remove grit
    B. Measure flow in an open channel
    C. Screen rags
    D. Add air

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Protection of equipment. A: little BOD removal. C/D are later processes. |
| 2 | **B** | ~0.3 m/s (1 ft/s). A: organics settle. C/D: grit washed through / unrealistic. |
| 3 | **B** | Low velocity lets light organics settle → putrescible grit. A would carry grit *out*, not add organics. C/D unrelated. |
| 4 | **B** | More air → stronger roll → organics stay suspended. A/C make it worse. D removes grit protection. |
| 5 | **B** | Blinding raises upstream level → differential increases → rake starts. A is reversed. C/D unrelated. |
| 6 | **B** | Roping/matting downstream. A: they remove nothing. C: they need blade maintenance. D: grit damages them but they can be used. |
| 7 | **D** | Fecal solids are organic, low density — not grit. |
| 8 | **B** | V = Q ÷ A: more area lowers velocity so grit settles. A/C increase velocity. D stops grit removal. |
| 9 | **B** | Abrasion + accumulation. A/C/D opposite or unrelated. |
| 10 | **B** | Landfill (or as permitted). A/C/D put debris back into the process/environment. |
| 11 | **B** | Lockout and verify. A: can restart. C: stop button ≠ isolation. D: tag alone ≠ lock. |
| 12 | **B** | Flow measurement in open channels. |
