# Panko Sushi 🍣

Menú digital para Panko Sushi — restaurante de sushi en Mérida, Yucatán.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** (animaciones)
- **pnpm**

## Desarrollo

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

## Estructura

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

Desplegado en Netlify. El archivo `netlify.toml` contiene la configuración.

## i18n

Soporta español e inglés. Los textos de UI están en `src/i18n/es.json` y `src/i18n/en.json`.
