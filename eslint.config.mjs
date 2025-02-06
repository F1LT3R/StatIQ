import { FlatCompat } from '@eslint/eslintrc'

// Initialize FlatCompat with the recommended configuration
const compat = new FlatCompat({
  baseDirectory: process.cwd(), // Base directory of your project
  recommendedConfig: {
    extends: ['eslint:recommended'],
  },
})

export default [
  ...compat.config({
    env: {
      node: true,
      es2023: true,
    },
    extends: ['plugin:prettier/recommended'], // Use Prettier recommended settings
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  }),

  ...compat.config({
    plugins: ['unicorn'], // Add Unicorn plugin
    extends: ['plugin:unicorn/recommended'], // Use Unicorn's recommended rules
    rules: {
      // Disable or override specific Unicorn rules
      'unicorn/no-null': 'warn', // Allow null, but warn
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase', // Enforce camelCase filenames
        },
      ],
    },
  }),
]
