# Handoff: Mogador Adventures Website

## Overview
A 7-page marketing/booking site for Mogador Adventures, a Morocco-based tour operator in Essaouira offering quad biking, surfing, camel rides, horseback riding, cooking classes and yoga. The site presents the six activities, brand story, photo gallery, blog, FAQ, and a contact/booking flow that routes to WhatsApp and email (no backend booking system — this operator books entirely through direct messaging).

## About the Design Files
The files in `source/` are **design references built in an HTML prototyping tool** (Design Components — custom `<sc-for>`/`<sc-if>` templating and a `DCLogic` class, not a real framework). They are not production code to copy directly. **Recreate these designs in your target codebase's environment** (e.g., React/Next.js, Vue, or plain static site with a bundler) using that codebase's own patterns, routing, and component structure — treat the HTML as the visual and behavioral spec, not the implementation.

If no codebase exists yet, a static site generator (Astro, Next.js static export) or plain HTML/CSS/JS is a good fit — this is a 7-page marketing site with no dynamic backend.

## Fidelity
**High-fidelity.** All colors, type, spacing, and copy shown are final (pending the one open item below). Recreate pixel-perfectly.

**Open item — do NOT treat as final without checking with the client:** body copy (activity long-descriptions, About story, testimonials, blog posts, FAQ answers) is **English-only**. Nav, hero, buttons, and footer are translated into 5 languages (EN/FR/AR/ES/DE); long-form content is not. Confirm with the client whether full translation is needed before or after launch.

## Global Layout (applies to every page)
- **Container**: max-width 1180px, centered, side padding 26.4px (mobile-safe).
- **Header**: sticky, top:0, z-index 40. Background `rgba(245,234,216,0.92)` with `backdrop-filter: blur(6px)`, bottom border `1px solid rgba(32,30,29,0.10)`. Height driven by 13.2px vertical padding. Contents (flex, gap 17.6px): logo/wordmark (Caprasimo 20px, `#201e1d`) → nav links (desktop only, ≥900px, gap 26.4px, Figtree 14px/600) → language `<select>` (pill, 13px, border `1px solid rgba(32,30,29,0.16)`, bg `#ebddc5`) → primary CTA pill button (desktop only, on most pages) → hamburger button (mobile only, <900px, 36×36 circle).
- **Mobile nav**: hamburger toggles a stacked nav list below the header bar (font 15px), with the WhatsApp CTA repeated full-width at the bottom (pages other than Contact).
- **Footer**: dark `#201e1d` background, `#f9f4ed` text, 52.8px top padding / 26.4px bottom. 3-column grid (auto-fit, min 200px): wordmark+tagline / nav links / contact block (phone, location, Instagram + TikTok icon links). Bottom bar: copyright, 12px, 55% opacity, top border `1px solid rgba(249,244,237,0.14)`. Contact page has a simplified footer (copyright line only, no columns).
- **Section CTA band** (used on Home, Activities, About, Gallery, FAQ): solid `#c67139` background at 94% opacity, centered content max-width 560px, Caprasimo heading + Figtree subhead + pill button `#f5ead8` bg / `#8c491a` text.
- **Photo treatment**: every photo is wrapped with `filter: saturate(0.6) contrast(0.85) brightness(1.1) opacity(0.94)` — a warm, desaturated "washed" look — and sits in rounded containers (32px radius for cards/panels, 999px/circle for avatars, 16px for gallery tiles).
- **Buttons**: pill-shaped (border-radius 999px), Caprasimo font. Primary: `#c67139` bg / `#f5ead8` text, hover `#b2622d`. Secondary/outline: 1.5px `#c67139` border, `#8c491a` text, hover bg `#fff2eb`.

## Screens / Views

### 1. Home (`Home.dc.html`)
**Purpose**: Landing page — hero, activity teaser grid, brand teaser, gallery teaser, testimonials, final CTA.
**Layout** (top to bottom):
1. **Hero** — min-height 640px, flex align-end, photo background (`mogador_hero.jpg`, washed filter) with a bottom-heavy dark gradient overlay (`rgba(32,30,29,0.72)→0.25→0.15`). Content max-width 720px: location pill tag → Caprasimo H1 52px/1.08 → 17px subhead (max-width 560px) → two CTA buttons (solid "Book Your Adventure" WhatsApp link, outline "See Activities" → Activities page).
2. **Activity grid** — kicker (12px uppercase, `#c67139`) + Caprasimo H2 34px + 16px intro copy (max-width 620px), then a `repeat(auto-fill, minmax(280px,1fr))` grid, gap 22px, of 6 cards. Each card: `#ebddc5` bg, 32px radius, 22px padding, 52px circular icon badge (`#fff2eb` bg / `#8c491a` icon, Lucide-style line icons at stroke-width 2.2), Caprasimo title 19px, 14px body, "Learn more →" link anchored to `Activities.dc.html#<slug>`. Activities: Quad Biking the Dunes, Surf Lessons, Camel Rides, Horseback Riding, Moroccan Cooking Class, Yoga Sessions.
3. **About teaser** — 2-column grid (1fr/1fr, gap 44px): photo (`mogador_couple_quad.jpg`, 4:3, 32px radius) | text (kicker, Caprasimo H2 30px, 15px body paragraph, outline "Meet the team" button → About page).
4. **Gallery teaser** — `#ebddc5` full-bleed band. Kicker/H2 (sage `#7a8a5e` kicker) + "See the full gallery →" link, then a 6-tile `auto-fill minmax(200px,1fr)` square grid.
5. **Testimonials** — kicker + H2, 3-card `auto-fill minmax(280px,1fr)` grid. Cards: `#f9f4ed` bg, 32px radius, quote (15px) + name (13px bold) + origin city (12px, 60% opacity).
6. **Final CTA band** — see global CTA band spec above. Copy: "Ready for your Essaouira adventure?"
7. Footer.

**Content — activity teaser copy**: "Rip through golden dunes on a guided quad convoy, sunset run included." / "Atlantic swell, small-group coaching, all levels welcome from first paddle to first wave." / "Ride the beach at golden hour the way caravans once crossed these shores." / "Gallop along the coast or through the argan forest with a local guide." / "Learn tagine and bread from a local kitchen, then eat what you made." / "Sunrise or sunset flow on the sand, open to every level."

**Content — testimonials**: Lena K. (Berlin, Germany) — quad/wave guide praise; Marco R. (Milan, Italy) — Instagram DM booking, quad + tagine; Amara O. (Lagos, Nigeria) — surf + sunset yoga, "felt like locals."

**About teaser body copy**: "Mogador Adventures was built by locals who grew up between these dunes and this ocean. We show you the Essaouira most visitors never see — desert to the east, Atlantic to the west, argan forest in between — and our team films every ride, wave and dinner so you leave with more than memories."

### 2. Activities (`Activities.dc.html`)
**Purpose**: Full detail on all 6 activities, each deep-linkable (`#quad`, `#surf`, `#camel`, `#horse`, `#cooking`, `#yoga`).
**Layout**: Centered intro header (kicker, Caprasimo H1 38px, 16px intro, max 520px), then 6 alternating two-column sections (photo | text, swapping sides every other row via CSS `order`; on mobile <760px collapses to single column with `!important` grid override), each with `id` = activity slug for anchor links. Each row: photo panel (4:3, 32px radius) + text panel (52px icon badge, Caprasimo H2 27px, 15px long description, wrapped tag pills — sage-tinted `#f0fae1` bg / `#3d472b` text, 12px radius — then a solid "Book Your Adventure" WhatsApp CTA scoped to that activity's name). Ends with the global final-CTA band + footer.

**Content — full activity details**:
- **Quad Biking the Dunes** (photo: `mogador_group_quad.jpg`) — "Ride a guided quad convoy over the dune belt just south of the medina. We keep groups small, brief you on handling before you roll, and time the ride so the light turns gold right as you crest the last ridge." Tags: Half-day, Small group, All levels.
- **Surf Lessons** (photo placeholder) — "Essaouira's steady Atlantic swell is forgiving for beginners and fun for anyone shaking off the rust. Board and wetsuit included, coached in small groups by local instructors who surf this break daily." Tags: 2-3 hours, Board included, All levels.
- **Camel Rides** (photo: `mogador_camel_forest.jpg`) — "A slow, scenic ride along the beach on gentle, well-cared-for camels, led by handlers who've worked with the same animals for years. Sunset departures are the local favorite." Tags: 1 hour, Family friendly, Sunset option.
- **Horseback Riding** (photo placeholder) — "Trot or gallop along the shoreline or thread through the argan forest inland — routes suited to first-timers and confident riders alike, matched to your horse and experience." Tags: 1-2 hours, Coast or forest, All levels.
- **Moroccan Cooking Class** (photo placeholder) — "Shop the market with your host, then cook a full tagine and fresh khobz bread from scratch in a local kitchen. You eat everything you make, family-style." Tags: 3-4 hours, Market visit, Vegetarian option.
- **Yoga Sessions** (photo placeholder) — "Sunrise or sunset flow on the sand, paced for every level, with the sound of the Atlantic instead of a studio playlist. Mats provided." Tags: 45-60 min, Sunrise or sunset, All levels.

Each activity's WhatsApp CTA pre-fills message text: `Hi Mogador Adventures! I'd like to book: <Activity Name>.`

**⚠ Implementation note**: the prototype's icon badges use a `dangerouslySetInnerHTML`-equivalent pattern to inject inline SVG icons. In your recreation, render these as normal inline SVG/icon-component markup — do not carry over unsafe HTML injection. Icons are simple Lucide-style line icons (compass/rings for quad, waves for surf, sun/desert glyph for camel, horseshoe-like path for horse, steaming-pot glyph for cooking, sun/flower for yoga) at stroke-width 2.2, 24×24, color `#8c491a` on `#fff2eb` circle.

### 3. About (`About.dc.html`)
**Purpose**: Brand story + team.
**Layout**: Short photo hero (min-height 340px, dark gradient overlay, Caprasimo H1 40px) → 3-paragraph story (max-width 900px, 16px/1.7, 86% opacity) → 3-photo strip (`auto-fit minmax(260px,1fr)`, 4:3, 32px radius: dune belt / Atlantic break / argan forest) → team band (`#ebddc5` bg, centered kicker+H2, 3-card `auto-fit minmax(200px,1fr)` grid of circular 140px portraits + Caprasimo name 16px + role 12px) → final CTA band → footer.

**Content — story paragraphs**: "Mogador Adventures started with a simple idea: show visitors the Essaouira we grew up in, not a postcard version of it. Our founders are locals — surfers, quad guides, and home cooks — who've spent years running these dunes, riding these waves and cooking in these kitchens for friends and family." / "Essaouira sits where three landscapes meet: the Sahara-fringed dunes to the south, the open Atlantic on its doorstep, and the argan forest just inland. Most trips only see one. We built Mogador Adventures to move between all three in a single visit — a quad run through the dunes at sunset, a surf lesson at sunrise, a horseback ride through the forest, a cooking class with a local family." / "Every guide on our team grew up here. We book almost entirely through Instagram DMs and WhatsApp because that's how our guests find us — through real photos and video from real trips, not stock imagery. Our team films and photographs every outing so you leave with more than a memory."

**Team**: Youssef — Founder & quad guide; Salma — Surf instructor; Hassan — Cooking host. (All 3 portraits are placeholders — no real photos provided yet.)

### 4. Gallery (`Gallery.dc.html`)
**Purpose**: Photo grid, framed as an Instagram feed extension.
**Layout**: Centered header (kicker, Caprasimo H1 36px, intro copy, Instagram link "@mogador_adventures on Instagram →" in sage `#56633f`) → 12-tile `auto-fill minmax(220px,1fr)` grid, gap 13.2px, 16px-radius tiles. Aspect ratio alternates: every 5th tile is 4:5 portrait, rest are 1:1 square. → final CTA band → footer.
**Content**: 12 labeled slots (Quad ride at sunset, Surf lesson, Camel train on the beach, Horseback ride, Cooking class, Yoga on the sand, Dune landscape, Medina street, Ocean waves, Team portrait, Reel thumbnail, Group photo). Only 4 have real photos assigned (positions 1, 2, 3, 10 = hero, group quad, camel/forest, couple quad); the rest are open placeholders pending more client photos/Instagram pulls.

### 5. Blog (`Blog.dc.html`)
**Purpose**: Journal/content marketing, 6 post teaser cards (no individual post pages built yet — cards link to `#`).
**Layout**: Centered header (kicker "The journal", H1 36px) → `auto-fill minmax(280px,1fr)` grid, gap 22px, of post cards (`#ebddc5` bg, 32px radius, 16:10 photo top, category+date meta line in `#8c491a` 11px uppercase, Caprasimo title 18px, 14px excerpt, "Read more →" link). → footer (no final CTA band on this page).
**Content — 6 posts**: "Best time of day to ride the dunes" (Desert, Jun 2026); "A beginner's guide to Essaouira's swell" (Ocean, May 2026); "What we actually cook in our classes" (Food, May 2026); "Coast or forest: choosing your horseback route" (Trails, Apr 2026); "The camel handlers of Essaouira's beach" (Desert, Apr 2026); "Why we start yoga before sunrise" (Wellness, Mar 2026). All photos are placeholders pending real blog photography.

### 6. FAQ (`FAQ.dc.html`)
**Purpose**: Accordion FAQ.
**Layout**: Centered header (kicker, H1 36px) → single-column accordion list max-width 800px. Each row: button (Caprasimo 17px question + chevron icon that rotates 180° when open) with bottom border `1px solid rgba(32,30,29,0.12)`; answer paragraph (15px/1.6, 82% opacity, max-width 640px) shown only when expanded. Only one FAQ open at a time (accordion behavior, first item open by default). → smaller CTA band ("Still have questions?") → footer.
**Content — 8 Q&As**: How do I book? (Instagram/WhatsApp, the contact form opens WhatsApp) · Walk-ins/same-day? (often yes) · Deposit required? (usually no, pay day-of; larger groups may need one) · What to bring? (comfortable/sandy-proof clothes, sun protection, water; gear provided) · Suitable for beginners? (yes, all coached) · Hotel pickup? (yes, usually included in Essaouira) · Guide languages? (Arabic, French, English min.; some Spanish/German) · Cancellation policy? (weather-dependent activities reschedule free).

### 7. Contact (`Contact.dc.html`)
**Purpose**: Booking form that hands off to WhatsApp or email — no backend submission.
**Layout**: Centered header (kicker, H1 36px, subhead) → 2-column grid (1.1fr/0.9fr, gap 44px; stacks on mobile <760px): **left** — form panel (`#ebddc5` bg, 32px radius, 35.2px padding) with fields Full name, Email, Preferred activity (select: Quad Biking / Surf Lesson / Camel Ride / Horseback Riding / Cooking Class / Yoga Session / Not sure yet), Preferred date (date input), free-text message textarea — all pill/rounded inputs on `#f9f4ed` bg — then two CTA buttons: solid "Send via WhatsApp" and outline "Send via email"; **right** — contact card (`#ebddc5` bg) with phone/WhatsApp, Instagram, TikTok, and location rows (each a 40px circular icon badge + two-line label), plus an embedded OpenStreetMap iframe (220px tall, 32px radius, centered on Essaouira ~31.5085, -9.7595) below it. Simplified footer (copyright only, no columns; no header CTA/hamburger-adjacent nav item for "Book Now" since this IS that page).
**Form → message behavior**: as the user fills fields, both the WhatsApp link and the `mailto:` link are live-rebuilt with the form data appended as plain text lines (Name/Email/Activity/Date/Note), always prefixed with "Hi Mogador Adventures! I'd like to book an adventure." WhatsApp target number `+212 662 169 221`; email `hello@mogadoradventures.com`, subject "Booking inquiry".

## Interactions & Behavior
- **Language switcher**: `<select>` in header, all 7 pages. Changing it calls a global `setMogadorLang(code)` which persists to `localStorage` (`mogador_lang`) and also mirrors to a `?lang=` URL query param, then **reloads the page** (full navigation, not SPA state) so the new language dictionary applies. `getMogadorLang()` checks `?lang=` query first, then localStorage, defaulting to `en`. 5 languages: English, Français, العربية (RTL), Español, Deutsch. Arabic sets `dir: rtl` on the whole page wrapper — mirror this (right-to-left layout) in your recreation for `ar`.
- **Mobile nav**: hamburger button toggles a boolean; nav switches from a hidden desktop row to a stacked mobile panel below the header at <900px viewport width (implemented via an injected `@media` stylesheet in this prototype — use standard responsive CSS/component logic instead).
- **FAQ accordion**: clicking a question toggles that item open/closed (single index of `openIdx` in state); only one open at a time; chevron rotates 180° on open.
- **Contact form**: fully client-side — no submit/POST. Every field's `onChange` updates local state and regenerates the WhatsApp deep-link (`https://wa.me/212662169221?text=...`) and `mailto:` link href in real time. No client-side validation is implemented in the prototype (recreate at minimum: valid email format check, required Name+Activity before enabling the WhatsApp/email buttons feels like a sane addition — confirm with client).
- **Hover/active states**: primary buttons darken (`#c67139` → `#b2622d`); outline buttons fill light (`#fff2eb`). No animations/transitions beyond these color changes; keep them simple (background-color only, no motion).
- **Responsive breakpoints**: 900px (nav collapse to hamburger), 760px (two-column sections/grids collapse to one column on Activities and Contact pages).

## State Management
Each page is independent (own component/route) with its own local UI state:
- `lang` (string, one of en/fr/ar/es/de) — read once on mount from `getMogadorLang()`, changed only via full navigation/reload on language switch (so no cross-page state sync needed beyond localStorage + query param).
- `mobileOpen` (boolean) — mobile nav panel visibility, per-page.
- FAQ page only: `openIdx` (number, index of open accordion item, -1 = none).
- Contact page only: `form` object `{ name, email, activity, date, message }`, plus derived `waLink`/`mailLink` computed from it on every change.
No data fetching — all copy/data is static/hardcoded per page and per language.

## Design Tokens
**Colors**
- Background (page): `#f5ead8` (cream/sand)
- Text (primary): `#201e1d`
- Accent (terracotta): `#c67139` — hover/pressed: `#b2622d`
- Accent dark (text-on-light use): `#8c491a`
- Accent tint (icon badge bg): `#fff2eb`
- Accent 2 (sage): `#7a8a5e` — darker sage text: `#56633f`
- Sage tint (tag bg): `#f0fae1` — sage tag text: `#3d472b`
- Card/panel surface: `#ebddc5`
- Elevated card surface: `#f9f4ed`
- Footer/dark surface: `#201e1d`, text `#f9f4ed` / muted `#dcd3c4`
- Borders: `rgba(32,30,29,0.10–0.16)` depending on weight

**Typography**
- Display/headings: **Caprasimo** (Google Fonts, weight 400 only)
- Body/UI: **Figtree** (weights 400, 600, 700)
- Scale used: H1 hero 52px/1.08, H1 page 36–40px, H2 section 27–34px, H3 card 18–19px, body 14–17px, small/meta 11–13px, kicker labels 12px uppercase letter-spacing 0.1em

**Spacing** (all values are ×1.1 of a round base — treat as the system's density scale)
8.8 / 13.2 / 17.6 / 22 / 26.4 / 35.2 / 44 / 52.8 / 70.4 (px)

**Radius**
- Buttons/inputs/pills: 999px (full pill)
- Cards/photo panels: 32px
- Gallery tiles: 16px
- Tags: 12px
- Icon badges/avatars: 999px (circle)

**Shadows**
- Card: `0 1px 2px rgba(46,43,37,0.14)`
- Elevated panel (contact form): `0 3px 10px rgba(46,43,37,0.16)`

**Icons**: line-style (Lucide-equivalent), stroke-width 2.2–2.75, no fill.

## Assets
- `uploads/mogador_hero.jpg` — Home hero background (dunes/Atlantic, Essaouira)
- `uploads/mogador_group_quad.jpg` — Activities "Quad Biking" photo + used in Gallery
- `uploads/mogador_couple_quad.jpg` — Home "About teaser" photo + used in Gallery
- `uploads/mogador_camel_forest.jpg` — Activities "Camel Rides" photo + used in Gallery
- All other photo slots across all 7 pages (About hero/team/desert/ocean/forest photos, Activities surf/horse/cooking/yoga photos, most Gallery tiles, all Blog post photos) are **unfilled placeholders** — the client has not yet supplied these images. Each placeholder has a descriptive label baked into the source (e.g. "Photo: sunrise yoga session on the beach") indicating exactly what image is needed — use these labels as your asset brief.
- Icons are inline SVG, no icon library/font dependency — hand-authored line icons matching Lucide's visual style.
- Google Fonts: Caprasimo, Figtree (loaded via `fonts.googleapis.com` in the prototype — self-host or use `next/font` etc. in production for performance).

## Files
- `source/Home.dc.html`, `Activities.dc.html`, `About.dc.html`, `Gallery.dc.html`, `Blog.dc.html`, `FAQ.dc.html`, `Contact.dc.html` — one file per page (view source for exact markup/inline styles per element)
- `source/i18n.js` — the full 5-language translation dictionary for shared chrome (nav/hero/CTAs/footer/forms) plus `getMogadorLang`/`setMogadorLang` helpers — use as your i18n content source of truth
- `source/support.js`, `source/image-slot.js` — prototyping-tool runtime files (templating engine, image placeholder web component). **Not needed in your recreation** — they exist only to make the HTML prototype run in isolation; your framework's own component/asset system replaces them.
- `source/uploads/` — the 4 real client photos currently in use (see Assets above)

## Contact & Business Details (for reference)
- Phone/WhatsApp: +212 662 169 221
- Email: hello@mogadoradventures.com
- Instagram: @mogador_adventures
- TikTok: @essasports2
- Location: Essaouira, Morocco (map centered ~31.5085, -9.7595)
- Copyright: © 2026 Mogador Adventures
