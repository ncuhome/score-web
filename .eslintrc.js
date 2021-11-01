const { getESLintConfig } = require('@iceworks/spec');

// https://www.npmjs.com/package/@iceworks/spec
module.exports = getESLintConfig('react-ts', {
  rules: {
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/typedef':0,
    'no-tabs':0,
    '@typescript-eslint/consistent-type-assertions':0
  },
});
