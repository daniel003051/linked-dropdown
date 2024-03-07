import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()],
  server: {
    https: true
  },
  build: {
    target: 'es2021',
    rollupOptions: {
      input: {
        desktop: 'src/main.ts'
      },
      output: {
        format: 'iife',
        entryFileNames: 'app.js'
      }
    }
  }
})
