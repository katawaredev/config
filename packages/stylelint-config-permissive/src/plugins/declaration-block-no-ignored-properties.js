module.exports = {
  plugins: ["stylelint-declaration-block-no-ignored-properties"],

  // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
  rules: {
    // Disallow property values that are ignored due to another property value in the same rule.
    // https://github.com/stylelint/stylelint/tree/7.13.0/lib/rules/declaration-block-no-ignored-properties
    "plugin/declaration-block-no-ignored-properties": [
      true,
      { severity: "warning" },
    ],
  },
};
