const postcss = require("postcss");
const postcssImport = require("postcss-import");
const postcssNormalize = require("postcss-normalize");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postccPresetEnv = require("postcss-preset-env");

/**
 * @template T
 * @param {postcss.PluginInitializer} _initializer
 * @returns {postcss.Plugin<T>}
 */
const plugin = (_initializer) =>
  // @ts-ignore
  postcss()
    .use(
      postcssImport(
        postcssNormalize(
          /* pluginOptions (for PostCSS Normalize) */
          { forceImport: true }
        )
          .postcssImport
          /* pluginOptions (for PostCSS Import) */
          ()
      )
    )
    .use(postcssFlexbugsFixes())
    .use(
      postccPresetEnv({
        autoprefixer: { flexbox: "no-2009" },
        stage: 3,
      })
    );

module.exports = postcss.plugin("postcss-plugin-permissive", plugin);
