const macros = [
  "@emotion/styled",
  "@lingui",
  "styled-components",
  "styled-jsx",
];

const restrictedImports = macros.reduce(
  (options, restricted) => {
    options.paths.push({
      name: restricted,
      message: `Prefer ${restricted}/macro`,
    });
    options.patterns.push(`!${restricted}/macro`);
    return options;
  },
  { paths: [], patterns: [] }
);

module.exports = {
  // disallow specified modules when loaded by `import`
  // https://eslint.org/docs/rules/no-restricted-imports
  "no-restricted-imports": ["warn", restrictedImports],
};
