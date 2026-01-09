import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import solidJs from '@astrojs/solid-js'
import cloudflare from '@astrojs/cloudflare'
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
  output: 'server', 
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }), 
})
