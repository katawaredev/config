module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.tsx", "*.mdx"],

      plugins: ["react-native"],

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      rules: {
        // For react-native-web
        "import/no-unresolved": ["error", { ignore: ["react-native"] }],
        // FIXME: THese does not work with native
        "import/namespace": "off",
        "import/no-deprecated": "off",
        "jsx-a11y/accessible-emoji": "off",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
        "react-native/no-unused-styles": "warn",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/sort-styles.md
        // "react-native/sort-styles": "off",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
        "react-native/split-platform-components": "error",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
        // "react-native/no-inline-styles": "off",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
        // "react-native/no-color-literals": "off",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
        "react-native/no-raw-text": "error",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-single-element-style-arrays.md
        "react-native/no-single-element-style-arrays": "warn",
      },
    },
  ],
};
