module.exports = {
  overrides: [
    {
      files: ["*.md"],
      plugins: ["markdown"],

      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },

      // https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx#rules
      rules: {
        "default-case": "off",
        "eol-last": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        strict: "off",
        "unicode-bom": "off",
        "import/no-unresolved": "off",
      },
    },
    {
      files: ["*.mdx"],
      plugins: ["markdown", "mdx"],
      parser: "eslint-mdx",
      globals: {
        React: "false",
      },

      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },

      // https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx#rules
      rules: {
        "default-case": "off",
        "eol-last": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        strict: "off",
        "unicode-bom": "off",

        // HTML style comments in jsx block is invalid, this rule will help you to fix it by transforming it to JSX style comments. [autofix]
        "mdx/no-jsx-html-comments": "error",

        "react/no-unescaped-entities": "off",
        "mdx/no-unescaped-entities": "warn",

        "no-unused-expressions": "off",
        "mdx/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],

        // Integration with remark-lint plugins
        "mdx/remark": "warn",

        "lines-between-class-members": "off", // FIXME: See https://github.com/mdx-js/mdx/issues/195
        "react/jsx-no-undef": ["error", { allowGlobals: true }],
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
