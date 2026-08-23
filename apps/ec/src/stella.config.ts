// Fuente única de verdad para la marca Stella TV en apps/ec (ec.oleadatvplus.com).
// Igual que apps/pe/src/stella.config.ts, pero con los datos confirmados de Ecuador.
// Ver el plan aprobado (Prompt 2 Ecuador) para el detalle de cada valor.

export interface StellaPlan {
  id: string;
  label: string;
  price: string;
  badge?: string;
  bonus?: string;
  featured?: boolean;
}

export const STELLA_EC = {
  brand: 'Stella TV',
  whatsapp: '51940405911',
  currency: '$',

  plans: [
    { id: '1m', label: '1 Mes', price: '9' },
    { id: '3m', label: '3 Meses', price: '27', badge: 'Más elegido', featured: true },
    { id: '6m', label: '6 Meses', price: '49', bonus: '+1 mes gratis — 7 meses en total' },
    { id: '12m', label: '12 Meses', price: '95', bonus: '+2 meses gratis — 14 meses en total' },
  ] as StellaPlan[],

  // Iguales en los 4 planes — texto exacto confirmado. Centralizado acá para que
  // ningún componente tenga que repetirlo ni volver a hardcodear las tarjetas.
  planFeatures: [
    '+1,000 canales en vivo',
    'Hasta 4 dispositivos simultáneos',
    'Cine y Series VOD',
    'Full HD y Ultra HD',
    'Soporte vía WhatsApp',
    'Activación inmediata',
  ],

  paymentMethods: ['Transferencia bancaria', 'Visa', 'Mastercard', 'PayPal'],

  // Código Downloader confirmado para Ecuador — NO es el de Perú (8821026).
  downloaderCode: '5360989' as string | null,

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

  areaServed: ['Ecuador', 'Quito', 'Guayaquil', 'Cuenca', 'Ambato', 'Manta', 'Portoviejo', 'Loja', 'Esmeraldas'],

  // Misma calificación general confirmada por el cliente (Google) el 22 ago 2026 — 4.8/5, 120 reseñas.
  rating: { value: '4.8', count: '120' },
};
