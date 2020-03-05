module.exports = {
  plugins: ["stylelint-react-native"],

  // https://github.com/kristerkari/stylelint-react-native#list-of-rules
  rules: {
    // Disallow unknown React Native CSS properties.
    // https://github.com/kristerkari/stylelint-react-native/blob/master/src/rules/css-property-no-unknown/README.md
    "react-native/css-property-no-unknown": [true, { severity: "warning" }],

    // Disallow valid font-weight values that work on iOS, but are ignored and get mapped to normal or bold weight on Android.
    // https://github.com/kristerkari/stylelint-react-native/blob/master/src/rules/font-weight-no-ignored-values/README.md
    "react-native/font-weight-no-ignored-values": [
      true,
      { severity: "warning" }
    ],

    // Disallow unknown React Native Style properties.
    // https://github.com/kristerkari/stylelint-react-native/blob/master/src/rules/style-property-no-unknown/README.md
    "react-native/style-property-no-unknown": [true, { severity: "warning" }]
  }
};
