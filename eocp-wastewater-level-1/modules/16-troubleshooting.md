# Module 16 — Troubleshooting (Putting It All Together)

← [Module 15](15-laboratory-sampling.md) · [Course index](../README.md) · Next → [Math 17A](../math/17a-math-foundations.md)

**NTK areas:** Treatment Process Evaluation & **Adjustment** (≈38%) and Equipment Evaluation (≈39%). WPI exam questions are mostly **application** questions — "what is the most likely cause?" and "what should the operator do?" This module trains exactly that.

**Do this module after Modules 1–15.** It pulls everything together.

---

## 1. What you need to know (checklist)

- [ ] A step-by-step **troubleshooting method**
- [ ] The "**first action**" rules the exam rewards
- [ ] For each common problem: **symptoms → possible causes → checks → operator response**
- [ ] How to tell similar problems apart (bulking vs rising sludge vs washout; low DO from overload vs equipment)

---

## 2. The troubleshooting method (use it on every scenario)

```
1. SAFETY FIRST        Is anyone at risk? (gas, chemicals, electrical, confined space)
2. VERIFY              Is the reading/observation real? Check instrument, take a manual sample, go look.
3. GATHER INFO         What changed? Weather, flow, industrial discharge, recent maintenance,
                       equipment status, lab trends, return streams, time of day.
4. LIST CAUSES         Most likely → least likely. Check EQUIPMENT before blaming the PROCESS.
5. CHECK               Test each likely cause quickly and cheaply first.
6. ACT                 Smallest effective change, ONE change at a time, per SOP.
7. NOTIFY              Supervisor; regulator if a permit limit/spill/bypass is involved.
8. MONITOR & RECORD    Watch the response; write down what you saw, did, and why.
```

**Exam "first action" rules:**
1. **Protect people** before anything else.
2. **Verify** before making big changes.
3. **Check equipment** (Is the pump running? Valve open? Blower on?) before changing the biology.
4. **Small, gradual** process changes beat big, sudden ones.
5. **Contain and report** spills, bypasses and permit exceedances.

---

## 3. The scenarios — Symptoms → Causes → Checks → Response

### 3.1 High effluent TSS
| | |
|---|---|
| **Symptoms** | Cloudy effluent; solids over secondary weirs; high lab TSS; often high BOD and P too |
| **Possible causes** | Bulking sludge; rising sludge (denitrification); hydraulic overload (storm); high sludge blanket (RAS too low / RAS pump failed); pin floc (old sludge); straggler/dispersed floc (young sludge or toxicity); algae (lagoons/weirs); short-circuiting; collector failure |
| **Checks** | Blanket depth; settleometer (slow? floats later? cloudy?); flow vs normal; RAS pump & flow; SVI; microscope; SRT trend; weirs level/clean; clarifier drive |
| **Response** | Fix the cause: restore/↑ RAS for high blanket; storm procedures for overload; ↑ RAS for rising sludge; adjust wasting for pin floc (↑) or young sludge (↓); bulking control (Module 5); clean/level weirs |

### 3.2 Poor settling / bulking sludge
| | |
|---|---|
| **Symptoms** | Settleometer settles **slowly**; SSV₃₀ high; **SVI > ~150–200**; blanket high/rising; microscope shows many **filaments** extending out of the floc |
| **Possible causes** | **Low DO**; **low F/M** (long SRT); **nutrient deficiency** (N or P — industrial wastes); **septic influent/sulphides**; **low pH**; **grease** |
| **Checks** | DO profile; F/M & SRT; influent N and P vs BOD (100:5:1); septic odours/H₂S at headworks; pH; FOG; filament identification |
| **Response** | **Short-term:** ↑ RAS to hold the blanket down; consider RAS chlorination or polymer (per SOP, carefully). **Long-term:** fix DO, adjust SRT/F/M, add nutrients, control septicity, control grease |

### 3.3 Rising sludge (denitrification)
| | |
|---|---|
| **Symptoms** | **Clumps/rafts** of sludge floating on the clarifier, with tiny **gas bubbles**; settleometer settles OK then **floats after ~1–2 h**; plant is **nitrifying** (nitrate present) |
| **Possible causes** | Nitrate in sludge + sludge held too long in the clarifier → N₂ gas |
| **Checks** | Effluent nitrate; blanket depth; RAS rate; settleometer at 1–2 h |
| **Response** | **↑ RAS** (shorter time in clarifier), lower blanket; consider anoxic zone/denitrification upstream; adjust SRT/DO if needed |

### 3.4 Low DO in aeration tank
| | |
|---|---|
| **Symptoms** | DO below target; possibly black/dark mixed liquor, septic odour, poor BOD removal, filamentous growth |
| **Possible causes** | **Organic overload** (higher BOD, septage, industrial, return streams); **blower failure/insufficient air**; **fouled/clogged diffusers**; broken air header/valve closed; **high temperature**; nitrification starting (more O₂ demand); faulty DO probe |
| **Checks** | **Verify** with a portable DO meter; blower status, pressure and airflow; valves; diffuser pattern (dead spots/big boils); influent load; temperature |
| **Response** | Restore air (start standby blower, open valves); clean/replace diffusers; reduce load if possible (control return streams, septage); clean/calibrate probe |

### 3.5 Excessive DO
| | |
|---|---|
| **Symptoms** | DO well above target (e.g., > 4 mg/L) |
| **Possible causes** | Over-aeration (wasted energy); **low load** (night, holiday); **toxic upset** (bugs not consuming O₂ — especially if DO **suddenly** rises with poor effluent); failed DO controller/probe |
| **Checks** | Was air changed? Influent load? Effluent quality/turbidity (toxic?); microscope (dead/inactive protozoa?); probe calibration |
| **Response** | Reduce air (energy savings, protect floc and anoxic zones); if **toxic upset** suspected: notify, sample influent, find the source, protect the biomass (reduce wasting, divert/hold the toxic flow if possible) |

### 3.6 High effluent ammonia
| | |
|---|---|
| **Symptoms** | Effluent NH₃-N above normal/permit |
| **Possible causes** | **Low SRT** (over-wasting); **low DO**; **cold temperature**; **low alkalinity/pH**; **toxic/inhibitory discharge**; ammonia overload (return streams, septage) |
| **Checks** | SRT; DO (≥ 2 mg/L?); temperature; alkalinity and pH; influent ammonia/return streams; nitrite (partial nitrification?) |
| **Response** | **↓ wasting** (↑ SRT); ↑ DO; **add alkalinity** if low; control return streams; investigate toxics |

### 3.7 High effluent BOD
| | |
|---|---|
| **Symptoms** | Effluent BOD/CBOD above normal/permit |
| **Possible causes** | **Solids carryover** (TSS contains BOD); organic overload; low DO; low MLSS (over-wasting/washout); toxic upset; short HRT (storms); short-circuiting; nitrification in BOD test (use CBOD) |
| **Checks** | Effluent TSS (often the real cause); DO; MLSS/F/M; influent load; flow; toxicity signs |
| **Response** | Fix solids carryover first; restore DO; adjust biomass; manage loads |

### 3.8 Pump failure (pump won't run)
| | |
|---|---|
| **Symptoms** | Pump not running; wet-well level rising; alarm |
| **Possible causes** | Power failure; tripped breaker/overload; blown fuse; HOA in Off/Hand; level control (float stuck/tangled); motor failure; seized pump (rags, bearings); moisture/thermal sensor trip (submersible) |
| **Checks** | Power present? Panel alarms/trips? HOA position? Floats/level sensor? Amps on restart attempt? |
| **Response** | Start **standby pump**; protect against overflow (portable pump/vac truck if needed); **lock out** before any hands-on inspection; reset once only after finding/fixing the cause; call electrician/maintenance; **report any overflow** |

### 3.9 Low pump flow (pump runs, flow is low)
| | |
|---|---|
| **Symptoms** | Pump running, flow/pressure lower than normal; longer run times |
| **Possible causes** | **Partly clogged impeller** (rags); **worn impeller/wear rings**; **air binding**; **suction blockage/low level → cavitation**; partly closed valve; **wrong rotation**; check valve stuck; force main blockage/scaling/air at high points |
| **Checks** | Suction and discharge pressure; amps vs normal; noise (gravel?); valve positions; air release valves; rotation |
| **Response** | Clear clog (lockout); vent air; open valves; service air release valves; replace worn parts; correct rotation |

### 3.10 High headloss (across a screen, filter, or in a pipe)
| | |
|---|---|
| **Symptoms** | High upstream level; differential level/pressure alarm; reduced flow |
| **Possible causes** | Blinded screen (rags, grease); clogged filter; plugged pipe/valve; partly closed gate; ice; excess flow |
| **Checks** | Upstream vs downstream levels; rake running?; gates/valves position; flows |
| **Response** | Clean/run rake continuously; backwash/clean filter; open gates; put parallel units in service; clear blockage (lockout) |

### 3.11 Screen blockage
| | |
|---|---|
| **Symptoms** | High channel level upstream of screen; rake stalled/tripped; bypass channel overflowing |
| **Possible causes** | Heavy rag/debris load (storm first flush, "flushable" wipes); grease; rake mechanism failure (shear pin, motor overload); control failure (timer/level) |
| **Checks** | Rake status, alarms, shear pin; differential level control |
| **Response** | Switch to standby/bypass manual screen; **lock out before clearing**; increase rake frequency; repair; record and report any bypass |

### 3.12 Grit accumulation
| | |
|---|---|
| **Symptoms** | Grit in channels, primary clarifiers, aeration tanks, digesters; pump wear; lower digester volume |
| **Possible causes** | Grit chamber velocity too high (one channel serving too much flow; too much air in aerated chamber); grit removal equipment failure (pump, classifier, collector); storm/snowmelt grit loads |
| **Checks** | Velocity/air rate; grit pump/collector operation; grit removed per day |
| **Response** | Put more grit channels in service (lower velocity); reduce air in aerated chamber; repair grit equipment; schedule cleaning of downstream tanks |

### 3.13 Clarifier overload (hydraulic or solids)
| | |
|---|---|
| **Symptoms** | Rising blanket and solids loss during **high flow** (hydraulic) or with **high MLSS/poor settling** (solids) |
| **Possible causes** | Storm flow/I&I; units out of service; high MLSS; bulking; very high RAS adding flow |
| **Checks** | Flow vs capacity; units in service; MLSS; SVI; RAS rate |
| **Response** | All clarifiers in service; storm/step-feed mode if available; flow equalization; reduce MLSS gradually (↑ wasting) if solids-overloaded; fix settling |

### 3.14 Excessive foam
| | |
|---|---|
| **Symptoms & causes** | **White, billowy:** young sludge/low MLSS/start-up, detergents, toxicity. **Thick brown, greasy:** old sludge, filamentous foaming organisms (e.g., *Nocardia*), grease. **Dark/black:** septic/low DO |
| **Checks** | Foam colour/texture; SRT/MLSS; F/M; microscope; DO; grease sources |
| **Response** | White → **↓ wasting**. Brown → **↑ wasting**, remove foam from the system (don't recycle), control grease. Black → ↑ aeration, fix septicity. Use water sprays to knock down foam |

### 3.15 Abnormal pH
| | |
|---|---|
| **Symptoms** | pH outside normal range at headworks, aeration or effluent |
| **Possible causes** | **Low:** industrial acid discharge, nitrification consuming alkalinity, alum/ferric overdose, septic conditions, sour digester supernatant. **High:** caustic/lime discharge or overdose, algae in lagoons (afternoon) |
| **Checks** | **Verify** with calibrated meter; alkalinity; chemical feed rates; influent pH trend (slug?); time of day (lagoons) |
| **Response** | Adjust chemical feeds; add alkalinity for low-alkalinity nitrification; isolate/hold a slug if possible; notify and investigate the source (sewer-use bylaw) |

### 3.16 Disinfection failure
| | |
|---|---|
| **Symptoms** | High *E. coli*/fecal coliform; low/no chlorine residual; UV alarms |
| **Possible causes** | **Chlorine:** feed failure (empty cylinder/tank, airlocked pump, plugged ejector, frosted cylinder), increased **demand** (nitrite, ammonia, solids), high flow (less contact time), short-circuiting, weak/old hypochlorite. **UV:** fouled sleeves, failed lamps, low UVT, high TSS, high flow. **Both:** high effluent TSS shielding organisms |
| **Checks** | Residual at contact chamber end; feed equipment; nitrite; TSS; flow; UV intensity, lamp status, sleeve condition |
| **Response** | Restore feed/increase dose; fix upstream solids; clean sleeves/replace lamps; report permit exceedances |

### 3.17 Toxic upset
| | |
|---|---|
| **Symptoms** | Sudden rise in DO (no air change); effluent turbidity/BOD/ammonia up; dispersed floc; white foam; dead/inactive protozoa under the microscope; unusual influent colour/odour/pH |
| **Possible causes** | Industrial discharge (metals, solvents, cleaners), illegal dumping, spill into the sewer |
| **Checks** | Influent samples (save them!); pH, conductivity; microscope; talk to industrial users |
| **Response** | Protect staff (unknown chemicals/gases); notify supervisor and authorities as required; divert/hold flow if possible; **reduce wasting** to keep biomass; reseed if needed; document for sewer-use bylaw enforcement |

### 3.18 Septic influent / odours
| | |
|---|---|
| **Symptoms** | Black influent, **rotten-egg (H₂S)** odour at headworks, corrosion, gas detector alarms |
| **Possible causes** | Long sewer travel times, low flows, warm weather, force mains, septage |
| **Checks** | H₂S readings; influent ORP/DO; time of year |
| **Response** | Gas safety precautions; pre-aeration; odour control chemicals in the collection system (per program); manage septage receiving |

### 3.19 Anaerobic digester upset (souring)
| | |
|---|---|
| **Symptoms** | **VA/ALK ratio rising**, alkalinity falling, **pH falling (late)**, gas production falling, CO₂ % rising, odour/foam |
| **Possible causes** | Overfeeding; temperature change; toxics; poor mixing; thin sludge (short SRT) |
| **Response** | **Reduce feed**, add alkalinity (per SOP), stabilize temperature (≤ 1 °C/day changes), keep mixing; find the cause |

### 3.20 Power failure
| | |
|---|---|
| **Symptoms** | Equipment down; generator should start; SCADA on UPS |
| **Checks** | Generator running and ATS transferred? Fuel? Critical loads (pumps, blowers, disinfection) restored? Lift stations? |
| **Response** | Confirm standby power; manually start/transfer if needed; prioritize pumping (prevent overflows) and disinfection; deploy portable generators; **report overflows/bypasses**; restart equipment in an orderly sequence when power returns |

---

## 4. MUST MEMORIZE — "Problem → First thing to suspect"

| Problem | First suspect |
|---|---|
| Settles slowly, high SVI | **Bulking** (low DO, low F/M, nutrients, septic) |
| Settles then floats | **Denitrification** → ↑ RAS |
| Solids out only in storms | **Hydraulic overload** |
| Rising blanket, thin RAS, normal settleometer | **RAS pump/line failure** |
| White billowy foam | **Young sludge** → ↓ wasting |
| Brown greasy foam | **Old sludge/Nocardia** → ↑ wasting |
| Sudden DO rise, poor effluent | **Toxic upset** |
| Low DO, blowers maxed | **Overload or fouled diffusers** (verify probe) |
| High ammonia in winter | **Cold + low SRT** → ↓ wasting |
| pH falling in nitrifying plant | **Alkalinity used up** → add alkalinity |
| Chlorine residual vanished | **Feed failure or nitrite/demand spike** |
| Gravel sound in pump | **Cavitation** → suction side |
| Pump runs, low flow, normal amps | **Worn impeller/wear rings** or partial clog |
| Pump spins backward | **Check valve** |
| Smelly, greasy grit | **Velocity too low / air too low** |
| Rotten-egg smell at headworks | **Septic influent (H₂S)** → gas safety |
| Digester VA/ALK climbing | **Overfeeding/upset** → cut feed |

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| The 8-step method | "First suspect" table | Microscopic filament IDs |
| Why equipment is checked before process | First-action rules | Advanced bulking chemistry |
| How symptoms point to causes | Foam & settling patterns | Respirometry (OUR) |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| Picking a big process change as the "first action" | First: **safety**, then **verify**, then **check equipment**. |
| Treating every high-TSS problem as bulking | Use the settleometer pattern and flow conditions to tell them apart. |
| "Increase wasting" for every foam | **White** foam needs **less** wasting. |
| Forgetting to **report** | Bypasses, overflows and permit exceedances must be reported. |
| Entering a wet well to fix a pump in an emergency | Confined-space rules still apply in emergencies. |

---

## 7. Practice questions (scenario style)

1. An operator notices increasing solids in the secondary effluent. Flow is normal, the settleometer settles well and the supernatant is clear, but the clarifier blanket has risen from 0.5 m to 2.0 m and the RAS concentration is unusually low. Which condition could be responsible?
   A. Filamentous bulking
   B. RAS pump failure or a plugged RAS line
   C. Denitrification
   D. Young sludge

2. At 2 a.m. a lift-station high-level alarm comes in. When the operator arrives, the lead pump is not running and the panel shows the overload has tripped. What should the operator do FIRST?
   A. Enter the wet well to inspect the pump
   B. Start the standby (lag) pump to control the level, then investigate the tripped pump
   C. Reset the overload repeatedly until the pump runs
   D. Leave and check again in the morning

3. An aeration tank's DO jumps from 1.8 mg/L to 6.5 mg/L within an hour with no change in blower settings. Effluent turbidity is rising and the influent has a solvent-like odour. The most likely cause is:
   A. Improved treatment efficiency
   B. A toxic discharge inhibiting the microorganisms
   C. A sudden increase in organic load
   D. Clogged diffusers

4. Effluent ammonia has risen steadily since November. DO is 2.5 mg/L, alkalinity is adequate, and the operator has been wasting heavily to keep MLSS low. The BEST adjustment is to:
   A. Increase wasting further
   B. Reduce wasting to increase the SRT
   C. Reduce DO to 0.5 mg/L
   D. Add chlorine to the aeration tank

5. A plant using chlorine gas finds its residual has dropped to zero. The scale shows the cylinder weight has not changed for 6 hours. The most likely cause is:
   A. High nitrite in the effluent
   B. The chlorine feed has stopped (empty cylinder, closed valve, or plugged ejector)
   C. The effluent is too clean
   D. Low pH

6. Thick, dark-brown, greasy foam covers the aeration basin and has spread to the secondary clarifier. The MLSS and SRT are higher than normal. The operator should:
   A. Reduce wasting
   B. Increase wasting gradually and remove foam from the system
   C. Recycle the foam to the head of the plant
   D. Shut off aeration

7. A pump's run time at a lift station has doubled over the past week, with no rain. Amps are normal but flow is lower. The most likely cause is:
   A. Increased I&I
   B. A partly clogged or worn impeller / wear rings
   C. The check valve working correctly
   D. Excellent pump efficiency

8. The aeration basin DO is low and cannot be raised even with all blowers at maximum. A portable meter confirms the low DO. Blower discharge pressure is higher than normal. The most likely cause is:
   A. Fouled or clogged diffusers
   B. Low organic load
   C. A faulty DO probe
   D. Over-aeration

9. During a heavy storm, solids are washing over the secondary clarifier weirs. The settleometer is normal. One of the two clarifiers is out of service for maintenance. The best response is to:
   A. Increase wasting
   B. Return the second clarifier to service if possible and follow storm-flow procedures
   C. Reduce aeration
   D. Add chlorine to the clarifier

10. A plant's aeration tank pH has dropped from 7.1 to 6.3 and effluent ammonia is rising. The influent alkalinity is low. The operator should:
    A. Add alum
    B. Add an alkalinity source per SOP
    C. Increase wasting
    D. Reduce DO

11. The grit removed from an aerated grit chamber is grey, greasy and smells septic. The operator should:
    A. Decrease the air rate
    B. Increase the air rate
    C. Shut off the chamber
    D. Increase the flow to the chamber

12. White, crisp, billowy foam appears on the aeration tank a week after the operator doubled the wasting rate. The operator should:
    A. Double the wasting rate again
    B. Reduce wasting to rebuild the MLSS/SRT
    C. Add more air
    D. Add polymer to the aeration tank

13. Effluent *E. coli* counts at a UV plant are above the limit. Lamps are all on. Effluent TSS is normal. What should the operator check FIRST?
    A. Quartz sleeve fouling and UV intensity readings
    B. Chlorine residual
    C. Digester temperature
    D. Grit chamber velocity

14. A digester's volatile acid/alkalinity ratio has risen from 0.1 to 0.4 in five days. Gas production is down. pH is still 7.0. The operator should:
    A. Wait until the pH drops before acting
    B. Reduce feeding, check temperature and mixing, and prepare to add alkalinity
    C. Increase feeding to "feed the bugs"
    D. Raise the temperature 8 °C immediately

15. An operator smells rotten eggs at the headworks and the portable gas detector shows 15 ppm H₂S. The operator should:
    A. Continue working; the smell means the level is low
    B. Leave the area, ventilate, and follow the plant's H₂S procedure before continuing
    C. Put on a dust mask
    D. Hose down the area with water and continue

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Normal settling + rising blanket + thin RAS = sludge isn't being removed → RAS equipment problem. A: settleometer would be slow. C: would float later. D: cloudy supernatant. |
| 2 | **B** | Control the level (prevent overflow) with the standby pump, then investigate safely. A: confined space. C: never reset repeatedly. D: overflow risk. |
| 3 | **B** | Sudden DO rise + worse effluent + odd influent = toxic upset. |
| 4 | **B** | Heavy wasting in cold weather washed out nitrifiers → ↑ SRT. |
| 5 | **B** | Unchanged scale weight = no chlorine leaving the cylinder → feed stopped. |
| 6 | **B** | Old sludge foam → ↑ wasting gradually; remove foam from the system. |
| 7 | **B** | Lower flow at normal amps with no rain → wear/partial clog. A: I&I would raise inflow, not lower pump flow. |
| 8 | **A** | High discharge pressure + low airflow/DO = fouled diffusers (confirmed not a probe problem). |
| 9 | **B** | Hydraulic overload → more clarifier area, storm procedures. |
| 10 | **B** | Nitrification ate alkalinity → add alkalinity. A lowers pH further. |
| 11 | **B** | More air keeps organics suspended. |
| 12 | **B** | Over-wasting → young sludge → reduce wasting. |
| 13 | **A** | Sleeve fouling/low intensity is the most likely UV issue when lamps are on and TSS is normal. |
| 14 | **B** | VA/ALK is the early warning; act before pH drops. |
| 15 | **B** | Gas hazard → leave, ventilate, follow procedure. Dust masks don't protect against H₂S. |
