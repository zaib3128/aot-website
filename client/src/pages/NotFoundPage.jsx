import { NavLink } from 'react-router-dom'
import './NotFoundPage.css'

const links = [
  { to: '/titans',   label: 'Titans'    },
  { to: '/soldiers', label: 'Soldiers'  },
  { to: '/walls',    label: 'Walls'     },
  { to: '/story',    label: 'Story'     },
]

const NotFoundPage = () => (
  <div className="nf-page">
    <div className="nf-grain" />

    <div className="nf-content">
      <span className="nf-eyebrow">Error 404</span>

      <h1 className="nf-code">404</h1>

      <div className="nf-divider" />

      <h2 className="nf-title">Beyond the Walls</h2>
      <p className="nf-sub">
        You've ventured past the edge of the known world.
        This page doesn't exist — just like safety beyond Wall Maria.
      </p>

      <NavLink to="/" className="nf-btn">
        <span>← Return to safety</span>
        <span className="nf-btn__bg" />
      </NavLink>

      <div className="nf-links">
        <span className="nf-links__label">Or explore</span>
        <div className="nf-links__list">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className="nf-link">
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>

    {/* Big ghost 404 in background */}
    <div className="nf-bg-text" aria-hidden="true">404</div>
  </div>
)

export default NotFoundPage