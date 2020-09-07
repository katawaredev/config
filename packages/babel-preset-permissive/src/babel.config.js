module.exports = (api, _options) => ({
  presets: [
    [
      require("@babel/preset-env"),
      api.env("test")
        ? { targets: { node: "current" } }
        : {
            useBuiltIns: "entry",
            shippedProposals: true,
            corejs: 3,
            modules: false,
            exclude: ["transform-typeof-symbol"],
          },
    ],
    [
      require("@babel/preset-react").default,
      { development: !api.env("production"), useBuiltIns: true },
    ],
    require("@babel/preset-typescript").default,
  ],
  plugins: [
    require("babel-plugin-annotate-pure-calls").default,
    require("babel-plugin-dev-expression"),
    require(`@babel/plugin-syntax-dynamic-import`).default,
    api.env("test") && require(`babel-plugin-dynamic-import-node`).default,

    // NOTE: This goes before class properties
    // https://babeljs.io/docs/en/babel-plugin-proposal-decorators#note-compatibility-with-babel-plugin-proposal-class-properties
    [require("@babel/plugin-proposal-decorators").default, false],
    require("@babel/plugin-proposal-class-properties").default,
    require("@babel/plugin-proposal-numeric-separator").default,

    require("babel-plugin-macros"),
    require("babel-plugin-preval"),
    require("babel-plugin-codegen"),

    require("@babel/plugin-transform-react-jsx").default, // Omit `import React from "react"`
    require("babel-plugin-inline-react-svg").default,
    api.env("production") &&
      require("babel-plugin-react-remove-properties").default,
  ].filter(Boolean),
  overrides: [
    {
      test: /\.tsx?$/,
      plugins: [
        [
          require("@babel/plugin-proposal-decorators").default,
          { legacy: true },
        ],
      ],
    },
  ],
});
