# Style Guide

<a aria-label="NPM version" href="https://www.npmjs.com/package/@realshaunoneill/style-guide">
  <img alt="" src="https://img.shields.io/npm/v/@realshaunoneill/style-guide.svg?style=flat-square&labelColor=000000">
</a>
<a aria-label="License" href="https://github.com/realshaunoneill/style-guide/blob/master/LICENSE.md">
  <img alt="" src="https://img.shields.io/npm/l/@realshaunoneill/style-guide.svg?style=flat-square&labelColor=000000">
</a>
<a aria-label="CI status" href="https://github.com/realshaunoneill/style-guide/actions/workflows/quality.yml?query=event%3Apush+branch%master">
  <img alt="" src="https://img.shields.io/github/actions/workflow/status/realshaunoneill/style-guide/quality.yml?event=push&branch=master&style=flat-square&labelColor=000000">
</a>

## Introduction

This repository is the home of my personal style guide, which includes configs for popular linting and styling tools. The goal of this project is to provide a consistent and reliable development experience across all of my projects. This project is heavily inspired by the [Vercel Style Guide](https://github.com/vercel/style-guide), and I've tried to keep the style as close to the Vercel Style Guide as possible, but I've made some changes to better fit my personal style.

The following configs are available, and are designed to be used together. However, you can use them independently if you prefer.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)

## Contributing

Please read our [contributing](https://github.com/realshaunoneill/style-guide/blob/main/CONTRIBUTING.md)
guide before creating a pull request. This project is open to contributions, and we welcome any feedback or suggestions.

## Installation

All of our configs are contained in one package, `@realshaunoneill/style-guide`. You can install it using npm or Yarn. The following examples show how to install the package using both package managers.

```sh
# If you use npm
npm i --save-dev @realshaunoneill/style-guide

# If you use Yarn
yarn add --dev @realshaunoneill/style-guide
```

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed separately. You can install it using npm or Yarn.
> To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@realshaunoneill/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed separately. You can install it using npm or Yarn.
> This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of these
configs, but they should always be first in the `extends` array:

- `@realshaunoneill/style-guide/eslint/browser`
- `@realshaunoneill/style-guide/eslint/node`

Note that you can scope configs, so that configs only target specific files.
For more information, see: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@realshaunoneill/style-guide/eslint/next` (requires `@next/eslint-plugin-next` to be installed at the same version as `next`)
- `@realshaunoneill/style-guide/eslint/react`
- `@realshaunoneill/style-guide/eslint/typescript` (requires `typescript` to be installed and [additional configuration](#configuring-eslint-for-typescript))

> You'll need to use `require.resolve` to provide ESLint with absolute paths, due to an issue around ESLint config resolution.

For example, use the shared ESLint config(s) in a Next.js project, set the
following in `.eslintrc.js`.

```js
module.exports = {
  extends: [
    require.resolve('@realshaunoneill/style-guide/eslint/browser'),
    require.resolve('@realshaunoneill/style-guide/eslint/react'),
    require.resolve('@realshaunoneill/style-guide/eslint/next'),
  ],
};
```

### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type
information, you'll need to provide the path to your `tsconfig.json`.

For more information, see: https://typescript-eslint.io/docs/linting/type-linting

```js
const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@realshaunoneill/style-guide/eslint/node'),
    require.resolve('@realshaunoneill/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
```
