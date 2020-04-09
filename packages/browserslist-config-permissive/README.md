# browserslist-config-permissive

Shareable [Browserslist](https://github.com/ai/browserslist) config for [Kataware.dev](https://kataware.dev).

```shell
npm install --save-dev browserslist-config-permissive
```

## Usage

If you're directly consuming this package in an application, add this to `.browserslistrc`:

```shell
extends browserslist-config-permissive
```

When manually configuring a tool that uses Browserslist, importing this package returns the array of supported browsers.

For example, when configuring [babel-preset-env](https://github.com/babel/babel/tree/master/experimental/babel-preset-env) via JavaScript:

```js
{
  [
    [
      "env",
      {
        targets: {
          browsers: require("browserslist-config-permissive"),
        },
      },
    ],
  ];
}
```
