module.exports = {
  overrides: [
    {
      files: ["**/cypress/**/?(*.)+(spec).[tj]s?(x)"],
      plugins: ["cypress", "chai-friendly"],
      env: {
        "cypress/globals": true,
      },

      // https://github.com/cypress-io/eslint-plugin-cypress#rules
      rules: {
        // Invalid rules for cypress
        "jest/expect-expect": "off",
        "jest/valid-expect": "off",
        "jest/valid-expect-in-promise": "off",

        // Chai syntax
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "chai-friendly/no-unused-expressions": "error",

        // Prevent assigning return values of cy calls [recommended]
        // https://docs.cypress.io/guides/references/best-practices.html#Assigning-Return-Values
        "cypress/no-assigning-return-values": "error",

        // Prevent waiting for arbitrary time periods [recommended]
        // https://docs.cypress.io/guides/references/best-practices.html#Unnecessary-Waiting
        "cypress/no-unnecessary-waiting": "warn",

        // Prevent using async/await in Cypress test case [recommended]
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-async-tests.md
        "cypress/no-async-tests": "warn",

        // Disallow using force: true with action commands
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-force.md
        "cypress/no-force": "warn",

        // 	Ensure screenshots are preceded by an assertion
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/assertion-before-screenshot.md
        "cypress/assertion-before-screenshot": "warn",

        // 	Only allow data-* attribute selectors (require-data-selectors)
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/require-data-selectors.md
        // "cypress/require-data-selectors": "off"
      },
    },
  ],
};
