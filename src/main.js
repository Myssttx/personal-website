import './style.css';

/* ════════════════════════════════════════════════════════════════
   ✏️  EDIT HERE
   BIRTH_DATE drives the live "AGE" counter in the top bar.
   Format: 'YYYY-MM-DD'.  ← replace with your real birthday.
   ════════════════════════════════════════════════════════════════ */
const BIRTH_DATE = '2008-06-15';

/* ─── Agent emblem artwork (line-art SVG, inherits agent color) ─── */
const GLYPHS = {
  aayush: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="120 24 192 65 192 175 120 216 48 175 48 65" stroke="currentColor" stroke-width="2" opacity="0.5"/>
    <path d="M120 70 L84 178" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
    <path d="M120 70 L156 178" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
    <path d="M100 142 H140" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
    <circle cx="120" cy="70" r="7" fill="currentColor"/>
    <path d="M48 86 V65 H69" stroke="currentColor" stroke-width="3"/>
    <path d="M192 154 V175 H171" stroke="currentColor" stroke-width="3"/>
  </svg>`,
  flowiq: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 140 C 98 116 168 112 212 136 C 162 152 96 158 44 140 Z" stroke="currentColor" stroke-width="3"/>
    <circle cx="48" cy="140" r="5" fill="currentColor"/>
    <path d="M30 92 C 96 74 156 76 214 96" stroke="currentColor" stroke-width="2.4" opacity="0.75"/>
    <path d="M28 112 C 96 96 156 98 216 116" stroke="currentColor" stroke-width="2.4" opacity="0.5"/>
    <path d="M40 176 C 102 188 158 186 206 172" stroke="currentColor" stroke-width="2.4" opacity="0.45"/>
    <path d="M205 89 l13 7 -13 7" stroke="currentColor" stroke-width="2.4" opacity="0.75"/>
  </svg>`,
  civitas: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4" stroke="currentColor" stroke-width="2">
      <path d="M36 152 H204 M36 180 H204 M36 208 H204"/>
      <path d="M70 140 V214 M106 140 V214 M142 140 V214 M178 140 V214"/>
    </g>
    <path d="M120 36 C 90 36 70 60 70 88 C 70 124 120 168 120 168 C 120 168 170 124 170 88 C 170 60 150 36 120 36 Z" stroke="currentColor" stroke-width="3"/>
    <circle cx="120" cy="88" r="19" stroke="currentColor" stroke-width="3"/>
  </svg>`,
  combustion: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M122 30 C 152 82 178 108 174 152 C 170 196 120 214 120 214 C 120 214 70 196 66 152 C 63 122 86 112 96 86 C 104 110 118 114 126 134 C 140 110 134 68 122 30 Z" stroke="currentColor" stroke-width="3"/>
    <path d="M120 100 C 134 122 142 138 138 158 C 134 182 120 190 120 190 C 120 190 106 182 102 158 C 100 144 110 130 120 100 Z" stroke="currentColor" stroke-width="2.6" opacity="0.7"/>
  </svg>`,
  research: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="58" y="58" width="124" height="124" stroke="currentColor" stroke-width="3"/>
    <path d="M120 58 V182 M58 120 H182" stroke="currentColor" stroke-width="2" opacity="0.55"/>
    <circle cx="89" cy="89" r="14" fill="currentColor"/>
    <circle cx="151" cy="151" r="14" stroke="currentColor" stroke-width="3"/>
    <path d="M99 99 L141 141" stroke="currentColor" stroke-width="2.6" stroke-dasharray="2 8" stroke-linecap="round"/>
    <path d="M58 78 V58 H78 M182 162 V182 H162" stroke="currentColor" stroke-width="3"/>
  </svg>`,
};

/* ─── Agents (your projects) ─── */
const AGENTS = [
  {
    id: 'aayush', short: 'AAYUSH', name: 'AAYUSH PAL', role: 'THE PLAYER',
    accent: '#ff4655', status: 'FOUNDER · ACTIVE',
    tagline: 'Builder · Researcher · Founder.',
    bio: "Seventeen, based in Denton, Texas, studying at the Texas Academy of Mathematics and Sciences. I build things that turn messy reality into something a computer can think about — and run a tutoring company on the side. Every agent here is a different answer to one question: what would it take to simulate this?",
    abilities: [
      { key: 'C', name: 'Right Abstraction', desc: "Math talent gaps are usually just timing problems in disguise." },
      { key: 'Q', name: 'Cheap Empiricism', desc: "A good model answers a thousand questions for the price of one." },
      { key: 'E', name: 'Decision-First', desc: "Chase problems whose answer changes what someone does tomorrow." },
      { key: 'X', name: 'Teach To Know', desc: "You don't know it until you've taught it to someone resistant.", ult: true },
    ],
    stack: 'denton tx · tams · founder · researcher',
  },
  {
    id: 'flowiq', short: 'FLOWIQ', name: 'FLOWIQ', role: 'DUELIST',
    accent: '#3fd0e8', status: 'ACTIVE · AUG 2025',
    tagline: 'Aerodynamics at the speed of intuition.',
    bio: "An AI-driven aerodynamics tool. Draw an airfoil, watch what the air does to it. CFD is slow and expensive — so FlowIQ trains a predictive model on simulation data and collapses an hours-long iteration loop down to milliseconds.",
    abilities: [
      { key: 'C', name: 'Predictive Net', desc: 'TensorFlow model trained on CFD airflow data.' },
      { key: 'Q', name: 'Lift / Drag Solver', desc: 'Optimizes L/D ratio across airfoil designs.' },
      { key: 'E', name: '3D Viewport', desc: 'Real-time airflow rendered with Three.js.' },
      { key: 'X', name: 'Millisecond Loop', desc: 'Full design iteration at near-zero latency.', ult: true },
    ],
    stack: 'python · tensorflow · fastapi · react · three.js',
  },
  {
    id: 'civitas', short: 'CIVITAS', name: 'CIVITAS', role: 'CONTROLLER',
    accent: '#4ade80', status: 'ACTIVE · OCT 2025',
    tagline: 'Local government you can actually use.',
    bio: "A civic-engagement platform. Report a pothole, track what's moving in your district, and read AI-summarized legislation instead of forty pages of legalese. Built on one assumption: civic disengagement is mostly a UX problem.",
    abilities: [
      { key: 'C', name: 'Issue Reporting', desc: 'Geotagged civic reports via Google Maps.' },
      { key: 'Q', name: 'Live Data Map', desc: 'Community data on an interactive Leaflet layer.' },
      { key: 'E', name: 'Policy Summarizer', desc: 'AI distills legislation into plain English.' },
      { key: 'X', name: 'Full-Stack Grid', desc: 'React, Flask and PostgreSQL, end to end.', ult: true },
    ],
    stack: 'react · flask · postgresql · google maps · leaflet',
  },
  {
    id: 'combustion', short: 'COMBUSTION', name: 'COMBUSTION ENGINE', role: 'INITIATOR',
    accent: '#ff8a3d', status: 'ACTIVE · JAN 2026',
    tagline: 'How much of your measurement is noise?',
    bio: "A Monte Carlo simulation that asks what most combustion experiments wave away — how much of a flame-speed measurement is actually noise? It models camera jitter and timing error, then runs thousands of randomized trials to find the truth.",
    abilities: [
      { key: 'C', name: 'Noise Model', desc: 'Simulates timing jitter and imaging error.' },
      { key: 'Q', name: 'Monte Carlo', desc: 'Thousands of randomized measurement trials.' },
      { key: 'E', name: 'Cantera Solver', desc: 'Chemical kinetics and flame-speed physics.' },
      { key: 'X', name: 'Uncertainty Map', desc: 'Quantifies the true confidence of a result.', ult: true },
    ],
    stack: 'python · numpy · pandas · matplotlib · cantera',
  },
  {
    id: 'research', short: 'P. DILEMMA', name: "PRISONER'S DILEMMA", role: 'SENTINEL',
    accent: '#a78bfa', status: 'ACTIVE · SEP 2025',
    tagline: 'When does cooperation become inevitable?',
    bio: "Undergraduate research with Dr. Timothy McMahan at the University of North Texas. Agent-based simulations of the repeated Prisoner's Dilemma, mapping the exact conditions under which cooperation stops being a fluke and becomes inevitable.",
    abilities: [
      { key: 'C', name: 'Agent Model', desc: 'Parameterized strategy agents in code.' },
      { key: 'Q', name: 'Repeated Games', desc: "Thousands of iterated Prisoner's Dilemma rounds." },
      { key: 'E', name: 'Strategy Analysis', desc: 'Tracks cooperation trends across trials.' },
      { key: 'X', name: 'Emergence', desc: 'Maps when cooperation locks in for good.', ult: true },
    ],
    stack: 'python · game theory · simulation · statistics',
  },
];

/* ─── Roster (your roles = your squad) ─── */
const ROSTER = [
  { n: '01', org: 'AAYUSH PAL', role: 'Founder · You', you: true },
  { n: '02', org: 'Univ. of North Texas', role: 'Research Assistant' },
  { n: '03', org: 'STEM Tutoring Co.', role: 'Founder · $3K MRR' },
  { n: '04', org: 'TAMS Academic Society', role: 'President' },
  { n: '05', org: 'TAMS Solar Car', role: 'Aero Design Lead' },
  { n: '06', org: 'HackTAMS', role: 'Jr. Coordinator' },
];

/* ─── Contact channels ─── */
const CONTACT = [
  { label: 'EMAIL', value: 'aayush.pal2008@gmail.com', href: 'mailto:aayush.pal2008@gmail.com' },
  { label: 'GITHUB', value: '@Myssttx', href: 'https://github.com/Myssttx' },
  { label: 'LINKEDIN', value: '/in/aayush1pal', href: 'https://www.linkedin.com/in/aayush1pal' },
  { label: 'PHONE', value: '214-493-8750', href: 'tel:2144938750' },
];

/* ════════════════════════════════════════════════════════════════ */

const app = document.querySelector('#app');
let activeId = AGENTS[0].id;

function buildShell() {
  app.innerHTML = `
  <div class="boot" id="boot">
    <div class="boot-inner">
      <div class="boot-name">AAYUSH PAL</div>
      <div class="boot-line">// INITIALIZING AGENT SELECT</div>
      <div class="boot-bar"><span></span></div>
      <div class="boot-status" id="boot-status">SECURING CONNECTION</div>
    </div>
  </div>

  <div class="fx" aria-hidden="true"></div>

  <header class="topbar">
    <div class="tb-left">
      <span class="diamond"></span>
      <div>
        <div class="tb-title">AGENT SELECT</div>
        <div class="tb-by">PERSONAL SITE OF AAYUSH PAL</div>
      </div>
    </div>
    <div class="tb-center">
      <div class="tb-cap">// AGE</div>
      <div class="timer"><span class="age" id="age"><span class="age-int">--</span><span class="age-dec"></span></span></div>
    </div>
    <div class="tb-right">
      <div class="tb-cap">// LOBBY</div>
      <div class="tb-mode">YC STARTUP SCHOOL '26</div>
    </div>
  </header>

  <div class="main">
    <aside class="roster">
      <div class="panel-cap">// ROSTER</div>
      <div id="roster">${ROSTER.map(rosterCard).join('')}</div>
    </aside>
    <div class="stage" id="stage"></div>
  </div>

  <div class="bottombar">
    <div class="bb-pick">
      <div class="panel-cap">// SELECT AGENT &nbsp;—&nbsp; ${AGENTS.length} AVAILABLE &nbsp;·&nbsp; ◄ ► TO CYCLE</div>
      <div class="picker" id="picker">${AGENTS.map(pickerCard).join('')}</div>
    </div>
    <button class="lockin" id="lockin">
      <span class="li-cap">// READY</span>
      <span class="li-main">LOCK IN</span>
    </button>
  </div>

  <div class="modal" id="modal" hidden>
    <div class="modal-bg" data-close></div>
    <div class="modal-card">
      <button class="modal-x" data-close aria-label="Close">&#10005;</button>
      <div class="modal-cap">// AGENT LOCKED IN</div>
      <div class="modal-title">OPEN A CHANNEL</div>
      <p class="modal-sub">Building at the edge of physics, code, or education — or want to argue about one of the agents? Reach out.</p>
      <div class="modal-grid">
        ${CONTACT.map(c => `<a class="cc" href="${c.href}" target="_blank" rel="noopener"><span class="cc-cap">${c.label}</span><span class="cc-val">${c.value}</span></a>`).join('')}
      </div>
    </div>
  </div>`;
}

function rosterCard(r) {
  return `<div class="rcard ${r.you ? 'you' : ''}">
    <div class="rc-n">${r.n}</div>
    <div class="rc-body">
      <div class="rc-org">${r.org}</div>
      <div class="rc-role">${r.role}</div>
    </div>
    <div class="rc-lock">${r.you ? '&#9733;' : '&#10003;'}</div>
  </div>`;
}

function pickerCard(a) {
  return `<button class="ptile" data-id="${a.id}" title="${a.name}">
    <span class="ptile-glyph" style="color:${a.accent}">${GLYPHS[a.id]}</span>
    <span class="ptile-name">${a.short}</span>
  </button>`;
}

function renderStage() {
  const a = AGENTS.find(x => x.id === activeId);
  document.documentElement.style.setProperty('--agent', a.accent);
  const stage = document.getElementById('stage');
  stage.innerHTML = `
    <div class="render">
      <span class="corner tl"></span><span class="corner tr"></span>
      <span class="corner bl"></span><span class="corner br"></span>
      <span class="scanbar"></span>
      <div class="render-ghost">${a.short}</div>
      <div class="render-emblem">${GLYPHS[a.id]}</div>
      <div class="render-meta">
        <div class="render-role">&#9670; ${a.role}</div>
        <h1 class="render-name">${a.name}</h1>
        <div class="abilities">
          ${a.abilities.map(ab => `
            <div class="ability ${ab.ult ? 'ult' : ''}">
              <div class="ab-key">${ab.key}</div>
              <div class="ab-text">
                <div class="ab-name">${ab.name}</div>
                <div class="ab-desc">${ab.desc}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <aside class="dossier">
      <div class="dossier-cap">// INTEL</div>
      <div class="dossier-status"><span class="dot"></span>STATUS // ${a.status}</div>
      <div class="dossier-tag">${a.tagline}</div>
      <p class="dossier-bio">${a.bio}</p>
      <div class="dossier-stack-cap">${a.id === 'aayush' ? '// LOADOUT' : '// STACK'}</div>
      <div class="dossier-stack">${a.stack}</div>
    </aside>`;
  stage.classList.remove('enter');
  void stage.offsetWidth;
  stage.classList.add('enter');
}

function selectAgent(id) {
  if (!AGENTS.some(a => a.id === id)) return;
  activeId = id;
  renderStage();
  document.querySelectorAll('.pcard').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });
}

function cycleAgent(dir) {
  const i = AGENTS.findIndex(a => a.id === activeId);
  selectAgent(AGENTS[(i + dir + AGENTS.length) % AGENTS.length].id);
}

/* ─── Live age counter ─── */
function startAgeCounter() {
  const birth = new Date(BIRTH_DATE + 'T00:00:00').getTime();
  const MS_PER_YEAR = 365.2425 * 24 * 3600 * 1000;
  const intEl = document.querySelector('.age-int');
  const decEl = document.querySelector('.age-dec');
  function tick() {
    const years = (Date.now() - birth) / MS_PER_YEAR;
    if (!isFinite(years) || years < 0) { intEl.textContent = '17'; decEl.textContent = ''; return; }
    const fixed = years.toFixed(8);
    const dot = fixed.indexOf('.');
    intEl.textContent = fixed.slice(0, dot);
    decEl.textContent = fixed.slice(dot);
  }
  tick();
  setInterval(tick, 55);
}

/* ─── Contact modal ─── */
function openModal() {
  const m = document.getElementById('modal');
  m.hidden = false;
  requestAnimationFrame(() => m.classList.add('open'));
}
function closeModal() {
  const m = document.getElementById('modal');
  m.classList.remove('open');
  setTimeout(() => { m.hidden = true; }, 260);
}

/* ─── Boot sequence ─── */
function runBoot() {
  const boot = document.getElementById('boot');
  const status = document.getElementById('boot-status');
  const msgs = ['SECURING CONNECTION', 'LOADING AGENTS', 'SYNCING ROSTER', 'AGENT SELECT READY'];
  let i = 0;
  const iv = setInterval(() => {
    i++;
    if (i < msgs.length) status.textContent = msgs[i];
  }, 340);
  setTimeout(() => { clearInterval(iv); status.textContent = msgs[msgs.length - 1]; boot.classList.add('done'); }, 1450);
  setTimeout(() => boot.remove(), 2050);
}

/* ─── Events ─── */
function bindEvents() {
  document.getElementById('picker').addEventListener('click', e => {
    const card = e.target.closest('.pcard');
    if (card) selectAgent(card.dataset.id);
  });
  document.getElementById('lockin').addEventListener('click', openModal);
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target.dataset.close !== undefined) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') cycleAgent(1);
    if (e.key === 'ArrowLeft') cycleAgent(-1);
  });
}

/* ─── Init ─── */
buildShell();
selectAgent(activeId);
startAgeCounter();
bindEvents();
runBoot();
