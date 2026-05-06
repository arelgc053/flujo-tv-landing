# Oleada TV — Landing Pages

Monorepo de landing pages para el servicio de streaming Oleada TV. Arquitectura multi-país basada en **Astro 4** con npm workspaces.

---

## Estructura del proyecto

```
oleada-tv/
├── package.json              ← Workspace root (scripts globales)
├── shared/
│   ├── components/           ← Componentes Astro reutilizables
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── StatsBar.astro
│   │   ├── HowItWorks.astro
│   │   ├── ContentGrid.astro
│   │   ├── Plans.astro
│   │   ├── Comparison.astro
│   │   ├── Testimonials.astro
│   │   ├── Devices.astro
│   │   ├── FAQ.astro
│   │   ├── CTAFinal.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppFloat.astro
│   │   └── StickyMobileCTA.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  ← HTML base, meta tags, Schema.org
│   └── styles/
│       └── global.css        ← Estilos globales (design system)
└── apps/
    └── pe/                   ← Landing de Perú (oleadatvplus.com)
        ├── astro.config.mjs  ← Config Astro + alias @shared
        ├── tsconfig.json
        ├── package.json
        ├── public/
        │   ├── img/          ← hero.webp, logo.png, deportes.webp…
        │   ├── favicon.png
        │   ├── robots.txt
        │   └── sitemap.xml
        └── src/pages/
            └── index.astro   ← Página principal (datos del país)
```

---

## Requisitos

- **Node.js** ≥ 20.x
- **npm** ≥ 9.x

---

## Desarrollo local

```bash
# Instalar todas las dependencias (desde la raíz)
npm install

# Iniciar servidor de desarrollo de Perú
npm run dev
# → http://localhost:4321/

# O directamente desde la app
cd apps/pe
npx astro dev
```

---

## Build y preview

```bash
# Build solo Perú
npm run build:pe

# Build de todos los países
npm run build:all

# Preview del build de Perú
npm run preview:pe
```

El output se genera en `apps/pe/dist/`.

> **Importante:** Los archivos SEO y de publicación (robots.txt, sitemap.xml, _redirects e imágenes) se mantienen en `apps/pe/public/`. No editar la carpeta `public/` de la raíz para cambios de la landing de Perú.

---

## Despliegue

### Netlify (recomendado)

1. Conecta el repositorio en [app.netlify.com](https://app.netlify.com)
2. Configuración del sitio:
   - **Base directory:** `apps/pe`
   - **Build command:** `npm run build`
   - **Publish directory:** `apps/pe/dist`
3. En **Environment variables** no se requieren variables de entorno.
4. Cada `apps/XX/` puede desplegarse como sitio independiente en Netlify, apuntando al dominio correspondiente.

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde la carpeta de la app
cd apps/pe
vercel --prod
```

En el dashboard de Vercel:
- **Root Directory:** `apps/pe`
- **Framework preset:** Astro
- **Output directory:** `dist`

### Cloudflare Pages

1. Conecta el repo en Cloudflare Pages.
2. Framework: **Astro**
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Root path: `apps/pe`

---

## Agregar un nuevo país

1. **Crea la carpeta** `apps/XX/` (ej. `apps/co/` para Colombia):

```bash
mkdir -p apps/co/src/pages apps/co/public/img
```

2. **Copia los archivos de configuración** desde `apps/pe/`:
   - `package.json` → cambia `"name": "@oleada/co"`
   - `astro.config.mjs` → cambia `site: 'https://oleadatv.co'`
   - `tsconfig.json` → igual, sin cambios

3. **Agrega las imágenes** en `apps/co/public/img/` (logo, hero, etc.)

4. **Crea** `apps/co/src/pages/index.astro`:

```astro
---
import BaseLayout from '@shared/layouts/BaseLayout.astro';
// ... demás imports

const COUNTRY = {
  brand:           'Oleada TV',
  whatsapp:        '57XXXXXXXXXX',  // WhatsApp Colombia
  currency:        'USD',
  monthlyOriginal: '15',
  monthlyOffer:    '9.99',
  annualOriginal:  '120',
  annualOffer:     '89.99',
  annualSaving:    '29.89',
  paymentMethods:  ['Nequi', 'Bancolombia', 'Efectivo'],
};
---
```

5. **Actualiza el workspace root** `package.json`:

```json
"scripts": {
  "dev:co": "npm run dev --workspace=apps/co",
  "build:co": "npm run build --workspace=apps/co"
}
```

6. **Ejecuta** `npm install` desde la raíz para registrar el nuevo workspace.

---

## Componentes clave

| Componente | Props principales | Función |
|---|---|---|
| `BaseLayout` | `title`, `description`, `keywords`, `canonical`, `faqSchema` | HTML base, meta SEO, Schema.org |
| `Navbar` | `brand`, `whatsapp` | Navegación sticky con menú móvil |
| `Hero` | `currency`, `monthlyOffer`, `whatsapp` | Sección principal con CTA |
| `Plans` | `currency`, `monthlyOffer`, `annualOffer`, `whatsapp`… | Tarjetas de planes con link a WA |
| `Comparison` | `currency`, `monthlyOffer` | Tabla vs cable tradicional |
| `FAQ` | `items[]` (opcional) | Acordeón nativo `<details>` |
| `StickyMobileCTA` | `whatsapp`, `currency`, `monthlyOffer` | Barra fija inferior en móvil |
| `WhatsAppFloat` | `whatsapp` | Botón flotante WA (desktop) |

---

## SEO y datos estructurados

- **Schema.org Organization** generado automáticamente en `BaseLayout`.
- **Schema.org FAQPage** generado a partir del array `faqSchema` pasado como prop.
- **Open Graph + Twitter Card** completos para compartir en redes.
- **robots.txt** permite indexación total.
- **sitemap.xml** manual en `apps/pe/public/sitemap.xml` — actualizar `<lastmod>` tras cada despliegue.
- **Geo targeting** con `<meta name="geo.region" content="PE" />`.

> El lenguaje de todo el contenido visible usa términos genéricos: "deportes en vivo", "cine de estreno", "series internacionales". Nunca mencionar marcas de ligas, plataformas de streaming o términos asociados a piratería.

---

## Imágenes requeridas por país

Cada `apps/XX/public/img/` debe contener:

| Archivo | Dimensión recomendada | Uso |
|---|---|---|
| `hero.webp` | 1920×1080 | Fondo de la sección Hero |
| `logo.png` | 240×80 (transparente) | Navbar y Footer |
| `deportes.webp` | 1200×675 | Tarjeta de contenido |
| `peliculas.webp` | 1200×675 | Tarjeta de contenido |
| `series.webp` | 1200×675 | Tarjeta de contenido |
| `tv.webp` | 1200×675 | Tarjeta de contenido |
| `favicon.png` | 512×512 | Ícono del navegador |

---

## Scripts disponibles

```bash
npm run dev          # Dev server de Perú
npm run build:pe     # Build Perú
npm run preview:pe   # Preview build Perú
npm run build:all    # Build todos los países
```
