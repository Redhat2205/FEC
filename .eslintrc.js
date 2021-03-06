module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": 0,
    "eol-last": 0,
    quotes: 0,
    "no-console": 0,
    "react/function-component-definition": 0,
    "import/extensions": 0,
    "react/prop-types": 0,
    "no-unused-vars": 0,
    "react/no-array-index-key": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    'no-undef': 0,
  },
};
