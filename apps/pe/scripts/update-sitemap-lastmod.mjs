import { stat, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');

const routes = new Map([
  ['https://oleadatvplus.com/', path.join(root, 'src', 'pages', 'index.astro')],
  ['https://oleadatvplus.com/tv-por-internet-peru', path.join(root, 'src', 'pages', 'tv-por-internet-peru.astro')],
  ['https://oleadatvplus.com/ver-deportes-por-internet', path.join(root, 'src', 'pages', 'ver-deportes-por-internet.astro')],
  ['https://oleadatvplus.com/tv-sin-cortes-peru', path.join(root, 'src', 'pages', 'tv-sin-cortes-peru.astro')],
  ['https://oleadatvplus.com/tv-online-lima', path.join(root, 'src', 'pages', 'tv-online-lima.astro')],
  ['https://oleadatvplus.com/paga-con-yape', path.join(root, 'src', 'pages', 'paga-con-yape.astro')],
]);

const toDate = (mtime) => mtime.toISOString().slice(0, 10);

let sitemap = await readFile(sitemapPath, 'utf8');

for (const [loc, pagePath] of routes) {
  const { mtime } = await stat(pagePath);
  const escapedLoc = loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const urlBlock = new RegExp(`(<url>\\s*<loc>${escapedLoc}<\\/loc>\\s*<lastmod>)([^<]+)(<\\/lastmod>)`, 'm');
  sitemap = sitemap.replace(urlBlock, `$1${toDate(mtime)}$3`);
}

await writeFile(sitemapPath, sitemap, 'utf8');
