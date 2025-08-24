// eslint.config.mjs
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'dist', 'node_modules'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module', // or 'commonjs' if your project uses require
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    parser: '@typescript-eslint/parser',
    //@ts-ignore
    plugins: ['@typescript-eslint'],
    rules: {
      // TypeScript Unsafe Checks
      '@typescript-eslint/no-unsafe-call': 'off', // allows calling any
      '@typescript-eslint/no-unsafe-member-access': 'off', // allows .username on any
      '@typescript-eslint/no-explicit-any': 'off', // allows any type
      '@typescript-eslint/no-unsafe-assignment': 'off', // allows assigning any

      // TypeScript Code Style
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',

      // Prettier
      'prettier/prettier': ['error', { endOfLine: 'lf', singleQuote: true, semi: true }],

      // @ts-ignore
      'prettier/prettier': 0,
    },
  },
);
