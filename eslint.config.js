import pluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: '18' },
    },
  },
];
