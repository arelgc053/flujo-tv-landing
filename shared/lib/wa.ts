// Enlaces de WhatsApp con etiqueta de origen.
//
// Oleada y el sitio principal de Stella atienden en el MISMO número de
// WhatsApp, así que sin etiqueta no hay forma de saber qué conversación (y qué
// venta) vino de Oleada. La etiqueta va al final del mensaje prellenado, p. ej.:
//   "Hola, quiero el plan 3 meses de Stella TV (US$27). [OLEADA-AR-HOME]"
//
// Formato: [OLEADA-<PAÍS>-<PÁGINA>]. El detalle del botón (hero, planes,
// flotante…) no va en el mensaje sino en el evento de analítica
// (data-track-location), para que el texto que ve el cliente siga siendo corto.

export function waTag(country: 'PE' | 'AR' | 'EC', page: string): string {
  return `[OLEADA-${country}-${page.toUpperCase()}]`;
}

export function waHref(phone: string, text: string, tag?: string): string {
  const message = tag ? `${text} ${tag}` : text;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
