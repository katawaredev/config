module.exports = {
  overrides: [
    {
      files: ["*.md"],
      plugins: ["markdown"],
      processor: "markdown/markdown",
    },
    {
      files: ["**/*.md/**"],
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
      },
    },
    {
      files: ["*.mdx"],
      parser: "eslint-mdx",
      plugins: ["mdx"],
      processor: "mdx/remark",
      globals: {
        React: "false",
      },
      // optional, if you want to lint code blocks at the same time
      settings: {
        "mdx/code-blocks": true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        "mdx/language-mapper": {},
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
      },
    },
  ],
};
