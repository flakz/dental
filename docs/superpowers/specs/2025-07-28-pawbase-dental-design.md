# PawBase Dental Demo — Design Spec

## Overview

Adapt the existing PawSide (pet care) Next.js project into a dental clinic demo site. Same design system, components, and architecture — dental content throughout. Built as a portfolio piece to showcase design capability to dental clients, with an env-override pattern for future multi-client reuse.

## Architecture

### Source structure (new folder)

```
pawbase-dental/
├── src/lib/
│   ├── config.ts          → Dental brand, locations, contacts
│   ├── services.ts        → 30+ dental services (adult + kids)
│   ├── team.ts            → Doctor profiles (from Microsmiles)
│   ├── testimonials.ts    → Patient reviews (from Microsmiles)
│   ├── images.ts          → Image manifest (placeholder alt/credit)
│   ├── content.ts         → Env-override wrapper for future clients
│   ├── theme.ts           → Unchanged from PawSide
│   └── utils.ts           → Unchanged from PawSide
├── src/app/
│   ├── page.tsx           → Home — dental hero, services, stats, testimonials, FAQ, CTA
│   ├── about/page.tsx     → Clinic story, team grid
│   ├── services/page.tsx  → Grouped Adult / Kids services with toggle
│   ├── services/[slug]/   → Auto-generated detail pages (30+)
│   ├── book/page.tsx      → Appointment form (same form, dental labels)
│   ├── contact/page.tsx   → Dental locations + contact form
│   ├── feedback/page.tsx  → Rating → ntfy
│   ├── take-a-tour/page.tsx  → Virtual clinic tour (new)
│   └── referral/page.tsx  → Referral doctors (new)
├── src/components/        → All existing components, unchanged
├── src/lib/theme.ts       → 6+ presets, unchanged
├── .env                   → THEME=navy (default for dental demo)
└── package.json           → Same deps
```

### Key principle: no component rewrites

All changes are content-only — lib/ files and page copy. UI components, layouts, headers, footers, cards, and animations remain identical to PawSide.

## Routes & Pages

| Route | Purpose |
|---|---|
| `/` | Hero ("Painless Dentistry"), services overview, stats, process, testimonials, FAQ, CTA |
| `/about` | Clinic mission, doctor team grid, timeline, values |
| `/services` | All services grouped under Adult / Kids tabs |
| `/services/[slug]` | Individual service detail (price, bullets, FAQ, related) |
| `/book` | Appointment booking form |
| `/contact` | Multi-location info + contact form |
| `/feedback` | Star rating → ntfy.sh + Google review redirect |
| `/take-a-tour` | Clinic virtual tour / gallery |
| `/referral` | Referral doctors info |

## Services Data Model

### Categories (expanded from PawSide)

```ts
type DentalCategory = 'adult' | 'kids'
```

### Adult Services (22)

1. Root Canal Therapy
2. Repeat Root Canal Therapy
3. Surgical Root Canal Therapy
4. Tooth Scaling / Cleaning
5. Contact-Free Stain Removal
6. Wisdom Tooth Management (Without Extraction)
7. Bioceramic Fillings
8. Caps / Dental Crowns
9. Dental Bridges
10. Dental Implants
11. Full Mouth Rehabilitation
12. Teeth Whitening (Bleaching)
13. Smile Designing
14. Broken Tooth Management
15. Dental Veneers
16. Gaps & Crowding Correction
17. Non-Microscope Assisted Dentistry
18. Tooth Extraction
19. Laser Gum Surgery
20. Orthodontics / Braces
21. Invisalign
22. Sleep Dentistry

### Kids Services (9)

1. Tooth-Colored Fillings For Kids
2. Zirconia Crowns / Ceramic Caps
3. Children's Root Canal / Pulp Therapy
4. Preventive Dentistry For Kids
5. Face & Jaw Correction For Kids
6. Orthodontics For Kids
7. Aligners for Kids (Invisalign First)
8. Sleep Dentistry For Kids
9. Tooth-Colored Fillings For Kids

## Content Strategy

### Env-Override Pattern (future-proofing)

A `content()` helper function reads `process.env[CONTENT_*]` first, falls back to local module exports:

```ts
// src/lib/content.ts
export function content<T>(key: string, local: T): T {
  try {
    const raw = process.env[`CONTENT_${key.toUpperCase()}`]
    return raw ? JSON.parse(raw) : local
  } catch {
    return local
  }
}
```

This allows:
- **Now:** Local content files populate the demo
- **Future:** `CONTENT_CONFIG='{...}'` env var overrides brand/location
- **Future:** `CONTENT_SERVICES='[...]'` overrides service catalog
- **Future:** `CONTENT_TEAM='[...]'` overrides doctor profiles

### Demo content source

All demo content drawn from the reference site `microsmiles.in`:
- Brand: Microsmiles Dental Care
- Tagline: "You Smile, We Smile — Painless Dentistry Adopted from UK, Now in India"
- Locations: Chennai (Anna Nagar, OMR), Bangalore (Whitefield)
- Team: 10+ doctors with credentials
- Testimonials: Real Google reviews from reference site

## Theme & Visual

- **Default theme:** Navy (clean, clinical, trustworthy for dental)
- **All 6 presets preserved:** terracotta, forest, navy, sand, charcoal, rose
- **No font change:** Fraunces (display) + Bricolage Grotesque (body) work well for dental
  - Fraunces conveys care and warmth
  - Bricolage Grotesque reads clean and modern
- **No component changes** — same card styles, buttons, navigation, footer

## Images

- Image manifest updated with dental-appropriate alt text and credit placeholders
- All images initially show placeholder/generic until user provides dental photos
- No image sourcing from reference site (we avoid hotlinking or copying)

## Data Flow (unchanged)

- No database
- Forms POST to ntfy.sh (renamed topic for dental)
- Static generation via `generateStaticParams`
- Same notification pattern

## Non-Goals (explicitly out of scope)

- Blog pages (Microsmiles has this, we skip)
- WooCommerce / e-commerce (Microsmiles has this, irrelevant)
- WordPress migration (we're rebuilding from scratch)
- Image sourcing (user will provide later)
- Any component-level UI changes

## Files to Create / Modify

### New files
- `src/lib/team.ts` — Doctor profiles
- `src/lib/testimonials.ts` — Patient reviews
- `src/lib/content.ts` — Env-override helper
- `src/app/take-a-tour/page.tsx` — Virtual tour page
- `src/app/referral/page.tsx` — Referral doctors page

### Modified files (content swap)
- `src/lib/config.ts` → Dental brand, locations, contacts, social, ntfy topics
- `src/lib/services.ts` → 31 dental services in adult/kids categories
- `src/lib/images.ts` → Dental-appropriate alt/credit placeholders
- `src/app/page.tsx` → Dental hero, stats, process, FAQ, testimonials
- `src/app/about/page.tsx` → Clinic story, team grid
- `src/app/book/page.tsx` → Appointment form labels
- `src/app/contact/page.tsx` → Dental locations info
- `src/app/services/page.tsx` → Add adult/kids toggle grouping
- `.env` → `THEME=navy`, ntfy topics renamed

### Untouched files
- All `src/components/` — zero changes
- `src/app/layout.tsx` — same layout
- `src/lib/theme.ts` — same presets
- `src/lib/utils.ts` — unchanged
- `src/app/globals.css` — same design tokens
- `src/app/not-found.tsx` — unchanged
- All hooks and utility components
- `package.json`, `next.config.mjs`, `tsconfig.json`
