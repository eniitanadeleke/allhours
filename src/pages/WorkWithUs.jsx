import { NavLink, Outlet } from 'react-router-dom'
import { ShoppingBasket, Handshake, Check } from 'lucide-react'

const CHOICES = [
  {
    to: '/work-with-us/stock-up-your-shop',
    icon: ShoppingBasket,
    title: 'Stock up your shop',
    sub: 'For independent shop owners',
  },
  {
    to: '/work-with-us/franchise-and-partners',
    icon: Handshake,
    title: 'Find a franchise and partner with us',
    sub: 'Franchise holders, suppliers, brands, banks and capital',
  },
]

export default function WorkWithUs() {
  return (
    <>
      <section className="page-hero page-hero-light wwu-hero">
        <div className="wrap">
          <p className="kicker">Work with us</p>
          <h1 className="display">Stock your shop, run a franchise, or partner with the network.</h1>
        </div>
        <div className="wrap">
          <p className="wwu-choose" id="wwu-choose">Choose what you are here for</p>
          <nav className="wwu-cards" aria-labelledby="wwu-choose">
            {CHOICES.map(({ to, icon: Icon, title, sub }) => (
              <NavLink key={to} to={to} className="wwu-card">
                {({ isActive }) => (
                  <>
                    <span className="wwu-icon"><Icon size={24} aria-hidden /></span>
                    <span className="wwu-body">
                      <strong>{title}</strong>
                      <small>{sub}</small>
                      <span className="wwu-btn">
                        {isActive && <Check size={16} aria-hidden />} Learn more
                      </span>
                    </span>
                    <span className="wwu-radio" aria-hidden />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </section>
      <Outlet />
    </>
  )
}
