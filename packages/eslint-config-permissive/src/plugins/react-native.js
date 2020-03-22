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
        // "react-native/no-raw-text": "warn",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-single-element-style-arrays.md
        // "react-native/no-single-element-style-arrays": "warn"
      },
    },
    {
      files: ["**/?(*.)+(native|ios|android).[tj]s?(x)"],

      rules: {
        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
        "react-native/no-raw-text": "error",

        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-single-element-style-arrays.md
        "react-native/no-single-element-style-arrays": "warn",
      },
    },
  ],
};
