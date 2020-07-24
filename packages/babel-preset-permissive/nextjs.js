module.exports = (api, _options) => ({
  plugins: [
    require("babel-plugin-annotate-pure-calls").default,
    require("babel-plugin-dev-expression"),

    require("babel-plugin-macros"),
    require("babel-plugin-preval"),

    require("babel-plugin-inline-react-svg").default,
    api.env("production") &&
      require("babel-plugin-react-remove-properties").default,
  ].filter(Boolean),
});
