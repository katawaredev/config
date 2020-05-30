/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").PackageJson} PackageJson
 * @typedef {import("../types").BabelConfig} BabelConfig
 * @typedef {import("../types").TsConfigJson} TsConfigJson
 * @typedef {import("../types").PostCssConfig} PostCssConfig
 */

const path = require("path");
const { cloneDeep } = require("lodash");
const { setPlugins } = require("../utils/plugin");

const { renameAsync, unlinkAsync } = require("../utils/file");

/**
 * Extract typings and css
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig | null} _babel
 * @param {TsConfigJson | null} _tsconfig
 * @param {PostCssConfig | null} _postcss
 * @param {string} cwd
 * @returns {[Config, "extra"][]}
 */
const extra = (defaultConfig, pkg, _babel, _tsconfig, _postcss, cwd) => {
  let outputDir = null;

  const hasTypings = Boolean(pkg.typings);
  if (hasTypings) outputDir = path.dirname(pkg.typings);

  const hasStyles = Boolean(pkg.style && _postcss);
  if (hasStyles && !outputDir) outputDir = path.dirname(pkg.style);

  if (!hasTypings && !hasStyles) return [];

  const config = cloneDeep(defaultConfig);
  config.output.sourcemap = true;
  delete config.output.file;
  config.output.dir = outputDir;

  setPlugins(config, {
    "rollup-plugin-terser": false,
    "rollup-plugin-size-snapshot": false,
    "@rollup/plugin-typescript": (options) => {
      if (hasTypings) {
        options.outDir = outputDir;
        options.declaration = true;
        options.declarationMap = true;
      }
    },
    "rollup-plugin-postcss":
      hasStyles &&
      ((options) => {
        options.extract = path.resolve(pkg.style);
        options.minimize = true;
        options.sourcemap = true;
      }),
  });

  config.plugins.push(
    {
      name: "rollup-plugin-visualizer",
      plugin: require("rollup-plugin-visualizer"),
      options: {
        filename: path.join(cwd, "stats.html"),
        template: "network",
        title: pkg.name,
      },
    },
    {
      name: "rollup-plugin-command",
      plugin: require("rollup-plugin-command"),
      options: [
        // Delete the output files since they are not needed
        async () => {
          await unlinkAsync(path.join(outputDir, "index.js"));
          await unlinkAsync(path.join(outputDir, "index.js.map"));
        },
        hasTypings &&
          (async () => {
            // Move typings to location pointed in package.json (if it doesn't match the default location)
            const typingsOutput = path.resolve(
              path.join(outputDir, "index.d.ts")
            );
            if (typingsOutput !== pkg.typings)
              await renameAsync(typingsOutput, pkg.typings);
          }),
      ].filter(Boolean),
    }
  );

  return [[config, "extra"]];
};

module.exports = extra;
