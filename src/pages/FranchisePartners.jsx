import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  LayoutTemplate, Truck, MonitorSmartphone, GraduationCap, Megaphone, LifeBuoy,
  MapPin, Banknote, UserCheck, ShieldCheck, Factory, Tags, Landmark, HandCoins, Check,
} from 'lucide-react'
import Form from '../components/Form'
import { SITE } from '../config/site'

const GETS = [
  { icon: LayoutTemplate, t: 'Format and fit out', d: 'The store design, layout, equipment specification and opening plan for the format your site can carry.' },
  { icon: Truck, t: 'Supply chain', d: 'Access to our buying power, our approved product range and our distribution schedule from day one.' },
  { icon: MonitorSmartphone, t: 'Retail systems', d: 'Point of sale, stock control, reporting and the payment infrastructure that runs across the network.' },
  { icon: GraduationCap, t: 'Training', d: 'Store management, customer service, pharmacy compliance where relevant, and ongoing refreshers for your team.' },
  { icon: Megaphone, t: 'Marketing', d: 'The brand is marketed as a network. You are not left to build recognition on your own street alone.' },
  { icon: LifeBuoy, t: 'Support', d: 'A named contact, scheduled visits, and help when a supplier, a licence or a season causes trouble.' },
]

const LOOK = [
  { icon: MapPin, t: 'The site', d: 'Footfall first, floor area second. The location has to carry the format.' },
  { icon: Banknote, t: 'The capital', d: 'Enough to fit out, stock and run the store past the point where it turns.' },
  { icon: UserCheck, t: 'The operator', d: 'Someone who will be in the store, not someone who will hire it out and visit monthly.' },
  { icon: ShieldCheck, t: 'The compliance', d: 'Willingness to run to our standards, including pharmacy regulation where the format includes one.' },
]

const PROCESS = [
  ['Application', 'You send the form'],
  ['First response', 'Within five working days'],
  ['Site assessment', 'We visit and assess'],
  ['Terms', 'Written offer, one document'],
  ['Fit out', ''],
  ['Training', 'Before opening'],
  ['Opening', 'Supported by our team'],
]

const PARTNERS = [
  {
    icon: Factory, t: 'Suppliers',
    d: ['If you produce food, household goods, personal care or health products, our stores and our independent shop network are volume you can plan around.', 'Our grocery range is sourced through a vetted agricultural supply network, which keeps the chain between farm and shelf short and the quality traceable.'],
    pts: ['Volume across every format we operate', 'Supplier development fund for capacity building', 'Payment terms agreed in writing and kept'],
  },
  {
    icon: Tags, t: 'Brands',
    d: ['Launch a product, test a new pack format, or push an existing line into markets you do not currently reach. Our shelf gives a brand visibility and sales in the same move.'],
    pts: ['Placement across mall, hypermarket and neighbourhood formats', 'Sales data back from the till', 'In store activation space'],
  },
  {
    icon: Landmark, t: 'Banks and financial institutions',
    d: ['Our stock supply scheme is a lending book with real inventory behind it and repayment tied to daily trading. Our stores are also a physical distribution network for cards, terminals and agency banking.'],
    pts: ['Stock finance for vetted independent shop owners', 'Point of sale and agency banking footprint', 'Card issuing and payment infrastructure', 'Customer acquisition at the counter'],
  },
  {
    icon: HandCoins, t: 'Capital partners',
    d: ['Debt or equity into store rollout, distribution infrastructure or the stock supply book, with defined terms, a defined exit and reporting on the same schedule every quarter.'],
    pts: ['Named projects rather than a general fund', 'Quarterly reporting, good news and bad news at the same speed', 'Structures to suit the partner'],
  },
]

const FRANCHISE_FIELDS = [
  { name: 'name', label: 'Name', required: true, autoComplete: 'name' },
  { name: 'company', label: 'Company, if any' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'city', label: 'City and country', required: true },
  { name: 'format', label: 'Format you have in mind', type: 'select', required: true, options: ['Supermarket and pharmacy', 'Supermarket only', 'Pharmacy only', 'Mini mart', 'Neighbourhood store', 'Not sure yet'] },
  { name: 'site', label: 'Do you have a site', type: 'select', required: true, options: ['Yes, I own it', 'Yes, leased', 'Identified, not secured', 'No, not yet'] },
  { name: 'exp', label: 'Retail experience', type: 'select', required: true, options: ['None', 'Some', 'Extensive'] },
  { name: 'plan', label: 'Tell us about the site and your plan', type: 'textarea', required: true },
  { name: 'doc', label: 'Upload a document', type: 'file', wide: true },
]

const PARTNER_FIELDS = [
  { name: 'name', label: 'Name', required: true, autoComplete: 'name' },
  { name: 'org', label: 'Organisation', required: true, autoComplete: 'organization' },
  { name: 'role', label: 'Role' },
  { name: 'type', label: 'Partner type', type: 'select', required: true, options: ['Supplier', 'Brand', 'Bank or financial institution', 'Capital partner'] },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'markets', label: 'Markets you cover', wide: true },
  { name: 'proposal', label: 'What are you proposing', type: 'textarea', required: true },
  { name: 'doc', label: 'Upload a document', type: 'file', wide: true },
]

export default function FranchisePartners() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
  }, [hash])

  return (
    <>
      {/* Franchise */}
      <section className="band" id="franchise">
        <div className="wrap split">
          <div className="split-text">
            <p className="kicker">Franchise</p>
            <h2 className="display h2">A franchise puts a working retail business in your hands, with the supply chain, the systems and the brand already built.</h2>
            <div className="btn-row">
              <a href="#franchise-form" className="btn btn-orange">Apply for a franchise</a>
              <a href="#partners" className="btn btn-ghost">Partner with us instead</a>
            </div>
          </div>
          <div className="split-media">
            <img src="/images/fruit-shelves.jpg" alt="Neatly arranged shelves of fresh fruit in a store" />
          </div>
        </div>
      </section>

      <section className="band band-sunk">
        <div className="wrap">
          <p className="kicker">What you get</p>
          <h2 className="display h2">A business, not a licence to use a name.</h2>
          <div className="feature-grid">
            {GETS.map(({ icon: Icon, t, d }) => (
              <article key={t} className="feature">
                <span className="icon-badge"><Icon size={22} aria-hidden /></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-night">
        <div className="wrap">
          <p className="kicker kicker-on-dark">What we look for</p>
          <h2 className="display h2">The four things that decide an application.</h2>
          <div className="look-grid">
            {LOOK.map(({ icon: Icon, t, d }) => (
              <article key={t}>
                <Icon size={28} aria-hidden />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="kicker">The process</p>
          <h2 className="display h2">From application to opening.</h2>
          <p className="section-sub">We come back on every application, including the ones we turn down, and we tell you why.</p>
          <ol className="timeline">
            {PROCESS.map(([t, d], i) => (
              <li key={t}>
                <span className="tl-n">{i + 1}</span>
                <h3>{t}</h3>
                {d && <p>{d}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-sunk" id="franchise-form">
        <div className="wrap form-layout">
          <div>
            <p className="kicker">Apply</p>
            <h2 className="display h2">Send us your site.</h2>
          </div>
          <Form
            idPrefix="franchise"
            to={SITE.emails.info}
            subject="Franchise application — allhours.org"
            fields={FRANCHISE_FIELDS}
            submitLabel="Send application"
            success={{ title: 'Application received.', text: 'We come back on every application within five working days, with a yes, a no, or a question.' }}
          />
        </div>
      </section>

      {/* Partners */}
      <section className="band partners-head" id="partners">
        <div className="wrap">
          <p className="kicker">Partners</p>
          <h2 className="display h2">Suppliers, brands, banks and capital.</h2>
          <p className="section-sub">Four kinds of partner, each getting something different out of the same network.</p>
          <div className="partner-grid">
            {PARTNERS.map(({ icon: Icon, t, d, pts }) => (
              <article key={t} className="partner">
                <span className="icon-badge"><Icon size={22} aria-hidden /></span>
                <h3>{t}</h3>
                {d.map((p) => <p key={p}>{p}</p>)}
                <ul>
                  {pts.map((p) => <li key={p}><Check size={16} aria-hidden /> {p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-night">
        <div className="wrap">
          <p className="kicker kicker-on-dark">Why the network works</p>
          <h2 className="display h2">Three things a partner should check before believing any of this.</h2>
          <ul className="checks-dark">
            <li>Repayment on the stock scheme is tied to sales that pass through our own supply chain, so we can see the movement rather than take a borrower's word for it</li>
            <li>Our formats are sized to their locations, which keeps occupancy costs proportionate to what the site can actually earn</li>
            <li>Supply comes before scale, so a new store is never opened against a supply chain that cannot serve it</li>
          </ul>
          <div className="callout callout-dark">
            <strong>For due diligence.</strong> Audited accounts, store performance data and the stock scheme repayment record are available to serious partners on request.
          </div>
        </div>
      </section>

      <section className="band" id="partner-form">
        <div className="wrap form-layout">
          <div>
            <p className="kicker">Get in touch</p>
            <h2 className="display h2">Tell us what you bring.</h2>
          </div>
          <Form
            idPrefix="partner"
            to={SITE.emails.info}
            subject="Partnership enquiry — allhours.org"
            fields={PARTNER_FIELDS}
            submitLabel="Send it to us"
            success={{ title: 'Received.', text: 'We will come back to you within five working days with a yes, a no, or a question.' }}
          />
        </div>
      </section>
    </>
  )
}
