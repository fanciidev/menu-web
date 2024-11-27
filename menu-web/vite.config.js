/* eslint-disable */
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import react from '@vitejs/plugin-react';
const defaultConfig = {
  plugins: [react(), jsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
};
export default defineConfig(defaultConfig);
