const { DEFAULT_EXTENSIONS } = require("@babel/core");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const extensions = [
  ...DEFAULT_EXTENSIONS,
  ".node",
  ".wasm",
  ".json",
  ".yaml",
  ".ts",
  ".tsx",
];

module.exports = {
  // Either a function that takes an id and returns true (external) or false (not external), or an Array of module IDs that should remain external to the bundle.
  // https://rollupjs.org/guide/en/#external
  // external: undefined,

  // The bundle's entry point(s) (e.g. your main.js or app.js or index.js).
  // https://rollupjs.org/guide/en/#input
  input: "src",

  output: {
    // The directory in which all generated chunks are placed. This option is required if more than one chunk is generated.
    // https://rollupjs.org/guide/en/#outputdir
    // dir: undefined,

    // The file to write to. Will also be used to generate sourcemaps, if applicable. Can only be used if not more than one chunk is generated.
    // https://rollupjs.org/guide/en/#outputfile
    // file: undefined,

    // Specifies the format of the generated bundle.
    // https://rollupjs.org/guide/en/#outputformat
    // format: undefined,

    // Specifies id: variableName pairs necessary for external imports in umd/iife bundles.
    // https://rollupjs.org/guide/en/#outputglobals
    // globals: undefined,

    // Necessary for iife/umd bundles that exports values in which case it is the global variable name representing your bundle.
    // https://rollupjs.org/guide/en/#outputname
    // name: undefined

    // Adds a plugin just to this output.
    // https://rollupjs.org/guide/en/#outputplugins
    // plugins: [],

    // #region Advanced functionality
    // The pattern to use for naming custom emitted assets to include in the build output.
    // https://rollupjs.org/guide/en/#outputassetfilenames
    // assetFileNames: "assets/[name]-[hash][extname]",

    // A string to prepend/append to the bundle.
    // https://rollupjs.org/guide/en/#outputbanneroutputfooter
    // banner: undefined,
    // footer: undefined,

    // The pattern to use for naming shared chunks created when code-splitting.
    // https://rollupjs.org/guide/en/#outputchunkfilenames
    // chunkFileNames: "[name]-[hash].js",

    // This will minify the wrapper code generated by rollup. Useful when bundling pre-minified code.
    // https://rollupjs.org/guide/en/#outputcompact
    // compact: false,

    //  The pattern to use for chunks created from entry points.
    // https://rollupjs.org/guide/en/#outputentryfilenames
    // entryFileNames: "[name].js",

    // Whether or not to extend the global variable defined by the name option in umd or iife formats.
    // https://rollupjs.org/guide/en/#outputextend
    // extend: false,

    // When creating multiple chunks, transitive imports of entry chunks will be added as empty imports to the entry chunks.
    // https://rollupjs.org/guide/en/#outputhoisttransitiveimports
    // hoistTransitiveImports: true,

    // Whether or not to add an 'interop block'.
    // https://rollupjs.org/guide/en/#outputinterop
    // interop: true,

    // Similar to output.banner/output.footer, except that the code goes inside any format-specific wrapper.
    // https://rollupjs.org/guide/en/#outputintrooutputoutro
    // intro: undefined,
    // outro: undefined,

    // https://survivejs.com/webpack/building/source-maps/
    // https://rollupjs.org/guide/en/#outputsourcemap
    sourcemap: true,

    // If true, the actual code of the sources will not be added to the sourcemaps making them considerably smaller.
    // https://rollupjs.org/guide/en/#outputsourcemapexcludesources
    // sourcemapExcludeSources: false,

    // The location of the generated bundle. If this is an absolute path, all the sources paths in the sourcemap will be relative to it.
    // https://rollupjs.org/guide/en/#outputsourcemapfile
    // sourcemapFile: undefined,

    // A transformation to apply to each path in a sourcemap. For instance the following will change all paths to be relative to the src directory.
    // https://rollupjs.org/guide/en/#outputsourcemappathtransform
    // sourcemapPathTransform: undefined,
    // #endregion Advanced functionality

    // #region Danger zone
    // https://rollupjs.org/guide/en/#outputamd
    // amd: undefined,

    // https://rollupjs.org/guide/en/#outputesmodule
    // Whether or not to add a __esModule: true property when generating exports for non-ES formats.
    // esModule: true,

    // What export mode to use. Defaults to auto, which guesses your intentions based on what the input module exports
    // https://rollupjs.org/guide/en/#outputexports
    // exports: "auto",

    // When set to false, Rollup will not generate code to support live bindings for external imports but instead assume that exports do not change over time.
    // https://rollupjs.org/guide/en/#outputexternallivebindings
    // externalLiveBindings: true,

    // Whether to Object.freeze() namespace import objects (i.e. import * as namespaceImportObject from...) that are accessed dynamically.
    // https://rollupjs.org/guide/en/#outputfreeze
    freeze: false,

    // The indent string to use, for formats that require code to be indented (amd, iife, umd, system).
    // https://rollupjs.org/guide/en/#outputindent
    // indent: true,

    // Whether to add spec compliant .toString() tags to namespace objects.
    // https://rollupjs.org/guide/en/#outputnamespacetostringtag
    // namespaceToStringTag: false,

    // This will generate an additional noConflict export to UMD bundles.
    // https://rollupjs.org/guide/en/#outputnoconflict
    // noConflict: false,

    // Generate const declarations for exports rather than var declarations.
    // https://rollupjs.org/guide/en/#outputpreferconst
    // preferConst: false,

    // Whether to include the 'use strict' pragma at the top of generated non-ES bundles.
    // https://rollupjs.org/guide/en/#outputstrict
    // strict: true,
    // #endregion Danger zone
  },

  // Change the behaviour of Rollup at key points in the bundling process.
  // https://rollupjs.org/guide/en/#plugins
  plugins: [
    {
      name: "rollup-plugin-peer-deps-external",
      plugin: require("rollup-plugin-peer-deps-external"),
    },
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    {
      name: "@rollup/plugin-node-resolve",
      plugin: nodeResolve,
      options: {
        mainFields: ["module", "jsnext", "main"],
        browser: true,
        extensions,
      },
    },
    // https://github.com/rollup/plugins/tree/master/packages/commonjs/
    {
      name: "@rollup/plugin-commonjs",
      plugin: require("@rollup/plugin-commonjs"),
      options: {
        // use a regex to make sure to include eventual hoisted packages
        include: /\/node_modules\//,
        extensions: [".js", ".ts"],
      },
    },
    // https://github.com/rollup/plugins/tree/master/packages/json
    {
      name: "@rollup/plugin-json",
      plugin: require("@rollup/plugin-json"),
    },
    // https://github.com/rollup/plugins/tree/master/packages/yaml
    {
      name: "@rollup/plugin-yaml",
      plugin: require("@rollup/plugin-yaml"),
    },
    {
      // https://github.com/rollup/plugins/tree/master/packages/typescript
      name: "@rollup/plugin-typescript",
      plugin: require("@rollup/plugin-typescript"),
      options: {
        // TS -> esnext, then leave the rest to babel-preset-env
        target: "esnext",
        module: "esnext",
        sourceMap: true,
        declaration: false,
        declarationMap: false,
        jsx: "react",
        exclude: [
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
    },
    // https://github.com/rollup/plugins/tree/master/packages/babel
    {
      name: "@rollup/plugin-babel",
      plugin: require("@rollup/plugin-babel").default,
      options: {
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [...DEFAULT_EXTENSIONS, ".node", ".ts", ".tsx"],
      },
    },
    // https://github.com/rollup/plugins/tree/master/packages/wasm
    {
      name: "@rollup/plugin-wasm",
      plugin: require("@rollup/plugin-wasm").default,
    },
    // https://github.com/rollup/plugins/tree/master/packages/replace
    {
      name: "@rollup/plugin-replace",
      plugin: require("@rollup/plugin-replace"),
      options: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    },
    // https://github.com/rollup/plugins/tree/master/packages/url
    {
      name: "@rollup/plugin-url",
      plugin: require("@rollup/plugin-url"),
      options: {
        include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif", "**/*.bmp"],
      },
    },
    // https://github.com/egoist/rollup-plugin-postcss
    {
      name: "rollup-plugin-postcss",
      plugin: require("rollup-plugin-postcss"),
      options: {
        inject: false,
      },
    },
    // https://github.com/jkuri/rollup-plugin-progress
    {
      name: "rollup-plugin-progress",
      plugin: require("rollup-plugin-progress"),
    },
    // https://github.com/TrySound/rollup-plugin-size-snapshot
    {
      name: "rollup-plugin-size-snapshot",
      plugin: require("rollup-plugin-size-snapshot").sizeSnapshot,
    },
    // https://github.com/TrySound/rollup-plugin-terser
    {
      name: "rollup-plugin-terser",
      plugin: require("rollup-plugin-terser").terser,
      options: {
        compress: {
          // prevent Infinity from being compressed into 1/0, which may cause performance issues on Chrome.
          keep_infinity: true,
          passes: 10,
        },
      },
    },
  ],

  // These options only take effect when running Rollup with the --watch flag, or using rollup.watch.
  // https://rollupjs.org/guide/en/#watch-options
  watch: {
    // https://rollupjs.org/guide/en/#watchchokidar
    // An optional object of watch options that will be passed to the bundled chokidar instance.
    // See more at: https://github.com/paulmillr/chokidar#api
    // chokidar: undefined,

    // Whether to clear the screen when a rebuild is triggered.
    // https://rollupjs.org/guide/en/#watchclearscreen
    // clearScreen: true,

    // Whether to skip the bundle.write() step when a rebuild is triggered.
    // https://rollupjs.org/guide/en/#watchskipwrite
    // skipWrite: false,

    // Prevent files from being watched
    // https://rollupjs.org/guide/en/#watchexclude
    exclude: "node_modules/**",

    // Limit the file-watching to certain files.
    // https://rollupjs.org/guide/en/#watchinclude
    include: "src/**",
  },

  // #region Advanced functionality
  // Speed up subsequent builds in watch mode
  // https://rollupjs.org/guide/en/#cache
  // cache: true,

  // This will inline dynamic imports instead of creating new chunks to create a single bundle. Only possible if a single input is provided.
  // https://rollupjs.org/guide/en/#inlinedynamicimports
  // inlineDynamicImports: false,

  // Allows the creation of custom shared common chunks.
  // https://rollupjs.org/guide/en/#manualchunks
  // manualChunks: {},

  // A function that will intercept warning messages.
  // https://rollupjs.org/guide/en/#onwarn
  // onwarn: undefined,

  // Instead of creating as few chunks as possible, this mode will create separate chunks for all modules using the original module names as file names.
  // https://rollupjs.org/guide/en/#preservemodules
  // preserveModules: false,

  // A directory path to input modules that should be stripped away from output.dir path while output.preserveModules is true.
  // https://rollupjs.org/guide/en/#outputpreservemodulesroot
  // preserveModulesRoot: undefined,

  // When this flag is enabled, Rollup will throw an error instead of showing a warning when a deprecated feature is used.
  // https://rollupjs.org/guide/en/#strictdeprecations
  // strictDeprecations: false,
  // #endregion Advanced functionality

  // #region Danger zone
  // Any options that should be passed through to Acorn's parse function, such as `allowReserved: true`.
  // See more: https://github.com/acornjs/acorn/tree/master/acorn#interface
  // https://rollupjs.org/guide/en/#acorn
  // acorn: undefined,

  // A single plugin or an array of plugins to be injected into Acorn.
  // https://rollupjs.org/guide/en/#acorninjectplugins
  // acornInjectPlugins: [],

  // By default, the context of a module – i.e., the value of this at the top level – is undefined.
  // https://rollupjs.org/guide/en/#context
  // context: undefined,

  // Same as context, but per-module.
  // https://rollupjs.org/guide/en/#modulecontext
  // moduleContext: undefined,

  // When set to false, symbolic links are followed when resolving a file.
  // https://rollupjs.org/guide/en/#preservesymlinks
  // preserveSymlinks: false,

  // If this option is provided, bundling will not fail if bindings are imported from a file that does not define these bindings.
  // https://rollupjs.org/guide/en/#shimmissingexports
  // shimMissingExports: false,

  // Whether or not to apply tree-shaking and to fine-tune the tree-shaking process.
  // https://rollupjs.org/guide/en/#treeshake
  // treeshake: true,
  // #endregion Danger zone

  // #region Experimental options
  // Determines after how many runs cached assets that are no longer used by plugins should be removed.
  // https://rollupjs.org/guide/en/#experimentalcacheexpiry
  // experimentalCacheExpiry: 10,

  // Whether to collect performance timings.
  // https://rollupjs.org/guide/en/#perf
  // perf: false,
  // #endregion Experimental options
};
