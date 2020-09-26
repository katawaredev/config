/**
 * @typedef {import("../types").Config} Config
 * @typedef {import("../types").PackageJson} PackageJson
 * @typedef {import("../types").BabelConfig} BabelConfig
 * @typedef {import("../types").TsConfigJson} TsConfigJson
 * @typedef {import("../types").PostCssConfig} PostCssConfig
 */

const path = require("path");
const cloneDeep = require("lodash/cloneDeep");
const { setPlugins } = require("../utils/plugin");
const { unlinkAsync, moveFileAsync } = require("../utils/file");

/**
 * Extract typings and css
 * @param {Config} defaultConfig
 * @param {PackageJson} pkg
 * @param {BabelConfig | null} _babel
 * @param {TsConfigJson | null} _tsconfig
 * @param {PostCssConfig | null} postcss
 * @param {string} cwd
 * @returns {[Config, "extra"][]}
 */
const extra = (defaultConfig, pkg, _babel, _tsconfig, postcss, cwd) => {
  const target = pkg.typings || pkg.style;
  if (!target) return [];

  const config = cloneDeep(defaultConfig);
  config.output.sourcemap = true;
  delete config.output.file;
  config.output.dir = path.dirname(target);

  setPlugins(config, {
    "rollup-plugin-terser": false,
    "rollup-plugin-size-snapshot": false,
    // FIXME: https://github.com/rollup/plugins/issues/394
    "@rollup/plugin-typescript": false,
    // "@rollup/plugin-typescript": (options) => {
    //   options.outDir = config.output.dir;
    //   if (pkg.typings) {
    //     options.declaration = true;
    //     options.declarationMap = true;
    //   }
    // }
  });

  if (pkg.style && postcss)
    setPlugins(config, {
      "rollup-plugin-postcss": (options) => {
        options.extract = path.resolve(pkg.style);
        options.minimize = true;
        options.sourcemap = true;
      },
    });

  config.plugins.push(
    // FIXME: Remove this plugin
    {
      name: "rollup-plugin-typescript2",
      plugin: require("rollup-plugin-typescript2"),
      options: {
        cwd,
        check: false,
        tsconfigDefaults: {
          include: ["*.js+(|x)", "**/*.js+(|x)"],
          exclude: [
            "node_modules",
            // all test files
            "**/__tests__/**/*.ts",
            "**/__tests__/**/*.tsx",
            "**/__tests__/**/*.js",
            "**/__tests__/**/*.jsx",
            "**/*.spec.ts",
            "**/*.test.ts",
            "**/*.spec.tsx",
            "**/*.test.tsx",
            "**/*.spec.js",
            "**/*.test.js",
            "**/*.spec.jsx",
            "**/*.test.jsx",
          ],
        },
        tsconfigOverride: {
          compilerOptions: {
            // TS -> esnext, then leave the rest to babel-preset-env
            target: "esnext",
            module: "esnext",
            sourceMap: true,
            jsx: "react-jsx",
            incremental: false,
            declaration: true,
            declarationMap: true,
            strict: false,
          },
        },
      },
    },
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
          await unlinkAsync(path.join(config.output.dir, "index.js"));
          await unlinkAsync(path.join(config.output.dir, "index.js.map"));
        },
        async () => {
          if (!pkg.typings) return;

          await moveFileAsync(
            path.join(config.output.dir, "index.d.ts"),
            pkg.typings,
            true
          );
        },
      ],
    }
  );

  return [[config, "extra"]];
};

module.exports = extra;
