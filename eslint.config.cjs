module.exports = {
  root: true,
  env: {
    browser: true, // 웹 브라우저 환경
    node: true, // Node.js 환경
    es6: true, // ECMAScript 2015+ 환경
    jest: true, // Jest 테스트 환경
  },
  extends: ["airbnb", "eslint:recommended"],
  plugins: [],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
  rules: {
    "func-names": ["error", "never"],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
