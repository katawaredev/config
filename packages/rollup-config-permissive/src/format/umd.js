/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").PackageJson} PackageJson
 * @typedef {import("../types").BabelConfig} BabelConfig
 * @typedef {import("../types").TsConfigJson} TsConfigJson
 * @typedef {import("../types").PostCssConfig} PostCssConfig
 * @typedef {import("../types").Environment} Environment
 */

const path = require("path");
const _ = require("lodash");
const { getEnvironmentFileName } = require("../utils/file");
const { setPlugins } = require("../utils/plugin");

/**
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig | null} _babel
 * @param {TsConfigJson | null} _tsconfig
 * @param {PostCssConfig | null} _postcss
 * @param {string} _cwd
 * @returns {[Config, "umd", Environment][]}
 */
const umd = (defaultConfig, pkg, _babel, _tsconfig, _postcss, _cwd) => {
  if (!pkg.unpkg) return [];

  const devOutput = getEnvironmentFileName(
    pkg["unpkg:main"],
    "umd",
    "development"
  );
  const prodOutput = pkg.unpkg;

  const config = _.cloneDeep(defaultConfig);
  delete config.external;
  config.output.format = "umd";

  config.output.globals = Object.keys(pkg.peerDependencies).reduce(
    (deps, dep) => {
      // @ts-expect-error
      if (dep === "jquery") deps.jquery = "$";
      switch (dep) {
        case "jquery":
          deps[dep] = "$";
          break;
        case "lodash":
          deps[dep] = "_";
          break;
        default:
          deps[dep] = _.capitalize(_.camelCase(dep));
          break;
      }
      return deps;
    },
    {}
  );

  // Generate safe package name
  config.output.name = _.camelCase(
    pkg.name
      .replace(/^@.*\//, "")
      .toLowerCase()
      .replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, "")
  );

  config.plugins.unshift({
    name: "rollup-plugin-peer-deps-external",
    plugin: require("rollup-plugin-peer-deps-external"),
  });

  return [
    [development(config, devOutput), "umd", "development"],
    [production(config, prodOutput), "umd", "production"],
  ];
};

/**
 * @param {Config} defaultConfig
 * @param {string} outputFile
 * @returns {Config}
 */
function development(defaultConfig, outputFile) {
  const config = _.cloneDeep(defaultConfig);
  config.output.file = outputFile;
  config.output.sourcemap = "inline";

  setPlugins(config, {
    "rollup-plugin-terser": false,
    "@rollup/plugin-replace": (options) => {
      options["process.env.NODE_ENV"] = JSON.stringify("development");
    },
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
  const config = _.cloneDeep(defaultConfig);
  config.output.file = outputFile;

  const outputDir = path.dirname(outputFile);

  config.plugins.unshift({
    name: "rollup-plugin-license",
    plugin: require("rollup-plugin-license"),
    options: {
      sourcemap: true,
      banner: {
        commentStyle: "ignored",
        content: {
          file: path.join(outputDir, `${config.output.name}-LICENSE`),
        },
      },
      thirdParty: {
        includePrivate: true,
        allow: "(MIT OR Apache-2.0)",
        output: {
          file: path.join(outputDir, `${config.output.name}-dependencies.txt`),
        },
      },
    },
  });

  return config;
}

module.exports = umd;
