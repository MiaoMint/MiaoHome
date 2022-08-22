import { fileURLToPath, URL } from 'node:url'
import { createHtmlPlugin } from "vite-plugin-html";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import config from './config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          title: config.SiteHead.Title,
          favicon: config.SiteHead.Favicon,
          keywords: config.SiteHead.KeyWords,
          desc: config.SiteHead.Desc
        },
      },
    }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/bili': {
        target: 'https://api.bilibili.com',
        headers: {
          "referer": "https://space.bilibili.com/"
        },
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bili/, '')
      },
    }
  }
})
