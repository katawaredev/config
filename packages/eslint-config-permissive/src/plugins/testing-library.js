module.exports = {
  overrides: [
    {
      files: [
        "*.test.ts",
        "*.test.tsx",
        "*.test.js",
        "*.test.jsx",
        "*.spec.ts",
        "*.spec.tsx",
        "*.spec.js",
        "*.spec.jsx"
      ],
      plugins: ["testing-library"],

      // https://github.com/testing-library/eslint-plugin-testing-library#supported-rules
      rules: {
        // Enforce async queries to have proper await [recommended]
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/await-async-query.md
        "testing-library/await-async-query": "error",

        // Enforce async utils to be awaited properly [recommended]
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/await-async-utils.md
        "testing-library/await-async-utils": "error",

        // Enforce async fire event methods to be awaited [vue]
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/await-fire-event.md
        // "testing-library/await-fire-event": "off",

        // Ensure data-testid values match a provided regex.
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/consistent-data-testid.md
        // "testing-library/consistent-data-testid": "off",

        // Disallow unnecessary await for sync queries [recommended]
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-await-sync-query.md
        "testing-library/no-await-sync-query": "error",

        // Disallow the use of debug
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-debug.md
        "testing-library/no-debug": "warn",

        // Disallow importing from DOM Testing Library [autofix]
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-dom-import.md
        "testing-library/no-dom-import": "warn",

        // Disallow the use of getBy* queries when checking elements are not present
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-get-by-for-checking-element-not-present.md
        "testing-library/no-get-by-for-checking-element-not-present": "warn"

        // Disallow the use of cleanup
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-manual-cleanup.md
        // "testing-library/no-manual-cleanup": "off",

        // Suggest using explicit assertions rather than just getBy* queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-explicit-assert.md
        // "testing-library/prefer-explicit-assert": "off"
      }
    }
  ]
};
