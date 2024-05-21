/*
 * Copyright (c) 2024 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the 'License')
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import nodeFs from 'node:fs';
import nodePath from 'node:path';
import {Application, JSX, RendererEvent} from 'typedoc';
import * as options from './options/declaration';
import {DumiTheme} from './themes/DumiTheme';


/**
 * Dumi theme for typedoc, which has the look and feel just like dumi
 * <p>
 * The entry function, called by typeDoc when loading this theme as a plugin
 *
 * @author David Hsing
 *
 * @see "https://v1.d.umijs.org/"
 *
 * @ignore
 */
// noinspection JSUnusedGlobalSymbols
export function load(app: Application) {
    // Check theme identifier
    if (app.options.getValue('theme') !== 'dumi') {
        return;
    }

    // Declare theme options
    Object.entries(options).forEach(([, value]) => {
        app.options.addDeclaration(value);
    });

    // Hook head end
    app.renderer.hooks.on('head.end', (context): JSX.Element => {
        return (
            <>
                <meta name="typedoc-theme" content="@yookue/typedoc-theme-dumi"/>
                <link rel="stylesheet" type="text/css" href={context.relativeURL('./assets/dumi.css')}/>
            </>
        );
    });

    // Copy stylesheet
    app.listenTo(app.renderer, RendererEvent.END, () => {
        const source = nodePath.resolve(__dirname, './assets');
        const target = nodePath.join(nodePath.resolve(app.options.getValue('out')), 'assets');
        nodeFs.cpSync(source, target, {force: true, recursive: true});
    });

    // Declare theme
    app.renderer.defineTheme('dumi', DumiTheme);
}
