// eslint-disable-next-line no-undef
module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier', 'import'],
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 0,
    },
};
