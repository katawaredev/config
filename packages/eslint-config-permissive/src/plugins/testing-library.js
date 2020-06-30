module.exports = {
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
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

        // Disallow the use of cleanup
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-manual-cleanup.md
        // "testing-library/no-manual-cleanup": "off",

        // Disallow empty callbacks for waitFor and waitForElementToBeRemoved
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-wait-for-empty-callback.md
        // "testing-library/no-wait-for-empty-callback": "warn",

        // Suggest using explicit assertions rather than just getBy* queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-explicit-assert.md
        // "testing-library/prefer-explicit-assert": "off",

        // Suggest using findBy* methods instead of the waitFor + getBy queries [recommended] [autofix]
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-find-by.md
        "testing-library/prefer-find-by": "warn",

        // Enforce specific queries when checking element is present or not
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-presence-queries.md
        "testing-library/prefer-presence-queries": "warn",

        // Suggest using screen while using queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-screen-queries.md
        // "testing-library/prefer-screen-queries": "off",

        // Use waitFor instead of deprecated wait methods [autofix]
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-wait-for.md
        "testing-library/prefer-wait-for": "warn",
      },
    },
  ],
};
