import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({}),
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
    ]),
  ],
  optimizeDeps: {
    include: ['@hipec/ui'], // Ensure Vite pre-bundles this dependency
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
  resolve: {
    alias: {
      '@hipec/ui': path.resolve(__dirname, '../../packages/ui/src'),
      "~": path.resolve(__dirname, "./src"),
    }
  },
})
