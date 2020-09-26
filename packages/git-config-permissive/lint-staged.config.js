/**
 * @typedef {Object} LintStagedOptions
 * @property {boolean} tsc Run tsc checks
 * @property {boolean} eslint Run eslint checks
 * @property {boolean} typescript Check typescript files with eslint
 * @property {boolean} markdown Check markdown files with eslint
 * @property {boolean} stylelint Run stylelint checks
 * @property {boolean} markdownlint Run markdownlint checks
 * @property {boolean} jest Run jest testing
 * @property {boolean} prettier Format with prettier
 */

/**
 * @param {LintStagedOptions} options
 */
const createConfig = ({
  tsc = true,
  eslint = true,
  typescript = true,
  markdown = true,
  stylelint = true,
  markdownlint = true,
  jest = true,
  prettier = true,
}) => {
  const rules = {};
  if (tsc)
    rules["**/*.{js,jsx,ts,tsx,mjs}"] = () => "tsc -p tsconfig.json --noEmit";

  if (eslint) {
    const extensions = ["js", "jsx", "mjs"];
    if (typescript) extensions.push("ts", "tsx");
    if (markdown) extensions.push("md", "mdx");
    rules[`*.{${extensions.join(",")}}`] = "eslint --fix";
  }

  if (stylelint) rules["*.{js,jsx,tsx,css,less,scss}"] = "stylelint --fix";

  if (markdownlint) rules["*.md"] = "markdownlint --fix";

  if (jest)
    rules["*.{js,jsx,ts,tsx,mjs}"] = "jest --ci --bail --findRelatedTests";

  if (prettier)
    rules["*.{js,jsx,ts,tsx,mjs,vue,json,css,less,scss,md,mdx,graphql,yaml}"] =
      "prettier --write";

  return rules;
};

module.exports = createConfig;
