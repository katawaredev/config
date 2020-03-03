module.exports = {
  overrides: [
    {
      files: ["*-spec.ts", "*-spec.js"],
      plugins: ["cypress"],
      env: {
        "cypress/globals": true
      },

      // https://github.com/cypress-io/eslint-plugin-cypress#rules
      rules: {
        // Prevent assigning return values of cy calls [recommended]
        // https://docs.cypress.io/guides/references/best-practices.html#Assigning-Return-Values
        "cypress/no-assigning-return-values": "error",

        // Prevent waiting for arbitrary time periods [recommended]
        // https://docs.cypress.io/guides/references/best-practices.html#Unnecessary-Waiting
        "cypress/no-unnecessary-waiting": "warn",

        // Disallow using force: true with action commands
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-force.md
        "cypress/no-force": "warn",

        // 	Ensure screenshots are preceded by an assertion
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/assertion-before-screenshot.md
        "cypress/assertion-before-screenshot": "warn"

        // 	Only allow data-* attribute selectors (require-data-selectors)
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/require-data-selectors.md
        // "cypress/require-data-selectors": "off"
      }
    }
  ]
};
