// These share identical configuration options, so we want to keep them in sync.
const noUnusedVarsConfig = require('../variables').rules['no-unused-vars'];

module.exports = {
  rules: {
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': noUnusedVarsConfig,
    '@typescript-eslint/no-useless-constructor': 'error',
  },
};
