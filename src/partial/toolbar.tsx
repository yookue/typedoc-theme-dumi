/*
 * Copyright (c) 2024 Unikue Ltd. All rights reserved.
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


import {JSX, i18n, type PageEvent, type Reflection} from 'typedoc';
import {DumiThemeRenderContext} from '../context/DumiThemeRenderContext.js';
import {displayName} from '../util/proto-utils.js';


/**
 * Toolbar render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/toolbar.tsx"
 */
export const toolbar = (context: DumiThemeRenderContext, props: PageEvent<Reflection>): JSX.Element => {
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
                {buildImageDom()}
                <a href={context.options.getValue("titleLink") || context.relativeURL("index.html")} class="title">
                    {logoTitle ?? displayName(props.project)}
                </a>

                <div id="tsd-toolbar-links">
                    {Object.entries(context.options.getValue("navigationLinks")).map(([label, url]) => (
                        <a href={url} target={navigationLinkTargets[label] || '_self'}>{label}</a>
                    ))}
                </div>

                <button id="tsd-search-trigger" class="tsd-widget" aria-label={i18n.theme_search()}>
                    {context.icons.search()}
                </button>
                <dialog id="tsd-search" aria-label={i18n.theme_search()}>
                    <input
                        role="combobox"
                        id="tsd-search-input"
                        aria-controls="tsd-search-results"
                        aria-autocomplete="list"
                        aria-expanded="true"
                        spellcheck={false}
                        autocapitalize="off"
                        autocomplete="off"
                        placeholder={i18n.theme_search_placeholder()}
                        maxLength={100}
                    />

                    <ul role="listbox" id="tsd-search-results"></ul>
                    <div id="tsd-search-status" aria-live="polite" aria-atomic="true">
                        <div>{i18n.theme_preparing_search_index()}</div>
                    </div>
                </dialog>

                <a
                    href="#"
                    class="tsd-widget menu"
                    id="tsd-toolbar-menu-trigger"
                    data-toggle="menu"
                    aria-label={i18n.theme_menu()}
                >
                    {context.icons.menu()}
                </a>
            </div>
        </header>
    );
}
