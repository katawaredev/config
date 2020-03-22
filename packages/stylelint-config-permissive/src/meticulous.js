module.exports = {
  rules: {
    // //  Disallow empty blocks.
    // // https://stylelint.io/user-guide/rules/block-no-empty
    "block-no-empty": [true, { severity: "warning" }],

    // Specify short or long notation for hex colors. [autofix]
    // https://stylelint.io/user-guide/rules/color-hex-length
    "color-hex-length": ["short", { severity: "warning" }],

    //  Disallow longhand properties that can be combined into one shorthand property.
    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
    "declaration-block-no-redundant-longhand-properties": [
      true,
      { severity: "warning" },
    ],

    //  Specify whether or not quotation marks should be used around font family names.
    // https://stylelint.io/user-guide/rules/font-family-name-quotes
    "font-family-name-quotes": [
      "always-where-recommended",
      { severity: "warning" },
    ],

    //  Require numeric or named (where possible)
    // https://stylelint.io/user-guide/rules/font-weight-notation
    "font-weight-notation": ["named-where-possible", { severity: "warning" }],

    // Require or disallow quotes for urls.
    // https://stylelint.io/user-guide/rules/function-url-quotes
    "function-url-quotes": ["always", { severity: "warning" }],
  },
};
