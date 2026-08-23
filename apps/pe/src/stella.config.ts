// Fuente única de verdad para la marca Stella TV en apps/pe (oleadatvplus.com).
// Todo dato duro (WhatsApp, precios, código de instalación) vive aquí para que
// actualizarlo sea un cambio en un solo archivo, no en las 6 páginas + componentes.
//
// Fuente de los datos: https://stellatvplus.com/#inicio (verificado 20 ago 2026).
// Código Downloader confirmado por el cliente el 21 ago 2026: 8821026
// (coincide con el valor visto en vivo en stellatvplus.com el 20 ago 2026;
// el 5360989 del brief original no se usa).

export interface StellaPlan {
  id: string;
  label: string;
  price: string;
  usd?: string;
  badge?: string;
  bonus?: string;
  saving?: string;
  featured?: boolean;
}

export const STELLA = {
  brand: 'Stella TV',

  // Marca anterior — solo para el mensaje breve de transición, nunca como producto.
  previousBrand: 'Oleada',

  whatsapp: '51940405911',
  currency: 'S/',

  plans: [
    { id: '1m', label: '1 Mes', price: '34.99', usd: '10' },
    { id: '3m', label: '3 Meses', price: '99.99', usd: '28', badge: 'Más vendido', featured: true },
    { id: '6m', label: '6 Meses', price: '165.99', usd: '51', bonus: '+1 mes gratis — 7 meses en total' },
    { id: '12m', label: '12 Meses', price: '312.99', usd: '97', bonus: '+2 meses gratis — 14 meses en total', saving: 'Ahorras ~25%' },
  ] as StellaPlan[],

  // Iguales en los 4 planes — texto exacto confirmado.
  planFeatures: [
    '+1,000 Canales',
    '3 Pantallas',
    'Cine y Series VOD',
    'Calidad Full HD',
    'Soporte 24/7',
    'Activación Inmediata',
  ],

  paymentMethods: ['Yape', 'Plin'],

  downloaderCode: '8821026' as string | null,

  logo: {
    icon: '/img/icon.png',        // marca a color, alta resolución — schema.org / usos grandes
    iconTouch: '/img/icon-180.png', // 180×180 — apple-touch-icon y logo visible en UI oscura
    iconFavicon: '/img/icon-32.png', // 32×32 — favicon
    fullLockup: '/img/logo-white.png', // ícono + wordmark "STELLA TV", texto oscuro — solo fondos claros
  },
  ogImage: '/img/og-image.png',

  areaServed: ['Perú', 'Lima', 'Arequipa', 'Trujillo', 'Cusco', 'Piura', 'Iquitos', 'Chiclayo', 'Huancayo'],

  // Calificación general confirmada por el cliente (Google) el 22 ago 2026 — 4.8/5, 120 reseñas.
  // No republicar sin volver a confirmar que sigue coincidiendo con el perfil real de Google.
  rating: { value: '4.8', count: '120' },
};

export function waLink(text: string, whatsapp: string = STELLA.whatsapp): string {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
}
