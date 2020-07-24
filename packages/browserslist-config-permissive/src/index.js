module.exports = {
  production: [
    "defaults",
    "not IE 11",
    "not IE_Mob 11",
    "maintained node versions",
  ],
  development: [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version",
    "last 1 edge version",
    "current node",
  ],
  test: [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version",
    "last 1 edge version",
    "current node",
  ],
};
