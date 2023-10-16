// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  modules: [
    // ...
    '@pinia/nuxt',
    // '@vite-pwa/nuxt',
  ],
  // runtimeConfig: {
  //   app: {
  //     BACKEND_URL: process.env.BACKEND_URL,
  //   }
  // },
  // pwa: {
  //   manifest: {
  //     name: 'Touri',
  //     short_name: 'Touri',
  //     theme_color: '#28b0a6',
  //     background_color: '#ffffff',
  //     display: 'fullscreen',
  //     orientation: 'portrait',
  //     scope: '/',
  //     start_url: '/',
  //     icons: [
  //       {
  //         src: '/logo.png',
  //         sizes: '144x144',
  //         type: 'image/png'
  //       }
  //     ]
  //   },
  //   workbox: {
  //     navigateFallback: '/'
  //   }
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

})
