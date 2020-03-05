// https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/

module.exports = {
  plugins: ["stylelint-high-performance-animation"],

  // https://github.com/kristerkari/stylelint-high-performance-animation
  rules: {
    // Prevent the use of low performance animation and transition properties.
    "plugin/no-low-performance-animation-properties": [
      true,
      { severity: "warning" }
    ]
  }
};
