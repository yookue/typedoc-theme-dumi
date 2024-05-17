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
 * Sidebar links render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx"
 */
export function sidebarLinks(context: DumiThemeRenderContext): JSX.Element | null {
    const sidebarLinks = Object.entries(context.options.getValue("sidebarLinks"));
    const sidebarLinkTargets = context.options.getValue('sidebarLinkTargets') as Record<string, string>;

    return !sidebarLinks.length ? null : (
        <nav id="tsd-sidebar-links" class="tsd-navigation">
            {sidebarLinks.map(([label, url]) => (
                <a href={url} target={sidebarLinkTargets[label] || '_self'}>{label}</a>
            ))}
        </nav>
    );
}
