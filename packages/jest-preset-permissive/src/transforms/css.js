// https://github.com/facebook/create-react-app/blob/801fec286e77e32f451316775d66ed34025c4825/packages/react-scripts/config/jest/cssTransform.js

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    // The output is always the same.
    return "cssTransform";
  },
};
