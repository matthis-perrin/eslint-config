import {EslintMetadata} from '@src/eslint/models';

export const eslintUnicorn: EslintMetadata = {
  plugin: {name: 'unicorn', importName: 'unicorn', module: 'eslint-plugin-unicorn'},
  dependencies: {
    'eslint-plugin-unicorn': '55.0.x',
  },
  settings: {},
  allOff: {
    'unicorn/better-regex': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-empty-array-spread': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/custom-error-definition': 'off',
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/error-message': 'off',
    'unicorn/escape-case': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-anonymous-default-export': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-push-push': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-await-in-promise-methods': 'off',
    'unicorn/no-console-spaces': 'off',
    'unicorn/no-document-cookie': 'off',
    'unicorn/no-empty-file': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-hex-escape': 'off',
    'unicorn/no-instanceof-array': 'off',
    'unicorn/no-invalid-fetch-options': 'off',
    'unicorn/no-invalid-remove-event-listener': 'off',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-length-as-slice-end': 'off',
    'unicorn/no-lonely-if': 'off',
    'unicorn/no-magic-array-flat-depth': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-negation-in-equality-check': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-array': 'off',
    'unicorn/no-new-buffer': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-single-promise-in-promise-methods': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/no-this-assignment': 'off',
    'unicorn/no-typeof-undefined': 'off',
    'unicorn/no-unnecessary-await': 'off',
    'unicorn/no-unnecessary-polyfills': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/no-unreadable-iife': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-fallback-in-spread': 'off',
    'unicorn/no-useless-promise-resolve-reject': 'off',
    'unicorn/no-useless-switch-case': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-zero-fractions': 'off',
    'unicorn/number-literal-case': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-array-find': 'off',
    'unicorn/prefer-array-flat-map': 'off',
    'unicorn/prefer-array-index-of': 'off',
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-blob-reading-methods': 'off',
    'unicorn/prefer-code-point': 'off',
    'unicorn/prefer-date-now': 'off',
    'unicorn/prefer-event-target': 'off',
    'unicorn/prefer-dom-node-append': 'off',
    'unicorn/prefer-dom-node-dataset': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-json-parse-buffer': 'off',
    'unicorn/prefer-keyboard-event-key': 'off',
    'unicorn/prefer-logical-operator-over-ternary': 'off',
    'unicorn/prefer-math-trunc': 'off',
    'unicorn/prefer-modern-dom-apis': 'off',
    'unicorn/prefer-modern-math-apis': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-native-coercion-functions': 'off',
    'unicorn/prefer-negative-index': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-object-has-own': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-prototype-methods': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'off',
    'unicorn/prefer-regexp-test': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-set-size': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorm/prefer-string-raw': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-string-slice': 'off',
    'unicorn/prefer-string-starts-ends-with': 'off',
    'unicorn/prefer-string-trim-start-end': 'off',
    'unicorn/prefer-structured-clone': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-type-error': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/relative-url-style': 'off',
    'unicorn/require-array-join-separator': 'off',
    'unicorn/require-number-to-fixed-digits-argument': 'off',
    'unicorn/require-post-message-target-origin': 'off',
    'unicorn/string-content': 'off',
    'unicorn/switch': 'off',
    'unicorn/switch-case-braces': 'off',
    'unicorn/template-indent': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/throw-new-error': 'off',
  },
  onlyOn: {
    'unicorn/better-regex': 'warn',
    'unicorn/catch-error-name': ['warn', {name: 'err'}],
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/consistent-empty-array-spread': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/custom-error-definition': 'warn',
    'unicorn/error-message': 'warn',
    'unicorn/escape-case': 'warn',
    'unicorn/filename-case': ['warn', {cases: {snakeCase: true}}],
    'unicorn/no-anonymous-default-export': 'warn',
    'unicorn/no-array-for-each': 'warn',
    'unicorn/no-array-method-this-argument': 'warn',
    'unicorn/no-array-push-push': 'warn',
    'unicorn/no-await-expression-member': 'warn',
    'unicorn/no-await-in-promise-methods': 'warn',
    'unicorn/no-document-cookie': 'warn',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-hex-escape': 'warn',
    'unicorn/no-instanceof-array': 'warn',
    'unicorn/no-invalid-fetch-options': 'warn',
    'unicorn/no-invalid-remove-event-listener': 'warn',
    'unicorn/no-length-as-slice-end': 'warn',
    'unicorn/no-lonely-if': 'warn',
    'unicorn/no-magic-array-flat-depth': 'warn',
    'unicorn/no-negation-in-equality-check': 'warn',
    'unicorn/no-object-as-default-parameter': 'warn',
    'unicorn/no-single-promise-in-promise-methods': 'warn',
    'unicorn/no-static-only-class': 'warn',
    'unicorn/no-thenable': 'warn',
    'unicorn/no-this-assignment': 'warn',
    'unicorn/no-typeof-undefined': 'warn',
    'unicorn/no-unnecessary-await': 'warn',
    'unicorn/no-unreadable-array-destructuring': 'warn',
    'unicorn/no-useless-fallback-in-spread': 'warn',
    'unicorn/no-useless-promise-resolve-reject': 'warn',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/prefer-array-find': 'warn',
    'unicorn/prefer-array-flat': 'warn',
    'unicorn/prefer-array-flat-map': 'warn',
    'unicorn/prefer-array-index-of': 'warn',
    'unicorn/prefer-at': 'warn',
    'unicorn/prefer-blob-reading-methods': 'warn',
    'unicorn/prefer-date-now': 'warn',
    'unicorn/prefer-event-target': 'warn',
    'unicorn/prefer-export-from': ['warn', {ignoreUsedVariables: true}],
    'unicorn/prefer-includes': 'warn',
    'unicorn/prefer-keyboard-event-key': 'warn',
    'unicorn/prefer-logical-operator-over-ternary': 'warn',
    'unicorn/prefer-object-has-own': 'warn',
    'unicorn/prefer-math-trunc': 'warn',
    'unicorn/prefer-modern-dom-apis': 'warn',
    'unicorn/prefer-modern-math-apis': 'warn',
    'unicorn/prefer-module': 'warn',
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/prefer-native-coercion-functions': 'warn',
    'unicorn/prefer-negative-index': 'warn',
    'unicorn/prefer-prototype-methods': 'warn',
    'unicorn/prefer-regexp-test': 'warn',
    'unicorn/prefer-set-has': 'warn',
    'unicorn/prefer-set-size': 'warn',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/prefer-string-starts-ends-with': 'warn',
    'unicorn/prefer-string-trim-start-end': 'warn',
    'unicorn/prefer-structured-clone': 'warn',
    'unicorn/prefer-ternary': 'warn',
    'unicorn/relative-url-style': ['warn', 'always'],
    'unicorn/require-array-join-separator': 'warn',
    'unicorn/require-number-to-fixed-digits-argument': 'warn',
    'unicorn/require-post-message-target-origin': 'warn',
    'unicorn/template-indent': 'warn',
    'unicorn/text-encoding-identifier-case': 'warn',
    'unicorn/throw-new-error': 'warn',
  },
};
