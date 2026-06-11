/// <reference types="vitest/config" />
import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  // Set to "/design-system/" by the GitHub Pages deploy workflow so assets
  // resolve under the project-pages subpath. Defaults to "/" for local dev
  // and Storybook (which build without this env var).
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  server: {
    // The project lives under an iCloud-synced Desktop folder where native
    // filesystem events are unreliable, so HMR can miss edits. Polling makes
    // the watcher detect changes consistently.
    watch: { usePolling: true, interval: 150 },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});