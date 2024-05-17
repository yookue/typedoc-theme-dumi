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
import {classNames, displayName, hasTypeParameters, joinElements} from '../utils/proto-utils';


/**
 * Navigation render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx"
 */
export function header(context: DumiThemeRenderContext, event: PageEvent<Reflection>): JSX.Element {
    const hideIndexContentTitle = context.options.getValue('hideIndexContentTitle') as boolean;
    if (hideIndexContentTitle && event.url === 'index.html') {
        return <div class="tsd-page-title-hidden" style="display: none"></div>;
    }
    const HeadingLevel: string = event.model.isProject() ? 'h2' : 'h1';
    return (
        <div class="tsd-page-title">
            {!!event.model.parent && <ul class="tsd-breadcrumb">{context.breadcrumb(event.model)}</ul>}
            <HeadingLevel class={classNames({ deprecated: event.model.isDeprecated() })}>
                {event.model.kind !== ReflectionKind.Project && `${ReflectionKind.singularString(event.model.kind)} `}
                {displayName(event.model)}
                {hasTypeParameters(event.model) && (
                    <>
                        {"<"}
                        {joinElements(", ", event.model.typeParameters, (item) => item.name)}
                        {">"}
                    </>
                )}
                {context.reflectionFlags(event.model)}
            </HeadingLevel>
        </div>
    );
}
