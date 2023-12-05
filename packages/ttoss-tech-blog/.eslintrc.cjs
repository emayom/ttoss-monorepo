module.exports = {
  extends: '../../eslint.config.cjs',
  rules: {
    'react/destructuring-assignment': [0, 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-unknown-property': [0],
    'react/prop-types': [0],
    'react/*': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
