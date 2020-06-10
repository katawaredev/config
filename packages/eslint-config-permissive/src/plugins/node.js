module.exports = {
  plugins: ["node"],

  // https://github.com/mysticatea/eslint-plugin-node#-rules
  rules: {
    // Console is allowed in NodeJs
    "no-console": "off",

    // #region Possible errors
    // require error handling in callbacks
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
    // "node/handle-callback-err": "off",

    // ensure Node.js-style error-first callback pattern is followed
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
    // "node/no-callback-literal": "warn",

    // disallow the assignment to exports [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
    "node/no-exports-assign": "error",

    // disallow import declarations which import extraneous modules [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
    "node/no-extraneous-import": "error",

    // disallow require() expressions which import extraneous modules [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
    "node/no-extraneous-require": "error",

    // disallow import declarations which import non-existence modules [recommended] [import]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    // "node/no-missing-import": "off"

    // disallow require() expressions which import non-existence modules [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    "node/no-missing-require": "error",

    // disallow new operators with calls to require
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
    "node/no-new-require": "warn",

    // disallow string concatenation with __dirname and __filename
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
    "node/no-path-concat": "warn",

    // disallow the use of process.exit()
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
    "node/no-process-exit": "warn",

    // disallow bin files that npm ignores [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
    "node/no-unpublished-bin": "error",

    // disallow import declarations which import private modules [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    "node/no-unpublished-import": "error",

    // disallow require() expressions which import private modules [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    "node/no-unpublished-require": "error",

    // disallow unsupported ECMAScript built-ins on the specified version [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    "node/no-unsupported-features/es-builtins": "error",

    // disallow unsupported ECMAScript syntax on the specified version [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    "node/no-unsupported-features/es-syntax": "error",

    // disallow unsupported Node.js built-in APIs on the specified version [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    "node/no-unsupported-features/node-builtins": "error",

    // make process.exit() expressions the same code path as throw [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
    "node/process-exit-as-throw": "error",

    // suggest correct usage of shebang [recommended] [autofix]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    "node/shebang": "warn",
    // //#endregion Possible errors

    // //#region Best practices
    // disallow deprecated APIs [recommended]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    "node/no-deprecated-api": "warn",
    // //#endregion Best practices

    // #region Stylistic issues
    // require return statements after callbacks
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
    // "node/callback-return": "warn",

    // enforce either module.exports or exports
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    // "node/exports-style": "off",

    // enforce the style of file extensions in import declarations [autofix] [import]
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    "node/file-extension-in-import": [
      "warn",
      "always",
      {
        tryExtensions: [".js", ".json", ".node", ".ts", ".tsx", ".mjs"],
        // FIXME: https://github.com/Microsoft/TypeScript/issues/27481
        ".ts": "never",
        ".tsx": "never",
      },
    ],

    // require require() calls to be placed at top-level module scope
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
    // "node/global-require": "off",

    // disallow require calls to be mixed with regular variable declarations
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
    // "node/no-mixed-requires": "off",

    // disallow the use of process.env
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
    // "node/no-process-env": "off",

    // disallow specified modules when loaded by import declarations
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md
    // "node/no-restricted-import": "off",

    // disallow specified modules when loaded by require
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md
    // "node/no-restricted-require": "off",

    // disallow synchronous methods
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
    // "node/no-sync": "off",

    // enforce either Buffer or require("buffer").Buffer
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
    // "node/prefer-global/buffer": "warn",

    // enforce either console or require("console")
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
    // "node/prefer-global/console": "warn",

    // enforce either process or require("process")
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
    // "node/prefer-global/process": "warn",

    // enforce either TextDecoder or require("util").TextDecoder
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
    // "node/prefer-global/text-decoder": "warn",

    // enforce either TextEncoder or require("util").TextEncoder
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
    // "node/prefer-global/text-encoder": "warn",

    // enforce either URLSearchParams or require("url").URLSearchParams
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
    // "node/prefer-global/url-search-params": "warn",

    // enforce either URL or require("url").URL
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
    // "node/prefer-global/url": "warn",

    // enforce require("dns").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
    // "node/prefer-promises/dns": "warn",

    // enforce require("fs").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
    // "node/prefer-promises/fs": "warn",
    // #endregion Stylistic issues
  },

  overrides: [
    {
      files: ["*.md", "*.mdx"],
      rules: {
        "node/no-extraneous-import": "off",
        "node/no-extraneous-require": "off",
        "node/no-missing-require": "off",
        "node/no-unsupported-features/es-builtins": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-unsupported-features/node-builtins": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "node/no-unsupported-features/es-syntax": "off",
      },
    },
  ],
};
