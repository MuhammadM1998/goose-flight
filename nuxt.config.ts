// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n'],

  // Nuxt ESlint (https://eslint.nuxt.com)
  eslint: { config: { standalone: false } }, // Generate only Nuxt-specific rules as we're using `antfu/eslint-config` for other Vue & TS rules

  // Nuxt UI (https://ui3.nuxt.dev/getting-started)
  css: ['~/assets/css/main.css'],

  // Nuxt Color Mode (https://color-mode.nuxtjs.org/#configuration)
  colorMode: { preference: 'light' },

  // Nuxt I18n (https://i18n.nuxtjs.org/docs/getting-started)
  i18n: {
    locales: [
      { code: 'ar', language: 'ar-EG', file: 'ar.json', dir: 'rtl' },
      { code: 'en', language: 'en-US', file: 'en.json', dir: 'ltr' },
    ],
    defaultLocale: 'en',
    lazy: true,
  },

  // Misc
  experimental: { typedPages: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
