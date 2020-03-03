module.exports = {
  rules: {
    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    camelcase: "warn",

    // enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    "consistent-this": ["warn", "that", "self", "me"],

    // Enforces consistent naming for boolean props
    // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    "react/boolean-prop-naming": "warn",

    // Enforce event handler naming conventions in JSX
    // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    "react/jsx-handler-names": "warn"
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // Enforces naming conventions for everything across a codebase [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        "@typescript-eslint/naming-convention": "warn"
      }
    }
  ]
};
