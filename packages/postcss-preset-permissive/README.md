# postcss-preset-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.
- Common problems should be automatically hanlded by the tooling, where is possible.
- Future proof syntax.

## Install

```shell
npx install-peerdeps --dev postcss-preset-permissive
```

### Config

```js
// postcss.config.js
module.exports = {
  plugins: [require("postcss-preset-permissive")],
};
```

## What's inside

- [`postcss-import`](https://github.com/postcss/postcss-import)
- [`postcss-flexbugs-fixes`](https://github.com/luisrudge/postcss-flexbugs-fixes)
- [`postcss-preset-env`](https://github.com/csstools/postcss-preset-env)

## Caveats

[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) prefixing is disabled by default, but it will _not_ strip manual prefixing. If you'd like to opt-in to CSS Grid prefixing, [take note about its limitations first](https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie).

To enable CSS Grid prefixing, add `/* autoprefixer grid: autoplace */` to the top of your CSS file.
