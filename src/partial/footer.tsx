/*
 * Copyright (c) 2024 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import {JSX} from 'typedoc';
import {type DumiThemeRenderContext} from '../context/DumiThemeRenderContext';


/**
 * Footer render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/footer.tsx"
 */
export const footer = (context: DumiThemeRenderContext): JSX.Element => {
    const hideGenerator = context.options.getValue('hideGenerator') as boolean;
    const footerAlign = context.options.getValue('footerAlign') as string;

    const attributes = {};
    if (footerAlign) {
        Object.assign(attributes, {'class': `text-${footerAlign}`});
    }

    let generatorDisplay = <></>;
    if (!hideGenerator) {
        const message = context.i18n.theme_generated_using_typedoc();
        // Only handles one occurrence, but that's all I expect...
        const index = message.indexOf("TypeDoc");
        if (index == -1) {
            generatorDisplay = <p class="tsd-generator">{message}</p>;
        } else {
            const pre = message.substring(0, index);
            const post = message.substring(index + "TypeDoc".length);
            generatorDisplay = (
                <>
                    <p class="tsd-generator">
                        {pre}
                        <a href="https://typedoc.org/" target="_blank">
                            TypeDoc
                        </a>
                        {post}
                        {' with '}
                        <a href="https://yookue.github.io/typedoc-theme-dumi" target="_blank">
                            dumi theme
                        </a>
                    </p>
                </>
            );
        }
    }

    const customFooterHtml = context.options.getValue("customFooterHtml");
    let customFooterDisplay = <></>;
    if (customFooterHtml) {
        if (context.options.getValue("customFooterHtmlDisableWrapper")) {
            customFooterDisplay = <JSX.Raw html={customFooterHtml} />;
        } else {
            customFooterDisplay = (
                <p>
                    <JSX.Raw html={customFooterHtml} />
                </p>
            );
        }
    }

    return (
        <footer {...attributes}>
            {context.hook("footer.begin", context)}
            {generatorDisplay}
            {customFooterDisplay}
            {context.hook("footer.end", context)}
        </footer>
    );
}
