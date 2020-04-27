const postcss = require("postcss");

/**
 * @template T
 * @param {postcss.PluginInitializer} _initializer
 * @returns {postcss.Plugin<T>}
 */
const plugin = (_initializer) =>
  // @ts-ignore
  postcss()
    .use(require("postcss-import")())
    .use(require("postcss-flexbugs-fixes")())
    .use(
      require("postcss-preset-env")({
        autoprefixer: { flexbox: "no-2009" },
        stage: 3,
      })
    );

module.exports = postcss.plugin("postcss-plugin-permissive", plugin);
