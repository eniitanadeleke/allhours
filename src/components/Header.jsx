import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/find-us', label: 'Find us' },
  { to: '/work-with-us', label: 'Work with us' },
  { to: '/what-we-do', label: 'What we do' },
  { to: '/contact', label: 'Contact us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}`}>
        <div className="wrap header-row">
          <Link to="/" className="brand" aria-label="All Hours, home">
            <Logo variant="mark" className="brand-mark" />
            <Logo variant="word" className="brand-word" weight={1.2} />
          </Link>

          <nav className="main-nav" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn btn-orange header-cta">Talk to us</Link>

          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </header>

      {/* Mobile menu sits outside the header so it can cover the full screen */}
      <div id="mobile-nav" className={`mobile-nav${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} tabIndex={open ? 0 : -1}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-nav-foot">
          <Link to="/contact" className="btn btn-orange" tabIndex={open ? 0 : -1}>Talk to us</Link>
          <p>Extraordinary. All Day.</p>
        </div>
      </div>
    </>
  )
}
