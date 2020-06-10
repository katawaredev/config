/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").PackageJson} PackageJson
 * @typedef {import("../types").BabelConfig} BabelConfig
 * @typedef {import("../types").TsConfigJson} TsConfigJson
 * @typedef {import("../types").PostCssConfig} PostCssConfig
 */

const cloneDeep = require("lodash/cloneDeep");
const { setPlugins } = require("../utils/plugin");

/**
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig | null} _babel
 * @param {TsConfigJson | null} _tsconfig
 * @param {PostCssConfig | null} _postcss
 * @param {string} _cwd
 * @returns {[Config, "esm"][]}
 */
const esm = (defaultConfig, pkg, _babel, _tsconfig, _postcss, _cwd) => {
  if (!pkg.module) return [];

  const config = cloneDeep(defaultConfig);
  config.output.format = "es";
  config.output.exports = "named";
  config.output.file = pkg.module;

  setPlugins(config, {
    "@rollup/plugin-replace": false,
    "rollup-plugin-terser": (options) => {
      options.toplevel = true;
    },
  });

  return [[config, "esm"]];
};

module.exports = esm;
