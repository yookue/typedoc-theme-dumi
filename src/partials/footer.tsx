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
import {DumiThemeRenderContext} from '../contexts/DumiThemeRenderContext';


/**
 * Footer render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/footer.tsx"
 */
export function footer(context: DumiThemeRenderContext): JSX.Element {
    const hideGenerator = context.options.getValue('hideGenerator') as boolean;
    const footerAlign = context.options.getValue('footerAlign') as string;

    const attributes = {};
    if (footerAlign) {
        Object.assign(attributes, {'class': `text-${footerAlign}`});
    }

    return (
        <footer {...attributes}>
            {context.hook('footer.begin')}
            {hideGenerator || (
                <p class="tsd-generator">
                    {'Generated using '}
                    <a href="https://typedoc.org" target="_blank">
                        TypeDoc
                    </a>
                    {' with '}
                    <a href="https://yookue.github.io/typedoc-theme-dumi" target="_blank">
                        dumi theme
                    </a>
                </p>
            )}
            {context.hook('footer.end')}
        </footer>
    );
}
