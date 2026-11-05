import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Logo from './Logo'
import SocialIcon from './SocialIcon'
import { SITE } from '../config/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo tone="dark" className="footer-logo" />
          <p className="footer-tagline">{SITE.tagline}</p>
        </div>

        <div>
          <h2 className="footer-h">Explore</h2>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/find-us">Find us</Link></li>
            <li><Link to="/work-with-us">Work with us</Link></li>
            <li><Link to="/what-we-do">What we do</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Business</h2>
          <ul className="footer-list">
            <li><Link to="/work-with-us/stock-up-your-shop">Stock supply</Link></li>
            <li><Link to="/work-with-us/franchise-and-partners">Franchise</Link></li>
            <li><Link to="/work-with-us/franchise-and-partners#partners">Partners</Link></li>
            <li><Link to="/what-we-do#formats">Store formats</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Reach us</h2>
          <ul className="footer-list">
            <li><a href={`mailto:${SITE.emails.contact}`}><Mail size={15} aria-hidden /> {SITE.emails.contact}</a></li>
            <li><a href={`mailto:${SITE.emails.info}`}><Mail size={15} aria-hidden /> {SITE.emails.info}</a></li>
          </ul>
          <div className="socials">
            {SITE.socials.map((s) =>
              s.url ? (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={`All Hours on ${s.name}`}>
                  <SocialIcon name={s.name} />
                </a>
              ) : (
                <span key={s.name} className="is-soon" aria-label={`All Hours on ${s.name}`}>
                  <SocialIcon name={s.name} />
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} All Hours. All rights reserved.</p>
        <p className="footer-reg">{SITE.domain}</p>
      </div>
    </footer>
  )
}
