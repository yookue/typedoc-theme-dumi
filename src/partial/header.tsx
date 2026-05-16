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


import { JSX, ReflectionKind, type PageEvent, type Reflection } from 'typedoc';
import { type DumiThemeRenderContext } from '../context/DumiThemeRenderContext.js';
import { classNames, displayName, hasTypeParameters, joinElements } from '../util/proto-utils.js';


/**
 * Navigation render of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx"
 */
export const header = (context: DumiThemeRenderContext, props: PageEvent<Reflection>): JSX.Element => {
    const hideIndexContentTitle = context.options.getValue('hideIndexContentTitle') as boolean;
    if (hideIndexContentTitle && props.url === 'index.html') {
        return <div class="tsd-page-title-hidden" style="display: none"></div>;
    }

    const opts = context.options.getValue('headings');

    // Don't render on the index page or the class hierarchy page
    // We should probably someday render on the class hierarchy page, but currently breadcrumbs
    // are entirely dependent on the reflection hierarchy, so it doesn't make sense today.
    const renderBreadcrumbs = props.url !== "index.html" && props.url !== 'hierarchy.html';

    // Titles are always rendered on DeclarationReflection pages and the modules page for the project.
    // They are also rendered on the readme + document pages if configured to do so by the user.
    let renderTitle: boolean;
    let titleKindString = '';
    if (props.model.isProject()) {
        if (props.url === 'index.html' && props.model.readme?.length) {
            renderTitle = opts.readme;
        } else {
            renderTitle = true;
        }
    } else if (props.model.isDocument()) {
        renderTitle = opts.document;
    } else {
        renderTitle = true;
        titleKindString = ReflectionKind.singularString(props.model.kind) + ' ';
    }

    return (
        <div class="tsd-page-title">
            {renderBreadcrumbs && context.breadcrumbs(props.model)}
            {renderTitle && (
                <h1 class={classNames({ deprecated: props.model.isDeprecated() })}>
                    {titleKindString}
                    {displayName(props.model)}
                    {hasTypeParameters(props.model) && (
                        <>
                            {'<'}
                            {joinElements(', ', props.model.typeParameters, (item) => item.name)}
                            {'>'}
                        </>
                    )}
                    {context.reflectionFlags(props.model)}
                </h1>
            )}
        </div>
    );
}
