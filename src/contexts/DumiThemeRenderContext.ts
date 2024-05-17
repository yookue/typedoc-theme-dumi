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


import {DefaultThemeRenderContext} from 'typedoc';
import {toolbar} from '../partials/toolbar';
import {sidebarLinks} from '../partials/sidebarLinks';
import {header} from '../partials/header';
import {navigation} from '../partials/navigation';
import {footer} from '../partials/footer';
import {bindProps} from '../utils/proto-utils';


/**
 * Render context of dumi theme for typedoc
 *
 * @author David Hsing
 *
 * @see "https://github.com/TypeStrong/typedoc/tree/master/src/lib/output/themes/default"
 * @see "https://github.com/Gerrit0/typedoc-custom-theme-demo"
 * @see "https://github.com/omniframe/typedoc-theme-template"
 */
// noinspection JSUnusedGlobalSymbols
export class DumiThemeRenderContext extends DefaultThemeRenderContext {
    // Override the default toolbar
    override toolbar = bindProps(toolbar, this);

    // Override the default sidebar links
    override sidebarLinks = bindProps(sidebarLinks, this);

    // Override the default content header
    override header = bindProps(header, this);

    // Override the default navigation
    override navigation = bindProps(navigation, this);

    // Override the default footer
    override footer = bindProps(footer, this);
}
