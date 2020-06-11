# typescript-config-permissive

## Philosophy

- Configuration should require minimum effort with no-frills, out of the box experience.

This configuration is intended to be used with [babel](https://babeljs.io/), without emitting through TypeScript compiler.

## Install

```shell
npx install-peerdeps --dev typescript-config-permissive
```

### Config

```json
// tsconfig.json
{
  "include": ["src"],
  "extends": "typescript-config-permissive"
}
```

## Handling CSS, SVG, and image files

In a type definition file (either create one, like `global.d.ts`, or append to existing one) insert the following content:

```js
/// <reference types="typescript-config-permissive" />
```

NOTE: That file must be in a location where TypeScript can see it. Read more at [`tsconfig.json/include`](https://www.typescriptlang.org/v2/en/tsconfig#include).

Example (in root directory):

```json
// tsconfig.json
{
  "include": ["global.d.ts", "src"]
}
```
