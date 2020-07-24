# markdownlint-config-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.
- Linting must not step in developer's way. Every senseless error or warning is a distraction.
- Errors should only indicate invalid or breaking code.
- Warnings should only indicate potential bugs or confusing code.
- All formatting and stylistic choices should be automatically hanlded by the tooling.

## Install

```shell
npx install-peerdeps --dev markdownlint-config-permissive
```

Config:

```json
// .markdownlint.json
{
  "extends": "./node_modules/markdownlint-config-permissive/default.jsonc"
}
```

```text
// .markdownlintignore
node_modules
```

```json
// package.json
{
  "scripts": {
    "lint": "markdownlint --fix '**/*.md'"
  }
}
```

## Additional configurations

More opinionionated version is available. It won't make the code any better, just more consistent.

```json
// .markdownlint.json
{
  "extends": "./node_modules/markdownlint-config-permissive/meticulous.jsonc"
}
```

If you use any tools to autogenerate `CHANGELOG.md` files, this configuration might complain about them. In this case, just disable checking them:

```text
// .markdownlintignore
node_modules
CHANGELOG.md
```

## Setting up your editor

### Visual Studio Code

Install extensions:

```shell
ext install davidanson.vscode-markdownlint esbenp.prettier-vscode
```

Enable fixing on save:

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
