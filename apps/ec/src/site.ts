// Navegación compartida por las páginas de ec.oleadatvplus.com.
import { siblingSites } from '@shared/data/sites';

export const EC_INSTALL_PATH = '/instalar-stella-tv';

export const EC_FOOTER_PAGES = [
  { href: '/', label: 'Inicio' },
  { href: EC_INSTALL_PATH, label: 'Cómo instalar Stella TV' },
  { href: '/tv-por-internet-ecuador', label: 'TV por internet en Ecuador' },
  { href: '/tv-sin-cortes-ecuador', label: 'Ver sin cortes' },
];

export const EC_SITE_LINKS = siblingSites('ec').map(s => ({ href: s.home, label: s.country }));
