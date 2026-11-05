// ─────────────────────────────────────────────────────────────
// All Hours — site settings
// Edit this file to change emails, social links and form routing.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'All Hours',
  domain: 'allhours.org',
  tagline: 'Extraordinary. All Day.',

  emails: {
    // Contact Us form and general enquiries
    contact: 'contact@allhours.org',
    // Work With Us forms (stock supply, franchise, partners)
    info: 'info@allhours.org',
  },

  // Footer only. Paste the Instagram link when the account is ready.
  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/share/1csDJ6c8AA/' },
    { name: 'Instagram', url: '' }, // ← paste the Instagram link here when the account is ready
  ],
}

// Forms are delivered by FormSubmit (https://formsubmit.co), which emails
// every submission to the address given. The first submission to each
// address sends a one-time activation email that must be confirmed.
// To use another service (Formspree, Web3Forms, your own API), change this function.
export const formEndpoint = (email) => `https://formsubmit.co/ajax/${email}`
