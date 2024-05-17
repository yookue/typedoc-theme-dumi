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


import {JSX, ReflectionKind, type PageEvent, type Reflection} from 'typedoc';
import {DumiThemeRenderContext} from '../contexts/DumiThemeRenderContext';
import {classNames, displayName} from '../utils/proto-utils';


/**
 * Navigation render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx"
 */
export function navigation(context: DumiThemeRenderContext, event: PageEvent<Reflection>): JSX.Element {
    const preventModulesLink = context.options.getValue('preventModulesLink') as boolean;

    return (
        <nav class="tsd-navigation">
            <a href={preventModulesLink ? 'javascript:;' : context.urlTo(event.project)} class={classNames({current: event.project === event.model})}>
                {context.icons[ReflectionKind.Project]()}
                <span>{displayName(event.project)}</span>
            </a>
            <ul class="tsd-small-nested-navigation" id="tsd-nav-container" data-base={context.relativeURL("./")}>
                <li>Loading...</li>
            </ul>
        </nav>
    );
}
