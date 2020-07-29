/* eslint-disable node/no-missing-require */
const jestConfig = require("./src");

// @ts-expect-error
jestConfig.moduleNameMapper["^react-native$"] = require.resolve(
  "react-native-web/dist/cjs"
);

jestConfig.setupFilesAfterEnv.push(
  require.resolve("@testing-library/jest-native/extend-expect")
);

jestConfig.setupFiles = [require.resolve("react-native-web/jest/setup.js")];

module.exports = jestConfig;
