import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MapPin, Clock, Search, Navigation, Store, Warehouse, Building2, LayoutGrid, Mail } from 'lucide-react'
import { PageHero } from '../components/Bits'
import { STORE_TYPES, STORES } from '../data/stores'

const ICONS = { supermarket: Store, hypermarket: Warehouse, mall: Building2 }

export default function FindUs() {
  const [params, setParams] = useSearchParams()
  const active = params.get('type') || 'all'
  const [q, setQ] = useState('')
  const hasStores = STORES.length > 0

  const setType = (t) => {
    const next = new URLSearchParams(params)
    if (t === 'all') next.delete('type')
    else next.set('type', t)
    setParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return STORES.filter((s) => (active === 'all' || s.type === active) &&
      (!term || [s.name, s.area, s.city, s.state, s.address].join(' ').toLowerCase().includes(term)))
  }, [active, q])

  const types = active === 'all' ? STORE_TYPES : STORE_TYPES.filter((t) => t.id === active)

  return (
    <>
      <PageHero kicker="Find us" title="Every All Hours supermarket, hypermarket and shopping mall.">
        <p className="lede">{hasStores ? 'Choose a store type or search by city or area.' : 'Choose a store type to see what each one offers.'}</p>
      </PageHero>

      <section className="finder-bar">
        <div className="wrap finder-row">
          <div className="tabs" role="tablist" aria-label="Store type">
            <button role="tab" aria-selected={active === 'all'} onClick={() => setType('all')}>
              <LayoutGrid size={17} aria-hidden /> All stores
            </button>
            {STORE_TYPES.map((t) => {
              const Icon = ICONS[t.id]
              return (
                <button key={t.id} role="tab" aria-selected={active === t.id} onClick={() => setType(t.id)}>
                  <Icon size={17} aria-hidden /> {t.label}
                </button>
              )
            })}
          </div>
          {hasStores && (
            <label className="search">
              <Search size={18} aria-hidden />
              <span className="sr-only">Search by city or area</span>
              <input type="search" placeholder="Search by city or area" value={q} onChange={(e) => setQ(e.target.value)} />
            </label>
          )}
        </div>
      </section>

      {types.map((t, idx) => {
        const all = STORES.filter((s) => s.type === t.id)
        const list = filtered.filter((s) => s.type === t.id)
        const Icon = ICONS[t.id]
        return (
          <section key={t.id} className={`band store-group${!all.length && idx % 2 ? ' band-sunk' : ''}`} id={t.id}>
            <div className={`wrap ${all.length ? 'store-group-grid' : 'store-feature'}`}>
              <div className="store-group-intro">
                <img src={t.image} alt={t.imageAlt} loading="lazy" />
                <div className="store-group-text">
                  <h2 className="display h3"><Icon size={24} aria-hidden /> {t.label}</h2>
                  <p>{t.text}</p>
                  {!all.length && (
                    <Link to="/contact" className="btn btn-navy">
                      <Mail size={18} aria-hidden /> Ask for your nearest {t.single.toLowerCase()}
                    </Link>
                  )}
                </div>
              </div>

              {all.length > 0 && (
                <div>
                  {list.length ? (
                    <ul className="store-list">
                      {list.map((s, i) => (
                        <li key={i} className="store-card">
                          <div className="store-card-top">
                            <h3>{s.name}</h3>
                            <span className="chip">{t.single}</span>
                          </div>
                          <p className="store-line"><MapPin size={16} aria-hidden /> {s.address}{s.city ? `, ${s.city}` : ''}</p>
                          {s.hours && <p className="store-line"><Clock size={16} aria-hidden /> {s.hours}</p>}
                          {s.mapUrl && (
                            <a className="text-link" href={s.mapUrl} target="_blank" rel="noreferrer"><Navigation size={15} aria-hidden /> Get directions</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="empty">
                      <p>No {t.label.toLowerCase()} match “{q}”. Try another city or area, or clear the search.</p>
                      <button className="btn btn-ghost" onClick={() => setQ('')}>Clear search</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )
      })}

      <section className="band band-night band-tight">
        <div className="wrap inline-cta">
          <p>Want an All Hours store in your area?</p>
          <Link to="/work-with-us/franchise-and-partners" className="btn btn-orange">Find a franchise</Link>
        </div>
      </section>
    </>
  )
}
