import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  site: 'https://ec.oleadatvplus.com',
  trailingSlash: 'never',
  // Salida /pagina.html: Cloudflare Pages la sirve en /pagina (200) y redirige
  // /pagina/ hacia ahí. Con /pagina/index.html, la URL canónica sin barra daba 308.
  build: { format: 'file' },
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../../shared'),
      },
    },
    server: {
      allowedHosts: ['unexaminable-andrea-overabusively.ngrok-free.dev'],
    },
  },
});
