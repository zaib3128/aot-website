import { useState } from 'react'
import './ChroniclesPage.css'

const events = [
  { year: '~Year 743',  era: 'Ancient',  event: 'Ymir Fritz makes a deal with the devil of all earth, becoming the first and most powerful Titan. The nine titans are born from her power.' },
  { year: '~Year 830',  era: 'Pre-845',  event: 'Grisha Yeager is born in Marley. He joins the Eldian Restorationists, seeking to reclaim the Founding Titan for Eldia.' },
  { year: 'Year 832',   era: 'Pre-845',  event: 'Levi Ackerman is born in the Underground City beneath the Walls, growing up in poverty and crime.' },
  { year: 'Year 835',   era: 'Pre-845',  event: 'Eren Yeager is born in Shiganshina District. Mikasa Ackerman is born the same year.' },
  { year: 'Year 844',   era: 'Pre-845',  event: 'Grisha Yeager enters the Walls after escaping Marley. He meets Carla, settles in Shiganshina, and begins a new life.' },
  { year: 'Year 845',   era: 'The Fall', event: 'The Colossal Titan appears above Wall Maria. The gate is breached. The Armored Titan shatters the inner gate. Carla Yeager is devoured. Humanity loses a third of its territory in one night.' },
  { year: 'Year 845',   era: 'The Fall', event: 'Military sends 250,000 soldiers to reclaim Wall Maria. Almost all are killed — used as sacrificial fodder to reduce the population and food supply pressure inside.' },
  { year: 'Year 847',   era: 'Training', event: 'Eren, Mikasa, and Armin enlist in the 104th Cadet Corps alongside Reiner Braun, Bertholdt Hoover, Annie Leonhart, and others.' },
  { year: 'Year 850',   era: 'Rising',   event: 'Battle of Trost District. The Colossal Titan returns. Eren Yeager is swallowed by a Titan and awakens the power of the Attack Titan for the first time.' },
  { year: 'Year 850',   era: 'Rising',   event: 'Annie Leonhart is exposed as the Female Titan. She encases herself in an impenetrable crystal beneath Stohess District.' },
  { year: 'Year 850',   era: 'Rising',   event: 'Reiner and Bertholdt reveal themselves as the Armored and Colossal Titans — the very warriors who destroyed Wall Maria five years earlier.' },
  { year: 'Year 850',   era: 'Uprising', event: 'The corrupt royal government is overthrown. Historia Reiss is crowned Queen. The truth of the monarchy is exposed.' },
  { year: 'Year 850',   era: 'Uprising', event: 'The Survey Corps reaches Grisha\'s basement. His journals reveal: humanity was not alone. The outside world still exists — and it fears Paradis Island.' },
  { year: 'Year 854',   era: 'The End',  event: 'Eren Yeager activates the Rumbling using the Founding Titan. Millions of Wall Titans march toward the continent to destroy all life beyond Paradis.' },
  { year: 'Year 854',   era: 'The End',  event: 'The Alliance — former enemies united — battles Eren above Fort Salta. Mikasa Ackerman severs Eren\'s head. The Rumbling ends. The Titan powers vanish from the world.' },
]

const ERAS = ['All', 'Ancient', 'Pre-845', 'The Fall', 'Training', 'Rising', 'Uprising', 'The End']

const ERA_COLORS = {
  'Ancient'  : '#5A3A6A',
  'Pre-845'  : '#2A4A3A',
  'The Fall' : '#8B2020',
  'Training' : '#2A3A5A',
  'Rising'   : '#4A6741',
  'Uprising' : '#1A4A7A',
  'The End'  : '#5A4A1A',
}

const ChroniclesPage = () => {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? events
    : events.filter(e => e.era === filter)

  return (
    <div className="chronicles-page">

      {/* ── Hero ──────────────────────────────── */}
      <div className="chronicles-hero">
        <div className="chronicles-hero__grain" />
        <div className="chronicles-hero__content">
          <span className="chronicles-hero__eyebrow">Year 743 — Year 854</span>
          <h1 className="chronicles-hero__title">Chronicle<br /><em>of Paradis</em></h1>
          <p className="chronicles-hero__sub">
            A complete chronological record of every major event
            across 1,100 years of history.
          </p>
          <div className="chronicles-hero__stats">
            <div className="chronicles-hero__stat">
              <span className="chronicles-hero__stat-val">{events.length}</span>
              <span className="chronicles-hero__stat-key">Events</span>
            </div>
            <div className="chronicles-hero__divider" />
            <div className="chronicles-hero__stat">
              <span className="chronicles-hero__stat-val">7</span>
              <span className="chronicles-hero__stat-key">Eras</span>
            </div>
            <div className="chronicles-hero__divider" />
            <div className="chronicles-hero__stat">
              <span className="chronicles-hero__stat-val">1100+</span>
              <span className="chronicles-hero__stat-key">Years of History</span>
            </div>
          </div>
        </div>
        <div className="chronicles-hero__scroll"><span /></div>
      </div>

      {/* ── Era filters ───────────────────────── */}
      <div className="chronicles-filters">
        {ERAS.map(era => (
          <button
            key={era}
            className={`chronicles-filters__btn ${filter === era ? 'chronicles-filters__btn--active' : ''}`}
            style={filter === era && era !== 'All' ? { background: ERA_COLORS[era], borderColor: ERA_COLORS[era] } : {}}
            onClick={() => setFilter(era)}
          >
            {era !== 'All' && <span className="chronicles-filters__dot" style={{ background: ERA_COLORS[era] }} />}
            {era}
          </button>
        ))}
      </div>

      {/* ── Timeline ──────────────────────────── */}
      <div className="chronicles-timeline">
        <div className="chronicles-timeline__line" />
        {filtered.map((e, i) => (
          <div key={i} className="chronicle-event">
            <div className="chronicle-event__dot" style={{ borderColor: ERA_COLORS[e.era] }}>
              <div className="chronicle-event__dot-inner" style={{ background: ERA_COLORS[e.era] }} />
            </div>
            <div className="chronicle-event__card">
              <div className="chronicle-event__meta">
                <span
                  className="chronicle-event__era"
                  style={{ color: ERA_COLORS[e.era], borderColor: ERA_COLORS[e.era] + '44', background: ERA_COLORS[e.era] + '15' }}
                >
                  {e.era}
                </span>
                <span className="chronicle-event__year">{e.year}</span>
              </div>
              <p className="chronicle-event__text">{e.event}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── End marker ────────────────────────── */}
      <div className="chronicles-end">
        <div className="chronicles-end__dot" />
        <p className="chronicles-end__label">End of the Titan Era</p>
      </div>

    </div>
  )
}

export default ChroniclesPage