import { useState } from 'react'
import './StoryPage.css'

const seasons = [
  {
    season : 1,
    title  : 'The Fall',
    years  : 'Year 845 — 850',
    quote  : '"That day, humanity remembered the terror of being ruled by them."',
    color  : '#8B2020',
    arcs   : [
      {
        number      : '01',
        title       : 'The Fall of Wall Maria',
        year        : 'Year 845',
        description : 'On a peaceful day within the walls, the unthinkable happened. The Colossal Titan appeared above Wall Maria and breached it with a single kick. Moments later, the Armored Titan shattered the gate of Shiganshina. Titans flooded in. Millions fled. Eren Yeager watched his mother devoured, powerless.',
        consequence : 'Humanity lost a third of its territory overnight. 250,000 soldiers died in a failed reclamation attempt.',
        characters  : ['Eren Yeager', 'Mikasa Ackerman', 'Armin Arlert', 'Carla Yeager'],
      },
      {
        number      : '02',
        title       : 'Battle of Trost District',
        year        : 'Year 850',
        description : 'Five years after the fall, the Colossal Titan returned. During the 104th Cadet Corps first real battle, Eren Yeager was swallowed — and awakened inside a Titan body. For the first time, a human could become a Titan and fight back.',
        consequence : 'Trost was reclaimed. Eren\'s Titan power was revealed to the world. The Military placed him under their control.',
        characters  : ['Eren Yeager', 'Armin Arlert', 'Mikasa Ackerman', 'Captain Levi'],
      },
    ],
  },
  {
    season : 2,
    title  : 'The Truth Within',
    years  : 'Year 850',
    quote  : '"The only thing we\'re allowed to do is to believe that we won\'t regret the choice we made."',
    color  : '#4A6741',
    arcs   : [
      {
        number      : '03',
        title       : 'The Female Titan',
        year        : 'Year 850',
        description : 'A uniquely intelligent Female Titan hunted Eren through the Forest of Giant Trees. The Survey Corps laid a trap — sacrificing squad after squad as bait. The Female Titan was captured, unmasked as Annie Leonhart, a fellow cadet — and immediately encased herself in an impenetrable crystal.',
        consequence : 'The Survey Corps lost most of Levi\'s Special Operations Squad. The existence of enemy titan shifters within the walls was confirmed.',
        characters  : ['Annie Leonhart', 'Eren Yeager', 'Captain Levi', 'Erwin Smith'],
      },
      {
        number      : '04',
        title       : 'Clash of the Titans',
        year        : 'Year 850',
        description : 'Titans appeared inside Wall Rose — an impossibility that shook humanity to its core. Ymir revealed herself as a Titan shifter. Reiner Braun and Bertholdt Hoover were unmasked as the Armored and Colossal Titans — the very warriors who destroyed Wall Maria.',
        consequence : 'Humanity\'s trust shattered from within. Eren was captured. The true scale of the enemy conspiracy became clear.',
        characters  : ['Reiner Braun', 'Bertholdt Hoover', 'Ymir', 'Historia Reiss'],
      },
    ],
  },
  {
    season : 3,
    title  : 'The Royal Secret',
    years  : 'Year 850',
    quote  : '"Give up on your dreams and die."',
    color  : '#1A4A7A',
    arcs   : [
      {
        number      : '05',
        title       : 'The Uprising',
        year        : 'Year 850',
        description : 'A corrupt royal government conspired to keep humanity ignorant and weak. Commander Erwin Smith was arrested. Levi\'s squad went underground. Historia Reiss was revealed as the true heir to the throne, her father the last holder of the Founding Titan.',
        consequence : 'The military regime was toppled. Historia was crowned queen. Rod Reiss was killed as a Pure Titan.',
        characters  : ['Erwin Smith', 'Captain Levi', 'Historia Reiss', 'Kenny Ackerman'],
      },
      {
        number      : '06',
        title       : 'Return to Shiganshina',
        year        : 'Year 850',
        description : 'The Survey Corps launched their most desperate mission — retake Shiganshina and reach Grisha Yeager\'s basement. The Beast Titan hurled a barrage of stones that obliterated the horses and most of the regiment. Erwin Smith died charging. Armin was burned alive by the Colossal Titan. In the basement: the truth of the entire world.',
        consequence : 'The Survey Corps was nearly wiped out. Armin inherited the Colossal Titan. Grisha\'s journals revealed humanity existed beyond the walls.',
        characters  : ['Erwin Smith', 'Armin Arlert', 'Zeke Yeager', 'Bertholdt Hoover'],
      },
    ],
  },
  {
    season : 4,
    title  : 'The Final Chapter',
    years  : 'Year 854 — 854',
    quote  : '"I\'ve always hated you. Since that first day. But... thank you for wrapping this scarf around me."',
    color  : '#5A3A6A',
    arcs   : [
      {
        number      : '07',
        title       : 'Marley',
        year        : 'Year 854',
        description : 'Four years later, the world had changed. Marley — the nation that had sent warriors to destroy Paradis — was at war. A boy named Falco Grice trained to inherit the Armored Titan. A scarred man named Kruger appeared on the battlefield. He was Eren Yeager — and he had been undercover for years.',
        consequence : 'Eren infiltrated Marley. The Survey Corps secretly followed. A devastating raid on the Marley military port changed the war entirely.',
        characters  : ['Eren Yeager', 'Reiner Braun', 'Falco Grice', 'Gabi Braun'],
      },
      {
        number      : '08',
        title       : 'The Rumbling',
        year        : 'Year 854',
        description : 'Eren Yeager made his choice. Using the Founding Titan and the power of the Warhammer, he activated the Wall Titans — millions of Colossal Titans hidden within the walls for a century. They marched across the ocean toward the continent, an unstoppable force aimed at every life outside Paradis.',
        consequence : 'Eighty percent of humanity beyond Paradis was exterminated. The Survey Corps — Mikasa, Armin, Levi, and the Marleyan warriors — united to stop him.',
        characters  : ['Eren Yeager', 'Mikasa Ackerman', 'Armin Arlert', 'Captain Levi'],
      },
      {
        number      : '09',
        title       : 'The End',
        year        : 'Year 854',
        description : 'The alliance of former enemies flew to face Eren\'s Titan form above Fort Salta. Battle after battle, they fell one by one. In the final moment, it was Mikasa — the person Eren had loved most — who severed his head and kissed him goodbye. Armin detonated the Colossal Titan to destroy Eren\'s body. The Rumbling stopped.',
        consequence : 'Eren Yeager died. The Titan powers vanished from the world. Those who survived faced a shattered planet and an uncertain peace.',
        characters  : ['Mikasa Ackerman', 'Armin Arlert', 'Eren Yeager', 'Ymir Fritz'],
      },
    ],
  },
]

const StoryPage = () => {
  const [activeSeason, setActiveSeason] = useState(null)
  const [activeArc,    setActiveArc]    = useState(null)

  const toggleArc = (key) =>
    setActiveArc(prev => prev === key ? null : key)

  return (
    <div className="story-page">

      {/* ── Hero ─────────────────────────────────── */}
      <div className="story-hero">
        <div className="story-hero__grain" />
        <div className="story-hero__content">
          <span className="story-hero__eyebrow">Year 845 — Year 854</span>
          <h1 className="story-hero__title">
            The Story of<br /><em>Attack on Titan</em>
          </h1>
          <p className="story-hero__sub">
            Nine years. Four seasons. One truth that changed everything.
          </p>
          <div className="story-hero__stats">
            <div className="story-hero__stat">
              <span className="story-hero__stat-val">4</span>
              <span className="story-hero__stat-key">Seasons</span>
            </div>
            <div className="story-hero__divider" />
            <div className="story-hero__stat">
              <span className="story-hero__stat-val">9</span>
              <span className="story-hero__stat-key">Story Arcs</span>
            </div>
            <div className="story-hero__divider" />
            <div className="story-hero__stat">
              <span className="story-hero__stat-val">87</span>
              <span className="story-hero__stat-key">Episodes</span>
            </div>
            <div className="story-hero__divider" />
            <div className="story-hero__stat">
              <span className="story-hero__stat-val">139</span>
              <span className="story-hero__stat-key">Chapters</span>
            </div>
          </div>
        </div>
        <div className="story-hero__scroll">
          <span />
        </div>
      </div>

      {/* ── Season nav pills ─────────────────────── */}
      <div className="story-nav">
        {seasons.map(s => (
          <button
            key={s.season}
            className={`story-nav__pill ${activeSeason === s.season ? 'story-nav__pill--active' : ''}`}
            style={{ '--s-color': s.color }}
            onClick={() => setActiveSeason(
              prev => prev === s.season ? null : s.season
            )}
          >
            <span className="story-nav__pill-num">S{s.season}</span>
            <span className="story-nav__pill-title">{s.title}</span>
          </button>
        ))}
      </div>

      {/* ── Seasons ──────────────────────────────── */}
      <div className="story-seasons">
        {seasons.map(s => {
          const isFiltered = activeSeason !== null && activeSeason !== s.season
          return (
            <div
              key={s.season}
              className={`story-season ${isFiltered ? 'story-season--hidden' : ''}`}
              style={{ '--s-color': s.color }}
            >
              {/* Season header */}
              <div className="story-season__header">
                <div className="story-season__meta">
                  <span className="story-season__num">Season {s.season}</span>
                  <span className="story-season__years">{s.years}</span>
                </div>
                <h2 className="story-season__title">{s.title}</h2>
                <blockquote className="story-season__quote">{s.quote}</blockquote>
              </div>

              {/* Arcs */}
              <div className="story-arcs">
                {s.arcs.map(arc => {
                  const key    = `${s.season}-${arc.number}`
                  const isOpen = activeArc === key
                  return (
                    <div
                      key={arc.number}
                      className={`story-arc-card ${isOpen ? 'story-arc-card--open' : ''}`}
                    >
                      {/* Arc header — always visible */}
                      <button
                        className="story-arc-card__top"
                        onClick={() => toggleArc(key)}
                      >
                        <div className="story-arc-card__left">
                          <span className="story-arc-card__num">{arc.number}</span>
                          <div>
                            <span className="story-arc-card__year">{arc.year}</span>
                            <h3 className="story-arc-card__title">{arc.title}</h3>
                          </div>
                        </div>
                        <span className="story-arc-card__chevron">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {/* Arc body — expands on click */}
                      {isOpen && (
                        <div className="story-arc-card__body">
                          <p className="story-arc-card__desc">{arc.description}</p>

                          <div className="story-arc-card__consequence">
                            <span className="story-arc-card__consequence-label">
                              ↳ Aftermath
                            </span>
                            <p>{arc.consequence}</p>
                          </div>

                          <div className="story-arc-card__characters">
                            <span className="story-arc-card__characters-label">
                              Key Characters
                            </span>
                            <div className="story-arc-card__tags">
                              {arc.characters.map((c, i) => (
                                <span key={i} className="story-arc-card__tag">{c}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Closing quote ────────────────────────── */}
      <div className="story-end">
        <div className="story-end__line" />
        <p className="story-end__quote">
          "If you win, you live. If you lose, you die.<br />
          If you don't fight, you can't win."
        </p>
        <span className="story-end__attr">— Eren Yeager</span>
        <div className="story-end__line" />
      </div>

    </div>
  )
}

export default StoryPage