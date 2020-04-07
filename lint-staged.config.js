module.exports = {
  "*.{js,jsx,ts,tsx,mjs,md,mdx}": "eslint --fix",
  "*.{js,jsx,tsx,css,less,scss}": "stylelint --fix",
  "*.{md}": "markdownlint --fix",
  "*.{js,jsx,ts,tsx,mjs,vue,json,css,less,scss,md,mdx,graphql,yaml}":
    "prettier --write",
};
