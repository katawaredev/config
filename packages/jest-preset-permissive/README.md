# jest-preset-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.

## Features

- Typescript support
- [jest-extended](https://github.com/jest-community/jest-extended)
- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## Install

```shell
npx install-peerdeps --dev jest-preset-permissive
```

### Config

```js
// jest.config.js
module.exports = {
  preset: "jest-preset-permissive",
};
```

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

## React Native

See [react-native-testing-library](https://github.com/callstack/react-native-testing-library)

## Setting up your editor

### Visual Studio Code

Install extensions:

```shell
ext install orta.vscode-jest
```

## Absolute imports

By default all files in `src` can be handled as absoulute import

## Typescript path mapping

Read more at [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) and [ts-jest path mapping](https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping)

```js
// jest.config.js
const pathsToModuleNameMapper = require("jest-preset-permissive/pathsToModuleNameMapper"); // reuses the one from ts-jest

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require("./tsconfig");

module.exports = {
  // ...
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths /* , { prefix: '<rootDir>/' } */
  ),
};
```
