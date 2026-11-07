// Copy específica por landing (apps/pe). Los datos duros de marca (precios,
// WhatsApp, dispositivos, planes) viven en `stella.config.ts` y son iguales en
// las 6 páginas — aquí solo queda el copy contextual de "Cómo funciona" por página.
//
// Testimonios: retirados el 7 nov 2026. Venían copiados de stellatvplus.com y ya
// no se podían verificar; en su lugar las páginas usan BeforePaying.astro.

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

export const internalSeoLinks = {
  home: [
    { href: '/instalar-stella-tv/', text: 'Cómo instalar Stella TV: código Downloader y APK actualizados' },
    { href: '/tv-por-internet-peru/', text: 'TV por internet en Perú: cómo reemplazar el cable' },
    { href: '/tv-online-lima/', text: 'TV online en Lima y Callao' },
    { href: '/tv-sin-cortes-peru/', text: 'Cómo evitar cortes: WiFi y velocidad recomendada' },
    { href: '/paga-con-yape/', text: 'Pagar con Yape o Plin: comprobante y activación' },
    { href: '/ver-deportes-por-internet/', text: 'Ver deportes por internet en Perú' },
  ],
  tvPorInternetPeru: [
    { href: '/instalar-stella-tv/', text: 'Guía de instalación por dispositivo' },
    { href: '/tv-online-lima/', text: 'TV online en Lima y Callao' },
    { href: '/tv-sin-cortes-peru/', text: 'Cómo evitar cortes: WiFi y velocidad recomendada' },
    { href: '/ver-deportes-por-internet/', text: 'Ver fútbol y deportes en TV Box o Fire TV' },
    { href: '/paga-con-yape/', text: 'Pagar con Yape: comprobante y activación' },
  ],
  tvOnlineLima: [
    { href: '/tv-por-internet-peru/', text: 'TV por internet en todo el Perú' },
    { href: '/instalar-stella-tv/', text: 'Guía de instalación por dispositivo' },
    { href: '/tv-sin-cortes-peru/', text: 'Si tu WiFi falla: velocidad recomendada y estabilidad' },
    { href: '/ver-deportes-por-internet/', text: 'Ver deportes por internet' },
    { href: '/paga-con-yape/', text: 'Pagar con Yape desde Lima' },
  ],
  tvSinCortesPeru: [
    { href: '/tv-por-internet-peru/', text: 'TV por internet en Perú' },
    { href: '/instalar-stella-tv/', text: 'Reinstalar o actualizar Stella TV' },
    { href: '/ver-deportes-por-internet/', text: 'Preparar la señal antes de un partido' },
    { href: '/tv-online-lima/', text: 'TV online en Lima y Callao' },
    { href: '/paga-con-yape/', text: 'Renovar con Yape o Plin' },
  ],
  verDeportesPorInternet: [
    { href: '/tv-sin-cortes-peru/', text: 'Ver partidos sin cortes: velocidad y WiFi' },
    { href: '/instalar-stella-tv/', text: 'Instalar Stella TV en TV Box o Fire TV' },
    { href: '/paga-con-yape/', text: 'Activar antes del partido pagando con Yape' },
    { href: '/tv-por-internet-peru/', text: 'TV por internet en Perú' },
    { href: '/tv-online-lima/', text: 'TV online en Lima y Callao' },
  ],
  pagaConYape: [
    { href: '/tv-por-internet-peru/', text: 'TV por internet en Perú sin cable' },
    { href: '/instalar-stella-tv/', text: 'Cómo instalar Stella TV después de pagar' },
    { href: '/tv-online-lima/', text: 'TV online en Lima' },
    { href: '/ver-deportes-por-internet/', text: 'Ver deportes por internet' },
    { href: '/tv-sin-cortes-peru/', text: 'Cómo reducir cortes con buen WiFi' },
  ],
} as const;
