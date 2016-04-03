'use strict';

// Target is code written for Node 4+
module.exports = {

  'parser': 'babel-eslint',

  'env': {
    'browser': false,
    'node': true,
    'es6': true
  },

  'parserOptions': {
    'sourceType': 'script'
  },

  'rules': {
    'strict': [2, 'global'],
    'indent': [2, 2, {'SwitchCase': 1 } ],
    'quotes': [2, 'single', 'avoid-escape'],
    'object-shorthand': 1,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'} ],
    'no-use-before-define': 2,
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'except-parens'],
    'no-console': 1,
    'no-debugger': 1,
    'no-labels': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-constant-condition': 1,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'block-scoped-var': 2,
    'consistent-return': 0,
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-notation': [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"} ],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-caller': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-multi-spaces': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 0,
    'wrap-iife': [2, 'any'],
    'yoda': 2,
    'brace-style': [2, '1tbs', {'allowSingleLine': true } ],
    'camelcase': [2, {'properties': 'never'} ],
    'comma-spacing': [2, {'before': false, 'after': true } ],
    'comma-style': [2, 'last'],
    'eol-last': 2,
    'func-names': 0,
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true } ],
    'new-cap': [2, {'newIsCap': true } ],
    'new-parens': 2,
    'no-multiple-empty-lines': [2, {'max': 2 } ],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'space-unary-ops': 2,
    'no-undef-init': 2,
    'no-extra-parens': [2, 'functions'],
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'one-var': [2, 'never'],
    'padded-blocks': 0,
    'prefer-const': 2,
    'no-var': 2,
    'semi': [2, "always", { "omitLastInOneLineBlock": true} ],
    'semi-spacing': [2, {'before': false, 'after': true } ],
    'keyword-spacing': 2,
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 2,
    'spaced-comment': [2, 'always', {'exceptions': ['-', '+'], 'markers': ['=', '!'] } ]
  }
}
