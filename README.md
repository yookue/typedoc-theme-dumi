# @yookue/typedoc-theme-dumi

[![NPM version](https://img.shields.io/npm/v/@yookue/typedoc-theme-dumi.svg?style=flat)](https://npmjs.org/package/@yookue/typedoc-theme-dumi)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@yookue/typedoc-theme-dumi.svg?style=flat)](https://npmjs.org/package/@yookue/typedoc-theme-dumi)

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

🖼️ The live example of this theme is here: [https://yookue.github.io/typedoc-theme-dumi](https://yookue.github.io/typedoc-theme-dumi)

## Snapshot

![snapshot](https://raw.githubusercontent.com/yookue/typedoc-theme-dumi/trunk/doc/snapshot.png)

## Quickstart

You can install this package in your typescript project as follows:

```bash
$ npm install @yookue/typedoc-theme-dumi --save-dev
```

Enjoy your coding journey with `typedoc-theme-dumi` ✌️

## Usage

- Using in command line

```bash
$ typedoc [TARGET] --plugin @yookue/typedoc-theme-dumi --theme dumi
```

- Using in `typedoc.json`

```json
{
    "plugin": [
        "@yookue/typedoc-theme-dumi"
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

## Document

- GitHub pages: [https://yookue.github.io/typedoc-theme-dumi](https://yookue.github.io/typedoc-theme-dumi)

## Thanks

- typedoc: [https://typedoc.org](https://typedoc.org)

- dumi: [https://d.umijs.org](https://d.umijs.org)

## License

This project is under the [MIT License](https://mit-license.org/).

## Website

- Yookue: [https://yookue.com](https://yookue.com)
