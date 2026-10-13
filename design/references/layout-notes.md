# SELLFISH / $SELFISH — underwater single-page design

Status: design mockups plus a separate interactive prototype. The PNGs are static compositions, not screenshots of working controls. No reference website was supplied for this direction. The approved reference is the SELLFISH blue whale brand logo and banners, derived from mascot concept 10.

## Brand and art direction

- Name: SELLFISH. Ticker: $SELFISH. Never substitute SELFISH as the token name.
- Meaning: sell + selfish + fish. A greedy whale smiles and waves while secretly pressing SELL, sending an illustrative chart downward.
- Preserve royal-blue rounded whale, cream ribbed belly, narrow scheming eyes, heavy angled eyebrows, wide toothy grin, flippers, whale tail, blowhole, navy outlines, gold stash and red SELL button.
- Palette: navy #002746, deep seabed #02182C, royal blue #116CDD, turquoise #62E8EC, cream #FFF8DF, gold #FFDB64, coral red #FF665D. Use pale body text on deep water; keep decorative coral away from copy.
- Large rounded heavy display headings, restrained readable body type, monospace contract strings. Mockup lettering is illustrative; rebuild all headings and body copy as HTML text. Prototype uses system Arial Black and Arial to avoid font loading delays.
- Visitors descend through one continuous ocean: bright refracted surface, whale's waterline secret, sunken gold vault, diver route, community reef, calm seabed.
- Ocean background, wave separators, sparse bubbles and light shafts provide continuity. Do not block native scrolling, capture the mouse wheel, snap sections, or require a drag gesture to continue.

## Section order and anchor mapping

| Order | Header link | Target | Section concept |
|---|---|---|---|
| 1 | Home | #home | Surface hero, mascot and primary actions |
| 2 | Story | #story | Smiles above, sells below; waterline cutaway and visual SELL demo |
| 3 | Tokenomics | #tokenomics | Sunken vault, four confirmed-fact slots and contract |
| 4 | How to Buy | #how-to-buy | Four numbered dive-guide steps |
| 5 | Community | #community | Reef, Telegram and X shells |
| 6 | Footer links repeat the five links | Existing anchors above | Seabed identity, disclaimer and return to surface |

All content belongs to the root page. Do not create separate Story, Tokenomics, How to Buy, or Community routes. Direct /#story and other anchor URLs must work.

## Header and scrolling behavior

- Desktop: compact sticky/fixed navy translucent pill; logo on left and all five visible links on right. Prototype header is 72px high, 18px below the viewport top. Use native anchor href values.
- Mobile at 760px and below: 64px header, 12px from top, logo and Menu toggle. The open dropdown contains the same five links in the same order, with touch targets larger than 44px.
- Smooth anchor scrolling normally; immediate scrolling under prefers-reduced-motion: reduce. Account for header offset with scroll-padding-top and section scroll margins so headings are visible.
- Highlight the currently visible section with gold text and underline and aria-current="location". Prototype computes the section intersecting a marker below the header using one passive scroll listener scheduled by requestAnimationFrame.
- Mobile menu: semantic button with aria-controls, aria-expanded, and updated accessible name. Selecting a link closes it. Escape closes and restores focus to the toggle. Outside click closes it. Switching to desktop closes it. This is a non-modal dropdown; do not trap focus.
- Keyboard users can Tab through links; focus rings remain visible. Selected mobile anchor transfers focus to the target section without an extra scroll. Include a skip link. Preserve keyboard, wheel and touch scrolling.
- Depth indicator is a fictional journey marker, not a measurement or live market statistic. Hide it on small screens.
- Footer Back to surface targets #home.

## Canonical copy

### Hero

Eyebrow: ETHEREUM MAINNET · SELLFISH / $SELFISH

Heading: BENEATH THE SMILE.

Hook: A selfish whale. A secret sell. A very red chart.

Body: He waves with one fin. Sells with the other. Welcome to the ocean beneath the grin.

Primary action: Dive into the story → #story. Buy is disabled and labeled link pending until [OFFICIAL_BUY_LINK] is confirmed. Secondary Contract & chart details → #tokenomics. Do not send visitors to an invented trading destination.

### Story

Heading: SMILES ABOVE. SELLS BELOW.

Intro: SELLFISH = sell + selfish + fish. The ocean's friendliest grin hides its most selfish button.

1. The smile. At the surface, our whale is all waves, big teeth, and “we're in this together.”
2. The secret. Under the waterline, one fin finds the SELL button. Every thought comes back to his own stash.
3. The splash. The chart turns red. The little fish stare. He keeps smiling. Classic SELLFISH.

Demo heading: A small button. A whale-sized splash.

Demo copy: Press to reveal the cartoon chart's reaction.

Always show: Illustrative animation. This does not make a trade.

### Tokenomics

Heading: OPEN THE SUNKEN VAULT.

Hook: The joke is selfish. The facts should be clear.

Body: Project parameters will appear here once confirmed. No supply, tax, liquidity, or ownership claims have been assumed.

Four slots: Total supply [TOKENOMICS]; Buy / sell tax [TOKENOMICS]; Liquidity status [TOKENOMICS]; Ownership [TOKENOMICS]. Network: Ethereum mainnet. Contract: [CONTRACT_ADDRESS]. Chart: [OFFICIAL_CHART_LINK].

The overview mockup's alternate Marketing label is not part of the canonical specification: use Ownership. Placeholder copy controls must remain disabled and must never copy the literal placeholder. Enable copy only after a valid confirmed Ethereum address is supplied; announce copied/failed state in a polite live region.

### How to Buy

Heading: YOUR DIVE PLAN.

Intro: Four checks before you swim. Use only confirmed official destinations.

1. Get a wallet. Set up an Ethereum-compatible wallet. Keep your recovery phrase private.
2. Add ETH. Fund it on Ethereum mainnet. Leave enough ETH for network fees.
3. Verify the address. Compare the full token contract with the confirmed official address: [CONTRACT_ADDRESS].
4. Swap carefully. Use the official trading link once available. Review the token, amount, fees, and minimum received.

Pending note: Buying is unavailable in this prototype until the contract and official trading link are confirmed.

### Community

Heading: SMALL FISH. BIG ENERGY.

Hook: Same ocean. Different fins.

Body: Bring your best whale jokes, chart reactions, and underwater memes. The community is where the little fish make the noise.

Shells: Join Telegram — The reef's group chat. Follow on X — Fresh memes from below. [OFFICIAL_SOCIAL_LINKS].

Closing line: The whale thinks about himself. The reef brings the jokes.

### Footer

SELLFISH / $SELFISH. Repeat all five section links and Back to surface.

A meme about selfish trading. No promises of returns.

Prototype label: DESIGN PROTOTYPE · UNCONFIRMED LINKS ARE DISABLED.

## Responsive composition

- Desktop hero: copy left, whale art right. Mobile: header, copy, actions, whale art, scroll cue vertically stacked.
- Story: wide waterline cutaway and three horizontal beats on desktop; artwork and three vertical rows on mobile; demo copy and chart stack on mobile.
- Vault: heading and contract beside circular vault on desktop; copy, vault, and safe-wrapping address below on mobile. Preserve 2x2 fact slots if legible; otherwise stack them.
- Dive plan: four steps descend visually left to right on desktop. One ordered vertical guide with left bubble trail on mobile. Keep DOM reading order 1–4.
- Community: two shells next to each other on desktop; one shell per row on mobile. Below the social shells, include the sticker gallery described in the revision notes.
- Footer: horizontal desktop groups; stacked mobile brand, wrapped links, return action, disclaimer.
- No hidden sections on mobile. Do not miniaturize the entire desktop canvas into a phone.

## Representative interaction states and implementation

| State | Preview reference | Intended implementation |
|---|---|---|
| Home, Story, Tokenomics, How to Buy, Community active | 03–07 and 13 | Active-link underline follows scrolling |
| Mobile menu open | 13 | Dropdown with same five anchor links; closes on selection and Escape |
| Keyboard focus | 13 | Visible high-contrast focus outline, independent of current section |
| SELL pressed | 04 and 09 | Toggle illustrative red chart segment; button aria-pressed and status message; second press resets |
| Shell hover | 07 | Subtle rise/glow; keyboard focus equally visible; no information available only on hover |
| Whale float and bubbles | Overview/hero drawings | Slow lightweight CSS transforms; no forced motion and no audio autoplay |
| Reduced motion | 13 and this note | Remove float/bubbles/transitions; anchor scrolling immediate; demo final state changes without tween |

Prototype implemented: root-page sections, native anchors, header offsets, current-section highlight, mobile dropdown behavior, keyboard focus/skip link, depth progress, decorative bubbles and whale float, illustrative SELL toggle, responsive CSS and placeholder disabling.

Production work remaining: create clean section illustrations matching the approved mockups; replace draft artwork and geometry; enter confirmed project details; enable confirmed external links; conduct browser, device, contrast and performance QA. No 3D/WebGL dependency is required: depth comes from layered illustrations and CSS. Treat ray/coral layers as decorative with aria-hidden. There is no live chart, wallet connection, real trade, or analytics in this scope.

## Mockup consistency rules

The previews are art-direction references and can contain incidental generated text/layout variations. This document and the working HTML define the exact brand spelling, copy, section sequence, header links and fact labels. In particular: never use SELFISH as the name; never repeat the surface waterline or sticky header as a new separate page; never duplicate facts/social blocks inside Story because a mockup shows extra decorative boxes; never use placeholder icons as evidence that a contract is verified. Keep actual text and buttons outside raster illustrations.

## Production image asset specification (proposed, not generated final assets)

| Proposed filename | Dimensions | Alpha | Placement |
|---|---|---|---|
| selfish-logo-transparent.png | 1024 × 1024 | Yes, outside circle | Existing approved logo; header/footer; derive small optimized WebP |
| selfish-whale-hero.png | 1600 × 1400 | Yes | Whale, hidden SELL, coins; hero right / mobile below copy |
| selfish-story-waterline.png | 1800 × 1000 | Yes | Surface smile / hidden fin scene in Story |
| selfish-story-waterline-mobile.png | 900 × 1200 | Yes | Mobile-recomposed cutaway |
| selfish-ocean-surface.webp | 2400 × 1400 | No | Surface rays/open water; no baked text |
| selfish-ocean-depths.webp | 2400 × 1600 | No | Mid-depth environment; sparse central decoration |
| selfish-reef-seabed.webp | 2400 × 1200 | No | Community and footer environment |
| selfish-vault-frame.png | 1400 × 1400 | Yes, including central openings | Tokenomics decorative frame behind live HTML stats |
| selfish-buy-icons.png | 2048 × 512 | Yes | Four 512px illustrated icons: goggles, ETH, checklist, swap; export separately in production |
| selfish-community-shell-telegram.png | 900 × 900 | Yes | Telegram shell art behind separate HTML link |
| selfish-community-shell-x.png | 900 × 900 | Yes | X shell art behind separate HTML link |
| selfish-coral-left.png | 1000 × 1600 | Yes | Decorative left reef edge |
| selfish-coral-right.png | 1000 × 1600 | Yes | Decorative right reef edge |
| selfish-small-fish.png | 1200 × 400 | Yes | Sparse fish school, decorative |

Wave separators, rays, bubbles, chart and SELL interaction should use CSS/SVG rather than raster frames. Export responsive image derivatives, give intrinsic dimensions, lazy-load below-fold images, and avoid loading a huge animation framework. Prototype draft ocean/whale assets are not the final production package.

## Verification and delivery

- All numbered preview PNGs must decode successfully; record actual dimensions in preview-manifest.json.
- Include the 14 final numbered mockups, this file, and preview-manifest.json in selfish-website-previews.zip. Exclude discarded overview and uncorrected mobile-header variants.
- Check the archive with ZipFile.testzip(); a null result passes CRC integrity.
- Prototype source validation checks JavaScript syntax, section order, native anchor targets, local files, disabled unknown destinations, and responsive/reduced-motion declarations.
- Browser UI testing was unavailable because the supported browser-control skill is not installed in this environment. Do not report runtime menu/viewport tests as passed. Native deployment success verifies hosting, not visual QA.


## Sticker-gallery revision — 2026-10-13

The regenerated sticker designs are 004 Sad, 007 Shocked, 012 Suspicious and 018 Innocent. Each now has a complete 1024px master and matching 512px chat version. The preview package includes all 20 actual chat PNGs in `stickers/chat-512/`; use those real transparent images in the website implementation, not artwork extracted from mockups.

### Placement and copy

- Keep the gallery inside `#community`, after Telegram/X shells and before the footer. All existing same-page anchor links and section order remain unchanged.
- Gallery heading: **REACTIONS FROM THE REEF.**
- Copy: **20 emotions. One selfish whale.**
- Action: **Download sticker pack**. Implement as a normal download link to `/downloads/selfish-20-stickers.zip`. It must download the completed pack, not imply a Telegram sticker-pack URL exists.
- Production image destination: `/assets/stickers/<exact numbered filename>`. Keep numbering and emotion labels from `stickers-manifest.csv`. Display all 20 in order in the implemented gallery; overview mockups show representative subsets to keep the whole page inspectable.
- Desktop uses 4 columns; mobile uses 2 columns with generous tap spacing and no horizontal overflow. `object-fit: contain`, intrinsic 512x512 dimensions, and ample padding preserve the complete silhouette.
- Give each image an emotion-specific accessible name, such as “SELLFISH whale, shocked”. Labels remain readable HTML text.
- Optional hover: a small lift/glow; keyboard focus must be equally visible. Respect reduced-motion preferences. Decorative animation must not change the emotions or crop edges.
- Static preview buttons and cards illustrate the design; this revision updates the preview package, not the previously deployed interactive prototype.

### Updated previews

1. `01-selfish-home-overview-desktop.png` — complete desktop page, with Community sticker gallery.
2. `02-selfish-home-overview-mobile.png` — complete mobile page, with two-column gallery and corrected Ownership label.
3. `07-selfish-home-community-desktop.png` — detailed Community scene and 4-column gallery.
4. `12-selfish-home-community-mobile.png` — detailed stacked Community scene and 2-column gallery.

The other ten section/header/footer previews retain the established underwater direction.
