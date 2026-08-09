/* app.js — UI, navigation, state and grading for the EOCP WWT Level I study app.
 *
 * All study content lives in the data files (curriculum.js, questions.js, flashcards.js,
 * math.js, exams.js, references.js). This file is UI and logic only.
 *
 * State is persisted to localStorage under one key so it survives reloads and works offline.
 */

'use strict';

/* ============================== STATE ============================== */
const KEY_BASE = 'eocp_study_v2';
let KEY = KEY_BASE + '_OIT';   // set properly in load()

const BLANK = {
  lessonsRead: {},     // lessonId -> true
  practice:    {},     // questionId -> {correct:bool, ts}
  tests:       {},     // moduleId -> {score, total, pct, ts, wrong:[qid]}
  mocks:       {},     // examId -> {score, total, pct, ts, byDuty:{}, wrong:[]}
  math:        {},     // topicId+level -> {correct:bool, ts}
  cards:       {},     // cardId -> {box:1-5, due: timestamp}
  weak:        {},     // topic key -> count of misses
  theme:       null,
  plan:        null,
  track:       'OIT'   // 'OIT' or 'WWT1' — which exam you are studying for
};

let S = load();

function activeTrack(){
  try { return localStorage.getItem(KEY_BASE + '_track') === 'WWT1' ? 'WWT1' : 'OIT'; }
  catch(e){ return 'OIT'; }
}
function load(){
  KEY = KEY_BASE + '_' + activeTrack();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw){ const b = JSON.parse(JSON.stringify(BLANK)); b.track = activeTrack(); return b; }
    const st = Object.assign(JSON.parse(JSON.stringify(BLANK)), JSON.parse(raw));
    st.track = activeTrack();
    return st;
  } catch(e){
    console.warn('Could not read saved progress, starting fresh.', e);
    const b = JSON.parse(JSON.stringify(BLANK)); b.track = activeTrack(); return b;
  }
}
function save(){
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch(e){ console.warn('Could not save progress.', e); }
}

/* ============================== HELPERS ============================== */
const $  = (sel, root) => (root||document).querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const pct = (a,b) => b ? Math.round((a/b)*100) : 0;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const now = () => Date.now();
const DAY = 86400000;

/* Deterministic shuffle so exams and option orders are stable between visits.
 * Uses Math.imul for the LCG step: plain `s * 1103515245` exceeds JavaScript's
 * 2^53 exact-integer range for large seeds, so the low bits — the ones the
 * modulo actually uses — turn to garbage and every seed collapses to the same
 * permutation. Math.imul keeps the arithmetic exact 32-bit. */
function seededShuffle(arr, seed){
  const a = arr.slice();
  let s = (seed | 0) || 1;
  for (let i = a.length - 1; i > 0; i--){
    s = (Math.imul(s, 1103515245) + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---- Option-order presentation ----------------------------------------
 * Questions are authored with the correct answer first (a:0) because that is
 * far easier to write and review. Presenting them that way would make the app
 * trivially gameable and nothing like a real exam, so every question's options
 * are shuffled deterministically from its id: the same question always shows
 * the same order (so a review screen matches what you answered), but the
 * correct answer lands in a different position each time.
 * This also means any question YOU add with a:0 is handled automatically. */
const PRES = {};
function hashId(str){
  let h = 2166136261;
  for (let i = 0; i < str.length; i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h);
}
function present(q){
  if (PRES[q.id]) return PRES[q.id];
  const order = seededShuffle(q.o.map((_,i) => i), hashId(q.id));
  const p = { o: order.map(i => q.o[i]), a: order.indexOf(q.a) };
  PRES[q.id] = p;
  return p;
}

/* ---- Exam track -------------------------------------------------------
 * The app carries two separate exams:
 *   OIT  — Operator-in-Training. ONE exam covering all four streams
 *          (water treatment, water distribution, wastewater collection,
 *          wastewater treatment). Broad and shallow.
 *   WWT1 — Wastewater Treatment Level I. Wastewater treatment only, far deeper.
 * They are different exams with different content, so every content accessor
 * below filters by the active track. Progress is stored per track. */
function track(){ return S.track === 'WWT1' ? 'WWT1' : 'OIT'; }
function isOIT(){ return track() === 'OIT'; }
function modules(){ return isOIT() ? OIT_MODULES : CURRICULUM; }
function lessons(){
  return modules().flatMap(m => m.lessons.map(l => ({...l, moduleId:m.id, moduleTitle:m.title, moduleN:m.n, duty:m.duty})));
}
function duties(){ return isOIT() ? OIT_DUTIES : DUTIES; }
function questions(){ return isOIT() ? OIT_QUESTIONS : QUESTIONS; }
function cards(){
  const mids = new Set(modules().map(m => m.id));
  const out = [];
  lessons().forEach(l => (l.terms||[]).forEach((t,i) => out.push({
    id:`${l.id}-t${i}`, m:l.moduleId, lesson:l.id, tag:'definition',
    q:`Define: ${t.t}`, a:t.d })));
  (isOIT() ? OIT_CARDS : FLASHCARDS.filter(c => !c.lesson)).forEach((c,i) => {
    if (isOIT()) out.push({ id:`ox${i}`, m:c.m, lesson:null, tag:c.tag, q:c.q, a:c.a });
    else if (mids.has(c.m)) out.push(c);
  });
  return out;
}
function cardsFor(mid){ return cards().filter(c => c.m === mid); }
function glossary(){
  const seen = new Map();
  lessons().forEach(l => (l.terms||[]).forEach(t => {
    if (!seen.has(t.t.toLowerCase())) seen.set(t.t.toLowerCase(), {...t, from:l.moduleTitle});
  }));
  return [...seen.values()].sort((a,b) => a.t.localeCompare(b.t));
}

function bandClass(p){ return p >= 80 ? 'good' : p >= 60 ? 'warn' : 'bad'; }
function bandLabel(p){ return p >= 85 ? 'Exam Ready' : p >= 70 ? 'Nearly Ready' : p >= 50 ? 'Developing' : 'Not Ready'; }

/* ============================== DERIVED METRICS ============================== */
function courseProgress(){
  const L = lessons();
  const total = L.length;
  const read = L.filter(l => S.lessonsRead[l.id]).length;
  return { read, total, pct: pct(read, total) };
}
function testAverage(){
  const v = Object.values(S.tests);
  if (!v.length) return null;
  return Math.round(v.reduce((s,t) => s + t.pct, 0) / v.length);
}
function mathAverage(){
  const v = Object.values(S.math);
  if (!v.length) return null;
  return pct(v.filter(x => x.correct).length, v.length);
}
function mockAverage(){
  const v = Object.values(S.mocks);
  if (!v.length) return null;
  return Math.round(v.reduce((s,m) => s + m.pct, 0) / v.length);
}
function cardsDue(){
  const t = now();
  return cards().filter(c => {
    const st = S.cards[c.id];
    return !st || st.due <= t;
  }).length;
}
/* Weak areas: modules where the operator has demonstrably struggled */
function weakAreas(){
  const out = [];
  modules().forEach(m => {
    const t = S.tests[m.id];
    const qs = questions().filter(q => q.m === m.id);
    const answered = qs.filter(q => S.practice[q.id]);
    const pracPct = answered.length ? pct(answered.filter(q => S.practice[q.id].correct).length, answered.length) : null;
    let score = null;
    if (t && pracPct != null) score = Math.round((t.pct + pracPct) / 2);
    else if (t) score = t.pct;
    else if (pracPct != null) score = pracPct;
    if (score != null && score < 70) out.push({ m, score });
  });
  return out.sort((a,b) => a.score - b.score);
}
function strongAreas(){
  const out = [];
  modules().forEach(m => {
    const t = S.tests[m.id];
    if (t && t.pct >= 80) out.push({ m, score: t.pct });
  });
  return out.sort((a,b) => b.score - a.score);
}
function moduleStatus(m){
  const lessonCount = m.lessons.length;
  const read = m.lessons.filter(l => S.lessonsRead[l.id]).length;
  const t = S.tests[m.id];
  if (t && t.pct >= 85 && read === lessonCount) return 'Exam Ready';
  if (t && t.pct >= 70) return 'Nearly Ready';
  if (t) return 'Developing';
  if (read > 0) return 'Developing';
  return 'Not Ready';
}

/* Overall readiness — deliberately strict. Every pillar must hold up. */
function readiness(){
  const cp = courseProgress().pct;
  const ta = testAverage();
  const ma = mathAverage();
  const mk = mockAverage();
  const tested = Object.keys(S.tests).length;
  const mocksTaken = Object.keys(S.mocks).length;
  const weak = weakAreas().length;

  const pillars = [
    {k:'Course lessons read', v:cp, need:100, ok:cp >= 100},
    {k:'Section tests completed', v:tested, need:modules().length, ok:tested >= modules().length, raw:true},
    {k:'Section test average', v:ta==null?0:ta, need:80, ok:ta != null && ta >= 80},
    {k:'Mathematics average', v:ma==null?0:ma, need:80, ok:ma != null && ma >= 80},
    {k:'Mock exams completed', v:mocksTaken, need:EXAM_DEFS.length, ok:mocksTaken >= EXAM_DEFS.length, raw:true},
    {k:'Mock exam average', v:mk==null?0:mk, need:80, ok:mk != null && mk >= 80},
    {k:'No weak areas remaining', v:weak, need:0, ok:weak === 0, raw:true, invert:true}
  ];
  const okCount = pillars.filter(p => p.ok).length;
  const overall = pct(okCount, pillars.length);
  let verdict;
  if (okCount === pillars.length) verdict = 'Exam Ready';
  else if (overall >= 70) verdict = 'Nearly Ready';
  else if (overall >= 35) verdict = 'Developing';
  else verdict = 'Not Ready';
  return { pillars, okCount, overall, verdict };
}

/* ============================== ROUTER ============================== */
const VIEWS = [
  {id:'dashboard', label:'Dashboard',       ico:'▤'},
  {id:'examinfo',  label:'Exam Requirements',ico:'◉'},
  {id:'course',    label:'Course',           ico:'▦'},
  {id:'flashcards',label:'Flashcards',       ico:'▣'},
  {id:'practice',  label:'Practice',         ico:'✓'},
  {id:'math',      label:'Math',             ico:'∑'},
  {id:'tests',     label:'Section Tests',    ico:'▧'},
  {id:'mock',      label:'Mock Exams',       ico:'◈'},
  {id:'weak',      label:'Weak Areas',       ico:'▲'},
  {id:'glossary',  label:'Glossary',         ico:'≡'},
  {id:'formulas',  label:'Formula Sheet',    ico:'ƒ'},
  {id:'refs',      label:'References',       ico:'❐'},
  {id:'ready',     label:'Exam Readiness',   ico:'★'},
  {id:'plans',     label:'Study Plans',      ico:'▥'}
];

let route = {v:'dashboard', a:null, b:null};

function go(v, a, b){
  route = {v, a:a||null, b:b||null};
  closeDrawer();
  render();
  window.scrollTo(0,0);
}

/* ============================== RENDER ============================== */
function render(){
  const app = $('#app');
  app.innerHTML = '';
  const view = VIEWS.find(x => x.id === route.v) || VIEWS[0];
  $('#viewTitle').textContent = view.label;

  document.querySelectorAll('#navList button').forEach(b => {
    b.classList.toggle('active', b.dataset.v === route.v);
  });
  document.querySelectorAll('.tab').forEach(b => {
    b.classList.toggle('active', b.dataset.goto === route.v);
  });

  ({
    dashboard:  vDashboard,
    examinfo:   vExamInfo,
    course:     vCourse,
    flashcards: vFlashcards,
    practice:   vPractice,
    math:       vMath,
    tests:      vTests,
    mock:       vMock,
    weak:       vWeak,
    glossary:   vGlossary,
    formulas:   vFormulas,
    refs:       vRefs,
    ready:      vReady,
    plans:      vPlans
  }[route.v] || vDashboard)(app);
}

function crumb(app, text, back){
  const b = el('button','crumb','‹ ' + text);
  b.onclick = back;
  app.appendChild(b);
}

/* ------------------------------ DASHBOARD ------------------------------ */
function vDashboard(app){
  const cp = courseProgress(), ta = testAverage(), ma = mathAverage(), mk = mockAverage();
  const due = cardsDue(), r = readiness();

  const hero = el('div','card');
  hero.appendChild(el('h1', null, isOIT() ? 'EOCP Operator-in-Training (OIT)' : 'EOCP Wastewater Treatment Level I'));
  hero.appendChild(el('p','muted small', isOIT()
    ? 'ONE exam covering all four streams — water treatment, water distribution, wastewater collection and wastewater treatment. Broad, practical and safety-heavy.'
    : 'Built to the WPI/ABC standardized Class I exam introduced July 2025 — 100 questions across four duty areas. Everything here is weighted the way the real exam is.'));
  const rb = el('div','spread');
  rb.appendChild(el('div',null,`<strong>Overall readiness</strong><br><span class="muted small">${r.okCount} of ${r.pillars.length} readiness checks passed</span>`));
  rb.appendChild(el('span','pill ' + bandClass(r.overall), r.verdict));
  hero.appendChild(rb);
  const bar = el('div','bar ' + bandClass(r.overall));
  bar.appendChild(el('i')); bar.firstChild.style.width = r.overall + '%';
  hero.appendChild(bar);
  app.appendChild(hero);

  const g = el('div','grid grid-2');
  [
    ['Course', cp.pct + '%'],
    ['Test avg', ta == null ? '—' : ta + '%'],
    ['Math avg', ma == null ? '—' : ma + '%'],
    ['Cards due', String(due)]
  ].forEach(([l,v]) => {
    const s = el('div','stat', `<b>${v}</b><span>${l}</span>`);
    g.appendChild(s);
  });
  app.appendChild(g);

  /* Duty-area weighting reminder */
  const fmt = el('div','card');
  fmt.appendChild(el('h3',null,'The exam, in one box'));
  const fg = el('div','grid grid-2');
  (isOIT()
    ? [['100','Questions'],['4','Streams covered'],['4','Content areas'],['500 h','or 90 h training']]
    : [['100','Scored questions'],['+10','Unscored pre-test'],['3 hrs','Time limit'],['70%','Pass (scaled)']]
  ).forEach(([v,l2]) => fg.appendChild(el('div','stat', `<b style="font-size:1.15rem">${v}</b><span>${l2}</span>`)));
  fmt.appendChild(fg);
  fmt.appendChild(el('p','muted xs', isOIT()
    ? 'One exam covering water treatment, water distribution, wastewater collection AND wastewater treatment. Entry requirement: 3 months (500 h) experience OR 90 h (9.0 CEUs) approved training. <strong>OFFICIAL</strong> — see Exam Requirements.'
    : 'Closed book · no personal notes · no programmable calculators · ABC Formula/Conversion Table provided · calculations given in both US and metric units. <strong>OFFICIAL</strong> — see Exam Requirements for sources.'));
  app.appendChild(fmt);
  if (isOIT()){
    const warn = el('div','callout field');
    warn.innerHTML = '<span class="lbl">Studying for OIT, not Level I</span>' +
      'The OIT exam covers <strong>all four streams</strong>. Wastewater Treatment Level I material alone will <strong>not</strong> cover it — half the OIT exam is water treatment and distribution. ' +
      'Switch tracks with the <strong>OIT / WWT 1</strong> button at the top right when you move on to Level I; progress on each is saved separately.';
    app.appendChild(warn);
  }

  const duty = el('div','card');
  if (isOIT()){
    duty.appendChild(el('h3',null,'The four OIT content areas'));
    duty.appendChild(el('p','muted small','EOCP tests these four areas. The exact split of the 100 questions is not published — this app assumes an even spread for planning only.'));
    Object.values(OIT_DUTIES).forEach(d => {
      const row = el('div','spread small'); row.style.padding='7px 0';
      row.innerHTML = `<span>${d.name}</span><span class="pill">assumed ~${d.pct}%</span>`;
      duty.appendChild(row);
    });
    app.appendChild(duty);
  } else {
  duty.appendChild(el('h3',null,'Where the marks actually are'));
  duty.appendChild(el('p','muted small','Spend your study time in proportion to this. Equipment and Treatment Process together are 77 of the 100 questions.'));
  EXAM_INFO.outline.duties.forEach(d => {
    const row = el('div',null);
    row.appendChild(el('div','spread small',`<span>${d.name}</span><strong>${d.q}</strong>`));
    const b = el('div','bar'); const i = el('i'); i.style.width = d.q + '%'; b.appendChild(i);
    row.appendChild(b);
    row.style.marginBottom = '10px';
    duty.appendChild(row);
  });
  app.appendChild(duty);
  }

  /* Next actions */
  const next = el('div','card');
  next.appendChild(el('h3',null,'What to do next'));
  const acts = [];
  if (due > 0) acts.push(['Review ' + due + ' flashcard' + (due>1?'s':'') + ' due', () => go('flashcards')]);
  const unread = lessons().find(l => !S.lessonsRead[l.id]);
  if (unread) acts.push([`Read: ${unread.moduleN}.${unread.title}`, () => go('course', unread.moduleId, unread.id)]);
  const untested = modules().find(m => !S.tests[m.id] && m.lessons.every(l => S.lessonsRead[l.id]));
  if (untested) acts.push([`Take the Module ${untested.n} section test`, () => go('tests', untested.id)]);
  const w = weakAreas()[0];
  if (w) acts.push([`Work on your weakest area: ${w.m.title} (${w.score}%)`, () => go('weak')]);
  if (!isOIT() && !Object.keys(S.mocks).length) acts.push(['Try Mock Exam 1 to benchmark yourself', () => go('mock')]);
  if (!acts.length) acts.push([isOIT() ? 'Everything is up to date — review flashcards' : 'Everything is up to date — take a mock exam', () => go(isOIT() ? 'flashcards' : 'mock')]);
  acts.slice(0,4).forEach(([t,fn]) => {
    const b = el('button','item', `<span class="t">${t}</span>`);
    b.onclick = fn; next.appendChild(b);
  });
  app.appendChild(next);

  /* Weak / strong */
  const ws = el('div','card');
  ws.appendChild(el('h3',null,'Weak and strong topics'));
  const weak = weakAreas(), strong = strongAreas();
  if (!weak.length && !strong.length){
    ws.appendChild(el('p','muted small','Take a section test or answer some practice questions and this will populate.'));
  } else {
    if (weak.length){
      ws.appendChild(el('div','small',`<strong>Needs work</strong>`));
      const line = el('div','badge-line');
      weak.forEach(x => line.appendChild(el('span','pill bad', `${x.m.title} ${x.score}%`)));
      ws.appendChild(line);
    }
    if (strong.length){
      ws.appendChild(el('div','small',`<strong style="display:block;margin-top:10px">Strong</strong>`));
      const line = el('div','badge-line');
      strong.forEach(x => line.appendChild(el('span','pill good', `${x.m.title} ${x.score}%`)));
      ws.appendChild(line);
    }
  }
  app.appendChild(ws);

  /* Mock scores */
  if (!isOIT() && Object.keys(S.mocks).length){
    const mc = el('div','card');
    mc.appendChild(el('h3',null,'Mock exam scores'));
    EXAM_DEFS.forEach(d => {
      const m = S.mocks[d.id];
      const row = el('div','spread small');
      row.style.padding = '7px 0';
      row.innerHTML = `<span>${d.name}</span>` +
        (m ? `<span class="pill ${bandClass(m.pct)}">${m.pct}%</span>` : `<span class="pill">Not taken</span>`);
      mc.appendChild(row);
    });
    if (mk != null) mc.appendChild(el('p','muted small',`Average across mock exams taken: <strong>${mk}%</strong>`));
    app.appendChild(mc);
  }
}

/* ------------------------------ EXAM INFO ------------------------------ */
function vExamInfo(app){
  if (isOIT()) return vExamInfoOIT(app);
  const c = el('div','card');
  c.appendChild(el('h1',null,'EOCP Wastewater Treatment Level I — Exam Requirements'));
  c.appendChild(el('p','muted small', EXAM_INFO.updated +
    '. Items marked OFFICIAL come from EOCP or WPI published material. Anything this app could not verify is listed separately at the bottom — it is flagged rather than guessed.'));
  app.appendChild(c);

  const o = el('div','card');
  o.appendChild(el('h3',null,'Official requirements'));
  EXAM_INFO.official.forEach(x => {
    const d = el('details');
    d.appendChild(el('summary',null, x.k + ' <span class="pill accent" style="margin-left:6px">OFFICIAL</span>'));
    d.appendChild(el('div','small', x.v));
    o.appendChild(d);
  });
  app.appendChild(o);

  const b = el('div','card');
  b.appendChild(el('h3',null,'What the Level I exam covers'));
  b.appendChild(el('p','small', `<strong>${EXAM_INFO.outline.total} questions total.</strong> ${EXAM_INFO.outline.note}`));
  const wrap = el('div','scroll-x');
  const t = el('table','tbl');
  t.innerHTML = '<thead><tr><th>Duty area</th><th>Questions</th></tr></thead>';
  const tb = el('tbody');
  EXAM_INFO.outline.duties.forEach(d => {
    const tr = el('tr');
    tr.innerHTML = `<td><strong>${d.name}</strong><br><span class="muted xs">${d.detail}</span></td><td><strong>${d.q}</strong></td>`;
    tb.appendChild(tr);
  });
  t.appendChild(tb); wrap.appendChild(t); b.appendChild(wrap);
  app.appendChild(b);

  const u = el('div','card');
  u.appendChild(el('h3',null,'Not verified — confirm with EOCP directly'));
  u.appendChild(el('p','muted small','Being straight with you: the following could not be confirmed from official sources while building this app. Do not rely on assumptions here.'));
  const ul = el('ul','small');
  EXAM_INFO.unverified.forEach(x => ul.appendChild(el('li',null,x)));
  u.appendChild(ul);
  app.appendChild(u);

  const l = el('div','card');
  l.appendChild(el('h3',null,'Official links'));
  EXAM_INFO.links.forEach(x => {
    const a = el('a','item', `<span class="t">${x.t}</span><span class="s">${x.u}</span>`);
    a.href = x.u; a.target = '_blank'; a.rel = 'noopener';
    l.appendChild(a);
  });
  app.appendChild(l);
}

function vExamInfoOIT(app){
  const c = el('div','card');
  c.appendChild(el('h1',null,'EOCP Operator-in-Training — Exam Requirements'));
  c.appendChild(el('p','muted small','Items tagged OFFICIAL come from EOCP published material. Anything that could not be confirmed is flagged UNVERIFIED rather than guessed.'));
  app.appendChild(c);

  const o = el('div','card');
  o.appendChild(el('h3',null,'Official requirements'));
  OIT_INFO.official.forEach(x => {
    const d = el('details');
    d.appendChild(el('summary',null, x.k + ' <span class="pill accent" style="margin-left:6px">OFFICIAL</span>'));
    d.appendChild(el('div','small', x.v));
    o.appendChild(d);
  });
  app.appendChild(o);

  const u = el('div','card');
  u.appendChild(el('h3',null,'Not verified — confirm with EOCP'));
  const ul = el('ul','small');
  OIT_INFO.unverified.forEach(x => ul.appendChild(el('li',null,x)));
  u.appendChild(ul);
  app.appendChild(u);

  const l = el('div','card');
  l.appendChild(el('h3',null,'Official links'));
  l.appendChild(el('p','muted xs','Links were gathered from indexed search results and could not be opened live from the machine that built this app. Treat them as best-known addresses.'));
  OIT_INFO.links.forEach(x => {
    const a = el('a','item', `<span class="t">${x.t}</span><span class="s">${x.u}</span>`);
    a.href = x.u; a.target='_blank'; a.rel='noopener';
    l.appendChild(a);
  });
  app.appendChild(l);
}

/* ------------------------------ COURSE ------------------------------ */
function vCourse(app){
  if (route.b) return vLesson(app);
  if (route.a) return vModule(app);

  app.appendChild(el('p','muted small','Twelve modules mapped to the four exam duty areas. Read a lesson to mark it complete; each module ends with a section test.'));
  modules().forEach(m => {
    const read = m.lessons.filter(l => S.lessonsRead[l.id]).length;
    const st = moduleStatus(m);
    const b = el('button','item');
    b.innerHTML =
      `<span class="t">Module ${m.n} — ${m.title}</span>` +
      `<span class="s">${m.blurb}</span>` +
      `<span class="badge-line">
         <span class="pill accent">${duties()[m.duty].name}</span>
         <span class="pill">${read}/${m.lessons.length} lessons</span>
         <span class="pill ${st==='Exam Ready'||st==='Nearly Ready'?'good':st==='Not Ready'?'':'warn'}">${st}</span>
       </span>`;
    b.onclick = () => go('course', m.id);
    app.appendChild(b);
  });
}

function vModule(app){
  const m = modules().find(x => x.id === route.a);
  if (!m) return go('course');
  crumb(app,'All modules',() => go('course'));
  const h = el('div','card');
  h.appendChild(el('h1',null,`Module ${m.n} — ${m.title}`));
  h.appendChild(el('p','muted small', m.blurb));
  h.appendChild(el('p','xs muted',`Exam area: <strong>${duties()[m.duty].name}</strong>${isOIT() ? '' : ` — ${duties()[m.duty].q} of 100 questions`}.`));
  app.appendChild(h);

  m.lessons.forEach((l,i) => {
    const done = !!S.lessonsRead[l.id];
    const b = el('button','item');
    b.innerHTML = `<span class="t">${m.n}.${i+1} ${l.title}</span>` +
      `<span class="badge-line"><span class="pill ${done?'good':''}">${done?'Read':'Not read'}</span></span>`;
    b.onclick = () => go('course', m.id, l.id);
    app.appendChild(b);
  });

  const t = S.tests[m.id];
  const tb = el('button','btn btn-block');
  tb.style.marginTop = '8px';
  tb.textContent = t ? `Retake section test (last: ${t.pct}%)` : 'Take the section test';
  tb.onclick = () => go('tests', m.id);
  app.appendChild(tb);
}

function vLesson(app){
  const m = modules().find(x => x.id === route.a);
  const l = m && m.lessons.find(x => x.id === route.b);
  if (!l) return go('course');
  crumb(app, `Module ${m.n}`, () => go('course', m.id));

  const c = el('div','card');
  c.appendChild(el('h1',null,l.title));

  const block = (title, inner) => {
    const b = el('div','block');
    b.appendChild(el('div','block-h', title));
    b.appendChild(inner);
    return b;
  };

  c.appendChild(block('1 · What you need to know', el('div','callout', `<span class="lbl">Exam focus</span>${l.need}`)));

  const learn = el('div');
  l.learn.forEach(p => learn.appendChild(el('p',null,p)));
  c.appendChild(block('2 · Learn it', learn));

  c.appendChild(block('3 · Operator knowledge', el('p',null,l.operator)));
  if (l.industrial){
    c.appendChild(block('3b · Industrial wastewater example',
      el('div','callout field','<span class="lbl">Industrial wastewater example — NOT typical municipal treatment</span>' + l.industrial)));
  }
  c.appendChild(block('4 · Equipment', el('p',null,l.equipment)));

  const tw = el('div','scroll-x');
  const tt = el('table','tbl');
  tt.innerHTML = '<thead><tr><th>Problem</th><th>What to check</th></tr></thead>';
  const tbo = el('tbody');
  l.trouble.forEach(x => {
    const tr = el('tr');
    tr.innerHTML = `<td><strong>${x.p}</strong></td><td>${x.c}</td>`;
    tbo.appendChild(tr);
  });
  tt.appendChild(tbo); tw.appendChild(tt);
  c.appendChild(block('5 · Troubleshooting', tw));

  const terms = el('div');
  l.terms.forEach(t => {
    const d = el('details');
    d.appendChild(el('summary',null,t.t));
    d.appendChild(el('div','small',t.d));
    terms.appendChild(d);
  });
  c.appendChild(block('6 · Key terms', terms));

  const tips = el('ul','small');
  l.tips.forEach(t => tips.appendChild(el('li',null,t)));
  c.appendChild(block('7 · Exam tips', tips));
  app.appendChild(c);

  /* 8 & 9 — practice questions with hidden answers */
  const qs = questions().filter(q => q.l === l.id);
  if (qs.length){
    const qc = el('div','card');
    qc.appendChild(el('h3',null,'8 · Practice questions'));
    qc.appendChild(el('p','muted small','Answers stay hidden until you choose. Pick the option you believe is right.'));
    qs.forEach((q,i) => qc.appendChild(questionCard(q, i+1, true)));
    app.appendChild(qc);
  }

  const done = el('button','btn btn-block');
  done.textContent = S.lessonsRead[l.id] ? '✓ Marked as read' : 'Mark lesson as read';
  done.onclick = () => { S.lessonsRead[l.id] = true; save(); render(); };
  app.appendChild(done);
}

/* Reusable question card. immediate = reveal answer as soon as one is chosen. */
function questionCard(q, n, immediate, state){
  const card = el('div','q');
  const P = present(q);
  const typeLabel = q.t === 'calc' ? 'Calculation' : q.t === 'sc' ? 'Scenario' : 'Multiple choice';
  card.appendChild(el('div','q-n', `Question ${n} · ${typeLabel}`));
  card.appendChild(el('div','q-t', q.q));
  const opts = [];
  P.o.forEach((o,i) => {
    const b = el('button','opt', `<span class="k">${'ABCD'[i]}</span><span>${o}</span>`);
    b.onclick = () => {
      if (immediate){
        if (card.dataset.answered) return;
        card.dataset.answered = '1';
        opts.forEach((x,xi) => {
          x.disabled = true;
          if (xi === P.a) x.classList.add('correct');
          else if (xi === i) x.classList.add('wrong');
        });
        const ok = i === P.a;
        S.practice[q.id] = { correct: ok, ts: now() };
        save();
        const ex = el('div','expl', `<b>${ok ? 'Correct.' : 'Not quite — the answer is ' + 'ABCD'[P.a] + '.'}</b> ${q.e}`);
        card.appendChild(ex);
      } else {
        opts.forEach(x => x.classList.remove('sel'));
        b.classList.add('sel');
        if (state) state[q.id] = i;
      }
    };
    opts.push(b);
    card.appendChild(b);
  });
  return card;
}

/* ------------------------------ FLASHCARDS ------------------------------ */
let fcState = null;

function vFlashcards(app){
  if (!route.a){
    app.appendChild(el('p','muted small',
      'Leitner spaced repetition: cards you get right move up a box and come back later; cards you miss reset to box 1 and return immediately. Boxes review after 0, 1, 3, 7 and 16 days.'));

    const ALL = cards();
    const due = ALL.filter(c => { const s = S.cards[c.id]; return !s || s.due <= now(); });
    const all = el('button','item');
    all.innerHTML = `<span class="t">Review all due cards</span><span class="s">${due.length} card${due.length===1?'':'s'} ready now, out of ${ALL.length} total</span>`;
    all.onclick = () => { startCards(due.length ? due : ALL); };
    app.appendChild(all);

    const box = {1:0,2:0,3:0,4:0,5:0};
    ALL.forEach(c => { const s = S.cards[c.id]; box[s ? s.box : 1]++; });
    const bc = el('div','card');
    bc.appendChild(el('h3',null,'Your boxes'));
    const g = el('div','grid grid-3');
    for (let i=1;i<=5;i++){
      g.appendChild(el('div','stat', `<b>${box[i]}</b><span>Box ${i}${i===5?' ✓':''}</span>`));
    }
    bc.appendChild(g);
    bc.appendChild(el('p','muted xs','Box 5 means mastered. Aim to empty boxes 1 and 2 before your exam.'));
    app.appendChild(bc);

    const dc = el('div','card');
    dc.appendChild(el('h3',null,'By module'));
    modules().forEach(m => {
      const cards = cardsFor(m.id);
      if (!cards.length) return;
      const d = cards.filter(c => { const s = S.cards[c.id]; return !s || s.due <= now(); }).length;
      const b = el('button','item');
      b.innerHTML = `<span class="t">Module ${m.n} — ${m.title}</span><span class="s">${cards.length} cards · ${d} due</span>`;
      b.onclick = () => startCards(cards);
      dc.appendChild(b);
    });
    app.appendChild(dc);
    return;
  }
  renderCard(app);
}

function startCards(cards){
  if (!cards.length) return;
  fcState = { deck: seededShuffle(cards, cards.length + 7), i:0, flipped:false, done:0 };
  go('flashcards','run');
}

function renderCard(app){
  if (!fcState || fcState.i >= fcState.deck.length){
    const c = el('div','card center');
    c.appendChild(el('div','empty','<span class="big">✓</span>Deck complete'));
    c.appendChild(el('p','muted small',`You reviewed ${fcState ? fcState.done : 0} cards.`));
    const b = el('button','btn'); b.textContent = 'Back to flashcards';
    b.onclick = () => { fcState = null; go('flashcards'); };
    c.appendChild(b);
    app.appendChild(c);
    return;
  }
  const card = fcState.deck[fcState.i];
  crumb(app,'Flashcards',() => { fcState = null; go('flashcards'); });
  app.appendChild(el('p','muted small center',`Card ${fcState.i+1} of ${fcState.deck.length} · Box ${(S.cards[card.id]||{box:1}).box} · ${card.tag}`));

  const fc = el('div','fc');
  fc.innerHTML = fcState.flipped
    ? `<div class="side">Answer</div><div class="body ans">${card.a}</div>`
    : `<div class="side">Question</div><div class="body">${card.q}</div>`;
  fc.onclick = () => { fcState.flipped = !fcState.flipped; render(); };
  app.appendChild(fc);

  if (!fcState.flipped){
    const b = el('button','btn btn-block'); b.textContent = 'Show answer';
    b.onclick = () => { fcState.flipped = true; render(); };
    app.appendChild(b);
  } else {
    const row = el('div','row');
    const mk = (label, cls, right) => {
      const b = el('button','btn ' + cls);
      b.style.flex = '1'; b.textContent = label;
      b.onclick = () => {
        const cur = S.cards[card.id] || {box:1};
        const box = right ? Math.min(5, cur.box + 1) : 1;
        S.cards[card.id] = { box, due: now() + LEITNER_INTERVALS[box] * DAY };
        save();
        fcState.done++; fcState.i++; fcState.flipped = false;
        render();
      };
      return b;
    };
    row.appendChild(mk('Got it wrong','btn-quiet', false));
    row.appendChild(mk('Got it right','', true));
    app.appendChild(row);
  }
}

/* ------------------------------ PRACTICE ------------------------------ */
function vPractice(app){
  if (route.a){
    const m = modules().find(x => x.id === route.a);
    const qs = questions().filter(q => q.m === route.a);
    crumb(app,'Practice',() => go('practice'));
    app.appendChild(el('h1',null,`Module ${m.n} — ${m.title}`));
    app.appendChild(el('p','muted small','Answers reveal as soon as you choose, with an explanation. Nothing is graded here — this is for learning.'));
    const c = el('div','card');
    qs.forEach((q,i) => c.appendChild(questionCard(q, i+1, true)));
    app.appendChild(c);
    return;
  }
  app.appendChild(el('p','muted small','Untimed practice by module, with immediate feedback and explanations.'));
  modules().forEach(m => {
    const qs = questions().filter(q => q.m === m.id);
    if (!qs.length) return;
    const ans = qs.filter(q => S.practice[q.id]);
    const right = ans.filter(q => S.practice[q.id].correct).length;
    const b = el('button','item');
    b.innerHTML = `<span class="t">Module ${m.n} — ${m.title}</span>` +
      `<span class="s">${qs.length} questions${ans.length ? ` · ${right}/${ans.length} correct so far` : ''}</span>`;
    b.onclick = () => go('practice', m.id);
    app.appendChild(b);
  });
}

/* ------------------------------ MATH ------------------------------ */
function vMath(app){
  if (route.a) return vMathTopic(app);
  const ma = mathAverage();
  const h = el('div','card');
  h.appendChild(el('h1',null,'Wastewater Mathematics'));
  h.appendChild(el('p','small','About <strong>14% of the exam</strong> requires calculations, and 9 of the calculation items sit in the Treatment Process duty area. You are given the ABC/EOCP formula sheet at the exam — so practise <em>choosing</em> formulas and handling units, not memorising.'));
  h.appendChild(el('div','callout','<span class="lbl">Units — read this before you start</span>WPI presents calculation items in <strong>both US Standard and Metric units</strong>, US Standard first with metric in parentheses, and each item is solvable in either system independently. Every topic below has a <strong>US Units</strong> practice problem alongside the metric ones — do both. A basic four-function calculator is all you need; programmable calculators are not permitted.'));
  if (ma != null) h.appendChild(el('p','muted small',`Your math accuracy so far: <strong>${ma}%</strong>`));
  app.appendChild(h);

  const cats = [...new Set(MATH_TOPICS.map(t => t.cat))];
  cats.forEach(cat => {
    const c = el('div','card');
    c.appendChild(el('h3',null,cat));
    MATH_TOPICS.filter(t => t.cat === cat).forEach(t => {
      const done = t.practice.filter((p,i) => S.math[t.id+'-'+i]).length;
      const b = el('button','item');
      b.innerHTML = `<span class="t">${t.title}</span><span class="s">${done}/${t.practice.length} practice problems attempted</span>`;
      b.onclick = () => go('math', t.id);
      c.appendChild(b);
    });
    app.appendChild(c);
  });
}

function vMathTopic(app){
  const t = MATH_TOPICS.find(x => x.id === route.a);
  if (!t) return go('math');
  crumb(app,'Math topics',() => go('math'));

  const c = el('div','card');
  c.appendChild(el('h1',null,t.title));

  c.appendChild(el('div','block-h','1 · Formula'));
  c.appendChild(el('div','formula', t.formula.replace(/\n/g,'<br>')));

  c.appendChild(el('div','block-h','2 · What each variable means'));
  const w = el('div','scroll-x'); const tb = el('table','tbl');
  tb.innerHTML = '<thead><tr><th>Symbol</th><th>Meaning</th><th>Units</th></tr></thead>';
  const body = el('tbody');
  t.vars.forEach(v => {
    const tr = el('tr');
    tr.innerHTML = `<td><strong>${v.s}</strong></td><td>${v.m}</td><td>${v.u}</td>`;
    body.appendChild(tr);
  });
  tb.appendChild(body); w.appendChild(tb); c.appendChild(w);

  c.appendChild(el('div','block-h','3 · When to use it'));
  c.appendChild(el('div','callout', `<span class="lbl">Judgement, not memorisation</span>${t.when}`));

  c.appendChild(el('div','block-h','4 · Worked example'));
  const we = el('div','callout');
  we.appendChild(el('p','small',`<strong>${t.worked.q}</strong>`));
  const ol = el('ol','small');
  t.worked.steps.forEach(s => ol.appendChild(el('li',null,s)));
  we.appendChild(ol);
  we.appendChild(el('p','small',`<strong>Answer: ${t.worked.a}</strong>`));
  c.appendChild(we);
  app.appendChild(c);

  const pc = el('div','card');
  pc.appendChild(el('h3',null,'5 · Practice problems'));
  pc.appendChild(el('p','muted small','Work it out on paper first, then enter your answer. Explanations appear once you check.'));
  t.practice.forEach((p,i) => {
    const key = t.id + '-' + i;
    const box = el('div','q');
    box.appendChild(el('div','q-n', p.lvl));
    box.appendChild(el('div','q-t', p.q));
    const input = el('input'); input.type = 'number'; input.step = 'any';
    input.placeholder = 'Your answer' + (p.u ? ' in ' + p.u : '');
    box.appendChild(input);
    const btn = el('button','btn btn-sm'); btn.textContent = 'Check answer';
    btn.style.marginTop = '9px';
    btn.onclick = () => {
      if (box.dataset.done) return;
      const val = parseFloat(input.value);
      if (isNaN(val)){ input.focus(); return; }
      box.dataset.done = '1';
      const ok = Math.abs(val - p.a) <= p.tol;
      S.math[key] = { correct: ok, ts: now() };
      save();
      input.disabled = true; btn.disabled = true;
      box.appendChild(el('div','expl',
        `<b>${ok ? 'Correct.' : 'Not quite.'}</b> Answer: <strong>${p.a}${p.u ? ' ' + p.u : ''}</strong><br>${p.e}`));
      updateNav();
    };
    box.appendChild(btn);
    const prev = S.math[key];
    if (prev) box.appendChild(el('div','expl small',
      `Previously answered — you got this <strong>${prev.correct ? 'right' : 'wrong'}</strong>. Answer: ${p.a}${p.u ? ' ' + p.u : ''}. ${p.e}`));
    pc.appendChild(box);
  });
  app.appendChild(pc);
}

/* ------------------------------ SECTION TESTS ------------------------------ */
let testState = null;

function vTests(app){
  if (route.a) return runTest(app, route.a);
  app.appendChild(el('p','muted small','Each section test draws from that module\'s question bank — multiple choice, operator scenarios and calculations where applicable. Answers stay hidden until you submit.'));
  modules().forEach(m => {
    const qs = questions().filter(q => q.m === m.id);
    const t = S.tests[m.id];
    const b = el('button','item');
    b.innerHTML = `<span class="t">Module ${m.n} — ${m.title}</span>` +
      `<span class="s">${qs.length} questions</span>` +
      `<span class="badge-line">${t ? `<span class="pill ${bandClass(t.pct)}">Last score ${t.pct}%</span>` : '<span class="pill">Not attempted</span>'}</span>`;
    b.onclick = () => go('tests', m.id);
    app.appendChild(b);
  });
}

function runTest(app, moduleId){
  const m = modules().find(x => x.id === moduleId);
  const qs = questions().filter(q => q.m === moduleId);
  if (!m || !qs.length) return go('tests');

  if (!testState || testState.mid !== moduleId){
    testState = { mid: moduleId, answers: {}, submitted: false, result: null };
  }
  crumb(app,'Section tests',() => { testState = null; go('tests'); });

  const h = el('div','card');
  h.appendChild(el('h1',null,`Module ${m.n} Section Test`));
  h.appendChild(el('p','muted small',`${qs.length} questions. Answers are not shown until you submit.`));
  app.appendChild(h);

  if (testState.submitted) return showTestResult(app, m, qs);

  const c = el('div','card');
  qs.forEach((q,i) => c.appendChild(questionCard(q, i+1, false, testState.answers)));
  app.appendChild(c);

  const sub = el('div','sticky-submit');
  const b = el('button','btn btn-block');
  b.textContent = 'Submit test';
  b.onclick = () => {
    const answered = Object.keys(testState.answers).length;
    if (answered < qs.length && !confirm(`You have answered ${answered} of ${qs.length}. Submit anyway?`)) return;
    let score = 0; const wrong = [];
    qs.forEach(q => { if (testState.answers[q.id] === present(q).a) score++; else wrong.push(q.id); });
    const p = pct(score, qs.length);
    testState.submitted = true;
    testState.result = { score, total: qs.length, pct: p, wrong };
    S.tests[moduleId] = { score, total: qs.length, pct: p, ts: now(), wrong };
    save(); render(); window.scrollTo(0,0);
  };
  sub.appendChild(b);
  app.appendChild(sub);
}

function showTestResult(app, m, qs){
  const r = testState.result;
  const c = el('div','card');
  c.appendChild(el('div','center', `<div style="font-size:2.6rem;font-weight:800;color:var(--accent)">${r.pct}%</div>
    <div class="muted small">${r.score} of ${r.total} correct</div>`));
  const bar = el('div','bar ' + bandClass(r.pct)); const i = el('i'); i.style.width = r.pct + '%'; bar.appendChild(i);
  c.appendChild(bar);
  const verdict = r.pct >= 85 ? 'Exam Ready on this module.'
    : r.pct >= 70 ? 'Nearly Ready — review the misses, then move on.'
    : r.pct >= 50 ? 'Developing. Re-read the lessons behind your wrong answers before retesting.'
    : 'Not Ready on this module. Work back through the lessons and flashcards before retaking.';
  c.appendChild(el('p','small center', verdict));
  app.appendChild(c);

  if (r.wrong.length){
    const w = el('div','card');
    w.appendChild(el('h3',null,'What you got wrong, and why'));
    const lessonIds = new Set();
    r.wrong.forEach(qid => {
      const q = qs.find(x => x.id === qid);
      lessonIds.add(q.l);
      const box = el('div','q');
      box.appendChild(el('div','q-t', q.q));
      const Pq = present(q);
      const chosen = testState.answers[qid];
      box.appendChild(el('div','small muted',
        `You chose: <strong>${chosen != null ? 'ABCD'[chosen] + ' — ' + Pq.o[chosen] : 'nothing'}</strong>`));
      box.appendChild(el('div','small', `Correct answer: <strong>${'ABCD'[Pq.a]} — ${Pq.o[Pq.a]}</strong>`));
      box.appendChild(el('div','expl', q.e));
      w.appendChild(box);
    });
    app.appendChild(w);

    const rv = el('div','card');
    rv.appendChild(el('h3',null,'Lessons to review'));
    rv.appendChild(el('p','muted small','These are the topics behind your wrong answers.'));
    [...lessonIds].forEach(lid => {
      const l = lessons().find(x => x.id === lid);
      if (!l) return;
      const b = el('button','item', `<span class="t">${l.title}</span><span class="s">Module ${l.moduleN} — ${l.moduleTitle}</span>`);
      b.onclick = () => { testState = null; go('course', l.moduleId, l.id); };
      rv.appendChild(b);
    });
    app.appendChild(rv);
  } else {
    app.appendChild(el('div','card center','<div class="empty"><span class="big">✓</span>Perfect score — nothing to review.</div>'));
  }

  const row = el('div','row');
  const a = el('button','btn btn-quiet'); a.style.flex='1'; a.textContent = 'Retake test';
  a.onclick = () => { testState = null; go('tests', m.id); };
  const b2 = el('button','btn'); b2.style.flex='1'; b2.textContent = 'Back to tests';
  b2.onclick = () => { testState = null; go('tests'); };
  row.appendChild(a); row.appendChild(b2);
  app.appendChild(row);
}

/* ------------------------------ MOCK EXAMS ------------------------------ */
let mockState = null;

/* Assemble an exam weighted to the real duty distribution.
 *
 * Each duty's pool is shuffled with a FIXED seed, so every exam sees the same
 * ordering. `def.start` then selects a different WINDOW of that ordering per exam,
 * which is what keeps the five exams from repeating each other's questions.
 * (Reseeding the shuffle per exam does not do this — it reshuffles the same
 * members and produces heavy overlap.) */
function buildExam(def){
  const picked = [];
  const pool = MOCK_BANK.filter(q => def.levels.includes(q.lvl));
  Object.keys(DUTY_WEIGHT).forEach(d => {
    const set = seededShuffle(pool.filter(q => q.d === d), d.charCodeAt(0) * 7 + 13);
    if (!set.length) return;
    const want = Math.min(Math.round(def.n * DUTY_WEIGHT[d]), set.length);
    const start = (def.start || 0) % set.length;
    for (let i = 0; i < want; i++) picked.push(set[(start + i) % set.length]);
  });
  /* de-duplicate, then top up from the wider pool if a duty pool ran short */
  const seen = new Set(); const out = [];
  picked.forEach(q => { if (!seen.has(q.id)){ seen.add(q.id); out.push(q); } });
  const extra = seededShuffle(pool.filter(q => !seen.has(q.id)), (def.start || 0) + 99);
  let k = 0;
  while (out.length < def.n && k < extra.length){ out.push(extra[k++]); }
  return seededShuffle(out.slice(0, def.n), (def.start || 0) + 42);
}

function vMock(app){
  if (route.a) return runMock(app, route.a);
  const c = el('div','card');
  c.appendChild(el('h1',null,'Mock Exams'));
  c.appendChild(el('p','small','Five original exams, each weighted to the real duty distribution (Equipment 39%, Treatment Process 38%, Lab 13%, Safety/Admin 10%).'));
  c.appendChild(el('div','callout field','<span class="lbl">Be clear on this</span>These are <strong>not</strong> actual EOCP or WPI exam questions. They are original questions written to test the same knowledge areas as the published Class I Need-to-Know Criteria.'));
  app.appendChild(c);

  EXAM_DEFS.forEach(d => {
    const m = S.mocks[d.id];
    const b = el('button','item');
    b.innerHTML = `<span class="t">${d.name}</span><span class="s">${d.desc}</span>` +
      `<span class="badge-line"><span class="pill">${d.n} questions</span><span class="pill">~${d.mins} min</span>` +
      (m ? `<span class="pill ${bandClass(m.pct)}">Last: ${m.pct}%</span>` : '<span class="pill">Not taken</span>') + '</span>';
    b.onclick = () => go('mock', d.id);
    app.appendChild(b);
  });
}

function runMock(app, examId){
  const def = EXAM_DEFS.find(d => d.id === examId);
  if (!def) return go('mock');
  if (!mockState || mockState.id !== examId){
    mockState = { id: examId, qs: buildExam(def), answers:{}, submitted:false, result:null, started: now() };
  }
  crumb(app,'Mock exams',() => { mockState = null; go('mock'); });

  const h = el('div','card');
  h.appendChild(el('h1',null,def.name));
  h.appendChild(el('p','muted small',`${mockState.qs.length} questions · suggested time ${def.mins} minutes. Answers are hidden until you submit.`));
  app.appendChild(h);

  if (mockState.submitted) return showMockResult(app, def);

  const c = el('div','card');
  mockState.qs.forEach((q,i) => c.appendChild(questionCard(q, i+1, false, mockState.answers)));
  app.appendChild(c);

  const sub = el('div','sticky-submit');
  const b = el('button','btn btn-block');
  b.textContent = 'Submit exam';
  b.onclick = () => {
    const answered = Object.keys(mockState.answers).length;
    if (answered < mockState.qs.length && !confirm(`You have answered ${answered} of ${mockState.qs.length}. Submit anyway?`)) return;
    let score = 0; const wrong = [];
    const byDuty = {};
    mockState.qs.forEach(q => {
      byDuty[q.d] = byDuty[q.d] || {c:0,t:0};
      byDuty[q.d].t++;
      if (mockState.answers[q.id] === present(q).a){ score++; byDuty[q.d].c++; }
      else wrong.push(q.id);
    });
    const p = pct(score, mockState.qs.length);
    mockState.submitted = true;
    mockState.result = { score, total: mockState.qs.length, pct:p, wrong, byDuty };
    S.mocks[examId] = { score, total: mockState.qs.length, pct:p, ts: now(), byDuty, wrong };
    save(); render(); window.scrollTo(0,0);
  };
  sub.appendChild(b);
  app.appendChild(sub);
}

function showMockResult(app, def){
  const r = mockState.result;
  const c = el('div','card');
  c.appendChild(el('div','center', `<div style="font-size:2.8rem;font-weight:800;color:var(--accent)">${r.pct}%</div>
    <div class="muted small">${r.score} of ${r.total} correct</div>`));
  const bar = el('div','bar ' + bandClass(r.pct)); const i = el('i'); i.style.width = r.pct + '%'; bar.appendChild(i);
  c.appendChild(bar);

  const dutyPcts = Object.keys(r.byDuty).map(k => pct(r.byDuty[k].c, r.byDuty[k].t));
  const minDuty = Math.min(...dutyPcts);
  let status, cls;
  if (r.pct >= 80 && minDuty >= 70){ status = 'Exam Ready on this exam'; cls = 'good'; }
  else if (r.pct >= 70){ status = 'Nearly Ready — tighten your weak duty areas'; cls = 'warn'; }
  else if (r.pct >= 55){ status = 'Developing — keep studying'; cls = 'warn'; }
  else { status = 'Not Ready — go back to the lessons'; cls = 'bad'; }
  c.appendChild(el('div','center',`<span class="pill ${cls}" style="margin-top:10px">${status}</span>`));
  c.appendChild(el('p','muted xs center','<strong>Internal study benchmark — NOT an EOCP passing requirement.</strong> This app uses 80% overall with no duty area below 70%, set above the real standard to leave margin. EOCP\'s official passing standard is 70% scaled score units.'));
  app.appendChild(c);

  const d = el('div','card');
  d.appendChild(el('h3',null,'Score by duty area'));
  EXAM_INFO.outline.duties.forEach(dd => {
    const s = r.byDuty[dd.k];
    if (!s) return;
    const p = pct(s.c, s.t);
    const row = el('div'); row.style.marginBottom = '11px';
    row.appendChild(el('div','spread small',`<span>${dd.name}</span><strong>${s.c}/${s.t} · ${p}%</strong>`));
    const b = el('div','bar ' + bandClass(p)); const ii = el('i'); ii.style.width = p + '%'; b.appendChild(ii);
    row.appendChild(b);
    d.appendChild(row);
  });
  app.appendChild(d);

  const sw = el('div','card');
  const strongD = EXAM_INFO.outline.duties.filter(dd => r.byDuty[dd.k] && pct(r.byDuty[dd.k].c, r.byDuty[dd.k].t) >= 80);
  const weakD   = EXAM_INFO.outline.duties.filter(dd => r.byDuty[dd.k] && pct(r.byDuty[dd.k].c, r.byDuty[dd.k].t) < 70);
  sw.appendChild(el('h3',null,'Strong and weak'));
  if (strongD.length){
    const l = el('div','badge-line');
    strongD.forEach(dd => l.appendChild(el('span','pill good', dd.name)));
    sw.appendChild(el('div','small','<strong>Strong</strong>')); sw.appendChild(l);
  }
  if (weakD.length){
    const l = el('div','badge-line');
    weakD.forEach(dd => l.appendChild(el('span','pill bad', dd.name)));
    sw.appendChild(el('div','small',`<strong style="display:block;margin-top:10px">Needs work</strong>`)); sw.appendChild(l);
    sw.appendChild(el('p','muted small','Recommended review: work through the modules tagged with these duty areas in the Course section, then retake.'));
  }
  if (!strongD.length && !weakD.length) sw.appendChild(el('p','muted small','Scores are middling across the board — broad review recommended.'));
  app.appendChild(sw);

  if (r.wrong.length){
    const w = el('div','card');
    w.appendChild(el('h3',null,`Review your ${r.wrong.length} wrong answer${r.wrong.length===1?'':'s'}`));
    r.wrong.forEach(qid => {
      const q = mockState.qs.find(x => x.id === qid);
      const box = el('div','q');
      box.appendChild(el('div','q-n', EXAM_INFO.outline.duties.find(x=>x.k===q.d).name));
      box.appendChild(el('div','q-t', q.q));
      const Pq = present(q);
      const chosen = mockState.answers[qid];
      box.appendChild(el('div','small muted',
        `You chose: <strong>${chosen != null ? 'ABCD'[chosen] + ' — ' + Pq.o[chosen] : 'nothing'}</strong>`));
      box.appendChild(el('div','small',`Correct: <strong>${'ABCD'[Pq.a]} — ${Pq.o[Pq.a]}</strong>`));
      box.appendChild(el('div','expl', q.e));
      w.appendChild(box);
    });
    app.appendChild(w);
  }

  const row = el('div','row');
  const a = el('button','btn btn-quiet'); a.style.flex='1'; a.textContent = 'Retake';
  a.onclick = () => { mockState = null; go('mock', def.id); };
  const b2 = el('button','btn'); b2.style.flex='1'; b2.textContent = 'All mock exams';
  b2.onclick = () => { mockState = null; go('mock'); };
  row.appendChild(a); row.appendChild(b2);
  app.appendChild(row);
}

/* ------------------------------ WEAK AREAS ------------------------------ */
function vWeak(app){
  const weak = weakAreas();
  const h = el('div','card');
  h.appendChild(el('h1',null,'Weak Areas'));
  h.appendChild(el('p','muted small','Built from your section test scores and practice question accuracy. A module appears here when your combined score is under 70%.'));
  app.appendChild(h);

  if (!weak.length){
    app.appendChild(el('div','card','<div class="empty"><span class="big">✓</span>No weak areas identified yet.<br><span class="small">Take some section tests and this will fill in.</span></div>'));
  } else {
    weak.forEach(x => {
      const c = el('div','card');
      c.appendChild(el('div','spread',`<strong>Module ${x.m.n} — ${x.m.title}</strong><span class="pill ${bandClass(x.score)}">${x.score}%</span>`));
      const b = el('div','bar ' + bandClass(x.score)); const i = el('i'); i.style.width = x.score + '%'; b.appendChild(i);
      c.appendChild(b);
      c.appendChild(el('p','muted small',`Exam area: ${duties()[x.m.duty].name}.`));
      const row = el('div','row');
      const l = el('button','btn btn-sm btn-quiet'); l.textContent = 'Review lessons';
      l.onclick = () => go('course', x.m.id);
      const f = el('button','btn btn-sm btn-quiet'); f.textContent = 'Flashcards';
      f.onclick = () => startCards(cardsFor(x.m.id));
      const p = el('button','btn btn-sm'); p.textContent = 'Practice';
      p.onclick = () => go('practice', x.m.id);
      row.appendChild(l); row.appendChild(f); row.appendChild(p);
      c.appendChild(row);
      app.appendChild(c);
    });
  }

  /* Math weak spots */
  const mathWrong = MATH_TOPICS.filter(t =>
    t.practice.some((p,i) => S.math[t.id+'-'+i] && !S.math[t.id+'-'+i].correct));
  if (mathWrong.length){
    const c = el('div','card');
    c.appendChild(el('h3',null,'Math topics you have missed'));
    mathWrong.forEach(t => {
      const b = el('button','item',`<span class="t">${t.title}</span><span class="s">${t.cat}</span>`);
      b.onclick = () => go('math', t.id);
      c.appendChild(b);
    });
    app.appendChild(c);
  }
}

/* ------------------------------ GLOSSARY ------------------------------ */
function vGlossary(app){
  const h = el('div','card');
  h.appendChild(el('h1',null,'Glossary'));
  const G = glossary();
  h.appendChild(el('p','muted small',`${G.length} terms, drawn from every lesson in this track.`));
  const s = el('input'); s.type = 'text'; s.placeholder = 'Search terms…';
  h.appendChild(s);
  app.appendChild(h);

  const list = el('div','card');
  app.appendChild(list);
  const draw = (f) => {
    list.innerHTML = '';
    const items = G.filter(g =>
      !f || g.t.toLowerCase().includes(f) || g.d.toLowerCase().includes(f));
    if (!items.length){ list.appendChild(el('div','empty','No matching terms.')); return; }
    items.forEach(g => {
      const d = el('details');
      d.appendChild(el('summary',null,g.t));
      d.appendChild(el('div','small', g.d + `<br><span class="muted xs">${g.from}</span>`));
      list.appendChild(d);
    });
  };
  s.oninput = () => draw(s.value.trim().toLowerCase());
  draw('');
}

/* ------------------------------ FORMULA SHEET ------------------------------ */
function vFormulas(app){
  const h = el('div','card');
  h.appendChild(el('h1',null,'Formula Sheet'));
  h.appendChild(el('div','callout','<span class="lbl">Remember</span>A formula and conversion table is <strong>provided at the exam</strong>. Print the official ABC/EOCP sheet and use it for every practice problem so you know your way around it on the day.'));
  app.appendChild(h);

  const f = el('div','card');
  f.appendChild(el('h3',null,'Core formulas'));
  MATH_TOPICS.forEach(t => {
    const d = el('details');
    d.appendChild(el('summary',null,t.title));
    d.appendChild(el('div','formula', t.formula.replace(/\n/g,'<br>')));
    d.appendChild(el('div','small muted', t.when));
    const b = el('button','btn btn-sm'); b.textContent = 'Practise this';
    b.onclick = () => go('math', t.id);
    d.appendChild(b);
    f.appendChild(d);
  });
  app.appendChild(f);

  const c = el('div','card');
  c.appendChild(el('h3',null,'Conversions'));
  const cats = [...new Set(CONVERSIONS.map(x => x.c))];
  cats.forEach(cat => {
    c.appendChild(el('div','block-h', cat));
    const w = el('div','scroll-x'); const t = el('table','tbl'); const b = el('tbody');
    CONVERSIONS.filter(x => x.c === cat).forEach(x => {
      const tr = el('tr'); tr.innerHTML = `<td><strong>${x.a}</strong></td><td>${x.b}</td>`;
      b.appendChild(tr);
    });
    t.appendChild(b); w.appendChild(t); c.appendChild(w);
  });
  app.appendChild(c);

  const l = el('div','card');
  l.appendChild(el('h3',null,'Get the official sheet'));
  [
    {t:'ABC/EOCP Canadian Formula & Conversion Table — Wastewater', u:'https://eocp.ca/wp-content/uploads/2015/03/ABC-Formula-Sheet-WWTWWC.pdf'},
    {t:'Math for Operators — guide to using the ABC/EOCP formulas', u:'https://eocp.ca/wp-content/uploads/2023/06/2022-EOCP-Guide-to-the-EOCP-and-ABC-formulas-G.Faris_.pdf'},
    {t:'WPI Formula/Conversion Tables', u:'https://gowpi.org/services/abc-testing/formula-conversion-tables/'}
  ].forEach(x => {
    const a = el('a','item',`<span class="t">${x.t}</span><span class="s">${x.u}</span>`);
    a.href = x.u; a.target='_blank'; a.rel='noopener';
    l.appendChild(a);
  });
  app.appendChild(l);
}

/* ------------------------------ REFERENCES ------------------------------ */
function vRefs(app){
  app.appendChild(el('p','muted small','Only resources that genuinely help with EOCP Wastewater Treatment Level I. Nothing padded.'));
  REFERENCES.forEach(g => {
    const c = el('div','card');
    c.appendChild(el('div','spread',`<h3 style="margin:0">${g.tier}</h3><span class="pill ${g.tier==='ESSENTIAL'?'accent':''}">${g.items.length}</span>`));
    g.items.forEach(it => {
      const d = el('details');
      d.appendChild(el('summary',null,it.n));
      d.appendChild(el('div','small',
        `<div class="muted xs" style="margin-bottom:6px">${it.o} · ${it.y}</div>${it.w}`));
      const a = el('a','btn btn-sm'); a.href = it.u; a.target='_blank'; a.rel='noopener';
      a.textContent = 'Open resource';
      a.style.marginTop = '9px';
      d.appendChild(a);
      c.appendChild(d);
    });
    app.appendChild(c);
  });
}

/* ------------------------------ READINESS ------------------------------ */
function vReady(app){
  const r = readiness();
  const h = el('div','card');
  h.appendChild(el('h1',null,'Exam Readiness'));
  h.appendChild(el('div','center',
    `<div style="font-size:2.6rem;font-weight:800;color:var(--accent)">${r.overall}%</div>
     <span class="pill ${bandClass(r.overall)}">${r.verdict}</span>`));
  const bar = el('div','bar ' + bandClass(r.overall)); const i = el('i'); i.style.width = r.overall + '%'; bar.appendChild(i);
  h.appendChild(bar);
  h.appendChild(el('div','callout field','<span class="lbl">Internal study benchmark — NOT an EOCP passing requirement</span>' +
    'The 80% thresholds below are <strong>this app\'s own study benchmark</strong>, set deliberately above the real standard to leave you a margin. ' +
    'EOCP\'s actual passing standard is <strong>70% scaled score units</strong> (OFFICIAL). ' +
    'Scoring "Exam Ready" here does not guarantee a pass, and is not an EOCP assessment of any kind.'));
  h.appendChild(el('p','muted small center','Readiness uses seven separate metrics, not one test score. Every check must pass.'));
  app.appendChild(h);

  const c = el('div','card');
  c.appendChild(el('h3',null,'Readiness checks'));
  r.pillars.forEach(p => {
    const row = el('div','spread small');
    row.style.padding = '9px 0';
    row.style.borderBottom = '1px solid var(--line)';
    const val = p.raw ? (p.invert ? `${p.v} remaining` : `${p.v} / ${p.need}`) : `${p.v}% (need ${p.need}%)`;
    row.innerHTML = `<span>${p.k}<br><span class="muted xs">${val}</span></span>
      <span class="pill ${p.ok ? 'good' : 'bad'}">${p.ok ? 'Pass' : 'Not yet'}</span>`;
    c.appendChild(row);
  });
  app.appendChild(c);

  const m = el('div','card');
  m.appendChild(el('h3',null,'Module checklist'));
  m.appendChild(el('p','muted small','Not Ready → Developing → Nearly Ready → Exam Ready'));
  modules().forEach(mod => {
    const st = moduleStatus(mod);
    const cls = st === 'Exam Ready' ? 'good' : st === 'Nearly Ready' ? 'good' : st === 'Not Ready' ? '' : 'warn';
    const row = el('button','item');
    row.innerHTML = `<span class="t">Module ${mod.n} — ${mod.title}</span>
      <span class="badge-line"><span class="pill ${cls}">${st}</span>
      <span class="pill">${duties()[mod.duty].name}</span></span>`;
    row.onclick = () => go('course', mod.id);
    m.appendChild(row);
  });
  app.appendChild(m);
}

/* ------------------------------ STUDY PLANS ------------------------------ */
function vPlans(app){
  if (route.a){
    const p = STUDY_PLANS.find(x => x.id === route.a);
    if (!p) return go('plans');
    crumb(app,'Study plans',() => go('plans'));
    const h = el('div','card');
    h.appendChild(el('h1',null,p.name));
    h.appendChild(el('p','muted small',`${p.pace} · ${p.hrs}`));
    h.appendChild(el('p','small',p.note));
    app.appendChild(h);
    p.weeks.forEach(w => {
      const d = el('details');
      d.appendChild(el('summary',null,`Week ${w.w} — ${w.focus}`));
      const ul = el('ul','small');
      w.tasks.forEach(t => ul.appendChild(el('li',null,t)));
      d.appendChild(ul);
      app.appendChild(d);
    });
    return;
  }
  app.appendChild(el('p','muted small','Pick the plan that matches how much time you actually have. Be honest about it — an abandoned 4-week plan is worse than a finished 12-week one.'));
  STUDY_PLANS.forEach(p => {
    const b = el('button','item');
    b.innerHTML = `<span class="t">${p.name}</span><span class="s">${p.pace} · ${p.hrs}</span>
      <span class="badge-line"><span class="pill">${p.weeks.length} weeks</span></span>`;
    b.onclick = () => go('plans', p.id);
    app.appendChild(b);
  });
}

/* ============================== CHROME ============================== */
function buildNav(){
  const ul = $('#navList');
  VIEWS.forEach(v => {
    const li = el('li');
    const b = el('button','navlink', `<span class="ico">${v.ico}</span>${v.label}`);
    b.dataset.v = v.id;
    b.onclick = () => go(v.id);
    li.appendChild(b); ul.appendChild(li);
  });
  document.querySelectorAll('.tab').forEach(t => {
    t.onclick = () => go(t.dataset.goto);
  });
}
function openDrawer(){
  $('#drawer').classList.add('open');
  $('#scrim').hidden = false;
  $('#menuBtn').setAttribute('aria-expanded','true');
}
function closeDrawer(){
  $('#drawer').classList.remove('open');
  $('#scrim').hidden = true;
  $('#menuBtn').setAttribute('aria-expanded','false');
}
function updateNav(){ /* placeholder for future live badges */ }

function switchTrack(t){
  try { localStorage.setItem(KEY_BASE + '_track', t); } catch(e){}
  S = load();
  testState = mockState = fcState = null;
  for (const k in PRES) delete PRES[k];
  updateChrome();
  go('dashboard');
}
function updateChrome(){
  const oit = isOIT();
  const btn = document.getElementById('trackBtn');
  if (btn) btn.textContent = oit ? 'OIT' : 'WWT 1';
  const sub = document.querySelector('.topbar-title small');
  if (sub) sub.textContent = oit ? 'EOCP Operator-in-Training' : 'EOCP Wastewater Treatment I';
  const brand = document.querySelector('.brand');
  if (brand) brand.textContent = oit ? 'OIT' : 'WWT I';
  // math and mock exams are Level I material only
  document.querySelectorAll('#navList button').forEach(b => {
    const wwtOnly = ['math','mock','formulas'].includes(b.dataset.v);
    b.style.display = (oit && wwtOnly) ? 'none' : '';
  });
  document.querySelectorAll('.tab').forEach(b => {
    const wwtOnly = ['math','mock'].includes(b.dataset.goto);
    b.style.display = (oit && wwtOnly) ? 'none' : '';
  });
}

function applyTheme(){
  if (S.theme) document.documentElement.setAttribute('data-theme', S.theme);
  else document.documentElement.removeAttribute('data-theme');
}

/* ============================== BOOT ============================== */
function boot(){
  buildNav();
  applyTheme();
  updateChrome();
  $('#menuBtn').onclick = () => {
    $('#drawer').classList.contains('open') ? closeDrawer() : openDrawer();
  };
  $('#scrim').onclick = closeDrawer;
  $('#trackBtn').onclick = () => {
    const next = isOIT() ? 'WWT1' : 'OIT';
    const label = next === 'OIT' ? 'Operator-in-Training (OIT)' : 'Wastewater Treatment Level I';
    if (confirm(`Switch to ${label}?\n\nThese are two different exams with different content. Your progress on each is saved separately, so nothing is lost.`)){
      switchTrack(next);
    }
  };
  $('#themeBtn').onclick = () => {
    const cur = S.theme;
    S.theme = cur === 'dark' ? 'light' : cur === 'light' ? null : 'dark';
    save(); applyTheme();
  };
  $('#resetBtn').onclick = () => {
    if (confirm('Erase all progress — lessons read, test scores, flashcard boxes and math results? This cannot be undone.')){
      localStorage.removeItem(KEY);
      S = JSON.parse(JSON.stringify(BLANK));
      testState = mockState = fcState = null;
      applyTheme(); go('dashboard');
    }
  };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  render();
}

document.addEventListener('DOMContentLoaded', boot);
