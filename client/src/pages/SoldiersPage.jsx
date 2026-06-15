import { useEffect, useState } from 'react'
import api from '../api/axios'
import './SoldiersPage.css'

const FILTERS = [
  'All',
  'Scout Regiment',
  'Garrison Regiment',
  'Military Police'
]

const SoldiersPage = () => {
  const [soldiers, setSoldiers] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)
  const [filter,   setFilter]   = useState('All')
  const [active,   setActive]   = useState(null)

  useEffect(() => {
    api.get('/api/soldiers')
      .then(res  => { setSoldiers(res.data); setLoading(false) })
      .catch(()  => { setError('Failed to load soldiers'); setLoading(false) })
  }, [])

  if (loading) return <div className="page-loader">Loading Soldiers...</div>
  if (error)   return <div className="page-error">{error}</div>

  const filtered = filter === 'All'
  ? soldiers
  : soldiers.filter(s => s.regiment === filter)

  const alive  = soldiers.filter(s => s.isAlive).length
  const fallen = soldiers.filter(s => !s.isAlive).length

  return (
    <div className="soldiers-page">

      {/* ── Hero ──────────────────────────────── */}
      <div className="soldiers-hero">
        <div className="soldiers-hero__grain" />
        <div className="soldiers-hero__content">
          <span className="soldiers-hero__eyebrow">Survey Corps</span>
          <h1 className="soldiers-hero__title">Dedicate<br /><em>Your Heart</em></h1>
          <p className="soldiers-hero__sub">
            The soldiers who gave everything beyond the walls.
            Courage was never enough — but they gave it anyway.
          </p>
          <div className="soldiers-hero__stats">
            <div className="soldiers-hero__stat">
              <span className="soldiers-hero__stat-val">{soldiers.length}</span>
              <span className="soldiers-hero__stat-key">Soldiers</span>
            </div>
            <div className="soldiers-hero__divider" />
            <div className="soldiers-hero__stat soldiers-hero__stat--alive">
              <span className="soldiers-hero__stat-val">{alive}</span>
              <span className="soldiers-hero__stat-key">Alive</span>
            </div>
            <div className="soldiers-hero__divider" />
            <div className="soldiers-hero__stat soldiers-hero__stat--fallen">
              <span className="soldiers-hero__stat-val">{fallen}</span>
              <span className="soldiers-hero__stat-key">Fallen</span>
            </div>
          </div>
        </div>
        <div className="soldiers-hero__scroll"><span /></div>
      </div>

      {/* ── Filters ───────────────────────────── */}
      <div className="soldiers-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`soldiers-filters__btn ${filter === f ? 'soldiers-filters__btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Count ─────────────────────────────── */}
      <div className="soldiers-count">
        Showing {filtered.length} soldier{filtered.length !== 1 ? 's' : ''}
        {filter !== 'All' && ` in ${filter}`}
      </div>

      {/* ── Grid ──────────────────────────────── */}
      <div className="soldiers-grid">
        {filtered.map(soldier => (
          <div
            key={soldier._id}
            className={`soldier-card ${!soldier.isAlive ? 'soldier-card--fallen' : ''} ${active === soldier._id ? 'soldier-card--active' : ''}`}
            onClick={() => setActive(prev => prev === soldier._id ? null : soldier._id)}
          >
            <div className="soldier-card__img-wrap">
              {soldier.image
                ? <img src={soldier.image} alt={soldier.name} className="soldier-card__img" />
                : <div className="soldier-card__no-img">⚔</div>
              }
              <div className="soldier-card__img-overlay" />
              <span className={`soldier-card__status ${soldier.isAlive ? 'alive' : 'fallen'}`}>
                {soldier.isAlive ? '● Alive' : '○ Fallen'}
              </span>
            </div>

            <div className="soldier-card__body">
              <span className="soldier-card__rank">
  {soldier.rank}
</span>

<span className="soldier-card__regiment">
  {soldier.regiment}
</span>
              <h2 className="soldier-card__name">{soldier.name}</h2>
              <p className="soldier-card__desc">{soldier.description}</p>

              {active === soldier._id && (
                <div className="soldier-card__expanded">
                  {soldier.age && (
                    <div className="soldier-card__info-row">
                      <span className="soldier-card__info-label">Age</span>
                      <span className="soldier-card__info-val">{soldier.age}</span>
                    </div>
                  )}
                  <div className="soldier-card__abilities-label">Abilities</div>
                  <div className="soldier-card__abilities">
                    {soldier.abilities.map((a, i) => (
                      <span key={i} className="soldier-card__tag">{a}</span>
                    ))}
                  </div>
                </div>
              )}

              <button className="soldier-card__toggle">
                {active === soldier._id ? 'Show less −' : 'Show more +'}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default SoldiersPage