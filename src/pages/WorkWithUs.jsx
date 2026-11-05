import { NavLink, Outlet } from 'react-router-dom'
import { ShoppingBasket, Handshake } from 'lucide-react'

export default function WorkWithUs() {
  return (
    <>
      <section className="page-hero page-hero-light wwu-hero">
        <div className="wrap">
          <p className="kicker">Work with us</p>
          <h1 className="display">Stock your shop, run a franchise, or partner with the network.</h1>
        </div>
        <div className="wrap">
          <nav className="wwu-switch" aria-label="Work with us">
            <NavLink to="/work-with-us/stock-up-your-shop">
              <ShoppingBasket size={22} aria-hidden />
              <span>
                <strong>Stock up your shop</strong>
                <small>For independent shop owners</small>
              </span>
            </NavLink>
            <NavLink to="/work-with-us/franchise-and-partners">
              <Handshake size={22} aria-hidden />
              <span>
                <strong>Find a franchise and partner with us</strong>
                <small>Franchise holders, suppliers, brands, banks and capital</small>
              </span>
            </NavLink>
          </nav>
        </div>
      </section>
      <Outlet />
    </>
  )
}
