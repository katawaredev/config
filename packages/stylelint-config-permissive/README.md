# stylelint-config-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.
- Linting must not step in developer's way. Every senseless error or warning is a distraction.
- Errors should only indicate invalid or breaking code.
- Warnings should only indicate potential bugs or confusing code.
- All formatting and stylistic choices should be automatically hanlded by the tooling.

## Supported languages

- CSS
- CSS-in-JS (opt-in, with caveats)
- SCSS, Sass, Less and SugarSS (no specific rules)

## Install

```shell
npx install-peerdeps --dev stylelint-config-permissive
```

Config:

```json
// .stylelintrc.json
{
  "extends": "stylelint-config-permissive"
}
```

```json
// package.json
{
  "scripts": {
    "lint": "stylelint '**/*.{css,js,jsx,tsx}'"
  }
}
```

## Setting up your editor

### Visual Studio Code

Install extensions:

```shell
ext install stylelint.vscode-stylelint esbenp.prettier-vscode
```

Enable fixing on save:

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

## Additional configurations

- `stylelint-config-permissive/native` - Allow only styles that are supported on Android / iOS.
- `stylelint-config-permissive/no-vendor` - Warn against using vendor prefixes.
- `stylelint-config-permissive/meticulous` - More opinionated. This won't make the code any better, just more consistent.
- `stylelint-config-permissive/css-in-js` - Enables CSS-in-JS support. Does not work with `--fix`.

### Example usage

```json
// .stylelintrc.json
{
  "extends": [
    "stylelint-config-permissive",
    "stylelint-config-permissive/no-vendor"
  ]
}
```

## Caveats

Because of [this issue](https://github.com/stylelint/stylelint/issues/3128) and the fact that css preprocesors does not support autofixing, `css-in-js` is not enabled by default. When enabled, it blocks autofixing normal css files. One workaround would be to add two separate scripts in `package.json`:

```json
{
  "scripts": {
    "lint:styles": "stylelint --fix '**/*.{css,less,scss}'",
    "lint:code-styles": "stylelint '**/*.{js,jsx,tsx}' --config { extends: ['stylelint-config-permissive', 'stylelint-config-permissive/css-in-js'] }"
  }
}
```
