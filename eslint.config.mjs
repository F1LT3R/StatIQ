import { FlatCompat } from '@eslint/eslintrc';

// Initialize FlatCompat with the recommended configuration
const compat = new FlatCompat({
  baseDirectory: process.cwd(), // Base directory of your project
  recommendedConfig: {
    extends: ['eslint:recommended'],
  },
});

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
];
