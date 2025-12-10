import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import environmentPlugin from 'vite-plugin-environment';
import checkerPlugin from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    environmentPlugin('all', { prefix: 'REACT_APP_' }),
    checkerPlugin({
      typescript: true,
    }),
    tsconfigPaths(),
    svgrPlugin({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
    nodePolyfills(),
    tailwindcss(),
  ],
  server: {
    port: 3008,
    open: true,
    hmr: {
      overlay: true,
    },
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
