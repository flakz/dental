# PawSide (PawBase) — Codebase Overview

## What
Next.js 15 marketing/booking site for PawSide, a doorstep pet care service in Krishnagiri, Tamil Nadu.

## Stack
- Next.js 15 App Router, React 19, TypeScript 6
- Tailwind CSS 4 with custom `--paw-*` design tokens in `globals.css`
- shadcn/ui (new-york) + @shadcncraft, @uitripled component registries
- framer-motion, lucide-react, sonner, next-themes
- ntfy.sh for form notifications (no database)

## Routes
- `/` — Home (hero, services grid, why us, process, testimonials, FAQ, CTA)
- `/about` — Founder story, values, timeline, team, careers CTA
- `/services` — Grouped by category (care, training, transport, farewell)
- `/services/[slug]` — Dynamic service detail with bullets, FAQ, related services
- `/book` — Booking form (ContactForm mode="book") + price sidebar
- `/contact` — Contact form + channels sidebar
- `/feedback` — Star rating form → ntfy + Google review redirect for ≥4 stars
- `/api/contact` — POST → ntfy.sh
- `/api/theme` — GET → theme CSS vars as JSON

## Lib Files
- `config.ts` — site brand, contact info, ntfy config, Google Place ID
- `services.ts` — 8 services with slug, name, description, bullets, icon, price, category
- `theme.ts` — Theme interface, 3 presets (terracotta/forest/navy), loadTheme()
- `images.ts` — Unsplash image map (hero variants, service images, decorative)
- `utils.ts` — cn() helper (clsx + tailwind-merge)

## Design System
- CSS vars `--paw-*` registered as Tailwind colors via `@theme inline`
- Fonts: Fraunces (display), Bricolage Grotesque (body)
- ThemeBoot fetches `/api/theme` to apply server-side overrides
- Fluid typography with clamp(), layered warm shadows

## Key Patterns
- "ponytail" comments = TODOs/known limitations
- Forms POST to ntfy.sh, not a database
- Service pages use generateStaticParams for static gen
- Images served from /public/, not remote
