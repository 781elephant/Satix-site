# Satix UAE website

Static, dependency free website prepared for `satix.ae`.

## Files

* `index.html` main lead generation page
* `styles.css` complete responsive styling
* `script.js` inquiry form logic
* `logo.svg`, `favicon.svg`, `social-card.svg` brand assets
* `privacy.html`, `terms.html` basic legal pages
* `robots.txt`, `sitemap.xml`, `site.webmanifest`, `404.html`

## Current contact configuration

The site currently sends inquiries to `orders@equipify.ae`, the public Equipify contact email operated by Garden Fresh General Trading LLC.

Before launch, change this to `hello@satix.ae` or another Satix inbox once that mailbox exists. Search and replace `orders@equipify.ae` in `index.html`, `script.js`, and `privacy.html`.

## Launch

Upload the contents of this folder to the document root for `satix.ae`. It can be hosted on Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel, or any static web host.

No build command is required.

## Recommended launch checks

1. Point `satix.ae` and `www.satix.ae` to the host.
2. Enable HTTPS.
3. Create a Satix email inbox and replace the temporary Equipify contact email.
4. Test the inquiry form on desktop and mobile.
5. Add Google Analytics or Google Tag Manager only after creating a new Satix property. Do not reuse the previous StarNet tracking ID.
6. Submit `https://satix.ae/sitemap.xml` to Google Search Console.
7. Create a Google Business Profile only under the real operating business details and applicable eligibility rules.
