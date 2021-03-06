module.exports = {
  rules: {
    // Disallow vendor prefixes for at-rules. [autofix]
    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
    "at-rule-no-vendor-prefix": [true, { severity: "warning" }],

    // Disallow vendor prefixes for media feature names. [autofix]
    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
    "media-feature-name-no-vendor-prefix": [true, { severity: "warning" }],

    // Disallow vendor prefixes for properties. [autofix]
    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    "property-no-vendor-prefix": [true, { severity: "warning" }],

    // Disallow vendor prefixes for selectors. [autofix]
    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    "selector-no-vendor-prefix": [true, { severity: "warning" }],

    //  Disallow vendor prefixes for values. [autofix]
    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
    "value-no-vendor-prefix": [true, { severity: "warning" }],
  },
};
