import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from "vite-plugin-html";
import config from "./config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createHtmlPlugin({
    inject: {
      data: {
        title: config.SiteHead.Title,
        favicon: config.SiteHead.Favicon,
        keywords: config.SiteHead.KeyWords,
        desc: config.SiteHead.Desc,
        background: config.SiteBackground,
      },
    },
  })],
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
