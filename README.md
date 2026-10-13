# SELLFISH ($SELFISH)

One-page underwater site for SELLFISH on Ethereum mainnet. Visitors scroll from the surface hero through the story, sunken vault, buying guide, sticker reef, and seabed footer.

The joke is a meme about selfish trading. The site does not promise buyers, price gains, or a live trade. The red SELL control only changes a cartoon chart.

## Stack

Vite, React, and TypeScript, with plain CSS. There is no router, wallet connection, or market feed. Visitor counts run through a separate Node server. GitHub Pages only serves the static site.

```sh
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
npm run test
npm run setup
npm start
```

`build` runs `tsc -b && vite build`. `typecheck` runs `tsc -b --pretty false`. Output is `dist/`.

## Configuration

Edit `src/config/project.ts`. Unknown values stay `null`.

Still unconfirmed, and shown as pending in the UI:

- `contractAddress`
- `totalSupply`
- `buySellTax`
- `liquidityStatus`
- `ownershipStatus`
- `telegramUrl`
- `xUrl`
- `telegramStickerPackUrl`
- `fullStickerArchivePath`

`siteUrl` is `https://selfish.website`. That origin is public. It is not a secret. The production build uses it for the canonical URL, absolute Open Graph and Twitter image URLs, `robots.txt`, and `sitemap.xml`. Set `siteUrl` to `null` to omit those absolute URLs. Do not put a placeholder domain in their place.

Buy and Chart open their HTTPS URLs. Telegram and X enable on their own HTTPS URLs. The contract address is still unpublished, so Copy shows “Coming Soon..”. A format-valid address is not proof that the contract is official or safe. Copy stays disabled until that format check passes, and it never copies `[CONTRACT_ADDRESS]`.

Missing facts render as `[TOKENOMICS]`. The footer keeps `PROJECT DETAILS PENDING · UNCONFIRMED LINKS ARE DISABLED.` until the four fact values and the contract, buy, chart, Telegram, and X values are all confirmed.

## Assets

Production files:

- `public/assets/brand/` logo and banners
- `public/assets/stickers/` the 20 chat PNGs, 512×512 RGBA
- `public/downloads/selfish-chat-stickers.zip` those 20 PNGs, the labeled preview sheet, and a manifest of files that are actually in the zip
- `public/downloads/selfish-20-stickers-preview.png`

The zip is described beside the button as `20 transparent PNGs · 512 × 512.` The 1024px `masters-1024/` files and `selfish-20-stickers.zip` were not in the supplied archive, so they are not offered.

`design/references/` holds the 14 layout previews and the source notes. Those files are not loaded by the visitor site.

Header and footer logos use a 256px derivative plus the original 1024px file. Favicon and touch icons are derived from the transparent logo.

## Scene art still to replace

The ocean, waterline, vault, shells, coral, fish, rays, and buying icons are original CSS and SVG. These proposed illustrations were not supplied and are not referenced:

`selfish-whale-hero.png`, `selfish-story-waterline.png`, `selfish-story-waterline-mobile.png`, `selfish-ocean-surface.webp`, `selfish-ocean-depths.webp`, `selfish-reef-seabed.webp`, `selfish-vault-frame.png`, `selfish-buy-icons.png`, `selfish-community-shell-telegram.png`, `selfish-community-shell-x.png`, `selfish-coral-left.png`, `selfish-coral-right.png`, `selfish-small-fish.png`.

Dropping finished transparent artwork into those roles later can replace the CSS scenes. Do not cut a full UI mockup into the page; the mockups contain baked headings and buttons.

## Hosting

GitHub Pages is the selected host so the site can be published at `selfish.website`. A second host config was not added.

- Build command: `npm run build`
- Output directory: `dist`
- Install from `package-lock.json` with npm
- Workflow: `.github/workflows/pages.yml`
- Custom domain file: `public/CNAME` (`selfish.website`)
- Site base path: `/`, because the custom domain serves the site root
- No environment secrets are required for the public Pages site

## Visitor dashboard

The public page sends a page view when it loads and a heartbeat every 30 seconds while the tab is visible. People who send a Do Not Track or Global Privacy Control signal are not recorded. The private dashboard is at `/dashboard` and refreshes every 10 seconds. On https://selfish.website it calls `https://selfish.103.161.35.238.sslip.io`. Local development uses the same origin.

The server needs Node 24. `DASHBOARD_PASSWORD` is read once, stored as a hash in `data/analytics.sqlite`, and is not committed. `data/secrets.json` is generated on setup and is not committed.

```bash
npm run setup
npm run build
npm start
```

The visitor site is `/` plus hash anchors (`#home`, `#story`, `#tokenomics`, `#how-to-buy`, `#community`). Missing asset requests should 404. They should not be rewritten to `index.html`.

DNS for `selfish.website` must point at GitHub Pages, and the repository Pages source must be GitHub Actions, before the custom domain serves this build.
