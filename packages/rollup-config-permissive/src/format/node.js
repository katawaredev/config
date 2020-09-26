/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").PackageJson} PackageJson
 * @typedef {import("../types").BabelConfig} BabelConfig
 * @typedef {import("../types").TsConfigJson} TsConfigJson
 * @typedef {import("../types").PostCssConfig} PostCssConfig
 * @typedef {import("../types").Environment} Environment
 */

const path = require("path");
const cloneDeep = require("lodash/cloneDeep");
const { setPlugins } = require("../utils/plugin");
const { moveFileAsync, getIndexFile } = require("../utils/file");

/**
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig | null} _babel
 * @param {TsConfigJson | null} _tsconfig
 * @param {PostCssConfig | null} _postcss
 * @param {string} _cwd
 * @returns {[Config, "node"][]}
 */
const node = (defaultConfig, pkg, _babel, _tsconfig, _postcss, _cwd) => {
  if (!pkg.bin) return [];

  const config = cloneDeep(defaultConfig);
  config.output.format = "cjs";
  config.output.dir = path.dirname(pkg.bin);

  setPlugins(config, {
    "@rollup/plugin-url": false,
    "rollup-plugin-postcss": false,
    "rollup-plugin-terser": false,
    "@rollup/plugin-node-resolve": (options) => {
      options.browser = false;
    },
    "@rollup/plugin-replace": (options) => {
      options["process.env.NODE_ENV"] = "production";
    },
  });

  config.plugins.unshift({
    name: "rollup-plugin-preserve-shebang",
    plugin: require("rollup-plugin-preserve-shebang"),
  });

  config.plugins.unshift({
    name: "rollup-plugin-node-globals",
    plugin: require("rollup-plugin-node-globals"),
  });

  config.plugins.unshift({
    name: "rollup-plugin-node-builtins",
    plugin: require("rollup-plugin-node-builtins"),
  });

  config.plugins.push({
    name: "rollup-plugin-command",
    plugin: require("rollup-plugin-command"),
    options: [
      async () => {
        await moveFileAsync(getIndexFile(pkg.bin), pkg.bin, true);
      },
    ],
  });

  return [[config, "node"]];
};

module.exports = node;
