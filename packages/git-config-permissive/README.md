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
- [Conventional commits](https://www.conventionalcommits.org/)
- [Semantic release](https://github.com/semantic-release/semantic-release)

## Install

```shell
npx install-peerdeps --dev git-config-permissive
```

### Config

```js
// lint-staged.config.js
module.exports = require("git-config-permissive/lint-staged");
```

```js
// commitlint.config.js
module.exports = require("git-config-permissive/commitlint");
```

```js
// release.config.js
module.exports = {
  extends: "git-config-permissive/semantic-release",
  branch: "master",
};
```

#### Configure husky

```sh
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
npx husky add .husky/pre-msg 'npx lint-staged'
```

## lint-staged

`lint-staged` uses `ESLint` to check typescript, markdown, and mdx files, so the following plugins needs to be installed and enabled:

- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)
- [eslint-plugin-mdx](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)

(alternatively you can use [eslint-config-permissive](https://github.com/katawaredev/config/tree/master/packages/eslint-config-permissive))

### Customizing configurations

#### lint-staged

By default all options are enabled

```js
// lint-staged.config.js
const createConfig = require("git-config-permissive/lint-staged.config");

module.exports = createConfig({
  tsc: true, // Run tsc checks
  eslint: true, // Run eslint checks
  typescript: true, // Check typescript files with eslint
  markdown: true, // Check markdown files with eslint
  stylelint: true, // Run stylelint checks
  markdownlint: true, // Run markdownlint checks
  jest: true, // Run jest testing
  prettier: true, // Format with prettier
});
```

#### Semantic release

##### Plugins

This [shareable configuration](https://semantic-release.gitbook.io/semantic-release/extending/shareable-configurations-list) uses the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

- Provides an informative [git](https://github.com/semantic-release/git) commit message for the release commit that does not trigger continuous integration and conforms to the [conventional commits specification](https://www.conventionalcommits.org/) (e.g., "chore(release): 1.2.3 [skip ci]\n\nnotes").
- Creates a tarball that gets uploaded with each [GitHub release](https://github.com/semantic-release/github).
- Publishes the same tarball to [npm](https://github.com/semantic-release/npm).
- Commits the version change in `package.json`.
- Creates or updates a [changelog](https://github.com/semantic-release/changelog) file.

##### Configuration

Ensure that your CI configuration has the following **_secret_** environment variables set:

- [`GH_TOKEN`](https://github.com/settings/tokens) with [`public_repo`](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) access.
- [`NPM_TOKEN`](https://docs.npmjs.com/cli/token)
- [`NODE_AUTH_TOKEN`](https://docs.npmjs.com/cli/token)

See each [plugin](https://github.com/semantic-release) documentation for required installation and configuration steps.

## Editor integration

### VS Code

This extension will make it easier to do conventional commits through the interface. Read more at [`vscode--commitizen`](https://github.com/KnisterPeter/vscode-commitizen)

```shell
ext install knisterpeter.vscode-commitizen
```

## Lerna

If Lerna [hangs on publish](https://github.com/lerna/lerna/issues/2664), try disabling Husky before publishing:

```sh
HUSKY_SKIP_HOOKS=1 npx lerna publish
```
