/**
 * @typedef {import("rollup").RollupOptions} RollupOptions
 * @typedef {import("./types").Config} Config
 * @typedef {import("./types").PackageJson} PackageJson
 * @typedef {import("./types").BabelConfig} BabelConfig
 * @typedef {import("./types").TsConfigJson} TsConfigJson
 * @typedef {import("./types").PostCssConfig} PostCssConfig
 * @typedef {import("./types").ExportFormat} ExportFormat
 * @typedef {import("./types").Environment} Environment
 *
 * @callback modifyConfigCallback
 * @param {Config} config
 * @param {ExportFormat | "extra"} format
 * @param {Environment | undefined} environment
 * @returns {*}
 *
 * @typedef {Object} Options
 * @property {string} [cwd] - current working directory
 * @property {string} [root] - alternative search directory (for monorepositories)
 * @property {string} [babelConfigFile] - custom location for babel config file
 * @property {string} [typescriptConfigFile] - custom location for typescript config file
 * @property {string} [postcssConfigFile] - custom location for postcss config file
 */

const path = require("path");
const capitalize = require("lodash/capitalize");
const camelCase = require("lodash/camelCase");
const rollupConfig = require("./rollup.config");
const {
  readPackageJson,
  readBabelConfig,
  readTypeScriptConfig,
  readPostCssConfig,
} = require("./utils/file");
const { setPlugins, executePlugins } = require("./utils/plugin");

const extra = require("./format/extra");
const esm = require("./format/esm");
const cjs = require("./format/cjs");
const umd = require("./format/umd");
const node = require("./format/node");

/**
 * @param {modifyConfigCallback | null} [handler]
 * @param {Options} [options]
 * @returns {Promise<RollupOptions[]>}
 */
const createRollupConfig = async (
  handler,
  { cwd, root, babelConfigFile, typescriptConfigFile, postcssConfigFile } = {}
) => {
  // If different directory is specified, move there
  let currentDir = null;
  if (cwd) {
    currentDir = process.cwd();
    process.chdir(cwd);
  } else cwd = process.cwd();

  const pkg = await readPackageJson(cwd);
  if (!pkg) throw new Error("Unable to resolve package.json!");
  const babel = await readBabelConfig(babelConfigFile, pkg, cwd, root);
  const tsconfig = await readTypeScriptConfig(typescriptConfigFile, cwd, root);
  const postcss = await readPostCssConfig(postcssConfigFile, cwd, root);

  const defaultConfig = initialize(
    // @ts-expect-error TS2345: Argument of type X is not assignable to parameter of type Y
    rollupConfig,
    pkg,
    babel,
    tsconfig,
    postcss,
    cwd
  );

  const config = [
    ...extra(defaultConfig, pkg, babel, tsconfig, postcss, cwd),
    ...esm(defaultConfig, pkg, babel, tsconfig, postcss, cwd),
    ...cjs(defaultConfig, pkg, babel, tsconfig, postcss, cwd),
    ...umd(defaultConfig, pkg, babel, tsconfig, postcss, cwd),
    ...node(defaultConfig, pkg, babel, tsconfig, postcss, cwd),
  ]
    // Execute user handlers
    .map(([config, format, environment]) =>
      handler ? handler(config, format, environment) : config
    )
    // Discard rejected configs
    .filter(Boolean)
    // Transform raw config object to rollup config
    .map(executePlugins);

  if (currentDir) process.chdir(currentDir); // restore current dir

  return config;
};

/**
 * Set rollup configuration according to user configuration
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig} babel
 * @param {TsConfigJson} tsconfig
 * @param {PostCssConfig} postcss
 * @param {string} cwd
 */
function initialize(defaultConfig, pkg, babel, tsconfig, postcss, cwd) {
  const hasBabelRuntime =
    pkg.dependencies["@babel/runtime"] || pkg.devDependencies["@babel/runtime"];

  const peerDependencies = pkg.peerDependencies || {};

  const compilerOptions = tsconfig ? tsconfig.compilerOptions : {};

  // Handle absolute imports for TypeScript
  if (
    !compilerOptions.baseUrl ||
    path.resolve(compilerOptions.baseUrl) === cwd
  ) {
    compilerOptions.baseUrl = cwd;
    compilerOptions.rootDir = path.resolve(cwd, "src");

    if (!compilerOptions.paths) compilerOptions.paths = {};
    if (!compilerOptions.paths["*"]) compilerOptions.paths["*"] = [];
    if (!compilerOptions.paths["*"].includes("src/*"))
      compilerOptions.paths["*"].push("src/*");
    if (!compilerOptions.paths["*"].includes("node_modules/*"))
      compilerOptions.paths["*"].push("node_modules/*");
  }

  setPlugins(defaultConfig, {
    "@rollup/plugin-typescript": (options) => {
      options.baseUrl = compilerOptions.baseUrl;
      if (compilerOptions.rootDir) options.rootDir = compilerOptions.rootDir;
      if (compilerOptions.paths) options.paths = compilerOptions.paths;
      if (Array.isArray(compilerOptions.exclude))
        options.exclude = [...options.exclude, ...compilerOptions.exclude];
    },
    "@rollup/plugin-babel": (options) => {
      if (!babel) {
        console.warn("Babel configuration not found, babel plugin disabled.");
        return false;
      }
      if (hasBabelRuntime) options.babelHelpers = "runtime";
    },
    "rollup-plugin-postcss":
      // don't include PostCSS if no config was found
      (options) => {
        if (!postcss) {
          console.warn(
            "PostCSS configuration not found, postcss plugin disabled."
          );
          return false;
        }
        // If styles are not extracted, inject them instead
        options.inject = !pkg.typings;
      },
  });

  if (defaultConfig.output)
    // @ts-expect-error TS2339: Property X does not exist on type Y
    defaultConfig.output.globals = Object.keys(peerDependencies).reduce(
      (deps, dep) => {
        deps[dep] = capitalize(camelCase(dep));
        return deps;
      },
      {}
    );

  return defaultConfig;
}

module.exports = createRollupConfig;
