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
const capitalize = require("lodash/capitalize");
const camelCase = require("lodash/camelCase");
const { getEnvironmentFileName, exists } = require("../utils/file");
const { setPlugins, rewriteOutputPlugin } = require("../utils/plugin");

/**
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig | null} _babel
 * @param {TsConfigJson | null} _tsconfig
 * @param {PostCssConfig | null} _postcss
 * @param {string} cwd
 * @returns {[Config, "umd", Environment][]}
 */
const umd = (defaultConfig, pkg, _babel, _tsconfig, _postcss, cwd) => {
  if (!pkg["unpkg:main"]) return [];

  const devOutput = getEnvironmentFileName(
    pkg["unpkg:main"],
    "umd",
    "development"
  );
  const prodOutput = pkg["unpkg:main"];

  const config = cloneDeep(defaultConfig);
  delete config.external;
  config.output.format = "umd";

  config.output.globals = Object.keys(pkg.peerDependencies).reduce(
    addGlobals,
    {}
  );

  // Generate safe package name
  config.output.name = camelCase(
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
    [production(config, prodOutput, cwd), "umd", "production"],
  ];
};

/**
 * @param {Config} defaultConfig
 * @param {string} outputFile
 * @returns {Config}
 */
function development(defaultConfig, outputFile) {
  const config = cloneDeep(defaultConfig);
  config.output.dir = path.dirname(outputFile);
  config.output.sourcemap = "inline";

  setPlugins(config, {
    "rollup-plugin-terser": false,
    "@rollup/plugin-replace": (options) => {
      options["process.env.NODE_ENV"] = JSON.stringify("development");
    },
    "@rollup/plugin-typescript": (options) => {
      options.outDir = path.dirname(outputFile);
    },
    "rollup-plugin-postcss": (options) => {
      options.inject = true;
      options.sourcemap = "inline";
    },
  });

  config.plugins.push(rewriteOutputPlugin(outputFile, false));

  return config;
}

/**
 * @param {Config} defaultConfig
 * @param {string} outputFile
 * @param {string} cwd
 * @returns {Config}
 */
function production(defaultConfig, outputFile, cwd) {
  const config = cloneDeep(defaultConfig);
  config.output.dir = path.dirname(outputFile);

  const outputDir = path.dirname(outputFile);

  const license = path.join(cwd, "LICENSE");
  const banner = exists(license)
    ? {
        commentStyle: "ignored",
        content: {
          file: license,
        },
      }
    : `Bundle of <%= pkg.name %>
Generated: <%= moment().format('YYYY-MM-DD') %>
Version: <%= pkg.version %>
Dependencies:
<% _.forEach(dependencies, function (dependency) { %>
  <%= dependency.name %> -- <%= dependency.version %>
<% }) %>`;

  config.plugins.unshift({
    name: "rollup-plugin-license",
    plugin: require("rollup-plugin-license"),
    options: {
      sourcemap: true,
      banner,
      thirdParty: {
        includePrivate: true,
        allow: "(MIT OR Apache-2.0)",
        output: {
          file: path.join(outputDir, `${config.output.name}-dependencies.txt`),
        },
      },
    },
  });

  setPlugins(config, {
    "@rollup/plugin-typescript": (options) => {
      options.outDir = config.output.dir;
    },
  });

  config.plugins.push(rewriteOutputPlugin(outputFile, true));

  return config;
}

/**
 *
 * @param {Object<string, string>} deps
 * @param {string} dep
 * @returns {Object<string, string>}
 */
function addGlobals(deps, dep) {
  if (dep === "jquery") deps.jquery = "$";
  switch (dep) {
    case "jquery":
      deps[dep] = "$";
      break;
    case "lodash":
      deps[dep] = "_";
      break;
    default:
      deps[dep] = capitalize(camelCase(dep));
      break;
  }
  return deps;
}

module.exports = umd;
