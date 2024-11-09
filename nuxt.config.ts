// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],

  // Nuxt ESlint (https://eslint.nuxt.com)
  eslint: { config: { standalone: false } }, // Generate only Nuxt-specific rules as we're using `antfu/eslint-config` for other Vue & TS rules

  // Nuxt UI (https://ui3.nuxt.dev/getting-started)
  css: ['~/assets/css/main.css'],

  // Nuxt Color Mode (https://color-mode.nuxtjs.org/#configuration)
  colorMode: { preference: 'light' },

  // Misc
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
