/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").modifyPluginArguments} modifyPluginArguments
 */
const { isFunction } = require("lodash");

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
      // @ts-expect-error
      if (!plugin.options) plugin.options = {};
      // @ts-expect-error
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
    // @ts-expect-error
    config.plugins = config.plugins.map(({ plugin, options }) =>
      options !== undefined ? plugin.call(this, options) : plugin()
    );
  else if (config.plugins != null) {
    console.warn(
      `Invalid configuration for plugins: \`${JSON.stringify(config.plugins)}\``
    );
    delete config.plugins;
  }
  return config;
};

module.exports = {
  setPlugins,
  executePlugins,
};
