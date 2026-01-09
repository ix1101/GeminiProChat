import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import solidJs from '@astrojs/solid-js'
import cloudflare from '@astrojs/cloudflare' // 引入 Cloudflare 适配器
import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
  integrations: [
    unocss(),
    solidJs(),
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      manifest: {
        name: 'Gemini Pro Chat',
        short_name: 'Gemini Pro',
        description: 'Minimal web UI for Gemini Pro.',
        theme_color: '#212129',
        background_color: '#ffffff',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  output: 'server', // 必须改为 server 模式，登录和 API 才会生效
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }), // 明确指定使用 Cloudflare 适配器
})
