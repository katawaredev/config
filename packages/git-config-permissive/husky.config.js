/**
 * @typedef {Object} HuskyOptions
 * @property {boolean} lintStaged Run lint-staged checks
 * @property {boolean} commitlint Run commitlint checks
 */

/**
 * @param {HuskyOptions} options
 */
const createConfig = ({ lintStaged = true, commitlint = true }) => {
  const hooks = {};
  if (lintStaged) hooks["pre-commit"] = "lint-staged";

  if (commitlint) {
    hooks["prepare-commit-msg"] = "exec < /dev/tty && git cz --hook || true";
    hooks["commit-msg"] = "commitlint -E HUSKY_GIT_PARAMS";
  }

  return { hooks };
};

module.exports = createConfig;
