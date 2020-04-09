module.exports = {
  rules: {
    // require error handling in callbacks
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
    "node/handle-callback-err": "warn",

    // ensure Node.js-style error-first callback pattern is followed
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
    "node/no-callback-literal": "warn",

    // require return statements after callbacks
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
    "node/callback-return": "warn",

    // disallow synchronous methods
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
    "node/no-sync": "warn",

    // enforce require("dns").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
    "node/prefer-promises/dns": "warn",

    // enforce require("fs").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
    "node/prefer-promises/fs": "warn",
  },
};
