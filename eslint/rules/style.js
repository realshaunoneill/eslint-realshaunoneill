module.exports = {
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [
      2,
      {
        after: true,
        before: true,
      },
    ],
    'block-spacing': [2, 'never'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'constructor-super': 2,
    curly: 2,
    'eol-last': 2,
    'func-call-spacing': [2, 'never'],
    'generator-star-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    indent: [
      2,
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 2,
      },
    ],
    'key-spacing': [
      2,
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    'keyword-spacing': [
      2,
      {
        after: true,
      },
    ],
    'new-parens': 2,
    'newline-after-var': 2,
    'newline-before-return': 2,
    'no-array-constructor': 2,
    'no-constant-condition': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': 2,
    'no-unexpected-multiline': 1,
    'no-unneeded-ternary': 2,
    'no-unused-expressions': 2,
    'no-whitespace-before-property': 2,
    'object-curly-newline': [
      2,
      {
        ExportDeclaration: {
          consistent: true,
          minProperties: 2,
        },
        ImportDeclaration: {
          consistent: true,
          minProperties: 2,
        },
        ObjectExpression: {
          consistent: true,
          minProperties: 2,
        },
        ObjectPattern: {
          consistent: true,
          multiline: false,
        },
      },
    ],
    'object-curly-spacing': [2, 'always'],
    'object-shorthand': [
      2,
      'always',
      {
        avoidQuotes: true,
      },
    ],
    'one-var': [
      2,
      {
        const: 'never',
      },
    ],
    'one-var-declaration-per-line': [1, 'initializations'],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '&&': 'before',
          ':': 'before',
          '?': 'before',
          '||': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'],
    'prefer-arrow-callback': [
      2,
      {
        allowNamedFunctions: true,
      },
    ],
    'prefer-object-spread': 'warn',
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'quote-props': [2, 'as-needed'],
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'rest-spread-spacing': [2, 'never'],
    semi: [2, 'always'],
    'space-before-blocks': [
      2,
      {
        classes: 'always',
        functions: 'always',
        keywords: 'always',
      },
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        nonwords: false,
        words: true,
      },
    ],
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, 'after'],
  },
};
