// eslint-disable-next-line no-unused-vars
const rollup = require("rollup");

/**
 * @typedef {Object.<string, *>} PackageJson
 *
 * @typedef {Object.<string, *>} BabelConfig
 *
 * @typedef {Object.<string, *>} TsConfigJson
 *
 * @typedef {Object.<string, *>} PostCssConfig
 *
 * @typedef {Object.<string, *>} PluginArguments
 *
 * @typedef {Object} RawPlugin
 * @property {string} name
 * @property {function} plugin
 * @property {PluginArguments} options
 *
 * Callback for modifying plugin arguments
 * @callback modifyPluginArguments
 * @param {PluginArguments} options plugin options.
 *
 * // FIXME: How to extend RollupOptions?
 * @typedef {rollup.RollupOptions} Config
 * @property {RawPlugin[]} plugins
 *
 * @typedef {"development" | "production"} Environment
 *
 * @typedef {"cjs" | "esm" | "node" | "umd"} ExportFormat
 */
