/* math.js — wastewater mathematics training.
 *
 * Each topic: {
 *   id, title, cat,
 *   formula   : the formula as displayed,
 *   vars      : [{s:symbol, m:meaning, u:units}],
 *   when      : when to use this formula (the judgement part)
 *   worked    : {q, steps:[], a}
 *   practice  : [{lvl:'Easy'|'Medium'|'Hard'|'US Units', q, a:number, tol:number, u:units, e:explanation}]
 * }
 * Answers are checked numerically against `a` within tolerance `tol`.
 *
 * UNITS — IMPORTANT: WPI presents calculation items in BOTH US Standard and Metric
 * units, US Standard first with metric in parentheses, and each item is solvable in
 * either system independently. Every topic below therefore carries a 'US Units'
 * practice problem alongside the metric ones. Source: WPI standardized wastewater
 * treatment operator exam documentation.
 *
 * Formula forms follow the CURRENT ABC/EOCP Canadian Formula & Conversion Table
 * (ABC 2018 wastewater sheet as distributed by EOCP, and the 2022 EOCP guide to
 * using those formulas). That table is PROVIDED at the exam — practise selecting
 * and using formulas, not memorising them.
 */

const CONVERSIONS = [
  {c:'Volume', a:'1 m³', b:'1,000 L'},
  {c:'Volume', a:'1 ML (megalitre)', b:'1,000 m³ = 1,000,000 L'},
  {c:'Volume', a:'1 m³', b:'264.2 US gallons'},
  {c:'Volume', a:'1 ft³', b:'7.48 US gallons = 28.32 L'},
  {c:'Mass', a:'1 kg', b:'1,000 g = 2.205 lbs'},
  {c:'Mass/Volume', a:'1 mg/L', b:'1 g/m³ = 1 ppm (dilute water)'},
  {c:'Mass/Volume', a:'1 L of water', b:'≈ 1 kg'},
  {c:'Length', a:'1 m', b:'3.281 ft'},
  {c:'Length', a:'1 ft', b:'0.3048 m = 12 in'},
  {c:'Area', a:'1 m²', b:'10.76 ft²'},
  {c:'Time', a:'1 day', b:'24 h = 1,440 min = 86,400 s'},
  {c:'Flow', a:'1 m³/day', b:'1,000 L/day'},
  {c:'Flow', a:'1 ML/day', b:'1,000 m³/day = 11.57 L/s'},
  {c:'Flow', a:'1 MGD (US)', b:'3,785 m³/day'},
  {c:'Pressure', a:'1 psi', b:'2.31 ft of water head = 6.895 kPa'},
  {c:'Pressure', a:'1 m of water head', b:'9.81 kPa'},
  {c:'Volume', a:'1 US gallon', b:'3.785 L = 0.1337 ft³'},
  {c:'Volume', a:'1 MG (million gallons)', b:'3,785 m³ = 133,681 ft³'},
  {c:'Flow', a:'1 MGD', b:'694.4 gpm = 1.547 ft³/s'},
  {c:'Flow', a:'1 gpm', b:'1,440 gpd'},
  {c:'Constant', a:'8.34', b:'lbs per US gallon of water (US loading formula)'},
  {c:'Constant', a:'62.4', b:'lbs per ft³ of water'},
  {c:'Constant', a:'7.48', b:'US gallons per ft³'},
  {c:'Constant', a:'π (pi)', b:'3.1416'},
  {c:'Temperature', a:'°C', b:'(°F − 32) × 5/9'},
  {c:'Temperature', a:'°F', b:'(°C × 9/5) + 32'}
];

const MATH_TOPICS = [
{
  id:'mt1', cat:'Foundations', title:'Metric Conversions',
  formula:'Move the decimal by powers of 10:  L ↔ m³ ↔ ML  |  mg ↔ g ↔ kg',
  vars:[
    {s:'1 m³', m:'one cubic metre', u:'= 1,000 L'},
    {s:'1 ML', m:'one megalitre', u:'= 1,000 m³ = 1,000,000 L'},
    {s:'1 kg', m:'one kilogram', u:'= 1,000 g = 1,000,000 mg'},
    {s:'1 mg/L', m:'one milligram per litre', u:'= 1 g/m³'}
  ],
  when:'Before every other calculation. Most wrong answers on the exam are unit errors, not arithmetic errors. Convert everything into one consistent system FIRST, then substitute.',
  worked:{
    q:'A tank holds 45,000 L. Express this in m³ and in ML.',
    steps:[
      '1 m³ = 1,000 L, so divide litres by 1,000.',
      '45,000 L ÷ 1,000 = 45 m³',
      '1 ML = 1,000 m³, so divide m³ by 1,000.',
      '45 m³ ÷ 1,000 = 0.045 ML'
    ],
    a:'45 m³ = 0.045 ML'
  },
  practice:[
    {lvl:'Easy', q:'Convert 8,500 L to cubic metres.', a:8.5, tol:0.05, u:'m³',
     e:'8,500 ÷ 1,000 = 8.5 m³.'},
    {lvl:'Medium', q:'Convert 2,750 m³/day to ML/day.', a:2.75, tol:0.02, u:'ML/day',
     e:'1 ML = 1,000 m³, so 2,750 ÷ 1,000 = 2.75 ML/day.'},
    {lvl:'Hard', q:'A plant flow is 62 L/s. What is this in m³/day?', a:5356.8, tol:20, u:'m³/day',
     e:'62 L/s × 86,400 s/day = 5,356,800 L/day. ÷ 1,000 = 5,356.8 m³/day.'},
    {lvl:'US Units', q:'Convert 2.5 MGD to gallons per minute (gpm).', a:1736, tol:15, u:'gpm',
     e:'2.5 MGD = 2,500,000 gal/day ÷ 1,440 min/day = 1,736 gpm. (Shortcut: 1 MGD = 694.4 gpm, so 2.5 x 694.4 = 1,736.)'}
  ]
},
{
  id:'mt2', cat:'Foundations', title:'Area',
  formula:'Rectangle:  A = Length × Width\nCircle:  A = π × r²   (r = diameter ÷ 2)',
  vars:[
    {s:'A', m:'Area', u:'m² or ft²'},
    {s:'r', m:'Radius — HALF the diameter', u:'m or ft'},
    {s:'π', m:'Pi', u:'3.1416'}
  ],
  when:'Whenever you need surface overflow rate, hydraulic loading, or as the first step in a volume calculation. The single most common error is using diameter where the formula calls for radius.',
  worked:{
    q:'Find the surface area of a circular clarifier 18 m in diameter.',
    steps:[
      'Convert diameter to radius: r = 18 ÷ 2 = 9 m',
      'A = π × r² = 3.1416 × 9²',
      'A = 3.1416 × 81',
      'A = 254.5 m²'
    ],
    a:'254.5 m²'
  },
  practice:[
    {lvl:'Easy', q:'A rectangular tank is 15 m long and 6 m wide. What is the surface area in m²?', a:90, tol:0.5, u:'m²',
     e:'A = 15 × 6 = 90 m².'},
    {lvl:'Medium', q:'A circular clarifier is 24 m in diameter. What is its surface area in m²?', a:452.4, tol:3, u:'m²',
     e:'r = 24 ÷ 2 = 12 m. A = π × 12² = 3.1416 × 144 = 452.4 m².'},
    {lvl:'Hard', q:'A circular tank has a circumference of 47.1 m. What is its surface area in m²?', a:176.6, tol:3, u:'m²',
     e:'Circumference = 2πr, so r = 47.1 ÷ (2 × 3.1416) = 7.5 m. A = π × 7.5² = 176.7 m².'},
    {lvl:'US Units', q:'A circular clarifier is 60 ft in diameter. What is its surface area in ft²?', a:2827, tol:25, u:'ft²',
     e:'r = 60 ÷ 2 = 30 ft. A = pi x 30² = 3.1416 x 900 = 2,827 ft². Using diameter instead of radius is the classic trap.'}
  ]
},
{
  id:'mt3', cat:'Foundations', title:'Volume',
  formula:'Rectangular tank:  V = Length × Width × Depth\nCircular tank:  V = π × r² × Depth',
  vars:[
    {s:'V', m:'Volume', u:'m³ (1 m³ = 1,000 L)'},
    {s:'L, W, D', m:'Length, Width, Depth', u:'m'},
    {s:'r', m:'Radius = diameter ÷ 2', u:'m'}
  ],
  when:'Needed for detention time, for chemical batch make-up, for tank capacity, and for estimating how long a tank takes to fill or drain.',
  worked:{
    q:'Find the volume in m³ and litres of a rectangular tank 10 m long, 4 m wide, with water 2.5 m deep.',
    steps:[
      'V = L × W × D',
      'V = 10 × 4 × 2.5',
      'V = 100 m³',
      'Convert: 100 m³ × 1,000 L/m³ = 100,000 L'
    ],
    a:'100 m³ = 100,000 L'
  },
  practice:[
    {lvl:'Easy', q:'A tank is 8 m long, 3 m wide with water 2 m deep. What is the volume in m³?', a:48, tol:0.5, u:'m³',
     e:'V = 8 × 3 × 2 = 48 m³.'},
    {lvl:'Medium', q:'A circular tank is 10 m in diameter with water 3.5 m deep. What is the volume in m³?', a:274.9, tol:3, u:'m³',
     e:'r = 5 m. A = π × 5² = 78.54 m². V = 78.54 × 3.5 = 274.9 m³.'},
    {lvl:'Hard', q:'A circular tank 14 m in diameter holds water 4 m deep. What is the volume in LITRES?', a:615752, tol:5000, u:'L',
     e:'r = 7 m. A = π × 49 = 153.9 m². V = 153.9 × 4 = 615.8 m³ × 1,000 = 615,752 L.'},
    {lvl:'US Units', q:'A tank is 40 ft long, 20 ft wide with water 10 ft deep. What is the volume in GALLONS?', a:59840, tol:500, u:'gallons',
     e:'V = 40 x 20 x 10 = 8,000 ft³. Convert: 8,000 x 7.48 gal/ft³ = 59,840 gallons.'}
  ]
},
{
  id:'mt4', cat:'Flow', title:'Flow Rate (Q = V × A)',
  formula:'Q = V × A',
  vars:[
    {s:'Q', m:'Flow rate', u:'m³/s (or m³/min, m³/day)'},
    {s:'V', m:'Velocity', u:'m/s'},
    {s:'A', m:'Cross-sectional area of flow', u:'m²'}
  ],
  when:'Whenever you know two of flow, velocity and area and need the third. Used for channel velocity checks (grit chambers, screens) and for pipe sizing. Rearranges to V = Q ÷ A.',
  worked:{
    q:'A grit channel is 1.2 m wide with water 0.4 m deep. Flow is 0.15 m³/s. Is the velocity in the correct range for grit removal?',
    steps:[
      'A = width × depth = 1.2 × 0.4 = 0.48 m²',
      'Rearrange Q = V × A  →  V = Q ÷ A',
      'V = 0.15 ÷ 0.48',
      'V = 0.3125 m/s',
      'Target for a horizontal grit channel is about 0.3 m/s — this is correct.'
    ],
    a:'0.31 m/s — within the correct range'
  },
  practice:[
    {lvl:'Easy', q:'A channel has a flow area of 0.5 m² and velocity 0.6 m/s. What is the flow in m³/s?', a:0.3, tol:0.01, u:'m³/s',
     e:'Q = V × A = 0.6 × 0.5 = 0.3 m³/s.'},
    {lvl:'Medium', q:'A channel is 0.9 m wide with water 0.45 m deep carrying 0.162 m³/s. What is the velocity in m/s?', a:0.4, tol:0.02, u:'m/s',
     e:'A = 0.9 × 0.45 = 0.405 m². V = Q ÷ A = 0.162 ÷ 0.405 = 0.4 m/s.'},
    {lvl:'Hard', q:'A 0.3 m diameter pipe flows full at 1.2 m/s. What is the flow in m³/day?', a:7331, tol:80, u:'m³/day',
     e:'r = 0.15 m. A = π × 0.15² = 0.0707 m². Q = 1.2 × 0.0707 = 0.0848 m³/s × 86,400 = 7,331 m³/day.'}
  ]
},
{
  id:'mt5', cat:'Process', title:'Detention Time',
  formula:'Detention Time = Volume ÷ Flow',
  vars:[
    {s:'DT', m:'Detention time (hydraulic retention time)', u:'hours or days'},
    {s:'V', m:'Tank volume', u:'m³'},
    {s:'Q', m:'Flow rate', u:'m³/day or m³/h'}
  ],
  when:'To check whether a tank gives enough contact/settling time at the current flow. Key targets: primary clarifier 1.5–2.5 h; chlorine contact chamber often 15–30 min at peak flow; aeration basin typically 4–8 h.',
  worked:{
    q:'A primary clarifier holds 340 m³ and treats 3,200 m³/day. What is the detention time in hours?',
    steps:[
      'DT = V ÷ Q = 340 ÷ 3,200 = 0.10625 days',
      'Convert days to hours: × 24',
      'DT = 0.10625 × 24 = 2.55 hours',
      'This sits at the top of the typical 1.5–2.5 h range.'
    ],
    a:'2.55 hours'
  },
  practice:[
    {lvl:'Easy', q:'A tank holds 500 m³ and flow is 2,000 m³/day. What is the detention time in hours?', a:6, tol:0.1, u:'hours',
     e:'DT = 500 ÷ 2,000 = 0.25 days × 24 = 6 hours.'},
    {lvl:'Medium', q:'A chlorine contact chamber holds 75 m³ with flow of 3,600 m³/day. What is the contact time in MINUTES?', a:30, tol:0.5, u:'minutes',
     e:'DT = 75 ÷ 3,600 = 0.02083 days × 1,440 min/day = 30 minutes.'},
    {lvl:'Hard', q:'A circular clarifier 16 m in diameter with a 3 m side water depth treats 4,800 m³/day. Detention time in hours?', a:3.02, tol:0.15, u:'hours',
     e:'r = 8 m. A = π × 64 = 201.1 m². V = 201.1 × 3 = 603.2 m³. DT = 603.2 ÷ 4,800 = 0.1257 days × 24 = 3.02 hours.'},
    {lvl:'US Units', q:'A clarifier holds 90,000 gallons and treats 0.72 MGD. What is the detention time in hours?', a:3, tol:0.1, u:'hours',
     e:'DT = V ÷ Q = 90,000 gal ÷ 720,000 gal/day = 0.125 days x 24 = 3.0 hours.'}
  ]
},
{
  id:'mt6', cat:'Process', title:'Surface Overflow Rate (SOR)',
  formula:'SOR = Flow ÷ Surface Area',
  vars:[
    {s:'SOR', m:'Surface overflow rate (surface loading rate)', u:'m³/m²·day'},
    {s:'Q', m:'Flow rate', u:'m³/day'},
    {s:'A', m:'Clarifier SURFACE area (plan area)', u:'m²'}
  ],
  when:'To judge whether a clarifier is hydraulically overloaded. It is effectively the upward velocity of water — any particle settling slower than this is carried over the weir. Depth does not appear in the formula.',
  worked:{
    q:'A circular clarifier 20 m in diameter treats 3,500 m³/day. What is the SOR?',
    steps:[
      'r = 20 ÷ 2 = 10 m',
      'A = π × r² = 3.1416 × 100 = 314.2 m²',
      'SOR = Q ÷ A = 3,500 ÷ 314.2',
      'SOR = 11.1 m³/m²·day'
    ],
    a:'11.1 m³/m²·day'
  },
  practice:[
    {lvl:'Easy', q:'A clarifier with 200 m² of surface area treats 3,000 m³/day. What is the SOR in m³/m²·day?', a:15, tol:0.3, u:'m³/m²·day',
     e:'SOR = 3,000 ÷ 200 = 15 m³/m²·day.'},
    {lvl:'Medium', q:'A circular clarifier is 15 m in diameter and treats 2,400 m³/day. What is the SOR?', a:13.6, tol:0.4, u:'m³/m²·day',
     e:'r = 7.5 m. A = π × 56.25 = 176.7 m². SOR = 2,400 ÷ 176.7 = 13.6 m³/m²·day.'},
    {lvl:'Hard', q:'A rectangular clarifier 30 m × 8 m must not exceed an SOR of 25 m³/m²·day. What is the maximum flow in m³/day?', a:6000, tol:60, u:'m³/day',
     e:'A = 30 × 8 = 240 m². Q = SOR × A = 25 × 240 = 6,000 m³/day.'},
    {lvl:'US Units', q:'A circular clarifier 50 ft in diameter treats 0.55 MGD. What is the SOR in gpd/ft²?', a:280, tol:6, u:'gpd/ft²',
     e:'r = 25 ft. A = pi x 625 = 1,963.5 ft². SOR = 550,000 gpd ÷ 1,963.5 = 280 gpd/ft².'}
  ]
},
{
  id:'mt7', cat:'Process', title:'Weir Overflow Rate',
  formula:'Weir Overflow Rate = Flow ÷ Weir Length',
  vars:[
    {s:'WOR', m:'Weir overflow rate (weir loading)', u:'m³/m·day'},
    {s:'Q', m:'Flow rate', u:'m³/day'},
    {s:'L', m:'Total effluent weir LENGTH', u:'m'}
  ],
  when:'To check whether the flow leaving over the weirs is drawing solids up with it. For a circular clarifier with a peripheral weir, weir length = circumference = π × diameter.',
  worked:{
    q:'A circular clarifier 18 m in diameter has a peripheral weir and treats 3,000 m³/day. Find the weir overflow rate.',
    steps:[
      'Weir length = circumference = π × diameter',
      'L = 3.1416 × 18 = 56.5 m',
      'WOR = Q ÷ L = 3,000 ÷ 56.5',
      'WOR = 53.1 m³/m·day'
    ],
    a:'53.1 m³/m·day'
  },
  practice:[
    {lvl:'Easy', q:'A clarifier has 40 m of weir and treats 2,000 m³/day. What is the weir overflow rate in m³/m·day?', a:50, tol:1, u:'m³/m·day',
     e:'WOR = 2,000 ÷ 40 = 50 m³/m·day.'},
    {lvl:'Medium', q:'A circular clarifier 12 m in diameter with a peripheral weir treats 1,500 m³/day. Weir overflow rate?', a:39.8, tol:1.5, u:'m³/m·day',
     e:'L = π × 12 = 37.7 m. WOR = 1,500 ÷ 37.7 = 39.8 m³/m·day.'},
    {lvl:'Hard', q:'A circular clarifier 22 m in diameter has a peripheral weir. Maximum allowable WOR is 120 m³/m·day. What is the maximum flow in m³/day?', a:8294, tol:120, u:'m³/day',
     e:'L = π × 22 = 69.1 m. Q = 120 × 69.1 = 8,294 m³/day.'},
    {lvl:'US Units', q:'A circular clarifier 40 ft in diameter has a peripheral weir and treats 0.6 MGD. What is the weir overflow rate in gpd/ft?', a:4775, tol:60, u:'gpd/ft',
     e:'Weir length = pi x 40 = 125.7 ft. WOR = 600,000 ÷ 125.7 = 4,775 gpd/ft.'}
  ]
},
{
  id:'mt8', cat:'Loading', title:'Mass Loading (kg/day)',
  formula:'METRIC:  kg/day = Concentration (mg/L) × Flow (ML/day)\nUS:  lbs/day = Concentration (mg/L) × Flow (MGD) × 8.34',
  vars:[
    {s:'kg/day', m:'Mass of constituent per day', u:'kg/day'},
    {s:'Conc.', m:'Concentration', u:'mg/L'},
    {s:'Flow', m:'Flow rate', u:'ML/day (metric) or MGD (US)'},
    {s:'8.34', m:'lbs per US gallon of water', u:'US formula only'}
  ],
  when:'Whenever you need MASS rather than concentration: BOD load on an aeration basin, solids load to a digester, chemical usage, or F/M calculations. The metric form is clean because 1 mg/L in 1 ML = 1 kg.',
  worked:{
    q:'A plant treats 5.5 ML/day with an influent BOD of 190 mg/L. What is the BOD load in kg/day?',
    steps:[
      'kg/day = mg/L × ML/day',
      'kg/day = 190 × 5.5',
      'kg/day = 1,045 kg/day'
    ],
    a:'1,045 kg/day of BOD'
  },
  practice:[
    {lvl:'Easy', q:'Flow is 4.0 ML/day and TSS is 220 mg/L. What is the TSS load in kg/day?', a:880, tol:8, u:'kg/day',
     e:'kg/day = 220 × 4.0 = 880 kg/day.'},
    {lvl:'Medium', q:'Flow is 3,200 m³/day with BOD of 175 mg/L. What is the BOD load in kg/day?', a:560, tol:6, u:'kg/day',
     e:'Convert flow: 3,200 m³/day = 3.2 ML/day. kg/day = 175 × 3.2 = 560 kg/day.'},
    {lvl:'Hard', q:'A plant removes 2,100 kg/day of BOD while treating 7.0 ML/day. Effluent BOD is 15 mg/L. What is the INFLUENT BOD in mg/L?', a:315, tol:4, u:'mg/L',
     e:'BOD removed as concentration = 2,100 ÷ 7.0 = 300 mg/L. Influent = removed + effluent = 300 + 15 = 315 mg/L.'},
    {lvl:'US Units', q:'A plant treats 1.8 MGD with an influent BOD of 210 mg/L. What is the BOD load in lbs/day?', a:3153, tol:30, u:'lbs/day',
     e:'lbs/day = mg/L x MGD x 8.34 = 210 x 1.8 x 8.34 = 3,152.5 lbs/day.'}
  ]
},
{
  id:'mt9', cat:'Loading', title:'Percent Removal',
  formula:'% Removal = [(Influent − Effluent) ÷ Influent] × 100',
  vars:[
    {s:'Influent', m:'Concentration entering the process', u:'mg/L'},
    {s:'Effluent', m:'Concentration leaving the process', u:'mg/L'}
  ],
  when:'To report performance of a unit or the whole plant, and to check against permit removal requirements. Flow is NOT needed — this is a ratio of concentrations (provided flow is the same in and out).',
  worked:{
    q:'Influent BOD is 205 mg/L; effluent BOD is 12 mg/L. What is the percent removal?',
    steps:[
      '% Removal = (In − Out) ÷ In × 100',
      '= (205 − 12) ÷ 205 × 100',
      '= 193 ÷ 205 × 100',
      '= 94.1%'
    ],
    a:'94.1% BOD removal'
  },
  practice:[
    {lvl:'Easy', q:'Influent TSS 200 mg/L, effluent TSS 20 mg/L. Percent removal?', a:90, tol:0.5, u:'%',
     e:'(200 − 20) ÷ 200 × 100 = 90%.'},
    {lvl:'Medium', q:'A primary clarifier reduces TSS from 240 mg/L to 84 mg/L. Percent removal?', a:65, tol:0.5, u:'%',
     e:'(240 − 84) ÷ 240 × 100 = 156 ÷ 240 × 100 = 65%. Right in the typical 50–70% primary range.'},
    {lvl:'Hard', q:'A plant must achieve 85% BOD removal. Influent BOD is 240 mg/L. What is the maximum allowable effluent BOD in mg/L?', a:36, tol:0.5, u:'mg/L',
     e:'If 85% is removed, 15% remains. 240 × 0.15 = 36 mg/L.'}
  ]
},
{
  id:'mt10', cat:'Chemical', title:'Chemical Dosing',
  formula:'METRIC:  kg/day = Dose (mg/L) × Flow (ML/day)\nIf solution < 100%:  divide by decimal purity',
  vars:[
    {s:'Dose', m:'Required chemical concentration', u:'mg/L'},
    {s:'Flow', m:'Flow being treated', u:'ML/day'},
    {s:'Purity', m:'Decimal strength of the product', u:'e.g. 50% → 0.50'}
  ],
  when:'To convert a jar-test dose (mg/L) into how much product to actually feed or order. Always check whether the product is pure or a solution — this is where most dosing errors happen.',
  worked:{
    q:'A jar test gives an optimum dose of 32 mg/L. Flow is 2.4 ML/day. The coagulant is supplied as a 48% solution. How many kg/day of PRODUCT are needed?',
    steps:[
      'First find the active chemical needed:',
      'kg/day (active) = 32 × 2.4 = 76.8 kg/day',
      'Now correct for solution strength — divide by decimal purity:',
      'kg/day (product) = 76.8 ÷ 0.48',
      'kg/day (product) = 160 kg/day'
    ],
    a:'160 kg/day of product'
  },
  practice:[
    {lvl:'Easy', q:'Dose 20 mg/L, flow 5.0 ML/day, pure chemical. How many kg/day?', a:100, tol:1, u:'kg/day',
     e:'kg/day = 20 × 5.0 = 100 kg/day.'},
    {lvl:'Medium', q:'Dose 15 mg/L, flow 3,600 m³/day, product is a 60% solution. kg/day of product?', a:90, tol:1, u:'kg/day',
     e:'Flow = 3.6 ML/day. Active = 15 × 3.6 = 54 kg/day. Product = 54 ÷ 0.60 = 90 kg/day.'},
    {lvl:'Hard', q:'You are feeding 120 kg/day of a 40% polymer solution to a flow of 4.0 ML/day. What is the actual dose in mg/L of active polymer?', a:12, tol:0.3, u:'mg/L',
     e:'Active chemical = 120 × 0.40 = 48 kg/day. Dose = 48 ÷ 4.0 ML/day = 12 mg/L.'},
    {lvl:'US Units', q:'A dose of 12 mg/L is needed at a flow of 2.2 MGD, using a pure chemical. How many lbs/day are required?', a:220, tol:3, u:'lbs/day',
     e:'lbs/day = 12 x 2.2 x 8.34 = 220.2 lbs/day.'}
  ]
},
{
  id:'mt11', cat:'Chemical', title:'Dilution &amp; Mixing (C₁V₁ = C₂V₂)',
  formula:'C₁ × V₁ = C₂ × V₂',
  vars:[
    {s:'C₁', m:'Concentration of the strong (stock) solution', u:'% or mg/L'},
    {s:'V₁', m:'Volume of stock solution needed', u:'L'},
    {s:'C₂', m:'Desired final concentration', u:'same units as C₁'},
    {s:'V₂', m:'Desired final volume', u:'same units as V₁'}
  ],
  when:'When making up a batch of chemical from a concentrate, preparing lab standards, or working out how much stock you need for a given tank. Keep C₁ and C₂ in the same units and V₁ and V₂ in the same units.',
  worked:{
    q:'You need 200 L of a 2% solution. Your stock is 50%. How much stock do you need?',
    steps:[
      'C₁V₁ = C₂V₂  →  V₁ = (C₂ × V₂) ÷ C₁',
      'V₁ = (2% × 200 L) ÷ 50%',
      'V₁ = 400 ÷ 50',
      'V₁ = 8 L of stock, topped up with water to 200 L total'
    ],
    a:'8 L of stock solution, diluted to 200 L'
  },
  practice:[
    {lvl:'Easy', q:'You need 100 L of a 5% solution from a 50% stock. How many litres of stock are required?', a:10, tol:0.3, u:'L',
     e:'V₁ = (5 × 100) ÷ 50 = 10 L.'},
    {lvl:'Medium', q:'How many litres of 12% sodium hypochlorite are needed to make 500 L of 1.5% solution?', a:62.5, tol:1.5, u:'L',
     e:'V₁ = (1.5 × 500) ÷ 12 = 750 ÷ 12 = 62.5 L.'},
    {lvl:'Hard', q:'You add 25 L of 40% polymer to a tank and fill to 1,000 L total. What is the final concentration as a percentage?', a:1, tol:0.05, u:'%',
     e:'C₂ = (C₁ × V₁) ÷ V₂ = (40 × 25) ÷ 1,000 = 1,000 ÷ 1,000 = 1%.'}
  ]
},
{
  id:'mt12', cat:'Activated Sludge', title:'Sludge Volume Index (SVI)',
  formula:'SVI = (30-minute settled volume, mL/L × 1,000) ÷ MLSS, mg/L',
  vars:[
    {s:'SVI', m:'Sludge Volume Index', u:'mL/g'},
    {s:'SV₃₀', m:'Settled sludge volume after 30 minutes', u:'mL/L'},
    {s:'MLSS', m:'Mixed liquor suspended solids', u:'mg/L'}
  ],
  when:'Daily, to judge how well your sludge settles. Under 100 = good settling. Over 150 = bulking, usually filamentous — check DO first. It is the cheapest early warning you have.',
  worked:{
    q:'A settleometer reads 320 mL/L after 30 minutes and MLSS is 2,400 mg/L. Calculate the SVI and interpret it.',
    steps:[
      'SVI = (SV₃₀ × 1,000) ÷ MLSS',
      'SVI = (320 × 1,000) ÷ 2,400',
      'SVI = 320,000 ÷ 2,400',
      'SVI = 133 mL/g',
      'Interpretation: between 100 and 150 — settling is marginal and trending toward bulking. Watch DO and trend it daily.'
    ],
    a:'SVI = 133 — marginal, watch for bulking'
  },
  practice:[
    {lvl:'Easy', q:'SV₃₀ = 250 mL/L and MLSS = 2,500 mg/L. What is the SVI?', a:100, tol:2, u:'mL/g',
     e:'SVI = (250 × 1,000) ÷ 2,500 = 100.'},
    {lvl:'Medium', q:'SV₃₀ = 400 mL/L and MLSS = 2,000 mg/L. What is the SVI?', a:200, tol:3, u:'mL/g',
     e:'SVI = (400 × 1,000) ÷ 2,000 = 200. Over 150 — this sludge is bulking. Check DO.'},
    {lvl:'Hard', q:'SVI is 90 and MLSS is 3,200 mg/L. What settled volume in mL/L would the settleometer show at 30 minutes?', a:288, tol:6, u:'mL/L',
     e:'Rearrange: SV₃₀ = (SVI × MLSS) ÷ 1,000 = (90 × 3,200) ÷ 1,000 = 288 mL/L.'}
  ]
},
{
  id:'mt13', cat:'Activated Sludge', title:'Food-to-Microorganism (F/M) Ratio',
  formula:'F/M = BOD load (kg/day) ÷ MLVSS under aeration (kg)',
  vars:[
    {s:'F/M', m:'Food to microorganism ratio', u:'kg BOD / kg MLVSS · day'},
    {s:'F (food)', m:'BOD applied per day = BOD mg/L × flow ML/day', u:'kg/day'},
    {s:'M (microorganisms)', m:'MLVSS mass = MLVSS mg/L × aeration volume ML', u:'kg'}
  ],
  when:'To judge whether your bug population matches the food coming in. Conventional activated sludge runs 0.2–0.5. High F/M = too few bugs for the load (young sludge, white foam). Low F/M = too many bugs (old sludge, possible filaments).',
  worked:{
    q:'Aeration basin volume 1.2 ML, MLVSS 2,000 mg/L. Influent flow 3.0 ML/day with BOD 180 mg/L. Find the F/M.',
    steps:[
      'Food: BOD kg/day = 180 mg/L × 3.0 ML/day = 540 kg/day',
      'Microorganisms: MLVSS kg = 2,000 mg/L × 1.2 ML = 2,400 kg',
      'F/M = 540 ÷ 2,400',
      'F/M = 0.225',
      'This sits at the low end of the conventional 0.2–0.5 range.'
    ],
    a:'F/M = 0.23'
  },
  practice:[
    {lvl:'Easy', q:'BOD load is 400 kg/day and MLVSS mass under aeration is 1,600 kg. What is the F/M?', a:0.25, tol:0.02, u:'',
     e:'F/M = 400 ÷ 1,600 = 0.25.'},
    {lvl:'Medium', q:'Flow 2.5 ML/day, influent BOD 200 mg/L, aeration volume 1.0 ML, MLVSS 2,500 mg/L. F/M?', a:0.2, tol:0.02, u:'',
     e:'Food = 200 × 2.5 = 500 kg/day. M = 2,500 × 1.0 = 2,500 kg. F/M = 500 ÷ 2,500 = 0.20.'},
    {lvl:'Hard', q:'You want an F/M of 0.30. BOD load is 600 kg/day and aeration volume is 1.5 ML. What MLVSS in mg/L is required?', a:1333, tol:30, u:'mg/L',
     e:'Required M = 600 ÷ 0.30 = 2,000 kg. MLVSS mg/L = 2,000 kg ÷ 1.5 ML = 1,333 mg/L.'},
    {lvl:'US Units', q:'BOD load is 1,500 lbs/day and MLVSS under aeration is 5,000 lbs. What is the F/M ratio?', a:0.3, tol:0.02, u:'',
     e:'F/M = 1,500 ÷ 5,000 = 0.30. F/M is a ratio, so it is the same number in either unit system provided both terms use the same units.'}
  ]
},
{
  id:'mt14', cat:'Activated Sludge', title:'Mean Cell Residence Time (Sludge Age)',
  formula:'MCRT = MLSS mass in system (kg) ÷ Solids leaving per day (kg/day)\nSolids leaving = WAS solids + effluent solids',
  vars:[
    {s:'MCRT', m:'Mean cell residence time (sludge age)', u:'days'},
    {s:'MLSS mass', m:'MLSS mg/L × aeration volume ML', u:'kg'},
    {s:'WAS solids', m:'WAS conc. mg/L × WAS flow ML/day', u:'kg/day'},
    {s:'Effluent solids', m:'Effluent TSS mg/L × effluent flow ML/day', u:'kg/day'}
  ],
  when:'To set and check your wasting rate. Conventional plants run 5–15 days; nitrifying plants need longer (roughly 10+ days, and more in cold weather because biology slows). Increasing wasting lowers MCRT; decreasing wasting raises it.',
  worked:{
    q:'Aeration volume 2.0 ML at MLSS 3,000 mg/L. WAS is 0.05 ML/day at 8,000 mg/L. Effluent is 3.0 ML/day at 15 mg/L. Find the MCRT.',
    steps:[
      'Solids in system = 3,000 mg/L × 2.0 ML = 6,000 kg',
      'WAS solids out = 8,000 × 0.05 = 400 kg/day',
      'Effluent solids out = 15 × 3.0 = 45 kg/day',
      'Total leaving = 400 + 45 = 445 kg/day',
      'MCRT = 6,000 ÷ 445 = 13.5 days'
    ],
    a:'MCRT = 13.5 days'
  },
  practice:[
    {lvl:'Easy', q:'Solids in the system total 4,500 kg and 450 kg/day leave. What is the MCRT in days?', a:10, tol:0.3, u:'days',
     e:'MCRT = 4,500 ÷ 450 = 10 days.'},
    {lvl:'Medium', q:'Aeration volume 1.5 ML, MLSS 2,800 mg/L. Solids leaving total 350 kg/day. MCRT in days?', a:12, tol:0.4, u:'days',
     e:'Solids in system = 2,800 × 1.5 = 4,200 kg. MCRT = 4,200 ÷ 350 = 12 days.'},
    {lvl:'Hard', q:'You want an MCRT of 8 days. The system holds 5,600 kg of solids and effluent carries out 60 kg/day. How many kg/day must be WASTED?', a:640, tol:15, u:'kg/day',
     e:'Total solids that must leave = 5,600 ÷ 8 = 700 kg/day. Effluent takes 60, so WAS must remove 700 − 60 = 640 kg/day.'}
  ]
},
{
  id:'mt15', cat:'Process', title:'Hydraulic &amp; Organic Loading Rate',
  formula:'Hydraulic Loading Rate = Flow ÷ Surface Area\nOrganic Loading Rate = BOD (kg/day) ÷ Media Volume (m³ or 1,000 m³)',
  vars:[
    {s:'HLR', m:'Hydraulic loading rate', u:'m³/m²·day'},
    {s:'OLR', m:'Organic loading rate', u:'kg BOD/m³·day'},
    {s:'Media volume', m:'Volume of filter media (trickling filter)', u:'m³'}
  ],
  when:'To check loading on trickling filters and granular filters. Hydraulic loading tells you if you are pushing too much water through; organic loading tells you if you are feeding the biofilm more than it can handle (which leads to ponding and odours).',
  worked:{
    q:'A trickling filter is 15 m in diameter with 1.8 m of media depth. Flow is 900 m³/day with BOD of 120 mg/L. Find the hydraulic and organic loading rates.',
    steps:[
      'r = 7.5 m. Surface area = π × 7.5² = 176.7 m²',
      'HLR = 900 ÷ 176.7 = 5.09 m³/m²·day',
      'Media volume = 176.7 × 1.8 = 318.1 m³',
      'BOD load = 120 mg/L × 0.9 ML/day = 108 kg/day',
      'OLR = 108 ÷ 318.1 = 0.34 kg BOD/m³·day'
    ],
    a:'HLR = 5.09 m³/m²·day; OLR = 0.34 kg BOD/m³·day'
  },
  practice:[
    {lvl:'Easy', q:'A filter has 150 m² of surface area and receives 1,200 m³/day. What is the hydraulic loading rate in m³/m²·day?', a:8, tol:0.2, u:'m³/m²·day',
     e:'HLR = 1,200 ÷ 150 = 8 m³/m²·day.'},
    {lvl:'Medium', q:'A trickling filter has 250 m³ of media and receives a BOD load of 100 kg/day. What is the organic loading rate in kg BOD/m³·day?', a:0.4, tol:0.02, u:'kg/m³·day',
     e:'OLR = 100 ÷ 250 = 0.4 kg BOD/m³·day.'},
    {lvl:'Hard', q:'A trickling filter 12 m in diameter with 2 m media depth receives 1.0 ML/day at 150 mg/L BOD. Organic loading rate in kg BOD/m³·day?', a:0.663, tol:0.04, u:'kg/m³·day',
     e:'r = 6 m. Area = π × 36 = 113.1 m². Media volume = 113.1 × 2 = 226.2 m³. BOD = 150 × 1.0 = 150 kg/day. OLR = 150 ÷ 226.2 = 0.663.'}
  ]
},
{
  id:'mt16', cat:'Chemical', title:'Chlorine Dose, Demand &amp; Residual',
  formula:'Dose = Demand + Residual\n(therefore Demand = Dose − Residual)',
  vars:[
    {s:'Dose', m:'Total chlorine added', u:'mg/L'},
    {s:'Demand', m:'Chlorine consumed by reactions', u:'mg/L'},
    {s:'Residual', m:'Chlorine remaining after contact time', u:'mg/L'}
  ],
  when:'Any chlorination question. Also combine with the loading formula to convert a dose in mg/L into kg/day of chlorine to order or feed.',
  worked:{
    q:'A plant doses 9 mg/L of chlorine and measures a residual of 1.2 mg/L after the contact chamber. Flow is 3.5 ML/day. Find the chlorine demand and the kg/day of chlorine used.',
    steps:[
      'Demand = Dose − Residual = 9 − 1.2 = 7.8 mg/L',
      'Chlorine fed as mass: kg/day = dose × flow',
      'kg/day = 9 mg/L × 3.5 ML/day',
      'kg/day = 31.5 kg/day'
    ],
    a:'Demand = 7.8 mg/L; chlorine used = 31.5 kg/day'
  },
  practice:[
    {lvl:'Easy', q:'Chlorine dose is 8 mg/L and residual is 0.5 mg/L. What is the chlorine demand in mg/L?', a:7.5, tol:0.1, u:'mg/L',
     e:'Demand = Dose − Residual = 8 − 0.5 = 7.5 mg/L.'},
    {lvl:'Medium', q:'Chlorine demand is 6.5 mg/L and you need a residual of 1.0 mg/L. Flow is 4.0 ML/day. How many kg/day of chlorine are needed?', a:30, tol:0.5, u:'kg/day',
     e:'Dose = Demand + Residual = 6.5 + 1.0 = 7.5 mg/L. kg/day = 7.5 × 4.0 = 30 kg/day.'},
    {lvl:'Hard', q:'You feed 45 kg/day of chlorine to 5.0 ML/day and measure a residual of 0.8 mg/L. What is the chlorine demand in mg/L?', a:8.2, tol:0.2, u:'mg/L',
     e:'Dose = 45 kg/day ÷ 5.0 ML/day = 9.0 mg/L. Demand = 9.0 − 0.8 = 8.2 mg/L.'},
    {lvl:'US Units', q:'Chlorine demand is 7.0 mg/L and you want a 1.0 mg/L residual at 1.5 MGD. How many lbs/day of chlorine are needed?', a:100, tol:2, u:'lbs/day',
     e:'Dose = 7.0 + 1.0 = 8.0 mg/L. lbs/day = 8.0 x 1.5 x 8.34 = 100.1 lbs/day.'}
  ]
},
{
  id:'mt17', cat:'Activated Sludge', title:'Return Activated Sludge (RAS) Rate',
  formula:'RAS % = (RAS flow ÷ Influent flow) × 100',
  vars:[
    {s:'RAS flow', m:'Rate of sludge returned to aeration', u:'m³/day or ML/day'},
    {s:'Influent flow', m:'Plant influent flow', u:'same units'}
  ],
  when:'To set and check the return rate. Conventional plants typically run 25–75% of influent flow. RAS controls the clarifier BLANKET — increase it when the blanket climbs, decrease it if RAS becomes thin and watery.',
  worked:{
    q:'Influent flow is 4,000 m³/day and RAS flow is 1,800 m³/day. What is the RAS rate as a percentage, and is it typical?',
    steps:[
      'RAS % = (RAS ÷ Influent) × 100',
      'RAS % = (1,800 ÷ 4,000) × 100',
      'RAS % = 0.45 × 100 = 45%',
      'This sits comfortably in the typical 25–75% range.'
    ],
    a:'45% — within the normal range'
  },
  practice:[
    {lvl:'Easy', q:'Influent is 2,000 m³/day and RAS is 800 m³/day. What is the RAS rate as a percentage?', a:40, tol:1, u:'%',
     e:'(800 ÷ 2,000) × 100 = 40%.'},
    {lvl:'Medium', q:'Influent flow is 5,500 m³/day and you want to run RAS at 60%. What RAS flow in m³/day is needed?', a:3300, tol:40, u:'m³/day',
     e:'RAS = 5,500 × 0.60 = 3,300 m³/day.'},
    {lvl:'Hard', q:'Influent 3.6 ML/day, RAS 1.62 ML/day. The blanket is climbing so you want to raise RAS by 15 percentage points. What is the new RAS flow in ML/day?', a:2.16, tol:0.05, u:'ML/day',
     e:'Current RAS % = (1.62 ÷ 3.6) × 100 = 45%. New = 60%. New RAS flow = 3.6 × 0.60 = 2.16 ML/day.'}
  ]
},
{
  id:'mt18', cat:'Equipment', title:'Pump Rate &amp; Wet Well Drawdown',
  formula:'Pump rate = Volume pumped ÷ Time\nWet well volume = Length × Width × Drawdown depth',
  vars:[
    {s:'Pump rate', m:'Actual delivered flow', u:'L/min or m³/h'},
    {s:'Drawdown', m:'Change in water level while pumping with inflow isolated', u:'m'}
  ],
  when:'The classic field check for verifying a pump\'s actual output against its rating or against a flow meter. Isolate the inflow, time the level drop over a known area, and calculate.',
  worked:{
    q:'A wet well is 2.5 m × 2.0 m. With inflow isolated, the pump lowers the level 1.2 m in 4 minutes. What is the pump rate in L/min and m³/h?',
    steps:[
      'Volume pumped = 2.5 × 2.0 × 1.2 = 6.0 m³',
      'Convert to litres: 6.0 × 1,000 = 6,000 L',
      'Pump rate = 6,000 L ÷ 4 min = 1,500 L/min',
      'In m³/h: 6.0 m³ in 4 min → 6.0 × (60 ÷ 4) = 90 m³/h'
    ],
    a:'1,500 L/min = 90 m³/h'
  },
  practice:[
    {lvl:'Easy', q:'A pump delivers 3,000 L in 5 minutes. What is the pump rate in L/min?', a:600, tol:10, u:'L/min',
     e:'3,000 ÷ 5 = 600 L/min.'},
    {lvl:'Medium', q:'A wet well 3 m × 2 m drops 1.5 m in 6 minutes with inflow isolated. What is the pump rate in L/min?', a:1500, tol:30, u:'L/min',
     e:'Volume = 3 × 2 × 1.5 = 9 m³ = 9,000 L. Rate = 9,000 ÷ 6 = 1,500 L/min.'},
    {lvl:'Hard', q:'A circular wet well 2.4 m in diameter drops 0.9 m in 3 minutes. What is the pump rate in m³/h?', a:81.4, tol:2, u:'m³/h',
     e:'r = 1.2 m. Area = π × 1.44 = 4.524 m². Volume = 4.524 × 0.9 = 4.07 m³ in 3 min. Rate = 4.07 × 20 = 81.4 m³/h.'},
    {lvl:'US Units', q:'A wet well 10 ft x 8 ft drops 4 ft in 5 minutes with inflow isolated. What is the pump rate in gpm?', a:478.7, tol:6, u:'gpm',
     e:'Volume = 10 x 8 x 4 = 320 ft³ x 7.48 = 2,393.6 gal. Rate = 2,393.6 ÷ 5 = 478.7 gpm.'}
  ]
}
];

window.MATH_TOPICS = MATH_TOPICS;
window.CONVERSIONS = CONVERSIONS;
