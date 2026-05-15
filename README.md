# Panko Sushi 🍣

Digital menu for Panko Sushi — a sushi restaurant in Campeche, México.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** (animations)
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
├── data/           # TypeScript menu data and types
├── hooks/          # Custom React hooks
├── i18n/           # Internationalization (ES/EN)
└── lib/            # Pure utility functions
```

## Deployment

Deployed on Netlify. See `netlify.toml` for configuration.

## i18n

Supports Spanish and English. UI texts live in `src/i18n/es.json` and `src/i18n/en.json`.
