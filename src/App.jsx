import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FindUs from './pages/FindUs'
import WorkWithUs from './pages/WorkWithUs'
import StockUp from './pages/StockUp'
import FranchisePartners from './pages/FranchisePartners'
import WhatWeDo from './pages/WhatWeDo'
import Contact from './pages/Contact'

const TITLES = {
  '/': 'All Hours | Extraordinary. All Day.',
  '/find-us': 'Find us | All Hours',
  '/work-with-us/stock-up-your-shop': 'Stock up your shop | All Hours',
  '/work-with-us/franchise-and-partners': 'Franchise and partners | All Hours',
  '/what-we-do': 'What we do | All Hours',
  '/contact': 'Contact us | All Hours',
}

function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = TITLES[pathname] || 'All Hours'
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function NotFound() {
  return (
    <section className="page-hero page-hero-light">
      <div className="wrap">
        <h1 className="display">This page does not exist.</h1>
        <p className="lede">The link may be old or mistyped. Start again from the homepage.</p>
        <Link to="/" className="btn btn-navy">Go to the homepage</Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <RouteEffects />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/work-with-us" element={<WorkWithUs />}>
            <Route index element={<Navigate to="stock-up-your-shop" replace />} />
            <Route path="stock-up-your-shop" element={<StockUp />} />
            <Route path="franchise-and-partners" element={<FranchisePartners />} />
          </Route>
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
