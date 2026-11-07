// Navegación compartida por las páginas de oleadatvplus.com (Perú).
import { siblingSites } from '@shared/data/sites';

export const PE_INSTALL_PATH = '/instalar-stella-tv/';

export const PE_HOME_NAV = [
  { href: '#planes', label: 'Planes' },
  { href: '#dispositivos', label: 'Dispositivos' },
  { href: '#descargas', label: 'Descargas' },
  { href: PE_INSTALL_PATH, label: 'Instalar' },
  { href: '#faq', label: 'Preguntas' },
];

export const PE_SUBPAGE_NAV = [
  { href: '#planes', label: 'Planes' },
  { href: '#descargas', label: 'Descargas' },
  { href: PE_INSTALL_PATH, label: 'Instalar' },
  { href: '#faq', label: 'Preguntas' },
  { href: '/', label: 'Inicio' },
];

export const PE_FOOTER_PAGES = [
  { href: '/', label: 'Inicio' },
  { href: PE_INSTALL_PATH, label: 'Cómo instalar Stella TV' },
  { href: '/tv-por-internet-peru/', label: 'TV por internet en Perú' },
  { href: '/paga-con-yape/', label: 'Pagar con Yape o Plin' },
];

export const PE_SITE_LINKS = siblingSites('pe').map(s => ({ href: s.home, label: s.country }));
