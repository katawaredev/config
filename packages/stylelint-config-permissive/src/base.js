module.exports = {
  // https://stylelint.io/user-guide/rules/list
  rules: {
    // # region Possible errors

    //  Disallow invalid hex colors. [recommended]
    // https://stylelint.io/user-guide/rules/color-no-invalid-hex
    "color-no-invalid-hex": [true, { severity: "error" }],

    // Disallow duplicate font family names.
    // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names [recommended]
    "font-family-no-duplicate-names": [true, { severity: "warning" }],

    // Disallow missing generic families in lists of font family names. [recommended]
    // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
    "font-family-no-missing-generic-family-keyword": [
      true,
      { severity: "warning" }
    ],

    // Disallow an invalid expression within calc functions. [recommended]
    // https://stylelint.io/user-guide/rules/function-calc-no-invalid
    "function-calc-no-invalid": [true, { severity: "error" }],

    // Disallow an unspaced operator within calc functions. [recommended]
    // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
    "function-calc-no-unspaced-operator": [true, { severity: "error" }],

    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax. [recommended]
    // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
    "function-linear-gradient-no-nonstandard-direction": [
      true,
      { severity: "error" }
    ],

    // Disallow (unescaped) newlines in strings. [recommended]
    // https://stylelint.io/user-guide/rules/string-no-newline
    "string-no-newline": [true, { severity: "error" }],

    // Disallow unknown units. [recommended]
    // https://stylelint.io/user-guide/rules/unit-no-unknown
    "unit-no-unknown": [true, { severity: "error" }],

    // Disallow unknown properties. [recommended]
    // https://stylelint.io/user-guide/rules/property-no-unknown
    "property-no-unknown": [true, { severity: "error" }],

    // Disallow !important within keyframe declarations. [recommended]
    // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
    "keyframe-declaration-no-important": [true, { severity: "warning" }],

    // Disallow duplicate properties within declaration blocks. [recommended]
    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
    "declaration-block-no-duplicate-properties": [
      true,
      { severity: "warning", ignore: ["consecutive-duplicates"] }
    ],

    // Disallow shorthand properties that override related longhand properties. [recommended]
    // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
    "declaration-block-no-shorthand-property-overrides": [
      true,
      { severity: "warning" }
    ],

    // Disallow empty blocks. [recommended]
    // https://stylelint.io/user-guide/rules/block-no-empty
    // "block-no-empty": [true, { severity: "warning" }],

    // Disallow unknown pseudo-class selectors. [recommended]
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
    "selector-pseudo-class-no-unknown": [true, { severity: "error" }],

    // Disallow unknown pseudo-element selectors. [recommended]
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
    "selector-pseudo-element-no-unknown": [true, { severity: "error" }],

    // Disallow unknown type selectors. [recommended]
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown
    "selector-type-no-unknown": [true, { severity: "error" }],

    // Disallow unknown media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown [recommended]
    "media-feature-name-no-unknown": [true, { severity: "error" }],

    // Disallow unknown at-rules. [recommended]
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    "at-rule-no-unknown": [true, { severity: "error" }],

    // Disallow empty comments. [recommended]
    // https://stylelint.io/user-guide/rules/comment-no-empty
    // "comment-no-empty": null,

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity. [recommended]
    // https://stylelint.io/user-guide/rules/no-descending-specificity
    "no-descending-specificity": [true, { severity: "warning" }],

    // Disallow duplicate @import rules within a stylesheet. [recommended]
    // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
    "no-duplicate-at-import-rules": [true, { severity: "warning" }],

    // Disallow duplicate selectors within a stylesheet. [recommended]
    // https://stylelint.io/user-guide/rules/no-duplicate-selectors
    "no-duplicate-selectors": [true, { severity: "warning" }],

    // Disallow empty sources. [recommended]
    // https://stylelint.io/user-guide/rules/no-empty-source
    "no-empty-source": null,

    // Disallow extra semicolons. [recommended] [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/no-extra-semicolons
    "no-extra-semicolons": null,

    // Disallow double-slash comments (//...) which are not supported by CSS. [recommended]
    // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
    "no-invalid-double-slash-comments": [true, { severity: "error" }],

    // # endregion Possible errors

    // # region Limit language features

    // Require (where possible) or disallow named colors.
    // https://stylelint.io/user-guide/rules/color-named
    // "color-named": null,

    // Disallow hex colors.
    // https://stylelint.io/user-guide/rules/color-no-hex
    // "color-no-hex": null,

    // Specify a blacklist of disallowed functions.
    // https://stylelint.io/user-guide/rules/function-blacklist
    // "function-blacklist": null,

    // Disallow scheme-relative urls.
    // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
    // "function-url-no-scheme-relative": null,

    // Specify a blacklist of disallowed URL schemes.
    // https://stylelint.io/user-guide/rules/function-url-scheme-blacklist
    // "function-url-scheme-blacklist": null,

    // Specify a whitelist of allowed URL schemes.
    // https://stylelint.io/user-guide/rules/function-url-scheme-whitelist
    // "function-url-scheme-whitelist": null,

    // Specify a whitelist of allowed functions.
    // https://stylelint.io/user-guide/rules/function-whitelist
    // "function-whitelist": null,

    // Specify a pattern for keyframe names.
    // https://stylelint.io/user-guide/rules/keyframes-name-pattern
    // "keyframes-name-pattern": null,

    // Limit the number of decimal places allowed in numbers.
    // https://stylelint.io/user-guide/rules/number-max-precision
    // "number-max-precision": null,

    // Specify the minimum number of milliseconds for time values.
    // https://stylelint.io/user-guide/rules/time-min-milliseconds
    // "time-min-milliseconds": null,

    // Specify a blacklist of disallowed units.
    // https://stylelint.io/user-guide/rules/unit-blacklist
    // "unit-blacklist": null,

    // Specify a whitelist of allowed units.
    // https://stylelint.io/user-guide/rules/unit-whitelist
    // "unit-whitelist": null,

    // Disallow redundant values in shorthand properties. [autofix]
    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    "shorthand-property-no-redundant-values": [true, { severity: "warning" }],

    // Disallow vendor prefixes for values.
    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
    // "value-no-vendor-prefix": null,

    // Specify a pattern for custom properties.
    // https://stylelint.io/user-guide/rules/custom-property-pattern
    // "custom-property-pattern": null,

    // Specify a blacklist of disallowed properties.
    // https://stylelint.io/user-guide/rules/property-blacklist
    // "property-blacklist": null,

    // Disallow vendor prefixes for properties.
    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    // "property-no-vendor-prefix": null,

    // Specify a whitelist of allowed properties.
    // https://stylelint.io/user-guide/rules/property-whitelist
    // "property-whitelist": null,

    // Disallow longhand properties that can be combined into one shorthand property.
    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
    // "declaration-block-no-redundant-longhand-properties": [ true, { severity: "warning" } ],

    // Disallow !important within declarations.
    // https://stylelint.io/user-guide/rules/declaration-no-important
    "declaration-no-important": [true, { severity: "warning" }],

    // Specify a blacklist of disallowed property and unit pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist
    // "declaration-property-unit-blacklist": null,

    // Specify a whitelist of allowed property and unit pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist
    // "declaration-property-unit-whitelist": null,

    // Specify a blacklist of disallowed property and value pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-value-blacklist
    "declaration-property-value-blacklist": [
      {
        "/^transition/": ["/all/"]
      },
      { severity: "warning" }
    ],

    // Specify a whitelist of allowed property and value pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-value-whitelist
    // "declaration-property-value-whitelist": null,

    // Limit the number of declarations within a single-line declaration block. [prettier]
    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
    "declaration-block-single-line-max-declarations": null,

    // Specify a blacklist of disallowed attribute operators.
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist
    // "selector-attribute-operator-blacklist": null,

    // Specify a whitelist of allowed attribute operators.
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist
    // "selector-attribute-operator-whitelist": null,

    // Specify a pattern for class selectors.
    // https://stylelint.io/user-guide/rules/selector-class-pattern
    // "selector-class-pattern": null,

    // Specify a blacklist of disallowed combinators.
    // https://stylelint.io/user-guide/rules/selector-combinator-blacklist
    // "selector-combinator-blacklist": null,

    // Specify a whitelist of allowed combinators.
    // https://stylelint.io/user-guide/rules/selector-combinator-whitelist
    // "selector-combinator-whitelist": null,

    // Specify a pattern for ID selectors.
    // https://stylelint.io/user-guide/rules/selector-id-pattern
    // "selector-id-pattern": null,

    // Limit the number of attribute selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-attribute
    // "selector-max-attribute": null,

    // Limit the number of classes in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-class
    // "selector-max-class": null,

    // Limit the number of combinators in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-combinators
    // "selector-max-combinators": null,

    // Limit the number of compound selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
    // "selector-max-compound-selectors": null,

    // Limit the number of adjacent empty lines within selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-max-empty-lines
    "selector-max-empty-lines": null,

    // Limit the number of ID selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-id
    // "selector-max-id": null,

    // Limit the number of pseudo-classes in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-pseudo-class
    // "selector-max-pseudo-class": null,

    // Limit the specificity of selectors.
    // https://stylelint.io/user-guide/rules/selector-max-specificity
    // "selector-max-specificity": null,

    // Limit the number of type in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-type
    // "selector-max-type": null,

    // Limit the number of universal selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-universal
    // "selector-max-universal": null,

    // Specify a pattern for the selectors of rules nested within rules.
    // https://stylelint.io/user-guide/rules/selector-nested-pattern
    // "selector-nested-pattern": null,

    // Disallow qualifying a selector by type.
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    // "selector-no-qualifying-type": null,

    // Disallow vendor prefixes for selectors.
    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    // "selector-no-vendor-prefix": null,

    // Specify a blacklist of disallowed pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist
    // "selector-pseudo-class-blacklist": null,

    // Specify a whitelist of allowed pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist
    // "selector-pseudo-class-whitelist": null,

    // Specify a blacklist of disallowed pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist
    // "selector-pseudo-element-blacklist": null,

    // Specify a whitelist of allowed pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist
    // "selector-pseudo-element-whitelist": null,

    // Specify a blacklist of disallowed media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-blacklist
    // "media-feature-name-blacklist": null,

    // Disallow vendor prefixes for media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
    // "media-feature-name-no-vendor-prefix": null,

    // Specify a whitelist of allowed media feature name and value pairs.
    // https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist
    // "media-feature-name-value-whitelist": null,

    // Specify a whitelist of allowed media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-whitelist
    // "media-feature-name-whitelist": null,

    // Specify a pattern for custom media query names.
    // https://stylelint.io/user-guide/rules/custom-media-pattern
    // "custom-media-pattern": null,

    // Specify a blacklist of disallowed at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-blacklist
    // "at-rule-blacklist": null,

    // Disallow vendor prefixes for at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
    // "at-rule-no-vendor-prefix": null,

    // Specify a requirelist of properties for an at-rule.
    // https://stylelint.io/user-guide/rules/at-rule-property-requirelist
    // "at-rule-property-requirelist": null,

    // Specify a whitelist of allowed at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-whitelist
    // "at-rule-whitelist": null,

    // Specify a blacklist of disallowed words within comments.
    // https://stylelint.io/user-guide/rules/comment-word-blacklist
    // "comment-word-blacklist": null,

    // Limit the depth of nesting.
    // https://stylelint.io/user-guide/rules/max-nesting-depth
    // "max-nesting-depth": null,

    // Disallow unknown animations.
    // https://stylelint.io/user-guide/rules/no-unknown-animations
    // "no-unknown-animations": null,

    // # endregion Limit language features

    // # region Stylistic issues

    // Specify lowercase or uppercase for hex colors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/color-hex-case
    "color-hex-case": null,

    // Specify short or long notation for hex colors. [autofix]
    // https://stylelint.io/user-guide/rules/color-hex-length
    // "color-hex-length": [true, { severity: "warning" }],

    // Specify whether or not quotation marks should be used around font family names.
    // https://stylelint.io/user-guide/rules/font-family-name-quotes
    // "font-family-name-quotes": [ "always-where-recommended", { severity: "warning" } ],

    // Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.
    // https://stylelint.io/user-guide/rules/font-weight-notation
    // "font-weight-notation": ["named-where-possible", { severity: "warning" }],

    // Require a newline or disallow whitespace after the commas of functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-comma-newline-after
    "function-comma-newline-after": null,

    // Require a newline or disallow whitespace before the commas of functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-comma-newline-before
    "function-comma-newline-before": null,

    // Require a single space or disallow whitespace after the commas of functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-comma-space-after
    "function-comma-space-after": null,

    // Require a single space or disallow whitespace before the commas of functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-comma-space-before
    "function-comma-space-before": null,

    // Limit the number of adjacent empty lines within functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-max-empty-lines
    "function-max-empty-lines": null,

    // Specify lowercase or uppercase for function names. [autofix]
    // https://stylelint.io/user-guide/rules/function-name-case
    "function-name-case": [
      "lower",
      {
        severity: "warning",
        ignoreFunctions: "/^DXImageTransform.Microsoft.*$/"
      }
    ],

    // Require a newline or disallow whitespace on the inside of the parentheses of functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-parentheses-newline-inside
    "function-parentheses-newline-inside": null,

    // Require a single space or disallow whitespace on the inside of the parentheses of functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-parentheses-space-inside
    "function-parentheses-space-inside": null,

    // Require or disallow quotes for urls.
    // https://stylelint.io/user-guide/rules/function-url-quotes
    // "function-url-quotes": ["always", { severity: "warning" }],

    // Require or disallow whitespace after functions. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/function-whitespace-after
    "function-whitespace-after": null,

    // Require or disallow a leading zero for fractional numbers less than 1. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/number-leading-zero
    "number-leading-zero": null,

    // Disallow trailing zeros in numbers. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/number-no-trailing-zeros
    "number-no-trailing-zeros": null,

    // Specify single or double quotes around strings. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/string-quotes
    "string-quotes": null,

    // Disallow units for zero lengths. [autofix]
    // https://stylelint.io/user-guide/rules/length-zero-no-unit
    "length-zero-no-unit": [true, { severity: "warning" }],

    // Specify lowercase or uppercase for units. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/unit-case
    "unit-case": null,

    // Specify lowercase or uppercase for keywords values. [autofix]
    // https://stylelint.io/user-guide/rules/value-keyword-case
    "value-keyword-case": ["lower", { severity: "warning" }],

    // Require a newline or disallow whitespace after the commas of value lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/value-list-comma-newline-after
    "value-list-comma-newline-after": null,

    // Require a newline or disallow whitespace before the commas of value lists. [prettier]
    // https://stylelint.io/user-guide/rules/value-list-comma-newline-before
    "value-list-comma-newline-before": null,

    // Require a single space or disallow whitespace after the commas of value lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/value-list-comma-space-after
    "value-list-comma-space-after": null,

    // Require a single space or disallow whitespace before the commas of value lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/value-list-comma-space-before
    "value-list-comma-space-before": null,

    // Limit the number of adjacent empty lines within value lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/value-list-max-empty-lines
    "value-list-max-empty-lines": null,

    // Require or disallow an empty line before custom properties. [autofix]
    // https://stylelint.io/user-guide/rules/custom-property-empty-line-before
    // "custom-property-empty-line-before": null,

    // Specify lowercase or uppercase for properties. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/property-case
    "property-case": null,

    // Require a single space or disallow whitespace after the bang of declarations. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-bang-space-after
    "declaration-bang-space-after": null,

    // Require a single space or disallow whitespace before the bang of declarations. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-bang-space-before
    "declaration-bang-space-before": null,

    // Require a newline or disallow whitespace after the colon of declarations. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-colon-newline-after
    "declaration-colon-newline-after": null,

    // Require a single space or disallow whitespace after the colon of declarations. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-colon-space-after
    "declaration-colon-space-after": null,

    // Require a single space or disallow whitespace before the colon of declarations. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-colon-space-before
    "declaration-colon-space-before": null,

    // Require or disallow an empty line before declarations. [autofix]
    // https://stylelint.io/user-guide/rules/declaration-empty-line-before
    // "declaration-empty-line-before": null,

    // Require a newline or disallow whitespace after the semicolons of declaration blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after
    "declaration-block-semicolon-newline-after": null,

    // Require a newline or disallow whitespace before the semicolons of declaration blocks. [prettier]
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
    "declaration-block-semicolon-newline-before": null,

    // Require a single space or disallow whitespace after the semicolons of declaration blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after
    "declaration-block-semicolon-space-after": null,

    // Require a single space or disallow whitespace before the semicolons of declaration blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
    "declaration-block-semicolon-space-before": null,

    // Require or disallow a trailing semicolon within declaration blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
    "declaration-block-trailing-semicolon": null,

    // Require or disallow an empty line before the closing brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
    "block-closing-brace-empty-line-before": null,

    // Require a newline or disallow whitespace after the closing brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
    "block-closing-brace-newline-after": null,

    // Require a newline or disallow whitespace before the closing brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-before
    "block-closing-brace-newline-before": null,

    // Require a single space or disallow whitespace after the closing brace of blocks. [prettier]
    // https://stylelint.io/user-guide/rules/block-closing-brace-space-after
    "block-closing-brace-space-after": null,

    // Require a single space or disallow whitespace before the closing brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-closing-brace-space-before
    "block-closing-brace-space-before": null,

    // Require a newline after the opening brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-opening-brace-newline-after
    "block-opening-brace-newline-after": null,

    // Require a newline or disallow whitespace before the opening brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
    "block-opening-brace-newline-before": null,

    // Require a single space or disallow whitespace after the opening brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-opening-brace-space-after
    "block-opening-brace-space-after": null,

    // Require a single space or disallow whitespace before the opening brace of blocks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/block-opening-brace-space-before
    "block-opening-brace-space-before": null,

    // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside
    "selector-attribute-brackets-space-inside": null,

    // Require a single space or disallow whitespace after operators within attribute selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
    "selector-attribute-operator-space-after": null,

    // Require a single space or disallow whitespace before operators within attribute selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
    "selector-attribute-operator-space-before": null,

    // Require or disallow quotes for attribute values. [prettier]
    // https://stylelint.io/user-guide/rules/selector-attribute-quotes
    "selector-attribute-quotes": null,

    // Require a single space or disallow whitespace after the combinators of selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-combinator-space-after
    "selector-combinator-space-after": null,

    // Require a single space or disallow whitespace before the combinators of selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-combinator-space-before
    "selector-combinator-space-before": null,

    // Disallow non-space characters for descendant combinators of selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space
    "selector-descendant-combinator-no-non-space": null,

    // Specify lowercase or uppercase for pseudo-class selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-case
    "selector-pseudo-class-case": null,

    // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
    "selector-pseudo-class-parentheses-space-inside": null,

    // Specify lowercase or uppercase for pseudo-element selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-case
    "selector-pseudo-element-case": null,

    // Specify single or double colon notation for applicable pseudo-elements. [autofix]
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
    "selector-pseudo-element-colon-notation": [
      "double",
      { severity: "warning" }
    ],

    // Specify lowercase or uppercase for type selectors. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-type-case
    "selector-type-case": null,

    // Require a newline or disallow whitespace after the commas of selector lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
    "selector-list-comma-newline-after": null,

    // Require a newline or disallow whitespace before the commas of selector lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
    "selector-list-comma-newline-before": null,

    // Require a single space or disallow whitespace after the commas of selector lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-list-comma-space-after
    "selector-list-comma-space-after": null,

    // Require a single space or disallow whitespace before the commas of selector lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/selector-list-comma-space-before
    "selector-list-comma-space-before": null,

    // Require or disallow an empty line before rules. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/rule-empty-line-before
    "rule-empty-line-before": null,

    // Require a single space or disallow whitespace after the colon in media features. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/media-feature-colon-space-after
    "media-feature-colon-space-after": null,

    // Require a single space or disallow whitespace before the colon in media features. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/media-feature-colon-space-before
    "media-feature-colon-space-before": null,

    // Specify lowercase or uppercase for media feature names. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/media-feature-name-case
    "media-feature-name-case": null,

    // Require a single space or disallow whitespace on the inside of the parentheses within media features. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
    "media-feature-parentheses-space-inside": null,

    // Require a single space or disallow whitespace after the range operator in media features. [autofix]
    // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
    "media-feature-range-operator-space-after": [
      "always",
      { severity: "warning" }
    ],

    // Require a single space or disallow whitespace before the range operator in media features. [autofix]
    // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
    "media-feature-range-operator-space-before": [
      "always",
      { severity: "warning" }
    ],

    // Require a newline or disallow whitespace after the commas of media query lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
    "media-query-list-comma-newline-after": null,

    // Require a newline or disallow whitespace before the commas of media query lists. [prettier]
    // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
    "media-query-list-comma-newline-before": null,

    // Require a single space or disallow whitespace after the commas of media query lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
    "media-query-list-comma-space-after": null,

    // Require a single space or disallow whitespace before the commas of media query lists. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
    "media-query-list-comma-space-before": null,

    // Require or disallow an empty line before at-rules. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    "at-rule-empty-line-before": null,

    // Specify lowercase or uppercase for at-rules names. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/at-rule-name-case
    "at-rule-name-case": null,

    // Require a newline after at-rule names. [prettier]
    // https://stylelint.io/user-guide/rules/at-rule-name-newline-after
    "at-rule-name-newline-after": null,

    // Require a single space after at-rule names. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/at-rule-name-space-after
    "at-rule-name-space-after": null,

    // Require a newline after the semicolon of at-rules. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
    "at-rule-semicolon-newline-after": null,

    // Require a single space or disallow whitespace before the semicolons of at-rules. [prettier]
    // https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
    "at-rule-semicolon-space-before": null,

    // Require or disallow an empty line before comments. [autofix]
    // https://stylelint.io/user-guide/rules/comment-empty-line-before
    // "comment-empty-line-before": null,

    // Require or disallow whitespace on the inside of comment markers. [autofix]
    // https://stylelint.io/user-guide/rules/comment-whitespace-inside
    "comment-whitespace-inside": ["always", { severity: "warning" }],

    // Specify indentation. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/indentation
    indentation: null,

    // Specify unix or windows linebreaks. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/linebreaks
    linebreaks: null,

    // Limit the number of adjacent empty lines. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/max-empty-lines
    "max-empty-lines": null,

    // Limit the length of a line. [prettier]
    // https://stylelint.io/user-guide/rules/max-line-length
    "max-line-length": null,

    // Disallow end-of-line whitespace. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/no-eol-whitespace
    "no-eol-whitespace": null,

    // Disallow missing end-of-source newlines. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
    "no-missing-end-of-source-newline": null,

    // Disallow empty first lines. [autofix] [prettier]
    // https://stylelint.io/user-guide/rules/no-empty-first-line
    "no-empty-first-line": null,

    // Require or disallow Unicode BOM. [prettier]
    // https://stylelint.io/user-guide/rules/unicode-bom
    "unicode-bom": null
  }
};
