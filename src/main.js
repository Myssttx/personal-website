import './style.css';

/* ════════════════════════════════════════════════════════════════
   ✏️  EDIT HERE — birthday drives the live AGE counter.
   ════════════════════════════════════════════════════════════════ */
const BIRTH_DATE = '2008-10-21';

/* ─── Agent emblem artwork ─── */
const GLYPHS = {
  aayush: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <polygon points="120 16 209 66 209 174 120 224 31 174 31 66" fill="none" stroke="currentColor" stroke-width="4"/>
    <polygon points="120 44 184 80 184 160 120 196 56 160 56 80" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>
    <path fill="currentColor" d="M58 188 L120 56 L182 188 L150 188 L120 122 L90 188 Z"/>
    <rect x="100" y="150" width="40" height="15" fill="currentColor"/>
  </svg>`,
  flowiq: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M38 142 C 96 112 172 110 216 136 C 168 156 96 164 38 142 Z"/>
    <circle cx="44" cy="142" r="8" fill="currentColor"/>
    <path fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" d="M26 84 C 96 58 154 60 198 82"/>
    <path fill="currentColor" d="M190 68 l30 14 -30 14 Z"/>
    <path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity="0.5" d="M34 184 C 102 202 160 200 208 180"/>
  </svg>`,
  civitas: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor" opacity="0.9">
      <rect x="36" y="170" width="28" height="42"/>
      <rect x="72" y="146" width="28" height="66"/>
      <rect x="140" y="156" width="28" height="56"/>
      <rect x="176" y="178" width="28" height="34"/>
    </g>
    <path fill-rule="evenodd" fill="currentColor" d="M120 24 C 84 24 56 52 56 90 C 56 138 120 192 120 192 C 120 192 184 138 184 90 C 184 52 156 24 120 24 Z M120 66 C 134 66 145 77 145 90 C 145 103 134 114 120 114 C 106 114 95 103 95 90 C 95 77 106 66 120 66 Z"/>
  </svg>`,
  combustion: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" fill="currentColor" d="M128 22 C 162 78 188 108 184 158 C 180 208 120 226 120 226 C 120 226 60 208 56 158 C 53 126 80 112 92 80 C 101 108 117 116 126 140 C 142 110 140 64 128 22 Z M120 112 C 134 136 142 152 139 170 C 136 192 120 200 120 200 C 120 200 104 192 101 170 C 99 156 109 140 120 112 Z"/>
  </svg>`,
  research: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <rect x="48" y="48" width="144" height="144" fill="none" stroke="currentColor" stroke-width="8"/>
    <path stroke="currentColor" stroke-width="4" opacity="0.4" d="M120 48 V192 M48 120 H192"/>
    <path fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" d="M86 86 L154 154"/>
    <circle cx="86" cy="86" r="22" fill="currentColor"/>
    <circle cx="154" cy="154" r="20.5" fill="none" stroke="currentColor" stroke-width="9"/>
  </svg>`,
  tutoring: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M74 116 L120 136 L166 116 L166 150 C 166 150 150 180 120 180 C 90 180 74 150 74 150 Z"/>
    <path fill="currentColor" d="M120 50 L224 96 L120 142 L16 96 Z"/>
    <path fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M212 104 V160"/>
    <circle cx="212" cy="172" r="12" fill="currentColor"/>
  </svg>`,
  society: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" fill="currentColor" d="M120 24 L200 57 V121 C 200 174 120 216 120 216 C 120 216 40 174 40 121 V57 Z M120 78 L133 111 L168 113 L141 135 L150 170 L120 150 L90 170 L99 135 L72 113 L107 111 Z"/>
  </svg>`,
  hacktams: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="44" width="184" height="152" rx="8" fill="none" stroke="currentColor" stroke-width="8"/>
    <path stroke="currentColor" stroke-width="5" d="M32 78 H208"/>
    <circle cx="52" cy="61" r="5.5" fill="currentColor"/>
    <circle cx="71" cy="61" r="5.5" fill="currentColor"/>
    <path fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" d="M98 110 L66 141 L98 172"/>
    <path fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" d="M142 110 L174 141 L142 172"/>
    <path fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" d="M130 102 L110 180"/>
  </svg>`,
  solarcar: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" d="M24 86 C 92 58 156 58 200 80"/>
    <path fill="currentColor" d="M192 66 l30 14 -30 14 Z"/>
    <path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity="0.45" d="M32 112 C 96 92 152 92 206 106"/>
    <path fill="currentColor" d="M34 166 L70 128 Q 100 106 140 106 Q 184 106 200 142 L212 166 Z"/>
    <path fill-rule="evenodd" fill="currentColor" d="M67 176 a19 19 0 1 0 38 0 a19 19 0 1 0 -38 0 M77 176 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 M149 176 a19 19 0 1 0 38 0 a19 19 0 1 0 -38 0 M159 176 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0"/>
  </svg>`,
};

/* ─── Role class descriptions ─── */
const ROLES = {
  'THE PLAYER': "The one making the picks. Founder, researcher and tutor — the throughline connecting every agent on this roster.",
  'DUELIST': "Duelists take space and force the tempo. They create the openings everyone else builds on.",
  'CONTROLLER': "Controllers carve up dangerous territory — bending a messy map into something a team can actually use.",
  'INITIATOR': "Initiators challenge what's hidden. They gather intel, expose the unknown and set up the push.",
  'SENTINEL': "Sentinels are the anchors. They hold the line, watch the long game and lock a space down once it's won.",
};

/* ─── Agents ─── */
const AGENTS = [
  {
    id: 'aayush', short: 'AAYUSH', name: 'AAYUSH PAL', role: 'THE PLAYER',
    accent: '#ff4655', status: 'FOUNDER · ACTIVE',
    tagline: 'Builder. Researcher. Founder.',
    bio: "I'm 17, based in Denton, Texas, studying at TAMS — an early-college math and science program. I build a lot: the agents on this roster are software projects I've shipped, a research simulation, the tutoring company I run, and the teams I help lead. When something's broken or harder than it needs to be, I'd rather build the fix than sit around. And the agent-select theme isn't random — I peaked around top 1200 in Valorant, and the game's a big enough part of me that making my site a roster you scroll through and lock into just felt right.",
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

/* ─── Role filters ─── */
const FILTER_ICONS = {
  ALL: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3.5" y="3.5" width="7" height="7"/><rect x="13.5" y="3.5" width="7" height="7"/><rect x="3.5" y="13.5" width="7" height="7"/><rect x="13.5" y="13.5" width="7" height="7"/></svg>`,
  DUELIST: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14 L12 5 L20 14"/><path d="M7 19 L12 13 L17 19"/></svg>`,
  CONTROLLER: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><polygon points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5"/><circle cx="12" cy="12" r="3.4" fill="currentColor" stroke="none"/></svg>`,
  INITIATOR: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 L20 13 H15 V21 H9 V13 H4 Z"/></svg>`,
  SENTINEL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M12 3 L20 6.5 V12 C20 17 12 21 12 21 C12 21 4 17 4 12 V6.5 Z"/></svg>`,
};
const FILTERS = ['ALL', 'DUELIST', 'CONTROLLER', 'INITIATOR', 'SENTINEL'];

/* ════════════════════════════════════════════════════════════════ */

const app = document.querySelector('#app');
let activeId = null;
let activeTab = 'info';
let activeFilter = 'ALL';

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

  <div class="scene">
    <div class="env">
      <div class="env-sun"></div>
      <svg class="env-mtn" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <polygon class="mtn-3" points="0,320 0,196 200,150 420,188 640,134 880,180 1120,140 1340,182 1440,160 1440,320"/>
        <polygon class="mtn-2" points="0,320 0,238 210,176 440,222 660,166 900,216 1150,170 1370,212 1440,196 1440,320"/>
        <polygon class="mtn-1" points="0,320 0,280 260,232 520,270 780,228 1040,266 1300,232 1440,256 1440,320"/>
      </svg>
      <div class="env-haze"></div>
      <div class="env-ground"></div>
    </div>
    <div class="scrim scrim-l"></div>
    <div class="scrim scrim-r"></div>
    <div class="scrim scrim-b"></div>
    <div class="vignette"></div>

    <div class="character blank" id="character"></div>

    <div class="mapbox">
      <div class="mapbox-icon"><span></span></div>
      <div class="mapbox-text">
        <div class="mapbox-title">AGENT SELECT</div>
        <div class="mapbox-sub">PORTFOLIO — CUSTOM</div>
      </div>
      <div class="mapbox-thumb"><span>AP</span></div>
    </div>

    <aside class="sidebar">
      <div class="filter-row" id="filters">
        ${FILTERS.map(filterButton).join('')}
      </div>
      <div class="agent-grid" id="agrid">${AGENTS.map(gridTile).join('')}</div>
    </aside>

    <section class="info-panel" id="infopanel"></section>

    <div class="lockzone">
      <div class="timer">
        <span class="timer-cap">AGE</span>
        <span class="timer-val" id="age"><span class="age-int">--</span><span class="age-dec"></span></span>
      </div>
      <button class="lockin" id="lockin" disabled>LOCK IN</button>
      <div class="pickcard">
        <div class="pick-thumb" id="pickthumb"><span class="pick-q">?</span></div>
        <div class="pick-meta">
          <div class="pick-name">aayush</div>
          <div class="pick-status" id="pickstatus">Picking…</div>
        </div>
        <div class="pick-spk">&#9209;</div>
      </div>
    </div>

    <div class="corner-label team-label">Team: <b>AAYUSH PAL</b></div>
    <div class="corner-label enemy-label">LOBBY // YC STARTUP SCHOOL '26 <span class="diamonds">&#9670;&#9670;&#9670;&#9670;&#9670;</span></div>
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

function filterButton(f) {
  return `<button class="filter-btn ${f === 'ALL' ? 'active' : ''}" data-filter="${f}" title="${f}">
    ${FILTER_ICONS[f]}
  </button>`;
}

function gridTile(a) {
  return `<button class="atile" data-id="${a.id}" data-role="${a.role}" title="${a.name}" style="--ac:${a.accent}">
    <span class="atile-glyph">${GLYPHS[a.id]}</span>
    <span class="atile-tip">${a.short}</span>
  </button>`;
}

function applyFilter() {
  document.querySelectorAll('.atile').forEach(t => {
    const show = activeFilter === 'ALL' || t.dataset.role === activeFilter;
    t.classList.toggle('hidden', !show);
  });
}

/* ─── Center character ─── */
function renderCharacter() {
  const el = document.getElementById('character');
  if (!activeId) {
    el.classList.add('blank');
    el.innerHTML = `
      <div class="char-shadow blank"></div>
      <div class="char-blank">
        <div class="char-blank-ring"></div>
        <div class="char-blank-text">SELECT AN AGENT</div>
      </div>`;
    return;
  }
  const a = AGENTS.find(x => x.id === activeId);
  el.classList.remove('blank');
  el.innerHTML = `
    <div class="char-ghost">${a.short}</div>
    <div class="char-shadow"></div>
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
        <div class="ip-role">// NO AGENT SELECTED</div>
        <h1 class="ip-name">SELECT AN AGENT</h1>
        <p class="ip-desc">Pick an agent from the grid on the left to load their full breakdown — abilities, intel and loadout. Use the role filters above the grid, or the number keys 1–${AGENTS.length}.</p>
      </div>`;
    return;
  }
  const a = AGENTS.find(x => x.id === activeId);
  panel.classList.add('has-agent');
  panel.innerHTML = `
    <div class="ip-role">${a.role}</div>
    <h1 class="ip-name">${a.name}</h1>
    <div class="ip-tabs">
      <button class="ip-tab ${activeTab === 'info' ? 'active' : ''}" data-tab="info">INFO</button>
      ${a.abilities.map(ab => `<button class="ip-tab ip-tab-key ${activeTab === ab.key ? 'active' : ''} ${ab.ult ? 'ult' : ''}" data-tab="${ab.key}">${ab.key}</button>`).join('')}
    </div>
    <div class="ip-content">${infoContent(a)}</div>`;
}

function infoContent(a) {
  if (activeTab === 'info') {
    const metaCap = a.id === 'aayush' ? 'LOADOUT'
      : ['flowiq', 'civitas', 'combustion', 'research'].includes(a.id) ? 'STACK'
      : 'RECORD';
    return `
      <div class="ip-tag">${a.tagline}</div>
      <p class="ip-desc">${a.bio}</p>
      <div class="ip-rolehead">${a.role}</div>
      <p class="ip-roledesc">${ROLES[a.role]}</p>
      <div class="ip-metacap">${metaCap}</div>
      <div class="ip-meta">${a.stack}</div>`;
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
    <p class="ip-desc">${ab.desc}</p>`;
}

/* ─── Pick card ─── */
function updatePick() {
  const thumb = document.getElementById('pickthumb');
  const status = document.getElementById('pickstatus');
  if (!activeId) {
    thumb.innerHTML = `<span class="pick-q">?</span>`;
    thumb.style.removeProperty('--ac');
    status.textContent = 'Picking…';
    return;
  }
  const a = AGENTS.find(x => x.id === activeId);
  thumb.style.setProperty('--ac', a.accent);
  thumb.innerHTML = GLYPHS[a.id];
  status.textContent = a.short;
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
  updatePick();
  document.querySelectorAll('.atile').forEach(t => t.classList.toggle('active', t.dataset.id === id));
  document.getElementById('lockin').disabled = false;
}

function selectTab(tab) {
  activeTab = tab;
  renderInfo();
}

function selectFilter(f) {
  activeFilter = f;
  activeTab = activeTab;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  applyFilter();
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
  document.getElementById('filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (btn) selectFilter(btn.dataset.filter);
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
updatePick();
startAgeCounter();
bindEvents();
runBoot();
