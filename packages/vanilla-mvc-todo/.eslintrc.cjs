module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  plugins: [
    'import',
  ],
  extends: ['airbnb', 'eslint:recommended', 'plugin:import/recommended'],
  rules: {
    'func-names': ['error', 'never'],
    'no-use-before-define': ['error', { variables: false }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
