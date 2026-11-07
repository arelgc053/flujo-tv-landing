// Datos de ar.oleadatvplus.com — Oleada TV comercializa Stella TV en Argentina.
//
// Precios: en dólares estadounidenses, iguales en PE/AR/EC (shared/data/stella.ts,
// confirmados por el negocio el 7 nov 2026). Reemplazan a los precios en pesos
// (13.499 / 40.499 / 73.499 / 142.499) que se publicaban desde ago 2026.
// El pago se hace con medios locales (Mercado Pago o transferencia CVU/CBU) y el
// importe final en pesos se confirma por WhatsApp ANTES de pagar: no se publica
// un tipo de cambio porque el sitio no puede garantizarlo.
//
// WhatsApp: 940405911 con código +51 (Perú), NO +54. Es la misma línea de
// WhatsApp Business que usan PE y EC; el prefijo depende de dónde está
// registrada la línea, no del país de la landing.

import { USD_PLANS, USD_SYMBOL, SCREENS, CHANNELS_LABEL, effectiveMonthly, totalMonths } from '@shared/data/stella';

export interface StellaPlan {
  id: string;
  label: string;
  price: string;
  badge?: string;
  bonus?: string;
  saving?: string;
  featured?: boolean;
}

const LABELS: Record<string, string> = { '1m': '1 mes', '3m': '3 meses', '6m': '6 meses', '12m': '12 meses' };

export const STELLA_AR = {
  brand: 'Stella TV',
  whatsapp: '51940405911',
  currency: USD_SYMBOL,

  plans: USD_PLANS.map(p => ({
    id: p.id,
    label: LABELS[p.id],
    price: String(p.price),
    badge: p.id === '3m' ? 'Más elegido' : undefined,
    featured: p.id === '3m',
    bonus: p.bonusMonths ? `+${p.bonusMonths} ${p.bonusMonths === 1 ? 'mes gratis' : 'meses gratis'} — ${totalMonths(p)} meses en total` : undefined,
    saving: p.bonusMonths ? `Equivale a ${USD_SYMBOL}${effectiveMonthly(p).replace('.', ',')} por mes` : undefined,
  })) as StellaPlan[],

  planFeatures: [
    `${CHANNELS_LABEL} en vivo`,
    `${SCREENS} pantallas simultáneas`,
    'Cine y series a demanda',
    'Full HD y Ultra HD',
    'Soporte por WhatsApp',
    'Activación el mismo día',
  ],

  // Verificado el 7 nov 2026 en la página oficial del producto para Argentina (misma línea
  // de WhatsApp): Mercado Pago (dinero en cuenta, QR o tarjeta) o transferencia CVU/CBU.
  paymentMethods: ['Mercado Pago', 'Transferencia (CVU/CBU)'],
  paymentNote:
    'Los precios están en dólares estadounidenses. Pagás en pesos con Mercado Pago (dinero en cuenta, QR o tarjeta) o por transferencia CVU/CBU: antes de pagar te confirmamos por WhatsApp el importe final.',
  beforePayingText: 'Los precios están en dólares: te confirmamos el importe final en pesos antes de que pagues con Mercado Pago o transferencia.',

  areaServed: ['Argentina'],
};
