/* curriculum.js — EOCP / WPI Wastewater Treatment Class I course content
 *
 * Structure:  CURRICULUM = [ module, module, ... ]
 *   module = { id, n, title, duty, blurb, lessons:[ lesson ] }
 *   lesson = { id, title, need, learn, operator, equipment, trouble, terms[], tips[] }
 *
 * Field meanings (the 9-part lesson format):
 *   need     -> "What you need to know" (exam-focused summary)
 *   learn    -> "Learn it" (beginner-friendly explanation, array of HTML strings)
 *   operator -> "Operator knowledge" (how it works in a real plant)
 *   equipment-> "Equipment"
 *   trouble  -> [{p:problem, c:what to check}]
 *   terms    -> [{t:term, d:definition}]  (also feed the glossary)
 *   tips     -> ["exam tip", ...]
 * Practice questions live in questions.js, keyed by lesson id.
 *
 * DUTY tags map each module to the WPI Class I exam content outline so you can
 * see where your study time is actually going.
 */

const DUTIES = {
  TPE: { key:'TPE', name:'Treatment Process Evaluation & Adjustment', q:38, pct:38 },
  EQP: { key:'EQP', name:'Equipment Evaluation, Maintenance & Operation', q:39, pct:39 },
  LAB: { key:'LAB', name:'Laboratory Analysis', q:13, pct:13 },
  SSA: { key:'SSA', name:'Security, Safety & Administrative Procedures', q:10, pct:10 }
};

const CURRICULUM = [
/* ============================ MODULE 1 ============================ */
{
  id:'m1', n:1, title:'Wastewater Fundamentals', duty:'TPE',
  blurb:'What wastewater is, what is in it, and the vocabulary the whole exam is built on.',
  lessons:[
    {
      id:'m1l1', title:'Purpose of Wastewater Treatment',
      need:'Wastewater treatment protects <b>public health</b> and the <b>receiving environment</b> by removing solids, organic matter, pathogens and nutrients before water is returned to a river, lake, ocean or ground. On the exam, public health protection is almost always the "most important" answer.',
      learn:[
        'Every time someone flushes a toilet, runs a washing machine, or a factory rinses a tank, the used water carries away waste. If that water went straight back into a river it would do three bad things: spread disease, strip the oxygen out of the water, and fertilise algae until the waterbody chokes.',
        'A treatment plant is a controlled, sped-up version of what a river would do naturally. Nature can break down a small amount of waste on its own. A plant concentrates that same biology and physics into tanks so it can handle a whole town\'s worth in hours instead of kilometres of river.',
        'The four things we are removing: <b>solids</b> (anything settleable or floatable), <b>organic matter</b> (measured as BOD — the food that consumes oxygen), <b>pathogens</b> (disease organisms), and increasingly <b>nutrients</b> (nitrogen and phosphorus).'
      ],
      operator:'You are the person who keeps that removal happening 24/7. Your permit sets limits — typically BOD, TSS, pH, fecal coliform and sometimes ammonia or phosphorus — and every process adjustment you make traces back to meeting those numbers. When an inspector or the public asks "why does this plant exist?", the answer is public health first, environment second.',
      equipment:'A conventional municipal plant in sequence: bar screen → grit chamber → primary clarifier → aeration basin → secondary clarifier → disinfection → outfall, with sludge pulled off the clarifiers to digestion and dewatering.',
      trouble:[
        {p:'Permit exceedance (BOD or TSS over limit)', c:'Check flow (is it a hydraulic overload?), check clarifier sludge blanket, check aeration DO, check for a slug industrial load, verify the lab result is not a sampling error.'},
        {p:'Odour complaints from neighbours', c:'Septic (anaerobic) conditions — check for sludge held too long in clarifiers, low DO in aeration, stagnant channels, and unwashed grit.'}
      ],
      terms:[
        {t:'Influent', d:'Wastewater flowing INTO the plant or into a process unit.'},
        {t:'Effluent', d:'Treated water flowing OUT of the plant or out of a process unit.'},
        {t:'Receiving water', d:'The river, lake, ocean or ground that the final effluent is discharged to.'},
        {t:'Pathogen', d:'A disease-causing organism — bacteria, virus, protozoa or helminth.'},
        {t:'POTW', d:'Publicly Owned Treatment Works — a municipal wastewater treatment plant.'}
      ],
      tips:[
        'If a question asks the PRIMARY purpose of wastewater treatment, choose protection of public health.',
        'Influent = in, Effluent = out. Many exam questions hinge on reading which one is meant.',
        'Know the standard flow path in order. Several questions test "what comes next?"'
      ]
    },
    {
      id:'m1l2', title:'Types of Wastewater — Municipal vs Industrial',
      need:'Know the difference between <b>domestic/sanitary</b>, <b>industrial</b>, <b>infiltration/inflow (I&amp;I)</b> and <b>stormwater</b>, and know typical raw domestic strengths: BOD ≈ 200 mg/L, TSS ≈ 200–250 mg/L, pH ≈ 6.5–8.0.',
      learn:[
        '<b>Domestic (sanitary) wastewater</b> is what comes from homes — toilets, sinks, showers, laundry. It is remarkably consistent in strength because people everywhere use water in similar ways. This is the baseline the exam assumes.',
        '<b>Industrial wastewater</b> is whatever a particular process produces. It can be far stronger, far weaker, hot, acidic, caustic, oily, or loaded with metals. It is unpredictable, which is why industries are usually required to pretreat before discharging to a municipal sewer.',
        '<b>Infiltration</b> is groundwater leaking into cracked pipes and bad joints. <b>Inflow</b> is surface water entering directly through roof drains, manhole covers and illegal connections. Together (I&amp;I) they dilute the wastewater and spike the flow during rain — a huge operational headache.',
        'Typical raw domestic numbers worth memorising: BOD₅ about 200 mg/L, TSS about 200–250 mg/L, pH 6.5–8.0, temperature 10–20 °C, and roughly 200–400 L per person per day.'
      ],
      operator:'Knowing your normal tells you when something is wrong. If your influent BOD is normally 200 mg/L and it arrives at 600 mg/L, an industry dumped something. If it arrives at 60 mg/L with triple the flow, it is raining and you have I&amp;I. Those two situations demand opposite responses, so diagnosing which one you have is the first job.',
      equipment:'Influent flow meter and composite sampler at the headworks; industrial pretreatment monitoring manholes; rain gauge (useful for correlating flow spikes to storms).',
      trouble:[
        {p:'Flow doubles or triples during rainfall', c:'Inflow/infiltration. Check collection system for illegal roof/sump connections, cracked mains, and leaking manhole covers. Expect diluted, low-strength influent.'},
        {p:'Sudden influent pH crash or spike, or dead biology', c:'Industrial slug load. Sample upstream manholes to trace the source; notify the pretreatment coordinator; protect the aeration basin.'},
        {p:'Influent much stronger than normal with no flow increase', c:'Septage/hauled waste receiving, or an industry discharging concentrated waste. Check the hauled-waste log.'}
      ],
      terms:[
        {t:'Domestic wastewater', d:'Wastewater from residential sources — toilets, sinks, showers, laundry. Also called sanitary wastewater.'},
        {t:'Infiltration', d:'Groundwater that leaks into sewer pipes through cracks, bad joints and defects.'},
        {t:'Inflow', d:'Surface/stormwater that enters the sewer directly through roof leaders, manhole covers or illegal connections.'},
        {t:'I&I', d:'Infiltration and Inflow combined — clean water entering the sewer that dilutes wastewater and spikes hydraulic load.'},
        {t:'Slug load', d:'A sudden, concentrated discharge of waste that shocks the treatment process.'},
        {t:'Septage', d:'Sludge and liquid pumped out of septic tanks and hauled to a plant for treatment.'},
        {t:'Combined sewer', d:'A sewer that carries both sanitary wastewater and stormwater in one pipe.'}
      ],
      tips:[
        'Memorise raw domestic BOD ≈ 200 mg/L and TSS ≈ 200 mg/L. Questions use these as anchors.',
        'Infiltration = groundwater through defects. Inflow = surface water through direct connections. Exam loves this distinction.',
        'High flow + LOW strength = I&I. Normal flow + HIGH strength = industrial slug.'
      ]
    },
    {
      id:'m1l3', title:'Physical, Chemical &amp; Biological Characteristics',
      need:'Physical: solids, temperature, colour, odour, turbidity. Chemical: BOD, COD, pH, alkalinity, nutrients, DO, metals, oils. Biological: bacteria, viruses, protozoa, coliforms as indicators. You must be able to sort a given parameter into the right category.',
      learn:[
        '<b>Physical characteristics</b> are what you can see, smell, feel or measure without chemistry. Fresh domestic wastewater is grey-brown and smells musty. Black water that smells of rotten eggs (hydrogen sulphide) means it has gone <b>septic</b> — it sat too long without oxygen.',
        '<b>Chemical characteristics</b> describe what is dissolved or suspended. The headline number is <b>BOD</b> (biochemical oxygen demand) — how much oxygen bacteria need to eat the organic matter. <b>COD</b> is a chemical version that measures everything oxidisable, so COD is always higher than BOD and comes back in 2 hours instead of 5 days.',
        '<b>Biological characteristics</b> are the organisms present. We do not test for every pathogen — that would be impossible. Instead we test for <b>indicator organisms</b>, usually fecal coliform or <i>E. coli</i>, which are easy to count and signal that fecal contamination (and therefore possible pathogens) is present.',
        'Temperature matters more than beginners expect. Biology roughly doubles in rate for every 10 °C rise. Cold winter wastewater means slower bugs, which means you need more of them (higher MLSS / longer sludge age) to get the same treatment.'
      ],
      operator:'Your daily walk-through is a physical characterisation: colour, odour, foam, floatables, and how the water looks coming over the weirs. Experienced operators diagnose half their problems by eye and nose before the lab results come back. Black and rotten-egg = septic. Billowing white foam = young sludge or detergent. Dark tan crisp floc = healthy.',
      equipment:'Thermometer or in-line temperature probe, pH meter, DO meter, turbidimeter, sample bottles, composite sampler, BOD incubator (20 °C).',
      trouble:[
        {p:'Influent is black and smells of rotten eggs', c:'Septic influent — long detention in the collection system or a force main. Check for hydrogen sulphide; consider pre-aeration or chemical addition. Watch for corrosion and operator H₂S exposure.'},
        {p:'Unusual colour (dye, bright green, milky)', c:'Industrial discharge. Sample and trace upstream. Note colour is largely aesthetic but signals an unpermitted source.'},
        {p:'Winter effluent quality drops with no other change', c:'Cold temperature slowing biology. Increase MLSS/sludge age to compensate.'}
      ],
      terms:[
        {t:'BOD (BOD₅)', d:'Biochemical Oxygen Demand — oxygen used by microorganisms to break down organic matter, measured over 5 days at 20 °C. mg/L.'},
        {t:'COD', d:'Chemical Oxygen Demand — oxygen equivalent of all chemically oxidisable matter. Faster than BOD (~2 h) and always higher.'},
        {t:'Septic', d:'Condition with no dissolved oxygen or nitrate, producing hydrogen sulphide, black colour and rotten-egg odour.'},
        {t:'Indicator organism', d:'An easily measured organism (fecal coliform, E. coli) whose presence signals possible fecal contamination and pathogens.'},
        {t:'Turbidity', d:'Cloudiness of water caused by suspended particles, measured in NTU.'},
        {t:'Alkalinity', d:'Water\'s capacity to neutralise acid — its buffering ability. Reported as mg/L as CaCO₃.'}
      ],
      tips:[
        'COD > BOD always. If a question gives COD lower than BOD, it is a trick or a lab error.',
        'BOD₅ conditions: 5 days, 20 °C, in the dark. Expect to be asked.',
        'Fecal coliform is an INDICATOR, not a pathogen itself.',
        'Rotten-egg smell = hydrogen sulphide = septic = no oxygen.'
      ]
    },
    {
      id:'m1l4', title:'Solids, pH and Flow',
      need:'Know the solids family tree (total → suspended + dissolved, each → volatile + fixed), that <b>volatile solids ≈ organic</b>, that pH 6.5–8.5 keeps biology healthy, and the difference between average daily, peak and diurnal flow.',
      learn:[
        '<b>Solids</b> split two ways. First by size: <b>suspended solids (TSS)</b> are caught on a filter; <b>dissolved solids (TDS)</b> pass through. Total Solids = TSS + TDS. Second by what happens when you burn them at 550 °C: what burns off is <b>volatile</b> (organic — the living and once-living material), what remains is <b>fixed</b> (inorganic — sand, grit, minerals).',
        'That second split is the useful one. When you measure MLVSS in an aeration basin, the volatile fraction is essentially your bug population. Higher volatile percentage = more active biology.',
        '<b>pH</b> is a logarithmic scale from 0 to 14, with 7 neutral. Each whole number is a tenfold change — pH 5 is ten times more acidic than pH 6. Biological treatment wants <b>6.5–8.5</b>, ideally near 7. Outside about 6–9 the bugs slow badly; well outside, they die.',
        '<b>Flow</b> is never constant. A <b>diurnal pattern</b> shows two humps — a morning peak when the town wakes and showers, and an evening peak after dinner — with a deep trough at 3–5 a.m. Peak flow is typically 2–3 times average daily flow.'
      ],
      operator:'You will run a TSS on the influent, effluent, and mixed liquor almost daily. You will chase pH whenever an industry discharges. And you will plan work around the diurnal curve — the low-flow small hours are when you take a unit offline, because that is when the plant has spare capacity.',
      equipment:'Analytical balance, drying oven at 103–105 °C, muffle furnace at 550 °C, filtration apparatus with glass fibre filters, desiccator, pH meter with buffers, flow meter (Parshall flume, magnetic meter, or weir).',
      trouble:[
        {p:'pH drifting low in aeration basin', c:'Nitrification consumes alkalinity (about 7.1 mg alkalinity per mg ammonia oxidised). Check alkalinity; add caustic/lime/soda ash if depleted. Also check for acidic industrial discharge.'},
        {p:'TSS results erratic or not reproducible', c:'Sample not mixed before pouring, filter not pre-dried to constant weight, balance not level/calibrated, sample volume too small or too large.'},
        {p:'Flow reading does not match plant observation', c:'Flume/weir fouled or not level, sensor out of calibration, solids build-up in the channel, or the zero point has drifted.'}
      ],
      terms:[
        {t:'TSS', d:'Total Suspended Solids — solids retained on a filter, mg/L.'},
        {t:'TDS', d:'Total Dissolved Solids — solids that pass through the filter, mg/L.'},
        {t:'Volatile solids', d:'The organic fraction of solids, burned off at 550 °C. Approximates living/organic matter.'},
        {t:'Fixed solids', d:'The inorganic ash remaining after ignition at 550 °C — grit, sand, minerals.'},
        {t:'Settleable solids', d:'Solids that settle out of suspension in one hour, measured in an Imhoff cone as mL/L.'},
        {t:'pH', d:'Logarithmic measure of hydrogen ion activity, 0–14. Below 7 acidic, 7 neutral, above 7 basic.'},
        {t:'Diurnal flow', d:'The repeating daily pattern of wastewater flow, typically with morning and evening peaks.'},
        {t:'Peaking factor', d:'Peak flow divided by average flow; typically 2–3 for municipal plants.'}
      ],
      tips:[
        'Total Solids = Suspended + Dissolved. Also = Volatile + Fixed. Two different cuts of the same pie.',
        'Volatile = organic = burns off. Fixed = inorganic = ash left behind.',
        'Biological treatment pH range 6.5–8.5 — a very common exam answer.',
        'pH is logarithmic: one unit = 10× change in acidity.',
        'Settleable solids are reported in mL/L from an Imhoff cone, NOT mg/L.'
      ]
    }
  ]
},
/* ============================ MODULE 2 ============================ */
{
  id:'m2', n:2, title:'Preliminary Treatment', duty:'TPE',
  blurb:'The headworks: screening, grit removal, flow measurement and the hydraulics that move water through the plant.',
  lessons:[
    {
      id:'m2l1', title:'Screening',
      need:'Screens remove <b>large debris</b> to protect downstream pumps and equipment. Know bar spacing: <b>coarse 25–50 mm</b>, <b>fine 6–25 mm</b>; approach velocity should be about <b>0.6–1.2 m/s</b> (2–4 ft/s). Screenings are landfilled, never returned to the flow.',
      learn:[
        'The bar screen is the plant\'s first line of defence — a set of vertical or inclined bars across the incoming channel. Rags, sticks, plastics, and anything else people should not have flushed get caught and raked off.',
        'The spacing between bars defines the screen. <b>Coarse screens</b> (25–50 mm) catch the big stuff. <b>Fine screens</b> (6–25 mm) catch much more and are increasingly common because rags destroy modern pumps.',
        '<b>Velocity through the screen matters in both directions.</b> Too slow (under ~0.4 m/s) and grit settles out in the channel where you do not want it. Too fast (over ~1.2 m/s) and debris is forced through the bars instead of being captured. The design target of 0.6–1.2 m/s threads that needle.',
        'Screenings are wet, smelly and full of pathogens. They get washed, dewatered, put in a covered bin, and hauled to landfill.'
      ],
      operator:'Check and clear the screen every shift. A blinded screen causes the upstream water level to rise — that <b>headloss</b> is your main indicator. Most plants have a level differential sensor that starts the mechanical rake automatically. Always have the manual bypass and a rake on hand for when the mechanism fails, which it will, usually at 2 a.m. during a storm.',
      equipment:'Manual bar rack, mechanically cleaned bar screen (chain-driven, reciprocating rake, or catenary), rotating drum screen, step screen, comminutor or grinder (macerates rather than removes), screenings washer/compactor, screenings bin.',
      trouble:[
        {p:'Water backing up upstream of the screen', c:'Screen blinded with rags. Increase rake frequency, check rake drive, clear manually, inspect for a jam. Verify the level differential sensor is reading correctly.'},
        {p:'Rake motor overload trips', c:'Large object jammed in the bars or the rake mechanism. Lock out, inspect and remove obstruction. Check shear pin / torque limiter.'},
        {p:'Rags reaching downstream pumps', c:'Bar spacing too wide, screen bypassed, or bars bent/broken creating a gap. Inspect bar rack condition.'},
        {p:'Grit accumulating in the screen channel', c:'Approach velocity too low. Check channel level control and downstream flow restriction.'}
      ],
      terms:[
        {t:'Bar screen', d:'A rack of parallel bars set across a channel to remove large debris from wastewater.'},
        {t:'Screenings', d:'The material removed by a screen — rags, plastics, sticks, debris. Landfilled.'},
        {t:'Headloss', d:'The drop in water level (energy) across a unit; across a screen it indicates how blinded the screen is.'},
        {t:'Blinding', d:'Plugging of screen openings with debris, restricting flow and raising upstream level.'},
        {t:'Comminutor', d:'A device that grinds/shreds solids in the flow rather than removing them.'},
        {t:'Approach velocity', d:'The speed of wastewater in the channel ahead of the screen; target ~0.6–1.2 m/s.'}
      ],
      tips:[
        'Screen purpose = PROTECT downstream equipment. That is the answer they want.',
        'Rising upstream water level across a screen = blinding.',
        'A comminutor grinds solids and leaves them in the flow; a screen REMOVES them. Know the difference.',
        'Screenings go to landfill — never back into the process stream.'
      ]
    },
    {
      id:'m2l2', title:'Grit Removal',
      need:'Grit = <b>heavy inorganic</b> material (sand, gravel, eggshells, coffee grounds) that causes <b>abrasion and wear</b> and accumulates in tanks. Removed by controlling velocity to about <b>0.3 m/s (1 ft/s)</b> in a horizontal channel so grit settles but organics stay suspended.',
      learn:[
        'Grit is the dense, gritty, inorganic stuff. It is abrasive — it eats pump impellers, wears out mixers, and silts up digesters and clarifiers where it steals volume you paid for.',
        'The trick to removing it is <b>selective settling</b>. Grit is heavy and settles fast; organic matter is light and settles slowly. If you hold the water at exactly the right velocity — traditionally 0.3 m/s (1 ft/s) — the grit drops out and the organics keep moving downstream where they belong.',
        'Too slow and organics settle with the grit, giving you smelly, putrescible grit that is hard to dispose of. Too fast and grit stays suspended and passes through. This is why <b>velocity control is the whole game</b> in a horizontal-flow grit chamber.',
        'Modern plants often use <b>aerated grit chambers</b> (air creates a spiral roll; grit falls out of the roll) or <b>vortex/cyclone grit units</b> (centrifugal force throws grit to the outside), both of which are less sensitive to flow changes.'
      ],
      operator:'Check grit removal daily. Look at what comes out: clean, grey, sandy grit is good. Black, greasy, smelly grit means organics are settling with it and your velocity is too low (or in an aerated chamber, the air rate is too low). Grit that never fills the bin while your downstream pumps keep wearing out means grit is passing through.',
      equipment:'Horizontal-flow grit channel with proportional weir, aerated grit chamber with diffusers and blower, vortex/cyclone grit chamber, grit pump, grit classifier/washer, grit auger and bin, grit cyclone.',
      trouble:[
        {p:'Grit is black, greasy and odorous', c:'Organics settling with the grit. Velocity too low in a horizontal channel, or air rate too low in an aerated chamber. Increase velocity/air; check the grit washer.'},
        {p:'Grit passing through to downstream units', c:'Velocity too high, chamber overloaded, or the grit removal mechanism is not running. Check flow split and mechanism operation.'},
        {p:'Rapid pump impeller wear, digester volume loss', c:'Grit is breaking through. Evaluate grit chamber performance and sizing.'},
        {p:'Aerated grit chamber losing capture', c:'Air rate wrong (too high resuspends grit, too low lets organics settle), plugged diffusers, uneven air distribution.'}
      ],
      terms:[
        {t:'Grit', d:'Heavy inorganic material — sand, gravel, cinders, eggshells, bone chips — removed early to prevent abrasion and accumulation.'},
        {t:'Aerated grit chamber', d:'Grit tank using diffused air to create a spiral roll; heavy grit drops out while organics stay suspended.'},
        {t:'Vortex grit chamber', d:'Grit removal using a controlled rotating flow; centrifugal force moves grit to the outside and down.'},
        {t:'Grit classifier', d:'Equipment that washes organics off collected grit and dewaters it before disposal.'},
        {t:'Proportional weir', d:'A specially shaped weir that maintains near-constant velocity in a grit channel across a range of flows.'}
      ],
      tips:[
        'Horizontal grit channel target velocity = 0.3 m/s (1 ft/s). Memorise it.',
        'Grit removal protects against ABRASION and volume loss.',
        'Black greasy grit = velocity too low, organics settling out.',
        'Grit is INORGANIC; screenings are mostly organic/debris. Different problems, different equipment.'
      ]
    },
    {
      id:'m2l3', title:'Flow Measurement &amp; Basic Hydraulics',
      need:'Know the common devices: <b>Parshall flume</b> and <b>weirs</b> (open channel, measure head → flow), <b>magnetic meter</b> (full pipe, no moving parts, needs conductive liquid), <b>venturi</b> (differential pressure). Understand head, headloss, and that flow = velocity × area.',
      learn:[
        'Everything in the plant is dosed, loaded and reported per unit of flow, so if the flow meter is wrong, every calculation you do is wrong. That is why flow measurement gets its own attention.',
        'In an <b>open channel</b>, you measure flow indirectly. A <b>Parshall flume</b> is a shaped throat that constricts the channel; the depth of water upstream (the <b>head</b>) has a fixed mathematical relationship to flow. Measure the head, look up or compute the flow. A <b>weir</b> (rectangular, V-notch, Cipolletti) works the same way — water spills over a precise notch and the depth over the crest gives the flow. <b>V-notch weirs are best for low flows</b> because a small flow change produces a big depth change.',
        'In a <b>full pipe</b>, the workhorse is the <b>magnetic flow meter</b>. It applies a magnetic field and measures the voltage generated by the moving conductive liquid. No moving parts, no obstruction, nothing to wear — but the liquid must be conductive (wastewater is) and the pipe must run full.',
        '<b>Hydraulics basics:</b> Flow (Q) = Velocity (V) × Area (A). <b>Head</b> is energy expressed as height of water. <b>Headloss</b> is energy lost to friction and turbulence. Water flows downhill through a plant by gravity wherever possible; pumps add head where gravity is not enough.'
      ],
      operator:'Clean the flume or weir regularly — grease and rags on the crest give false readings. The flume must be <b>level</b> and the measuring point must be at the correct location upstream. Verify meters against a second method periodically (drawdown test on a wet well is a classic field check). Never trust a single instrument you have not validated.',
      equipment:'Parshall flume, Palmer-Bowlus flume, rectangular/V-notch/Cipolletti weirs, ultrasonic level sensor, bubbler, float, magnetic flow meter, venturi meter, propeller meter, totalizer and chart recorder.',
      trouble:[
        {p:'Flow reading reads high or low consistently', c:'Sensor out of calibration, zero drift, flume not level, wrong device coefficient programmed, or sensor mounted at the wrong upstream distance.'},
        {p:'Erratic/jumpy flow signal', c:'Turbulence or foam at the sensing point, ultrasonic sensor seeing foam or condensation, debris on the weir crest, or partially full pipe on a mag meter.'},
        {p:'Mag meter reads zero with flow present', c:'Pipe not running full, electrodes fouled/coated, loss of excitation power, or grounding problem.'},
        {p:'Weir reading drifts upward over weeks', c:'Solids accumulating upstream of the weir raising the approach level, or grease build-up on the crest. Clean and re-verify.'}
      ],
      terms:[
        {t:'Parshall flume', d:'A shaped open-channel constriction; upstream head is measured and converted to flow rate.'},
        {t:'Weir', d:'An obstruction over which water flows; the depth over the crest indicates flow rate.'},
        {t:'V-notch weir', d:'A triangular-notch weir, most accurate for low flow rates.'},
        {t:'Head', d:'Energy in a fluid expressed as an equivalent height of water column.'},
        {t:'Headloss', d:'Energy lost by water moving through a pipe or unit, due to friction and turbulence.'},
        {t:'Magnetic flow meter', d:'A full-pipe meter using electromagnetic induction; no moving parts, requires a conductive liquid.'},
        {t:'Totalizer', d:'An instrument that accumulates flow over time to give total volume.'}
      ],
      tips:[
        'Q = V × A. This single relationship underpins many calculation questions.',
        'Parshall flume and weirs are OPEN CHANNEL. Magnetic and venturi meters are FULL PIPE.',
        'V-notch weir = best accuracy at LOW flows.',
        'A magnetic flow meter needs a conductive liquid and a full pipe.',
        'A flume that is not level gives a wrong reading even if the sensor is perfect.'
      ]
    }
,
    {
      id:'m2l4', title:'Flow Equalization &amp; Grinding',
      need:'<b>Flow equalization</b> dampens peaks so downstream processes see a steadier hydraulic and organic load. <b>Grinders/comminutors</b> macerate solids and leave them in the flow — unlike screens, which remove them. Both are named preliminary-treatment processes in the Class I Need-to-Know Criteria.',
      learn:[
        'Wastewater flow is never steady — it follows the diurnal curve, spikes with rain, and jumps when an industry discharges. Every downstream process performs better on a steady load, so many plants insert an <b>equalization basin</b> to flatten the peaks.',
        'The basin fills during high flow and draws down during the overnight low, releasing at a controlled rate. The benefits are real: clarifiers stop getting hydraulically overloaded at peak, chemical dosing becomes stable because flow is stable, biological processes stop being shocked, and disinfection contact time is protected.',
        'Equalization can be <b>in-line</b> (all flow passes through the basin) or <b>side-line/off-line</b> (only flow above a set rate is diverted into it). In-line gives the best damping of both flow and concentration; side-line is smaller and cheaper but only shaves the peaks.',
        'Equalization basins <b>must be mixed and usually aerated</b>. Without mixing, solids settle out and the basin goes septic, and you have simply built an odour generator that also needs cleaning out.',
        '<b>Grinders and comminutors</b> are the alternative to screening. A <b>comminutor</b> sits in the channel and shreds solids as they pass. A <b>grinder or muffin monster</b> does the same in a pipe or channel. Critically, <b>they do not remove anything</b> — the shredded material stays in the flow and reports to downstream processes. Shredded rags are notorious for re-knitting into ropes that bind pump impellers and rake mechanisms, which is why many plants have replaced comminutors with fine screens.'
      ],
      operator:'On an equalization basin, watch the level trend and the mixing. Draw down fully during the overnight low so you have capacity for the next peak — a basin sitting full is a basin doing no work. Check for grit and solids accumulation and for odour, which tells you mixing is inadequate. On grinders, listen for changes in sound, watch motor amps, and inspect cutter stacks for wear on schedule: dull cutters pass material through whole.',
      equipment:'Equalization basin with level sensors and variable-speed transfer pumps or a control valve; mixers or coarse-bubble diffusers; comminutors, in-channel grinders, in-line grinders (dual-shaft cutter stacks); flow control and level instrumentation.',
      trouble:[
        {p:'Equalization basin going septic and producing odours', c:'Inadequate mixing or aeration, or solids settling in dead zones. Increase mixing/air; check for grit accumulation and clean out.'},
        {p:'Basin never draws down and stays near full', c:'Discharge rate set too low, or plant inflow exceeds the release rate. Increase the controlled release during low-flow hours or you lose all peak capacity.'},
        {p:'Downstream processes still seeing peaks', c:'Basin undersized, side-line set point too high, or transfer pump control not modulating. Review the release control strategy.'},
        {p:'Rags binding downstream pumps despite a comminutor', c:'Shredded rags re-knitting into ropes — a known limitation of comminution. Consider replacing with fine screening, which removes rather than shreds.'},
        {p:'Grinder motor amps rising or material passing through whole', c:'Worn or dull cutter stacks, or an object jammed between cutters. Lock out and inspect; replace cutters on schedule.'}
      ],
      terms:[
        {t:'Flow equalization', d:'Storing wastewater to dampen flow and load peaks so downstream processes receive a steadier rate.'},
        {t:'Equalization basin', d:'The tank used for flow equalization; must be mixed (and usually aerated) to prevent settling and septicity.'},
        {t:'In-line equalization', d:'Arrangement where all flow passes through the equalization basin, damping both flow and concentration.'},
        {t:'Side-line equalization', d:'Arrangement where only flow above a set rate is diverted to the basin; smaller, but damps peaks only.'},
        {t:'Comminutor', d:'In-channel device that shreds solids and leaves them in the flow; it does not remove them.'},
        {t:'Grinder', d:'Device with cutter stacks that macerates solids in a pipe or channel; like a comminutor, it removes nothing.'}
      ],
      tips:[
        'Flow equalization is a named Class I preliminary treatment process — know its purpose: damping flow AND load peaks.',
        'Equalization basins MUST be mixed/aerated or they settle solids and go septic.',
        'Grinders and comminutors SHRED solids and leave them in the flow. Screens REMOVE solids. This distinction is heavily tested.',
        'Shredded rags can re-knit into ropes and bind downstream pumps — a real limitation of comminution.',
        'Equalization improves clarifier performance, chemical dosing stability and disinfection contact time.'
      ]
    }
  ]
},
/* ============================ MODULE 3 ============================ */
{
  id:'m3', n:3, title:'Primary Treatment', duty:'TPE',
  blurb:'Sedimentation and clarification — removing settleable solids by gravity before biological treatment.',
  lessons:[
    {
      id:'m3l1', title:'Sedimentation &amp; Primary Clarifiers',
      need:'Primary clarifiers remove <b>50–70% of TSS</b> and <b>25–40% of BOD</b> by gravity settling. Typical detention time <b>1.5–2.5 hours</b>. Know surface overflow rate (SOR), weir overflow rate, and that sludge is pulled from the bottom while scum is skimmed from the top.',
      learn:[
        'A primary clarifier is a big quiet tank. Slow the water down enough and gravity does the work: heavy particles sink to form <b>primary sludge</b>, light material (grease, plastics) floats to form <b>scum</b>, and clarified water spills over the weirs at the far end.',
        'The critical design parameter is <b>surface overflow rate (SOR)</b> — flow divided by surface area, in m³/m²·day. Think of it as the upward velocity of the water. Any particle that settles faster than the SOR gets captured; anything slower gets carried over the weir. This is why <b>surface area matters more than depth</b> for settling.',
        'Detention time of 1.5–2.5 hours is the sweet spot. Too short and solids do not have time to reach the bottom. Too long and the sludge goes <b>septic</b> — it starts fermenting, releases gas that floats sludge up to the surface, and sends odours and dissolved organics back into the flow.',
        'Removing 50–70% of the solids and 25–40% of the BOD before biological treatment massively reduces the load on the aeration basin, which saves a great deal of energy.'
      ],
      operator:'Pump primary sludge <b>often enough to prevent septicity but thick enough to be worth pumping</b> — that balance is the daily judgement call. Watch the weirs: they must be level, and the flow should be an even sheet all the way around. Rising sludge, gas bubbles at the surface, or a dark septic smell means you are not pulling sludge fast enough. Skim scum regularly; it will build into a mat if ignored.',
      equipment:'Circular clarifier with centre feed well and rotating sludge rake arm; rectangular clarifier with chain-and-flight collector; sludge hopper and sludge pump; scum trough, skimmer arm and scum pump; effluent launder with V-notch weir plates; baffles.',
      trouble:[
        {p:'Solids carrying over the weirs', c:'Hydraulic overload (SOR too high), short-circuiting, sludge blanket too deep, collector not running, or density/temperature currents.'},
        {p:'Sludge rising to the surface in clumps with gas bubbles', c:'Septic sludge — detention too long, sludge pumped too infrequently. Increase sludge withdrawal frequency.'},
        {p:'Primary sludge too thin/watery', c:'Pumping too often or too long, drawing water with the sludge. Reduce pump run time; check blanket depth before pumping.'},
        {p:'Uneven flow over the weirs / short-circuiting', c:'Weirs not level, weir plates fouled, inlet baffle damaged, or wind/density currents. Level and clean the weirs.'},
        {p:'Scum mat building on the surface', c:'Skimmer not operating, scum pump plugged, or skimming frequency too low.'}
      ],
      terms:[
        {t:'Primary clarifier', d:'A settling tank that removes settleable solids and floatables by gravity ahead of secondary treatment.'},
        {t:'Surface Overflow Rate (SOR)', d:'Flow per unit of clarifier surface area (m³/m²·d or gpd/ft²); effectively the upward water velocity.'},
        {t:'Weir overflow rate', d:'Flow per unit length of effluent weir (m³/m·d or gpd/ft).'},
        {t:'Detention time', d:'Average time water spends in a tank = Volume ÷ Flow.'},
        {t:'Primary sludge', d:'Settled solids removed from a primary clarifier; typically 3–7% solids and highly putrescible.'},
        {t:'Scum', d:'Floating material — grease, oils, plastics — skimmed from the surface of a clarifier.'},
        {t:'Short-circuiting', d:'Flow that travels from inlet to outlet faster than the design detention time, bypassing treatment.'},
        {t:'Sludge blanket', d:'The layer of settled, concentrated solids at the bottom of a clarifier.'}
      ],
      tips:[
        'Primary clarifier removal: 50–70% TSS, 25–40% BOD. High-value numbers — memorise them.',
        'SOR = Flow ÷ Surface Area. Surface area, not volume, controls settling.',
        'Detention time = Volume ÷ Flow. Typical primary: 1.5–2.5 hours.',
        'Rising sludge with gas bubbles = septic = pump sludge more often.',
        'Primary treatment is PHYSICAL (gravity). No biology intended.'
      ]
    }
  ]
},
/* ============================ MODULE 4 ============================ */
{
  id:'m4', n:4, title:'Biological Treatment', duty:'TPE',
  blurb:'Where microorganisms eat the dissolved organic matter: activated sludge, fixed film, lagoons and secondary clarification.',
  lessons:[
    {
      id:'m4l1', title:'Biological Treatment Principles &amp; Aeration',
      need:'Microorganisms consume organic matter (BOD) using oxygen, producing CO₂, water and <b>new cells</b>. Aerobic treatment needs <b>DO of 1.5–2.0 mg/L</b> in the aeration basin. Know aerobic / anaerobic / anoxic definitions — this distinction is heavily tested.',
      learn:[
        'Primary treatment removed what would settle. What is left is <b>dissolved</b> organic matter, and gravity cannot touch it. The only practical way to remove it is to feed it to bacteria, then settle the bacteria out.',
        'That is the whole idea of secondary treatment: <b>convert dissolved BOD into settleable bacterial cells</b>, then remove the cells in a clarifier. The bugs eat the pollution and become the sludge you waste.',
        'Three oxygen environments, and the exam will test the distinction:<br>• <b>Aerobic</b> — free dissolved oxygen present. Fastest, cleanest, used in aeration basins.<br>• <b>Anoxic</b> — no free DO, but <b>nitrate</b> present. Bacteria strip oxygen off nitrate, releasing nitrogen gas. This is <b>denitrification</b>.<br>• <b>Anaerobic</b> — no free DO and no nitrate. Produces methane, hydrogen sulphide and organic acids. Used deliberately in digesters; a problem anywhere else.',
        'Target DO in the aeration basin is <b>1.5–2.0 mg/L</b>. Below about 0.5 mg/L, treatment suffers and filamentous bulking organisms take over. Much above 3 mg/L you are simply wasting electricity — aeration is typically <b>50–60% of a plant\'s entire power bill</b>.'
      ],
      operator:'You are farming bacteria. Give them food (BOD), oxygen, the right pH and temperature, enough time, and remove the excess crop (wasting) at the right rate. Most secondary treatment problems trace back to one of those five. DO control is your most powerful and most expensive lever — trim it carefully but never starve the basin.',
      equipment:'Blowers (positive displacement, centrifugal, turbo), fine-bubble diffusers (discs/membranes — most efficient), coarse-bubble diffusers, mechanical surface aerators, brush/rotor aerators, DO probes, air header and drop pipes, air flow control valves.',
      trouble:[
        {p:'DO low across the whole basin', c:'Blower capacity or output down, diffusers fouled/plugged, air leaks, high organic load, or too much MLSS. Check blower amps and discharge pressure.'},
        {p:'Uneven aeration / dead spots in the basin', c:'Broken or plugged diffusers, uneven air distribution, or a header restriction. Inspect the roll pattern on the surface.'},
        {p:'Rising blower discharge pressure over time', c:'Diffuser fouling (biofilm or scale). Clean or acid-wash diffusers.'},
        {p:'DO high, effluent still poor', c:'Aeration is not the limiting factor — check sludge age, F/M, toxicity, pH, and clarifier performance.'},
        {p:'Septic/anaerobic odours in aeration basin', c:'DO has dropped to zero. Increase air immediately; check for a slug load consuming oxygen.'}
      ],
      terms:[
        {t:'Aerobic', d:'Condition where free dissolved oxygen is present.'},
        {t:'Anoxic', d:'No free dissolved oxygen but nitrate present; bacteria use nitrate oxygen (denitrification).'},
        {t:'Anaerobic', d:'No free oxygen and no nitrate; produces methane, H₂S and organic acids.'},
        {t:'Dissolved Oxygen (DO)', d:'Oxygen dissolved in water, mg/L. Aeration basin target 1.5–2.0 mg/L.'},
        {t:'Diffuser', d:'Device that releases air bubbles into the basin. Fine-bubble is more efficient than coarse-bubble.'},
        {t:'Blower', d:'Machine supplying pressurised air to the aeration system.'},
        {t:'Denitrification', d:'Anoxic conversion of nitrate to nitrogen gas by bacteria.'}
      ],
      tips:[
        'Aeration basin DO target 1.5–2.0 mg/L. Very commonly asked.',
        'Anoxic = nitrate present, no free DO. Anaerobic = neither. Do not mix these up.',
        'Fine-bubble diffusers = higher oxygen transfer efficiency than coarse-bubble.',
        'Aeration is the largest single energy consumer at a typical plant.',
        'Secondary treatment converts DISSOLVED BOD into SETTLEABLE cells.'
      ]
    },
    {
      id:'m4l2', title:'Activated Sludge &amp; Process Control',
      need:'Activated sludge = aeration basin + secondary clarifier + <b>return activated sludge (RAS)</b>, with <b>waste activated sludge (WAS)</b> controlling the population. Know MLSS, MLVSS, F/M ratio, <b>MCRT/sludge age</b>, and <b>SVI</b>. Conventional MCRT ≈ 5–15 days; SVI under 100 settles well, over 150 indicates bulking.',
      learn:[
        'The name says it: sludge that has been "activated" by aeration into a dense population of hungry microorganisms. That mixture of wastewater and bugs in the basin is <b>mixed liquor</b>, measured as <b>MLSS</b> (typically 1,500–4,000 mg/L in a conventional plant).',
        'The loop: mixed liquor flows to the secondary clarifier, the bugs settle, and most of them are pumped straight back to the head of the aeration basin as <b>RAS</b>. This is what keeps the population high enough to do the work. Without RAS, your bugs wash out in hours.',
        'Because the bugs multiply every day, you must remove some — <b>WAS</b>. <b>Wasting is your single most important process control decision.</b> Waste too much and you have too few bugs, poor treatment and pin floc. Waste too little and you have an old, over-aged sludge that goes ashy and disperses.',
        'Three numbers steer the process:<br>• <b>F/M ratio</b> (food to microorganism) — how much BOD per unit of bugs. Conventional ≈ 0.2–0.5.<br>• <b>MCRT / sludge age</b> — average days a bug stays in the system. Conventional ≈ 5–15 days; nitrification needs longer (roughly 10+, more in cold weather).<br>• <b>SVI</b> (sludge volume index) — how well the sludge settles. <b>Under 100 = good; over 150 = bulking.</b>',
        'You also read the plant visually. A healthy basin has a <b>chocolate-brown</b> colour and a light crisp foam. <b>White billowy foam</b> means young sludge (too much wasting, low MLSS). <b>Dark brown/black greasy foam</b> means old sludge (too little wasting) or <i>Nocardia</i>.'
      ],
      operator:'Run a settleometer (30-minute settling test) every shift — it is the cheapest, fastest process indicator you own. Combine it with MLSS to get SVI. Make wasting changes <b>small and gradual</b>: change no more than about 10–15% of the wasting rate per day and wait to see the effect, because the biology responds over days, not minutes. Panicked large changes are the most common cause of a crashed plant.',
      equipment:'Aeration basin, secondary clarifier, RAS pumps, WAS pumps, RAS/WAS flow meters, settleometer (1–2 L cone or cylinder), microscope, DO probes, MLSS/MLVSS lab apparatus, sludge blanket detector.',
      trouble:[
        {p:'White billowy foam, low MLSS', c:'Young sludge / over-wasting / high F/M. Reduce wasting to build population.'},
        {p:'Dark brown to black greasy foam', c:'Old sludge / under-wasting, or Nocardia filaments. Increase wasting; consider selective foam removal.'},
        {p:'Sludge bulking, SVI over 150, blanket rising', c:'Filamentous organisms — often caused by low DO, low F/M, nutrient deficiency, or septic influent. Confirm with a microscope. Correct the root cause; chlorinate RAS only as a last resort.'},
        {p:'Pin floc — small dispersed particles, cloudy effluent', c:'Over-oxidised, old sludge. Reduce sludge age (increase wasting).'},
        {p:'Ashy, straggly floc and turbid effluent', c:'Very high sludge age / over-aeration. Increase wasting, review DO.'},
        {p:'Rising sludge in secondary clarifier with gas bubbles', c:'Denitrification in the clarifier — nitrogen gas floating sludge. Increase RAS rate to reduce blanket detention, or reduce sludge age/aeration.'},
        {p:'Sudden loss of treatment, no floc formation', c:'Toxic/industrial slug load. Check influent pH and for unusual discharges; may require reseeding.'}
      ],
      terms:[
        {t:'Activated sludge', d:'Biological treatment using an aerated suspension of microorganisms that is settled and returned.'},
        {t:'Mixed liquor', d:'The combination of wastewater and activated sludge microorganisms in the aeration basin.'},
        {t:'MLSS', d:'Mixed Liquor Suspended Solids — total suspended solids in the aeration basin, mg/L. Typically 1,500–4,000.'},
        {t:'MLVSS', d:'Mixed Liquor Volatile Suspended Solids — the organic (living biomass) portion of MLSS.'},
        {t:'RAS', d:'Return Activated Sludge — settled sludge pumped from the secondary clarifier back to the aeration basin.'},
        {t:'WAS', d:'Waste Activated Sludge — sludge removed from the system to control population and sludge age.'},
        {t:'F/M ratio', d:'Food-to-Microorganism ratio = BOD load ÷ MLVSS under aeration. Conventional 0.2–0.5.'},
        {t:'MCRT', d:'Mean Cell Residence Time (sludge age) — average days a microorganism stays in the system. Conventional 5–15 days.'},
        {t:'SVI', d:'Sludge Volume Index = (30-min settled volume mL/L × 1000) ÷ MLSS mg/L. Under 100 good, over 150 bulking.'},
        {t:'Bulking', d:'Poorly settling sludge, usually caused by filamentous organisms; produces high SVI and blanket carryover.'},
        {t:'Pin floc', d:'Very small, dispersed floc particles that will not settle, caused by over-oxidised (old) sludge.'},
        {t:'Settleometer test', d:'A 30-minute settling test in a 1–2 L container used to judge settling and calculate SVI.'}
      ],
      tips:[
        'SVI under 100 = good settling. SVI over 150 = bulking. Guaranteed exam territory.',
        'WASTING is the primary control over sludge age and MLSS. RAS controls the clarifier blanket.',
        'White foam = young sludge (waste less). Dark greasy foam = old sludge (waste more).',
        'Rising sludge with gas bubbles in the secondary clarifier = denitrification, not septicity.',
        'Filamentous bulking most often traces to LOW DO. Check DO first.',
        'Make wasting changes gradually — roughly 10–15% at a time.'
      ]
    },
    {
      id:'m4l3', title:'Fixed Film: Trickling Filters &amp; RBCs',
      need:'Fixed-film processes grow biology on <b>media</b> instead of in suspension. Trickling filters distribute wastewater over rock or plastic media; <b>RBCs</b> rotate discs about <b>40% submerged</b> at roughly <b>1.5 rpm</b>. Both need <b>secondary clarification</b> after them, and both use <b>recirculation</b> to control loading and odour.',
      learn:[
        'A trickling filter is not really a filter — it does not strain anything. It is a bed of rock or plastic media with a <b>biofilm</b> (zoogleal slime) growing on it. Wastewater is sprayed over the top by a rotating distributor arm, trickles down through the media, and the biofilm eats the organics while air moves naturally through the voids.',
        'As the biofilm thickens, the layer next to the media is starved of oxygen and food; it loses its grip and the film <b>sloughs</b> off in sheets. That sloughed material is why every fixed-film process needs a clarifier downstream — the solids must be settled out.',
        '<b>Recirculation</b> (returning some effluent to the filter inlet) dilutes strong influent, keeps the media continuously wet, keeps the distributor turning at low flow, and helps control odour and filter flies. It is the main operational lever on a trickling filter.',
        '<b>RBCs (rotating biological contactors)</b> are large plastic discs on a horizontal shaft, roughly <b>40% submerged</b>, turning slowly at about <b>1.5 rpm</b>. As each disc section rotates out of the wastewater it picks up oxygen from the air, then rotates back down to deliver it to the biofilm. Simple, energy-efficient, and very sensitive to shaft/bearing failure and to uneven loading on the first stage.'
      ],
      operator:'On trickling filters, watch that the distributor arm turns freely and evenly and that all orifices are clear — a stopped arm quickly kills the filter. Watch for <b>ponding</b> (water standing on the surface), which means the media voids are plugged with excess biomass. Filter flies (<i>Psychoda</i>) breed in a filter that is too dry at the edges; increase recirculation or flush. On RBCs, listen and look for uneven or stopped rotation, and check for excessive first-stage biomass, which can overload the shaft to the point of structural failure.',
      equipment:'Rock or plastic media bed, rotating distributor arm with orifices, underdrain system with ventilation, recirculation pumps; RBC discs on a horizontal shaft, drive motor or air drive, covers, bearings, and the secondary clarifier that follows either process.',
      trouble:[
        {p:'Ponding on the trickling filter surface', c:'Media voids plugged with excess biofilm or debris. Increase recirculation to flush, rake/flush the surface, or dose-flood. Check for undersized media or excessive organic loading.'},
        {p:'Distributor arm stopped or slow', c:'Plugged orifices, bearing failure, insufficient flow, or debris. Clear orifices, check the seal and bearing, increase recirculation flow.'},
        {p:'Filter flies (Psychoda)', c:'Dry areas on the media surface. Increase recirculation for continuous wetting, flush the walls, or use approved larvicide.'},
        {p:'Strong odours from the filter', c:'Anaerobic conditions from organic overload or plugged underdrain ventilation. Increase recirculation; clear the underdrains.'},
        {p:'Heavy uncontrolled sloughing, high effluent solids', c:'Normal seasonal sloughing, or shock load / temperature change. Ensure the clarifier can handle the solids surge.'},
        {p:'RBC shaft slowing, stopping or bowing', c:'Excessive first-stage biomass weight, bearing failure, or drive problem. Reduce loading to the first stage, consider load balancing or supplemental air.'}
      ],
      terms:[
        {t:'Fixed film', d:'Biological treatment where microorganisms grow attached to a surface rather than suspended.'},
        {t:'Trickling filter', d:'A bed of media over which wastewater is distributed so attached biofilm removes organics.'},
        {t:'Biofilm / zoogleal slime', d:'The attached microbial layer that grows on fixed-film media.'},
        {t:'Sloughing', d:'Natural detachment of excess biofilm from media, which must be removed by a downstream clarifier.'},
        {t:'Recirculation', d:'Returning effluent to the head of the process to dilute load, wet the media and control odour/flies.'},
        {t:'Ponding', d:'Standing water on a trickling filter surface caused by plugged media voids.'},
        {t:'RBC', d:'Rotating Biological Contactor — discs on a rotating shaft, ~40% submerged, ~1.5 rpm, that carry biofilm through wastewater and air.'}
      ],
      tips:[
        'A trickling filter treats biologically — it does NOT filter/strain. Classic exam trap.',
        'RBC: about 40% submerged, about 1.5 rpm. Memorise both numbers.',
        'Ponding = plugged media = increase recirculation / flush.',
        'Filter flies = surface too dry = increase recirculation.',
        'Fixed-film processes ALWAYS need a clarifier after them to catch sloughed solids.'
      ]
    },
    {
      id:'m4l4', title:'Lagoons',
      need:'Lagoons are large shallow basins using natural or assisted biology with <b>long detention (20–90+ days)</b>. Know the types: <b>facultative</b> (aerobic top, anaerobic bottom — the most common), <b>aerated</b> (mechanical/diffused air), <b>anaerobic</b> (deep, high strength), <b>polishing/maturation</b>. Algae raise effluent TSS and drive daily pH and DO swings.',
      learn:[
        'A lagoon is the low-tech, low-energy option, ideal for small communities with land available. The trade-off is a very large footprint and much less operator control.',
        'A <b>facultative lagoon</b> — the most common type — stratifies naturally. The top layer is <b>aerobic</b>, oxygenated by wind and by algae doing photosynthesis. The bottom sludge layer is <b>anaerobic</b>. The middle is <b>facultative</b> (either/or). This is the classic exam description.',
        'The algae/bacteria partnership is elegant: algae produce oxygen in daylight which bacteria use to break down BOD; the bacteria produce carbon dioxide which the algae use. The catch is that algae are suspended solids, so <b>lagoon effluent often fails TSS limits because of algae</b>, not because of poor treatment.',
        'Because photosynthesis stops at night, <b>DO and pH swing daily</b> — DO peaks mid-afternoon and bottoms before dawn; pH rises during the day as algae strip out CO₂. If you sample at 3 p.m. every day, you are seeing the daily maximum, not the average.'
      ],
      operator:'Control what you can: keep the dikes mowed and free of burrowing animals and woody growth, control weeds and mosquitoes, watch freeboard, and move flow between cells to manage loading. Take samples at consistent times of day so your data is comparable. Watch for short-circuiting between inlet and outlet, and for ice cover in winter which stops reaeration and drops treatment sharply.',
      equipment:'Earthen cells with clay or synthetic liners, dikes, inlet/outlet structures with adjustable draw-off levels, transfer piping and valves, surface or diffused aerators in aerated lagoons, baffles/curtains, freeboard markers.',
      trouble:[
        {p:'High effluent TSS but low BOD', c:'Algae carryover. Draw from a lower depth, add baffles, consider rock filter or polishing; sample timing matters.'},
        {p:'Odours, especially in spring', c:'Spring turnover releasing anaerobic bottom material, or organic overload. Increase aeration/recirculation if available; be ready for public complaints.'},
        {p:'Short-circuiting from inlet to outlet', c:'Poor inlet/outlet placement, wind effects, or missing baffles. Add baffles/curtains; use alternate cell routing.'},
        {p:'DO reads very high in afternoon, near zero at dawn', c:'Normal algal diurnal cycle. Standardise sampling time; do not over-react to a single reading.'},
        {p:'Dike erosion or seepage', c:'Wave action, burrowing animals, or liner failure. Repair riprap, control vegetation and animals, investigate seepage.'}
      ],
      terms:[
        {t:'Facultative lagoon', d:'Lagoon with an aerobic upper layer and anaerobic lower layer; the most common lagoon type.'},
        {t:'Aerated lagoon', d:'Lagoon using mechanical or diffused aeration to supply oxygen, allowing shorter detention.'},
        {t:'Polishing/maturation pond', d:'A final lagoon cell providing additional treatment and pathogen die-off.'},
        {t:'Freeboard', d:'Vertical distance between the water surface and the top of the dike.'},
        {t:'Turnover', d:'Seasonal mixing of lagoon layers (typically spring/fall) that can release odours and bottom solids.'},
        {t:'Dike / berm', d:'The earthen embankment forming the lagoon walls.'}
      ],
      tips:[
        'Facultative lagoon = aerobic top, anaerobic bottom. Nearly always asked this way.',
        'Algae are the usual cause of high TSS in lagoon effluent.',
        'Lagoon DO and pH peak in the AFTERNOON due to photosynthesis.',
        'Lagoons = long detention (weeks to months), low energy, large land area.'
      ]
    },
    {
      id:'m4l5', title:'Secondary Clarification',
      need:'The secondary clarifier separates biological solids from treated water and <b>thickens sludge for return</b>. It is where activated sludge succeeds or fails. Know sludge blanket control, RAS rate, SOR, solids loading rate, and the four classic failure modes: <b>bulking, rising sludge, denitrification, pin floc</b>.',
      learn:[
        'A secondary clarifier has two jobs at once, and they compete. It must <b>clarify</b> (produce clear effluent) and <b>thicken</b> (produce concentrated RAS). Push it too hard on either and both suffer.',
        'Unlike a primary clarifier, the solids here are light, biological and fluffy. They settle as a <b>blanket</b> rather than as individual particles, so the depth of that blanket is a key operating measurement — you take it with a sludge judge or blanket detector every shift.',
        '<b>RAS rate controls the blanket.</b> Return too little and the blanket climbs until solids spill over the weir. Return too much and you pull thin sludge, waste pumping energy, and reduce detention. RAS is typically 25–75% of influent flow at a conventional plant.',
        'The four failure modes to recognise instantly:<br>• <b>Bulking</b> — filamentous sludge will not compact; SVI over 150; blanket rises.<br>• <b>Rising sludge</b> — well-settled sludge floats up in chunks with gas bubbles = <b>denitrification</b> in the blanket.<br>• <b>Pin floc</b> — tiny dispersed particles, cloudy effluent = sludge too old.<br>• <b>Straggler/ashy floc</b> — light, buoyant floc from over-oxidation.'
      ],
      operator:'Take a blanket depth reading every shift and trend it — a rising trend gives you hours of warning before solids go over the weir. Keep weirs level and clean. Watch the surface: a healthy secondary clarifier is nearly clear with a crisp edge at the sludge line and very little floating material. If you see gas bubbles lifting mats of sludge, think denitrification and increase RAS.',
      equipment:'Circular or rectangular clarifier, centre feed well or inlet baffle, sludge rake or suction header, RAS pumps, scum skimmer and beach, effluent launders with V-notch weirs, sludge judge / sludge blanket detector, Stamford or density baffles.',
      trouble:[
        {p:'Sludge blanket rising toward the weirs', c:'RAS rate too low, hydraulic overload, bulking sludge, or collector failure. Increase RAS first; investigate bulking.'},
        {p:'Chunks of sludge floating with gas bubbles', c:'Denitrification in the blanket. Increase RAS to shorten blanket detention; reduce aeration/sludge age to limit nitrate.'},
        {p:'Cloudy effluent, tiny particles that will not settle', c:'Pin floc from old sludge. Increase wasting to reduce sludge age.'},
        {p:'Solids washout during peak flow', c:'Hydraulic overload — SOR too high. Equalise flow if possible, bring another clarifier online, reduce MLSS temporarily.'},
        {p:'RAS getting thin/watery', c:'Pumping too fast for the blanket available, or blanket too shallow. Reduce RAS rate.'},
        {p:'Effluent good but RAS very thick and blanket deep', c:'RAS rate too low. Increase RAS before the blanket reaches the weir.'}
      ],
      terms:[
        {t:'Secondary clarifier', d:'Settling tank following biological treatment; separates biomass from treated water and thickens it for return.'},
        {t:'Sludge blanket', d:'The settled solids layer in the clarifier; its depth is a key control measurement.'},
        {t:'Solids loading rate', d:'Mass of solids applied per unit clarifier surface area per day (kg/m²·d).'},
        {t:'Rising sludge', d:'Settled sludge floating to the surface, usually from denitrification producing nitrogen gas bubbles.'},
        {t:'Sludge judge', d:'A clear sampling tube used to measure sludge blanket depth and profile.'},
        {t:'Straggler floc', d:'Light, buoyant floc particles carried over the weir, associated with over-oxidised sludge.'}
      ],
      tips:[
        'RAS rate controls the sludge BLANKET. Wasting controls the sludge AGE/MLSS. Keep those roles straight.',
        'Rising sludge WITH gas bubbles = denitrification. Increase RAS.',
        'Bulking = SVI over 150 = filaments = check DO first.',
        'A secondary clarifier must clarify AND thicken — the two goals compete.',
        'Blanket depth trending upward is your earliest warning of solids loss.'
      ]
    }
  ]
},
/* ============================ MODULE 5 ============================ */
{
  id:'m5', n:5, title:'Chemical Treatment', duty:'TPE',
  blurb:'Coagulation, flocculation, pH adjustment, jar testing and chemical safety — the module that maps directly onto your own plant.',
  lessons:[
    {
      id:'m5l1', title:'Coagulation &amp; Flocculation',
      need:'<b>Coagulation</b> neutralises the negative charge on colloidal particles using a metal salt or cationic polymer — it needs <b>rapid mix</b> (seconds). <b>Flocculation</b> gently brings the destabilised particles together into settleable floc — it needs <b>slow, gentle mixing</b> (15–45 min). Coagulant goes in FIRST. Common coagulants: alum, ferric chloride, PACl.',
      learn:[
        'Very small particles (colloids) carry a <b>negative surface charge</b>. Like charges repel, so they push each other apart and stay suspended forever — that is why fine turbidity will not settle no matter how long you wait.',
        '<b>Coagulation</b> fixes the charge problem. You add a positively charged chemical — alum (aluminum sulphate), ferric chloride, or PACl (polyaluminum chloride) — which neutralises the negative charge. Because this is a charge reaction it happens in <b>seconds</b>, so it demands violent <b>rapid mixing</b> to distribute the chemical before it is used up locally.',
        '<b>Flocculation</b> is the opposite. Now that the particles no longer repel, you need them to bump into each other and stick, building up into large visible floc. That takes <b>gentle</b>, prolonged mixing — typically 15–45 minutes. Mix too hard here and you tear the floc apart, which is the single most common flocculation mistake.',
        '<b>pH is critical.</b> Every coagulant has an effective pH window. Alum works around 5.5–7.5; ferric a bit wider and lower; <b>PACl generally performs well around 6.5–7.5 and tolerates a wider range</b>. Outside the window, the coagulant simply does not work no matter how much you add. Metal-salt coagulants also <b>consume alkalinity and drive pH down</b>.'
      ],
      industrial:'Your own train — oily wastewater lagoon → frac tank → coagulation → flocculation → outdoor weir/settling tanks → indoor weir/settling tanks → bag filter → carbon filter — is a <b>physical-chemical industrial</b> process, not a municipal one. The difference matters for the exam. A municipal plant relies on <b>biology</b> (activated sludge, fixed film, lagoons) to remove dissolved BOD, and uses coagulation only occasionally, usually for phosphorus removal or tertiary polishing. Your system has <b>no biological stage at all</b> — it removes oil and suspended solids by charge neutralisation, floc growth, gravity settling and filtration. Two consequences: (1) your coagulant/flocculant doses are far higher than a municipal plant would ever use, because you are treating the whole load chemically; (2) concepts like MLSS, F/M, SVI and sludge age <b>do not apply to your plant</b> — but they are heavily examined, so you must learn them from the municipal material rather than from your day job. Where your experience genuinely transfers is pH control, jar testing, coagulant and polymer behaviour, settling, and pump and chemical-feed operation.',
      operator:'Order of addition matters: <b>pH adjustment (if needed) → coagulant → rapid mix → polymer/flocculant → slow mix → settle.</b> Adding polymer before the coagulant wastes it. Dose by jar test, not by guess, and re-test whenever the influent changes. Watch the floc: good floc is visible, forms within a few minutes, and settles leaving clear water between the particles.',
      equipment:'Chemical storage tanks/totes, metering pumps (diaphragm/solenoid — note that viscous polymer generally needs a pump rated for it), rapid-mix basin with high-speed mixer or in-line static mixer, flocculation basin with slow paddle/vertical mixers, polymer make-down/aging system, calibration column, jar test apparatus.',
      trouble:[
        {p:'Floc will not form; water stays hazy', c:'pH outside the coagulant\'s effective range (check FIRST), underdosed coagulant, coagulant added after polymer, or inadequate rapid mixing.'},
        {p:'Floc forms then breaks apart before settling', c:'Flocculation mixing too vigorous, or too much shear in pumps/piping after flocculation. Slow the flocculator.'},
        {p:'Small, weak, slow-settling pin floc', c:'Underdosed polymer, insufficient flocculation time, or too much shear. Jar test to re-optimise.'},
        {p:'Excessive foam in the tank', c:'Polymer overdose is a common cause — reduce dose. Also check for surfactants in the influent and for a polymer pump running far above its calibrated rate.'},
        {p:'Effluent worse after increasing coagulant dose', c:'Overdose can re-stabilise particles by reversing the surface charge. Back the dose off and re-jar test.'},
        {p:'pH dropping after coagulant addition', c:'Normal — metal salts consume alkalinity. Add caustic soda, lime or soda ash to hold pH in range; monitor alkalinity.'}
      ],
      terms:[
        {t:'Coagulation', d:'Chemical destabilisation of colloidal particles by neutralising their surface charge. Requires rapid mixing.'},
        {t:'Flocculation', d:'Gentle mixing that brings destabilised particles together into larger settleable floc.'},
        {t:'Colloid', d:'A very small suspended particle held in suspension by its electrical surface charge; will not settle unaided.'},
        {t:'Coagulant', d:'Chemical that neutralises particle charge — alum, ferric chloride, PACl, cationic polymer.'},
        {t:'Polymer / flocculant', d:'Long-chain organic chemical that bridges destabilised particles into larger floc. Anionic, cationic or nonionic.'},
        {t:'Alum', d:'Aluminum sulphate — a common coagulant. Consumes alkalinity and lowers pH.'},
        {t:'PACl', d:'Polyaluminum chloride — a coagulant that generally works over a wider pH range and consumes less alkalinity than alum.'},
        {t:'Rapid mix', d:'High-intensity mixing (seconds) to disperse coagulant throughout the water.'},
        {t:'Jar test', d:'Bench-scale test that simulates coagulation/flocculation/settling to find the optimum chemical dose.'}
      ],
      tips:[
        'Coagulation = charge neutralisation = RAPID mix. Flocculation = particle growth = SLOW mix. This pair is asked constantly.',
        'Coagulant goes in BEFORE polymer.',
        'Metal-salt coagulants CONSUME alkalinity and LOWER pH.',
        'If floc will not form, check pH before you touch the dose.',
        'Overdosing coagulant can re-stabilise particles and make the water worse.'
      ]
    },
    {
      id:'m5l2', title:'Jar Testing &amp; Chemical Dosing',
      need:'The jar test finds the <b>optimum dose</b> by simulating the full process at bench scale: rapid mix → slow mix → settle → measure. Know the dose formula: <b>kg/day = mg/L × ML/day</b> (metric) or <b>lbs/day = mg/L × MGD × 8.34</b> (US). Be able to work it in both directions.',
      learn:[
        'A jar test is a miniature version of your plant on a bench. Six jars, same water, different doses. You rapid mix them all together (say 1 minute at 100+ rpm), slow mix (say 20 minutes at 25–30 rpm), then stop and let them settle (say 30 minutes) and compare.',
        'What you are looking for: which jar formed floc <b>fastest</b>, produced the <b>largest, densest floc</b>, and left the <b>clearest supernatant</b>. Measure the settled water\'s turbidity to make the comparison objective instead of arguing about which jar "looks" best.',
        'The dose you find is in <b>mg/L</b>. To turn that into how much chemical to actually pump, use the pounds/kilograms formula. In metric: <b>kg/day = dose (mg/L) × flow (ML/day)</b>. In US units: <b>lbs/day = dose (mg/L) × flow (MGD) × 8.34</b>. The 8.34 is pounds per gallon of water.',
        'If your chemical is a <b>solution</b> rather than pure product, you must correct for strength: divide by the decimal purity. A 50% solution needs twice the mass of solution to deliver the same mass of active chemical.'
      ],
      operator:'Re-run the jar test whenever influent quality changes — after rain, after an industrial discharge, seasonally. Keep a log of jar test results against influent turbidity so you build a dosing curve for your plant. And <b>calibrate your metering pumps</b>: a pump dial setting is not a dose. Use a calibration column and time the drawdown to know what the pump actually delivers.',
      equipment:'Six-paddle gang stirrer with variable speed and timer, 1–2 L square or round jars, graduated cylinders, pipettes, syringes for small doses, turbidimeter, pH meter, stock chemical solutions, metering pumps with calibration columns.',
      trouble:[
        {p:'Jar test result does not reproduce in the full-scale plant', c:'Mixing energy differs, actual pump output differs from assumed (calibrate!), chemical age/strength, or the plant has short-circuiting the jar cannot show.'},
        {p:'All jars look the same', c:'Dose range too narrow — widen the spread. Or pH is wrong for the coagulant, so no dose works.'},
        {p:'Metering pump not delivering expected dose', c:'Air lock / loss of prime, plugged foot valve or injection point, worn diaphragm, back-pressure problem, or check valves fouled. Calibrate to confirm actual output.'},
        {p:'Chemical use much higher than calculated', c:'Pump out of calibration, leak in the line, wrong solution strength assumed, or overdosing to mask a pH problem.'}
      ],
      terms:[
        {t:'Jar test', d:'Bench-scale simulation of coagulation, flocculation and settling used to determine optimum chemical dose.'},
        {t:'Supernatant', d:'The clarified liquid above settled solids.'},
        {t:'Dose', d:'Concentration of chemical added, expressed in mg/L.'},
        {t:'8.34', d:'Pounds per gallon of water — the conversion constant in the US lbs/day dosing formula.'},
        {t:'Calibration column', d:'A graduated tube used to measure the actual output of a chemical metering pump by timed drawdown.'},
        {t:'Solution strength', d:'The percentage of active chemical in a solution; used to correct dose calculations.'}
      ],
      tips:[
        'Metric: kg/day = mg/L × ML/day. US: lbs/day = mg/L × MGD × 8.34. Know both.',
        'For a solution less than 100% strength, DIVIDE by the decimal purity.',
        'Best jar = fastest floc, biggest floc, clearest supernatant (confirm with turbidity).',
        'A pump setting is not a dose — pumps must be calibrated.'
      ]
    },
    {
      id:'m5l3', title:'pH Adjustment, Alkalinity &amp; Chemical Safety',
      need:'<b>Alkalinity buffers pH.</b> Raise pH with lime, caustic soda (NaOH) or soda ash; lower it with acid or CO₂. Nitrification destroys about <b>7.1 mg/L alkalinity per mg/L of ammonia</b> oxidised. For safety know: <b>SDS, WHMIS 2015 labels/pictograms, PPE, never mix acid into water incorrectly (always Add Acid to water), and never mix chlorine with acid or ammonia.</b>',
      learn:[
        '<b>Alkalinity is not the same as pH.</b> pH tells you where you are right now; alkalinity tells you how hard it is to move you. Water with high alkalinity resists pH change — it has a large buffer. Water with low alkalinity will swing wildly from a small acid or base addition. This is why a plant with low alkalinity is so hard to control.',
        'To <b>raise</b> pH: hydrated lime (calcium hydroxide), caustic soda (sodium hydroxide, NaOH), or soda ash (sodium carbonate). Lime is cheap but must be slurried and it scales and plugs lines constantly. Caustic soda is a liquid, does not plug, acts fast — and is very aggressive on skin and eyes. To <b>lower</b> pH: sulphuric acid or carbon dioxide.',
        'Biological processes eat alkalinity. <b>Nitrification consumes roughly 7.1 mg/L of alkalinity for every 1 mg/L of ammonia-nitrogen oxidised</b>, and metal-salt coagulants consume it too. A nitrifying plant with soft, low-alkalinity water can crash its own pH — you must monitor alkalinity, not just pH.',
        '<b>Chemical safety essentials:</b> every chemical has a <b>Safety Data Sheet (SDS)</b> that must be accessible. WHMIS 2015 uses standard <b>pictograms</b> and requires supplier and workplace labels. When diluting acid, <b>always add acid to water</b>, never water to acid, because the reaction is violently exothermic. <b>Never mix chlorine (hypochlorite) with acid</b> — it releases chlorine gas. <b>Never mix chlorine with ammonia</b> — it forms chloramine vapours.'
      ],
      industrial:'On your system, pH control is the master variable — PACl needs roughly 6.5–7.5 to work, and running at pH 6 is the single most common reason floc will not form. That is a genuine industrial-operations insight and it maps directly onto the exam\'s coagulation/pH material. Be careful with one difference though: on a <b>municipal</b> plant the pH story the exam wants is usually about <b>nitrification destroying alkalinity</b> (about 7.1 mg/L alkalinity per mg/L of ammonia oxidised) and the resulting pH crash in the aeration basin. Your plant has no nitrification, so that mechanism will not appear in your daily work — learn it from the municipal material.',
      operator:'Test alkalinity regularly if you nitrify or use metal coagulants — a falling alkalinity trend predicts a pH crash days before it happens. When you change a pH chemical, start low: caustic soda is far more potent per litre than lime slurry, so a setting that was right for lime will badly overshoot on caustic. Always wear the PPE listed on the SDS — for caustic and acid that means goggles AND face shield, gloves, and an apron, plus a working eyewash within reach.',
      equipment:'Chemical storage tanks with secondary containment, day tanks, mixers, metering pumps, pH probes and controllers, alkalinity titration kit, lime slaker/slurry system with mixer, eyewash and safety shower, spill kit, SDS binder/station, ventilation.',
      trouble:[
        {p:'pH will not hold steady; swings with small chemical changes', c:'Low alkalinity — no buffer. Add alkalinity (lime/soda ash/bicarbonate) rather than chasing pH.'},
        {p:'Lime line or injection point keeps plugging', c:'Lime slurry scaling/settling. Keep the slurry mixed, flush lines regularly, use larger-bore hose, or switch to a liquid such as caustic soda.'},
        {p:'pH overshoots badly after switching chemicals', c:'New chemical is more concentrated. Recalculate the dose, start the pump low and increase gradually while watching pH.'},
        {p:'Aeration basin pH drifting down over weeks', c:'Nitrification consuming alkalinity. Test alkalinity; supplement it.'},
        {p:'Chlorine odour / irritation near chemical storage', c:'Possible incompatible chemical contact or a leak. Evacuate, ventilate, do not enter without proper respiratory protection, follow emergency procedure.'}
      ],
      terms:[
        {t:'Alkalinity', d:'The capacity of water to neutralise acid — its pH buffer. Reported as mg/L as CaCO₃.'},
        {t:'Buffer', d:'A substance that resists change in pH.'},
        {t:'Caustic soda', d:'Sodium hydroxide (NaOH) — a strong liquid base used to raise pH. Highly corrosive.'},
        {t:'Hydrated lime', d:'Calcium hydroxide, Ca(OH)₂ — a base used to raise pH; applied as a slurry and prone to scaling.'},
        {t:'Soda ash', d:'Sodium carbonate — used to raise pH and add alkalinity.'},
        {t:'SDS', d:'Safety Data Sheet — standardised document of a chemical\'s hazards, handling, PPE and first aid.'},
        {t:'WHMIS 2015', d:'Canada\'s Workplace Hazardous Materials Information System, aligned with GHS — pictograms, labels and SDSs.'},
        {t:'Nitrification alkalinity demand', d:'Approximately 7.1 mg/L alkalinity consumed per 1 mg/L ammonia-nitrogen oxidised.'}
      ],
      tips:[
        'Alkalinity ≠ pH. Alkalinity is the BUFFER; pH is the current value.',
        'Nitrification destroys about 7.1 mg alkalinity per mg of ammonia oxidised.',
        'ALWAYS add acid to water, never water to acid.',
        'NEVER mix hypochlorite with acid (chlorine gas) or with ammonia (chloramines).',
        'Metal coagulants and nitrification BOTH consume alkalinity.'
      ]
    }
  ]
},
/* ============================ MODULE 6 ============================ */
{
  id:'m6', n:6, title:'Filtration &amp; Disinfection', duty:'TPE',
  blurb:'Final polishing and pathogen kill — filters, chlorination, dechlorination and UV.',
  lessons:[
    {
      id:'m6l1', title:'Filtration',
      need:'Filtration is a <b>polishing</b> step removing remaining suspended solids after secondary treatment. Know granular media (sand/anthracite/multimedia), how <b>backwashing</b> works, and that <b>rising headloss</b> or <b>breakthrough</b> triggers a backwash. In industrial systems, know <b>bag/cartridge filters</b> and <b>activated carbon</b>.',
      learn:[
        'A filter is the last physical barrier. Water passes down through a bed of granular media; particles are removed by straining at the surface and by attaching to the media grains deeper in the bed.',
        '<b>Multimedia beds are layered by size and density</b> — coarse, light anthracite on top; finer, denser sand below; sometimes garnet at the bottom. That order lets the coarse top layer catch large particles without plugging instantly, so the whole depth of the bed does useful work.',
        'As the bed loads with solids, <b>headloss rises</b>. When it hits the set limit — or when solids start passing through, called <b>breakthrough</b>, or when a run-time limit is reached — you <b>backwash</b>: reverse clean water up through the bed to fluidise it, scour the media, and carry the trapped solids to waste. Backwash water goes back to the head of the plant.',
        '<b>Activated carbon</b> is different — it works by <b>adsorption</b>, not straining. Organic molecules stick to the enormous internal surface area of the carbon. It is excellent for dissolved organics, taste, odour and residual hydrocarbons, but it eventually <b>exhausts</b> and must be replaced or regenerated. It does not remove suspended solids well — always put a particle filter ahead of it, or you blind the carbon.'
      ],
      industrial:'Your bag filter and carbon filter are the tertiary end of an <b>industrial</b> train. Sequence matters and your plant has it right: bag filtration removes suspended particles <b>before</b> the carbon, so the carbon is spent adsorbing dissolved hydrocarbons rather than being blinded by silt. On the exam, note that a municipal plant would normally use <b>granular media filtration</b> (sand/anthracite, backwashed) rather than disposable bag or cartridge filters — bags are practical at industrial flows but would be uneconomic at municipal scale. Also note carbon is an <b>adsorption</b> process with a finite capacity that exhausts, whereas a backwashed sand filter is regenerated in place every run. Expect exam questions about granular media, backwash triggers and mudballs, not about bag filters.',
      operator:'Trend headloss and effluent turbidity on every filter run. A run that suddenly gets much shorter means either the upstream process is passing more solids or the media is fouled/mudballed. Do not skip the backwash rate: too low and the bed does not fluidise (solids stay behind and form mudballs), too high and you wash media out of the filter. In an industrial oily-water train, always sequence <b>particle removal before carbon</b> so the carbon is spent on dissolved organics, not silt.',
      equipment:'Granular media filters (gravity or pressure), underdrain and support gravel, backwash pumps and blowers, surface wash/air scour, rate-of-flow controller, headloss gauges, turbidimeters; bag filter housings and bags (rated in micron), cartridge filters, activated carbon vessels (GAC), differential pressure gauges.',
      trouble:[
        {p:'Filter run times getting shorter', c:'Higher solids loading from upstream, or media fouling/mudballing. Check upstream clarifier performance and inspect the media.'},
        {p:'Turbidity breakthrough near end of run', c:'Bed loaded past capacity, flow rate too high, or inadequate coagulation upstream. Backwash sooner; review chemical dose.'},
        {p:'Mudballs / cracks in the media bed', c:'Inadequate backwash — rate too low or duration too short, or no air scour. Increase backwash effectiveness; may need media cleaning/replacement.'},
        {p:'Media loss into the backwash trough', c:'Backwash rate too high, or underdrain/support gravel disturbed. Reduce rate and inspect.'},
        {p:'Bag/cartridge filter plugging very fast', c:'Upstream solids too high — carryover from settling, or floc breaking through. Fix the settling step; consider a coarser pre-filter stage.'},
        {p:'Carbon filter no longer improving water quality', c:'Carbon exhausted (adsorption sites full) — replace or regenerate. Also check for channelling or blinding by suspended solids.'}
      ],
      terms:[
        {t:'Filtration', d:'Physical removal of suspended particles by passing water through a porous medium.'},
        {t:'Backwash', d:'Reversing clean water up through a filter bed to fluidise the media and remove trapped solids.'},
        {t:'Headloss', d:'Pressure/energy drop across the filter; rises as the bed loads with solids.'},
        {t:'Breakthrough', d:'Passage of solids through the filter into the effluent, signalling the bed is loaded.'},
        {t:'Mudball', d:'A compacted mass of media and solids formed by inadequate backwashing.'},
        {t:'Adsorption', d:'Adhesion of molecules to a surface — the mechanism of activated carbon.'},
        {t:'GAC', d:'Granular Activated Carbon — carbon media used to adsorb dissolved organics, taste and odour.'},
        {t:'Bag filter', d:'A replaceable fabric bag in a housing that strains particles above a rated micron size.'}
      ],
      tips:[
        'Filtration is POLISHING — it follows secondary treatment, it does not replace it.',
        'Backwash triggers: high headloss, turbidity breakthrough, or maximum run time.',
        'Multimedia beds are layered COARSE on top, FINE below.',
        'Carbon works by ADSORPTION and eventually exhausts. Put particle filtration ahead of it.',
        'Backwash water returns to the head of the plant.'
      ]
    },
    {
      id:'m6l2', title:'Disinfection: Chlorination, Dechlorination &amp; UV',
      need:'Disinfection <b>kills pathogens</b> — it is not sterilisation. Chlorine effectiveness depends on <b>concentration × contact time (CT)</b>, pH (lower pH is more effective — <b>HOCl is the stronger form</b>), temperature and turbidity. Know <b>breakpoint chlorination</b>, that <b>free chlorine = HOCl + OCl⁻</b>, that <b>combined chlorine = chloramines</b>, dechlorination with sulphur compounds, and that <b>UV needs good transmittance and clean sleeves</b>.',
      learn:[
        'Disinfection is the last step before discharge and the one most directly tied to public health. Note it <b>reduces pathogens to a safe level</b>; it does not sterilise.',
        '<b>Chlorine chemistry:</b> when chlorine enters water it forms <b>hypochlorous acid (HOCl)</b> and <b>hypochlorite ion (OCl⁻)</b>. Together these are <b>free available chlorine</b>. HOCl is far the more effective killer — and the balance is pH-driven. <b>At lower pH more HOCl exists, so chlorine disinfects better at lower pH.</b> Above about pH 8 effectiveness drops off sharply.',
        'Chlorine also reacts with ammonia to form <b>chloramines (combined chlorine)</b>, which are much weaker disinfectants. <b>Breakpoint chlorination</b> is the process of adding enough chlorine to satisfy all demand and destroy the chloramines — past the "breakpoint", any further chlorine stays as free chlorine. The classic curve: residual rises, falls to a minimum (the breakpoint), then rises again as free chlorine.',
        '<b>CT</b> — concentration multiplied by contact time — is the core concept. A lower residual with a long contact time can equal a high residual with a short one. That is why chlorine contact chambers are long, baffled, serpentine tanks: they prevent short-circuiting so every drop gets the full contact time.',
        '<b>Dechlorination</b> is usually required before discharge because chlorine residual is toxic to fish. Sulphur dioxide, sodium bisulphite, sodium metabisulphite or sodium thiosulphate are used.',
        '<b>UV disinfection</b> uses no chemicals and leaves no residual and no disinfection by-products. UV light damages the organisms\' DNA so they cannot reproduce. Its performance depends on <b>UV dose</b> (intensity × time), on <b>UV transmittance</b> (cloudy or coloured water blocks the light), and critically on <b>clean quartz sleeves</b> — fouled sleeves are the number-one cause of UV underperformance.'
      ],
      operator:'For chlorine: monitor residual at the end of the contact chamber, not at the injection point. Watch pH — a plant that nitrifies and drives pH up will quietly lose disinfection efficiency. Keep the contact chamber free of solids build-up, which destroys effective contact time. For UV: clean the sleeves on schedule, replace lamps at their rated hours (output declines long before the lamp dies), and watch the transmittance/intensity alarm. High TSS ruins both chlorine and UV because particles shield organisms.',
      equipment:'Gas chlorinators with vacuum regulators and ton/cylinder containers, sodium hypochlorite storage and metering pumps, calcium hypochlorite (tablet/erosion feeders), chlorine contact chamber with serpentine baffles, residual analysers, dechlorination feed system, UV channel/reactor with banks of lamps, quartz sleeves, wipers, intensity sensors, chlorine leak detectors and SCBA.',
      trouble:[
        {p:'Chlorine residual too low at the end of the contact chamber', c:'Increase dose; also check for high chlorine demand (ammonia, organics, high TSS), short-circuiting, solids build-up reducing contact time, or feed equipment failure.'},
        {p:'Residual adequate but coliform results still failing', c:'Short-circuiting in the contact chamber, high TSS shielding organisms, high pH reducing HOCl, sampling/lab error, or inadequate actual contact time.'},
        {p:'Chlorine demand suddenly increases', c:'Higher ammonia or organic load, industrial discharge, or poor upstream treatment passing solids.'},
        {p:'UV effluent failing bacteriological limits', c:'Fouled quartz sleeves (check first), lamps past rated life, low UV transmittance from turbidity/colour, or flow above the reactor\'s rated capacity.'},
        {p:'Chlorine gas leak', c:'Evacuate upwind and uphill, activate emergency plan, only trained personnel with SCBA respond. Ammonia-solution swab shows white vapour at a leak. Never use water on a chlorine leak.'},
        {p:'Dechlorination overfeed', c:'Can drive DO down in the effluent and the receiving water. Match dose to actual residual; monitor downstream DO.'}
      ],
      terms:[
        {t:'Disinfection', d:'Destruction or inactivation of pathogenic organisms. Not the same as sterilisation.'},
        {t:'Free available chlorine', d:'Hypochlorous acid (HOCl) plus hypochlorite ion (OCl⁻) — the effective disinfecting forms.'},
        {t:'HOCl', d:'Hypochlorous acid — the most effective free chlorine species; favoured at lower pH.'},
        {t:'Combined chlorine', d:'Chloramines formed when chlorine reacts with ammonia; much weaker disinfectant.'},
        {t:'Breakpoint chlorination', d:'Adding chlorine past the point where demand and chloramines are destroyed so a free residual appears.'},
        {t:'CT', d:'Concentration × contact Time — the measure of disinfection exposure.'},
        {t:'Chlorine demand', d:'The amount of chlorine consumed by reactions before a residual can form.'},
        {t:'Dechlorination', d:'Removing chlorine residual before discharge, using sulphur dioxide, bisulphite, metabisulphite or thiosulphate.'},
        {t:'UV transmittance', d:'The percentage of UV light passing through the water; low transmittance reduces disinfection.'},
        {t:'Quartz sleeve', d:'The clear tube protecting a UV lamp; fouling is the most common cause of UV underperformance.'}
      ],
      tips:[
        'Chlorine works BETTER at LOWER pH because more HOCl exists. Very commonly tested.',
        'CT = Concentration × Time. Both matter; either can compensate for the other within limits.',
        'Free chlorine = HOCl + OCl⁻. Combined chlorine = chloramines = weaker.',
        'Past the breakpoint, additional chlorine remains as FREE chlorine.',
        'UV leaves NO residual and produces NO disinfection by-products.',
        'Dirty quartz sleeves are the first thing to check on a failing UV system.',
        'High TSS defeats both chlorine and UV — particles shield organisms.'
      ]
    }
  ]
},
/* ============================ MODULE 7 ============================ */
{
  id:'m7', n:7, title:'Sludge &amp; Solids Handling', duty:'TPE',
  blurb:'What to do with everything you removed: thickening, digestion, dewatering and disposal.',
  lessons:[
    {
      id:'m7l1', title:'Sludge Sources, Thickening &amp; Digestion',
      need:'Sludge sources: <b>primary</b> (3–7% solids), <b>secondary/WAS</b> (0.5–1.5% solids, hardest to handle). Thickening raises solids concentration to cut volume. <b>Anaerobic digestion</b> runs without oxygen at <b>mesophilic ~35 °C</b>, produces <b>methane biogas</b>, and reduces volatile solids ~40–60%. <b>Aerobic digestion</b> uses air, is simpler, produces no gas.',
      learn:[
        'Everything you removed from the water is still on site — it just changed form. Solids handling is typically the largest share of a plant\'s operating cost and the source of most odour complaints.',
        '<b>Primary sludge</b> is 3–7% solids, settles readily, and is highly putrescible — it goes septic fast. <b>Waste activated sludge (WAS)</b> is only 0.5–1.5% solids, meaning it is over 98% water, and it resists both thickening and dewatering. Handling WAS well is the real skill.',
        '<b>Thickening</b> removes water to reduce volume before further processing. Gravity thickeners work well on primary sludge; <b>dissolved air flotation (DAF)</b> and rotary drum/gravity belt thickeners work better on WAS.',
        '<b>Anaerobic digestion</b> is the classic stabilisation step: sealed, heated, oxygen-free tanks where bacteria convert volatile solids to <b>biogas</b> (roughly 60–70% methane, 30–40% CO₂) which many plants burn for heat or power. <b>Mesophilic</b> digestion runs around <b>35 °C</b> with 15–30 days detention; thermophilic runs hotter (~55 °C) and faster. Anaerobic digestion is a <b>two-stage biology</b>: acid-forming bacteria first, then slow, sensitive <b>methane-forming bacteria</b>.',
        '<b>Aerobic digestion</b> simply keeps aerating the sludge until the bugs consume themselves (endogenous respiration). It is simpler and more forgiving, has no explosive gas, but uses a lot of energy and recovers none.'
      ],
      operator:'On an anaerobic digester, the methane formers are the fragile part. Watch <b>volatile acids to alkalinity ratio</b> — a rising ratio is the earliest warning of a souring digester. Keep temperature steady; sudden swings upset the biology more than the absolute value does. Feed consistently rather than in big slugs. And treat digester gas with total respect: methane is explosive, and digesters are confined spaces with hydrogen sulphide.',
      equipment:'Gravity thickener, DAF unit, gravity belt/rotary drum thickener, anaerobic digesters (floating or fixed cover) with heat exchangers, mixing systems, gas collection, pressure/vacuum relief, flame arrestors, waste gas flare; aerobic digester with blowers/diffusers; sludge pumps (progressive cavity, plunger).',
      trouble:[
        {p:'Digester gas production falling, volatile acids rising', c:'Digester souring — organic overload, toxicity, or temperature swing. Reduce feed, check temperature and alkalinity, consider alkalinity addition. Rising VA/alkalinity ratio is the key early indicator.'},
        {p:'Digester pH dropping', c:'Acid formers outpacing methane formers. Reduce loading; add alkalinity; verify heating and mixing.'},
        {p:'Foaming in the digester', c:'Overloading, rapid feed changes, filamentous organisms (Nocardia/Microthrix) carried in with WAS, or poor mixing.'},
        {p:'Thickener not thickening / solids in the overflow', c:'Hydraulic or solids overload, insufficient detention, sludge going septic and floating, or polymer dose wrong on a mechanical thickener.'},
        {p:'Grit or scum accumulating in the digester', c:'Poor grit removal upstream and inadequate mixing; reduces effective volume. Requires cleaning.'},
        {p:'Aerobic digester not reducing volatile solids', c:'Insufficient detention time, low DO, or cold temperature. Increase aeration/detention.'}
      ],
      terms:[
        {t:'Primary sludge', d:'Solids settled in the primary clarifier; 3–7% solids, highly putrescible.'},
        {t:'WAS', d:'Waste Activated Sludge — excess biological solids, 0.5–1.5% solids, difficult to thicken and dewater.'},
        {t:'Thickening', d:'Increasing solids concentration to reduce sludge volume before digestion or dewatering.'},
        {t:'DAF', d:'Dissolved Air Flotation — thickening by attaching fine air bubbles to solids so they float and are skimmed.'},
        {t:'Anaerobic digestion', d:'Oxygen-free biological stabilisation producing methane biogas and reducing volatile solids.'},
        {t:'Mesophilic', d:'Digestion temperature range around 35 °C (95 °F).'},
        {t:'Biogas', d:'Gas from anaerobic digestion, roughly 60–70% methane and 30–40% carbon dioxide.'},
        {t:'Volatile acids/alkalinity ratio', d:'Key digester health indicator; a rising ratio warns of souring.'},
        {t:'Stabilisation', d:'Treatment that reduces the volatile/putrescible content and pathogens in sludge.'},
        {t:'Aerobic digestion', d:'Extended aeration of sludge until organisms consume their own cell mass (endogenous respiration).'}
      ],
      tips:[
        'Primary sludge 3–7% solids; WAS 0.5–1.5%. WAS is the hard one.',
        'Mesophilic digestion ≈ 35 °C. Thermophilic ≈ 55 °C.',
        'Biogas is roughly 60–70% methane — explosive, treat with extreme care.',
        'Rising volatile acids / alkalinity ratio = digester souring. Earliest warning sign.',
        'Methane-forming bacteria are the SLOW, SENSITIVE step in anaerobic digestion.',
        'Aerobic digestion: no gas recovery, higher energy, simpler and more forgiving.'
      ]
    },
    {
      id:'m7l2', title:'Dewatering &amp; Solids Disposal',
      need:'Dewatering turns liquid sludge into a handleable <b>cake</b>. Know belt filter press, centrifuge, screw press, filter press, and drying beds. <b>Polymer conditioning</b> is almost always required. The liquid removed (<b>filtrate/centrate/subnatant</b>) returns to the head of the plant and carries a real load. Disposal routes: land application, landfill, composting, incineration.',
      learn:[
        'Digested sludge is still 95%+ water, and hauling water is expensive. Dewatering gets it to a <b>cake</b> — typically 15–30% solids depending on the technology — that can be handled with a loader and truck.',
        '<b>Polymer conditioning</b> comes first. Sludge particles are fine and slippery; polymer binds them into larger, releasable flocs so water can drain. Getting polymer dose and mixing right is the single biggest factor in dewatering performance, and it is optimised by bench testing much like a jar test.',
        'The main machines: a <b>belt filter press</b> squeezes sludge between two moving porous belts through increasing pressure rollers. A <b>centrifuge</b> spins sludge so solids are thrown to the bowl wall and scrolled out — compact, enclosed and odour-friendly, but power hungry and high maintenance. A <b>screw press</b> is slow, low-energy and low-maintenance. <b>Drying beds</b> are simple sand beds that drain and evaporate — cheap but land-hungry and weather-dependent.',
        '<b>Do not forget the return stream.</b> The water pressed out — <b>filtrate</b> from a belt press, <b>centrate</b> from a centrifuge, <b>subnatant</b> from a thickener — goes back to the head of the plant carrying high solids and often very high ammonia. Returning it all at once can upset the whole plant, so it should be equalised and returned steadily.'
      ],
      operator:'Watch cake dryness and the clarity of the return stream together — they trade off against each other. Cloudy filtrate with good cake usually means polymer or belt washwater problems. On a belt press, keep the belts tracking and the washwater spray nozzles clear; on a centrifuge, listen for vibration, which signals imbalance or wear. Always schedule return-stream flows away from peak plant loading.',
      equipment:'Belt filter press with washwater system, centrifuge (decanter), screw press, plate-and-frame filter press, sand drying beds, polymer make-down and dosing systems, sludge feed pumps, cake conveyors and hoppers, loading bays.',
      trouble:[
        {p:'Wet cake / poor solids capture', c:'Polymer dose or type wrong, poor polymer mixing, feed solids too dilute or variable, belt speed too fast, or worn/blinded belts.'},
        {p:'Filtrate/centrate very cloudy, high solids', c:'Under-dosed or over-dosed polymer, hydraulic overload, or machine adjustment. Bench-test polymer; adjust feed rate.'},
        {p:'Solids squeezing out the sides of a belt press', c:'Overfeeding, belt tension wrong, or belt tracking off. Reduce feed; correct tension/tracking.'},
        {p:'Plant upset that correlates with dewatering operation', c:'Return stream slug — high ammonia/solids returned too fast. Equalise and meter the return over the day.'},
        {p:'Centrifuge vibration', c:'Imbalance from uneven solids build-up, worn bearings or scroll wear. Shut down and inspect — do not run through vibration.'},
        {p:'Drying beds not draining', c:'Sand clogged/blinded, underdrain plugged, or sludge applied too thick. Rake/replace top sand; apply thinner layers.'}
      ],
      terms:[
        {t:'Dewatering', d:'Removing water from sludge to produce a handleable cake, typically 15–30% solids.'},
        {t:'Cake', d:'The dewatered solids product discharged from a press or centrifuge.'},
        {t:'Conditioning', d:'Chemical (usually polymer) treatment of sludge to improve water release before dewatering.'},
        {t:'Filtrate', d:'Liquid removed by a belt filter press or filter press; returned to the head of the plant.'},
        {t:'Centrate', d:'Liquid removed by a centrifuge; returned to the head of the plant.'},
        {t:'Subnatant', d:'Liquid removed from the bottom/below solids in a thickener or DAF.'},
        {t:'Biosolids', d:'Treated, stabilised sludge that meets standards for beneficial use such as land application.'},
        {t:'Belt filter press', d:'Dewatering device pressing sludge between two porous belts through rollers.'},
        {t:'Centrifuge', d:'Dewatering device using centrifugal force to separate solids from liquid.'}
      ],
      tips:[
        'Polymer conditioning is essential before mechanical dewatering.',
        'Filtrate (belt press), Centrate (centrifuge), Subnatant (thickener) — know which comes from which.',
        'Return streams go BACK to the head of the plant and carry significant load — meter them.',
        'Typical dewatered cake is 15–30% solids.',
        '"Biosolids" implies treated and stabilised to a standard for beneficial use.'
      ]
    }
  ]
},
/* ============================ MODULE 8 ============================ */
{
  id:'m8', n:8, title:'Equipment &amp; Maintenance', duty:'EQP',
  blurb:'The largest single duty area on the exam (39 of 100 questions) — pumps, motors, valves, blowers and preventive maintenance.',
  lessons:[
    {
      id:'m8l1', title:'Pumps',
      need:'Two families: <b>centrifugal</b> (most common; adds velocity then converts to pressure; flow varies with head) and <b>positive displacement</b> (moves a fixed volume per stroke/revolution; flow nearly constant regardless of head — <b>must never be run against a closed discharge</b>). Know <b>cavitation</b>, <b>NPSH</b>, <b>priming</b>, and <b>head</b>.',
      learn:[
        'A <b>centrifugal pump</b> spins an impeller that flings water outward, converting velocity into pressure in the volute. It is the workhorse: simple, high flow, no damage if you close the discharge valve briefly. Its flow <b>drops as head rises</b>, following its pump curve.',
        'A <b>positive displacement pump</b> traps a fixed volume and pushes it along — progressive cavity, diaphragm, plunger, peristaltic, rotary lobe. Flow stays nearly constant no matter the head, which is exactly what you want for chemical metering and thick sludge. <b>The critical safety rule: never run a PD pump against a closed discharge valve.</b> It has no relief path, so pressure builds until something ruptures. Always fit a relief valve.',
        '<b>Cavitation</b> is the classic pump problem. If suction pressure drops too low, water flashes to vapour bubbles at the impeller eye; those bubbles collapse violently on the high-pressure side, hammering pits into the metal. It <b>sounds like pumping gravel</b>. Causes: suction lift too high, clogged suction line or strainer, closed/throttled suction valve, low wet-well level, or high liquid temperature.',
        '<b>NPSH</b> (net positive suction head) is the margin against cavitation: NPSH <i>available</i> from the system must exceed NPSH <i>required</i> by the pump. <b>Priming</b> means filling the pump and suction with liquid — a standard centrifugal pump cannot pull air and will not pump until primed.',
        'Head terms: <b>static head</b> is the vertical lift; <b>friction head</b> is loss to pipe friction; <b>total dynamic head (TDH)</b> is everything the pump must overcome.'
      ],
      operator:'Listen and feel every day. Gravel noise = cavitation. New vibration = imbalance, worn bearings or a partially clogged impeller. A hot bearing or motor = alignment, lubrication or overload issue. Packing should drip slowly — roughly a drop every second or two — because that flow lubricates and cools; a bone-dry packing gland is burning up the shaft sleeve. Mechanical seals should not leak at all.',
      equipment:'Centrifugal (end-suction, split-case, submersible, self-priming, chopper, vertical turbine); positive displacement (progressive cavity, plunger, diaphragm/metering, peristaltic, rotary lobe); air-operated double-diaphragm (AODD); packing glands, mechanical seals, wear rings, couplings, check and isolation valves, pressure gauges, pump curves.',
      trouble:[
        {p:'Pump sounds like it is pumping gravel; erratic pressure', c:'Cavitation. Check suction valve fully open, clogged strainer/suction line, wet well level too low, suction lift too high, high liquid temperature.'},
        {p:'Pump runs but delivers no flow', c:'Lost prime, air lock, suction valve closed, impeller clogged, wrong rotation direction, or discharge check valve stuck shut.'},
        {p:'Flow gradually decreasing over months', c:'Impeller or wear-ring wear, partial clog, or increasing system head from pipe scaling.'},
        {p:'Excessive vibration', c:'Misalignment, worn bearings, impeller clog or damage (imbalance), cavitation, or a bent shaft. Do not run through vibration.'},
        {p:'Packing gland overheating or shaft sleeve scoring', c:'Packing too tight / no leakage. Loosen to allow slow drip; replace packing and sleeve if scored.'},
        {p:'Motor tripping on overload', c:'Pump clogged, bearing failure, wrong voltage/phase loss, impeller rubbing, or fluid heavier than design.'},
        {p:'PD pump line ruptured or pump damaged', c:'Ran against a closed discharge. Verify the relief valve is installed, set correctly and functional; confirm valve interlocks.'}
      ],
      terms:[
        {t:'Centrifugal pump', d:'Pump using a rotating impeller to add velocity, converted to pressure in the volute. Flow varies with head.'},
        {t:'Positive displacement pump', d:'Pump moving a fixed volume per cycle; near-constant flow regardless of head. Requires a pressure relief valve.'},
        {t:'Cavitation', d:'Formation and violent collapse of vapour bubbles in a pump, causing noise, vibration and impeller pitting.'},
        {t:'NPSH', d:'Net Positive Suction Head — available suction head must exceed the pump\'s required NPSH to avoid cavitation.'},
        {t:'Priming', d:'Filling the pump casing and suction with liquid so a centrifugal pump can develop suction.'},
        {t:'TDH', d:'Total Dynamic Head — total head a pump must overcome: static lift plus friction plus pressure head.'},
        {t:'Static head', d:'Vertical distance the pump must lift the liquid.'},
        {t:'Packing gland', d:'Rings of packing sealing a pump shaft; should drip slowly to lubricate and cool.'},
        {t:'Mechanical seal', d:'A precision face seal on a pump shaft; should not leak.'},
        {t:'Pump curve', d:'Manufacturer graph of flow versus head for a pump.'}
      ],
      tips:[
        'Cavitation sounds like pumping gravel/marbles. Nearly always the right answer to that description.',
        'NEVER run a positive displacement pump against a closed discharge valve.',
        'Cavitation is a SUCTION-side problem — check suction first.',
        'Packing should drip slowly; mechanical seals should not leak at all.',
        'Centrifugal pump flow DECREASES as head increases.',
        'A centrifugal pump must be primed; it cannot pump air.'
      ]
    },
    {
      id:'m8l2', title:'Motors, Valves, Blowers &amp; Mixers',
      need:'Know valve types and their jobs: <b>gate</b> (isolation, fully open/closed), <b>globe</b> (throttling), <b>check</b> (prevents backflow), <b>plug/ball</b> (quarter-turn isolation), <b>butterfly</b> (isolation/throttling), <b>pressure relief</b>. Motors: overload protection, correct rotation, keep clean and cool. Blowers supply aeration air. All of it needs <b>preventive maintenance</b> and <b>lockout/tagout</b>.',
      learn:[
        '<b>Valves have specific jobs and using the wrong one destroys it.</b> A <b>gate valve</b> is for isolation — fully open or fully closed. Throttle with a gate valve and you will wire-draw and erode the seat. A <b>globe valve</b> is built for throttling because its seat and plug can modulate flow. A <b>check valve</b> is automatic: it allows flow one way and slams shut against reverse flow, protecting pumps from backspin. <b>Ball and plug valves</b> are quarter-turn, fast and tight. <b>Butterfly valves</b> are compact and can do both isolation and some throttling.',
        '<b>Motors</b> are simple but unforgiving. They need correct voltage on all phases, overload protection sized properly, clean airflow for cooling, and correct rotation direction (a pump running backwards moves some water, so it can fool you — always verify rotation on installation). Most motor failures come down to heat, moisture, contamination or bearing failure.',
        '<b>Blowers</b> supply aeration air and dominate energy use. Positive displacement (rotary lobe) blowers give constant volume with variable pressure; centrifugal and turbo blowers are more efficient at larger scale. Every blower needs a clean inlet filter — a dirty filter starves the blower and raises energy use — and adequate room ventilation, since they generate a great deal of heat and noise.',
        '<b>Preventive maintenance (PM)</b> is scheduled work done to prevent failure: lubrication, alignment, vibration checks, belt tension, filter changes, oil analysis. It is far cheaper than corrective maintenance and it is heavily represented on this exam, since equipment is 39 of 100 questions.'
      ],
      operator:'Run a real PM programme with a schedule and records — and the records matter as much as the work, because they prove compliance and reveal trends. Exercise valves that normally sit in one position; a valve that has not moved in three years will not move in an emergency either. Log motor amps: a slow upward creep is a bearing or a clog developing. Lubricate to the manufacturer\'s schedule and quantity — over-greasing blows out bearing seals just as surely as under-greasing starves them.',
      equipment:'Gate, globe, check (swing/ball/flap), plug, ball, butterfly, diaphragm, pinch, air-release and pressure-relief valves; electric/pneumatic actuators; AC induction motors, VFDs, starters, overload relays; PD/centrifugal/turbo blowers with inlet filters and relief valves; submersible and top-entry mixers; couplings, bearings, belts, gearboxes.',
      trouble:[
        {p:'Valve will not seat / leaks by', c:'Debris on the seat, worn seat or disc, or a gate valve that was used for throttling. Cycle to clear; rebuild or replace.'},
        {p:'Motor overheating', c:'Overload, blocked cooling air/dirty fins, single phasing, wrong voltage, bearing failure, or ambient too hot. Check amps on all three phases.'},
        {p:'Motor amps creeping up over time', c:'Developing mechanical problem — clog, bearing wear, misalignment, or impeller rubbing. Investigate before failure.'},
        {p:'Blower discharge pressure rising, air flow falling', c:'Fouled diffusers downstream, or plugged blower inlet filter. Check filter first, then diffusers.'},
        {p:'Blower overheating / relief valve lifting', c:'Restricted discharge, blocked filter, worn lobes, or belt slip. Do not simply raise the relief setting.'},
        {p:'Check valve slamming (water hammer)', c:'Rapid flow reversal on pump shutdown. Consider slow-closing or spring-assisted check valve, or a surge control device.'},
        {p:'Mixer vibration or shaft wobble', c:'Rag build-up on the impeller, bearing wear, or misalignment. Lock out and inspect.'}
      ],
      terms:[
        {t:'Gate valve', d:'Isolation valve for fully open or fully closed service; not for throttling.'},
        {t:'Globe valve', d:'Valve designed for throttling and flow regulation.'},
        {t:'Check valve', d:'Automatic valve permitting flow in one direction only, preventing backflow.'},
        {t:'Butterfly valve', d:'Quarter-turn valve with a rotating disc; compact, used for isolation and throttling.'},
        {t:'Pressure relief valve', d:'Valve that opens at a set pressure to protect equipment and piping — essential on PD pumps and blowers.'},
        {t:'Water hammer', d:'Pressure surge caused by a sudden change in flow velocity, such as a valve closing quickly.'},
        {t:'Preventive maintenance', d:'Scheduled maintenance performed to prevent failure — lubrication, alignment, inspection, filter changes.'},
        {t:'VFD', d:'Variable Frequency Drive — controls motor speed by varying frequency, saving energy on pumps and blowers.'},
        {t:'Single phasing', d:'Loss of one phase of a three-phase supply, causing motor overheating and failure.'}
      ],
      tips:[
        'Gate valve = ISOLATION only. Globe valve = THROTTLING. Check valve = prevents BACKFLOW. Classic exam trio.',
        'Positive displacement pumps and blowers REQUIRE pressure relief valves.',
        'Rising motor amps = developing mechanical problem.',
        'A dirty blower inlet filter is a common, cheap cause of poor aeration.',
        'Over-greasing a bearing is as damaging as under-greasing it.',
        'PM records are part of regulatory compliance, not just good practice.'
      ]
    }
  ]
},
/* ============================ MODULE 9 ============================ */
{
  id:'m9', n:9, title:'Laboratory, Sampling &amp; Process Control', duty:'LAB',
  blurb:'13 of 100 exam questions. Sampling technique, the core tests, and using data to steer the plant.',
  lessons:[
    {
      id:'m9l1', title:'Sampling',
      need:'Know <b>grab</b> vs <b>composite</b> samples, when each is required, <b>representative sampling</b>, <b>chain of custody</b>, preservation and <b>hold times</b>. Some tests <b>must</b> be grab samples analysed immediately: <b>pH, DO, temperature, chlorine residual</b>. Bacteriological samples need sterile bottles and (if chlorinated) a dechlorinating agent.',
      learn:[
        'A <b>grab sample</b> is a single sample taken at one moment. It captures conditions right then — which is exactly right for anything that changes the instant you remove it from the process: <b>pH, dissolved oxygen, temperature, chlorine residual</b>, and bacteriological samples.',
        'A <b>composite sample</b> is many small portions collected over a period (usually 24 hours) and combined. It gives an average, which is what permits usually require for BOD, TSS and nutrients. A <b>flow-proportional</b> composite weights each portion by flow at that moment, so it represents the true daily mass load — this is the more accurate method and often the required one.',
        '<b>Representative sampling</b> is the whole game. Take samples from a well-mixed, flowing point, never from a stagnant corner, a scum-covered surface, or right against a wall. If the sample does not represent the process, every number you calculate from it is fiction — and you may make an adjustment that makes things worse.',
        '<b>Chain of custody</b> is the documented trail of who had the sample, when, and under what conditions. For any sample that may be used for regulatory or legal purposes, an unbroken chain of custody is mandatory. <b>Hold times and preservation</b> matter too: samples generally need to be chilled to about 4 °C, some need acid preservation, and each test has a maximum hold time after which the result is invalid.'
      ],
      operator:'Label everything at the moment of collection — never afterwards from memory. Keep the cooler iced and the ice actually surrounding the bottles. Rinse sample bottles with the sample where the method permits, but <b>never rinse a sterile bacteriological bottle</b> or one that contains preservative. Take samples at the same time and place each day so your trends mean something.',
      equipment:'Automatic composite sampler (refrigerated, flow-paced), sample bottles (plastic, glass, sterile), dipper/pole sampler, coolers and ice packs, thermometer, chain-of-custody forms, preservatives, labels, DO and pH meters for field measurement.',
      trouble:[
        {p:'Lab results do not match plant performance', c:'Non-representative sample point, stagnant location, sample not mixed, wrong sample type (grab vs composite), or hold time exceeded.'},
        {p:'Composite sampler not collecting properly', c:'Plugged intake line, pump tube worn, sample line not purging, no ice/refrigeration, or flow signal lost on a flow-paced sampler.'},
        {p:'Bacteriological result invalid', c:'Non-sterile bottle, bottle rinsed, no dechlorinating agent in a chlorinated sample, hold time exceeded, or contamination during collection.'},
        {p:'DO reading looks wrong', c:'Sample aerated during collection, measured too long after collection, or probe not calibrated. DO must be a grab measured immediately.'},
        {p:'Regulatory sample rejected by the lab', c:'Chain of custody incomplete, hold time exceeded, wrong preservation, insufficient volume, or wrong bottle type.'}
      ],
      terms:[
        {t:'Grab sample', d:'A single sample taken at one point in time; required for pH, DO, temperature, chlorine residual and bacteriological tests.'},
        {t:'Composite sample', d:'Multiple portions collected over time and combined to give an average, typically over 24 hours.'},
        {t:'Flow-proportional composite', d:'A composite where portion size or frequency is weighted by flow, representing true mass loading.'},
        {t:'Representative sample', d:'A sample that accurately reflects the characteristics of the whole stream being sampled.'},
        {t:'Chain of custody', d:'Documented record of sample possession and handling from collection to analysis.'},
        {t:'Hold time', d:'Maximum allowable time between sample collection and analysis for a valid result.'},
        {t:'Preservation', d:'Chilling (≈4 °C) or chemical treatment to stabilise a sample until analysis.'}
      ],
      tips:[
        'pH, DO, temperature and chlorine residual = GRAB samples, measured immediately. Frequently asked.',
        'BOD, TSS and nutrients for permits = usually 24-hour COMPOSITE.',
        'Flow-proportional composite is the most representative for mass loading.',
        'Never rinse a sterile bacteriological bottle or a preserved bottle.',
        'Chain of custody is required for regulatory/legal samples.'
      ]
    },
    {
      id:'m9l2', title:'Core Laboratory Tests',
      need:'Know the purpose, method basics and units of: <b>BOD₅</b> (5 d, 20 °C, dark, mg/L), <b>COD</b>, <b>TSS</b> (filter, dry 103–105 °C), <b>volatile solids</b> (ignite 550 °C), <b>pH</b>, <b>DO</b> (membrane probe or Winkler), <b>turbidity</b> (NTU), <b>settleable solids</b> (Imhoff cone, mL/L), <b>settleometer/SVI</b>, <b>fecal coliform</b>, <b>chlorine residual</b>, <b>alkalinity</b>.',
      learn:[
        '<b>BOD₅</b> is the flagship wastewater test and the most procedurally fussy. You measure DO in a diluted, seeded sample, incubate it <b>5 days at 20 °C in the dark</b> (dark so algae do not produce oxygen), then measure DO again. The oxygen consumed, corrected for dilution, is the BOD. It takes five days, so it tells you what happened last week — useful for compliance, useless for today\'s decisions.',
        '<b>COD</b> gives a similar picture in about two hours using strong chemical oxidation. It always reads higher than BOD because it oxidises material bacteria cannot. Many plants establish their own local BOD:COD ratio and then use COD for fast operational decisions.',
        '<b>TSS</b>: filter a measured volume through a pre-weighed glass fibre filter, dry at <b>103–105 °C</b>, reweigh. The gain in mass over the volume filtered gives mg/L. Ignite that same filter at <b>550 °C</b> and the loss is <b>volatile</b> suspended solids.',
        '<b>DO</b> by membrane/optical probe is standard; the <b>Winkler titration</b> is the classic reference method. <b>Turbidity</b> is measured by light scattering in <b>NTU</b>. <b>Settleable solids</b> use an <b>Imhoff cone</b> read after 1 hour in <b>mL/L</b>. The <b>settleometer</b> (30-minute settled volume) combined with MLSS gives you <b>SVI</b>.',
        '<b>Quality control</b> underpins all of it: calibrate meters with fresh standards and buffers, run duplicates and known standards, keep reagents in date, and record everything. An uncalibrated meter produces confident, precise, wrong numbers.'
      ],
      operator:'Run the quick tests that steer the plant daily — settleometer, DO, pH, and a visual on the clarifier — and use the slow tests for compliance and trending. Keep a control chart: plotting results over time reveals drift long before a single result goes out of limits. When a result surprises you, re-run it before you act on it; acting on a bad number is worse than waiting an hour.',
      equipment:'BOD incubator (20 °C), BOD bottles, DO meter/probe, COD reactor and vials, spectrophotometer, drying oven (103–105 °C), muffle furnace (550 °C), analytical balance, desiccator, filtration manifold with glass fibre filters, pH meter and buffers, turbidimeter and standards, Imhoff cones, settleometer, incubator and membrane filtration for coliforms, titration glassware, colorimeter for chlorine residual.',
      trouble:[
        {p:'BOD results erratic or unreasonably low', c:'Insufficient seed, toxic sample inhibiting bacteria, dilution range wrong, incubator temperature off, or light reaching the bottles.'},
        {p:'TSS results not reproducible', c:'Sample not mixed before pouring, filter not dried to constant weight, balance not calibrated/level, or unsuitable sample volume.'},
        {p:'pH meter drifting or slow to stabilise', c:'Probe dirty or dried out, buffers old/contaminated, temperature compensation off, or the probe is at end of life.'},
        {p:'DO probe reading low everywhere', c:'Membrane fouled or torn, electrolyte depleted, probe not calibrated, or insufficient flow past a membrane probe.'},
        {p:'Turbidity readings inconsistent', c:'Bubbles in the sample, scratched or fingerprinted vial, condensation, or standards out of date.'},
        {p:'Coliform plates overgrown or all negative', c:'Wrong dilution, incubator temperature off, media expired, or chlorine not neutralised in the sample bottle.'}
      ],
      terms:[
        {t:'BOD₅', d:'Biochemical Oxygen Demand test: DO depletion over 5 days at 20 °C in the dark, mg/L.'},
        {t:'Winkler method', d:'Classic iodometric titration reference method for measuring dissolved oxygen.'},
        {t:'NTU', d:'Nephelometric Turbidity Unit — the unit of turbidity measured by light scattering.'},
        {t:'Imhoff cone', d:'Graduated cone used to measure settleable solids in mL/L after one hour.'},
        {t:'Settleometer', d:'A 1–2 L container used for the 30-minute settling test on mixed liquor.'},
        {t:'Duplicate', d:'A second analysis of the same sample used to check precision.'},
        {t:'Standard', d:'A solution of known concentration used to calibrate or verify an instrument or method.'},
        {t:'Control chart', d:'A plot of results over time used to detect drift and out-of-control conditions.'}
      ],
      tips:[
        'BOD₅ = 5 days, 20 °C, in the DARK. All three conditions get tested.',
        'TSS drying temperature 103–105 °C; volatile ignition 550 °C. Memorise both.',
        'Settleable solids = Imhoff cone = mL/L (not mg/L).',
        'COD is faster than BOD and always higher.',
        'Turbidity is NTU; the mechanism is light scattering.',
        'Calibration and QC are exam answers, not just good habits.'
      ]
    },
    {
      id:'m9l3', title:'Process Control &amp; Record Keeping',
      need:'Process control = <b>measure → interpret → adjust → verify</b>, using trends rather than single readings. Make <b>small, gradual</b> changes and <b>one at a time</b>. Records are a <b>legal requirement</b>: operating logs, lab results, maintenance, calibration, training, and reporting of exceedances.',
      learn:[
        'Good process control is unglamorous discipline. You take the same measurements at the same times, plot them, and watch the direction of travel. <b>A trend is information; a single data point is a rumour.</b>',
        'Three rules that separate good operators from plant-wreckers: <b>make small changes</b> (biology responds over days), <b>change one thing at a time</b> (or you will never know which change worked), and <b>wait long enough to see the result</b> before changing again. Chasing daily numbers with big swings creates oscillation that never settles.',
        'Your core control levers in activated sludge: <b>wasting rate</b> (sets MLSS and sludge age), <b>RAS rate</b> (sets clarifier blanket), <b>aeration/DO</b> (sets oxygen supply), and for chemical systems <b>dose rate</b>. Almost every adjustment you make is one of these four.',
        '<b>Records</b> are not paperwork for its own sake — they are the legal proof that the plant was operated properly. Required records typically include daily operating logs, flow, lab results, chemical use, maintenance and calibration records, operator certification and training, and prompt reporting of any permit exceedance or bypass. Falsifying records is one of the most serious offences an operator can commit.'
      ],
      operator:'Keep a legible daily log that another operator could read and understand your shift from. Note not just numbers but observations: colour, odour, foam, weather, unusual events, and any adjustment you made and why. When you hand over a shift, that log is the handover. When an inspector arrives, it is your defence. When a problem develops over weeks, it is the only record of how it started.',
      equipment:'SCADA/HMI system, data loggers, chart recorders, trending software, spreadsheets, daily operating log books, calibration logs, maintenance management system, permit and reporting files.',
      trouble:[
        {p:'Process oscillating — always chasing, never stable', c:'Changes too large or too frequent. Return to a baseline, make one small change, and wait a full sludge age or several days to evaluate.'},
        {p:'Cannot tell which adjustment fixed (or broke) the process', c:'Multiple changes made at once. Change one variable at a time and record each change with date, time and reason.'},
        {p:'Permit exceedance discovered', c:'Verify the result, identify and correct the cause, document everything, and report within the required timeframe. Never delay reporting.'},
        {p:'Inspector finds gaps in records', c:'Incomplete logs, missing calibration records or unsigned entries. Establish a checklist-based daily log routine.'},
        {p:'SCADA trend disagrees with field reading', c:'Instrument out of calibration or signal scaling wrong. Field-verify and recalibrate; never assume the screen is right.'}
      ],
      terms:[
        {t:'Process control', d:'The cycle of measuring, interpreting, adjusting and verifying to keep treatment within targets.'},
        {t:'Trend', d:'The direction of change in a parameter over time — more informative than a single reading.'},
        {t:'SCADA', d:'Supervisory Control and Data Acquisition — the plant control and monitoring system.'},
        {t:'Operating log', d:'The daily legal record of plant operation, observations, readings and adjustments.'},
        {t:'Exceedance', d:'A result that violates a permit limit; must be documented and reported.'},
        {t:'Bypass', d:'Diversion of wastewater around a treatment unit or the plant; a reportable event.'}
      ],
      tips:[
        'Make SMALL changes, ONE at a time, and WAIT to evaluate. A recurring exam theme.',
        'Trends beat single data points.',
        'Wasting controls sludge age/MLSS; RAS controls the blanket.',
        'Records are a legal requirement; falsification is a serious offence.',
        'Permit exceedances must be reported within the required timeframe.'
      ]
    }
  ]
},
/* ============================ MODULE 10 ============================ */
{
  id:'m10', n:10, title:'Safety', duty:'SSA',
  blurb:'Confined spaces, WHMIS, PPE, lockout/tagout and emergency response. Safety answers on the exam are always the conservative ones.',
  lessons:[
    {
      id:'m10l1', title:'Confined Spaces &amp; Atmospheric Hazards',
      need:'A <b>confined space</b> has limited entry/exit, is not designed for continuous occupancy, and is large enough to enter. <b>Always test the atmosphere before entry, in this order: oxygen → flammable → toxic.</b> Safe oxygen is <b>19.5–23.5%</b>. Know <b>hydrogen sulphide</b> (rotten eggs at low concentration, <b>deadens the sense of smell at high concentration</b>) and <b>methane</b> (explosive). Entry requires a permit, ventilation, attendant and retrieval equipment.',
      learn:[
        'Confined spaces kill more wastewater workers than anything else, and the grim signature of these accidents is <b>multiple fatalities</b> — a worker collapses and coworkers rush in to help without protection and collapse too. <b>Never enter to rescue without proper equipment and training.</b>',
        'Wet wells, digesters, manholes, tanks, and vaults are all confined spaces. The hazards are atmospheric (oxygen deficiency, toxic gas, explosive gas), plus engulfment, mechanical and electrical hazards.',
        '<b>Test order matters: oxygen first, then flammable, then toxic.</b> The reason is practical — a flammable-gas meter needs oxygen to read correctly, so an oxygen-deficient atmosphere makes the flammable reading unreliable. Safe oxygen range is <b>19.5% to 23.5%</b>. Below 19.5 is deficient; above 23.5 is enriched and a serious fire risk.',
        '<b>Hydrogen sulphide (H₂S)</b> is the wastewater killer. It smells of rotten eggs at low concentrations, but at higher concentrations it <b>paralyses your sense of smell almost instantly</b> — so "I can\'t smell it anymore" means the danger has increased, not decreased. It is also heavier than air, so it collects in low points. <b>Methane</b> is lighter than air, collects at the top, and is explosive.',
        'A compliant entry needs: a written <b>permit</b>, atmospheric testing (and continuous monitoring), <b>ventilation</b>, an <b>attendant stationed outside</b>, retrieval harness and tripod/winch, communication, and a rescue plan that does not rely on the attendant entering.'
      ],
      operator:'Treat every confined space as lethal until the meter proves otherwise, every single time — including the space you entered safely yesterday. Bump-test and calibrate your gas detector on schedule; a detector you have not verified is a false sense of security. If conditions change during entry, or the alarm sounds, <b>leave immediately</b> and do not return until it is re-tested and corrected.',
      equipment:'4-gas detector (O₂, LEL, H₂S, CO) with calibration/bump-test station, blowers and ducting for forced ventilation, full-body harness, tripod and retrieval winch, SCBA or supplied-air respirator, entry permit forms, barricades, communication equipment, lighting rated for the atmosphere.',
      trouble:[
        {p:'Gas detector alarms during entry', c:'Evacuate immediately. Do not investigate from inside. Re-ventilate, re-test, and determine the cause before any re-entry.'},
        {p:'Oxygen reads below 19.5%', c:'Do not enter. Ventilate and re-test. Oxygen may be displaced by another gas or consumed by rust/biological activity.'},
        {p:'Oxygen reads above 23.5%', c:'Do not enter — enriched atmosphere is a severe fire/explosion hazard. Find the source (often a leaking oxygen line).'},
        {p:'Worker down inside a confined space', c:'DO NOT ENTER. Call emergency services, activate the rescue plan, use retrieval equipment from outside. Most confined space deaths are would-be rescuers.'},
        {p:'Detector fails bump test', c:'Remove from service, recalibrate or replace. Never enter relying on an unverified instrument.'}
      ],
      terms:[
        {t:'Confined space', d:'A space with limited entry/exit, not designed for continuous occupancy, large enough to enter and work.'},
        {t:'Entry permit', d:'Written authorisation documenting hazards, testing, controls and personnel for a confined space entry.'},
        {t:'Attendant', d:'A trained person stationed outside a confined space to monitor entrants and summon rescue — never enters to rescue.'},
        {t:'Hydrogen sulphide (H₂S)', d:'Toxic gas smelling of rotten eggs at low levels; deadens the sense of smell at high levels; heavier than air.'},
        {t:'LEL', d:'Lower Explosive Limit — the minimum concentration of a gas in air that will ignite.'},
        {t:'Oxygen deficient', d:'Atmosphere below 19.5% oxygen.'},
        {t:'Oxygen enriched', d:'Atmosphere above 23.5% oxygen — a serious fire hazard.'},
        {t:'SCBA', d:'Self-Contained Breathing Apparatus — supplies clean air independent of the surrounding atmosphere.'}
      ],
      tips:[
        'Test order: OXYGEN → FLAMMABLE → TOXIC. Nearly guaranteed exam question.',
        'Safe oxygen range 19.5%–23.5%. Memorise both ends.',
        'H₂S deadens your sense of smell — losing the smell means MORE danger.',
        'H₂S is heavier than air (collects low); methane is lighter (collects high).',
        'NEVER enter a confined space to attempt a rescue without training and equipment.',
        'An attendant must remain outside at all times.'
      ]
    },
    {
      id:'m10l2', title:'WHMIS, PPE, Lockout/Tagout &amp; Emergencies',
      need:'<b>WHMIS 2015</b> (aligned to GHS) requires supplier and workplace <b>labels</b>, <b>SDSs</b> and worker <b>training</b>. <b>PPE is the LAST line of defence</b> — engineering controls come first. <b>Lockout/tagout (LOTO)</b> means isolating and locking out all energy sources before servicing equipment, with each worker applying their own lock. Know spill response and emergency procedures.',
      learn:[
        '<b>WHMIS 2015</b> is Canada\'s hazard communication system, aligned with the international GHS. It rests on three pillars: <b>labels</b> (supplier labels on original containers, workplace labels on anything you decant), <b>Safety Data Sheets</b> in a standard 16-section format, and <b>worker education and training</b>. The pictograms — flame, corrosion, skull and crossbones, health hazard, gas cylinder and so on — are standardised and worth learning by sight.',
        'The <b>hierarchy of controls</b> is the framework behind every safety answer: <b>elimination → substitution → engineering controls → administrative controls → PPE</b>. PPE is deliberately last because it protects only the individual and only if worn correctly. On the exam, if an option offers an engineering control instead of just PPE, the engineering control is usually the better answer.',
        '<b>Lockout/tagout</b> prevents equipment from starting while someone is working on it. The procedure: notify affected workers, shut down, <b>isolate every energy source</b> (electrical, hydraulic, pneumatic, mechanical, thermal, and stored energy such as springs or pressure), apply locks and tags, <b>release stored energy</b>, and <b>verify zero energy by attempting to start</b>. Each worker applies their own personal lock and only that worker removes it.',
        '<b>Emergency response:</b> know your plant\'s plan before you need it — chemical spill procedures and spill kit locations, chlorine leak response (evacuate upwind and uphill; only trained responders with SCBA), fire, injury, evacuation routes and muster points, and the notification chain for reportable events.'
      ],
      operator:'Wear the PPE the SDS specifies for the actual task, not the PPE that is convenient. For caustic and acid handling that means chemical goggles plus a face shield, gloves rated for the chemical, and an apron — and a functioning, flushed eyewash within ten seconds\' reach. Test the eyewash and safety shower weekly and record it. If chemical contacts skin or eyes, <b>flush with water for at least 15 minutes</b> and get medical attention; do not stop early because it feels better.',
      equipment:'SDS station/binder, WHMIS labels, safety glasses/goggles/face shields, chemical gloves, aprons and suits, hearing protection, hard hats, steel-toed boots, respirators and fit-testing, fall protection, eyewash stations and safety showers, spill kits and absorbents, secondary containment, fire extinguishers, LOTO locks/hasps/tags, gas detectors, first aid kits.',
      trouble:[
        {p:'Chemical splashed in the eyes', c:'Flush at the eyewash for at least 15 minutes holding eyelids open; get medical attention; consult the SDS; report the incident.'},
        {p:'Unlabelled container found on site', c:'Do not use. Treat as hazardous, isolate it, identify it if possible, and apply a proper workplace label — WHMIS requires all containers be labelled.'},
        {p:'Equipment started while someone was working on it', c:'LOTO failure — energy source not isolated, lock not applied, or verification step skipped. Stop work and re-train; investigate as a serious near-miss.'},
        {p:'Chemical spill in the plant', c:'Protect yourself first, evacuate/isolate the area, stop the source if safe, contain with the spill kit, ventilate, consult the SDS, report per the emergency plan.'},
        {p:'Eyewash station has stagnant or discoloured water', c:'Not being flushed. Establish and document a weekly flushing/testing routine.'},
        {p:'Chlorine leak detected', c:'Evacuate upwind and uphill, activate the emergency plan, only trained personnel with SCBA respond. Never apply water to a chlorine leak.'}
      ],
      terms:[
        {t:'WHMIS 2015', d:'Canada\'s Workplace Hazardous Materials Information System, aligned with GHS: labels, SDSs and training.'},
        {t:'GHS', d:'Globally Harmonized System of classification and labelling of chemicals.'},
        {t:'Supplier label', d:'The manufacturer\'s hazard label on an original chemical container.'},
        {t:'Workplace label', d:'A label applied when a chemical is transferred to another container on site.'},
        {t:'Hierarchy of controls', d:'Elimination, substitution, engineering controls, administrative controls, then PPE — in that order of preference.'},
        {t:'Lockout/tagout (LOTO)', d:'Procedure isolating and locking all energy sources before servicing equipment, verified at zero energy.'},
        {t:'Stored energy', d:'Residual energy (pressure, springs, gravity, capacitance, heat) that must be released during LOTO.'},
        {t:'PPE', d:'Personal Protective Equipment — the last line of defence in the hierarchy of controls.'}
      ],
      tips:[
        'PPE is the LAST line of defence. Engineering controls rank higher — a common exam discriminator.',
        'WHMIS 2015 = labels + SDS + training. Know all three pillars.',
        'Each worker applies their OWN lock in LOTO, and only that worker removes it.',
        'LOTO must include releasing STORED energy and VERIFYING zero energy.',
        'Flush chemical exposures for at least 15 minutes.',
        'On any safety question, the most conservative, protective answer is almost always correct.'
      ]
    }
  ]
},
/* ============================ MODULE 11 ============================ */
{
  id:'m11', n:11, title:'Regulations &amp; Operator Responsibilities', duty:'SSA',
  blurb:'The BC and federal framework, certification rules, and what is expected of you as a certified operator.',
  lessons:[
    {
      id:'m11l1', title:'BC Regulatory Framework &amp; Operator Duties',
      need:'Know the layers: federal <b>Fisheries Act</b> and <b>Wastewater Systems Effluent Regulations (WSER)</b>; provincial <b>Environmental Management Act</b> and <b>Municipal Wastewater Regulation (MWR)</b>; and <b>EOCP</b> certification with <b>Continuing Education Units (CEUs)</b> for renewal. Core duties: operate within permit, keep accurate records, report exceedances, hold valid certification, and never falsify data.',
      learn:[
        'In Canada, wastewater regulation stacks in layers. Federally, the <b>Fisheries Act</b> prohibits depositing deleterious substances into waters frequented by fish, and the <b>Wastewater Systems Effluent Regulations (WSER)</b> set national baseline effluent standards (notably for CBOD, TSS and un-ionised ammonia) plus monitoring and reporting.',
        'Provincially in British Columbia, the <b>Environmental Management Act</b> is the enabling legislation, and the <b>Municipal Wastewater Regulation</b> sets requirements for municipal discharges, reclaimed water and biosolids. Individual facilities also operate under a <b>permit or operational certificate</b> with site-specific limits — and your permit is the document that governs your day-to-day obligations.',
        '<b>Facility classification</b> determines what level of certified operator is required. Plants are classified by complexity and size, and the facility must have a certified operator appropriate to that classification, plus a designated <b>operator in responsible charge</b>.',
        'Your certification is not permanent. <b>EOCP requires Continuing Education Units (CEUs) to renew</b> — ongoing training keeps your certificate valid. Certification also carries a professional obligation: operate within your permit, maintain accurate and complete records, report exceedances and bypasses promptly, work within your level of competence, and never falsify or misrepresent data. Falsification is among the most serious offences in the profession and can end a career.'
      ],
      operator:'Read your own permit and know its limits, monitoring frequencies and reporting deadlines by heart — an inspector will assume you do. Track your CEUs as you earn them rather than scrambling at renewal. If you are asked to do something outside your certification level or that would breach the permit, that is the moment to escalate in writing, not to quietly comply.',
      equipment:'Permit/operational certificate documents, regulatory reporting templates, monitoring records, EOCP certificate and CEU records, plant classification documentation, emergency and spill response plans.',
      trouble:[
        {p:'Effluent limit exceeded', c:'Verify the result, identify and correct the cause, document all actions, and report to the regulator within the required timeframe. Do not wait for the monthly report.'},
        {p:'Certification about to expire', c:'Insufficient CEUs accumulated. Track CEUs continuously and plan training well ahead of renewal.'},
        {p:'Plant upgraded or expanded', c:'Classification may change, requiring a higher operator certification level. Confirm the classification and staffing requirements.'},
        {p:'Asked to sign off on data you did not verify or believe is wrong', c:'Do not sign. Escalate in writing. Falsifying records is a serious regulatory and professional offence.'},
        {p:'Bypass or overflow occurs', c:'Document time, volume, cause and receiving environment; notify per the permit and regulation; take corrective action.'}
      ],
      terms:[
        {t:'Fisheries Act', d:'Federal legislation prohibiting deposit of deleterious substances into fish-bearing waters.'},
        {t:'WSER', d:'Wastewater Systems Effluent Regulations — federal baseline effluent standards and reporting requirements.'},
        {t:'Environmental Management Act', d:'British Columbia\'s principal environmental protection legislation.'},
        {t:'Municipal Wastewater Regulation (MWR)', d:'BC regulation governing municipal wastewater discharge, reclaimed water and biosolids.'},
        {t:'Operational certificate / permit', d:'The site-specific authorisation setting a facility\'s effluent limits, monitoring and reporting obligations.'},
        {t:'EOCP', d:'Environmental Operators Certification Program — the body certifying water and wastewater operators in BC and Yukon.'},
        {t:'CEU', d:'Continuing Education Unit — training credit required to maintain EOCP certification.'},
        {t:'Operator in responsible charge', d:'The certified operator designated as responsible for a facility\'s operation.'},
        {t:'Facility classification', d:'The rating of a plant by size and complexity, which sets the required operator certification level.'}
      ],
      tips:[
        'Federal: Fisheries Act + WSER. Provincial BC: Environmental Management Act + Municipal Wastewater Regulation.',
        'EOCP certification requires CEUs to renew.',
        'Report exceedances promptly — never delay to the next scheduled report.',
        'Never falsify records. It is the most serious professional offence on this list.',
        'Facility classification determines the required operator certification level.'
      ]
    }
  ]
},
/* ============================ MODULE 12 ============================ */
{
  id:'m12', n:12, title:'Wastewater Mathematics', duty:'TPE',
  blurb:'About 14% of the exam is calculations. The full formula set, worked, is in the Math section — this module teaches the approach.',
  lessons:[
    {
      id:'m12l1', title:'How to Attack Exam Math',
      need:'You get a <b>formula/conversion sheet</b> at the exam, so the skill being tested is <b>choosing the right formula and handling units</b>, not memorisation. Master: metric conversions, area and volume, flow, detention time, loading (kg/day), dosing, and percent removal.',
      learn:[
        'The single biggest cause of lost marks is not arithmetic — it is <b>units</b>. Read what the question gives you and what it wants, and convert before you calculate. Litres to cubic metres, mg/L to kg/day, minutes to days: get these right and most questions become one substitution.',
        'A reliable four-step method: <b>(1) Write down what you are given, with units. (2) Write down what is asked, with units. (3) Pick the formula that connects them. (4) Convert units first, then substitute and solve.</b> Do not try to do it all in one line in your head.',
        'The metric relationships worth knowing cold: <b>1 m³ = 1,000 L</b>, <b>1 ML = 1,000 m³ = 1,000,000 L</b>, <b>1 mg/L = 1 g/m³</b>, and for water <b>1 L ≈ 1 kg</b>. That last one is why the metric loading formula is so clean: <b>kg/day = mg/L × ML/day</b>.',
        'The most-used relationships: <b>Volume = L × W × D</b> (rectangular) or <b>π r² × depth</b> (circular); <b>Q = V × A</b>; <b>Detention time = Volume ÷ Flow</b>; <b>Loading = concentration × flow</b>; <b>% removal = (In − Out) ÷ In × 100</b>.',
        'Finally, <b>sanity-check every answer.</b> A detention time of 400 hours in a clarifier, or a chemical dose of 5,000 kg/day at a small plant, means you dropped a conversion. Ask "is this physically plausible?" before you move on.'
      ],
      operator:'These are the calculations you genuinely use: how much chemical to order, whether a tank has enough detention at today\'s flow, what your removal efficiency is, how long to run a pump. Doing them by habit at work is the best exam preparation there is — and it catches real problems, like a dosing rate that cannot possibly be right.',
      equipment:'Non-programmable calculator (confirm what is permitted for your exam), the provided ABC/EOCP formula and conversion table, scrap paper.',
      trouble:[
        {p:'Answer is off by a factor of 1,000 or 1,000,000', c:'A metric prefix conversion was missed — L vs m³ vs ML, or mg vs g vs kg.'},
        {p:'Answer is off by a factor of 60 or 1,440', c:'Time units — seconds/minutes/hours/days not converted.'},
        {p:'Chose a plausible-looking formula and got a strange answer', c:'Wrong formula for the quantity asked. Re-read what is being asked and check the units of the answer match.'},
        {p:'Circular tank volume wrong', c:'Used diameter instead of radius in π r². Radius = diameter ÷ 2.'},
        {p:'Running out of time on the exam', c:'Do all the recall questions first, then come back to calculations. Never leave a multiple-choice answer blank.'}
      ],
      terms:[
        {t:'Detention time', d:'Volume ÷ Flow — average time water spends in a tank.'},
        {t:'Loading', d:'Mass of a constituent applied per day = concentration × flow (with unit conversion).'},
        {t:'Percent removal', d:'(Influent − Effluent) ÷ Influent × 100.'},
        {t:'Dose', d:'Concentration of chemical added, mg/L; converts to mass/day via flow.'},
        {t:'Significant figures', d:'The digits in a value that carry meaning; do not report more precision than your data supports.'}
      ],
      tips:[
        'You are given a formula sheet — practise USING it rather than memorising it.',
        'Convert units BEFORE substituting into the formula.',
        '1 m³ = 1,000 L. 1 ML = 1,000 m³. 1 mg/L = 1 g/m³.',
        'Metric loading: kg/day = mg/L × ML/day. US: lbs/day = mg/L × MGD × 8.34.',
        'Circular area uses RADIUS, not diameter.',
        'Sanity-check every answer for physical plausibility.',
        'Never leave a multiple-choice question blank — there is no penalty for guessing.'
      ]
    }
  ]
}
];

/* Flatten helper — every lesson with its module attached */
const ALL_LESSONS = CURRICULUM.flatMap(m =>
  m.lessons.map(l => ({ ...l, moduleId:m.id, moduleTitle:m.title, moduleN:m.n, duty:m.duty }))
);

/* Glossary built from every lesson's terms, de-duplicated and sorted */
const GLOSSARY = (() => {
  const seen = new Map();
  ALL_LESSONS.forEach(l => (l.terms||[]).forEach(t => {
    if (!seen.has(t.t.toLowerCase())) seen.set(t.t.toLowerCase(), { ...t, from:l.moduleTitle });
  }));
  return [...seen.values()].sort((a,b) => a.t.localeCompare(b.t));
})();

window.DUTIES = DUTIES;
window.CURRICULUM = CURRICULUM;
window.ALL_LESSONS = ALL_LESSONS;
window.GLOSSARY = GLOSSARY;
