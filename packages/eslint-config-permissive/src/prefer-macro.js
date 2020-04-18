const macros = [
  "@emotion/styled",
  "@lingui",
  "styled-components",
  "styled-jsx",
];

/**
 * @typedef {Object} RestrictedImport
 * @property {{name: string, message: string}[]} paths
 * @property {string[]} patterns
 */

const restrictedImports = macros.reduce(
  /**
   * @param {RestrictedImport} options
   * @param {string} restricted
   * @returns {RestrictedImport}
   */
  (options, restricted) => {
    options.paths.push({
      name: restricted,
      message: `Prefer ${restricted}/macro`,
    });
    options.patterns.push(`!${restricted}/macro`);
    return options;
  },
  {
    paths: [],
    patterns: [],
  }
);

module.exports = {
  // disallow specified modules when loaded by `import`
  // https://eslint.org/docs/rules/no-restricted-imports
  "no-restricted-imports": ["warn", restrictedImports],
};
