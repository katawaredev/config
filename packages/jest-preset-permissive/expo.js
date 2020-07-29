/* eslint-disable node/no-missing-require */
const jestConfig = require("./src/jest.config");

jestConfig.haste = {
  defaultPlatform: "ios",
  platforms: ["android", "ios", "native"],
};

// @ts-expect-error
jestConfig.transform[
  "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$"
] = require.resolve("jest-expo/src/preset/assetFileTransformer.js");

// @ts-expect-error
jestConfig.transformIgnorePatterns = [
  // Don't include /node_modules/ from defaults
  "^.+\\.module\\.(css|sass|scss|less)$",
  "node_modules/(?!(jest-)?react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
];

jestConfig.setupFiles = [
  require.resolve("react-native/jest/setup.js"),
  require.resolve("jest-expo/src/preset/setup.js"),
];

jestConfig.testEnvironment = "node";

module.exports = jestConfig;
