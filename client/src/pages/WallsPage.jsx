import './WallsPage.css'

const walls = [
  {
    name        : 'Wall Maria',
    height      : 50,
    diameter    : 480,
    status      : 'Breached',
    year        : 'Breached Year 845',
    description : 'The outermost wall protecting humanity. Breached by the Colossal Titan in Year 845, forcing millions to flee inward. Retaken five years later after a devastating mission.',
    districts   : ['Shiganshina', 'Karanes', 'Katness', 'Fuerth'],
    color       : '#8B2020',
    ring        : 'outermost',
  },
  {
    name        : 'Wall Rose',
    height      : 50,
    diameter    : 320,
    status      : 'Intact',
    year        : 'Threatened Year 850',
    description : 'The middle wall where millions took refuge after Wall Maria fell. Temporarily threatened in Year 850 when Titans emerged from within, but sealed before catastrophe.',
    districts   : ['Trost', 'Krolva', 'Dauper', 'Calaneth'],
    color       : '#6B6B2A',
    ring        : 'middle',
  },
  {
    name        : 'Wall Sina',
    height      : 50,
    diameter    : 160,
    status      : 'Intact',
    year        : 'Never Breached',
    description : 'The innermost wall and home of the royal family. The most privileged territory within the walls. Never breached during the series. Home to the capital, Mitras.',
    districts   : ['Stohess', 'Yarckel', 'Ehrmich', 'Mitras'],
    color       : '#1A4A7A',
    ring        : 'innermost',
  },
]

const WallsPage = () => (
  <div className="walls-page">

    {/* ── Hero ──────────────────────────────── */}
    <div className="walls-hero">
      <div className="walls-hero__grain" />
      <div className="walls-hero__content">
        <span className="walls-hero__eyebrow">Humanity's Last Refuge</span>
        <h1 className="walls-hero__title">The Three<br /><em>Walls</em></h1>
        <p className="walls-hero__sub">
          Three concentric walls — each 50 metres tall and containing
          millions of Colossal Titans within their structure.
        </p>
        <div className="walls-hero__stats">
          <div className="walls-hero__stat">
            <span className="walls-hero__stat-val">3</span>
            <span className="walls-hero__stat-key">Walls</span>
          </div>
          <div className="walls-hero__divider" />
          <div className="walls-hero__stat">
            <span className="walls-hero__stat-val">50m</span>
            <span className="walls-hero__stat-key">Height Each</span>
          </div>
          <div className="walls-hero__divider" />
          <div className="walls-hero__stat">
            <span className="walls-hero__stat-val">100+</span>
            <span className="walls-hero__stat-key">Years Standing</span>
          </div>
        </div>
      </div>
      <div className="walls-hero__scroll"><span /></div>
    </div>

    {/* ── Diagram ───────────────────────────── */}
    <div className="walls-diagram-wrap">
      <div className="walls-diagram__label-top">Concentric Wall Map — Paradis Island</div>
      <div className="walls-diagram">
        <div className="walls-diagram__ring walls-diagram__ring--maria">
          <span className="walls-diagram__ring-label">Wall Maria</span>
          <div className="walls-diagram__ring walls-diagram__ring--rose">
            <span className="walls-diagram__ring-label">Wall Rose</span>
            <div className="walls-diagram__ring walls-diagram__ring--sina">
              <span className="walls-diagram__ring-label">Wall Sina</span>
              <div className="walls-diagram__center">
                <span className="walls-diagram__center-text">Mitras</span>
                <span className="walls-diagram__center-sub">Capital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── Cards ─────────────────────────────── */}
    <div className="walls-cards-wrap">
      {walls.map((wall, i) => (
        <div key={i} className="wall-card" style={{ '--w-color': wall.color }}>
          <div className="wall-card__accent" />
          <div className="wall-card__inner">
            <div className="wall-card__top">
              <div>
                <span className={`wall-card__status ${wall.status === 'Breached' ? 'breached' : 'intact'}`}>
                  {wall.status}
                </span>
                <h2 className="wall-card__name">{wall.name}</h2>
                <span className="wall-card__year">{wall.year}</span>
              </div>
              <div className="wall-card__badge">{wall.ring}</div>
            </div>

            <div className="wall-card__stats">
              <div className="wall-card__stat">
                <span className="wall-card__stat-val">{wall.height}m</span>
                <span className="wall-card__stat-key">Height</span>
              </div>
              <div className="wall-card__stat-divider" />
              <div className="wall-card__stat">
                <span className="wall-card__stat-val">{wall.diameter}km</span>
                <span className="wall-card__stat-key">Diameter</span>
              </div>
              <div className="wall-card__stat-divider" />
              <div className="wall-card__stat">
                <span className="wall-card__stat-val">{wall.districts.length}</span>
                <span className="wall-card__stat-key">Districts</span>
              </div>
            </div>

            <p className="wall-card__desc">{wall.description}</p>

            <div className="wall-card__districts">
              <span className="wall-card__districts-label">Notable Districts</span>
              <div className="wall-card__district-list">
                {wall.districts.map((d, j) => (
                  <span key={j} className="wall-card__district">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ── Secret fact ───────────────────────── */}
    <div className="walls-secret">
      <div className="walls-secret__icon">⚠</div>
      <p className="walls-secret__text">
        The walls were discovered to contain millions of Colossal Titans
        within their structure — sealed inside for over a century, waiting.
        This was the secret weapon later unleashed as <em>The Rumbling</em>.
      </p>
    </div>

  </div>
)

export default WallsPage