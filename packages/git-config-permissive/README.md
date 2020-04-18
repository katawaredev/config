# git-config-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.
- All formatting and code quality checkings should be automatically hanlded by the tooling.

## Supported technologies

### Continuous integration

- [Husky](https://github.com/typicode/husky)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Markdownlint](https://github.com/DavidAnson/markdownlint)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)

### Git

- [Commitlint](https://commitlint.js.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Conventional commits](https://www.conventionalcommits.org/)

## Install

```shell
npx install-peerdeps --dev git-config-permissive
```

Config:

```js
// husky.config.js
module.exports = require("git-config-permissive/husky");
```

```js
// lint-staged.config.js
module.exports = require("git-config-permissive/lint-staged");
```

```js
// commitlint.config.js
module.exports = require("git-config-permissive/commitlint");
```

```json
// package.json
{
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}
```

`lint-staged` uses `ESLint` to check typescript, markdown, and mdx files, so the following plugins needs to be installed and enabled:

- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)
- [eslint-plugin-mdx](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)

(alternatively you can use [eslint-config-permissive](https://github.com/katawaredev/config/tree/master/packages/eslint-config-permissive))

## Editor integration

### VS Code

This extension will make it easier to do conventional commits through the interface. Read more at [`vscode--commitizen`](https://github.com/KnisterPeter/vscode-commitizen)

```shell
ext install knisterpeter.vscode-commitizen
```
