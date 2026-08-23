// Copy específica por landing (apps/pe). Los datos duros de marca (precios,
// WhatsApp, dispositivos, planes) viven en `stella.config.ts` y son iguales en
// las 6 páginas — aquí solo queda el copy contextual de "Cómo funciona" por página.
//
// Testimonios: un único array `stellaTestimonials`, compartido por las 6 páginas.
// Son los 3 reales verificados en stellatvplus.com — no se inventan variantes
// por landing.

type HowItWorksContent = {
  subtitle?: string;
  steps: { step: string; title: string; desc: string }[];
};

export const seoContent: Record<string, { howItWorks: HowItWorksContent }> = {
  home: {
    howItWorks: {
      subtitle: 'Activación guiada, soporte cercano y entretenimiento listo hoy',
      steps: [
        { step: '01', title: 'Escríbenos', desc: 'Cuéntanos qué dispositivo usas y te recomendamos la forma más rápida de activarlo.' },
        { step: '02', title: 'Confirma tu acceso', desc: 'Te indicamos el plan, el método de pago disponible y validamos tu activación por WhatsApp.' },
        { step: '03', title: 'Recibe soporte', desc: 'Te acompañamos en la instalación, actualización y cualquier consulta para que empieces sin complicarte.' },
      ],
    },
  },
  tvPorInternetPeru: {
    howItWorks: {
      subtitle: 'La página pilar para cambiar el cable por TV por internet en Perú',
      steps: [
        { step: '01', title: 'Evalúa tu internet', desc: 'Con una conexión estable en cualquier ciudad del Perú puedes reemplazar el cable sin visitas técnicas.' },
        { step: '02', title: 'Elige tu plan', desc: 'Decide la duración que más te conviene — 1, 3, 6 o 12 meses — y paga con Yape o Plin.' },
        { step: '03', title: 'Activa en casa', desc: 'Recibes credenciales y guía para ver canales, cine, series y deportes desde tu dispositivo Android.' },
      ],
    },
  },
  tvOnlineLima: {
    howItWorks: {
      subtitle: 'Activación remota para Lima Norte, Lima Sur, Lima Este y Callao',
      steps: [
        { step: '01', title: 'Confirma tu zona', desc: 'Atendemos usuarios en Lima Norte, Lima Sur, Lima Este, Lima Centro y Callao con internet hogar Lima.' },
        { step: '02', title: 'Verifica tu WiFi', desc: 'Te ayudamos a revisar tu conexión de casa para que la TV online funcione bien desde el primer día.' },
        { step: '03', title: 'Instala sin visita', desc: 'La activación se hace por WhatsApp, sin técnico y sin esperar disponibilidad por distrito.' },
      ],
    },
  },
  tvSinCortesPeru: {
    howItWorks: {
      subtitle: 'Primero revisamos estabilidad, WiFi y velocidad recomendada',
      steps: [
        { step: '01', title: 'Revisa tus Mbps', desc: 'Te recomendamos 10 Mbps para HD y 25 Mbps o más para 4K, siempre con WiFi estable.' },
        { step: '02', title: 'Activa con soporte', desc: 'Si vienes de un servicio con cortes, configuramos contigo para reducir fallas desde el inicio.' },
        { step: '03', title: 'Monitorea la señal', desc: 'Si notas cortes, nos escribes por WhatsApp y revisamos conexión, dispositivo y servidor.' },
      ],
    },
  },
  verDeportesPorInternet: {
    howItWorks: {
      subtitle: 'Prepara tu TV Box o Fire Stick antes del partido',
      steps: [
        { step: '01', title: 'Dinos qué quieres ver', desc: 'Consultas por fútbol, partidos y eventos deportivos disponibles antes de activar.' },
        { step: '02', title: 'Instala en tu equipo', desc: 'Te guiamos en TV Box, Fire Stick o Android para que llegues listo al evento deportivo.' },
        { step: '03', title: 'Prueba la señal', desc: 'Revisamos que el partido cargue bien con tu conexión antes de que empiece lo importante.' },
      ],
    },
  },
  pagaConYape: {
    howItWorks: {
      subtitle: 'Pago, comprobante, validación y activación por WhatsApp',
      steps: [
        { step: '01', title: 'Elige método', desc: 'Puedes pagar con Yape o Plin; te damos los datos correctos por WhatsApp.' },
        { step: '02', title: 'Envía comprobante', desc: 'Mandas la captura del pago para validación y asociamos tu renovación o activación.' },
        { step: '03', title: 'Recibe acceso', desc: 'Luego de validar el pago, activamos tu cuenta y te enviamos credenciales en minutos.' },
      ],
    },
  },
};

// Los 3 testimonios reales verificados en stellatvplus.com (20 ago 2026).
// No usar otros — ver auditoría para la fuente exacta de cada cita.
export const stellaTestimonials = [
  {
    initials: 'CH',
    gradient: 'linear-gradient(135deg,#FF4500,#d93a00)',
    name: 'Carlos H.',
    city: 'Lima',
    plan: 'Plan 6 Meses',
    text: 'Tenía contratado cable y la diferencia fue inmediata. Cero cortes en los partidos de la selección, canales nacionales y señales internacionales en HD. Llevo cuatro meses sin ningún problema.',
  },
  {
    initials: 'LR',
    gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
    name: 'Lucía R.',
    city: 'Arequipa',
    plan: 'Plan Anual',
    text: 'El soporte me ayudó a instalarlo en el TV Box de mi abuela en 10 minutos por WhatsApp. Canales de noticias, deportes y series. Pagué con Yape al instante. 100% recomendado.',
  },
  {
    initials: 'MT',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    name: 'Miguel T.',
    city: 'Trujillo',
    plan: 'Plan 3 Meses',
    text: 'Lo uso en el celular en el trabajo y en la TV con un Fire Stick. Funciona perfecto. La calidad en Ultra HD es real, no como otros que dicen HD y pixelan. El precio en soles es muy accesible.',
  },
];

export const internalSeoLinks = {
  home: [
    { href: '/tv-por-internet-peru/', text: 'Conoce la pagina pilar de TV por internet en Peru' },
    { href: '/tv-online-lima/', text: 'Si buscas TV online en Lima, revisa la cobertura por zonas y Callao' },
    { href: '/tv-sin-cortes-peru/', text: 'Si tu prioridad es estabilidad, mira recomendaciones de WiFi y Mbps' },
    { href: '/paga-con-yape/', text: 'Si quieres pagar con Yape o Plin, revisa el proceso de activacion' },
    { href: '/ver-deportes-por-internet/', text: 'Para futbol y eventos deportivos, mira la guia de deportes por internet' },
  ],
  tvPorInternetPeru: [
    { href: '/tv-online-lima/', text: 'Si buscas TV online en Lima, tambien atendemos Lima Norte, Sur, Este y Callao' },
    { href: '/tv-sin-cortes-peru/', text: 'Si tu prioridad es estabilidad, revisa la guia para evitar cortes' },
    { href: '/ver-deportes-por-internet/', text: 'Si quieres ver futbol y partidos, prepara tu TV Box o Fire Stick' },
    { href: '/paga-con-yape/', text: 'Si quieres pagar con Yape, aqui explicamos comprobante y activacion' },
  ],
  tvOnlineLima: [
    { href: '/tv-por-internet-peru/', text: 'Para una vision nacional, revisa TV por internet en Peru' },
    { href: '/tv-sin-cortes-peru/', text: 'Si tu WiFi de Lima falla, mira recomendaciones de Mbps y estabilidad' },
    { href: '/ver-deportes-por-internet/', text: 'Si buscas partidos o eventos deportivos, revisa la guia de deportes' },
    { href: '/paga-con-yape/', text: 'Si quieres pagar con Yape desde Lima, conoce como validar tu pago' },
  ],
  tvSinCortesPeru: [
    { href: '/tv-por-internet-peru/', text: 'Si quieres comparar con la pagina pilar, revisa TV por internet Peru' },
    { href: '/ver-deportes-por-internet/', text: 'Para partidos y eventos deportivos, prepara tu señal antes del evento' },
    { href: '/tv-online-lima/', text: 'Si estas en Lima o Callao, revisa la opcion de TV online local' },
    { href: '/paga-con-yape/', text: 'Si necesitas renovar, valida tu comprobante de Yape o Plin' },
  ],
  verDeportesPorInternet: [
    { href: '/tv-sin-cortes-peru/', text: 'Si quieres ver partidos sin cortes, revisa velocidad recomendada y WiFi' },
    { href: '/paga-con-yape/', text: 'Si necesitas activar antes de un evento, paga con Yape y envia tu comprobante' },
    { href: '/tv-por-internet-peru/', text: 'Para entretenimiento completo, visita TV por internet Peru' },
    { href: '/tv-online-lima/', text: 'Si estas en Lima, tambien puedes activar TV online por zonas y Callao' },
  ],
  pagaConYape: [
    { href: '/tv-por-internet-peru/', text: 'Si aun comparas opciones, revisa TV por internet Peru sin cable' },
    { href: '/tv-online-lima/', text: 'Si estas en Lima, tambien puedes activar TV online en tu distrito' },
    { href: '/ver-deportes-por-internet/', text: 'Si activas para futbol, mira como ver deportes por internet' },
    { href: '/tv-sin-cortes-peru/', text: 'Si renuevas por estabilidad, revisa como reducir cortes con buen WiFi' },
  ],
} as const;
