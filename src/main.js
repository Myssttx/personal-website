import './style.css';

/* ════════════════════════════════════════════════════════════════
   ✏️  EDIT HERE
   BIRTH_DATE drives the live "AGE" counter (the Valorant timer slot).
   Format: 'YYYY-MM-DD'.
   ════════════════════════════════════════════════════════════════ */
const BIRTH_DATE = '2008-10-21';

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
  tutoring: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="120 56 212 96 120 136 28 96" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M78 113 V152 C 78 152 96 176 120 176 C 144 176 162 152 162 152 V113" stroke="currentColor" stroke-width="3"/>
    <path d="M212 96 V160" stroke="currentColor" stroke-width="3"/>
    <circle cx="212" cy="170" r="9" stroke="currentColor" stroke-width="3"/>
    <circle cx="120" cy="96" r="6" fill="currentColor"/>
  </svg>`,
  society: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M120 34 L188 62 V118 C 188 166 120 206 120 206 C 120 206 52 166 52 118 V62 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M120 82 L130 112.3 L161.8 112.4 L136.2 131.3 L145.9 161.6 L120 143 L94.1 161.6 L103.8 131.3 L78.2 112.4 L110 112.3 Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
  </svg>`,
  hacktams: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="34" y="50" width="172" height="140" stroke="currentColor" stroke-width="3"/>
    <path d="M34 78 H206" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="64" r="4" fill="currentColor"/>
    <circle cx="66" cy="64" r="4" fill="currentColor"/>
    <path d="M96 102 L66 134 L96 166" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M144 102 L174 134 L144 166" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M132 94 L108 174" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,
  solarcar: `<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 98 C 92 72 156 72 214 94" stroke="currentColor" stroke-width="2.6" opacity="0.7"/>
    <path d="M210 88 l14 6 -14 6" stroke="currentColor" stroke-width="2.6" opacity="0.7"/>
    <path d="M36 120 C 94 100 152 100 208 116" stroke="currentColor" stroke-width="2.6" opacity="0.4"/>
    <path d="M42 170 L72 140 Q 102 118 142 118 Q 182 118 200 148 L210 170 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="88" cy="170" r="17" stroke="currentColor" stroke-width="3"/>
    <circle cx="168" cy="170" r="17" stroke="currentColor" stroke-width="3"/>
  </svg>`,
};

/* ─── Role descriptions (Valorant-style class blurbs) ─── */
const ROLES = {
  'THE PLAYER': "The one making the picks. Founder, researcher and tutor — the throughline connecting every agent on this roster.",
  'DUELIST': "Duelists take space and force the tempo. They create the openings everyone else builds on.",
  'CONTROLLER': "Controllers carve up dangerous territory — bending a messy map into something a team can actually use.",
  'INITIATOR': "Initiators challenge what's hidden. They gather intel, expose the unknown and set up the push.",
  'SENTINEL': "Sentinels are the anchors. They hold the line, watch the long game and lock a space down once it's won.",
};

/* ─── Agents — projects, research, ventures and the teams I lead ─── */
const AGENTS = [
  {
    id: 'aayush', short: 'AAYUSH', name: 'AAYUSH PAL', role: 'THE PLAYER',
    accent: '#ff4655', status: 'FOUNDER · ACTIVE',
    tagline: 'Builder. Researcher. Founder.',
    bio: "Seventeen, based in Denton, Texas, studying at the Texas Academy of Mathematics and Sciences. I build things that turn messy reality into something a computer can think about. The agents on this roster are the projects I've built, the research I'm running and the teams I help lead — every one an attempt to take something complicated and make it legible.",
    abilities: [
      { key: 'C', name: 'Right Abstraction', desc: "Most 'talent gaps' in math aren't about ability — they're timing problems. A student handed the wrong representation three years too early looks behind forever, until someone swaps the abstraction." },
      { key: 'Q', name: 'Cheap Empiricism', desc: "A good simulation is the cheapest form of experiment. Model the system well enough and you can ask it a thousand questions for the price of running one in the real world." },
      { key: 'E', name: 'Decision-First', desc: "The problems worth chasing aren't the hardest ones — they're the ones whose answer changes what someone actually does tomorrow morning." },
      { key: 'X', name: 'Teach To Know', desc: "You don't truly understand something until you've taught it to someone who didn't want to learn it. Resistance is the real test of whether your model holds.", ult: true },
    ],
    stack: 'denton tx · tams · founder · researcher',
  },
  {
    id: 'flowiq', short: 'FLOWIQ', name: 'FLOWIQ', role: 'DUELIST',
    accent: '#3fd0e8', status: 'ACTIVE · AUG 2025',
    tagline: 'Aerodynamics at the speed of intuition.',
    bio: "An AI-driven aerodynamics tool. Draw an airfoil, watch what the air does to it. CFD is slow and expensive — so FlowIQ trains a predictive model on simulation data and collapses an hours-long iteration loop down to milliseconds.",
    abilities: [
      { key: 'C', name: 'Predictive Net', desc: "A TensorFlow model trained on CFD airflow data — it learns the mapping from airfoil geometry to aerodynamic behavior so you don't have to re-solve from scratch." },
      { key: 'Q', name: 'Lift / Drag Solver', desc: "Scores and optimizes the lift-to-drag ratio across a space of airfoil designs, surfacing the shapes that actually perform." },
      { key: 'E', name: '3D Viewport', desc: "Renders airflow over the airfoil in real time with Three.js — the simulation becomes something you can see and rotate, not just a number." },
      { key: 'X', name: 'Millisecond Loop', desc: "Collapses the design-test-iterate loop from hours of CFD down to milliseconds, so airfoil design becomes something you can feel your way through.", ult: true },
    ],
    stack: 'python · tensorflow · fastapi · react · three.js',
  },
  {
    id: 'civitas', short: 'CIVITAS', name: 'CIVITAS', role: 'CONTROLLER',
    accent: '#4ade80', status: 'ACTIVE · OCT 2025',
    tagline: 'Local government you can actually use.',
    bio: "A civic-engagement platform. Report a pothole, track what's moving in your district, and read AI-summarized legislation instead of forty pages of legalese. Built on one assumption: civic disengagement is mostly a UX problem.",
    abilities: [
      { key: 'C', name: 'Issue Reporting', desc: "Residents drop geotagged reports — potholes, outages, hazards — straight onto a live city map via the Google Maps API." },
      { key: 'Q', name: 'Live Data Map', desc: "Community data layered onto an interactive Leaflet map, so what's happening in a district is legible at a glance." },
      { key: 'E', name: 'Policy Summarizer', desc: "AI distills dense legislation into plain English — turning forty pages of legalese into something a resident will actually read." },
      { key: 'X', name: 'Full-Stack Grid', desc: "A complete React, Flask and PostgreSQL system tying reporting, data and policy into one civic platform.", ult: true },
    ],
    stack: 'react · flask · postgresql · google maps · leaflet',
  },
  {
    id: 'combustion', short: 'COMBUSTION', name: 'COMBUSTION ENGINE', role: 'INITIATOR',
    accent: '#ff8a3d', status: 'ACTIVE · JAN 2026',
    tagline: 'How much of your measurement is noise?',
    bio: "A Monte Carlo simulation that asks what most combustion experiments wave away — how much of a flame-speed measurement is actually noise? It models camera jitter and timing error, then runs thousands of randomized trials to find the truth.",
    abilities: [
      { key: 'C', name: 'Noise Model', desc: "Simulates the real error sources in a combustion experiment — camera timing jitter, imaging noise and edge-detection slop." },
      { key: 'Q', name: 'Monte Carlo', desc: "Runs thousands of randomized trials, propagating those errors through to see how the final measurement scatters." },
      { key: 'E', name: 'Cantera Solver', desc: "Uses Cantera for the underlying chemical kinetics and flame-speed physics, so the simulation is grounded in real combustion science." },
      { key: 'X', name: 'Uncertainty Map', desc: "Outputs the true confidence interval of a flame-speed measurement — the number most experiments quietly assume away.", ult: true },
    ],
    stack: 'python · numpy · pandas · matplotlib · cantera',
  },
  {
    id: 'research', short: 'P. DILEMMA', name: "PRISONER'S DILEMMA", role: 'SENTINEL',
    accent: '#a78bfa', status: 'ACTIVE · SEP 2025',
    tagline: 'When does cooperation become inevitable?',
    bio: "Undergraduate research with Dr. Timothy McMahan at the University of North Texas. Agent-based simulations of the repeated Prisoner's Dilemma, mapping the exact conditions under which cooperation stops being a fluke and becomes inevitable.",
    abilities: [
      { key: 'C', name: 'Agent Model', desc: "Parameterized strategy agents implemented in code — each one a different rule for when to cooperate and when to defect." },
      { key: 'Q', name: 'Repeated Games', desc: "Thousands of iterated Prisoner's Dilemma rounds, so strategies are judged on the long game, not a single move." },
      { key: 'E', name: 'Strategy Analysis', desc: "Tracks how cooperation rises or collapses across trials, comparing outcome distributions between strategies." },
      { key: 'X', name: 'Emergence', desc: "Maps the exact conditions under which cooperation stops being a fluke and locks in as the inevitable equilibrium.", ult: true },
    ],
    stack: 'python · game theory · simulation · statistics',
  },
  {
    id: 'tutoring', short: 'TUTORING', name: 'TUTORING CO.', role: 'DUELIST',
    accent: '#f2b134', status: 'FOUNDER · AUG 2023',
    tagline: 'Bootstrapped to $3K/month, one student at a time.',
    bio: "A student-run STEM tutoring company I started at fifteen. It grew past $3,000 in monthly revenue because I figured out most kids aren't behind — they were handed the wrong abstraction at the wrong time. Personalized math, physics and chemistry built around real conceptual understanding.",
    abilities: [
      { key: 'C', name: 'Personalized Curriculum', desc: "Every student gets lessons designed around their actual gaps — conceptual understanding and critical thinking, never memorization." },
      { key: 'Q', name: 'Grade Skipping', desc: "Targeted exam prep that's helped 30+ students place out of math classes — more than 60 grade levels skipped in total." },
      { key: 'E', name: 'Conceptual Teaching', desc: "Each lesson goes after the real misconception instead of the symptom — fixing the wrong abstraction at its root." },
      { key: 'X', name: 'Bootstrapped Venture', desc: "Founded at fifteen and grown entirely student-run to over $3,000 in monthly recurring revenue.", ult: true },
    ],
    stack: 'founded 2023 · flower mound tx · $3k+ mrr · 30+ students',
  },
  {
    id: 'society', short: 'ACAD SOC', name: 'ACADEMIC SOCIETY', role: 'SENTINEL',
    accent: '#4d9fff', status: 'PRESIDENT · AUG 2025',
    tagline: 'Running the academic heart of TAMS.',
    bio: "As President of the TAMS Academic Society — the primary academic organization on campus — I run tutoring initiatives, academic workshops and student events that make peer learning the default. Most of the job is logistics, recruiting and building programming people actually show up for.",
    abilities: [
      { key: 'C', name: 'Tutoring Initiatives', desc: "Organizes campus-wide peer tutoring so academic help is always one student away." },
      { key: 'Q', name: 'Academic Workshops', desc: "Runs workshops and study events that turn learning into something collaborative." },
      { key: 'E', name: 'Event Logistics', desc: "Coordinates logistics and recruits volunteers to keep the organization's programming running." },
      { key: 'X', name: 'Peer Learning', desc: "Drives participation in academic enrichment across the entire TAMS campus.", ult: true },
    ],
    stack: 'tams · denton tx · president · since 2025',
  },
  {
    id: 'hacktams', short: 'HACKTAMS', name: 'HACKTAMS', role: 'INITIATOR',
    accent: '#ee5aa8', status: 'COORDINATOR · AUG 2025',
    tagline: "Helping run TAMS's annual hackathon.",
    bio: "Junior Coordinator for HackTAMS, the annual student hackathon run by the TAMS Computer Science Organization. I help organize logistics, support participant teams through their builds, and keep the event a welcoming on-ramp for students new to programming.",
    abilities: [
      { key: 'C', name: 'Event Operations', desc: "Manages logistics and day-of operations for the annual HackTAMS hackathon." },
      { key: 'Q', name: 'Team Support', desc: "Supports participant teams through their projects, from first idea to final demo." },
      { key: 'E', name: 'Welcoming On-Ramp', desc: "Keeps the event approachable for first-time hackers and students new to code." },
      { key: 'X', name: 'Hackathon', desc: "Collaborates with the organizing crew to put on HackTAMS end to end.", ult: true },
    ],
    stack: 'tams cs org · denton tx · annual hackathon',
  },
  {
    id: 'solarcar', short: 'SOLAR CAR', name: 'TAMS SOLAR CAR', role: 'CONTROLLER',
    accent: '#f5e050', status: 'AERO LEAD · AUG 2025',
    tagline: 'Designing the air around a race car.',
    bio: "Aerodynamic Design Team Lead on the TAMS Solar Car. I spearhead the design and manufacturing of the car's aerodynamic kit — running thousands of CFD iterations to optimize airflow for racing — alongside a multidisciplinary team prototyping and evaluating vehicle systems for competition.",
    abilities: [
      { key: 'C', name: 'Aero Kit Design', desc: "Designs and manufactures the car's aerodynamic kit for competition racing." },
      { key: 'Q', name: 'CFD Iteration', desc: "Runs thousands of CFD simulations, optimizing airflow over the body shape by shape." },
      { key: 'E', name: 'Drag Reduction', desc: "Tunes the bodywork to cut drag and squeeze more range out of every watt of solar power." },
      { key: 'X', name: 'Competition Build', desc: "Prototypes and evaluates full vehicle systems with the team for race day.", ult: true },
    ],
    stack: 'tams solar car · cfd · aerodynamics · racing',
  },
];

const CONTACT = [
  { label: 'EMAIL', value: 'aayush.pal2008@gmail.com', href: 'mailto:aayush.pal2008@gmail.com' },
  { label: 'GITHUB', value: '@Myssttx', href: 'https://github.com/Myssttx' },
  { label: 'LINKEDIN', value: '/in/aayush1pal', href: 'https://www.linkedin.com/in/aayush1pal' },
  { label: 'PHONE', value: '214-493-8750', href: 'tel:2144938750' },
];

/* ════════════════════════════════════════════════════════════════ */

const app = document.querySelector('#app');
let activeId = null;      // ← starts BLANK
let activeTab = 'info';

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

  <div class="scene">
    <div class="env-bloom"></div>
    <div class="env-horizon"></div>
    <div class="env-floor"></div>
    <div class="scene-glow"></div>

    <div class="mapbox">
      <div class="mapbox-icon"><span></span></div>
      <div>
        <div class="mapbox-title">AGENT SELECT</div>
        <div class="mapbox-sub">AAYUSH PAL — PORTFOLIO '26</div>
      </div>
    </div>

    <aside class="grid-panel">
      <div class="panel-cap">// AGENTS — ${AGENTS.length} AVAILABLE</div>
      <div class="agrid" id="agrid">${AGENTS.map(gridTile).join('')}</div>
      <div class="panel-hint">SELECT AN AGENT &nbsp;·&nbsp; ◄ ► OR 1–${AGENTS.length}</div>
    </aside>

    <div class="character blank" id="character"></div>

    <section class="info-panel" id="infopanel"></section>

    <div class="lockzone">
      <div class="timer-cap">// AGE</div>
      <div class="timer"><span class="age" id="age"><span class="age-int">--</span><span class="age-dec"></span></span></div>
      <button class="lockin" id="lockin" disabled>
        <span class="li-cap">// READY</span>
        <span class="li-main">LOCK IN</span>
      </button>
    </div>

    <div class="flavor flavor-left">TEAM // AAYUSH PAL</div>
    <div class="flavor flavor-right">LOBBY // YC STARTUP SCHOOL '26 &nbsp;&#9670;&#9670;&#9670;&#9670;&#9670;</div>
  </div>

  <div class="modal" id="modal" hidden>
    <div class="modal-bg" data-close></div>
    <div class="modal-card">
      <button class="modal-x" data-close aria-label="Close">&#10005;</button>
      <div class="modal-cap">// AGENT LOCKED IN</div>
      <div class="modal-title">OPEN A CHANNEL</div>
      <p class="modal-sub">Building at the edge of physics, code or education — or want to argue about one of the agents? Reach out.</p>
      <div class="modal-grid">
        ${CONTACT.map(c => `<a class="cc" href="${c.href}" target="_blank" rel="noopener"><span class="cc-cap">${c.label}</span><span class="cc-val">${c.value}</span></a>`).join('')}
      </div>
    </div>
  </div>`;
}

function gridTile(a) {
  return `<button class="atile" data-id="${a.id}" title="${a.name}">
    <span class="atile-glyph" style="color:${a.accent}">${GLYPHS[a.id]}</span>
    <span class="atile-name">${a.short}</span>
  </button>`;
}

/* ─── Center character ─── */
function renderCharacter() {
  const el = document.getElementById('character');
  if (!activeId) {
    el.classList.add('blank');
    el.innerHTML = `
      <span class="corner tl"></span><span class="corner tr"></span>
      <span class="corner bl"></span><span class="corner br"></span>
      <div class="char-blank">
        <div class="char-blank-diamond"></div>
        <div class="char-blank-text">AWAITING SELECTION</div>
        <div class="char-blank-hint">// no agent loaded</div>
      </div>`;
    return;
  }
  const a = AGENTS.find(x => x.id === activeId);
  el.classList.remove('blank');
  el.innerHTML = `
    <span class="corner tl"></span><span class="corner tr"></span>
    <span class="corner bl"></span><span class="corner br"></span>
    <span class="char-scan"></span>
    <div class="char-ghost">${a.short}</div>
    <div class="char-emblem">${GLYPHS[a.id]}</div>`;
  el.classList.remove('enter');
  void el.offsetWidth;
  el.classList.add('enter');
}

/* ─── Right info panel ─── */
function renderInfo() {
  const panel = document.getElementById('infopanel');
  if (!activeId) {
    panel.classList.remove('has-agent');
    panel.innerHTML = `
      <div class="ip-blank">
        <div class="ip-cap">// no agent selected</div>
        <div class="ip-blank-title">SELECT AN AGENT</div>
        <p class="ip-blank-sub">Choose an agent from the grid on the left to load their full breakdown — abilities, intel and loadout.</p>
      </div>`;
    return;
  }
  const a = AGENTS.find(x => x.id === activeId);
  panel.classList.add('has-agent');
  panel.innerHTML = `
    <div class="ip-role">&#9670; ${a.role}</div>
    <h1 class="ip-name">${a.name}</h1>
    <div class="ip-tabs">
      <button class="ip-tab ${activeTab === 'info' ? 'active' : ''}" data-tab="info">INFO</button>
      ${a.abilities.map(ab => `<button class="ip-tab ip-tab-key ${activeTab === ab.key ? 'active' : ''} ${ab.ult ? 'ult' : ''}" data-tab="${ab.key}">${ab.key}</button>`).join('')}
    </div>
    <div class="ip-content">${infoContent(a)}</div>`;
}

function infoContent(a) {
  if (activeTab === 'info') {
    const metaCap = a.id === 'aayush' ? '// loadout'
      : ['flowiq', 'civitas', 'combustion', 'research'].includes(a.id) ? '// stack'
      : '// record';
    return `
      <div class="ip-tag">${a.tagline}</div>
      <p class="ip-bio">${a.bio}</p>
      <div class="ip-sub">// role &mdash; ${a.role}</div>
      <p class="ip-roledesc">${ROLES[a.role]}</p>
      <div class="ip-stackcap">${metaCap}</div>
      <div class="ip-stack">${a.stack}</div>`;
  }
  const ab = a.abilities.find(x => x.key === activeTab);
  return `
    <div class="ip-abil">
      <div class="ip-abil-key ${ab.ult ? 'ult' : ''}">${ab.key}</div>
      <div>
        <div class="ip-abil-cap">${ab.ult ? 'ULTIMATE' : 'ABILITY · ' + ab.key}</div>
        <div class="ip-abil-name">${ab.name}</div>
      </div>
    </div>
    <p class="ip-abil-desc">${ab.desc}</p>`;
}

/* ─── Selection ─── */
function selectAgent(id) {
  const a = AGENTS.find(x => x.id === id);
  if (!a) return;
  activeId = id;
  activeTab = 'info';
  document.documentElement.style.setProperty('--agent', a.accent);
  renderCharacter();
  renderInfo();
  document.querySelectorAll('.atile').forEach(t => t.classList.toggle('active', t.dataset.id === id));
  document.getElementById('lockin').disabled = false;
}

function selectTab(tab) {
  activeTab = tab;
  renderInfo();
}

function cycleAgent(dir) {
  if (!activeId) { selectAgent(dir > 0 ? AGENTS[0].id : AGENTS[AGENTS.length - 1].id); return; }
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
  const iv = setInterval(() => { i++; if (i < msgs.length) status.textContent = msgs[i]; }, 340);
  setTimeout(() => { clearInterval(iv); status.textContent = msgs[msgs.length - 1]; boot.classList.add('done'); }, 1450);
  setTimeout(() => boot.remove(), 2050);
}

/* ─── Events ─── */
function bindEvents() {
  document.getElementById('agrid').addEventListener('click', e => {
    const tile = e.target.closest('.atile');
    if (tile) selectAgent(tile.dataset.id);
  });
  document.getElementById('infopanel').addEventListener('click', e => {
    const tab = e.target.closest('.ip-tab');
    if (tab) selectTab(tab.dataset.tab);
  });
  document.getElementById('lockin').addEventListener('click', () => {
    if (activeId) openModal();
  });
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target.dataset.close !== undefined) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') cycleAgent(1);
    if (e.key === 'ArrowLeft') cycleAgent(-1);
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= AGENTS.length) selectAgent(AGENTS[n - 1].id);
  });
}

/* ─── Init ─── */
buildShell();
renderCharacter();
renderInfo();
startAgeCounter();
bindEvents();
runBoot();
