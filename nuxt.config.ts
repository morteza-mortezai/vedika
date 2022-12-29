// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt', '@nuxtjs/tailwindcss'
    // , '@nuxt-hero-icons/outline/nuxt'
    // , '@nuxt-hero-icons/solid/nuxt'
  ],
  runtimeConfig: {
    public: {
      captchaKey: 'a',
      apiUrl: 'z'
    }
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.ts'),
          path.resolve(__dirname, './components/*.*'),
          path.resolve(__dirname, './pages/*.*'),
        ]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss" ;',
        },
      },
    },
  },
  css: [
    '~/assets/styles/main.scss'
  ],

})
