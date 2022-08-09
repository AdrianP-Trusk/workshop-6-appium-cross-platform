module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'jest': true,
    'node': true,
  },
  'extends': [
    'google',
    'plugin:import/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'plugins': [
    'import',
    'jest',
  ],
  'rules': {
    'import/order': ['error', { 'alphabetize': { 'order': 'asc' }, 'groups': ['builtin', 'external', 'internal'], 'newlines-between': 'always' }],
    'indent': ['error', 2],
    'key-spacing': ['error', { 'afterColon': true }],
    'keyword-spacing': ['error', { 'after': true }],
    'linebreak-style': ['error', 'unix'],
    'max-len': 'off',
    'new-cap': 'off',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
  },
}
