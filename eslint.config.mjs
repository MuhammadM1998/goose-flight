// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(),

  // TypeScript
  { rules: { 'ts/consistent-type-definitions': ['error', 'type'] } }, // Enforce `type` over `interface` for type definitions

  // Vue
  {
    rules: {
      'vue/attributes-order': ['error'],
      'vue/v-bind-style': [
        'error',
        'shorthand',
        { sameNameShorthand: 'always' },
      ],
    },
  },
)
