module.exports = {
  plugins: ["stylelint-a11y"],

  // https://github.com/YozhikM/stylelint-a11y#rules
  rules: {
    // Disallow unaccessible CSS generated content in pseudo-elements
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/content-property-no-static-value/README.md
    // "a11y/content-property-no-static-value": null,

    // Disallow font sizes less than 15px
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/font-size-is-readable/README.md
    // "a11y/font-size-is-readable": null,

    // Disallow not vertical rhythmed line-height
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/line-height-is-vertical-rhythmed/README.md
    // "a11y/line-height-is-vertical-rhythmed": null,

    // Require certain styles if the animation or transition in media features [recommended] [autofix]
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/media-prefers-reduced-motion/README.md
    "a11y/media-prefers-reduced-motion": [true, { severity: "warning" }],

    // Require implementation of certain styles for selectors with colors.
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/media-prefers-color-scheme/README.md
    // "a11y/media-prefers-color-scheme": null,

    // Disallow content hiding with display: none property
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-display-none/README.md
    // "a11y/no-display-none": null,

    // Disallow obsolete attribute using
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-attribute/README.md
    "a11y/no-obsolete-attribute": [true, { severity: "warning" }],

    // Disallow obsolete selectors using
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-element/README.md
    "a11y/no-obsolete-element": [true, { severity: "warning" }],

    // Require width of text in a comfortable range
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-spread-text/README.md
    // "a11y/no-spread-text": null,

    // Disallow outline clearing [recommended]
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-outline-none/README.md
    "a11y/no-outline-none": [true, { severity: "warning" }],

    // Disallow content with text-align: justify
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-text-align-justify/README.md
    // "a11y/no-text-align-justify": null,

    // Require or disallow a pseudo-element to the selectors with :hover [recommended] [autofix]
    // https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/selector-pseudo-class-focus/README.md
    "a11y/selector-pseudo-class-focus": [true, { severity: "warning" }],
  },
};
