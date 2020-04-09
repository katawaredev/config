// FIXME: https://github.com/browserslist/browserslist/issues/300#issuecomment-436511561
const env =
  process.env.NODE_ENV || process.env.BROWSERSLIST_ENV || "production";
const config = {
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

module.exports = config[env];
