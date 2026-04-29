import pluginVue from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'dist/',
      'build/',
      '_build_*/',
      'node_modules/',
      '*.svg',
      '*.png',
      '*.jpg',
      '*.jpeg',
      '*.gif',
      '*.webp',
      '*.ttf'
    ]
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,cjs,mjs,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest' }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      // Relaxed for template flexibility — remove as project matures
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-empty-object-type': 'warn',
      'prettier/prettier': 'error'
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        parser: tsParser
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...eslintConfigPrettier.rules,
      // Relaxed for template flexibility — remove as project matures
      'vue/no-v-html': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/no-template-shadow': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prettier/prettier': 'error'
    }
  }
]
