import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q} className={`acc-item${isOpen ? ' is-open' : ''}`}>
            <h3>
              <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                <span>{it.q}</span>
                {isOpen ? <Minus size={18} aria-hidden /> : <Plus size={18} aria-hidden />}
              </button>
            </h3>
            <div className="acc-panel" hidden={!isOpen}>
              <p>{it.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function PageHero({ kicker, title, children, image, imageAlt, tone = 'light' }) {
  return (
    <section className={`page-hero page-hero-${tone}${image ? ' has-image' : ''}`}>
      <div className="wrap page-hero-grid">
        <div className="page-hero-text">
          {kicker && <p className="kicker">{kicker}</p>}
          <h1 className="display">{title}</h1>
          {children}
        </div>
        {image && (
          <div className="page-hero-media">
            <img src={image} alt={imageAlt} />
          </div>
        )}
      </div>
    </section>
  )
}
