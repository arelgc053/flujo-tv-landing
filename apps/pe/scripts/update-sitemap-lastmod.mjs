// Actualiza <lastmod> del sitemap de PE antes de cada build.
//
// Antes usaba el mtime del archivo, pero en un clon nuevo (CI) todos los
// archivos tienen la fecha del checkout: cada despliegue declaraba "todo
// cambió hoy", lo que le quita valor a lastmod para Google. Ahora usa la fecha
// del último commit que tocó la página, su configuración o los componentes
// compartidos. Si git no está disponible (o el clon es superficial y no hay
// historia), deja la fecha que ya tenía el sitemap.
import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const page = name => path.join(root, 'src', 'pages', name);
const common = [path.join(root, 'src', 'stella.config.ts'), path.join(root, '..', '..', 'shared')];

const routes = new Map([
  ['https://oleadatvplus.com/', page('index.astro')],
  ['https://oleadatvplus.com/instalar-stella-tv/', page('instalar-stella-tv.astro')],
  ['https://oleadatvplus.com/tv-por-internet-peru/', page('tv-por-internet-peru.astro')],
  ['https://oleadatvplus.com/ver-deportes-por-internet/', page('ver-deportes-por-internet.astro')],
  ['https://oleadatvplus.com/tv-sin-cortes-peru/', page('tv-sin-cortes-peru.astro')],
  ['https://oleadatvplus.com/tv-online-lima/', page('tv-online-lima.astro')],
  ['https://oleadatvplus.com/paga-con-yape/', page('paga-con-yape.astro')],
]);

function lastCommitDate(files) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], { cwd: root, encoding: 'utf8' }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

let sitemap = await readFile(sitemapPath, 'utf8');

for (const [loc, pagePath] of routes) {
  const date = lastCommitDate([pagePath, ...common]);
  if (!date) continue;
  const escapedLoc = loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const urlBlock = new RegExp(`(<url>\\s*<loc>${escapedLoc}<\\/loc>\\s*<lastmod>)([^<]+)(<\\/lastmod>)`, 'm');
  // Nunca retroceder: si el sitemap ya tiene una fecha más reciente (p. ej.
  // cambios aún sin commit), se conserva.
  sitemap = sitemap.replace(urlBlock, (match, open, current, close) => (date > current.trim() ? `${open}${date}${close}` : match));
}

await writeFile(sitemapPath, sitemap, 'utf8');
