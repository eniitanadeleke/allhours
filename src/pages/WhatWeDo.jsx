import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Handshake, LayoutGrid, Smartphone, Wrench, CreditCard, Truck, Sprout,
  Store, Pill, Warehouse, Fuel, House, Building2, Factory, Landmark, ShoppingBasket, Users,
  Ruler, PackageCheck, HeartHandshake, Eye, Target, Sparkles,
} from 'lucide-react'
import { Accordion, PageHero } from '../components/Bits'

const VALUES = [
  ['A', 'Access', 'Reach the customer wherever they are, whatever they earn.'],
  ['L', 'Lifestyle', 'Sell in a way that gives the customer something to be proud of.'],
  ['L', 'Leadership', 'Set the standard in the markets we enter rather than follow it.'],
  ['H', 'Happiness', 'The visit should be worth making, not just worth surviving.'],
  ['O', 'Organic', 'Grow into the community, not on top of it.'],
  ['U', 'Ubiquity', 'Be everywhere it makes sense to be, in the right format for the street.'],
  ['R', 'Resilience', 'Keep trading when conditions are hard, because that is when it matters.'],
  ['S', 'Synergy', 'Customers, staff, suppliers and partners all have to gain, or it does not last.'],
]

const SERVICES = [
  { icon: Handshake, t: 'Franchising', d: 'A franchise system that puts retail skills and retail income into local hands across markets, ethnic groups and gender. We handle the administration that gives a franchise holder market exposure and a fair shot at performance.', link: ['Franchise details', '/work-with-us/franchise-and-partners'] },
  { icon: LayoutGrid, t: 'Shelf platform', d: 'For a brand, our shelf is a route to market. New products, improved versions, and format changes such as moving from a tub to a sachet all get tested and sold across a network that reaches from the mall down to the neighbourhood store.' },
  { icon: Smartphone, t: 'Digital distribution', d: 'Airtime, utility payments, pin based services, gaming, ticketing and basic financial services sold at the counter. It saves the customer a journey, and it brings people into the store who came for something else.' },
  { icon: Wrench, t: 'Asset management', d: 'Refrigeration, generators, shelving, vehicles and point of sale hardware are the difference between a store that trades and one that closes at noon. We buy direct from manufacturers, keep warranties valid, and replace equipment before it fails rather than after.' },
  { icon: CreditCard, t: 'Financial services', d: 'We take financial services out of the banking hall and into the street corner. Card products, point of sale terminals and platforms operated for banks and other providers, using our stores as the physical network they do not have.' },
  { icon: Truck, t: 'Supply chain', d: 'Moving goods from source to customer across many stores, many partners and difficult roads. This is the operation everything else depends on, so we run it as a strategic function rather than a cost line.' },
  { icon: Sprout, t: 'Supplier development', d: 'Suppliers make the business work. We identify and build small and large suppliers whose offering fits our standard, and we invest in their capacity through a dedicated supplier development fund rather than only pressing on price.', link: ['Become a supplier', '/work-with-us/franchise-and-partners#partners'] },
]

const FORMATS = [
  { icon: Store, t: 'Supermarket', d: 'Everyday groceries, fresh produce and household supplies in wide variety. Designed to sit inside the community it serves rather than pull people out of it.', spec: [['Pairs with', 'Pharmacy']] },
  { icon: Warehouse, t: 'Hypermarket', d: 'Quality in quantity at the best available price. It serves bulk buyers directly, and it is also the wholesale point that feeds our smaller stores and our independent shop network.', spec: [['Serves', 'Public and trade'], ['Role', 'Network supply point']] },
  { icon: Fuel, t: 'Mini mart', d: 'Convenience where people are already moving. Fuel stations, car parks, campuses, camp grounds, airports and rail terminals.', spec: [['Typical siting', 'Transit points'], ['Carries', 'Supermarket or pharmacy']] },
  { icon: House, t: 'Neighbourhood store', sub: 'Neighborhood Stores Interactive (NSi)', d: 'Small formats and small pack sizes for customers who buy for today rather than for the month. Value, quality and affordability within walking distance of home.', spec: [['Typical siting', 'Residential and rural'], ['Carries', 'Supermarket or pharmacy']] },
  { icon: Building2, t: 'Shopping mall', d: 'Anchor developments holding the full format range under one roof, with leasable space for other retailers, food and services.', spec: [['Role', 'Anchor development'], ['Leasable space', 'Yes']] },
]

const FAQ = [
  { q: 'Does every store have a pharmacy?', a: 'Every full store does. Mini marts and neighbourhood stores carry either the supermarket range or the pharmacy, depending on the site, the licence and what the area already has.' },
  { q: 'Is the pharmacy a separate business?', a: 'It is separately registered and separately licensed, and it operates inside the same store under the same brand.' },
  { q: 'Can I buy in bulk as a shop owner?', a: 'Yes. The hypermarket serves trade buyers, and shop owners on our stock supply scheme are served through the same network.' },
]


const SUBNAV = [['about', 'About'], ['values', 'Values'], ['services', 'Services'], ['formats', 'Formats'], ['how', 'How it works']]

export default function WhatWeDo() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
  }, [hash])

  return (
    <>
      <PageHero kicker="What we do" title="Retail that shows up, every day, at a price people can meet." image="/images/supermarket-aisle.jpg" imageAlt="Long, bright supermarket aisle with fully stocked shelves on both sides">
        <p className="lede">All Hours is a retail group. We build stores, run them, supply them, and extend that same supply to independent shop owners.</p>
      </PageHero>

      <nav className="subnav" aria-label="On this page">
        <div className="wrap subnav-row">
          {SUBNAV.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}
        </div>
      </nav>

      {/* About */}
      <section className="band" id="about">
        <div className="wrap about-grid">
          <div>
            <p className="kicker">Why we exist</p>
            <h2 className="display h2">Shopping is the one thing everybody does.</h2>
            <blockquote className="pull">Life is not a problem to be solved, but a reality to be experienced.</blockquote>
          </div>
          <div className="prose">
            <p>Life is a collection of experiences. Most of them are ordinary, and buying food, medicine and household supplies is about as ordinary as it gets. We were founded to add something to that ordinary moment, without adding to the price.</p>
            <p>Satisfying a customer today takes more than a shelf. It takes quality worth paying for, service that respects the person, a supply chain that does not break, and suppliers who are treated as partners rather than vendors.</p>
            <p>As trade barriers fall, emerging markets are getting attention they have not had before. That attention should raise living standards where it lands. We are building to make sure it does.</p>
            <p>In All Hours, we have built a practical system that guarantees our customers access to high quality products, the best available at the most affordable price, in formats that are easily available and accessible, regardless of their geographical location, literacy level or even income bracket.</p>
          </div>
        </div>
        <div className="wrap vmp">
          <article>
            <Eye size={24} aria-hidden />
            <h3>Our vision</h3>
            <p>To be the retailer of choice for high quality, affordable products and services. All day, all night, close to you.</p>
          </article>
          <article>
            <Target size={24} aria-hidden />
            <h3>Our mission</h3>
            <p>To lead a retail culture built on excellence in what we sell, how we serve, and the experiences we deliver through channels people can actually reach.</p>
          </article>
          <article>
            <Sparkles size={24} aria-hidden />
            <h3>Our philosophy</h3>
            <p>Extraordinary. All Day. We add the extra to everyday experiences for people who want their lives to be more enjoyable and more sustainable.</p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="band band-night" id="values">
        <div className="wrap">
          <p className="kicker kicker-on-dark">Our values</p>
          <h2 className="display h2">Our name is the list.</h2>
          <p className="section-sub">Eight values, one for each letter. They decide what we do, how we do it, and why.</p>
          <ol className="values">
            {VALUES.map(([letter, name, d], i) => (
              <li key={name + i}>
                <span className="v-letter" aria-hidden>{letter}</span>
                <h3>{name}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="band" id="services">
        <div className="wrap">
          <p className="kicker">Our services</p>
          <h2 className="display h2">Seven jobs that keep the network running.</h2>
          <p className="section-sub">Retail looks like a shop. Behind the shop there are seven operations, and each one has to work for the shelf to be full.</p>
          <div className="services">
            {SERVICES.map(({ icon: Icon, t, d, link }, i) => (
              <article key={t} className={`service${i === 5 ? ' service-wide' : ''}${i === 0 ? ' service-span' : ''}`}>
                {i === 5 && <img src="/images/warehouse-supply.jpg" alt="Warehouse aisle with high racking stacked with cartons" loading="lazy" />}
                <div className="service-body">
                  <span className="icon-badge"><Icon size={22} aria-hidden /></span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  {link && <Link to={link[1]} className="text-link">{link[0]}</Link>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="band band-sunk" id="formats">
        <div className="wrap">
          <p className="kicker">Store formats</p>
          <h2 className="display h2">Six formats, sized to the street they sit on.</h2>
          <p className="section-sub">Every full All Hours store carries a supermarket section and a pharmacy. Smaller shops carry one or the other, depending on the site and the licence.</p>

          <div className="standard">
            <h3 className="display h3">The standard store.</h3>
            <p>Supermarket plus pharmacy under one roof, one entrance, one queue if the customer wants it. Groceries and medicine are the two things people cannot postpone, so we put them in the same trip.</p>
          </div>

          {/* Pharmacy — green sub-brand */}
          <article className="pharmacy">
            <div className="pharmacy-media">
              <img src="/images/pharmacy-stockroom.jpg" alt="Pharmacy dispensary shelves lined with boxed medicines" loading="lazy" />
            </div>
            <div className="pharmacy-body">
              <p className="pharmacy-tag"><Pill size={18} aria-hidden /> All Hours Pharmacy</p>
              <h3 className="display h3">Pharmacy</h3>
              <p>A licensed pharmacy counter inside the store. Prescription dispensing, over the counter medicines, baby and personal care, and basic health checks.</p>
              <dl className="spec">
                <div><dt>Licensing</dt><dd>Separately registered</dd></div>
                <div><dt>Pairs with</dt><dd>Supermarket</dd></div>
              </dl>
              <div className="pharmacy-range">
                <h4>Jasmine oral care</h4>
                <ul>
                  <li>All Hours Jasmine Sensitive toothpaste</li>
                  <li>All Hours Jasmine All Fresh</li>
                  <li>All Hours Jasmine Triple Guard Whitening, Gum protection &amp; Pro Guard</li>
                </ul>
                <p className="small-note">Manufactured by design: All Hours Pharmacy Limited, Agbara Industrial Estate, Agbara Lagos.</p>
              </div>
            </div>
          </article>

          <div className="formats">
            {FORMATS.map(({ icon: Icon, t, sub, d, spec }) => (
              <article key={t} className="format">
                <Icon size={28} aria-hidden className="format-icon" />
                <h3>{t}</h3>
                {sub && <p className="format-sub">{sub}</p>}
                <p>{d}</p>
                <dl className="spec">
                  {spec.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works together */}
      <section className="band" id="how">
        <div className="wrap">
          <p className="kicker">How it all works together</p>
          <h2 className="display h2">Built on best practice, adapted to the street.</h2>
          <p className="section-sub">Operating as a whole, All Hours leverages world class logistics technologies and systems to move value from source to customer across our brands all over the continent.</p>

          <div className="flow" aria-label="How the All Hours network fits together">
            <div className="flow-col">
              <p className="flow-label">Source</p>
              <div className="node"><Factory size={20} aria-hidden /><span><strong>Suppliers and brands</strong><small>Supplier development, shelf platform</small></span></div>
            </div>
            <div className="flow-arrow" aria-hidden />
            <div className="flow-col">
              <p className="flow-label">Move</p>
              <div className="node node-indigo"><Truck size={20} aria-hidden /><span><strong>Supply chain</strong><small>Source to shelf without a gap</small></span></div>
              <div className="node node-orange"><Warehouse size={20} aria-hidden /><span><strong>Hypermarket</strong><small>Network supply point</small></span></div>
            </div>
            <div className="flow-arrow" aria-hidden />
            <div className="flow-col">
              <p className="flow-label">Sell</p>
              <div className="node"><Store size={20} aria-hidden /><span><strong>Supermarket and pharmacy</strong><small>The standard store</small></span></div>
              <div className="node"><Fuel size={20} aria-hidden /><span><strong>Mini marts</strong><small>Transit points</small></span></div>
              <div className="node"><House size={20} aria-hidden /><span><strong>Neighbourhood stores</strong><small>Residential and rural</small></span></div>
              <div className="node"><Building2 size={20} aria-hidden /><span><strong>Shopping malls</strong><small>Anchor development</small></span></div>
              <div className="node node-dashed"><ShoppingBasket size={20} aria-hidden /><span><strong>Independent shops</strong><small>Stock supply scheme</small></span></div>
            </div>
            <div className="flow-arrow" aria-hidden />
            <div className="flow-col">
              <p className="flow-label">Serve</p>
              <div className="node node-navy"><Users size={20} aria-hidden /><span><strong>Customers</strong></span></div>
            </div>
          </div>
          <div className="flow-rails">
            <p><Landmark size={18} aria-hidden /> <strong>Banks</strong> finance stock for independent shops and run cards and terminals through our counters.</p>
            <p><Handshake size={18} aria-hidden /> <strong>Franchise holders</strong> run stores on the same supply, systems and brand.</p>
            <p><Wrench size={18} aria-hidden /> <strong>Asset management</strong> keeps refrigeration, power and point of sale running in every format.</p>
          </div>

          <div className="principles">
            <article>
              <Ruler size={24} aria-hidden />
              <h3>Formats before floor space</h3>
              <p>We size the shop to the location and the income around it. A terminal needs a mini mart. A residential road needs a neighbourhood store. Forcing one format everywhere is how retailers lose money.</p>
            </article>
            <article>
              <PackageCheck size={24} aria-hidden />
              <h3>Supply before scale</h3>
              <p>We do not open faster than we can keep stocked. Every new store is opened against a supply chain that can already serve it.</p>
            </article>
            <article>
              <HeartHandshake size={24} aria-hidden />
              <h3>Partners before margin</h3>
              <p>Suppliers and franchise holders have to make money for the network to hold. We invest in supplier capacity rather than squeezing it.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band-sunk">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker">Questions</p>
            <h2 className="display h2">What people ask about the formats.</h2>
          </div>
          <Accordion items={FAQ} />
        </div>
      </section>

    </>
  )
}
