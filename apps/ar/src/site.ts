// Piezas de navegación y copy compartidas por las páginas de ar.oleadatvplus.com.
import { siblingSites } from '@shared/data/sites';

// Dispositivos en voseo (el componente compartido Devices usa "tú" por defecto).
// Los íconos los resuelve Devices por posición.
export const AR_DEVICES = [
  { title: 'Android móvil', desc: 'APK directo: lo instalás en minutos en cualquier celular Android.' },
  { title: 'Tablet Android', desc: 'La misma app, en pantalla más grande.' },
  { title: 'TV Box', desc: 'Con Downloader y el código de TV convertís cualquier televisor con HDMI.' },
  { title: 'Google TV / Android TV', desc: 'Incluye Chromecast con Google TV y Smart TV con Google TV (Sony, TCL, Hisense, entre otros).' },
  { title: 'Fire TV / Fire Stick', desc: 'Instalás Downloader desde la Appstore de Amazon y usás el código de TV.' },
  { title: 'Xiaomi TV Stick', desc: 'Mismo método que en TV Box: Downloader y el código de TV.' },
];

export const AR_DEVICES_NOTE =
  'Los Smart TV Samsung (Tizen) y LG (webOS) no permiten instalación nativa, y no hay versión para iPhone. Para esos televisores necesitás un Fire TV, un TV Box o un dispositivo con Google TV conectado por HDMI — te asesoramos por WhatsApp.';

export const AR_FOOTER_PAGES = [
  { href: '/instalar-stella-tv', label: 'Cómo instalar Stella TV' },
  { href: '/precio-stella-tv', label: 'Precios en Argentina' },
];

export const AR_SITE_LINKS = siblingSites('ar').map(s => ({ href: s.home, label: `${s.country}` }));
