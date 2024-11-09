// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],

  // Nuxt ESlint (https://eslint.nuxt.com)
  eslint: { config: { standalone: false } }, // Generate only Nuxt-specific rules as we're using `antfu/eslint-config` for other Vue & TS rules

  // Misc
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
