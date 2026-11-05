// ─────────────────────────────────────────────────────────────
// All Hours store list — powers the Find Us page.
//
// Replace the placeholder entries with real stores. For each store:
//   type:     'supermarket' | 'hypermarket' | 'mall'
//   name:     Store name as it should appear
//   area:     Area / neighbourhood
//   city:     City
//   state:    State
//   address:  Full street address
//   hours:    Opening hours, e.g. 'Open 24 hours' or 'Mon–Sun, 7am–11pm'
//   mapUrl:   Google Maps link for directions (optional)
// ─────────────────────────────────────────────────────────────

export const STORE_TYPES = [
  {
    id: 'supermarket',
    label: 'Supermarkets',
    single: 'Supermarket',
    image: '/images/neighbourhood-store.jpg',
    imageAlt: 'Well stocked supermarket aisles under bright lighting',
    // Corporate profile, word for word
    text:
      'As the population of Africa grows geometrically, consumers will demand for more value for every penny spent and even more in terms of service delivery going forward. Positioned to harness this growing trend, All Hours Supermarkets will provide consumers with high quality products that are affordable and available in wide varieties.',
  },
  {
    id: 'hypermarket',
    label: 'Hypermarkets',
    single: 'Hypermarket',
    image: '/images/hypermarket-bulk.jpg',
    imageAlt: 'Tall racking stacked with bulk cartons in a large store',
    text:
      'All Hours hypermarket is a brand that is pivotal to the overall functionality of the All Hours retail system, thus making her a channel of choice within our retail network and also for other small retail channels.',
  },
  {
    id: 'mall',
    label: 'Shopping malls',
    single: 'Shopping mall',
    image: '/images/shopping-mall.jpg',
    imageAlt: 'Multi-level shopping mall interior with open galleries',
    text:
      'Innovating in the space between breath taking shopping experience and landmark architecture that supports high end retail operations, All Hours is committed to making a clear statement of architectural distinction with our range of shopping malls, promising our customers a compelling, memorable and ready to share experience every time they go shopping.',
  },
]

// While this list is empty, Find us shows each store type with a "Contact us" button
// instead of a list. As soon as you add stores here, the list and the search bar appear.
//
// Example:
// { type: 'supermarket', name: 'All Hours Supermarket, Lekki', area: 'Lekki Phase 1', city: 'Lagos',
//   state: 'Lagos', address: '12 Admiralty Way, Lekki Phase 1', hours: 'Open 24 hours',
//   mapUrl: 'https://maps.google.com/?q=...' },

export const STORES = [
]
