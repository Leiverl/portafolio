# portafolio

Portafolio personal de Leiver — desarrollador full-stack (Ecuador).

Next.js 16 · Tailwind CSS v4 · TypeScript · motion · Phosphor Icons.

## Características

- Bilingüe Español / Inglés (toggle en el navbar, persiste en `localStorage`)
- Tema claro / oscuro (sigue el sistema por defecto, manual con persistencia)
- Secciones: Hero (plano catastral), Sobre mí, Proyectos destacados, Habilidades, Más en GitHub y Contacto
- 4 proyectos destacados con stack, enlace al código y demo en vivo cuando está disponible
- Animaciones de entrada respetuosas con `prefers-reduced-motion`

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
```

## Scripts

```bash
npm run build   # build de producción (Turbopack)
npm run lint    # ESLint
npm run start   # sirve el build
```

## Despliegue

Deploy estándar de Next.js en Vercel.

- Variable opcional `NEXT_PUBLIC_SITE_URL` (tu dominio, ej. `https://portafolio-leiver.vercel.app`) para resolver la imagen de Open Graph. Sin ella se usa un fallback.
- Para servir las portadas SVG (`/projects/*.svg`) se habilitó `images.dangerouslyAllowSVG` con una CSP restrictiva (`script-src 'none'`) en `next.config.ts`. Las portadas de proyectos viven en `public/projects/` y se referencian desde `lib/site-config.ts`.