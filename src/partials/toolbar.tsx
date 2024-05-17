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


import {JSX, type PageEvent, type Reflection} from 'typedoc';
import {DumiThemeRenderContext} from '../contexts/DumiThemeRenderContext';
import {displayName} from '../utils/proto-utils';


/**
 * Toolbar render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/toolbar.tsx"
 */
export function toolbar(context: DumiThemeRenderContext, event: PageEvent<Reflection>): JSX.Element {
    const logoImage = context.options.getValue('logoImage') as string;
    const logoWidth = context.options.getValue('logoWidth') as number;
    const logoHeight = context.options.getValue('logoHeight') as number;
    const logoTitle = context.options.getValue('logoTitle') as string;
    const navigationLinkTargets = context.options.getValue('navigationLinkTargets') as Record<string, string>;

    const buildImageDom = (): JSX.Element | null => {
        if (!logoImage) {
            return null;
        }
        const attributes = {};
        if (logoWidth > 0) {
            Object.assign(attributes, {'width': logoWidth});
        }
        if (logoHeight > 0) {
            Object.assign(attributes, {'height': logoHeight});
        }
        return <img class="logo" src={logoImage} {...attributes} alt=""/>;
    };

    return (
        <header class="tsd-page-toolbar">
            <div class="tsd-toolbar-contents container">
                <div class="table-cell" id="tsd-search" data-base={context.relativeURL("./")}>
                    <div class="field">
                        <label for="tsd-search-field" class="tsd-widget tsd-toolbar-icon search no-caption">
                            {context.icons.search()}
                        </label>
                        <input type="text" id="tsd-search-field" aria-label="Search" />
                    </div>
                    <div class="field">
                        <div id="tsd-toolbar-links">
                            {Object.entries(context.options.getValue("navigationLinks")).map(([label, url]) => (
                                <a href={url} target={navigationLinkTargets[label] || '_self'}>{label}</a>
                            ))}
                        </div>
                    </div>
                    <ul class="results">
                        <li class="state loading">Preparing search index...</li>
                        <li class="state failure">The search index is not available</li>
                    </ul>
                    <a href={context.options.getValue("titleLink") || context.relativeURL("index.html")} class="title">
                        {buildImageDom()}
                        {logoTitle || displayName(event.project)}
                    </a>
                </div>
                <div class="table-cell" id="tsd-widgets">
                    <a href="#" class="tsd-widget tsd-toolbar-icon menu no-caption" data-toggle="menu" aria-label="Menu">
                        {context.icons.menu()}
                    </a>
                </div>
            </div>
        </header>
    );
}
