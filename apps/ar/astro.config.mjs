import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  site: 'https://ar.oleadatvplus.com',
  trailingSlash: 'never',
  // Salida /pagina.html (no /pagina/index.html): Netlify sirve /pagina sin
  // redirigir a /pagina/, que es la URL canónica (sin barra final).
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
