import { Link } from 'react-router-dom'
import {
  Store, Pill, Warehouse, Fuel, House, Building2,
  ShoppingBasket, Handshake, Truck, Landmark, MapPin,
} from 'lucide-react'
import HourDial from '../components/HourDial'
import { STORE_TYPES, STORES } from '../data/stores'

const DOORS = [
  { icon: ShoppingBasket, title: 'Stock your shop', text: 'Independent shop owners receive stock from an approved list and pay for it as they sell, backed by our banking partner.', to: '/work-with-us/stock-up-your-shop' },
  { icon: Store, title: 'Take a franchise', text: 'Run an All Hours store under our brand, systems, supply chain and training.', to: '/work-with-us/franchise-and-partners' },
  { icon: Truck, title: 'Sell through us', text: 'Suppliers and brands reach customers across our stores and our independent shop network.', to: '/work-with-us/franchise-and-partners#partners' },
  { icon: Landmark, title: 'Fund the growth', text: 'Banks and capital partners fund store rollout, stock finance and payment infrastructure.', to: '/work-with-us/franchise-and-partners#partners' },
]

const FORMATS = [
  { icon: Store, name: 'Supermarket' },
  { icon: Pill, name: 'Pharmacy', pharmacy: true },
  { icon: Warehouse, name: 'Hypermarket' },
  { icon: Fuel, name: 'Mini mart' },
  { icon: House, name: 'Neighbourhood store' },
  { icon: Building2, name: 'Shopping mall' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <p className="kicker kicker-on-dark">Retail across emerging markets</p>
            <h1 className="hero-title">
              <span>Extraordinary.</span>
              <span>All Day.</span>
            </h1>
            <p className="lede">
              We build and run retail that stays open, stays stocked and stays close to the people who need it. Supermarkets, pharmacies, hypermarkets, mini marts and neighbourhood stores.
            </p>
            <div className="btn-row">
              <Link to="/work-with-us/stock-up-your-shop" className="btn btn-orange">Stock your shop</Link>
              <Link to="/work-with-us/franchise-and-partners" className="btn btn-outline-light">Own a franchise</Link>
            </div>
          </div>
          <HourDial image="/images/hero-store-interior.jpg" alt="" />
        </div>
      </section>

      {/* Intro — links to What we do */}
      <section className="band">
        <div className="wrap split">
          <div className="split-media">
            <img src="/images/fresh-produce.jpg" alt="Fresh vegetables and fruit stacked on lit supermarket shelves" loading="lazy" />
          </div>
          <div className="split-text">
            <h2 className="display h2">A shop is only useful when it is open and it has what you came for.</h2>
            <p>Most retail in emerging markets fails on one of two things. It closes when people are free to shop, or the shelf is empty when they arrive. We built the business around fixing both.</p>
            <p>That means longer trading hours, formats sized to the street they sit on, and a supply chain that keeps stock moving from source to shelf without a gap. It also means extending the same supply strength to independent shop owners who are not part of our network but sell to the same customers.</p>
            <Link to="/what-we-do#how" className="text-link">How we work</Link>
          </div>
        </div>
      </section>

      {/* Find us preview */}
      <section className="band band-sunk">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Find us</p>
              <h2 className="display h2">Supermarkets, hypermarkets and shopping malls.</h2>
            </div>
            <Link to="/find-us" className="btn btn-navy">Find a store</Link>
          </div>
          <div className="find-preview">
            {STORE_TYPES.map((t) => {
              const count = STORES.filter((s) => s.type === t.id).length
              return (
                <Link key={t.id} to={`/find-us?type=${t.id}`} className="find-tile">
                  <img src={t.image} alt={t.imageAlt} loading="lazy" />
                  <span className="find-tile-body">
                    <MapPin size={18} aria-hidden />
                    <span className="find-tile-name">{t.label}</span>
                    <span className="find-tile-count">{count ? `${count} location${count === 1 ? '' : 's'}` : `View ${t.label.toLowerCase()}`}</span>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Doors — links to Work with us */}
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Four ways to work with us</p>
              <h2 className="display h2">Pick the door that fits you.</h2>
            </div>
          </div>
          <div className="doors">
            {DOORS.map(({ icon: Icon, title, text, to }) => (
              <Link key={title} to={to} className="door">
                <span className="icon-badge"><Icon size={22} aria-hidden /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stock + Franchise previews */}
      <section className="band band-night">
        <div className="wrap duo">
          <article className="duo-card">
            <img src="/images/stocked-shelves.jpg" alt="Fully stocked shelves of packaged food and drinks" loading="lazy" />
            <div className="duo-body">
              <p className="kicker kicker-on-dark">For independent shop owners</p>
              <h2 className="display h3">Get stocked now. Pay as you sell.</h2>
              <p>You choose from our approved product list. Our banking partner settles the invoice with us up front, so your shelves fill immediately. You then repay from sales, on an agreed schedule, as the stock moves.</p>
              <p>No large cash outlay at the start. No hunting for suppliers. No buying at retail price and hoping to make a margin.</p>
              <Link to="/work-with-us/stock-up-your-shop" className="btn btn-orange">See how it works</Link>
            </div>
          </article>
          <article className="duo-card">
            <img src="/images/fruit-shelves.jpg" alt="Neatly arranged shelves of oranges, apples, lemons and limes" loading="lazy" />
            <div className="duo-body">
              <p className="kicker kicker-on-dark">Franchise</p>
              <h2 className="display h3">Run the store. We run everything behind it.</h2>
              <p>A franchise gives you a proven store format, a supply chain that is already moving, staff training, retail systems and a brand customers recognise. You bring the site, the capital and the commitment to run it properly.</p>
              <Link to="/work-with-us/franchise-and-partners" className="btn btn-outline-light">Apply for a franchise</Link>
            </div>
          </article>
        </div>
      </section>

      {/* Formats preview — links to What we do */}
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Store formats</p>
              <h2 className="display h2">Six formats, one standard.</h2>
              <p className="section-sub">A full All Hours store carries a supermarket section and a pharmacy. Smaller shops carry one or the other, depending on the site.</p>
            </div>
            <Link to="/what-we-do#formats" className="btn btn-navy">See all formats in detail</Link>
          </div>
          <ul className="format-strip">
            {FORMATS.map(({ icon: Icon, name, pharmacy }) => (
              <li key={name} className={pharmacy ? 'is-pharmacy' : ''}>
                <Icon size={26} aria-hidden />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners preview */}
      <section className="band band-sunk">
        <div className="wrap split split-flip">
          <div className="split-text">
            <p className="kicker">Suppliers, brands and banks</p>
            <h2 className="display h2">Our shelf is a route to market.</h2>
            <p>For a producer or a brand, All Hours is distribution and visibility in one move. For a bank, it is a lending book with real inventory behind it and a repayment stream tied to daily sales.</p>
            <Link to="/work-with-us/franchise-and-partners#partners" className="btn btn-navy">
              <Handshake size={18} aria-hidden /> Partner with us
            </Link>
          </div>
          <div className="split-media">
            <img src="/images/warehouse-supply.jpg" alt="Long warehouse aisle lined with high racking" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Closing — links to Contact */}
      <section className="closing">
        <img src="/images/lagos-night.jpg" alt="" className="closing-bg" loading="lazy" />
        <div className="wrap closing-inner">
          <h2 className="display h2">Close to you, whatever the hour.</h2>
          <p>Whether you want stock on your shelf, a store of your own, or a place on ours, start with a message. Someone from our team replies within two working days.</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-orange">Talk to us</Link>
            <Link to="/find-us" className="btn btn-outline-light">Find a store</Link>
          </div>
        </div>
      </section>
    </>
  )
}
