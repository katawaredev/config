module.exports = {
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
      plugins: ["jest-dom"],
      env: {
        "jest/globals": true,
      },

      // https://github.com/testing-library/eslint-plugin-jest-dom#supported-rules
      rules: {
        // prefer toBeChecked over checking attributes [recommended] [autofix]
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-checked.md
        "jest-dom/prefer-checked": "warn",

        // Prefer toBeEmpty over checking innerHTML [recommended] [autofix]
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-empty.md
        "jest-dom/prefer-empty": "warn",

        // prefer toBeDisabled or toBeEnabled over checking attributes [recommended] [autofix]
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-enabled-disabled.md
        "jest-dom/prefer-enabled-disabled": "warn",

        // prefer toHaveFocus over checking document.activeElement [recommended] [autofix]
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-focus.md
        "jest-dom/prefer-focus": "warn",

        // prefer toBeRequired over checking properties [recommended] [autofix]
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-required.md
        "jest-dom/prefer-required": "warn",

        // prefer toHaveAttribute over checking getAttribute/hasAttribute [recommended] [autofix]
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/docs/rules/prefer-to-have-attribute.md
        "jest-dom/prefer-to-have-attribute": "warn",
      },
    },
  ],
};
