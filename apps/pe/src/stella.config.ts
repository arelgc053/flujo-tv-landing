// Datos de oleadatvplus.com — Oleada TV comercializa Stella TV en Perú.
//
// Precios: en dólares estadounidenses, iguales en PE/AR/EC (shared/data/stella.ts,
// confirmados por el negocio el 7 nov 2026). Reemplazan a los precios en soles
// (S/ 34.99 / 99.99 / 165.99 / 312.99) que se publicaban desde ago 2026.
// El pago sigue siendo con Yape o Plin y el monto final en soles se confirma
// por WhatsApp ANTES de pagar: no se publica un tipo de cambio.

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

export const STELLA = {
  brand: 'Stella TV',
  whatsapp: '51940405911',
  currency: USD_SYMBOL,

  plans: USD_PLANS.map(p => ({
    id: p.id,
    label: LABELS[p.id],
    price: String(p.price),
    badge: p.id === '3m' ? 'Más vendido' : undefined,
    featured: p.id === '3m',
    bonus: p.bonusMonths ? `+${p.bonusMonths} ${p.bonusMonths === 1 ? 'mes gratis' : 'meses gratis'} — ${totalMonths(p)} meses en total` : undefined,
    saving: p.bonusMonths ? `Equivale a ${USD_SYMBOL}${effectiveMonthly(p)} por mes` : undefined,
  })) as StellaPlan[],

  planFeatures: [
    `${CHANNELS_LABEL}`,
    `${SCREENS} pantallas`,
    'Cine y series a demanda',
    'Calidad Full HD',
    'Soporte por WhatsApp',
    'Activación el mismo día',
  ],

  paymentMethods: ['Yape', 'Plin'],
  paymentNote:
    'Los precios están en dólares estadounidenses. Pagas con Yape o Plin: antes de pagar te confirmamos por WhatsApp el monto final en soles.',

  beforePayingText: 'Los precios están en dólares: te confirmamos el monto final en soles antes de que pagues con Yape o Plin.',

  areaServed: ['Perú'],
};

