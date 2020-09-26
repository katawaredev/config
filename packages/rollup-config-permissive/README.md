# rollup-config-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.
- Customizing the default configuration should be straight forward, avoiding any "black magic".

## Features

- Bring your own configiguration for tools like Babel, PostCSS, TypeScript.
- Easy customization.
- Creates multiple output formats for each entry (CJS, UMD, ESM, Node).
- Use `package.json` to determine package config and output formats
- Separate production and development builds.

## Supported languages and technologies

- JavaScript
- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- ~~[WASM](https://webassembly.org/)~~ [#574](https://github.com/rollup/plugins/issues/574)
- [PostCSS](https://jestjs.io/)

## Install

```shell
npx install-peerdeps --dev rollup-config-permissive
```

### Config

```js
// rollup.config.js
module.export = require("rollup-config-permissive").default;
```

## Package configuration

The configuration is done via `package.json`, or `rollup` CLI options

### Output format

```json
// package.json
{
  // CJS bundle
  "main": "dist/foo.js",
  // UMD bundle
  "unpkg:main": "dist/foo.umd.js",
  // ES Modules bundle
  "module": "dist/foo.m.js",
  // TypeScript typing definitions
  "types": "dist/foo.d.ts",
  // CSS styles
  "styles": "dist/foo.css"
}
```

### Externals

These dependencies won't be included in the final bundle and will require anyone using it to provide them.

```json
// package.json
{
  "peerDependencies": {
    "react": "^17.0.0"
  }
}
```

## Babel, TypeScript, PostCSS

These are supported out of the box, but require their respectable configuration files to be provided, with all plugin / presets / etc. If you don't want to write your own, you can use these:

- [babel-preset-permissive](https://github.com/katawaredev/config/tree/master/packages/babel-preset-permissive)
- [postcss-preset-permissive](https://github.com/katawaredev/config/tree/master/packages/postcss-preset-permissive)
- [typescript-config-permissive](https://github.com/katawaredev/config/tree/master/packages/typescript-config-permissive)

TypeScript also requires [tslib](https://github.com/Microsoft/tslib) to be installed as well.

## Customizing the default rollup configuration

**WARNING:** The content of `config` object might change between releases. Make sure to do proper checks before modifying!

```js
// rollup.config.js
const { createConfig } = require("rollup-config-permissive");

/**
 * Rollup configuration handler that is called multiple times, depending on the output formats specified in package.json
 * @param {Object} config Rollup configuration object
 * @param {"cjs" | "esm" | "umd" | "node" | "extra"} format Type of the bundle. "extra" is used to extract TypeScript typing definitions, css styles, and package info
 * @param {"production" | "development"} [environment] The type of build that is going to be produced (applicable only for cjs and umd)
 * @returns {Object | false} When false, that configuration won't be included
 **/
const configHandler = (config, format, environment) => {
  // Customize config here
  return config;
};

module.exports = createConfig(configHandler);
```

The `config` object is a standard Rollup configuration object, with one difference - `plugins` is array of JSON objects with the following structure:

```json
{
    // Name of the plugin. Only used here to help determine which rollup plugin this is.
    "name": string,
    // Function object to be called
    "plugin": function,
    // The arguments to be passed to `plugin`
    "options": Object || Array
}
```

This is used for easier searching, also to ease modifying of plugin's options.

### Customizing config with a helper function

```js
const { setPlugins } = require("rollup-config-permissive/utils");

const configHandler = (config, format, environment) => {
  // Don't want development bundles
  if (environment === "development") return false;

  setPlugins(config, {
    "@rollup/plugin-wasm": false, // remove wasm plugin
    "rollup-plugin-terser": (options) => {
      // Set Terser's `ecma` option to "2016"
      options.ecma = "2016";
    },
  });

  return config;
};

module.exports = createConfig(configHandler);
```

### Adding a plugin

```js
const { createConfig } = require("rollup-config-permissive");
const multiEntry = require("@rollup/plugin-multi-entry");

const configHandler = (config, format, environment) => {
  config.plugins.push({
    name: "@rollup/plugin-multi-entry",
    plugin: multiEntry,
    // Optional: set options for this plugin
    options: {
      exports: false,
    },
  });

  return config;
};

module.exports = createConfig(configHandler);
```

### Changing the input

```js
const { createConfig } = require("rollup-config-permissive");

const configHandler = (config, format, environment) => {
  config.input = "lib";

  return config;
};

module.exports = createConfig(configHandler);
```

## Absolute imports

Absolute imports from `src` are supported by default (this can break for TypeScript if it's set incorrectly).

## Custom options when creating config

`createConfig` accepts second parameter - an object where certain aspects of its behavior can be changed

```js
/** @typedef {Object} Options
 * @property {string} [cwd] current working directory where configurations will be searched
 * @property {string} [root] alternative search directory (for monorepositories)
 * @property {string} [babelConfigFile] custom location for babel config file
 * @property {string} [typescriptConfigFile] custom location for typescript config file
 * @property {string} [postcssConfigFile] custom location for postcss config file
 */
```

Example:

```js
const { createConfig } = require("rollup-config-permissive");

module.exports = createConfig(null, {
  cwd: __dirname, // /packages/foo
  root: path.resolve("../../"), // root of the monorepo
  postcssConfigFile: path.join("config", "postcss.js"), // custom location for postcss: /packages/foo/congig/postcss.js
});
```
