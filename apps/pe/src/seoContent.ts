type ComponentContent = {
  howItWorks: {
    title?: string;
    subtitle?: string;
    steps: { step: string; title: string; desc: string }[];
  };
  plans: {
    title?: string;
    subtitle?: string;
    features: string[];
    monthlyDeviceText?: string;
    annualExtraFeatures?: string[];
    note?: string;
  };
  testimonials: {
    title?: string;
    subtitle?: string;
    testimonials: {
      initials: string;
      gradient: string;
      name: string;
      city: string;
      plan: string;
      text: string;
    }[];
  };
  devices: {
    title?: string;
    subtitle?: string;
    devices: { title: string; desc: string }[];
    note?: string;
  };
};

export const seoContent: Record<string, ComponentContent> = {
  home: {
    howItWorks: {
      subtitle: 'Activacion guiada, soporte cercano y entretenimiento listo hoy',
      steps: [
        { step: '01', title: 'Escribenos', desc: 'Cuéntanos que dispositivo usas y nuestro equipo de Oleada TV te recomienda la forma mas rapida de activarlo.' },
        { step: '02', title: 'Confirma tu acceso', desc: 'Te indicamos el plan, el metodo de pago disponible y validamos tu activacion por WhatsApp.' },
        { step: '03', title: 'Recibe soporte', desc: 'Te acompañamos en la instalacion, actualizacion y cualquier consulta para que empieces sin complicarte.' },
      ],
    },
    plans: {
      subtitle: 'Planes simples para activar Oleada TV sin contrato',
      features: ['Entretenimiento familiar en HD y 4K', 'Cine, series y canales para el hogar', 'Activacion asistida por WhatsApp', 'Compatible con Android TV, TV Box y Fire Stick', 'Pago flexible con Yape o Plin', 'Soporte para instalacion y actualizaciones'],
      note: 'Oleada TV activa una cuenta por dispositivo simultaneo y soporte directo cuando lo necesites.',
    },
    testimonials: {
      subtitle: 'Usuarios que activaron Oleada TV con soporte por WhatsApp',
      testimonials: [
        { initials: 'AM', gradient: 'linear-gradient(135deg,#FF4500,#d93a00)', name: 'Andrea Molina', city: 'Lima', plan: 'Plan Mensual', text: 'Me ayudaron a instalar Oleada TV en mi TV Box y en pocos minutos ya estaba viendo contenido. Lo mejor fue que el soporte respondió al toque.' },
        { initials: 'CR', gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)', name: 'Carlos Rojas', city: 'Arequipa', plan: 'Plan Anual', text: 'Buscaba algo practico para la casa. Active, pague con Yape y el equipo me explico todo por WhatsApp sin vueltas.' },
        { initials: 'VG', gradient: 'linear-gradient(135deg,#10b981,#059669)', name: 'Valeria Gomez', city: 'Trujillo', plan: 'Plan Mensual', text: 'Me quedo con Oleada TV por el soporte. Cuando cambie de dispositivo me guiaron otra vez y no perdi tiempo.' },
      ],
    },
    devices: {
      subtitle: 'Oleada TV se adapta al equipo que ya usas',
      devices: [
        { title: 'Android TV / TV Box', desc: 'Ideal para instalar Oleada TV en la sala con asistencia por WhatsApp.' },
        { title: 'Celulares Android', desc: 'Activa tu acceso y consulta soporte desde el mismo celular.' },
        { title: 'Tablets Android', desc: 'Una opcion comoda para entretenimiento familiar en casa o de viaje.' },
        { title: 'Amazon Fire Stick', desc: 'Te guiamos con Downloader para dejar Oleada TV lista en minutos.' },
      ],
      note: 'Si tu Smart TV no permite instalar apps Android, te orientamos con TV Box o Fire Stick.',
    },
  },
  tvPorInternetPeru: {
    howItWorks: {
      subtitle: 'La pagina pilar para cambiar el cable por TV por internet en Peru',
      steps: [
        { step: '01', title: 'Evalua tu internet', desc: 'Con una conexion estable en cualquier ciudad del Peru puedes reemplazar el cable sin visitas tecnicas.' },
        { step: '02', title: 'Elige mensual o anual', desc: 'Decide si quieres probar mes a mes o ahorrar con el plan anual; pagas con Yape o Plin.' },
        { step: '03', title: 'Activa en casa', desc: 'Recibes credenciales y guia para ver canales, cine, series y deportes desde tu dispositivo Android.' },
      ],
    },
    plans: {
      subtitle: 'Planes nacionales para hogares que quieren dejar el cable',
      features: ['TV por internet disponible en todo el Peru', 'Canales, cine, series y deportes en una cuenta', 'Sin instalacion fisica ni visita tecnica', 'Compatible con Android TV, TV Box, celular y tablet', 'Pago nacional con Yape o Plin', 'Soporte por WhatsApp para usuarios nuevos'],
      annualExtraFeatures: ['Ahorro anual frente al pago mensual', 'Renovacion simple sin contratos'],
      note: 'Servicio pensado como alternativa nacional al cable, con 1 dispositivo activo por cuenta.',
    },
    testimonials: {
      subtitle: 'Familias de Peru que cambiaron el cable por Oleada TV',
      testimonials: [
        { initials: 'JP', gradient: 'linear-gradient(135deg,#FF4500,#d93a00)', name: 'Jorge Paredes', city: 'Lima', plan: 'Plan Anual', text: 'Deje el cable porque pagaba demasiado. Con Oleada TV active desde mi TV Box y tengo lo que usamos en casa sin contrato.' },
        { initials: 'MS', gradient: 'linear-gradient(135deg,#7B2FBE,#5B21B6)', name: 'Maribel Salas', city: 'Cusco', plan: 'Plan Mensual', text: 'Me preocupaba si funcionaria fuera de Lima, pero con mi internet de casa va bien. El soporte me guio paso a paso.' },
        { initials: 'ER', gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)', name: 'Eduardo Rivas', city: 'Piura', plan: 'Plan Anual', text: 'Lo contratamos como reemplazo del cable. Pagamos con Plin, mandamos comprobante y en minutos quedo activo.' },
      ],
    },
    devices: {
      subtitle: 'Dispositivos para ver TV por internet en Peru',
      devices: [
        { title: 'Android TV / TV Box', desc: 'La opcion mas usada para convertir cualquier televisor en TV por internet.' },
        { title: 'Celulares Android', desc: 'Util para activar, probar y ver contenido cuando no estas frente al televisor.' },
        { title: 'Tablets Android', desc: 'Practico para familias que quieren entretenimiento en distintos ambientes.' },
        { title: 'Amazon Fire Stick', desc: 'Funciona con guia de instalacion por Downloader y soporte de Oleada TV.' },
      ],
      note: 'Si no sabes que dispositivo comprar para TV por internet, te asesoramos antes de activar.',
    },
  },
  tvOnlineLima: {
    howItWorks: {
      subtitle: 'Activacion remota para Lima Norte, Lima Sur, Lima Este y Callao',
      steps: [
        { step: '01', title: 'Confirma tu zona', desc: 'Atendemos usuarios en Lima Norte, Lima Sur, Lima Este, Lima Centro y Callao con internet hogar Lima.' },
        { step: '02', title: 'Verifica tu WiFi', desc: 'Te ayudamos a revisar tu conexion de casa para que la TV online funcione bien desde el primer dia.' },
        { step: '03', title: 'Instala sin visita', desc: 'La activacion se hace por WhatsApp, sin tecnico y sin esperar disponibilidad por distrito.' },
      ],
    },
    plans: {
      subtitle: 'Planes para hogares con internet en Lima y Callao',
      features: ['Activacion para Lima Norte, Sur, Este y Callao', 'Compatible con internet hogar Lima', 'Sin visitas tecnicas por distrito', 'Pago con Yape o Plin desde tu celular', 'Soporte por WhatsApp en horario extendido', 'Ideal para TV Box, Fire Stick y Android TV'],
      annualExtraFeatures: ['Ahorro si lo usas todo el año en casa', 'Renovacion por WhatsApp desde Lima o Callao'],
      note: 'Funciona con internet fijo o WiFi estable de casa; cada cuenta usa 1 dispositivo activo.',
    },
    testimonials: {
      subtitle: 'Usuarios de Lima que activaron TV online sin visita tecnica',
      testimonials: [
        { initials: 'LN', gradient: 'linear-gradient(135deg,#FF4500,#d93a00)', name: 'Luis Navarro', city: 'Lima Norte', plan: 'Plan Mensual', text: 'Lo active desde Los Olivos con mi internet de casa. No vino tecnico, todo fue por WhatsApp y quedo listo rapido.' },
        { initials: 'PR', gradient: 'linear-gradient(135deg,#10b981,#059669)', name: 'Patricia Ramos', city: 'Lima Sur', plan: 'Plan Anual', text: 'En Villa El Salvador lo usamos con WiFi del hogar. Me orientaron con el TV Box y desde ahi funciona normal.' },
        { initials: 'GA', gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)', name: 'Gustavo Arias', city: 'Callao', plan: 'Plan Mensual', text: 'Pague con Yape, mande captura y me activaron en minutos. Vivo en Callao y no tuve ningun problema por la zona.' },
      ],
    },
    devices: {
      subtitle: 'Opciones comunes para hogares de Lima',
      devices: [
        { title: 'Android TV / TV Box', desc: 'Recomendado para salas en Lima Norte, Lima Sur, Lima Este y Callao.' },
        { title: 'Celulares Android', desc: 'Sirve para ver TV online cuando usas datos o WiFi de casa.' },
        { title: 'Tablets Android', desc: 'Practico para dormitorios, cocina o espacios pequeños en departamentos.' },
        { title: 'Amazon Fire Stick', desc: 'Buena opcion si ya tienes televisor con HDMI y quieres evitar cable tradicional.' },
      ],
      note: 'Si tu internet hogar Lima es inestable, te ayudamos a revisar velocidad antes de instalar.',
    },
  },
  tvSinCortesPeru: {
    howItWorks: {
      subtitle: 'Primero revisamos estabilidad, WiFi y velocidad recomendada',
      steps: [
        { step: '01', title: 'Revisa tus Mbps', desc: 'Te recomendamos 10 Mbps para HD y 25 Mbps o mas para 4K, siempre con WiFi estable.' },
        { step: '02', title: 'Activa con soporte', desc: 'Si vienes de un servicio con cortes, configuramos contigo para reducir fallas desde el inicio.' },
        { step: '03', title: 'Monitorea la señal', desc: 'Si notas cortes, nos escribes por WhatsApp y revisamos conexion, dispositivo y servidor.' },
      ],
    },
    plans: {
      subtitle: 'Planes enfocados en estabilidad y soporte rapido',
      features: ['Señal estable para conexiones desde 10 Mbps', 'Soporte ante cortes por WiFi o proveedor de internet', 'Recomendaciones para mejorar velocidad en casa', 'Compatible con TV Box, Fire Stick y Android TV', 'Activacion sin reinstalar todo desde cero', 'Atencion por WhatsApp si algo falla'],
      annualExtraFeatures: ['Seguimiento de soporte durante tus renovaciones', 'Ahorro anual con servicio estable'],
      note: 'La estabilidad depende tambien de tu internet, WiFi y Mbps disponibles en el dispositivo.',
    },
    testimonials: {
      subtitle: 'Clientes que buscaban menos cortes y mejor soporte',
      testimonials: [
        { initials: 'RM', gradient: 'linear-gradient(135deg,#FF4500,#d93a00)', name: 'Ruben Medina', city: 'Lima', plan: 'Plan Mensual', text: 'Mi servicio anterior se cortaba en partidos. Me pidieron revisar Mbps y WiFi, configuraron el TV Box y mejoro bastante.' },
        { initials: 'LA', gradient: 'linear-gradient(135deg,#7B2FBE,#5B21B6)', name: 'Lucia Alvarez', city: 'Chiclayo', plan: 'Plan Anual', text: 'Valoro que respondan cuando algo falla. Una vez tuve cortes por mi internet y me ayudaron a identificar el problema.' },
        { initials: 'FO', gradient: 'linear-gradient(135deg,#10b981,#059669)', name: 'Felipe Ortiz', city: 'Arequipa', plan: 'Plan Mensual', text: 'Con 30 Mbps y buena señal WiFi me funciona estable. El soporte fue claro con la velocidad recomendada.' },
      ],
    },
    devices: {
      subtitle: 'Dispositivos y conexion para reducir cortes',
      devices: [
        { title: 'Android TV / TV Box', desc: 'Ubicalo cerca del router o usa buena señal WiFi para mayor estabilidad.' },
        { title: 'Celulares Android', desc: 'Permiten probar la señal con WiFi y datos para comparar posibles cortes.' },
        { title: 'Tablets Android', desc: 'Funcionan mejor con WiFi estable y velocidad suficiente para HD.' },
        { title: 'Amazon Fire Stick', desc: 'Ideal con buen WiFi; te orientamos si necesitas mejorar ubicacion o red.' },
      ],
      note: 'Para evitar cortes, revisa que el dispositivo reciba buena señal WiFi y Mbps suficientes.',
    },
  },
  verDeportesPorInternet: {
    howItWorks: {
      subtitle: 'Prepara tu TV Box o Fire Stick antes del partido',
      steps: [
        { step: '01', title: 'Dinos que quieres ver', desc: 'Consultas por futbol, partidos y eventos deportivos disponibles antes de activar.' },
        { step: '02', title: 'Instala en tu equipo', desc: 'Te guiamos en TV Box, Fire Stick o Android para que llegues listo al evento deportivo.' },
        { step: '03', title: 'Prueba la señal', desc: 'Revisamos que el partido cargue bien con tu conexion antes de que empiece lo importante.' },
      ],
    },
    plans: {
      subtitle: 'Planes para seguir futbol, partidos y eventos deportivos',
      features: ['Futbol y eventos deportivos en vivo', 'Instalacion guiada en TV Box y Fire Stick', 'Soporte antes de partidos importantes', 'Calidad HD y 4K segun tu conexion', 'Pago rapido con Yape o Plin', 'Sin contrato con el cable tradicional'],
      annualExtraFeatures: ['Ahorro para toda la temporada deportiva', 'Renovacion simple antes de nuevos torneos'],
      note: 'Para partidos en HD recomendamos internet estable y activar con anticipacion al evento.',
    },
    testimonials: {
      subtitle: 'Usuarios que activaron Oleada TV para ver deportes',
      testimonials: [
        { initials: 'DA', gradient: 'linear-gradient(135deg,#FF4500,#d93a00)', name: 'Diego Arce', city: 'Lima', plan: 'Plan Mensual', text: 'Lo active para ver futbol en mi Fire Stick. Me guiaron antes del partido y no tuve que contratar cable.' },
        { initials: 'SN', gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)', name: 'Sergio Nuñez', city: 'Trujillo', plan: 'Plan Anual', text: 'Veo partidos y otros eventos deportivos desde el TV Box. Cuando tengo dudas pregunto por WhatsApp y responden rapido.' },
        { initials: 'HT', gradient: 'linear-gradient(135deg,#10b981,#059669)', name: 'Hugo Torres', city: 'Piura', plan: 'Plan Mensual', text: 'Me interesaba principalmente el futbol. Active con Yape y lo deje instalado antes del evento del fin de semana.' },
      ],
    },
    devices: {
      subtitle: 'Equipos recomendados para deportes en vivo',
      devices: [
        { title: 'Android TV / TV Box', desc: 'Comodo para ver partidos en pantalla grande con conexion estable.' },
        { title: 'Celulares Android', desc: 'Util para seguir eventos deportivos si estas fuera de casa.' },
        { title: 'Tablets Android', desc: 'Buena alternativa para ver futbol o partidos en otra habitacion.' },
        { title: 'Amazon Fire Stick', desc: 'Muy usado para deportes por su instalacion rapida con Downloader.' },
      ],
      note: 'Activa antes del partido para probar señal, usuario y dispositivo con tiempo.',
    },
  },
  pagaConYape: {
    howItWorks: {
      subtitle: 'Pago, comprobante, validacion y activacion por WhatsApp',
      steps: [
        { step: '01', title: 'Elige metodo', desc: 'Puedes pagar con Yape, Plin o transferencia; te damos los datos correctos por WhatsApp.' },
        { step: '02', title: 'Envia comprobante', desc: 'Mandas la captura del pago para validacion y asociamos tu renovacion o activacion.' },
        { step: '03', title: 'Recibe acceso', desc: 'Luego de validar el pago, activamos tu cuenta y te enviamos credenciales en minutos.' },
      ],
    },
    plans: {
      subtitle: 'Planes faciles de renovar con Yape o Plin',
      features: ['Pago con Yape, Plin o transferencia', 'Validacion de pago por comprobante', 'Activacion rapida para clientes nuevos', 'Renovacion mensual sin cargos automaticos', 'Confirmacion por WhatsApp antes de activar', 'Sin tarjeta ni formularios extensos'],
      annualExtraFeatures: ['Una renovacion anual con menos recordatorios', 'Comprobante validado por WhatsApp'],
      note: 'Guarda tu comprobante para validar pago, renovacion o activacion de forma mas rapida.',
    },
    testimonials: {
      subtitle: 'Clientes que activaron o renovaron enviando comprobante',
      testimonials: [
        { initials: 'KV', gradient: 'linear-gradient(135deg,#FF4500,#d93a00)', name: 'Karla Vargas', city: 'Lima', plan: 'Plan Mensual', text: 'Yapee, envie el comprobante y validaron el pago rapido. La activacion llego por el mismo WhatsApp.' },
        { initials: 'MB', gradient: 'linear-gradient(135deg,#7B2FBE,#5B21B6)', name: 'Miguel Bravo', city: 'Arequipa', plan: 'Plan Anual', text: 'Use Plin para renovar. Me confirmaron cuando validaron el pago y no tuve que poner tarjeta.' },
        { initials: 'NC', gradient: 'linear-gradient(135deg,#10b981,#059669)', name: 'Natalia Campos', city: 'Cusco', plan: 'Plan Mensual', text: 'Me gusta que la renovacion sea manual. Pago cuando corresponde, envio captura y me confirman todo.' },
      ],
    },
    devices: {
      subtitle: 'Paga primero y activa en el dispositivo que prefieras',
      devices: [
        { title: 'Android TV / TV Box', desc: 'Tras validar tu comprobante, instalamos el acceso en tu equipo principal.' },
        { title: 'Celulares Android', desc: 'Puedes enviar comprobante, recibir credenciales y usar la app desde el celular.' },
        { title: 'Tablets Android', desc: 'Despues de la validacion de pago tambien puedes activar en tablet Android.' },
        { title: 'Amazon Fire Stick', desc: 'Validado el Yape o Plin, te guiamos con Downloader para la activacion.' },
      ],
      note: 'La activacion empieza despues de validar el pago y confirmar el dispositivo elegido.',
    },
  },
};

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
