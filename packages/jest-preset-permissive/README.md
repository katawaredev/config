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

## Testing native applications

**Recommended**: Use [react-native-testing-library](https://github.com/callstack/react-native-testing-library) over [@testing-library/react-native](https://github.com/testing-library/native-testing-library) [[source](https://twitter.com/kentcdodds/status/1283815988496961537)]

All configurations require a peer dependency of [@testing-library/jest-native](https://github.com/testing-library/jest-native):

```sh
npm i -D @testing-library/jest-native
```

### React Native Web

This configuration requires a peer dependency of [react-native-web](https://github.com/necolas/react-native-web):

```sh
npm i react-native-web
```

```js
// jest.config.js
module.exports = {
  preset: "./node_modules/jest-preset-permissive/native-web",
};
```

### React Native

This configuration requires a peer dependency of [react-native](https://github.com/facebook/react-native):

```sh
npm i react-native
```

```js
// jest.config.js
module.exports = {
  preset: "./node_modules/jest-preset-permissive/native",
};
```

### Expo

This configuration requires a peer dependency of [jest-expo](https://github.com/expo/expo/tree/master/packages/jest-expo) [react-native](https://github.com/facebook/react-native):

```sh
npm i -D jest-expo
npm i react-native
```

```js
// jest.config.js
module.exports = {
  preset: "./node_modules/jest-preset-permissive/expo",
};
```

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
