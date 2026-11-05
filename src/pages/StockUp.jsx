import {
  ClipboardList, BadgeCheck, ListChecks, Repeat, Check, X,
  Wallet, Tags, PackageCheck, Truck, CalendarClock, Landmark,
} from 'lucide-react'
import { Accordion } from '../components/Bits'
import Form from '../components/Form'
import { SITE } from '../config/site'

const STEPS = [
  { icon: ClipboardList, t: 'Apply', d: 'Tell us where your shop is, what you sell and roughly what you turn over. We visit and confirm the details.' },
  { icon: BadgeCheck, t: 'Get approved', d: 'Our banking partner reviews the application and sets your stock limit and repayment terms.' },
  { icon: ListChecks, t: 'Order from the list', d: 'You choose from our approved product list. The bank settles the invoice with us and we deliver.' },
  { icon: Repeat, t: 'Repay as you sell', d: 'Repayment comes out of sales on an agreed schedule. Clear the balance and order again at a higher limit.' },
]

const GETS = [
  { icon: Wallet, t: 'Stock on your shelf without a large cash outlay' },
  { icon: Tags, t: 'Wholesale pricing you would not reach on your own' },
  { icon: PackageCheck, t: 'An approved product list, so you are not guessing what sells' },
  { icon: Truck, t: 'Delivery to your shop, on a schedule' },
  { icon: CalendarClock, t: 'A repayment plan tied to sales rather than a fixed monthly bill' },
  { icon: Landmark, t: 'A credit record with a bank, built from real trading' },
]

const FAQ = [
  { q: 'Can I choose any product I want?', a: 'You order from our approved list. The list is built from products that move in shops like yours, and it is reviewed regularly.' },
]

const FIELDS = [
  { name: 'name', label: 'Your name', required: true, autoComplete: 'name' },
  { name: 'shop', label: 'Shop name', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'address', label: 'Shop address', required: true, wide: true },
  { name: 'sell', label: 'What do you mainly sell', type: 'select', required: true, options: ['Groceries and provisions', 'Medicines and health items', 'Household supplies', 'A mix of the above', 'Something else'] },
  { name: 'sales', label: 'Rough monthly sales', type: 'select', required: true, options: ['Prefer not to say', 'Small', 'Medium', 'Large'] },
  { name: 'years', label: 'Years trading', type: 'number', required: true },
  { name: 'bank', label: 'Do you have a business bank account', type: 'select', required: true, options: ['Yes', 'No', 'Not sure'] },
  { name: 'more', label: 'Anything else we should know', type: 'textarea' },
]

export default function StockUp() {
  return (
    <>
      <section className="band">
        <div className="wrap split">
          <div className="split-text">
            <p className="kicker">For independent shop owners</p>
            <h2 className="display h2">Fill your shelves without paying for the stock up front.</h2>
            <p>You pick from our approved product list. Our banking partner settles with us immediately, so the goods reach you straight away. You repay from sales, on an agreed schedule, as the stock moves.</p>
            <a href="#stock-form" className="btn btn-orange">Apply to join</a>
          </div>
          <div className="split-media">
            <img src="/images/stocked-shelves.jpg" alt="Shelves stocked with drinks and packaged food" />
          </div>
        </div>
      </section>

      <section className="band band-sunk">
        <div className="wrap">
          <p className="kicker">How it works</p>
          <h2 className="display h2">Four steps, start to shelf.</h2>
          <ol className="steps">
            {STEPS.map(({ icon: Icon, t, d }, i) => (
              <li key={t}>
                <span className="step-n">Step {String(i + 1).padStart(2, '0')}</span>
                <Icon size={26} aria-hidden className="step-icon" />
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-night">
        <div className="wrap">
          <p className="kicker kicker-on-dark">What you get</p>
          <h2 className="display h2">The advantages of a large buyer, on a small shop.</h2>
          <ul className="benefits">
            {GETS.map(({ icon: Icon, t }) => (
              <li key={t}><Icon size={22} aria-hidden /> <span>{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="kicker">Who it is for</p>
          <h2 className="display h2">If you already run a shop, this is for you.</h2>
          <p className="section-sub">We are looking for shop owners who are trading, who know their customers, and who want to carry more stock than their cash allows.</p>
          <div className="checklists">
            <div className="checklist">
              <h3>What we need from you</h3>
              <ul>
                {['A trading shop with a fixed address', 'Business registration where required', 'Valid identification', 'A bank account', 'An idea of your monthly sales'].map((x) => (
                  <li key={x}><Check size={18} aria-hidden className="ok" /> {x}</li>
                ))}
              </ul>
            </div>
            <div className="checklist">
              <h3>What we do not ask for</h3>
              <ul>
                {['Payment for the stock before it arrives', 'A minimum order that empties your account', 'Exclusive supply, you can still buy elsewhere', 'Your shop signage or your shop name'].map((x) => (
                  <li key={x}><X size={18} aria-hidden className="no" /> {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-sunk">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker">Questions</p>
            <h2 className="display h2">What shop owners ask first.</h2>
          </div>
          <Accordion items={FAQ} />
        </div>
      </section>

      <section className="band" id="stock-form">
        <div className="wrap form-layout">
          <div>
            <p className="kicker">Apply</p>
            <h2 className="display h2">Start your application.</h2>
            <p>Fill this in and a member of our field team will contact you to arrange a shop visit.</p>
          </div>
          <Form
            idPrefix="stock"
            to={SITE.emails.info}
            subject="Stock supply application — allhours.org"
            fields={FIELDS}
            submitLabel="Send application"
            note="Sending this does not commit you to anything. Approval and terms are set by our banking partner."
            success={{ title: 'Application received.', text: 'A member of our field team will call you to arrange a shop visit. Keep your identification and business registration ready.' }}
          />
        </div>
      </section>
    </>
  )
}
