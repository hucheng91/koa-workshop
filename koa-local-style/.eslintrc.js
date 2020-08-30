module.exports = {
    env: {
        "browser": true,
        "node": true, 
        "commonjs": true,
        "es2020": true
    },
    extends: "eslint:recommended",
    parserOptions: {
        "ecmaVersion": 12
    },
    rules: {
        'no-console': 0, // 允许 console
        indent: ['error', 4], // 缩进宽度4个空格
        'comma-dangle': 'off', // 允许行末逗号
        'no-constant-condition': 'off', // 允许常量作为表达式条件
        'no-delete-var': 'off', // 允许使用 delete
        'no-extend-native': 'off', // 允许扩展原生对象
        'no-floating-decimal': 'off', //  允许省去小数点前的0
        'no-multi-str': 'off', // 允许多行字符串
        semi: 2, // 不使用分号
        'generator-star-spacing': 'off', // 关闭
        // 最大长度 120
        'max-len': [
            'warn',
            {
                code: 120,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true
            }
        ],
        // 最大行数 500
        'max-lines': [
            'warn',
            {
                max: 500,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        // 要求使用 let 或 const 而不是 var
        'no-var': ['error'],
        // allow debugger during development
        camelcase: 'off',
        'prefer-promise-reject-errors': 'off',
        'node/no-deprecated-api': 'off',
        'no-case-declarations': 'off',
        'no-new-func': 'off',
        'no-new': 'off',
        'no-proto': 'off'
    },
    globals: {
        __dirname: true
    }
};
