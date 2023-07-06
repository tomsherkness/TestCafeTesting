module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'no-only-tests', 'react'],
  rules: {
    'newline-per-chained-call': 'off',
    'no-only-tests/no-only-tests': [
      'error',
      {
        block: ['test', 'it', 'assert'],
        focus: ['only', 'skip']
      }
    ]
  }
}
