import { defineConfig } from 'vite'

export default defineConfig({
  // Relative asset paths so the build works from any subpath (e.g. GitHub Pages project sites).
  base: './',

  // html-to-image is loaded at runtime via a CDN URL, not a package import,
  // so it's already its own lazily-fetched chunk with no bundler config needed.
  esbuild: {
    drop: ['console', 'debugger'],
  },

  build: {
    // Split CSS into separate files per page
    cssCodeSplit: true,

    // Target modern browsers for smaller bundles
    target: 'es2020',
  },

  server: {
    hmr: true,  // Hot module replacement for fast dev
    port: 3000,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [],
  },
})
