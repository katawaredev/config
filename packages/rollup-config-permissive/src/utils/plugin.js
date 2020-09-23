/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").modifyPluginArguments} modifyPluginArguments
 */
const path = require("path");
const isFunction = require("lodash/isFunction");

const { readFileAsync, writeFileAsync, renameAsync } = require("../utils/file");

/**
 * Set plugin arguments by name
 * @param {Config} config
 * @param {Object.<string, modifyPluginArguments | boolean>} pluginsObj
 */
const setPlugins = (config, pluginsObj) => {
  if (config.plugins)
    config.plugins = config.plugins.filter((plugin) => {
      const handler = pluginsObj[plugin.name];
      if (typeof handler === "boolean") return Boolean(handler);

      if (!isFunction(handler)) return true;
      // @ts-expect-error TS2322: Type X is not assignable to type Y
      if (!plugin.options) plugin.options = {};
      // @ts-expect-error TS2345: Argument of type X is not assignable to parameter of type Y
      return handler(plugin.options) !== false;
    });
};

/**
 * Generate proper plugin configurations
 * @param {Config} config
 */
const executePlugins = (config) => {
  // Execute plugins
  if (Array.isArray(config.plugins))
    // @ts-expect-error TS2339: Property X does not exist on type Y
    config.plugins = config.plugins.map(({ plugin, options }) =>
      typeof options !== "undefined" ? plugin(options) : plugin()
    );
  else if (config.plugins != null) {
    console.warn(
      `Invalid configuration for plugins: \`${JSON.stringify(config.plugins)}\``
    );
    delete config.plugins;
  }
  return config;
};

const rewriteOutputPlugin = (outputFile, sourcemap) => ({
  name: "rollup-plugin-command",
  plugin: require("rollup-plugin-command"),
  options: [
    async () => {
      const dir = path.dirname(outputFile);
      const defaultFile = path.join(dir, "index.js");

      if (sourcemap) {
        const defaultSourceMapFile = path.join(dir, "index.js.map");
        const outputFileName = path.basename(outputFile);

        await renameAsync(defaultSourceMapFile, `${outputFile}.map`);

        const content = await readFileAsync(defaultFile, "utf8");
        const replaced = content.replace(
          `//# sourceMappingURL=index.js.map`,
          `//# sourceMappingURL=${outputFileName}.map`
        );
        await writeFileAsync(defaultFile, replaced);
      }

      await renameAsync(defaultFile, outputFile);
    },
  ],
});

module.exports = {
  setPlugins,
  executePlugins,
  rewriteOutputPlugin,
};
