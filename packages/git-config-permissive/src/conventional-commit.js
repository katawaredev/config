#!/usr/bin/env node
// eslint-disable-next-line strict
"use strict";

const path = require("path");
const { bootstrap } = require("commitizen/dist/cli/git-cz");

bootstrap({
  cliPath: path.dirname(require.resolve("commitizen/package.json")),
  config: {
    path: "cz-conventional-changelog",
  },
});
