# Panko Sushi 🍣

Digital menu for Panko Sushi — a modern sushi restaurant in Campeche, México.

**Live:** https://pankosushi.netlify.app

## Features

- 11 menu categories with full item descriptions
- Weekly promotions carousel
- WhatsApp ordering integration
- Dark/Light theme with localStorage persistence
- i18n support (Spanish/English)
- Search with instant results (matches items, descriptions, and categories)
- Scroll-spy active category navigation
- Mobile-first responsive design
- Accessible (WCAG AA, keyboard navigation, screen readers)

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS 4**
- **Vitest** + **fast-check** (property-based testing)
- **pnpm**

## Development

```bash
pnpm install
pnpm dev
```

## Tests

```bash
pnpm test          # single run
pnpm test:watch    # watch mode
```

## Build

```bash
pnpm build
```

## Structure

```
src/
├── app/            # Next.js App Router (layout, page, globals)
├── components/     # UI components
├── data/           # Menu data, promotions, and TypeScript types
├── hooks/          # Custom React hooks (useScrollSpy, useDebounce)
├── i18n/           # Internationalization (ES/EN)
└── lib/            # Pure utility functions (search, format, scroll-spy)
```

## Deployment

Deployed on Netlify. See `netlify.toml` for configuration.

## i18n

Supports Spanish and English. UI texts live in `src/i18n/es.json` and `src/i18n/en.json`. Menu item descriptions have both `description` (ES) and `descriptionEn` (EN) fields.
