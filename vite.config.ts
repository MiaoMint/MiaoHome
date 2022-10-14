import { fileURLToPath, URL } from 'node:url'
import { createHtmlPlugin } from "vite-plugin-html";
import { defineConfig } from 'vite'
import config from "./config";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createHtmlPlugin({
    inject: {
      data: {
        title: config.SiteHead.Title,
        favicon: config.SiteHead.Favicon,
        keywords: config.SiteHead.KeyWords,
        desc: config.SiteHead.Desc,
        background: config.Style.SiteBackground,
        opacity: config.Style.SiteOpacity,
        blur: config.Style.SiteBackgroundBlur,
      },
    },
  })],
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
