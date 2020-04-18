module.exports = {
  "**/*.{js,jsx,ts,tsx,mjs}": () => "tsc -p tsconfig.json --noEmit",
  "*.{js,jsx,ts,tsx,mjs,md,mdx}": "eslint --fix",
  "*.{js,jsx,tsx,css,less,scss}": "stylelint --fix",
  "*.{md}": "markdownlint --fix",
  "*.{js,jsx,ts,tsx,mjs}": "jest --ci --bail --findRelatedTests",
  "*.{js,jsx,ts,tsx,mjs,vue,json,css,less,scss,md,mdx,graphql,yaml}":
    "prettier --write",
};
