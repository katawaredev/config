/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").PackageJson} PackageJson
 * @typedef {import("../types").BabelConfig} BabelConfig
 * @typedef {import("../types").TsConfigJson} TsConfigJson
 * @typedef {import("../types").PostCssConfig} PostCssConfig
 * @typedef {import("../types").Environment} Environment
 */

const { cloneDeep } = require("lodash");
const { getEnvironmentFileName } = require("../utils/file");
const { setPlugins } = require("../utils/plugin");

/**
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig | null} _babel
 * @param {TsConfigJson | null} _tsconfig
 * @param {PostCssConfig | null} _postcss
 * @param {string} _cwd
 * @returns {[Config, "cjs", Environment | undefined][]}
 */
const cjs = (defaultConfig, pkg, _babel, _tsconfig, _postcss, _cwd) => {
  if (!pkg.main) return [];

  const devOutput = getEnvironmentFileName(pkg.main, "cjs", "development");
  const prodOutput = getEnvironmentFileName(pkg.main, "cjs", "production");

  const config = cloneDeep(defaultConfig);
  config.output.format = "cjs";

  return [
    [entry(pkg.main, devOutput, prodOutput), "cjs", undefined],
    [development(config, devOutput), "cjs", "development"],
    [production(config, prodOutput), "cjs", "production"],
  ];
};

/**
 *
 * @param {string} outputFile
 * @param {string} devOutput
 * @param {string} prodOutput
 * @returns {Config}
 *
 */
function entry(outputFile, devOutput, prodOutput) {
  const config = {
    input: "entry",
    output: {
      file: outputFile,
    },
    plugins: [
      {
        name: "@rollup/plugin-virtual",
        plugin: require("@rollup/plugin-virtual"),
        options: {
          entry: `
            'use strict';

            module.exports = process.env.NODE_ENV === 'production'
            ? require('${prodOutput}')
            : require('${devOutput}');
          `,
        },
      },
      {
        name: "rollup-plugin-terser",
        plugin: require("rollup-plugin-terser").terser,
      },
    ],
  };

  // @ts-ignore
  return config;
}

/**
 * @param {Config} defaultConfig
 * @param {string} outputFile
 * @returns {Config}
 */
function development(defaultConfig, outputFile) {
  const config = cloneDeep(defaultConfig);
  config.output.file = outputFile;
  config.output.sourcemap = "inline";

  setPlugins(config, {
    "rollup-plugin-terser": false,
    "@rollup/plugin-replace": false,
    "rollup-plugin-postcss": (options) => {
      options.inject = true;
      options.sourcemap = "inline";
    },
  });

  return config;
}

/**
 * @param {Config} defaultConfig
 * @param {string} outputFile
 * @returns {Config}
 */
function production(defaultConfig, outputFile) {
  const config = cloneDeep(defaultConfig);
  config.output.file = outputFile;

  setPlugins(config, {
    "rollup-plugin-terser": (options) => {
      options.toplevel = true;
    },
  });

  return config;
}

module.exports = cjs;
