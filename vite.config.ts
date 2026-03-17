/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: '/star-wars-search/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true, // показывать ошибки в браузере
    },
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    includeSource: ['src/**/*.{ts,tsx}'],
    name: { label: 'unit', color: 'blue' },
    deps: {
      optimizer: {
        client: {
          enabled: true,
        },
      },
      web: {
        transformAssets: false,
        transformCss: false,
      },
    },
    root: 'src',
    dir: 'src',

    // silent: 'passed-only',

    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/**/*.spec.{js,jsx,ts,tsx}',
        'src/index.{js,jsx,ts,tsx}',
        'src/setupTests.{js,ts}',
        'src/**/*.d.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
  },
});
