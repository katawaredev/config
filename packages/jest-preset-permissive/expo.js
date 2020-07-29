/* eslint-disable node/no-missing-require */
const jestConfig = require("./src");

jestConfig.haste = {
  defaultPlatform: "ios",
  platforms: ["android", "ios", "native"],
};

// @ts-expect-error
jestConfig.transform[
  "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$"
] = require.resolve("jest-expo/src/preset/assetFileTransformer.js");

jestConfig.transformIgnorePatterns.push(
  "node_modules/(?!(jest-)?react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
);

jestConfig.setupFilesAfterEnv.push(
  require.resolve("@testing-library/jest-native/extend-expect")
);

jestConfig.setupFiles = [
  require.resolve("react-native/jest/setup.js"),
  require.resolve("jest-expo/src/preset/setup.js"),
];

jestConfig.testEnvironment = "node";

module.exports = jestConfig;
