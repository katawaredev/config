/**
 * @typedef {import("../types").PackageJson} PackageJson
 * @typedef {import("../types").BabelConfig} BabelConfig
 * @typedef {import("../types").TsConfigJson} TsConfigJson
 * @typedef {import("../types").PostCssConfig} PostCssConfig
 * @typedef {import("../types").ExportFormat} ExportFormat
 * @typedef {import("../types").Environment} Environment
 */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const JSON5 = require("json5");
const merge = require("lodash/merge");

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const renameAsync = promisify(fs.rename);
const unlinkAsync = promisify(fs.unlink);
const statAsync = promisify(fs.stat);

/**
 * Get proper name for specified environment and output format
 * @param {string} fileName source file name
 * @param {ExportFormat} type type of export
 * @param {Environment} env export environment
 * @returns {string} correct filename for specified type and environemnt
 */
const getEnvironmentFileName = (fileName, type, env) => {
  if (fileName.includes(".production."))
    return fileName.replace(".production.", `.${type}.`);
  if (fileName.includes(".development."))
    return fileName.replace(".development.", `.${type}.`);

  const dotPosition = fileName.lastIndexOf(".");
  const envAppendix =
    fileName.endsWith(`.${type}`) || fileName.endsWith(`.${type}.js`)
      ? `.${env}`
      : `.${type}.${env}`;
  return `${fileName.slice(0, dotPosition)}${envAppendix}${fileName.slice(
    dotPosition
  )}`;
};

/**
 * Load files as json objects
 * @param {string} searchFile file to be loaded
 * @returns {Promise<Object.<string, any> | null>} file content
 */
const loadFile = async (searchFile) => {
  const ext = path.extname(searchFile);

  if (ext === ".js")
    try {
      return require(searchFile);
    } catch (e) {
      return null;
    }

  try {
    return JSON5.parse(await readFileAsync(searchFile, "utf8"));
  } catch (e) {
    return null;
  }
};

/**
 * Read package.json configuration
 * @param {string} cwd current search directory
 * @returns {Promise<PackageJson | null>} configuration object
 */
const readPackageJson = async (cwd) =>
  await loadFile(path.join(cwd, "package.json"));

/**
 * Read Babel configuration
 * @param {string | undefined} babelConfigFile custom location for babel config file
 * @param {PackageJson} pkg package.json contents
 * @param {string} cwd current search directory
 * @param {string} [root] alternative search directory (for monorepositories)
 * @returns {Promise<BabelConfig | null>} configuration object
 */
const readBabelConfig = async (babelConfigFile, pkg, cwd, root) => {
  if (babelConfigFile) return await loadFile(babelConfigFile);

  // Try load from package.json
  if (pkg.babel) return pkg.babel;

  const babelFiles = [
    ".babelrc",
    ".babelrc.js",
    ".babelrc.json",
    "babel.config.js",
    "babel.config.json",
  ];

  // Try load from config files
  for (const babelFile of babelFiles) {
    const babelConfig = await loadFile(path.join(cwd, babelFile));
    if (babelConfig) return babelConfig;
  }

  // Look if config is at root level
  if (root) {
    const rootPkg = await loadFile(path.join(root, "package.json"));
    if (rootPkg && rootPkg.babel) return rootPkg.babel;

    for (const babelFile of babelFiles) {
      const babelConfig = await loadFile(path.join(root, babelFile));
      if (babelConfig) return babelConfig;
    }
  }

  return null;
};

/**
 * Recursively load TypeScript configuration (from extends)
 * @param {string} tsconfigFile TypeScript config file location
 * @returns {Promise<TsConfigJson | null>} TypeScript configurtion
 */
const readTypeScriptConfigFile = async (tsconfigFile) => {
  let tsconfig = await loadFile(tsconfigFile);
  if (tsconfig) {
    if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};

    // Merge extends
    if (tsconfig.extends) {
      const extended = await readTypeScriptConfigFile(
        require.resolve(tsconfig.extends)
      );
      delete tsconfig.extends;
      merge(extended, tsconfig);
      tsconfig = merge(extended, tsconfig);
    }
  }
  return tsconfig;
};

/**
 * Read TypeScript configuration (merging extends)
 * @param {string | undefined} typescriptConfigFile custom location for typescript config file
 * @param {string} cwd current search directory
 * @param {string} [root] alternative search directory (for monorepositories)
 * @returns {Promise<TsConfigJson | null>} configuration object
 */
const readTypeScriptConfig = async (typescriptConfigFile, cwd, root) => {
  if (typescriptConfigFile)
    return await readTypeScriptConfigFile(typescriptConfigFile);

  const tsconfig = await readTypeScriptConfigFile(
    path.join(cwd, "tsconfig.json")
  );
  if (tsconfig) return tsconfig;

  if (root)
    return await readTypeScriptConfigFile(path.join(root, "tsconfig.json"));

  return null;
};

/**
 * Read PostCss configuration
 * @param {string | undefined} postcssConfigFile custom location for postcss config file
 * @param {string} cwd current search directory
 * @param {string} [root] alternative search directory (for monorepositories)
 * @returns {Promise<PostCssConfig | null>} configuration object
 */
const readPostCssConfig = async (postcssConfigFile, cwd, root) => {
  if (postcssConfigFile) return await loadFile(postcssConfigFile);

  const postcss = await loadFile(path.join(cwd, "postcss.config.js"));
  if (postcss) return postcss;

  if (root) return await loadFile(path.join(root, "postcss.config.js"));

  return null;
};

/**
 * Get index.js file for the same directory as target file
 * @param {string} file target file
 * @returns {string}
 */
const getIndexFile = (file) => path.join(path.dirname(file), "index.js");

/**
 * Check if file or directory exists
 * @param {string} path location of file or directory
 * @returns {boolean} location was found
 */
const exists = (path) => {
  try {
    // eslint-disable-next-line node/no-sync
    fs.statSync(path);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Check if file or directory exists
 * @param {string} path location of file or directory
 * @returns {Promise<boolean>} location was found
 */
const existsAsync = async (path) => {
  try {
    await statAsync(path);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 *
 * @param {string} sourceFile original file location
 * @param {string} destinationFile destination file location
 * @param {boolean} includeSourceMap file has sourcemap?
 */
const moveFileAsync = async (sourceFile, destinationFile, includeSourceMap) => {
  if (!existsAsync(sourceFile))
    throw new Error(`Unable to find file \`${sourceFile}\``);

  if (sourceFile === destinationFile) return;

  if (includeSourceMap) {
    const sourceFileMap = `${sourceFile}.map`;
    const destinationFileMap = `${destinationFile}.map`;
    if (await existsAsync(sourceFileMap)) {
      const content = await readFileAsync(sourceFile, "utf8");
      const replaced = content.replace(
        `//# sourceMappingURL=${path.basename(sourceFileMap)}`,
        `//# sourceMappingURL=${path.basename(destinationFileMap)}`
      );
      await renameAsync(sourceFileMap, destinationFileMap);
      await writeFileAsync(sourceFile, replaced);
    }
  }

  await renameAsync(sourceFile, destinationFile);
};

module.exports = {
  readPackageJson,
  readBabelConfig,
  readTypeScriptConfig,
  readPostCssConfig,
  renameAsync,
  unlinkAsync,
  getEnvironmentFileName,
  exists,
  readFileAsync,
  writeFileAsync,
  moveFileAsync,
  getIndexFile,
};
