// Rules of Hooks
// https://reactjs.org/docs/hooks-rules.html

module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.tsx", "*.mdx"],
      plugins: ["react-hooks"],

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  ],
};
