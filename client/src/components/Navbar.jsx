import  { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { label: 'Story',    to: '/story'     },
  { label: 'Titans',   to: '/titans'    },
  { label: 'Soldiers', to: '/soldiers'  },
  { label: 'Walls',    to: '/walls'     },
  { label: 'Chronicle',to: '/chronicle' },
]

const Navbar = () => {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [, setActiveLink] = useState(null)
  const indicatorRef = useRef(null)
  const linksRef     = useRef([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const moveIndicator = (i) => {
    const el  = linksRef.current[i]
    const bar = indicatorRef.current
    if (!el || !bar) return
    const rect       = el.getBoundingClientRect()
    const parentRect = el.closest('.navbar__links').getBoundingClientRect()
    bar.style.width     = `${rect.width}px`
    bar.style.transform = `translateX(${rect.left - parentRect.left}px)`
    bar.style.opacity   = '1'
  }

  const hideIndicator = () => {
    if (indicatorRef.current) indicatorRef.current.style.opacity = '0'
    setActiveLink(null)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>

        <div className="navbar__rule navbar__rule--left" />

        <NavLink to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-wings">⸸</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">ATTACK</span>
            <span className="navbar__logo-sub">ON TITAN</span>
          </span>
          <span className="navbar__logo-wings">⸸</span>
        </NavLink>

        <ul className="navbar__links" onMouseLeave={hideIndicator}>
          {LINKS.map((link, i) => (
            <li key={link.label}>
              <NavLink
                ref={el => linksRef.current[i] = el}
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onMouseEnter={() => { setActiveLink(i); moveIndicator(i) }}
              >
                <span className="navbar__link-num">0{i + 1}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
          <div className="navbar__indicator" ref={indicatorRef} />
        </ul>

        <NavLink to="/explore" className="navbar__cta">
          <span className="navbar__cta-inner">
            <span>Explore</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="navbar__cta-bg" />
        </NavLink>

        <div className="navbar__rule navbar__rule--right" />

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

      </nav>

      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-inner">
          {LINKS.map((link, i) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="navbar__drawer-link"
              style={{ '--i': i }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="navbar__drawer-num">0{i + 1}</span>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/titans" className="navbar__drawer-cta" onClick={() => setMenuOpen(false)}>
            Explore Titans
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar