import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  site: 'https://ec.oleadatvplus.com',
  trailingSlash: 'never',
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
