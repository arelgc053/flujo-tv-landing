// Los tres sitios de Oleada TV y su estado.
//
// `active: false` significa que el dominio NO está sirviendo la landing de
// Oleada. Mientras esté así, ningún otro sitio de Oleada lo enlaza ni lo
// declara en hreflang (un hreflang que apunta a un 301 es inválido y, en este
// caso, mandaría visitantes a otro sitio).
//
// Ecuador: estuvo redirigido entero a ec.stellatvplus.com por una regla de
// Cloudflare ("Redirect Ecuador Home"). El propietario la desactivó y el 7 nov
// 2026 se verificó: https://ec.oleadatvplus.com/ responde 200, certificado
// válido, servido por Cloudflare Pages (proyecto oleadatvlanding07). Reactivado.
// No volver a configurar redirecciones hacia Stella TV.

export type SiteKey = 'pe' | 'ar' | 'ec';

export interface OleadaSite {
  key: SiteKey;
  country: string;
  hreflang: string;
  origin: string;
  home: string;
  /** Ruta de la guía de instalación en ese sitio, si existe. */
  installPath?: string;
  active: boolean;
}

export const OLEADA_SITES: Record<SiteKey, OleadaSite> = {
  pe: {
    key: 'pe',
    country: 'Perú',
    hreflang: 'es-PE',
    origin: 'https://oleadatvplus.com',
    home: 'https://oleadatvplus.com/',
    installPath: '/instalar-stella-tv/',
    active: true,
  },
  ar: {
    key: 'ar',
    country: 'Argentina',
    hreflang: 'es-AR',
    origin: 'https://ar.oleadatvplus.com',
    home: 'https://ar.oleadatvplus.com/',
    installPath: '/instalar-stella-tv',
    active: true,
  },
  ec: {
    key: 'ec',
    country: 'Ecuador',
    hreflang: 'es-EC',
    origin: 'https://ec.oleadatvplus.com',
    home: 'https://ec.oleadatvplus.com/',
    installPath: '/instalar-stella-tv',
    active: true,
  },
};

const X_DEFAULT_SITE: SiteKey = 'pe';

/** hreflang entre los homes de los sitios activos (+ el propio siempre). */
export function homeAlternates(current: SiteKey) {
  const sites = Object.values(OLEADA_SITES).filter(s => s.active || s.key === current);
  return [
    ...sites.map(s => ({ hreflang: s.hreflang, href: s.home })),
    { hreflang: 'x-default', href: OLEADA_SITES[X_DEFAULT_SITE].home },
  ];
}

/** hreflang entre las guías de instalación de los sitios activos que la tienen. */
export function installAlternates() {
  const sites = Object.values(OLEADA_SITES).filter(s => s.active && s.installPath);
  return [
    ...sites.map(s => ({ hreflang: s.hreflang, href: s.origin + s.installPath })),
    { hreflang: 'x-default', href: OLEADA_SITES[X_DEFAULT_SITE].origin + OLEADA_SITES[X_DEFAULT_SITE].installPath },
  ];
}

/** Otros sitios de Oleada que se pueden enlazar (activos y distintos al actual). */
export function siblingSites(current: SiteKey) {
  return Object.values(OLEADA_SITES).filter(s => s.active && s.key !== current);
}
