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


import {DefaultTheme, type PageEvent, type Reflection} from 'typedoc';
import {DumiThemeRenderContext} from '../contexts/DumiThemeRenderContext';


/**
 * Dumi theme for typedoc, which has the look and feel just like dumi
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export class DumiTheme extends DefaultTheme {
    override getRenderContext(event: PageEvent<Reflection>): DumiThemeRenderContext {
        return new DumiThemeRenderContext(this, event, this.application.options);
    }
}
