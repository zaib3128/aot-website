import { NavLink } from 'react-router-dom'
import './ExplorePage.css'

const sections = [
  {
    to          : '/titans',
    num         : '01',
    label       : 'Titans',
    eyebrow     : 'The Nine',
    description : 'Nine titans whose power has shaped the fate of humanity for over 2,000 years. Each one passed down through death.',
    stat        : '9 Titans',
    color       : '#8B2020',
  },
  {
    to          : '/soldiers',
    num         : '02',
    label       : 'Soldiers',
    eyebrow     : 'Survey Corps',
    description : 'The brave soldiers who dedicate their hearts to push back the darkness beyond the walls. Not all return.',
    stat        : '7 Soldiers',
    color       : '#4A6741',
  },
  {
    to          : '/walls',
    num         : '03',
    label       : 'Walls',
    eyebrow     : "Humanity's Refuge",
    description : 'Three concentric walls — 50 metres tall — that stood between humanity and extinction for over 100 years.',
    stat        : '3 Walls',
    color       : '#1A4A7A',
  },
  {
    to          : '/story',
    num         : '04',
    label       : 'Story',
    eyebrow     : 'Year 845 — 854',
    description : 'From the fall of Wall Maria to the Rumbling — nine years across four seasons that changed everything.',
    stat        : '9 Arcs',
    color       : '#5A3A6A',
  },
  {
    to          : '/chronicle',
    num         : '05',
    label       : 'Chronicle',
    eyebrow     : 'Full Timeline',
    description : 'A complete chronological record spanning over 1,100 years — from Ymir Fritz to the end of the Titan era.',
    stat        : '15 Events',
    color       : '#5A4A1A',
  },
]

const ExplorePage = () => (
  <div className="explore-page">

    {/* ── Hero ──────────────────────────────── */}
    <div className="explore-hero">
      <div className="explore-hero__grain" />
      <div className="explore-hero__content">
        <span className="explore-hero__eyebrow">Everything in one place</span>
        <h1 className="explore-hero__title">Explore<br /><em>the World</em></h1>
        <p className="explore-hero__sub">
          Titans, soldiers, walls, story arcs, and the full chronicle of Paradis Island.
          Choose where to begin.
        </p>
      </div>
    </div>

    {/* ── Full-width section cards ──────────── */}
    <div className="explore-sections">
      {sections.map((s, i) => (
        <NavLink
          key={i}
          to={s.to}
          className="explore-section"
          style={{ '--e-color': s.color }}
        >
          <div className="explore-section__left">
            <span className="explore-section__num">{s.num}</span>
          </div>
          <div className="explore-section__body">
            <span className="explore-section__eyebrow">{s.eyebrow}</span>
            <h2 className="explore-section__title">{s.label}</h2>
            <p className="explore-section__desc">{s.description}</p>
          </div>
          <div className="explore-section__right">
            <span className="explore-section__stat">{s.stat}</span>
            <span className="explore-section__arrow">→</span>
          </div>
          <div className="explore-section__bar" />
        </NavLink>
      ))}
    </div>

    {/* ── Bottom quote ──────────────────────── */}
    <div className="explore-quote">
      <p>"If you win, you live. If you lose, you die. If you don't fight, you can't win."</p>
      <span>— Eren Yeager</span>
    </div>

  </div>
)

export default ExplorePage