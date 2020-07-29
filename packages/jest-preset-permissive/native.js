/* eslint-disable node/no-missing-require */
const jestConfig = require("./src");

jestConfig.haste = {
  defaultPlatform: "ios",
  platforms: ["android", "ios", "native"],
};

// @ts-expect-error
jestConfig.transform[
  "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$"
] = require.resolve("react-native/jest/assetFileTransformer.js");

jestConfig.transformIgnorePatterns.push(
  "node_modules/(?!(jest-)?react-native|@react-native-community)"
);

jestConfig.setupFilesAfterEnv.push(
  require.resolve("@testing-library/jest-native/extend-expect")
);

jestConfig.setupFiles = [require.resolve("react-native/jest/setup.js")];

jestConfig.testEnvironment = "node";

module.exports = jestConfig;
