// For a detailed explanation regarding each configuration property, visit:
// https://mysticatea.github.io/eslint-plugin-eslint-comments/

module.exports = {
  plugins: ["eslint-comments"],

  // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
  rules: {
    // #region Best Practices
    // require a eslint-enable comment for every eslint-disable comment [recommended]
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
    // "eslint-comments/disable-enable-pair": "off",

    // disallow a eslint-enable comment for multiple eslint-disable comments [recommended]
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
    // "eslint-comments/no-aggregating-enable": "off",

    // disallow duplicate eslint-disable comments [recommended]
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
    "eslint-comments/no-duplicate-disable": "warn",

    // disallow eslint-disable comments without rule names [recommended]
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
    // "eslint-comments/no-unlimited-disable": "off",

    // disallow unused eslint-disable comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    "eslint-comments/no-unused-disable": "warn",

    // disallow unused eslint-enable comments [recommended]
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
    "eslint-comments/no-unused-enable": "warn",
    // #endregion Best Practices

    // #region Stylistic Issues
    // disallow eslint-disable comments about specific rules
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
    // "eslint-comments/no-restricted-disable": "off",

    // disallow ESLint directive-comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html
    // "eslint-comments/no-use": "off"
    // #endregion Stylistic Issues
  },
};
