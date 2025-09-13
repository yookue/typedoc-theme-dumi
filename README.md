# @unikue/typedoc-theme-dumi

[![NPM version](https://img.shields.io/npm/v/@unikue/typedoc-theme-dumi.svg?style=flat)](https://npmjs.org/package/@unikue/typedoc-theme-dumi)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@unikue/typedoc-theme-dumi.svg?style=flat)](https://npmjs.org/package/@unikue/typedoc-theme-dumi)

🏅 Dumi theme for typedoc, maybe the most beautiful typedoc theme on Mars 😁

## Features

✅ Look and feel just like [dumi](https://v1.d.umijs.org)

✅ Supports extra logo image

✅ Supports extra logo title

✅ Supports specifying targets of the navigation links

✅ Supports specifying targets of the sidebar links

✅ Supports preventing the interaction of the modules link

✅ Supports hiding the content title from the index page

✅ Supports specifying alignment of the footer

## Demo

🖼️ The live example of this theme is here: [https://unikueltd.github.io/typedoc-theme-dumi](https://unikueltd.github.io/typedoc-theme-dumi)

## Snapshot

![snapshot](https://raw.githubusercontent.com/unikue/typedoc-theme-dumi/trunk/doc/snapshot.png)

## Quickstart

You can install this package in your typescript project as follows:

```bash
$ npm install @unikue/typedoc-theme-dumi --save-dev
```

Enjoy your coding journey with `typedoc-theme-dumi` ✌️

## Usage

- Using in command line

```bash
$ typedoc [TARGET] --plugin @unikue/typedoc-theme-dumi --theme dumi
```

- Using in `typedoc.json`

```json
{
    "plugin": [
        "@unikue/typedoc-theme-dumi"
    ],
    "theme": "dumi"
}
```

## Options

Here are the available options, could be used in `typedoc.json`:

| Option Name           | Value Type             | Description                                                                     |
|-----------------------|------------------------|---------------------------------------------------------------------------------|
| logoImage             | string                 | The logo image source                                                           |
| logoWidth             | number                 | The logo image width, in px                                                     |
| logoHeight            | number                 | The logo image height, in px                                                    |
| logoTitle             | string                 | The caption for the logo, could be different from the project name, NOT the tip |
| navigationLinkTargets | Record<string, string> | The targets of the navigation links, key is the label of `navigationLinks` prop |
| sidebarLinkTargets    | Record<string, string> | The targets of the sidebar links, key is the label of `sidebarLinks` prop       |
| preventModulesLink    | boolean                | Whether to prevent the interaction of the modules link                          |
| hideIndexContentTitle | boolean                | Whether to hide the content title from the index page                           |
| footerAlign           | string                 | The alignment of the footer, the available values are `left`, `center`, `right` |

## Compatibility

Here are the associated versions with this package:

| typedoc-theme-dumi | Typedoc | Typescript |
|--------------------|---------|------------|
| v0.1.x             | v0.25.x | &gt;= v4.0 |
| v0.2.x             | v0.26.x | &gt;= v5.0 |
| v0.3.x             | v0.27.x | &gt;= v5.0 |
| v0.4.x             | v0.28.x | &gt;= v5.0 |
| v1.0.x             | v0.28.x | &gt;= v5.0 |

## Document

- GitHub pages: [https://unikueltd.github.io/typedoc-theme-dumi](https://unikueltd.github.io/typedoc-theme-dumi)

## Thanks

- typedoc: [https://typedoc.org](https://typedoc.org)

- dumi: [https://d.umijs.org](https://d.umijs.org)

## License

This project is under the [MIT License](https://mit-license.org/).

## Copyright

Beijing Unikue Network Technology Ltd.

## Website

- Unikue: [https://unikue.cn](https://unikue.cn)
