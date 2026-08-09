/* references.js — exam requirements, reference library and study plans.
 *
 * SOURCING NOTE (important, please read):
 * EOCP administers the WPI (Water Professionals International, formerly ABC)
 * standardized operator exams. New standardized Level I–IV exams were introduced
 * in July 2025, built on job analyses conducted in 2022–2023.
 *
 * Everything marked "OFFICIAL" below comes from EOCP or WPI published material.
 * Everything else is supplemental teaching material written for this app.
 * Where the official material does not state something, this file says so
 * explicitly rather than guessing.
 */

const EXAM_INFO = {
  updated: 'Researched and re-verified August 2026',
  sourcingNote: 'Items tagged OFFICIAL come from EOCP or WPI/ABC published material. ' +
    'Items tagged UNVERIFIED could not be confirmed from an authoritative current source and must be ' +
    'confirmed with EOCP directly — they are flagged rather than guessed at. ' +
    'NOTE ON LINK CHECKING: the network policy on the machine that built this app blocks direct access to ' +
    'eocp.ca and gowpi.org, so links below were gathered from indexed search results and their URLs could ' +
    'NOT be individually opened and confirmed live. Treat them as best-known addresses, not verified-live links.',
  official: [
    {k:'Certifying body',
     v:'Environmental Operators Certification Program (EOCP) — certifies water and wastewater operators in British Columbia and Yukon. Operating in BC since 1966.',
     src:'OFFICIAL'},
    {k:'Exam used',
     v:'EOCP administers the current WPI (Water Professionals International / ABC) standardized Level I–IV exams. New standardized exams were introduced <b>July 2025</b>, developed from job analyses conducted 2022–2023 that evaluated over 700 industry job tasks.',
     src:'OFFICIAL'},
    {k:'Exam format and length',
     v:'<b>100 questions, multiple choice, to be completed within 3 hours.</b> The WPI standardized exam consists of <b>100 scored questions</b> plus <b>up to 10 additional unscored "pre-test" questions</b>. Pre-test questions are unidentified and scattered throughout the exam, so answer every question with equal care — you cannot tell which ones count.',
     src:'OFFICIAL'},
    {k:'Passing standard',
     v:'A score of <b>70% scaled score units or higher</b> is required to pass. This represents the minimum standard of knowledge. Note this is a <b>scaled</b> score, not a raw percentage of questions answered correctly.',
     src:'OFFICIAL'},
    {k:'Exam conditions and allowed materials',
     v:'<b>Closed book.</b> You may NOT use your own reference sources — no books, no notes, and <b>no programmable calculators</b>. The <b>ABC Formula/Conversion Table is provided</b> and should be used for calculations. Exam math can be solved with a <b>basic four-function calculator</b>.',
     src:'OFFICIAL'},
    {k:'Units used in calculations',
     v:'Calculation items are presented in <b>both US Standard and Metric units</b> — US Standard first, with metric following in parentheses. Each item can be solved in either system independently. <b>Practise both.</b>',
     src:'OFFICIAL'},
    {k:'Experience requirement (Level I)',
     v:'<b>12 months / 1,800 hours</b> of hands-on, directly related experience. Only directly related experience in water treatment, water distribution, wastewater treatment or wastewater collection counts, and it must be verified in the Application for Certification.',
     src:'OFFICIAL'},
    {k:'Education requirement',
     v:'Proof of high school completion — an official high school diploma or transcript issued by the Ministry of Education, an adult graduation diploma, or a post-secondary diploma.',
     src:'OFFICIAL'},
    {k:'Application requirement',
     v:'You must be employed by, or hold an employment offer letter from, an employer in <b>British Columbia or Yukon</b>.',
     src:'OFFICIAL'},
    {k:'Required documentation',
     v:'Completed Application for Certification with verified experience, plus proof of education (diploma or official transcript), plus proof of BC/YT employment or an offer letter.',
     src:'OFFICIAL'},
    {k:'Certification renewal',
     v:'Certification is maintained by accumulating <b>Continuing Education Units (CEUs)</b>.',
     src:'OFFICIAL'},
    {k:'Question sourcing',
     v:'Exam questions are referenced to widely accepted peer-reviewed publications — California State University Sacramento Office of Water Programs (CSUS/OWP), the Water Environment Federation (WEF), and Standard Methods (APHA/AWWA/WEF).',
     src:'OFFICIAL'}
  ],
  outline: {
    total: 100,
    note:'Content outline for the WPI Wastewater Treatment Operator Class I certification exam (100 scored questions). Cognitive mix is approximately 40% Recall and 60% Application, with roughly 14% of all questions requiring calculations.',
    duties: [
      {k:'EQP', name:'Equipment Evaluation, Maintenance and/or Operation', q:39,
       detail:'13 Recall, 26 Application, 0 calculation items. Covers preliminary, primary, secondary, tertiary and disinfection equipment.'},
      {k:'TPE', name:'Treatment Process Evaluation and Adjustment', q:38,
       detail:'6 Recall, 32 Application, 9 calculation items. Covers preliminary treatment (screening, grinding, grit, flow equalisation), primary treatment/clarification, secondary treatment including suspended growth (activated sludge), disinfection (chlorination, dechlorination, UV), and solids treatment processes.'},
      {k:'LAB', name:'Laboratory Analysis', q:13,
       detail:'Sampling, core analytical tests, and quality control.'},
      {k:'SSA', name:'Security, Safety and Administrative Procedures', q:10,
       detail:'Safety practices, security, records and administrative requirements.'}
    ]
  },
  unverified: [
    '<b>Current exam and application fees.</b> A $150 exam fee appears in EOCP material in connection with a 100-question / 3-hour exam, but this app could not confirm it is the current fee for Wastewater Treatment Level I specifically. <b>UNVERIFIED — CONFIRM WITH EOCP.</b>',
    '<b>Exact scaled-score conversion.</b> EOCP states the pass standard as 70% scaled score units; the raw-to-scaled conversion method is not published. Do not assume 70 correct answers out of 100 equals a pass. <b>UNVERIFIED — CONFIRM WITH EOCP.</b>',
    '<b>Precise Recall/Application/calculation split within the Laboratory Analysis and Security/Safety/Administrative duties.</b> The question counts shown above are from the published content outline; the internal cognitive split for these two duties was not confirmed. <b>UNVERIFIED — CONFIRM WITH EOCP.</b>',
    '<b>Whether EOCP applies the WPI pre-test question policy.</b> The up-to-10 unscored pre-test questions are ABC/WPI standard practice; EOCP-specific confirmation was not obtained. <b>UNVERIFIED — CONFIRM WITH EOCP.</b>'
  ],
  links: [
    {t:'EOCP — main site', u:'https://eocp.ca/'},
    {t:'EOCP — How to Become an Operator', u:'https://eocp.ca/certified-operators/how-to-become-an-operator/'},
    {t:'EOCP — Exam Requirements', u:'https://eocp.ca/certified-operators/drc-requirements/'},
    {t:'EOCP — Exam Preparation', u:'https://eocp.ca/certified-operators/preparing-for-your-exam/'},
    {t:'EOCP — Exam Schedule', u:'https://eocp.ca/certified-operators/exam-schedule/'},
    {t:'EOCP — Fees', u:'https://eocp.ca/fees/'},
    {t:'EOCP — Program Guide', u:'https://eocp.ca/about-us/program-guide/'},
    {t:'EOCP — CEU Requirements', u:'https://eocp.ca/certified-operators/ceu-requirements/'},
    {t:'EOCP — New Standardized Exams (July 2025)', u:'https://eocp.ca/operator-digest/new-standardized-exams-coming-in-july-2025/'},
    {t:'EOCP — ABC Formula Sheet (wastewater treatment & collection) page', u:'https://eocp.ca/abc-formula-sheet-wwtwwc/'},
    {t:'EOCP — ABC 2018 Wastewater Formula Sheet (PDF)', u:'https://eocp.ca/wp-content/uploads/2018/04/ABC-2018-Wastewater-Formula-Sheet.pdf'},
    {t:'EOCP — Math for Operators, guide to the ABC/EOCP formulas (PDF)', u:'https://eocp.ca/wp-content/uploads/2023/06/2022-EOCP-Guide-to-the-EOCP-and-ABC-formulas-G.Faris_.pdf'},
    {t:'EOCP — Candidate Instructions for ABC Web-Based Examinations (PDF)', u:'https://eocp.ca/wp-content/uploads/2018/04/Examinee-Instructions-ABC-Web-Based-Examinee.pdf'},
    {t:'EOCP — Small Wastewater Systems sample exam (PDF)', u:'https://eocp.ca/wp-content/uploads/2021/01/SWWS-Sample-Exam-2020-December.pdf'},
    {t:'EOCP — Operator-in-Training sample exam (PDF)', u:'https://eocp.ca/wp-content/uploads/2021/01/OIT-Sample-Exam-2020-December.pdf'},
    {t:'WPI — Wastewater Treatment Class I Need-to-Know Criteria (June 2025, PDF)', u:'https://www.gowpi.org/wp-content/uploads/2025/06/WastewaterTreatment-%E2%80%93-Class-1.pdf'},
    {t:'WPI — Need-to-Know Criteria (all levels)', u:'https://gowpi.org/services/abc-testing/need-to-know-criteria/'},
    {t:'WPI — Standardized Wastewater Treatment Exams', u:'https://gowpi.org/services/abc-testing/standardized-exams/standardized-wastewater-treatment-operator-exams/'},
    {t:'WPI — Wastewater Treatment Exam References', u:'https://www.gowpi.org/services/abc-testing/wastewater-treatment-operator-exam-references/'},
    {t:'WPI — ABC Testing FAQ', u:'https://gowpi.org/services/abc-testing/faq/'}
  ]
};

const REFERENCES = [
{
  tier:'ESSENTIAL',
  items:[
    {n:'Wastewater Treatment Operator Class I Need-to-Know Criteria',
     o:'Water Professionals International (WPI / ABC Testing)', y:'June 2025 edition', src:'OFFICIAL',
     w:'This IS the exam blueprint. It lists every duty area, the number of questions in each, the cognitive level split and the calculation count. Read it before you read anything else, and use it to decide where your study hours go.',
     u:'https://www.gowpi.org/wp-content/uploads/2025/06/WastewaterTreatment-%E2%80%93-Class-1.pdf'},
    {n:'ABC/EOCP Canadian Formula & Conversion Table — Wastewater (2018 sheet)',
     o:'EOCP / Association of Boards of Certification', y:'2018 edition, current as distributed by EOCP', src:'OFFICIAL',
     w:'This is the exact sheet you are handed at the exam. Print it and use it for every practice problem you do, so that on exam day you already know where each formula sits on the page.',
     u:'https://eocp.ca/wp-content/uploads/2018/04/ABC-2018-Wastewater-Formula-Sheet.pdf'},
    {n:'Math for Operators — A Guide to Using the ABC/EOCP Canadian Standardized Formulas',
     o:'G. Faris, published by EOCP', y:'2022', src:'OFFICIAL',
     w:'Written specifically to teach operators how to use the EOCP/ABC formula sheet, with worked examples. The single most useful math resource for this exam because it is built around the sheet you will actually have.',
     u:'https://eocp.ca/wp-content/uploads/2023/06/2022-EOCP-Guide-to-the-EOCP-and-ABC-formulas-G.Faris_.pdf'},
    {n:'EOCP Exam Preparation page',
     o:'Environmental Operators Certification Program', y:'Current', src:'OFFICIAL',
     w:'EOCP\'s own preparation guidance, sample material and current exam logistics. Check here for the pass mark, exam duration and booking process — details this app could not verify.',
     u:'https://eocp.ca/certified-operators/preparing-for-your-exam/'},
    {n:'Operation of Wastewater Treatment Plants, Volumes 1 & 2',
     o:'California State University Sacramento — Office of Water Programs (CSUS/OWP)', y:'8th Edition', src:'SUPPLEMENTAL (named exam reference)',
     w:'Named by WPI as a reference source for Class I exam questions. If a question is written from a book, it is likely this one. Volume 1 covers the fundamentals you need for Level I.',
     u:'https://www.owp.csus.edu/'},
    {n:'Wastewater Treatment Fundamentals I — Liquid Treatment',
     o:'Water Environment Federation (WEF)', y:'Current edition', src:'SUPPLEMENTAL (named exam reference)',
     w:'The other reference WPI names for Class I questions. Written as an operator certification preparation text and mapped to the exam structure.',
     u:'https://www.wef.org/'}
  ]
},
{
  tier:'RECOMMENDED',
  items:[
    {n:'WPI Need-to-Know Criteria — all levels index',
     o:'Water Professionals International', y:'Current', src:'OFFICIAL',
     w:'Useful for seeing what is NOT on the Level I exam. Comparing Class I against Class II tells you where to stop studying, which saves real time.',
     u:'https://gowpi.org/services/abc-testing/need-to-know-criteria/'},
    {n:'WPI Wastewater Treatment Operator Exam References (full list)',
     o:'Water Professionals International', y:'Current', src:'OFFICIAL',
     w:'The complete list of publications WPI draws exam questions from. Worth a look so you know which texts are actually authoritative for this exam.',
     u:'https://www.gowpi.org/services/abc-testing/wastewater-treatment-operator-exam-references/'},
    {n:'EOCP Sample Exams (Small Wastewater Systems and Operator-in-Training)',
     o:'Environmental Operators Certification Program', y:'2020 edition', src:'OFFICIAL',
     w:'EOCP publishes sample exams. These are for the SWWS and OIT certifications rather than Wastewater Treatment Level I, so treat them as format and style practice, not as a Level I content match. Still the closest thing to seeing EOCP question phrasing.',
     u:'https://eocp.ca/wp-content/uploads/2021/01/SWWS-Sample-Exam-2020-December.pdf'},
    {n:'Candidate Instructions for ABC Web-Based Examinations',
     o:'EOCP / ABC', y:'Current', src:'OFFICIAL',
     w:'What the exam day actually looks like: closed book, no personal references, no programmable calculators, and the provided ABC Formula/Conversion Table. Read it before exam day so nothing is a surprise.',
     u:'https://eocp.ca/wp-content/uploads/2018/04/Examinee-Instructions-ABC-Web-Based-Examinee.pdf'},
    {n:'WPI ABC Testing FAQ',
     o:'Water Professionals International', y:'Current', src:'OFFICIAL',
     w:'Explains scoring, the unscored pre-test questions, and how the standardized exams are built and maintained.',
     u:'https://gowpi.org/services/abc-testing/faq/'},
    {n:'Metric Math for Wastewater Operators',
     o:'Government of Manitoba', y:'Current', src:'SUPPLEMENTAL',
     w:'A free, plain-language metric math workbook aimed squarely at operators. Good extra drilling if unit conversions are your weak point — and for most people they are.',
     u:'https://www.gov.mb.ca/sd/pubs/waste_management/wastewater/metric_math_for_wastewater_operators.pdf'},
    {n:'EOCP How to Become an Operator',
     o:'Environmental Operators Certification Program', y:'Current', src:'OFFICIAL',
     w:'The full application pathway: experience verification, education proof, employment requirement and the forms. Read this before you apply, not after.',
     u:'https://eocp.ca/certified-operators/how-to-become-an-operator/'},
    {n:'EOCP Continuing Education Requirements',
     o:'Environmental Operators Certification Program', y:'Current', src:'OFFICIAL',
     w:'What you will need to keep the certificate once you have earned it. Worth knowing early so you bank CEUs from your first year rather than scrambling at renewal.',
     u:'https://eocp.ca/certified-operators/ceu-requirements/'}
  ]
},
{
  tier:'OPTIONAL',
  items:[
    {n:'BC Municipal Wastewater Regulation',
     o:'Government of British Columbia (under the Environmental Management Act)', y:'Current', src:'OFFICIAL (regulation)',
     w:'The provincial regulation behind BC discharge requirements. Only a small slice of the exam touches regulations, so skim it for context rather than studying it in depth.',
     u:'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/87_2012'},
    {n:'Wastewater Systems Effluent Regulations (WSER)',
     o:'Government of Canada (under the Fisheries Act)', y:'Current', src:'OFFICIAL (regulation)',
     w:'The federal baseline effluent standards. Useful background for understanding why your permit says what it says.',
     u:'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2012-139/'},
    {n:'BC Water & Waste Association (BCWWA)',
     o:'BCWWA', y:'Current', src:'SUPPLEMENTAL',
     w:'Training courses and operator events in BC. A practical route to CEUs and to exam-prep courses taught by people who know the EOCP system.',
     u:'https://bcwwa.org/'}
  ]
}
];

/* ---------------- Study plans ---------------- */
const STUDY_PLANS = [
{
  id:'p12', name:'12-Week Plan', pace:'Normal pace', hrs:'About 5–7 hours per week',
  note:'The realistic plan if you are working full time. One module per week with two catch-up and review weeks built in.',
  weeks:[
    {w:1, focus:'Module 1 — Wastewater Fundamentals', tasks:['Read all 4 lessons in Module 1','Run the Module 1 flashcard deck twice','Practice questions for each lesson','Math: Metric Conversions + Area','Take the Module 1 section test']},
    {w:2, focus:'Module 2 — Preliminary Treatment', tasks:['Read all 3 lessons','Module 2 flashcards','Practice questions per lesson','Math: Volume + Flow Rate (Q = V × A)','Module 2 section test']},
    {w:3, focus:'Module 3 — Primary Treatment', tasks:['Read Module 3','Module 3 flashcards','Practice questions','Math: Detention Time + Surface Overflow Rate','Module 3 section test','Review any Module 1–2 weak areas']},
    {w:4, focus:'Module 4 — Biological Treatment (part 1)', tasks:['Lessons 4.1 Aeration and 4.2 Activated Sludge','Flashcards for both lessons','Practice questions','Math: SVI + F/M ratio','No test yet — this module is big']},
    {w:5, focus:'Module 4 — Biological Treatment (part 2)', tasks:['Lessons 4.3 Fixed Film, 4.4 Lagoons, 4.5 Secondary Clarification','Full Module 4 flashcard deck','Practice questions','Math: MCRT + RAS rate','Module 4 section test']},
    {w:6, focus:'Module 5 — Chemical Treatment', tasks:['Read all 3 lessons','Module 5 flashcards','Practice questions','Math: Chemical Dosing + Dilution','Module 5 section test','Relate every lesson to your own plant']},
    {w:7, focus:'Module 6 — Filtration & Disinfection', tasks:['Read both lessons','Module 6 flashcards','Practice questions','Math: Chlorine Dose/Demand/Residual','Module 6 section test','Take Mock Exam 1 — Basic']},
    {w:8, focus:'Module 7 — Sludge & Solids', tasks:['Read both lessons','Module 7 flashcards','Practice questions','Review all math done so far','Module 7 section test']},
    {w:9, focus:'Module 8 — Equipment & Maintenance', tasks:['Read both lessons — this is 39% of the exam, give it full attention','Module 8 flashcards twice','Practice questions','Math: Pump Rate & Wet Well Drawdown','Module 8 section test','Take Mock Exam 2 — Intermediate']},
    {w:10, focus:'Module 9 — Lab, Sampling & Process Control', tasks:['Read all 3 lessons','Module 9 flashcards','Practice questions','Math: Loading + Percent Removal review','Module 9 section test']},
    {w:11, focus:'Modules 10 & 11 — Safety and Regulations', tasks:['Read all Module 10 and 11 lessons','Flashcards for both modules','Practice questions','Both section tests','Take Mock Exam 3 — Difficult','Work through every weak area flagged so far']},
    {w:12, focus:'Final review and exam simulation', tasks:['Full formula sheet drill — every math topic, hard level','All flashcards due, plus every card in boxes 1 and 2','Re-take any section test scored under 80%','Take Mock Exam 4 — Exam Simulation (timed)','Take Mock Exam 5 — Final Assessment','Check Exam Readiness page — all areas should be green']}
  ]
},
{
  id:'p8', name:'8-Week Plan', pace:'Accelerated', hrs:'About 8–11 hours per week',
  note:'For when the exam is booked and closer than you would like. Doubles up modules and starts mock exams earlier.',
  weeks:[
    {w:1, focus:'Modules 1 & 2 — Fundamentals and Preliminary', tasks:['Read all 7 lessons across both modules','Flashcards for both modules','Practice questions for every lesson','Math: Conversions, Area, Volume, Flow','Both section tests']},
    {w:2, focus:'Modules 3 & 4 (part 1) — Primary and Aeration/Activated Sludge', tasks:['Module 3 fully, plus lessons 4.1 and 4.2','Flashcards','Practice questions','Math: Detention Time, SOR, SVI, F/M','Module 3 section test']},
    {w:3, focus:'Module 4 (part 2) — Fixed film, lagoons, clarification', tasks:['Lessons 4.3, 4.4, 4.5','Full Module 4 flashcard deck','Practice questions','Math: MCRT, RAS rate','Module 4 section test','Mock Exam 1 — Basic']},
    {w:4, focus:'Modules 5 & 6 — Chemical, Filtration, Disinfection', tasks:['Read all 5 lessons','Flashcards for both modules','Practice questions','Math: Dosing, Dilution, Chlorine Dose/Demand','Both section tests']},
    {w:5, focus:'Modules 7 & 8 — Sludge and Equipment', tasks:['Read all 4 lessons — Module 8 is the biggest exam weighting','Flashcards, Module 8 twice','Practice questions','Math: Pump rate and drawdown','Both section tests','Mock Exam 2 — Intermediate']},
    {w:6, focus:'Modules 9, 10 & 11 — Lab, Safety, Regulations', tasks:['Read all 6 lessons','Flashcards for all three modules','Practice questions','All three section tests','Mock Exam 3 — Difficult']},
    {w:7, focus:'Math consolidation and weak areas', tasks:['Every math topic at Medium and Hard level','All flashcards in boxes 1 and 2','Re-take every section test scored under 80%','Work through the Weak Areas page in full']},
    {w:8, focus:'Exam simulation', tasks:['Mock Exam 4 — Exam Simulation (timed, no notes)','Review every wrong answer and revisit those lessons','Mock Exam 5 — Final Assessment','Final formula sheet drill','Confirm Exam Readiness status']}
  ]
},
{
  id:'p4', name:'4-Week Plan', pace:'Intensive', hrs:'About 15–20 hours per week',
  note:'Only realistic if you already work in the industry and have practical grounding. Prioritises the two biggest duty areas — Equipment (39%) and Treatment Process (38%) — which together are 77% of the exam.',
  weeks:[
    {w:1, focus:'Process backbone — Modules 1, 2, 3 and 4', tasks:['Read every lesson in Modules 1–4','Flashcards daily, all four modules','Practice questions for every lesson','Math: Conversions, Area, Volume, Flow, Detention Time, SOR, SVI, F/M, MCRT','Section tests for Modules 1–4','Mock Exam 1 — Basic at end of week']},
    {w:2, focus:'Chemical, filtration, disinfection, sludge — Modules 5, 6, 7', tasks:['Read every lesson in Modules 5–7','Flashcards daily','Practice questions','Math: Dosing, Dilution, Chlorine Dose/Demand/Residual, Loading','Section tests for Modules 5–7','Mock Exam 2 — Intermediate']},
    {w:3, focus:'Equipment, lab, safety, regulations — Modules 8, 9, 10, 11', tasks:['Module 8 first and hardest — it is the single largest duty area','Read all lessons in Modules 8–11','Flashcards daily, Module 8 twice daily','Practice questions','Math: Pump rate and drawdown','Section tests for Modules 8–11','Mock Exam 3 — Difficult']},
    {w:4, focus:'Drill, simulate, close gaps', tasks:['Every math topic, Hard level, using the printed formula sheet','All flashcards — clear boxes 1 and 2 completely','Re-take every section test scored under 80%','Mock Exam 4 — Exam Simulation (timed)','Full review of every wrong answer','Mock Exam 5 — Final Assessment','Exam Readiness must show Strong or Exam Ready in all areas']}
  ]
}
];

window.EXAM_INFO = EXAM_INFO;
window.REFERENCES = REFERENCES;
window.STUDY_PLANS = STUDY_PLANS;
