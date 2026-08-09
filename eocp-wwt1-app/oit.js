/* oit.js — EOCP Operator-in-Training (OIT) study track.
 *
 * WHY THIS IS SEPARATE FROM THE LEVEL I MATERIAL:
 * Since 1 January 2018 there is ONE OIT exam and certification covering ALL FOUR
 * streams — Water Treatment, Water Distribution, Wastewater Collection and
 * Wastewater Treatment. It is much broader but much shallower than the Wastewater
 * Treatment Level I exam, which is wastewater treatment only and goes far deeper.
 * Studying Level I material alone will NOT cover the OIT exam: half of it is water
 * treatment and distribution, which Level I never touches.
 *
 * OIT exam is 100 questions, testing four areas:
 *   general knowledge · support systems · process and quality control · administration
 *
 * OIT requirements: high school / GED / adult graduation diploma, PLUS either
 * 3 months (500 hours) hands-on experience OR 90 hours (9.0 CEUs) of approved training.
 * OIT is OPTIONAL — it is not required in order to sit Wastewater Treatment Level I.
 *
 * Source: EOCP published material (eocp.ca). Question STYLE modelled on the published
 * EOCP OIT Sample Exam, which is practical and safety-heavy. Questions here are
 * ORIGINAL — no EOCP exam content is reproduced.
 */

const OIT_MODULES = [
{
  id:'o1', n:1, title:'General Knowledge & the Operator Role', duty:'GEN', track:'OIT',
  blurb:'What operators do, why we treat water and wastewater, and the vocabulary the whole exam assumes.',
  lessons:[
    {
      id:'o1l1', title:'Why We Treat Water and Wastewater',
      need:'Water treatment makes water <b>safe to drink</b>. Wastewater treatment <b>protects public health and the receiving environment</b>. On the exam, protection of public health is almost always the "most important" answer for either one.',
      learn:[
        'An operator sits at both ends of the same loop. Water treatment takes raw water from a lake, river or well and makes it safe to drink. Wastewater treatment takes the used water back, cleans it, and returns it to the environment.',
        'Both exist for the same reason: <b>public health</b>. Before treated water and treated sewage, cholera and typhoid killed people routinely. The environment comes second — real, but second.',
        'The OIT exam covers <b>all four streams at a basic level</b>: water treatment, water distribution, wastewater collection and wastewater treatment. You do not need depth in any one of them, but you cannot skip a stream. Most people fail by studying only the side they work on.'
      ],
      operator:'As an OIT you work under a certified operator, learning the plant by doing: reading gauges, taking samples, checking equipment, recording what you see. The exam tests whether you understand what you are looking at and whether you will do it safely.',
      equipment:'Across the four streams: intakes and wells, treatment plants, reservoirs and watermains, sewers and lift stations, and wastewater treatment plants with an outfall.',
      trouble:[
        {p:'Not sure whether a question is about water or wastewater', c:'Read for the clue words. Chlorine RESIDUAL, distribution, pressure, backflow = drinking water. BOD, sludge, influent, effluent, outfall = wastewater.'},
        {p:'Public complaint about water quality', c:'Take it seriously and report it. Discoloured or odd-tasting water can indicate a main break, a cross-connection or a treatment failure.'}
      ],
      terms:[
        {t:'Potable water', d:'Water that is safe to drink.'},
        {t:'Raw water', d:'Untreated water taken from the source — lake, river, or well.'},
        {t:'Influent', d:'Water or wastewater flowing INTO a plant or process.'},
        {t:'Effluent', d:'Water or wastewater flowing OUT of a plant or process.'},
        {t:'Receiving environment', d:'The river, lake, ocean or ground that treated effluent is discharged to.'},
        {t:'Operator-in-Training (OIT)', d:'EOCP entry-level certification covering all four streams. Optional, and not required before Level I.'}
      ],
      tips:[
        'Primary purpose of BOTH water and wastewater treatment = protect public health.',
        'The OIT exam covers ALL FOUR streams. Do not study only wastewater.',
        'Influent = in. Effluent = out. Applies to water and wastewater alike.',
        'Potable = safe to drink.'
      ]
    },
    {
      id:'o1l2', title:'Basic Terms, Units and the Water Cycle',
      need:'Know <b>pH</b> (0–14, 7 neutral), <b>turbidity</b> (cloudiness, NTU), <b>disinfection vs sterilisation</b>, <b>flow = volume ÷ time</b>, and the basic metric/US units an operator reads daily.',
      learn:[
        'Water moves in a cycle — evaporation, condensation, precipitation, runoff and infiltration. Operators tap into that cycle, borrow water, and return it. Everything you do sits inside that loop.',
        '<b>pH</b> runs 0 to 14 with 7 neutral; below is acidic, above is basic. It is logarithmic, so each whole number is a tenfold change. <b>Turbidity</b> is cloudiness caused by suspended particles, measured in <b>NTU</b>. Turbidity matters enormously in drinking water because particles shield microorganisms from disinfectant.',
        '<b>Disinfection kills or inactivates pathogens; it does not sterilise.</b> Sterilisation would destroy every organism, which we neither achieve nor need.',
        'Units you will read daily: flow in L/s, m³/day or gpm; pressure in kPa or psi; concentration in mg/L (which equals ppm in dilute water); volume in litres, m³ or gallons.'
      ],
      operator:'You will record these numbers every shift. Knowing what a normal value looks like is what turns a reading into information — an operator who knows the chlorine residual is normally 0.8 mg/L notices instantly when it reads 0.2.',
      equipment:'pH meter, turbidimeter, chlorine residual test kit or colorimeter, pressure gauges, flow meters, thermometers.',
      trouble:[
        {p:'Turbidity rising in treated drinking water', c:'A treatment failure — check coagulation, filtration and filter performance. High turbidity also shields organisms from disinfection.'},
        {p:'pH meter reading drifting', c:'Probe dirty or dried out, buffers old, or the probe is at end of life. Recalibrate with fresh buffers.'},
        {p:'Unsure of a unit on a gauge', c:'Check whether the plant runs metric or US units. Do not assume — mixing systems is the most common source of error.'}
      ],
      terms:[
        {t:'pH', d:'Measure of acidity or basicity, 0–14, with 7 neutral. Logarithmic.'},
        {t:'Turbidity', d:'Cloudiness of water caused by suspended particles, measured in NTU.'},
        {t:'NTU', d:'Nephelometric Turbidity Unit — the unit of turbidity.'},
        {t:'Disinfection', d:'Killing or inactivating pathogens. NOT the same as sterilisation.'},
        {t:'mg/L', d:'Milligrams per litre — a concentration; equals ppm in dilute water.'},
        {t:'Water cycle', d:'Evaporation, condensation, precipitation, runoff and infiltration.'}
      ],
      tips:[
        'Disinfection ≠ sterilisation. Very commonly tested.',
        'Turbidity is measured in NTU and shields organisms from disinfectant.',
        'pH is logarithmic — one unit equals a tenfold change.',
        'mg/L = ppm in dilute water.'
      ]
    }
  ]
},
{
  id:'o2', n:2, title:'Water Treatment Basics', duty:'PQC', track:'OIT',
  blurb:'How raw water becomes drinking water — the stream Level I never covers, and half the OIT exam.',
  lessons:[
    {
      id:'o2l1', title:'The Drinking Water Treatment Train',
      need:'Standard sequence: <b>screening → coagulation → flocculation → sedimentation → filtration → disinfection</b> → storage and distribution. Know what each step removes.',
      learn:[
        'Raw water arrives with silt, organic matter, and microorganisms. Each treatment step removes a different part of that load, and the order matters.',
        '<b>Coagulation</b> adds a chemical (alum, ferric, PACl) that neutralises the electrical charge holding fine particles apart — this needs <b>fast, violent mixing</b> because the reaction happens in seconds. <b>Flocculation</b> then stirs <b>slowly and gently</b> so the destabilised particles collide and grow into visible floc. Mix too hard here and you tear the floc apart.',
        '<b>Sedimentation</b> lets the floc settle out by gravity. <b>Filtration</b> catches what did not settle, usually through sand and anthracite. <b>Disinfection</b> — normally chlorine — kills the remaining pathogens and leaves a <b>residual</b> that protects the water all the way through the distribution system.',
        'That last point is the big difference from wastewater: in drinking water we deliberately <b>keep</b> a chlorine residual in the pipes. In wastewater we usually have to <b>remove</b> it before discharge because it is toxic to fish.'
      ],
      operator:'You will check turbidity after filtration and chlorine residual after disinfection every shift — those two numbers are the headline indicators that the plant is doing its job. Rising filtered turbidity means the barrier is failing.',
      equipment:'Intake screens, rapid mix basin, flocculation basin with slow paddles, sedimentation basin, sand/anthracite filters, chlorine feed system, clearwell, high-lift pumps.',
      trouble:[
        {p:'Floc will not form', c:'Check pH first — every coagulant has an effective pH range. Then check dose and rapid mixing.'},
        {p:'Filtered water turbidity rising', c:'Filter is loaded or the coagulation step is failing. Backwash the filter; review coagulant dose.'},
        {p:'Low chlorine residual leaving the plant', c:'Increase dose; check for high chlorine demand and verify the feed equipment is running.'}
      ],
      terms:[
        {t:'Coagulation', d:'Adding a chemical to neutralise particle charge so fine particles can stick together. Needs rapid mixing.'},
        {t:'Flocculation', d:'Gentle mixing that grows destabilised particles into settleable floc.'},
        {t:'Sedimentation', d:'Gravity settling of floc and heavy particles.'},
        {t:'Filtration', d:'Passing water through media (sand, anthracite) to remove remaining particles.'},
        {t:'Chlorine residual', d:'Chlorine remaining in the water after demand is satisfied — maintained through the distribution system.'},
        {t:'Clearwell', d:'Storage tank after treatment that provides disinfection contact time before distribution.'}
      ],
      tips:[
        'Memorise the order: coagulation → flocculation → sedimentation → filtration → disinfection.',
        'Coagulation = RAPID mix. Flocculation = SLOW mix. Heavily tested.',
        'Drinking water KEEPS a chlorine residual; wastewater usually has it REMOVED before discharge.',
        'If floc will not form, check pH before touching the dose.'
      ]
    },
    {
      id:'o2l2', title:'Disinfection and Chlorine Residual',
      need:'Chlorine works better at <b>lower pH</b>. <b>Free chlorine = HOCl + OCl⁻</b>; <b>combined chlorine = chloramines</b> (weaker). Disinfection depends on <b>concentration × contact time (CT)</b>. High turbidity defeats disinfection.',
      learn:[
        'Chlorine is the workhorse because it kills pathogens and leaves a lasting residual. When chlorine enters water it forms <b>hypochlorous acid (HOCl)</b> and <b>hypochlorite ion (OCl⁻)</b>; together these are <b>free chlorine</b>. HOCl is the far stronger killer, and there is more of it at <b>lower pH</b> — so chlorine disinfects better in slightly acidic water.',
        'If ammonia is present, chlorine forms <b>chloramines</b> — called <b>combined chlorine</b> — which disinfect much more weakly.',
        '<b>CT</b> is concentration multiplied by contact time. A low residual held for a long time can equal a high residual held briefly. That is why plants have a clearwell: to buy contact time before the water leaves.',
        '<b>Turbidity is the enemy of disinfection.</b> Particles physically shield microorganisms from the chlorine, which is exactly why filtration comes before disinfection and why filtered turbidity is watched so closely.',
        '<b>UV</b> is the main alternative: no chemicals, no by-products, no taste — but it leaves <b>no residual</b>, so it cannot protect water out in the distribution system.'
      ],
      operator:'Test chlorine residual at the plant and out in the distribution system. A residual that disappears in a far corner of town means either long detention in the pipes or contamination consuming it. Both need investigation.',
      equipment:'Gas chlorinators or sodium hypochlorite systems, calcium hypochlorite feeders, clearwell, residual analysers, UV reactors, chlorine leak detectors and SCBA.',
      trouble:[
        {p:'No chlorine residual in part of the distribution system', c:'Water is too old (long detention), or something is consuming the chlorine. Flush the area, re-test, and investigate contamination.'},
        {p:'Residual adequate but bacteriological samples failing', c:'High turbidity shielding organisms, inadequate contact time, high pH reducing HOCl, or a sampling error.'},
        {p:'Chlorine gas leak', c:'Evacuate upwind and uphill, activate the emergency plan. Only trained personnel with SCBA respond. NEVER apply water to a chlorine leak.'}
      ],
      terms:[
        {t:'Free chlorine', d:'Hypochlorous acid (HOCl) plus hypochlorite ion (OCl⁻) — the effective disinfecting forms.'},
        {t:'Combined chlorine', d:'Chloramines, formed when chlorine reacts with ammonia. A much weaker disinfectant.'},
        {t:'CT', d:'Concentration × contact Time — the measure of disinfection exposure.'},
        {t:'Chlorine demand', d:'Chlorine consumed by reactions before any residual can appear.'},
        {t:'UV disinfection', d:'Ultraviolet light damaging organism DNA. No residual and no by-products.'}
      ],
      tips:[
        'Chlorine works BETTER at LOWER pH (more HOCl).',
        'Free chlorine = HOCl + OCl⁻. Combined = chloramines = weaker.',
        'CT = Concentration × Time.',
        'High turbidity defeats disinfection by shielding organisms.',
        'UV leaves NO residual — it cannot protect the distribution system.'
      ]
    }
  ]
},
{
  id:'o3', n:3, title:'Water Distribution Basics', duty:'PQC', track:'OIT',
  blurb:'Getting safe water to the tap and keeping it safe — including cross-connection control, a guaranteed exam topic.',
  lessons:[
    {
      id:'o3l1', title:'Cross-Connection Control &amp; Backflow Prevention',
      need:'A <b>cross-connection</b> is any link between potable water and a possible contamination source. It is prevented with an <b>approved backflow prevention device</b>. Backflow happens by <b>back-siphonage</b> (negative pressure) or <b>back-pressure</b> (downstream pressure exceeds supply).',
      learn:[
        'This is the single most heavily tested distribution topic, because it is how drinking water actually gets contaminated in practice.',
        'A <b>cross-connection</b> is any physical connection between the potable supply and something that could contaminate it — a hose lying in a puddle, a boiler, an irrigation system, a chemical tank.',
        'Water flows backwards for two reasons. <b>Back-siphonage</b> is a vacuum in the main pulling water backwards, typically after a main break or heavy fire-flow draw. <b>Back-pressure</b> is when downstream pressure — a pump or boiler — exceeds supply pressure and pushes contaminated water in.',
        'The fix is an <b>approved backflow prevention device</b>, correctly selected for the hazard level and <b>tested regularly</b>. The strongest protection of all is an <b>air gap</b> — a physical vertical space between the supply outlet and the flood rim — because there is no connection at all to fail.'
      ],
      operator:'Learn to spot cross-connections: a hose submerged in a tank, a fill line below the rim, an unprotected connection to industrial equipment. Reporting one is part of the job. Backflow devices need scheduled testing, and records of that testing are a compliance requirement.',
      equipment:'Reduced pressure (RP) assemblies, double check valve assemblies, pressure vacuum breakers, atmospheric vacuum breakers, air gaps, test kits.',
      trouble:[
        {p:'Discoloured or odd-tasting water reported at one property', c:'Possible cross-connection or backflow event. Investigate immediately, isolate if needed, sample, and notify your supervisor.'},
        {p:'Hose left submerged in a tank or puddle', c:'A textbook cross-connection. Remove it, and educate the user. Fit a vacuum breaker on the hose bib.'},
        {p:'Main break causing loss of pressure', c:'Back-siphonage risk across the whole affected zone. Follow the depressurisation procedure, disinfect and sample before returning to service.'}
      ],
      terms:[
        {t:'Cross-connection', d:'Any connection between potable water and a possible source of contamination.'},
        {t:'Backflow', d:'Reverse flow of water into the potable supply.'},
        {t:'Back-siphonage', d:'Backflow caused by negative pressure (a vacuum) in the supply line.'},
        {t:'Back-pressure', d:'Backflow caused by downstream pressure exceeding supply pressure.'},
        {t:'Air gap', d:'A physical vertical separation between an outlet and the flood rim — the most reliable protection.'},
        {t:'Backflow preventer', d:'An approved device installed to stop reverse flow into the potable system.'}
      ],
      tips:[
        'Cross-connection is prevented by an APPROVED BACKFLOW PREVENTION DEVICE — near-certain exam question.',
        'Back-siphonage = vacuum/negative pressure. Back-pressure = downstream pressure is higher. Know both.',
        'An air gap is the most reliable protection because nothing can fail.',
        'Backflow devices must be tested on a schedule, and records kept.'
      ]
    },
    {
      id:'o3l2', title:'Mains, Pressure, Flushing and Watermain Breaks',
      need:'Distribution keeps water <b>under positive pressure</b> at all times. Know why <b>flushing</b> is done, what causes <b>discoloured water</b>, and that a repaired main must be <b>disinfected and sampled</b> before returning to service.',
      learn:[
        'The distribution system is pipes, valves, hydrants, pumps and reservoirs. Its job is to deliver enough water at adequate pressure while keeping it safe on the way.',
        '<b>Positive pressure must be maintained at all times.</b> If pressure drops to zero, contaminated groundwater can be drawn in through joints and defects — the same back-siphonage risk as a cross-connection.',
        '<b>Flushing</b> pushes water through hydrants at high velocity to scour out sediment, rust and stagnant water, and to restore chlorine residual in slow-moving areas. Discoloured water is usually iron or manganese sediment stirred up by a change in flow direction or velocity — often a hydrant being used or a main break nearby.',
        'After a watermain break or any repair, the pipe must be <b>flushed, disinfected, and bacteriologically sampled</b> before it goes back into service. Skipping that is how a repair becomes a boil-water advisory.'
      ],
      operator:'When a break happens, your priorities are public safety, isolating the break, and protecting the rest of the system from contamination. Record everything — what you closed, when, and what you sampled.',
      equipment:'Watermains, valves, fire hydrants, pressure-reducing valves, reservoirs and standpipes, booster pumps, pressure gauges and loggers, chlorine test kits, sampling bottles.',
      trouble:[
        {p:'Customer reports brown or rusty water', c:'Sediment disturbed by a flow change, hydrant use, or a nearby break. Flush the area and check chlorine residual.'},
        {p:'Low pressure in part of the system', c:'A closed or partly closed valve, a break, a pump failure, or high demand. Find and correct — do not let pressure reach zero.'},
        {p:'Main repaired and returned to service without disinfection', c:'A serious contamination risk. The main must be flushed, disinfected and sampled before use.'}
      ],
      terms:[
        {t:'Distribution system', d:'The network of mains, valves, hydrants, pumps and storage delivering potable water.'},
        {t:'Flushing', d:'Running water at high velocity through hydrants to scour sediment and restore chlorine residual.'},
        {t:'Positive pressure', d:'Pressure above atmospheric, maintained at all times to prevent contamination entering the main.'},
        {t:'Watermain break', d:'A failure of a distribution pipe; requires isolation, repair, disinfection and sampling.'},
        {t:'Hydrant', d:'A connection to the main for firefighting and for flushing the system.'}
      ],
      tips:[
        'Positive pressure must be maintained at ALL times — zero pressure means contamination can enter.',
        'Flushing removes sediment AND restores chlorine residual.',
        'After a main break or repair: flush, disinfect, then SAMPLE before returning to service.',
        'Discoloured water is usually disturbed iron/manganese sediment.'
      ]
    }
  ]
},
{
  id:'o4', n:4, title:'Wastewater Collection Basics', duty:'PQC', track:'OIT',
  blurb:'Getting sewage to the plant — sewers, lift stations, and the hazards that kill collection workers.',
  lessons:[
    {
      id:'o4l1', title:'Sewers, Lift Stations and I&amp;I',
      need:'Sewage flows by <b>gravity</b> where possible; <b>lift stations</b> pump it up and over high points, discharging into a <b>force main</b> (a pressurised pipe). <b>Infiltration</b> is groundwater entering through defects; <b>inflow</b> is surface water entering directly.',
      learn:[
        'Collection systems are designed to move sewage downhill by gravity, because gravity never breaks down. Where the ground rises, a <b>lift station</b> (or pump station) lifts the sewage and pushes it through a <b>force main</b> under pressure to a higher point, where gravity flow resumes.',
        '<b>Infiltration</b> is groundwater leaking in through cracks and bad joints. <b>Inflow</b> is surface water entering directly through roof drains, sump pumps and manhole covers. Together (<b>I&amp;I</b>) they flood the system during rain, overload the treatment plant and can cause overflows.',
        'The two operational enemies are <b>blockages</b> — grease, rags, roots and debris — and <b>hydrogen sulphide</b>. Sewage sitting too long goes septic and generates H₂S, which is both acutely toxic and corrosive: it converts to sulphuric acid on pipe crowns and eats concrete sewers from the inside.'
      ],
      operator:'Lift station work means wet wells, and wet wells are confined spaces containing H₂S. Never open one casually. Watch pump run times: a pump running longer or more often than normal signals a partial blockage, a worn impeller, or rising infiltration.',
      equipment:'Gravity sewers, manholes, force mains, lift stations with wet wells, submersible or dry-pit pumps, level controls and floats, standby pumps and generators, flushing and vactor trucks, CCTV inspection equipment.',
      trouble:[
        {p:'Sewer backup or overflow', c:'Blockage from grease, roots, rags or debris — or hydraulic overload during rain. Locate and clear; report any overflow.'},
        {p:'Lift station pumps running far more than usual', c:'Rising I&I, a partial blockage, a worn impeller, or a failed level control.'},
        {p:'Strong rotten-egg odour and concrete corrosion at a manhole', c:'Hydrogen sulphide from septic sewage. Serious health hazard and structural corrosion. Ventilate before entry and address detention time.'},
        {p:'Flow spikes every time it rains', c:'Inflow and infiltration. Investigate illegal roof/sump connections and defective pipe.'}
      ],
      terms:[
        {t:'Gravity sewer', d:'A sewer that flows downhill under gravity, not pressure.'},
        {t:'Lift station', d:'A pumping station that raises sewage to a higher elevation.'},
        {t:'Force main', d:'A pressurised pipe carrying sewage from a lift station.'},
        {t:'Wet well', d:'The chamber holding sewage at a lift station. A confined space.'},
        {t:'Infiltration', d:'Groundwater entering sewers through cracks and defective joints.'},
        {t:'Inflow', d:'Surface water entering sewers directly via roof drains, sump pumps or manhole covers.'},
        {t:'Hydrogen sulphide (H₂S)', d:'Toxic, corrosive gas from septic sewage. Smells of rotten eggs at low levels; deadens the sense of smell at high levels.'}
      ],
      tips:[
        'Gravity where possible; lift station + force main where the ground rises.',
        'Infiltration = groundwater through defects. Inflow = surface water through direct connections.',
        'H₂S is toxic AND corrodes concrete sewers into sulphuric acid damage.',
        'Wet wells are CONFINED SPACES. Test the atmosphere before entry, every time.'
      ]
    }
  ]
},
{
  id:'o5', n:5, title:'Wastewater Treatment Basics', duty:'PQC', track:'OIT',
  blurb:'The wastewater plant at OIT depth — the overview version of the Level I material.',
  lessons:[
    {
      id:'o5l1', title:'The Wastewater Treatment Train',
      need:'Sequence: <b>screening → grit removal → primary settling → secondary (biological) → disinfection → discharge</b>, with <b>sludge</b> pulled off and treated separately. Know what each step removes.',
      learn:[
        '<b>Preliminary</b> treatment protects the plant: <b>screens</b> catch rags and debris, and <b>grit removal</b> takes out sand and gravel that would otherwise wear out pumps.',
        '<b>Primary</b> treatment is a big quiet tank where gravity does the work — heavy solids settle to the bottom as sludge, grease and floatables are skimmed off the top. This removes roughly half the suspended solids.',
        '<b>Secondary</b> treatment is biological. Microorganisms eat the dissolved organic matter (measured as <b>BOD</b>) that gravity cannot remove, and are then settled out in a secondary clarifier. This is where most of the treatment actually happens.',
        '<b>Disinfection</b> kills remaining pathogens before discharge. Unlike drinking water, wastewater chlorine residual is usually <b>removed (dechlorinated)</b> before discharge because it is toxic to fish.',
        'All the solids removed along the way become <b>sludge</b>, which is thickened, stabilised (often by digestion) and dewatered before disposal or land application.'
      ],
      operator:'Your daily walk is a visual inspection: is the screen clear, is the clarifier surface calm and clean, is the aeration basin the right chocolate-brown colour with a light foam, is the effluent clear. Experienced operators catch most problems by eye long before the lab confirms them.',
      equipment:'Bar screens, grit chambers, primary clarifiers, aeration basins and blowers, secondary clarifiers, chlorine contact chambers or UV, sludge pumps, digesters, dewatering equipment.',
      trouble:[
        {p:'Effluent cloudy or carrying solids', c:'Check clarifier sludge blanket, check for hydraulic overload, check the aeration basin condition.'},
        {p:'Aeration basin black with a rotten-egg smell', c:'Oxygen has been lost — the basin has gone septic. Increase air immediately.'},
        {p:'Strong odours around the plant', c:'Septic (anaerobic) conditions somewhere: sludge held too long, low DO, or stagnant channels.'}
      ],
      terms:[
        {t:'BOD', d:'Biochemical Oxygen Demand — how much oxygen microorganisms need to break down the organic matter. The main measure of wastewater strength.'},
        {t:'Preliminary treatment', d:'Screening and grit removal, protecting downstream equipment.'},
        {t:'Primary treatment', d:'Gravity settling of solids and skimming of floatables.'},
        {t:'Secondary treatment', d:'Biological removal of dissolved organic matter.'},
        {t:'Sludge', d:'Solids removed from wastewater, requiring separate treatment and disposal.'},
        {t:'Dechlorination', d:'Removing chlorine residual before discharge because it is toxic to aquatic life.'}
      ],
      tips:[
        'Order: screening → grit → primary → secondary → disinfection → discharge.',
        'Screens protect equipment; grit removal prevents ABRASION.',
        'Secondary treatment is BIOLOGICAL — it removes dissolved BOD.',
        'Wastewater chlorine is usually REMOVED before discharge; drinking water KEEPS a residual.',
        'Healthy aeration basin = chocolate brown with light foam. Black + rotten eggs = septic.'
      ]
    }
  ]
},
{
  id:'o6', n:6, title:'Support Systems — Pumps, Motors, Valves &amp; Electrical', duty:'SUP', track:'OIT',
  blurb:'The equipment every stream shares. "Support systems" is a named OIT exam area.',
  lessons:[
    {
      id:'o6l1', title:'Pumps, Motors and Valves',
      need:'<b>Centrifugal</b> pumps are the workhorse and must be <b>primed</b>. <b>Positive displacement</b> pumps move a fixed volume and must <b>never run against a closed discharge</b>. <b>Cavitation</b> sounds like gravel. Valves: <b>gate</b> = isolation, <b>globe</b> = throttling, <b>check</b> = prevents backflow.',
      learn:[
        'A <b>centrifugal pump</b> spins an impeller that flings water outward. It is simple, moves high volumes, and is used everywhere. It cannot pump air, so it must be <b>primed</b> — filled with liquid — before it will work.',
        'A <b>positive displacement pump</b> traps a fixed volume and pushes it along. Flow stays nearly constant regardless of pressure, which makes it ideal for chemical dosing. <b>Critical rule: never run one against a closed discharge valve</b> — pressure builds until something bursts, so a relief valve is mandatory.',
        '<b>Cavitation</b> happens when suction pressure is too low: vapour bubbles form and collapse violently inside the pump. It <b>sounds like pumping gravel</b> and it destroys impellers. It is always a suction-side problem — a closed valve, a plugged strainer, or too low a level in the well.',
        '<b>Valves</b> each have a job. A <b>gate valve</b> is for isolation — fully open or fully shut; throttling with one wrecks the seat. A <b>globe valve</b> is built to throttle. A <b>check valve</b> works automatically to stop backflow. <b>Motors</b> need correct voltage, overload protection, clean cooling air and correct rotation direction.'
      ],
      operator:'Listen and feel every day. Gravel noise means cavitation. New vibration means a bearing, a clog or misalignment. A hot motor means overload, poor cooling or a failing bearing. Rising motor amps over weeks means something is developing — investigate before it fails.',
      equipment:'Centrifugal pumps, submersible pumps, chemical metering pumps, electric motors and starters, VFDs, gate/globe/check/butterfly valves, pressure relief valves, pressure gauges.',
      trouble:[
        {p:'Pump sounds like it is pumping gravel', c:'Cavitation. Check the SUCTION side — valve closed or throttled, plugged strainer, low well level.'},
        {p:'Pump runs but no water is delivered', c:'Lost prime, air lock, closed suction valve, clogged impeller, or wrong rotation direction.'},
        {p:'Motor tripping on overload or running hot', c:'Clog, bearing failure, wrong voltage or lost phase, or blocked cooling air.'},
        {p:'Line burst on a chemical pump', c:'It was run against a closed valve. Confirm the pressure relief valve is fitted and functional.'}
      ],
      terms:[
        {t:'Centrifugal pump', d:'Pump using a spinning impeller. Must be primed; cannot pump air.'},
        {t:'Positive displacement pump', d:'Pump moving a fixed volume per cycle. Requires a pressure relief valve.'},
        {t:'Priming', d:'Filling a pump and its suction line with liquid so it can develop suction.'},
        {t:'Cavitation', d:'Vapour bubbles forming and collapsing in a pump — sounds like gravel, damages the impeller.'},
        {t:'Gate valve', d:'Isolation valve, fully open or fully closed. Not for throttling.'},
        {t:'Globe valve', d:'Valve designed for throttling and regulating flow.'},
        {t:'Check valve', d:'Automatic valve allowing flow one way only, preventing backflow.'}
      ],
      tips:[
        'Cavitation sounds like GRAVEL and is a SUCTION-side problem.',
        'NEVER run a positive displacement pump against a closed discharge.',
        'Gate = isolation. Globe = throttling. Check = prevents backflow.',
        'A centrifugal pump must be primed — it cannot pump air.',
        'Rising motor amps = developing mechanical problem.'
      ]
    }
  ]
},
{
  id:'o7', n:7, title:'Process &amp; Quality Control — Sampling and Testing', duty:'PQC', track:'OIT',
  blurb:'Taking a sample that means something, running the basic tests, and recording the result.',
  lessons:[
    {
      id:'o7l1', title:'Sampling and Common Tests',
      need:'A sample must be <b>representative</b>. <b>Grab</b> = one moment; <b>composite</b> = many portions over time. <b>pH, chlorine residual, DO and temperature must be measured immediately.</b> Bacteriological samples need <b>sterile bottles</b> that are <b>never rinsed</b>.',
      learn:[
        'A sample is only worth what it represents. Take it from a <b>well-mixed, flowing</b> point — never from a stagnant corner, a scummy surface, or against a wall. If the sample is not representative, every decision made from it is wrong.',
        'A <b>grab sample</b> captures one instant. Use it for anything that changes the moment it leaves the process: <b>pH, chlorine residual, dissolved oxygen, temperature</b>, and bacteriological samples. A <b>composite sample</b> combines portions collected over 24 hours to give an average — used for things like BOD and TSS.',
        'For bacteriological samples: use a <b>sterile bottle</b>, and <b>never rinse it</b> — rinsing destroys sterility and washes out the dechlorinating agent that stops chlorine killing organisms in the bottle after collection.',
        'Samples generally need to be kept cold (about 4 °C) and analysed within a <b>hold time</b>. For any sample used for regulatory purposes, a <b>chain of custody</b> record — who had it, when — is required.'
      ],
      operator:'Label the bottle at the moment you fill it, never later from memory. Sample the same points at the same times so your trends mean something. And calibrate your meters — an uncalibrated instrument gives you confident, precise, wrong numbers.',
      equipment:'Sample bottles (sterile and plain), coolers and ice, chlorine test kit or colorimeter, pH meter, DO meter, turbidimeter, thermometer, composite sampler, chain-of-custody forms.',
      trouble:[
        {p:'Lab results do not match what you see in the plant', c:'Non-representative sample point, sample not mixed, wrong sample type, or hold time exceeded.'},
        {p:'Bacteriological sample rejected', c:'Bottle not sterile, bottle was rinsed, no dechlorinating agent, hold time exceeded, or contamination during collection.'},
        {p:'Chlorine residual reads lower than expected', c:'Measure it immediately at the point of interest — residual falls with time. Also check the test kit reagents are in date.'}
      ],
      terms:[
        {t:'Representative sample', d:'A sample that truly reflects the water being sampled — taken from a well-mixed, flowing point.'},
        {t:'Grab sample', d:'A single sample taken at one moment. Required for pH, chlorine residual, DO and temperature.'},
        {t:'Composite sample', d:'Portions collected over time and combined to give an average.'},
        {t:'Chain of custody', d:'Documented record of who handled a sample and when. Required for regulatory samples.'},
        {t:'Hold time', d:'Maximum time between collection and analysis for the result to remain valid.'},
        {t:'Calibration', d:'Adjusting an instrument against a known standard so its readings are accurate.'}
      ],
      tips:[
        'pH, chlorine residual, DO and temperature = GRAB samples, measured immediately.',
        'NEVER rinse a sterile bacteriological bottle.',
        'Samples must be REPRESENTATIVE — well-mixed, flowing point.',
        'Chain of custody is required for regulatory samples.',
        'Calibrate meters, or your numbers are fiction.'
      ]
    }
  ]
},
{
  id:'o8', n:8, title:'Safety &amp; Administration', duty:'ADM', track:'OIT',
  blurb:'The area the OIT exam leans on hardest. On any safety question, the most cautious answer is almost always right.',
  lessons:[
    {
      id:'o8l1', title:'Confined Spaces, Lockout/Tagout and PPE',
      need:'The two biggest confined-space hazards are <b>lack of oxygen</b> and <b>hazardous gases</b>. Test the atmosphere <b>oxygen → flammable → toxic</b>; safe oxygen is <b>19.5–23.5%</b>. Before servicing equipment, <b>lock out and tag the breaker in the OFF position</b>. PPE is the <b>last</b> line of defence.',
      learn:[
        'Confined spaces kill more water and wastewater workers than anything else, and these accidents typically claim <b>more than one life</b> — a worker collapses, a coworker rushes in to help, and both die. <b>Never enter to rescue without training and proper equipment.</b>',
        'Wet wells, manholes, tanks, vaults and digesters are all confined spaces. The two hazards to name on the exam are <b>oxygen deficiency</b> and <b>hazardous gases</b> (especially hydrogen sulphide and methane).',
        '<b>Test in order: oxygen first, then flammable, then toxic.</b> A combustible gas sensor needs oxygen to read correctly, so an oxygen-deficient atmosphere makes the flammable reading unreliable. Safe oxygen is <b>19.5% to 23.5%</b> — below is deficient, above is enriched and a severe fire risk.',
        '<b>Lockout/tagout:</b> before working on any pump or equipment, shut it down, isolate every energy source, and <b>lock and tag the main breaker in the OFF position</b>. Release stored energy, then verify zero energy by trying to start it. Each worker applies their own lock, and only that worker removes it.',
        '<b>PPE is the last line of defence</b> in the hierarchy of controls — elimination, substitution, engineering controls, administrative controls, then PPE. It protects only the wearer and only if worn properly.'
      ],
      operator:'Treat every confined space as lethal until your meter proves otherwise — including one you entered safely yesterday. Bump-test and calibrate the gas detector on schedule. If the alarm sounds or conditions change, leave immediately and do not return until it is re-tested.',
      equipment:'4-gas detector (O₂, LEL, H₂S, CO), ventilation blowers and ducting, full-body harness, tripod and retrieval winch, SCBA, entry permits, lockout locks/hasps/tags, eyewash and safety shower, spill kits, PPE.',
      trouble:[
        {p:'Gas detector alarms during entry', c:'Evacuate immediately. Do not investigate from inside. Re-ventilate, re-test and find the cause before re-entry.'},
        {p:'Oxygen reads below 19.5% or above 23.5%', c:'Do not enter. Ventilate and re-test. Enriched oxygen is a severe fire hazard.'},
        {p:'Worker down inside a confined space', c:'DO NOT ENTER. Call emergency services and use the retrieval system from outside. Most confined-space deaths are would-be rescuers.'},
        {p:'Equipment started while someone was working on it', c:'Lockout/tagout failure. Stop work immediately and investigate as a serious near-miss.'}
      ],
      terms:[
        {t:'Confined space', d:'A space with limited entry and exit, not designed for continuous occupancy, large enough to enter.'},
        {t:'Lockout/tagout (LOTO)', d:'Isolating and locking all energy sources before servicing equipment, verified at zero energy.'},
        {t:'Oxygen deficient', d:'Atmosphere below 19.5% oxygen.'},
        {t:'Oxygen enriched', d:'Atmosphere above 23.5% oxygen — a severe fire hazard.'},
        {t:'LEL', d:'Lower Explosive Limit — the lowest concentration of a gas in air that will ignite.'},
        {t:'Attendant', d:'A trained person stationed outside a confined space who never enters to rescue.'},
        {t:'PPE', d:'Personal Protective Equipment — the last line of defence.'}
      ],
      tips:[
        'Two biggest confined space hazards: LACK OF OXYGEN and HAZARDOUS GASES.',
        'Test order: OXYGEN → FLAMMABLE → TOXIC.',
        'Safe oxygen range: 19.5% to 23.5%.',
        'Taking a pump out of service: LOCK OUT AND TAG THE BREAKER IN THE OFF POSITION.',
        'PPE ranks LAST in the hierarchy of controls.',
        'NEVER enter a confined space to rescue without training and equipment.',
        'On any safety question, choose the most cautious answer.'
      ]
    },
    {
      id:'o8l2', title:'WHMIS, Records and Operator Responsibilities',
      need:'<b>WHMIS 2015</b> = <b>labels + Safety Data Sheets + training</b>. Records are a <b>legal requirement</b>. Report problems promptly and <b>never falsify data</b>. Work within your certification and training.',
      learn:[
        '<b>WHMIS 2015</b> is Canada\'s hazard communication system, aligned with the international GHS. It has three parts: <b>labels</b> (supplier labels on original containers, workplace labels on anything you decant into another container), <b>Safety Data Sheets (SDS)</b> that must be accessible to workers, and <b>training</b> so you can actually use them.',
        'Two chemical rules worth memorising: <b>always add acid to water</b>, never water to acid — the reaction is violently exothermic. And <b>never mix chlorine with acid</b> (releases chlorine gas) <b>or with ammonia</b> (forms chloramine vapours).',
        '<b>Records are legally required</b> — daily logs, readings, sample results, maintenance and calibration. They are the proof the facility was operated properly, and they are what an inspector reads. <b>Falsifying records is one of the most serious offences an operator can commit.</b>',
        'As an OIT you work <b>under supervision</b> and within your training. If you are asked to do something you have not been trained for, or that seems unsafe, say so. That is not insubordination — it is the job.'
      ],
      operator:'Keep a legible daily log another operator could follow. Note observations as well as numbers: colour, odour, weather, unusual events, and any adjustment you made and why. Report spills, exceedances and unusual conditions promptly.',
      equipment:'SDS station or binder, WHMIS labels, PPE, eyewash and safety shower, spill kits and containment, operating log books, calibration records, reporting forms.',
      trouble:[
        {p:'Unlabelled container found on site', c:'Do not use it. Isolate it and label it properly once identified — WHMIS requires every container be labelled.'},
        {p:'Chemical splash on skin or in eyes', c:'Flush with water for at least 15 minutes and get medical attention. Never try to neutralise a chemical on skin.'},
        {p:'Asked to record a result you did not take or do not believe', c:'Do not sign it. Raise it with your supervisor in writing. Falsifying records is a serious offence.'},
        {p:'Spill occurs', c:'Protect yourself first, isolate the area, stop the source if safe, contain it, consult the SDS and report it.'}
      ],
      terms:[
        {t:'WHMIS 2015', d:'Canada\'s Workplace Hazardous Materials Information System — labels, SDSs and worker training.'},
        {t:'SDS', d:'Safety Data Sheet — standard document of a chemical\'s hazards, handling, PPE and first aid.'},
        {t:'Supplier label', d:'The manufacturer\'s hazard label on an original chemical container.'},
        {t:'Workplace label', d:'A label applied when a chemical is transferred into another container on site.'},
        {t:'Operating log', d:'The daily legal record of operation, readings, observations and adjustments.'},
        {t:'CEU', d:'Continuing Education Unit — training credit used to maintain EOCP certification.'}
      ],
      tips:[
        'WHMIS 2015 = LABELS + SDS + TRAINING. Know all three.',
        'ALWAYS add acid to water, never water to acid.',
        'NEVER mix chlorine with acid or with ammonia.',
        'Flush chemical exposure for at least 15 minutes.',
        'Records are a LEGAL requirement. Never falsify them.',
        'Work within your training and certification — ask when unsure.'
      ]
    }
  ]
}
];

/* OIT exam areas (EOCP names four) */
const OIT_DUTIES = {
  GEN:{key:'GEN', name:'General Knowledge', q:25, pct:25},
  SUP:{key:'SUP', name:'Support Systems', q:25, pct:25},
  PQC:{key:'PQC', name:'Process & Quality Control', q:25, pct:25},
  ADM:{key:'ADM', name:'Administration', q:25, pct:25}
};

const OIT_INFO = {
  official:[
    {k:'What OIT is',
     v:'Operator-in-Training is EOCP\'s entry-level certification. Since <b>1 January 2018 there is ONE OIT exam and certification</b> covering <b>all four streams</b>: Water Treatment, Water Distribution, Wastewater Collection and Wastewater Treatment.', src:'OFFICIAL'},
    {k:'Is it required before Level I?',
     v:'<b>No.</b> OIT is an <b>optional</b> certification for new operators. It is <b>not</b> required in order to become a Level I operator.', src:'OFFICIAL'},
    {k:'Experience / training requirement',
     v:'<b>3 months (500 hours)</b> of hands-on experience <b>OR 90 hours (9.0 CEUs)</b> of training through a directly applicable approved course.', src:'OFFICIAL'},
    {k:'Education requirement',
     v:'Proof of high school completion, GED, an adult graduation diploma, or a post-secondary diploma where high school was a requirement. <b>No formal water/wastewater education is required.</b>', src:'OFFICIAL'},
    {k:'Exam format',
     v:'<b>100 questions.</b> Available in paper and web-based formats.', src:'OFFICIAL'},
    {k:'Exam content areas',
     v:'Candidates are tested in four areas: <b>general knowledge</b>, <b>support systems</b>, <b>process and quality control</b>, and <b>administration</b>.', src:'OFFICIAL'},
    {k:'Sample exam',
     v:'EOCP publishes an <b>OIT Sample Exam</b> and an <b>OIT Exam Breakdown</b> document. Use them — they are the closest thing to the real paper.', src:'OFFICIAL'}
  ],
  unverified:[
    '<b>Exact apportionment of the 100 questions</b> between general knowledge, support systems, process and quality control, and administration. EOCP publishes an OIT Exam Breakdown table but its contents could not be retrieved. This app assumes an even 25/25/25/25 split for study planning only. <b>UNVERIFIED — CHECK THE OIT EXAM BREAKDOWN PDF.</b>',
    '<b>OIT exam duration and pass mark.</b> Not separately confirmed for OIT. <b>UNVERIFIED — CONFIRM WITH EOCP.</b>',
    '<b>OIT exam fee.</b> <b>UNVERIFIED — CONFIRM WITH EOCP.</b>'
  ],
  links:[
    {t:'EOCP — OIT Sample Exam (PDF)', u:'https://eocp.ca/wp-content/uploads/2021/01/OIT-Sample-Exam-2020-December.pdf'},
    {t:'EOCP — OIT Exam Breakdown (PDF)', u:'https://eocp.ca/wp-content/uploads/2021/03/OIT-Exam-Breakdown.pdf'},
    {t:'EOCP — Math Test Questions (PDF)', u:'https://eocp.ca/wp-content/uploads/2018/04/EOCP-Math-Test-Questions.pdf'},
    {t:'EOCP — How to Become an Operator', u:'https://eocp.ca/certified-operators/how-to-become-an-operator/'},
    {t:'EOCP — Exam Requirements', u:'https://eocp.ca/certified-operators/drc-requirements/'},
    {t:'EOCP — Exam Preparation', u:'https://eocp.ca/certified-operators/preparing-for-your-exam/'}
  ]
};

/* ---------------- OIT question bank ---------------- */
const OIT_QUESTIONS = [
{id:'oq1',m:'o1',l:'o1l1',t:'mc',q:'The primary purpose of both water treatment and wastewater treatment is to:',
 o:['Protect public health','Reduce the cost of water supply','Generate energy from waste','Improve the taste of water'],a:0,
 e:'Public health protection is the primary purpose of both. Environmental protection is second. Taste and energy are secondary considerations.'},
{id:'oq2',m:'o1',l:'o1l1',t:'mc',q:'"Potable" water means water that is:',
 o:['Safe to drink','Untreated and taken from a source','Used and requiring treatment','Being held in a reservoir for firefighting'],a:0,
 e:'Potable means safe for human consumption. Raw water is untreated source water.'},
{id:'oq3',m:'o1',l:'o1l2',t:'mc',q:'Disinfection is best described as:',
 o:['Killing or inactivating pathogens to a safe level','Destroying every living organism in the water','Removing all suspended particles from water','Adjusting the pH of the water to neutral'],a:0,
 e:'Disinfection reduces pathogens to a safe level. Sterilisation, which destroys all organisms, is neither achieved nor required in water treatment.'},
{id:'oq4',m:'o1',l:'o1l2',t:'mc',q:'Turbidity is a measure of:',
 o:['Cloudiness caused by suspended particles, measured in NTU','Acidity or basicity, measured on a 0–14 scale','Dissolved oxygen content, measured in mg/L','Water hardness, measured as calcium carbonate'],a:0,
 e:'Turbidity is cloudiness from suspended particles, reported in NTU. It matters because particles shield microorganisms from disinfectant.'},
{id:'oq5',m:'o2',l:'o2l1',t:'mc',q:'The usual order of drinking water treatment is:',
 o:['Coagulation → flocculation → sedimentation → filtration → disinfection','Filtration → coagulation → disinfection → sedimentation','Disinfection → sedimentation → flocculation → filtration','Sedimentation → disinfection → coagulation → filtration'],a:0,
 e:'Chemicals are added and mixed first, floc is grown, solids settle, filtration polishes, and disinfection is last so it acts on the cleanest water.'},
{id:'oq6',m:'o2',l:'o2l1',t:'mc',q:'Coagulation requires rapid mixing because:',
 o:['Charge neutralisation happens within seconds and must be spread through the water','The floc must be broken into smaller pieces','It raises the water temperature quickly','It drives dissolved gases out of the water'],a:0,
 e:'Coagulation is a fast charge reaction, so the chemical must be dispersed immediately. Flocculation afterwards is slow and gentle so floc can grow without being torn apart.'},
{id:'oq7',m:'o2',l:'o2l2',t:'mc',q:'Chlorine disinfection is most effective at:',
 o:['Lower pH, where more hypochlorous acid is present','Higher pH, where more hypochlorite ion is present','pH above 9.5 in all circumstances','Any pH — pH has no effect on chlorine'],a:0,
 e:'At lower pH the equilibrium favours hypochlorous acid (HOCl), which is a far stronger disinfectant than the hypochlorite ion.'},
{id:'oq8',m:'o2',l:'o2l2',t:'sc',q:'Bacteriological samples are failing even though the chlorine residual is at target. Which is LEAST likely to be the cause?',
 o:['The chlorine dose is far higher than necessary','High turbidity is shielding organisms from the chlorine','Contact time is shorter than the design value','High pH is reducing the proportion of hypochlorous acid'],a:0,
 e:'An excessive dose would not cause failures. Particle shielding, insufficient contact time and high pH all reduce effective disinfection despite an adequate measured residual.'},
{id:'oq9',m:'o2',l:'o2l2',t:'mc',q:'A key limitation of UV disinfection compared with chlorine is that UV:',
 o:['Leaves no residual to protect water in the distribution system','Produces large volumes of disinfection by-products','Cannot inactivate any bacteria or viruses','Requires the water to be heated before treatment'],a:0,
 e:'UV leaves no residual, so it cannot protect water once it leaves the plant. It does have the advantage of producing no chemical residual or by-products.'},
{id:'oq10',m:'o3',l:'o3l1',t:'mc',q:'A cross-connection between a potable supply and a possible contamination source is prevented by:',
 o:['An approved backflow prevention device','A pressure reducing valve on the service line','Increasing the chlorine dose at the plant','Flushing the nearest fire hydrant weekly'],a:0,
 e:'Cross-connection control relies on an approved backflow prevention device, correctly selected for the hazard and tested on schedule. An air gap is the most reliable protection of all.'},
{id:'oq11',m:'o3',l:'o3l1',t:'mc',q:'Backflow caused by a vacuum or negative pressure in the supply line is called:',
 o:['Back-siphonage','Back-pressure','Backwashing','Backflushing'],a:0,
 e:'Back-siphonage is caused by negative pressure, often after a main break or heavy fire flow. Back-pressure occurs when downstream pressure exceeds supply pressure.'},
{id:'oq12',m:'o3',l:'o3l1',t:'sc',q:'A garden hose is found lying submerged in a livestock water trough. This is:',
 o:['A cross-connection creating a back-siphonage risk','Acceptable if the hose is removed once a week','Only a concern if the trough water is visibly dirty','A back-pressure hazard but not a cross-connection'],a:0,
 e:'A submerged hose is a textbook cross-connection. If pressure in the main drops, trough water can be siphoned into the potable system. Fit a vacuum breaker on the hose bib.'},
{id:'oq13',m:'o3',l:'o3l2',t:'mc',q:'Positive pressure must be maintained in a distribution system at all times because:',
 o:['Loss of pressure allows contaminated water to be drawn into the main','Pressure loss causes the chlorine residual to rise sharply','Low pressure damages the pipe material permanently','High pressure is required for accurate metering'],a:0,
 e:'If pressure drops to zero, groundwater and contamination can be drawn in through joints and defects. Maintaining positive pressure is a core public health protection.'},
{id:'oq14',m:'o3',l:'o3l2',t:'sc',q:'After repairing a watermain break, the main must be returned to service only after:',
 o:['Flushing, disinfection and satisfactory bacteriological sampling','Flushing alone, provided the water runs clear','A visual inspection of the repair clamp','Restoring pressure and checking for leaks'],a:0,
 e:'Flush, disinfect, then sample. Returning a repaired main to service without disinfection and sampling is how a repair turns into a boil-water advisory.'},
{id:'oq15',m:'o3',l:'o3l2',t:'sc',q:'A customer reports brown, rusty-looking water. The most likely cause is:',
 o:['Iron or manganese sediment disturbed by a change in flow','A complete failure of the disinfection system','Excessive fluoride being added at the plant','The water being too cold for the season'],a:0,
 e:'Discoloured water is usually settled iron/manganese stirred up by a velocity or direction change — hydrant use or a nearby break. Flush the area and check the chlorine residual.'},
{id:'oq16',m:'o4',l:'o4l1',t:'mc',q:'A pressurised pipe carrying sewage away from a lift station is called a:',
 o:['Force main','Gravity sewer','Interceptor trunk','Combined outfall'],a:0,
 e:'A lift station discharges into a force main under pressure, carrying sewage up and over a high point where gravity flow can resume.'},
{id:'oq17',m:'o4',l:'o4l1',t:'mc',q:'Groundwater entering sewers through cracks and defective joints is:',
 o:['Infiltration','Inflow','Interception','Percolation'],a:0,
 e:'Infiltration is groundwater through defects. Inflow is surface water entering directly via roof drains, sump pumps and manhole covers.'},
{id:'oq18',m:'o4',l:'o4l1',t:'sc',q:'A lift station wet well has a strong rotten-egg odour and the concrete above the waterline is deteriorating. The cause is:',
 o:['Hydrogen sulphide from septic sewage, which corrodes concrete','Excess chlorine residual attacking the concrete','Grit abrasion wearing the concrete surfaces','Cold weather cracking the concrete structure'],a:0,
 e:'Septic sewage generates hydrogen sulphide, which converts to sulphuric acid on damp concrete surfaces and eats the structure. It is also acutely toxic.'},
{id:'oq19',m:'o5',l:'o5l1',t:'mc',q:'In a wastewater plant, grit removal exists mainly to:',
 o:['Prevent abrasion and wear of downstream equipment','Remove dissolved organic matter','Disinfect the incoming wastewater','Raise the pH before biological treatment'],a:0,
 e:'Grit is dense and abrasive. It wears pump impellers and accumulates in tanks, stealing volume. Screening handles the large debris.'},
{id:'oq20',m:'o5',l:'o5l1',t:'mc',q:'Secondary wastewater treatment removes dissolved organic matter by:',
 o:['Using microorganisms that are afterwards settled out','Passing the water through fine sand filters','Adding chlorine to oxidise the organics','Allowing the solids to settle by gravity alone'],a:0,
 e:'Gravity cannot remove dissolved BOD. Biology converts it into microbial cells, which are then settled out in the secondary clarifier.'},
{id:'oq21',m:'o5',l:'o5l1',t:'sc',q:'A healthy activated sludge aeration basin usually looks and smells:',
 o:['Chocolate-brown with an earthy or musty odour','Black with a strong rotten-egg odour','Bright green with a chlorine odour','Clear and completely odourless'],a:0,
 e:'Chocolate-brown with a light earthy smell indicates a healthy aerobic population. Black with a rotten-egg smell means the basin has gone septic and lost its oxygen.'},
{id:'oq22',m:'o5',l:'o5l1',t:'mc',q:'Chlorine residual in wastewater effluent is normally removed before discharge because it is:',
 o:['Toxic to fish and other aquatic life','Corrosive to the outfall pipework','Required to be zero for pH control','Unstable and forms grit deposits'],a:0,
 e:'Chlorine residual is toxic to aquatic organisms, so dechlorination is normally required. This is the opposite of drinking water, where a residual is deliberately maintained.'},
{id:'oq23',m:'o6',l:'o6l1',t:'sc',q:'A pump makes a noise like gravel rattling through it. This indicates:',
 o:['Cavitation, which is a suction-side problem','Normal operation at high discharge head','Excessive lubrication in the bearings','A partially closed discharge valve only'],a:0,
 e:'Gravel or marble noise is the classic description of cavitation — vapour bubbles collapsing at the impeller. Investigate the suction side: closed valve, plugged strainer or low well level.'},
{id:'oq24',m:'o6',l:'o6l1',t:'mc',q:'A positive displacement pump must never be run against a closed discharge valve because:',
 o:['Pressure builds until the pump or piping fails','It will simply stop pumping with no consequence','It will cavitate and lose prime immediately','The flow will gradually reverse direction'],a:0,
 e:'A PD pump has no internal relief path, so pressure rises until something bursts. A pressure relief valve is mandatory on these pumps.'},
{id:'oq25',m:'o6',l:'o6l1',t:'mc',q:'Which valve is intended for isolation only, fully open or fully closed?',
 o:['Gate valve','Globe valve','Check valve','Pressure relief valve'],a:0,
 e:'Gate valves isolate. Throttling with one erodes the seat and ruins the valve. Globe valves are the ones designed to throttle.'},
{id:'oq26',m:'o6',l:'o6l1',t:'mc',q:'A centrifugal pump that has lost its prime will:',
 o:['Run without delivering water, because it cannot pump air','Deliver more water than normal at lower pressure','Immediately trip its overload on high current','Reverse its direction of rotation automatically'],a:0,
 e:'A centrifugal pump cannot pump air. Until the casing and suction are filled with liquid it will run but move nothing.'},
{id:'oq27',m:'o7',l:'o7l1',t:'mc',q:'Which parameter must be measured immediately on a grab sample?',
 o:['Chlorine residual','Biochemical Oxygen Demand','Total suspended solids','Total phosphorus'],a:0,
 e:'Chlorine residual, pH, dissolved oxygen and temperature all change the moment the sample leaves the process, so they are measured immediately as grab samples.'},
{id:'oq28',m:'o7',l:'o7l1',t:'sc',q:'Before filling a sterile bottle for a bacteriological sample, you should:',
 o:['Fill it without rinsing, to preserve sterility and any dechlorinating agent','Rinse it three times with the sample water first','Rinse it once with distilled water from the lab','Wipe the inside of the bottle with a clean cloth'],a:0,
 e:'Rinsing destroys sterility and washes out the dechlorinating agent, which would otherwise stop residual chlorine killing organisms inside the bottle after collection.'},
{id:'oq29',m:'o7',l:'o7l1',t:'sc',q:'A sample is taken from a stagnant corner of a tank rather than a well-mixed flowing point. The result is:',
 o:['Not representative, so any decision based on it may be wrong','Acceptable, because the tank contents are always uniform','More accurate, because settled solids are included','Valid only if the sample is analysed within one hour'],a:0,
 e:'A sample is only worth what it represents. Always sample a well-mixed, flowing point — never a stagnant corner, a scummy surface, or right against a wall.'},
{id:'oq30',m:'o8',l:'o8l1',t:'mc',q:'What are two of the most important safety concerns when entering a confined space?',
 o:['Lack of oxygen and the presence of hazardous gases','Poor lighting and uncomfortable working temperatures','Noise levels and the risk of slips and trips','Radio reception and the distance to the vehicle'],a:0,
 e:'Oxygen deficiency and hazardous gases such as hydrogen sulphide and methane are the killers in confined spaces. Both are why the atmosphere must be tested before every entry.'},
{id:'oq31',m:'o8',l:'o8l1',t:'mc',q:'When testing a confined space atmosphere, the correct order is:',
 o:['Oxygen, then flammable, then toxic','Toxic, then flammable, then oxygen','Flammable, then toxic, then oxygen','The order does not matter'],a:0,
 e:'Oxygen first, because a combustible gas sensor needs oxygen to read correctly. An oxygen-deficient atmosphere makes the flammable reading unreliable.'},
{id:'oq32',m:'o8',l:'o8l1',t:'mc',q:'The acceptable oxygen range for confined space entry is:',
 o:['19.5% to 23.5%','15% to 25%','10% to 30%','Exactly 21% with no tolerance'],a:0,
 e:'Below 19.5% is oxygen deficient. Above 23.5% is oxygen enriched and a severe fire and explosion hazard. Both ends of the range are examinable.'},
{id:'oq33',m:'o8',l:'o8l1',t:'sc',q:'Before taking a pump out of service for maintenance, the operator should FIRST:',
 o:['Lock out and tag the pump main breaker in the OFF position','Drain the pump casing and remove the impeller','Notify the customers who will lose service','Order the replacement parts that will be needed'],a:0,
 e:'Isolate the energy source and lock and tag it OFF before any work begins. Each worker applies their own lock, and zero energy is verified by attempting to start the equipment.'},
{id:'oq34',m:'o8',l:'o8l1',t:'sc',q:'A coworker collapses inside a wet well. You should:',
 o:['Not enter; call for rescue and use retrieval equipment from outside','Enter immediately to pull them clear','Enter with one other worker for safety','Wait a few minutes to see whether they recover'],a:0,
 e:'The majority of confined-space fatalities are would-be rescuers. Never enter without training and proper equipment. Use the retrieval system from outside and call emergency services.'},
{id:'oq35',m:'o8',l:'o8l1',t:'mc',q:'In the hierarchy of controls, personal protective equipment ranks:',
 o:['Last, after engineering and administrative controls','First, as the most reliable form of protection','Second, immediately after elimination','It is not part of the hierarchy of controls'],a:0,
 e:'Elimination, substitution, engineering controls, administrative controls, then PPE. PPE protects only the wearer and only if used correctly.'},
{id:'oq36',m:'o8',l:'o8l2',t:'mc',q:'The three key elements of WHMIS 2015 are:',
 o:['Labels, Safety Data Sheets and worker training','Permits, inspections and annual audits','Signage, fencing and restricted access','Testing, calibration and record retention'],a:0,
 e:'WHMIS 2015 rests on labels (supplier and workplace), Safety Data Sheets accessible to workers, and education and training so workers can use them.'},
{id:'oq37',m:'o8',l:'o8l2',t:'mc',q:'When diluting a concentrated acid, you should always:',
 o:['Add acid to water','Add water to acid','Add both together at the same rate','Warm the water before adding the acid'],a:0,
 e:'Always add acid TO water. The reaction is violently exothermic, and adding water to acid can boil and spatter concentrated acid.'},
{id:'oq38',m:'o8',l:'o8l2',t:'sc',q:'You find a container of unknown chemical with no label. You should:',
 o:['Not use it, isolate it, and label it correctly once identified','Use it if you recognise the colour and consistency','Pour it down the nearest floor drain with plenty of water','Store it with the other chemicals and leave it unlabelled'],a:0,
 e:'WHMIS requires every container to be labelled. An unidentified chemical must be treated as hazardous and isolated until it is identified and labelled properly.'},
{id:'oq39',m:'o8',l:'o8l2',t:'mc',q:'Operating logs and sample records are best described as:',
 o:['A legal requirement and the facility\'s proof of proper operation','Informal notes with no regulatory significance','Only necessary when an inspector visits the site','Optional once a SCADA system has been installed'],a:0,
 e:'Records are legally required and constitute the proof the facility was operated properly. Falsifying them is among the most serious offences an operator can commit.'},
{id:'oq40',m:'o8',l:'o8l2',t:'sc',q:'A chemical splashes into an operator\'s eyes. The correct first aid is to:',
 o:['Flush at the eyewash for at least 15 minutes and get medical attention','Neutralise the chemical with a weak opposing solution','Apply an eye ointment and continue the shift','Rinse briefly and return to work if vision is clear'],a:0,
 e:'Flush for at least 15 minutes holding the eyelids open, then seek medical attention. Never attempt to neutralise a chemical on body tissue — it generates heat and worsens the injury.'}
];

/* Extra OIT flashcards beyond the auto-generated term cards */
const OIT_CARDS = [
  {m:'o1', tag:'concept', q:'How many streams does the OIT exam cover?', a:'All four — Water Treatment, Water Distribution, Wastewater Collection and Wastewater Treatment. One exam since 1 January 2018.'},
  {m:'o1', tag:'concept', q:'Is OIT required before Wastewater Treatment Level I?', a:'No. OIT is OPTIONAL and is not a prerequisite for Level I.'},
  {m:'o1', tag:'number', q:'OIT experience/training requirement?', a:'3 months (500 hours) hands-on experience OR 90 hours (9.0 CEUs) of approved training.'},
  {m:'o1', tag:'concept', q:'The four OIT exam content areas?', a:'General knowledge · Support systems · Process and quality control · Administration.'},
  {m:'o2', tag:'concept', q:'Drinking water treatment order?', a:'Coagulation → flocculation → sedimentation → filtration → disinfection.'},
  {m:'o2', tag:'concept', q:'Biggest difference between drinking water and wastewater chlorine?', a:'Drinking water KEEPS a residual to protect the distribution system. Wastewater usually has chlorine REMOVED (dechlorinated) before discharge — it is toxic to fish.'},
  {m:'o3', tag:'concept', q:'How is a cross-connection prevented?', a:'With an approved backflow prevention device. An air gap is the most reliable protection of all.'},
  {m:'o3', tag:'concept', q:'Back-siphonage vs back-pressure?', a:'Back-siphonage = vacuum/negative pressure pulls water backwards. Back-pressure = downstream pressure exceeds supply and pushes it in.'},
  {m:'o3', tag:'trouble', q:'What must happen after a watermain repair before returning it to service?', a:'Flush, disinfect, and take satisfactory bacteriological samples.'},
  {m:'o4', tag:'concept', q:'What is a force main?', a:'The pressurised pipe carrying sewage away from a lift station, up and over a high point.'},
  {m:'o4', tag:'trouble', q:'Why does H₂S destroy concrete sewers?', a:'It converts to sulphuric acid on damp surfaces above the waterline and eats the concrete. It is also acutely toxic.'},
  {m:'o5', tag:'concept', q:'Wastewater treatment order?', a:'Screening → grit removal → primary settling → secondary (biological) → disinfection → discharge, with sludge treated separately.'},
  {m:'o6', tag:'trouble', q:'A pump sounds like gravel. What is it and where do you look?', a:'Cavitation — always a SUCTION-side problem. Check for a closed valve, plugged strainer or low well level.'},
  {m:'o6', tag:'safety', q:'The rule for positive displacement pumps?', a:'NEVER run one against a closed discharge valve. Fit a pressure relief valve.'},
  {m:'o7', tag:'concept', q:'Which tests must be done immediately as grab samples?', a:'pH, chlorine residual, dissolved oxygen and temperature.'},
  {m:'o8', tag:'safety', q:'Two most important confined space hazards?', a:'Lack of oxygen and the presence of hazardous gases.'},
  {m:'o8', tag:'safety', q:'First step before taking a pump out of service?', a:'Lock out and tag the pump main breaker in the OFF position.'},
  {m:'o8', tag:'safety', q:'Safe oxygen range and test order for confined space entry?', a:'19.5%–23.5%. Test order: oxygen → flammable → toxic.'}
];

window.OIT_MODULES = OIT_MODULES;
window.OIT_DUTIES = OIT_DUTIES;
window.OIT_INFO = OIT_INFO;
window.OIT_QUESTIONS = OIT_QUESTIONS;
window.OIT_CARDS = OIT_CARDS;
