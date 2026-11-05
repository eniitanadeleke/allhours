# All Hours — website (allhours.org)

React + Vite. Five pages: **Home, Find us, Work with us, What we do, Contact us.**

## Run it

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build in /dist
```

Deploy `/dist` to any static host (Netlify, Vercel, cPanel). Because the site uses clean URLs
(`/find-us`, `/what-we-do`), the host must send unknown paths to `index.html`:

- **Netlify:** `public/_redirects` is included.
- **Vercel:** `vercel.json` is included.
- **Apache / cPanel:** `public/.htaccess` is included.

## Things to edit before launch

| What | Where |
|---|---|
| Emails, Facebook, **Instagram link** | `src/config/site.js` |
| **Store list for Find us**: while it is empty, each store type shows an "Ask for your nearest…" button; once stores are added, the list and search bar appear automatically | `src/data/stores.js` |

## Forms

All forms email the submission. No phone numbers are shown anywhere on the site.

| Form | Goes to |
|---|---|
| Contact us | contact@allhours.org |
| Stock up your shop | info@allhours.org |
| Franchise application | info@allhours.org |
| Partner enquiry | info@allhours.org |

Delivery uses **FormSubmit** (free, no account). The **first** submission to each address triggers a one-time
"Activate form" email to that inbox. Click it once for contact@ and once for info@, and forms then deliver
normally. To switch to Formspree, Web3Forms or your own API, change `formEndpoint` in `src/config/site.js`.

## Brand

- Colours: navy `#02032F`, indigo `#3B3A9A`, orange `#F7941D`. Green `#0E9346` is used **only** for All Hours Pharmacy.
- Type: **Bodoni Moda** (headings) and **Schibsted Grotesk** (text), self-hosted through Fontsource.
- Logo: vector traced from the supplied artwork → `public/allhours-logo.svg`, `public/allhours-logo-reversed.svg`,
  `public/allhours-mark.svg`, and the `Logo` component.
- Icons: Lucide (ISC licence).

## Copy

Text comes word for word from the existing All Hours site. Where the site had nothing, the 2017 corporate profile
supplies it word for word (Find us store-type intros, the "Life is not a problem…" quote, the "practical system"
paragraph, the NSi name). Pharmacy product names come from the All Hours Pharmacy document.

## Photo credits

All photos are from Unsplash under the Unsplash Licence (free for commercial use, no permission or payment needed).
No photo contains people. Replace them with real All Hours store photos when available.

| File | Photographer | Source |
|---|---|---|
| hero-store-interior.jpg | Cheung Yin | https://unsplash.com/photos/a-store-with-shelves-of-items-8TEj9frsgO0 |
| supermarket-aisle.jpg | Jack Lee | https://unsplash.com/photos/a-grocery-store-aisle-filled-with-lots-of-food-IH65r4HEQWQ |
| fresh-produce.jpg | nrd | https://unsplash.com/photos/a-display-in-a-grocery-store-filled-with-lots-of-fruits-and-vegetables-N7jlXYMdiFQ |
| pharmacy-stockroom.jpg | Árpád Czapp | https://unsplash.com/photos/a-room-filled-with-lots-of-shelves-filled-with-boxes-and-boxes-tvP6pCnq9iI |
| hypermarket-bulk.jpg | Ali Mkumbwa | https://unsplash.com/photos/a-large-stack-of-boxes-in-a-warehouse-DU2ybvshovg |
| warehouse-supply.jpg | Ruchindra Gunasekara | https://unsplash.com/photos/large-warhause-GK8x_XCcDZg |
| shopping-mall.jpg | Julia Taubitz | https://unsplash.com/photos/interior-of-a-modern-shopping-mall-with-multiple-levels-oQrC1ToY4xY |
| neighbourhood-store.jpg | Adiptalk | https://unsplash.com/photos/a-grocery-store-filled-with-lots-of-food-3VoUDb-sVt4 |
| stocked-shelves.jpg | Rap Dela Rea | https://unsplash.com/photos/shelves-stocked-with-beverages-and-food-items-in-a-store-ECMRLse82Pc |
| fruit-shelves.jpg | Gemma C | https://unsplash.com/photos/fresh-fruit-on-grocery-store-shelves-stpjHJGqZyw |
| lagos-night.jpg | Opeyemi Adisa | https://unsplash.com/photos/a-large-bridge-over-a-body-of-water-at-night-Ww2j734hEcA |
