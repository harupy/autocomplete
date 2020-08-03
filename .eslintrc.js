module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['jest', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/no-namespace': 'off',
    'no-console': ['error', ['warn', 'error']],
    'object-shorthand': 'error',
    'prefer-destructuring': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
};
