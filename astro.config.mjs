import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@photo-sphere-viewer/core': path.resolve(__dirname, 'public/js/core.js'),
        '@photo-sphere-viewer/autorotate-plugin': path.resolve(__dirname, 'public/js/autorotate.js'),
        'three': path.resolve(__dirname, 'public/js/three.js'),
      },
    },
  },
});