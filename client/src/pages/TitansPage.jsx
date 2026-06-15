import { useEffect, useState } from 'react'
import api from '../api/axios'
import './TitansPage.css'

const TitansPage = () => {
  const [titans,  setTitans]  = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)
  const [active,  setActive]  = useState(null)

  useEffect(() => {
    api.get('/api/titans')
      .then(res  => { setTitans(res.data); setLoading(false) })
      .catch(()  => { setError('Failed to load titans'); setLoading(false) })
  }, [])

  if (loading) return <div className="page-loader">Loading Titans...</div>
  if (error)   return <div className="page-error">{error}</div>

  const maxHeight = Math.max(...titans.map(t => t.height))

  return (
    <div className="titans-page">

      {/* ── Hero ──────────────────────────────── */}
      <div className="titans-hero">
        <div className="titans-hero__grain" />
        <div className="titans-hero__content">
          <span className="titans-hero__eyebrow">The Nine Titans</span>
          <h1 className="titans-hero__title">Inherit<br /><em>the Power</em></h1>
          <p className="titans-hero__sub">
            Nine titans whose power has shaped the fate of humanity
            for over 2,000 years. Each one passed down through death.
          </p>
          <div className="titans-hero__stats">
            <div className="titans-hero__stat">
              <span className="titans-hero__stat-val">9</span>
              <span className="titans-hero__stat-key">Titans</span>
            </div>
            <div className="titans-hero__divider" />
            <div className="titans-hero__stat">
              <span className="titans-hero__stat-val">60m</span>
              <span className="titans-hero__stat-key">Tallest</span>
            </div>
            <div className="titans-hero__divider" />
            <div className="titans-hero__stat">
              <span className="titans-hero__stat-val">2000</span>
              <span className="titans-hero__stat-key">Years of History</span>
            </div>
          </div>
        </div>
        <div className="titans-hero__scroll"><span /></div>
      </div>

      {/* ── Height comparison bar ─────────────── */}
      <div className="titans-heights">
        <div className="titans-heights__label">Height Comparison</div>
        <div className="titans-heights__bars">
          {[...titans].sort((a,b) => b.height - a.height).map(titan => (
            <div key={titan._id} className="titans-heights__item">
              <div className="titans-heights__bar-wrap">
                <div
                  className="titans-heights__bar"
                  style={{ height: `${(titan.height / maxHeight) * 120}px` }}
                />
              </div>
              <span className="titans-heights__val">{titan.height}m</span>
              <span className="titans-heights__name">
                {titan.name.replace(' Titan','')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Grid ──────────────────────────────── */}
      <div className="titans-grid">
        {titans.map((titan, i) => (
          <div
            key={titan._id}
            className={`titan-card ${active === titan._id ? 'titan-card--active' : ''}`}
            onClick={() => setActive(prev => prev === titan._id ? null : titan._id)}
          >
            <div className="titan-card__img-wrap">
              {titan.image
                ? <img src={titan.image} alt={titan.name} className="titan-card__img" />
                : <div className="titan-card__no-img">?</div>
              }
              <div className="titan-card__img-overlay" />
              <span className="titan-card__height">{titan.height}m</span>
              <span className="titan-card__index">0{i + 1}</span>
            </div>

            <div className="titan-card__body">
              <h2 className="titan-card__name">{titan.name}</h2>
              <p className="titan-card__desc">{titan.description}</p>

              {active === titan._id && (
                <div className="titan-card__expanded">
                  <div className="titan-card__row">
                    <span className="titan-card__row-label">⚡ Power</span>
                    <span className="titan-card__row-val">{titan.power}</span>
                  </div>
                  <div className="titan-card__row">
                    <span className="titan-card__row-label">↳ Holder</span>
                    <span className="titan-card__row-val">{titan.currentHolder}</span>
                  </div>
                  <div className="titan-card__row">
                    <span className="titan-card__row-label">◈ Category</span>
                    <span className="titan-card__row-val">{titan.category}</span>
                  </div>
                </div>
              )}

              <button className="titan-card__toggle">
                {active === titan._id ? 'Show less −' : 'Show more +'}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TitansPage