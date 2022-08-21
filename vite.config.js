import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/bili': {
        target: 'https://api.bilibili.com',
        headers:{
          "referer":"https://space.bilibili.com/"
        },
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bili/, '')
      },
    }
  }
})
