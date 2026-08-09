/* flashcards.js — flashcard decks with a simple Leitner spaced-repetition system.
 *
 * Cards come from two places:
 *   1. Every "term" defined in curriculum.js (definition cards) — generated automatically.
 *   2. EXTRA_CARDS below — concept, number, troubleshooting, formula and safety cards.
 *
 * Leitner boxes: 1 (new/wrong) → 2 → 3 → 4 → 5 (mastered).
 * Review intervals in days: box1=0 (same session), box2=1, box3=3, box4=7, box5=16.
 * Getting a card right moves it up one box; getting it wrong sends it back to box 1.
 */

const LEITNER_INTERVALS = { 1:0, 2:1, 3:3, 4:7, 5:16 };

/* Extra cards beyond the auto-generated definitions.
   m = module id, q = question/front, a = answer/back, tag = card category */
const EXTRA_CARDS = [
  /* ---- Added in content audit ---- */
  {m:'m4', tag:'concept', q:'What colour and odour indicate healthy activated sludge?', a:'Chocolate-brown with an earthy/musty odour. Black with a rotten-egg smell means septic (no oxygen).'},
  {m:'m8', tag:'concept', q:'Why exercise standby pumps, motors and generators regularly?', a:'Idle equipment seizes, corrodes, flattens batteries and degrades fuel — it then fails to start when you actually need it. Routine exercising is a core operator duty.'},
  {m:'m8', tag:'concept', q:'Chemical day tank will run empty over the weekend. What do you do?', a:'Replenish the stock and log the delivery. Never cut the dose to stretch supply — that deliberately under-treats the water.'},
  {m:'m9', tag:'concept', q:'Name the core routine DAILY operator duties.', a:'Walk the plant and observe each process, take readings and samples, run the quick tests (settleometer, DO, pH), and record everything in the operating log.'},
  {m:'m3', tag:'trouble', q:'Why must settling basins be cleaned on schedule?', a:'Accumulated sludge steals effective tank volume, shortens detention time and turns septic — releasing odours and dissolved organics back into the flow.'},

  {m:'m2', tag:'concept', q:'What is the purpose of flow equalization?', a:'To dampen flow AND load peaks so downstream processes receive a steadier rate — protecting clarifiers, chemical dosing and disinfection contact time.'},
  {m:'m2', tag:'trouble', q:'Equalization basin is odorous with solids on the bottom. Cause?', a:'Inadequate mixing/aeration. Without mixing, solids settle and the basin goes septic.'},
  {m:'m2', tag:'concept', q:'In-line vs side-line equalization?', a:'In-line passes ALL flow through the basin, damping flow and concentration. Side-line diverts only flow above a set rate — smaller and cheaper, but shaves peaks only.'},
  {m:'m2', tag:'concept', q:'Do grinders and comminutors remove solids?', a:'No. They shred solids and leave them in the flow. Only screens REMOVE material. Shredded rags can re-knit into ropes that bind pumps.'},
  {m:'m12', tag:'formula', q:'US loading formula and the meaning of 8.34?', a:'lbs/day = mg/L x MGD x 8.34. The 8.34 is pounds per US gallon of water.'},
  {m:'m12', tag:'formula', q:'How many US gallons in a cubic foot? Pounds per cubic foot of water?', a:'7.48 gallons per ft³; 62.4 lbs per ft³.'},
  {m:'m12', tag:'formula', q:'1 MGD equals how many gpm?', a:'694.4 gpm (1,000,000 gal ÷ 1,440 min).'},
  {m:'m12', tag:'concept', q:'In which units does the WPI exam present calculations?', a:'Both US Standard and Metric — US Standard first, metric in parentheses. Each item is solvable in either system independently.'},
  {m:'m12', tag:'concept', q:'What calculator may you use on the EOCP exam?', a:'A basic four-function calculator. Programmable calculators are NOT permitted, and the exam is closed book.'},

  /* ---- Module 1 ---- */
  {m:'m1', tag:'number', q:'Typical raw domestic wastewater BOD₅?', a:'About 200 mg/L.'},
  {m:'m1', tag:'number', q:'Typical raw domestic wastewater TSS?', a:'About 200–250 mg/L.'},
  {m:'m1', tag:'number', q:'pH range that keeps biological treatment healthy?', a:'6.5 to 8.5 (ideally near 7.0).'},
  {m:'m1', tag:'concept', q:'What is the PRIMARY purpose of wastewater treatment?', a:'Protection of public health. Environmental protection is second.'},
  {m:'m1', tag:'concept', q:'Total Solids can be split two different ways. What are they?', a:'By size: Suspended + Dissolved. By ignition: Volatile (organic) + Fixed (inorganic).'},
  {m:'m1', tag:'concept', q:'High flow with LOW strength influent means what?', a:'Infiltration and Inflow (I&I) — clean water diluting the wastewater, usually during rain.'},
  {m:'m1', tag:'concept', q:'Normal flow with HIGH strength influent means what?', a:'An industrial slug load. Trace it upstream and protect the biology.'},
  {m:'m1', tag:'concept', q:'Difference between infiltration and inflow?', a:'Infiltration = groundwater through cracks and defects. Inflow = surface water through direct connections such as roof drains and manhole covers.'},
  {m:'m1', tag:'concept', q:'Why is COD always higher than BOD?', a:'COD chemically oxidises everything oxidisable, including material bacteria cannot break down.'},
  {m:'m1', tag:'number', q:'BOD₅ test conditions?', a:'5 days, 20 °C, in the dark.'},
  {m:'m1', tag:'concept', q:'Black wastewater with a rotten-egg smell indicates what?', a:'Septic conditions — no oxygen, producing hydrogen sulphide.'},
  {m:'m1', tag:'number', q:'Typical peaking factor (peak ÷ average flow) for a municipal plant?', a:'About 2 to 3.'},

  /* ---- Module 2 ---- */
  {m:'m2', tag:'number', q:'Coarse bar screen opening size?', a:'25–50 mm.'},
  {m:'m2', tag:'number', q:'Fine screen opening size?', a:'6–25 mm.'},
  {m:'m2', tag:'number', q:'Target approach velocity through a bar screen?', a:'About 0.6–1.2 m/s (2–4 ft/s).'},
  {m:'m2', tag:'number', q:'Target velocity in a horizontal-flow grit channel?', a:'About 0.3 m/s (1 ft/s).'},
  {m:'m2', tag:'concept', q:'Main purpose of screening?', a:'To protect downstream pumps and equipment from large debris.'},
  {m:'m2', tag:'concept', q:'Main purpose of grit removal?', a:'To prevent abrasion/wear of equipment and loss of tank volume.'},
  {m:'m2', tag:'trouble', q:'Grit comes out black, greasy and smelly. Cause?', a:'Velocity too low — organics are settling with the grit. Raise velocity or air rate.'},
  {m:'m2', tag:'trouble', q:'Water level rising upstream of the bar screen. Cause?', a:'The screen is blinded with debris. Rake or clear it.'},
  {m:'m2', tag:'concept', q:'Difference between a comminutor and a screen?', a:'A comminutor grinds solids and leaves them in the flow. A screen REMOVES them from the flow.'},
  {m:'m2', tag:'concept', q:'Where do screenings go?', a:'Washed, dewatered and hauled to landfill — never back into the process.'},
  {m:'m2', tag:'formula', q:'Relationship between flow, velocity and area?', a:'Q = V × A (Flow = Velocity × Area).'},
  {m:'m2', tag:'concept', q:'Which weir is most accurate at low flows?', a:'The V-notch (triangular) weir.'},
  {m:'m2', tag:'concept', q:'Two requirements for a magnetic flow meter to work?', a:'A full pipe and a conductive liquid.'},
  {m:'m2', tag:'concept', q:'Which flow devices are open-channel vs full-pipe?', a:'Open channel: Parshall flume, weirs. Full pipe: magnetic meter, venturi.'},

  /* ---- Module 3 ---- */
  {m:'m3', tag:'number', q:'Typical TSS removal in a primary clarifier?', a:'50–70%.'},
  {m:'m3', tag:'number', q:'Typical BOD removal in a primary clarifier?', a:'25–40%.'},
  {m:'m3', tag:'number', q:'Typical primary clarifier detention time?', a:'1.5 to 2.5 hours.'},
  {m:'m3', tag:'formula', q:'Surface Overflow Rate formula?', a:'SOR = Flow ÷ Surface Area (m³/m²·day or gpd/ft²).'},
  {m:'m3', tag:'formula', q:'Detention time formula?', a:'Detention Time = Volume ÷ Flow (keep units compatible).'},
  {m:'m3', tag:'trouble', q:'Sludge rising in clumps with gas bubbles in a PRIMARY clarifier. Cause?', a:'Septic sludge — it sat too long. Pump sludge more frequently.'},
  {m:'m3', tag:'concept', q:'Does surface area or depth control settling in a clarifier?', a:'Surface area — because SOR (the upward water velocity) is flow ÷ surface area.'},
  {m:'m3', tag:'concept', q:'Is primary treatment physical or biological?', a:'Physical — gravity settling. No biological treatment intended.'},

  /* ---- Module 4 ---- */
  {m:'m4', tag:'number', q:'Target DO in an activated sludge aeration basin?', a:'1.5 to 2.0 mg/L.'},
  {m:'m4', tag:'concept', q:'Define aerobic, anoxic and anaerobic.', a:'Aerobic = free DO present. Anoxic = no free DO but nitrate present. Anaerobic = neither DO nor nitrate.'},
  {m:'m4', tag:'concept', q:'What does secondary (biological) treatment actually do?', a:'Converts DISSOLVED BOD into SETTLEABLE bacterial cells, which are then removed in a clarifier.'},
  {m:'m4', tag:'number', q:'Typical MLSS range in conventional activated sludge?', a:'1,500 to 4,000 mg/L.'},
  {m:'m4', tag:'number', q:'Typical MCRT (sludge age) for conventional activated sludge?', a:'5 to 15 days. Nitrification needs longer (roughly 10+ days, more when cold).'},
  {m:'m4', tag:'number', q:'Typical F/M ratio for conventional activated sludge?', a:'0.2 to 0.5.'},
  {m:'m4', tag:'formula', q:'SVI formula?', a:'SVI = (30-minute settled volume in mL/L × 1000) ÷ MLSS in mg/L.'},
  {m:'m4', tag:'number', q:'What SVI indicates good settling? What indicates bulking?', a:'Under 100 = good settling. Over 150 = bulking.'},
  {m:'m4', tag:'trouble', q:'White billowy foam on the aeration basin. Cause and fix?', a:'Young sludge / over-wasting / high F/M. Reduce wasting to build the population.'},
  {m:'m4', tag:'trouble', q:'Dark brown or black greasy foam. Cause and fix?', a:'Old sludge / under-wasting, or Nocardia filaments. Increase wasting.'},
  {m:'m4', tag:'trouble', q:'Sludge bulking with SVI over 150. First thing to check?', a:'Dissolved oxygen — low DO is the most common cause of filamentous bulking.'},
  {m:'m4', tag:'trouble', q:'Chunks of sludge floating in the secondary clarifier with gas bubbles. Cause?', a:'Denitrification in the blanket releasing nitrogen gas. Increase RAS rate.'},
  {m:'m4', tag:'trouble', q:'Cloudy effluent with tiny dispersed particles. Cause?', a:'Pin floc from old, over-oxidised sludge. Increase wasting.'},
  {m:'m4', tag:'concept', q:'What does WASTING control? What does RAS control?', a:'Wasting controls sludge age and MLSS. RAS controls the clarifier sludge blanket.'},
  {m:'m4', tag:'concept', q:'How large should process changes to wasting be?', a:'Small and gradual — roughly 10–15% at a time, then wait to evaluate.'},
  {m:'m4', tag:'number', q:'RBC submergence and rotation speed?', a:'About 40% submerged, about 1.5 rpm.'},
  {m:'m4', tag:'trouble', q:'Ponding on a trickling filter. Cause and fix?', a:'Media voids plugged with excess biofilm. Increase recirculation, flush or rake the surface.'},
  {m:'m4', tag:'trouble', q:'Filter flies (Psychoda) at a trickling filter. Cause and fix?', a:'Dry areas on the media. Increase recirculation to keep the media continuously wet.'},
  {m:'m4', tag:'concept', q:'Does a trickling filter strain solids out of the water?', a:'No. Despite the name it treats biologically with attached biofilm. It does not filter.'},
  {m:'m4', tag:'concept', q:'Why must every fixed-film process have a clarifier after it?', a:'To capture the biofilm that sloughs off the media.'},
  {m:'m4', tag:'concept', q:'Layers in a facultative lagoon?', a:'Aerobic on top, facultative in the middle, anaerobic at the bottom.'},
  {m:'m4', tag:'trouble', q:'Lagoon effluent has high TSS but low BOD. Cause?', a:'Algae carryover — algae are suspended solids.'},
  {m:'m4', tag:'concept', q:'When do lagoon DO and pH peak, and why?', a:'Mid-afternoon, from algal photosynthesis producing oxygen and stripping CO₂.'},
  {m:'m4', tag:'concept', q:'Two competing jobs of a secondary clarifier?', a:'Clarify (clear effluent) and thicken (concentrated RAS). Pushing one hurts the other.'},

  /* ---- Module 5 ---- */
  {m:'m5', tag:'concept', q:'Coagulation vs flocculation — mechanism and mixing?', a:'Coagulation = charge neutralisation, needs RAPID mix (seconds). Flocculation = particle growth, needs SLOW gentle mix (15–45 min).'},
  {m:'m5', tag:'concept', q:'Which goes in first, coagulant or polymer?', a:'Coagulant first, then polymer/flocculant.'},
  {m:'m5', tag:'concept', q:'Why will fine colloidal turbidity not settle on its own?', a:'Colloids carry a negative surface charge and repel each other, staying suspended indefinitely.'},
  {m:'m5', tag:'concept', q:'Floc will not form. What do you check FIRST?', a:'pH — outside the coagulant\'s effective range no dose will work.'},
  {m:'m5', tag:'concept', q:'Effect of metal-salt coagulants on alkalinity and pH?', a:'They CONSUME alkalinity and LOWER pH.'},
  {m:'m5', tag:'trouble', q:'Floc forms then breaks apart before settling. Cause?', a:'Too much mixing energy/shear in flocculation. Slow the flocculator.'},
  {m:'m5', tag:'trouble', q:'What can happen if you OVERDOSE coagulant?', a:'Charge reversal can re-stabilise the particles, making the water worse.'},
  {m:'m5', tag:'formula', q:'Metric chemical dosing formula?', a:'kg/day = dose (mg/L) × flow (ML/day).'},
  {m:'m5', tag:'formula', q:'US chemical dosing formula?', a:'lbs/day = dose (mg/L) × flow (MGD) × 8.34.'},
  {m:'m5', tag:'formula', q:'How do you correct a dose for a solution that is not 100% strength?', a:'Divide by the decimal purity — e.g. a 50% solution: divide by 0.50 (doubles the mass needed).'},
  {m:'m5', tag:'concept', q:'What makes the "best jar" in a jar test?', a:'Fastest floc formation, largest densest floc, and clearest supernatant — confirmed with turbidity.'},
  {m:'m5', tag:'concept', q:'Difference between pH and alkalinity?', a:'pH is where you are now. Alkalinity is the buffer that resists pH change.'},
  {m:'m5', tag:'number', q:'How much alkalinity does nitrification consume?', a:'About 7.1 mg/L of alkalinity per 1 mg/L of ammonia-nitrogen oxidised.'},
  {m:'m5', tag:'safety', q:'When diluting acid, what is the rule?', a:'ALWAYS add acid to water, never water to acid — the reaction is violently exothermic.'},
  {m:'m5', tag:'safety', q:'What must you never mix with chlorine/hypochlorite?', a:'Acid (releases chlorine gas) and ammonia (forms chloramine vapours).'},
  {m:'m5', tag:'concept', q:'pH will not hold steady and swings with tiny chemical changes. Cause?', a:'Low alkalinity — no buffering capacity. Add alkalinity rather than chasing pH.'},

  /* ---- Module 6 ---- */
  {m:'m6', tag:'concept', q:'Three triggers for backwashing a filter?', a:'High headloss, turbidity breakthrough, or maximum run time reached.'},
  {m:'m6', tag:'concept', q:'How is a multimedia filter bed layered?', a:'Coarse light media (anthracite) on top, finer denser media (sand, then garnet) below.'},
  {m:'m6', tag:'trouble', q:'Mudballs forming in a filter bed. Cause?', a:'Inadequate backwash — rate too low, duration too short, or no air scour.'},
  {m:'m6', tag:'concept', q:'How does activated carbon remove contaminants?', a:'By ADSORPTION — molecules stick to the carbon\'s internal surface area. It eventually exhausts.'},
  {m:'m6', tag:'concept', q:'Where does backwash water go?', a:'Back to the head of the plant.'},
  {m:'m6', tag:'concept', q:'Does chlorine work better at high or low pH, and why?', a:'LOW pH — more hypochlorous acid (HOCl), which is the far stronger disinfecting form.'},
  {m:'m6', tag:'concept', q:'What is free available chlorine?', a:'Hypochlorous acid (HOCl) + hypochlorite ion (OCl⁻).'},
  {m:'m6', tag:'concept', q:'What is combined chlorine?', a:'Chloramines — chlorine reacted with ammonia. A much weaker disinfectant.'},
  {m:'m6', tag:'concept', q:'What is breakpoint chlorination?', a:'Adding chlorine until all demand and chloramines are destroyed, so further chlorine remains as free residual.'},
  {m:'m6', tag:'formula', q:'What does CT mean in disinfection?', a:'Concentration × contact Time — the measure of disinfection exposure.'},
  {m:'m6', tag:'concept', q:'Two big advantages of UV disinfection?', a:'No chemical residual and no disinfection by-products.'},
  {m:'m6', tag:'trouble', q:'UV system failing bacteriological limits. First thing to check?', a:'Fouled quartz sleeves. Then lamp age and UV transmittance.'},
  {m:'m6', tag:'concept', q:'Why does high TSS defeat both chlorine and UV?', a:'Particles physically shield organisms from the disinfectant or the light.'},
  {m:'m6', tag:'concept', q:'Why is dechlorination required before discharge?', a:'Chlorine residual is toxic to fish and aquatic life.'},
  {m:'m6', tag:'safety', q:'Response to a chlorine gas leak?', a:'Evacuate upwind and uphill, activate the emergency plan, only trained responders with SCBA. Never apply water to the leak.'},

  /* ---- Module 7 ---- */
  {m:'m7', tag:'number', q:'Typical solids content of primary sludge?', a:'3–7% solids.'},
  {m:'m7', tag:'number', q:'Typical solids content of waste activated sludge (WAS)?', a:'0.5–1.5% solids — over 98% water, and the hardest sludge to handle.'},
  {m:'m7', tag:'number', q:'Mesophilic anaerobic digestion temperature?', a:'About 35 °C (95 °F). Thermophilic is about 55 °C.'},
  {m:'m7', tag:'number', q:'Composition of digester biogas?', a:'Roughly 60–70% methane, 30–40% carbon dioxide.'},
  {m:'m7', tag:'trouble', q:'Earliest warning of a souring anaerobic digester?', a:'A rising volatile acids to alkalinity ratio.'},
  {m:'m7', tag:'concept', q:'Which bacteria are the slow, sensitive step in anaerobic digestion?', a:'The methane formers (methanogens).'},
  {m:'m7', tag:'concept', q:'Aerobic vs anaerobic digestion trade-off?', a:'Aerobic: simpler, more forgiving, no gas, high energy cost. Anaerobic: recovers methane, reduces volatile solids more, but is sensitive and needs heating.'},
  {m:'m7', tag:'number', q:'Typical dewatered cake solids content?', a:'15–30% solids.'},
  {m:'m7', tag:'concept', q:'Name the liquid returned from a belt press, a centrifuge and a thickener.', a:'Belt press = filtrate. Centrifuge = centrate. Thickener = subnatant. All return to the head of the plant.'},
  {m:'m7', tag:'concept', q:'Why must return streams be metered rather than dumped?', a:'They carry high solids and ammonia and can upset the whole plant if returned as a slug.'},
  {m:'m7', tag:'concept', q:'What is required before mechanical dewatering, almost always?', a:'Polymer conditioning.'},
  {m:'m7', tag:'concept', q:'What does "biosolids" mean?', a:'Sludge that has been treated and stabilised to a standard allowing beneficial use, such as land application.'},

  /* ---- Module 8 ---- */
  {m:'m8', tag:'concept', q:'Centrifugal vs positive displacement pump — how does flow behave with head?', a:'Centrifugal: flow DROPS as head rises. PD: flow stays nearly constant regardless of head.'},
  {m:'m8', tag:'safety', q:'The critical rule for positive displacement pumps?', a:'NEVER run one against a closed discharge valve. It has no relief path — fit a pressure relief valve.'},
  {m:'m8', tag:'trouble', q:'A pump sounds like it is pumping gravel. What is happening?', a:'Cavitation — vapour bubbles forming and violently collapsing at the impeller.'},
  {m:'m8', tag:'trouble', q:'Cavitation — which side of the pump do you investigate?', a:'The SUCTION side: closed/throttled valve, plugged strainer, low wet-well level, excessive suction lift.'},
  {m:'m8', tag:'concept', q:'What is NPSH?', a:'Net Positive Suction Head. Available NPSH must exceed the pump\'s required NPSH or it cavitates.'},
  {m:'m8', tag:'concept', q:'What is priming and why does a centrifugal pump need it?', a:'Filling the casing and suction with liquid. A centrifugal pump cannot pump air, so it will not develop suction unprimed.'},
  {m:'m8', tag:'concept', q:'How much should a packing gland leak? A mechanical seal?', a:'Packing should drip slowly (lubricates and cools). A mechanical seal should not leak at all.'},
  {m:'m8', tag:'trouble', q:'Pump runs but delivers no flow. Likely causes?', a:'Lost prime/air lock, closed suction valve, clogged impeller, wrong rotation, or stuck check valve.'},
  {m:'m8', tag:'trouble', q:'Motor amps slowly creeping up over weeks. Meaning?', a:'A developing mechanical problem — clog, bearing wear, misalignment or rubbing. Investigate before failure.'},
  {m:'m8', tag:'concept', q:'Gate, globe and check valve — what is each for?', a:'Gate = isolation (fully open/closed). Globe = throttling. Check = prevents backflow automatically.'},
  {m:'m8', tag:'trouble', q:'Why must you not throttle with a gate valve?', a:'It wire-draws and erodes the seat, destroying the valve.'},
  {m:'m8', tag:'concept', q:'What is TDH?', a:'Total Dynamic Head — everything a pump must overcome: static lift + friction + pressure head.'},
  {m:'m8', tag:'trouble', q:'Blower discharge pressure rising and air flow falling. Check what?', a:'The blower inlet filter first, then fouled diffusers downstream.'},
  {m:'m8', tag:'concept', q:'What is water hammer?', a:'A pressure surge from a sudden change in flow velocity, such as a rapidly closing valve or check valve slam.'},
  {m:'m8', tag:'concept', q:'Can you over-grease a bearing?', a:'Yes — over-greasing blows out bearing seals and causes failure, just as under-greasing does.'},
  {m:'m8', tag:'concept', q:'Which duty area is the LARGEST on the Class I exam?', a:'Equipment Evaluation, Maintenance and Operation — 39 of 100 questions.'},

  /* ---- Module 9 ---- */
  {m:'m9', tag:'concept', q:'Which four tests MUST be grab samples measured immediately?', a:'pH, dissolved oxygen, temperature and chlorine residual.'},
  {m:'m9', tag:'concept', q:'Grab vs composite sample?', a:'Grab = one moment in time. Composite = many portions over time (usually 24 h) combined to give an average.'},
  {m:'m9', tag:'concept', q:'Which composite type best represents mass loading?', a:'A flow-proportional composite.'},
  {m:'m9', tag:'concept', q:'What is chain of custody and when is it required?', a:'The documented trail of sample possession and handling. Required for any regulatory or legal sample.'},
  {m:'m9', tag:'concept', q:'Which bottles must NEVER be rinsed with the sample?', a:'Sterile bacteriological bottles and any bottle containing preservative.'},
  {m:'m9', tag:'number', q:'TSS drying temperature and volatile solids ignition temperature?', a:'Dry at 103–105 °C; ignite at 550 °C.'},
  {m:'m9', tag:'concept', q:'Units for settleable solids, and what device?', a:'mL/L, measured in an Imhoff cone after 1 hour.'},
  {m:'m9', tag:'concept', q:'Unit and mechanism of turbidity measurement?', a:'NTU (Nephelometric Turbidity Units), measured by light scattering.'},
  {m:'m9', tag:'concept', q:'Classic reference method for dissolved oxygen?', a:'The Winkler (iodometric) titration.'},
  {m:'m9', tag:'concept', q:'Three rules of good process control?', a:'Make small changes, change one thing at a time, and wait long enough to evaluate.'},
  {m:'m9', tag:'concept', q:'Why is a trend more useful than a single reading?', a:'A single reading may be error or normal variation; a trend shows real direction of change and gives early warning.'},
  {m:'m9', tag:'concept', q:'Why does BOD take 5 days to be useful — and what do operators use instead day to day?', a:'BOD₅ is a compliance/trending tool. For daily decisions operators use fast tests: settleometer, DO, pH, and COD.'},

  /* ---- Module 10 ---- */
  {m:'m10', tag:'safety', q:'Correct order for testing a confined space atmosphere?', a:'Oxygen FIRST, then flammable, then toxic.'},
  {m:'m10', tag:'safety', q:'Why must oxygen be tested first?', a:'A flammable-gas meter needs oxygen to read correctly, so an oxygen-deficient atmosphere makes the flammable reading unreliable.'},
  {m:'m10', tag:'number', q:'Safe oxygen range for confined space entry?', a:'19.5% to 23.5%.'},
  {m:'m10', tag:'safety', q:'Why is an oxygen-ENRICHED atmosphere dangerous?', a:'Above 23.5% oxygen dramatically increases fire and explosion risk.'},
  {m:'m10', tag:'safety', q:'Dangerous property of hydrogen sulphide at high concentration?', a:'It paralyses the sense of smell almost instantly — no longer smelling it means MORE danger, not less.'},
  {m:'m10', tag:'safety', q:'Where do H₂S and methane collect?', a:'H₂S is heavier than air and collects at low points. Methane is lighter and collects at the top.'},
  {m:'m10', tag:'safety', q:'A worker collapses inside a confined space. What do you do?', a:'DO NOT ENTER. Call emergency services, use retrieval equipment from outside, follow the rescue plan. Most confined space deaths are would-be rescuers.'},
  {m:'m10', tag:'safety', q:'What is the hierarchy of controls, in order?', a:'Elimination → Substitution → Engineering controls → Administrative controls → PPE.'},
  {m:'m10', tag:'safety', q:'Where does PPE rank and why?', a:'LAST — it protects only the individual and only if worn correctly. Engineering controls are preferred.'},
  {m:'m10', tag:'safety', q:'Three pillars of WHMIS 2015?', a:'Labels (supplier and workplace), Safety Data Sheets, and worker education and training.'},
  {m:'m10', tag:'safety', q:'Who applies and who removes a lockout lock?', a:'Each worker applies their OWN lock, and only that worker may remove it.'},
  {m:'m10', tag:'safety', q:'Two steps people forget in lockout/tagout?', a:'Releasing STORED energy, and VERIFYING zero energy by attempting to start the equipment.'},
  {m:'m10', tag:'safety', q:'How long do you flush a chemical exposure to skin or eyes?', a:'At least 15 minutes, then seek medical attention.'},
  {m:'m10', tag:'safety', q:'You find an unlabelled chemical container. What do you do?', a:'Do not use it. Isolate it, identify it if possible, and apply a proper workplace label. WHMIS requires all containers be labelled.'},

  /* ---- Module 11 ---- */
  {m:'m11', tag:'concept', q:'Which federal law and regulation govern wastewater effluent in Canada?', a:'The Fisheries Act, and the Wastewater Systems Effluent Regulations (WSER).'},
  {m:'m11', tag:'concept', q:'Which BC legislation and regulation apply to municipal wastewater?', a:'The Environmental Management Act, and the Municipal Wastewater Regulation (MWR).'},
  {m:'m11', tag:'concept', q:'What does EOCP require to renew certification?', a:'Continuing Education Units (CEUs).'},
  {m:'m11', tag:'concept', q:'What determines the operator certification level a plant requires?', a:'The facility classification — based on plant size and complexity.'},
  {m:'m11', tag:'concept', q:'What must you do when a permit limit is exceeded?', a:'Verify, correct the cause, document, and report to the regulator within the required timeframe — do not wait for the next scheduled report.'},
  {m:'m11', tag:'concept', q:'What is the most serious professional offence for an operator?', a:'Falsifying records or misrepresenting data.'},
  {m:'m11', tag:'number', q:'EOCP experience requirement for Wastewater Treatment Level I?', a:'12 months / 1,800 hours of directly related hands-on experience.'},
  {m:'m11', tag:'number', q:'EOCP education requirement for Level I?', a:'Proof of high school completion, adult graduation diploma, or a post-secondary diploma.'},

  /* ---- Module 12 / math ---- */
  {m:'m12', tag:'formula', q:'1 m³ equals how many litres?', a:'1,000 L.'},
  {m:'m12', tag:'formula', q:'1 ML equals how many m³ and how many litres?', a:'1,000 m³ = 1,000,000 L.'},
  {m:'m12', tag:'formula', q:'1 mg/L is equivalent to what in g/m³?', a:'1 g/m³ (they are numerically the same).'},
  {m:'m12', tag:'formula', q:'Volume of a rectangular tank?', a:'Volume = Length × Width × Depth.'},
  {m:'m12', tag:'formula', q:'Volume of a circular tank?', a:'Volume = π × radius² × depth. Radius = diameter ÷ 2.'},
  {m:'m12', tag:'formula', q:'Percent removal formula?', a:'% Removal = (Influent − Effluent) ÷ Influent × 100.'},
  {m:'m12', tag:'formula', q:'Metric loading formula (kg/day)?', a:'kg/day = concentration (mg/L) × flow (ML/day).'},
  {m:'m12', tag:'formula', q:'US loading formula (lbs/day)?', a:'lbs/day = concentration (mg/L) × flow (MGD) × 8.34.'},
  {m:'m12', tag:'concept', q:'If your answer is off by exactly 1,000, what did you do?', a:'Missed a metric prefix conversion — litres vs m³, or mg vs g vs kg.'},
  {m:'m12', tag:'concept', q:'Most common cause of lost marks on exam math?', a:'Unit errors — not arithmetic. Convert BEFORE substituting.'},
  {m:'m12', tag:'concept', q:'Do you have to memorise formulas for the exam?', a:'No — a formula/conversion sheet is provided. The skill tested is choosing the right formula and handling units.'}
];

/* Build the full deck: definition cards from curriculum terms + extra cards */
function buildDeck(){
  const cards = [];
  (window.ALL_LESSONS || []).forEach(l => {
    (l.terms || []).forEach((t, i) => {
      cards.push({
        id: `${l.id}-t${i}`,
        m: l.moduleId,
        lesson: l.id,
        tag: 'definition',
        q: `Define: ${t.t}`,
        a: t.d
      });
    });
  });
  EXTRA_CARDS.forEach((c, i) => {
    cards.push({ id:`x${i}`, m:c.m, lesson:null, tag:c.tag, q:c.q, a:c.a });
  });
  return cards;
}

window.LEITNER_INTERVALS = LEITNER_INTERVALS;
window.FLASHCARDS = buildDeck();
