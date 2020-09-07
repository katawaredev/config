# babel-preset-permissive

## Install

```shell
npm install --dev babel-preset-permissive
```

### Config

```json
// .babelrc
{
  "presets": ["permissive"]
}
```

## What's inside

### Presets

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env)
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react)
- [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript)

### Plugins

- [`@babel/plugin-proposal-decorators`](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
- [`@babel/plugin-proposal-numeric-separator`](https://babeljs.io/docs/en/babel-plugin-proposal-numeric-separator)
- [`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
- [`@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)
- [`babel-plugin-inline-react-svg`](https://github.com/airbnb/babel-plugin-inline-react-svg)
- [`babel-plugin-annotate-pure-calls`](https://github.com/Andarist/babel-plugin-annotate-pure-calls)
- [`babel-plugin-transform-async-to-promises`](https://github.com/rpetrich/babel-plugin-transform-async-to-promises)
- [`babel-plugin-dev-expression`](https://github.com/4Catalyzer/babel-plugin-dev-expression)
- [`babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros)
- [`babel-plugin-preval`](https://github.com/kentcdodds/babel-plugin-preval)
- [`babel-plugin-codegen`](https://github.com/kentcdodds/babel-plugin-codegen)
- [babel-plugin-react-remove-properties](https://github.com/oliviertassinari/babel-plugin-react-remove-properties)

## Using with Next.js

A special configuration that extends Next.js Babel config if available:

```json
// .babelrc
{
  "presets": ["next/babel", "babel-preset-permissive/nextjs"]
}
```

## Using with eslint

By default importing `React` in every file is not required, but some configurations may complain about it. To fix this, add `"react/react-in-jsx-scope": "off"` rule to your eslint config. This rule is also disabled in `permissive/nextjs` [eslint config](../eslint-config-permissive#additional-configurations)
