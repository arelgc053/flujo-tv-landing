// Datos de ec.oleadatvplus.com — Oleada TV comercializa Stella TV en Ecuador.
//
// ESTADO (7 nov 2026): todas las URLs de este dominio responden 301 hacia
// ec.stellatvplus.com/ por una regla de Cloudflare a nivel de zona. Lo que se
// construye desde esta app NO se ve en producción hasta que esa regla se retire.
//
// Precios: dólares estadounidenses (moneda de Ecuador), iguales en PE/AR/EC
// — shared/data/stella.ts. Se eliminó el objeto COUNTRY con precios viejos
// ($4.99 / $49.99) que convivía con estos y se mostraba en hero, CTA y JSON-LD.
// Pantallas: 3 simultáneas, como en PE/AR y como declara el producto oficial
// (antes decía "Hasta 4 dispositivos" en planes y "1 dispositivo" en FAQ).
// Códigos/APK: shared/data/stella.ts (DOWNLOADS). El 5360989 y el APK 26.3.4
// quedaron obsoletos.

import { USD_PLANS, SCREENS, CHANNELS_LABEL, effectiveMonthly, totalMonths } from '@shared/data/stella';

export interface StellaPlan {
  id: string;
  label: string;
  price: string;
  badge?: string;
  bonus?: string;
  featured?: boolean;
}

const LABELS: Record<string, string> = { '1m': '1 mes', '3m': '3 meses', '6m': '6 meses', '12m': '12 meses' };

export const STELLA_EC = {
  brand: 'Stella TV',
  whatsapp: '51940405911',
  // En Ecuador el dólar es la moneda local: se muestra "$" como en el resto del sitio.
  currency: '$',

  plans: USD_PLANS.map(p => ({
    id: p.id,
    label: LABELS[p.id],
    price: String(p.price),
    badge: p.id === '3m' ? 'Más elegido' : undefined,
    featured: p.id === '3m',
    bonus: p.bonusMonths
      ? `+${p.bonusMonths} ${p.bonusMonths === 1 ? 'mes gratis' : 'meses gratis'} — ${totalMonths(p)} meses en total (equivale a $${effectiveMonthly(p)}/mes)`
      : undefined,
  })) as StellaPlan[],

  planFeatures: [
    `${CHANNELS_LABEL} en vivo`,
    `${SCREENS} pantallas simultáneas`,
    'Cine y series a demanda',
    'Full HD y Ultra HD',
    'Soporte vía WhatsApp',
    'Activación el mismo día',
  ],

  // Verificado el 7 nov 2026 en la página oficial del producto para Ecuador (misma línea
  // de WhatsApp): solo transferencia bancaria desde Banco Pichincha o Banco Guayaquil.
  // Se retiraron Visa, Mastercard y PayPal: no había respaldo de que se acepten.
  paymentMethods: ['Banco Pichincha', 'Banco Guayaquil'],
  paymentText: 'transferencia bancaria desde Banco Pichincha o Banco Guayaquil',
  beforePayingText: 'Precio en dólares, sin conversiones. Te enviamos por el mismo chat los datos para transferir desde Banco Pichincha o Banco Guayaquil.',

  areaServed: ['Ecuador'],
};
