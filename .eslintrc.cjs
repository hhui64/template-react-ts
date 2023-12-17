module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
}
