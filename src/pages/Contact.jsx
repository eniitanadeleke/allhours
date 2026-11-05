import { Mail, Clock, Briefcase, MessageSquareText } from 'lucide-react'
import Form from '../components/Form'
import { PageHero } from '../components/Bits'
import { SITE } from '../config/site'

const FIELDS = [
  { name: 'topic', label: 'What is this about', type: 'select', required: true, wide: true, options: ['Stock supply for my shop', 'Franchise enquiry', 'Supplying products to All Hours', 'Brand placement', 'Banking or finance partnership', 'Investment', 'Customer service or a complaint', 'Careers', 'Press'] },
  { name: 'name', label: 'Name', required: true, autoComplete: 'name' },
  { name: 'org', label: 'Organisation', autoComplete: 'organization' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', wide: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
]

export default function Contact() {
  return (
    <>
      <PageHero kicker="Contact us" title="Send it here and it lands with the right team.">
        <p className="lede">Pick what your message is about and it goes straight to the right team.</p>
      </PageHero>

      <section className="band band-flush-top">
        <div className="wrap contact-grid">
          <div className="contact-card">
            <h2 className="display h3"><MessageSquareText size={22} aria-hidden /> Message us</h2>
            <Form
              idPrefix="contact"
              to={SITE.emails.contact}
              subject="Website message — allhours.org"
              fields={FIELDS}
              submitLabel="Send message"
              success={{ title: 'Thank you.', text: 'We have your message and will come back to you within two working days.' }}
            />
          </div>

          <aside className="contact-aside">
            <div className="reach">
              <Mail size={22} aria-hidden />
              <div>
                <h3>General enquiries</h3>
                <a href={`mailto:${SITE.emails.contact}`}>{SITE.emails.contact}</a>
              </div>
            </div>
            <div className="reach">
              <Briefcase size={22} aria-hidden />
              <div>
                <h3>Stock supply, franchise and partnerships</h3>
                <a href={`mailto:${SITE.emails.info}`}>{SITE.emails.info}</a>
              </div>
            </div>
            <div className="reach">
              <Clock size={22} aria-hidden />
              <div>
                <h3>Reply time</h3>
                <p>We reply within two working days.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
