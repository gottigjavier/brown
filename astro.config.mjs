import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  vite: {
    // Dev server: NO pre-bundlear los specifiers PSV — no están en node_modules por diseño
    // (se resuelven en runtime vía importmap vendored, igual que en prod). Sin esto Vite
    // loguea "[ERROR] [vite] could not be resolved" en cada arranque del dev server.
    optimizeDeps: {
      exclude: [
        '@photo-sphere-viewer/core',
        '@photo-sphere-viewer/autorotate-plugin',
        'three',
      ],
    },
    build: {
      rollupOptions: {
        // PSV 5.8.2 vendored se resuelve en RUNTIME vía el importmap del Layout
        // (LAY-001/LAY-003, AC-LAY-003 — spec single-page-carrusel).
        // external = Vite/Rollup deja los bare specifiers intactos en el chunk;
        // el browser los resuelve con el importmap (lazy: /js/* solo se descarga
        // cuando se ejecuta el módulo del carrusel). Sin esto, el alias bundleaba
        // three+core+autorotate (~1.7MB) eager y el importmap quedaba inerte.
        external: [
          '@photo-sphere-viewer/core',
          '@photo-sphere-viewer/autorotate-plugin',
          'three',
        ],
      },
    },
  },
});
