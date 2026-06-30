# Blackstar

Modern ecommerce frontend for the Blackstar digital game guide ebook store.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Editing products

All placeholder products live in `data/products.ts`. Update names, prices, descriptions, image paths, and Komerza checkout links there.

Product images are served from `public/products/`.

Brand images are served from `public/brand/`. Replace `blackstar-logo.png`
and `blackstar-banner.png` with your final exported assets using the same
filenames.

## Komerza checkout

Each product has a `checkoutUrl` field. Replace the placeholder URLs with real Komerza checkout links when your products are ready.

No API keys, payment secrets, or private credentials are stored in this project.
