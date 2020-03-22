module.exports = {
  plugins: ["stylelint-no-unsupported-browser-features"],

  // https://github.com/ismay/stylelint-no-unsupported-browser-features
  rules: {
    // disallow features that aren't supported by your target browser audience
    "plugin/no-unsupported-browser-features": [true, { severity: "warning" }],
  },
};
