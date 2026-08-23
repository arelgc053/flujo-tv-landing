// Fuente única de verdad para la marca Stella TV en apps/ar (ar.oleadatvplus.com).
// Mismo patrón que apps/pe/src/stella.config.ts y apps/ec/src/stella.config.ts,
// con los datos confirmados de Argentina.
//
// Precios ARS confirmados por el cliente (23 ago 2026) — copiados tal cual del
// sitio publicado de Stella, formato argentino (punto de miles). No son una
// conversión desde USD: el negocio fija el precio en pesos directamente, que es
// justamente la promesa de copy "pagás en pesos, sin sorpresas por el dólar".
//
// WhatsApp: número 940405911, con código de país +51 (Perú) — NO +54
// (Argentina). Es el mismo número físico/WhatsApp Business que ya usan EC y
// PE: el prefijo lo define dónde está registrada la línea, no el país de la
// landing que lo muestra. Usar +54 acá generaría un número que no existe y
// el link de WhatsApp no abriría ninguna conversación real. Corregido el
// 23 ago 2026 tras detectar el error.

export interface StellaPlan {
  id: string;
  label: string;
  price: string;
  badge?: string;
  bonus?: string;
  saving?: string;
  featured?: boolean;
}

export const STELLA_AR = {
  brand: 'Stella TV',

  whatsapp: '51940405911',
  currency: '$',

  plans: [
    { id: '1m', label: '1 Mes', price: '13.499' },
    { id: '3m', label: '3 Meses', price: '40.499', badge: 'Más elegido', featured: true },
    { id: '6m', label: '6 Meses', price: '73.499', bonus: '+1 Mes Gratis — 7 meses en total' },
    { id: '12m', label: '12 Meses', price: '142.499', bonus: '+2 Meses Gratis — 14 meses en total', saving: 'Mejor precio del año' },
  ] as StellaPlan[],

  // Iguales en los 4 planes — mismo criterio que EC y PE: todo el contenido es
  // igual, solo cambia la duración y el ahorro.
  planFeatures: [
    '+1,000 canales en vivo',
    '3 pantallas simultáneas',
    'Cine y Series VOD',
    'Full HD y Ultra HD',
    'Soporte vía WhatsApp',
    'Activación inmediata',
  ],

  // Texto plano — el ícono de cada método se arma en index.astro (ver PAYMENT_ICONS)
  // para no mezclar markup con datos en este archivo, igual que en EC/PE.
  paymentMethods: ['Mercado Pago', 'Transferencia (CVU/CBU)', 'Tarjetas de crédito/débito'],

  // Código Downloader confirmado por el cliente para Argentina (23 ago 2026):
  // el mismo que ya usa apps/pe (8821026) — dato definitivo, no un fallback
  // "parecido". El de apps/ec (5360989) es un código distinto, propio de esa
  // landing — no reusar ese.
  downloaderCode: '8821026' as string | null,

  // Mismo APK universal que ya usa apps/ec — el binario de Stella TV no
  // cambia por país, solo el backend/contenido al que se conecta.
  apk: {
    version: 'v26.3.4',
    url: 'https://github.com/Cristian1828/stellatv-movil/releases/download/v1/Stella_mobile_26.3.4.apk',
  },

  logo: {
    icon: '/img/icon.png',
    iconTouch: '/img/icon-180.png',
    iconFavicon: '/img/icon-32.png',
  },
  ogImage: '/img/og-image.png',

  areaServed: ['Argentina', 'Buenos Aires', 'CABA', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'Mar del Plata', 'Tucumán'],

  // Sin reseñas públicas verificadas todavía en Argentina — a diferencia de
  // EC/PE (rating confirmado por el cliente en Google), acá no hay una cifra
  // real que mostrar. Se deja en null a propósito: mejor no mostrar rating que
  // fabricar uno. Ver PendingTestimonials.astro para cómo se comunica esto en
  // la sección de testimonios sin perder confianza.
  rating: null as { value: string; count: string } | null,
};
