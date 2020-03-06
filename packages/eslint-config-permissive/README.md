# eslint-config-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.
- Linting must not step in developer's way. Every senseless error or warning is a distraction.
- Errors should only indicate invalid or breaking code.
- Warnings should only indicate potential bugs or confusing code.
- All formatting and stylistic choices should be automatically hanlded by the tooling.

## Supported languages and technologies

### Languages

- JavaScript
- [TypeScript](https://www.typescriptlang.org/)
- Markdown
- [MDX](https://mdxjs.com/)

### Technologies

- [React](https://reactjs.org/)
  - [hooks](https://reactjs.org/docs/hooks-intro.html)
  - [native](https://react-native.org/)
  - [a11y](https://a11yproject.com/)
  - [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## Install

```shell
npx install-peerdeps --dev eslint-config-permissive
```

Config:

```json
// .eslintrc.json
{
  "extends": "permissive"
}
```

```json
// package.json
{
  "scripts": {
    "lint": "eslint . --ext js,jsx,ts,tsx,md,mdx"
  }
}
```

## Setting up your editor

### Visual Studio Code

Install extensions:

```shell
ext install dbaeumer.vscode-eslint esbenp.prettier-vscode JounQin.vscode-mdx
```

Enable fixing on save:

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "javascript.validate.enable": false,
  "typescript.validate.enable": false
}
```

## Additional configurations

- `permissive/protracted` - Checks that might take longer to complete.
- `permissive/prefer-macro` - Suggests using the macros version of some libraries (see [babel-macros](https://github.com/kentcdodds/babel-plugin-macros)).
- `permissive/meticulous` - More opinionated. This won't make the code any better, just more consistent.
- `permissive/naming` - Enforces naming conventions. Could increase the linting time.

### Example usage

```json
// .eslintrc.json
{
  "extends": ["permissive", "permissive/prefer-macro"]
}
```

## Absolute imports

### TypeScript

Absolute imports are configured in `tsconfig.json`. See more at [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html).

Most typical setup is:

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

### JavaScript

Absolute imports should be handled by default for everything in `src` directory. If this is not the case, see [import resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers).

For monorepository with absolute imports, placing this configuration in each package will work for most cases:

```json
// .eslintrc.json
{
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
```

## Native

[React Native](https://react-native.org/) has some limitations, that are enforced by rules. ESLint will only check the following files for these rules:

- `*.native.{js,jsx,tsx}`
- `*.ios.{js,jsx,tsx}`
- `*.android.{js,jsx,tsx}`

## Caveats

Because of [this issue](https://github.com/eslint/eslint/issues/3458), `eslint` is unable to use any config without having to install all plugins included. In some cases it can be fine not to include them, but if `eslint` complains, just install the dependencies needed for this project:

```shell
npm install --save-dev @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint-plugin-eslint-comments@3.x eslint-plugin-cypress@2.x eslint-plugin-import@2.x eslint-plugin-jest@23.x eslint-plugin-jsx-a11y@6.x eslint-plugin-markdown@1.x eslint-plugin-mdx@1.x eslint-plugin-react@7.x eslint-plugin-react-hooks@2.x eslint-plugin-react-native@3.x eslint-plugin-testing-library@2.x
```

Alternatively, just install the correct version of a plugin `eslint` complains about
