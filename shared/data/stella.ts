// Datos del producto Stella TV que comercializa Oleada TV.
//
// Fuente única de verdad compartida por apps/pe, apps/ar y apps/ec: precios,
// descargas y códigos. Cambiar un dato acá lo actualiza en los tres sitios.
//
// Separación de identidades (decisión del negocio, nov 2026):
//   - Oleada TV  = quien vende, atiende y da soporte (sitio, organización, WhatsApp).
//   - Stella TV  = el producto que se contrata.
// Los sitios de Oleada NO enlazan comercialmente a stellatvplus.com ni a sus
// subdominios. La única excepción son los APK oficiales (recurso técnico).

export const SELLER_NAME = 'Oleada TV';
export const PRODUCT_NAME = 'Stella TV';

// Precios oficiales en dólares estadounidenses, iguales en PE, AR y EC
// (confirmados por el negocio el 7 nov 2026). No convertir a moneda local acá:
// el importe en soles/pesos se confirma por WhatsApp antes de cada pago.
export interface UsdPlan {
  id: '1m' | '3m' | '6m' | '12m';
  months: number;
  bonusMonths: number;
  price: number;
}

export const USD_PLANS: UsdPlan[] = [
  { id: '1m', months: 1, bonusMonths: 0, price: 9 },
  { id: '3m', months: 3, bonusMonths: 0, price: 27 },
  { id: '6m', months: 6, bonusMonths: 1, price: 49 },
  { id: '12m', months: 12, bonusMonths: 2, price: 95 },
];

export const USD_SYMBOL = 'US$';

// Datos del producto que ya publicaban PE y AR, y que coinciden con lo que
// declara el producto oficial (hasta 3 pantallas en todos los países).
export const SCREENS = 3;
export const CHANNELS_LABEL = '+1,000 canales';

/** Costo mensual efectivo contando los meses gratis (p. ej. 95 / 14 = 6.79). */
export function effectiveMonthly(plan: UsdPlan): string {
  const value = plan.price / (plan.months + plan.bonusMonths);
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

export function totalMonths(plan: UsdPlan): number {
  return plan.months + plan.bonusMonths;
}

// ─── Descargas oficiales ────────────────────────────────────────────────
// Verificado el 7 nov 2026:
//   - bit.ly/stv0906  → StellaTv_26.9.6_80916.apk      (200, application/octet-stream)
//   - bit.ly/4hPAZEM  → Stella_mobile_26.9.2_224.apk   (200, application/octet-stream)
//   - Downloader 1398148 → mismo APK de TV 26.9.6
//   - Downloader 1527904 → mismo APK móvil 26.9.2
//   - Downloader 8821026 → Stella_tv_26.7.0.apk (versión anterior; NO publicar como vigente)
// Si cambia una versión o un enlace, actualizar SOLO este bloque y la fecha.
export const DOWNLOADS = {
  updated: '2026-11-07',
  updatedLabel: 'noviembre de 2026',
  tv: {
    version: '26.9.6',
    apkUrl: 'https://bit.ly/stv0906',
    downloaderCode: '1398148',
  },
  mobile: {
    version: '26.9.2',
    apkUrl: 'https://bit.ly/4hPAZEM',
    downloaderCode: '1527904',
  },
  // Códigos que la gente todavía busca en Google ("8821026" tiene impresiones
  // en Search Console). Se mencionan solo para aclarar que están reemplazados.
  legacyCodes: ['8821026'],
} as const;
