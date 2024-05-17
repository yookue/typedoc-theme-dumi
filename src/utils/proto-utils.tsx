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


import {JSX, DeclarationReflection, ProjectReflection, Reflection, SignatureReflection, TypeParameterReflection} from 'typedoc';


/**
 * Binds a property to an instance
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/DefaultThemeRenderContext.ts"
 *
 * @ignore
 */
export function bindProps<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
    return (...r: L) => fn(first, ...r);
}


/**
 * Converters a record instance to html class names
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/lib.tsx"
 *
 * @ignore
 */
export function classNames(names: Record<string, boolean | null | undefined>, extraCss?: string) {
    const css = Object.keys(names).filter((key) => names[key]).concat(extraCss || '').join(' ').trim().replace(/\s+/g, ' ');
    return css.length ? css : undefined;
}


/**
 * Returns the display name of the package
 *
 * @param ref The reflection to inspect
 *
 * @returns the display name of the package
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/lib.tsx"
 *
 * @ignore
 */
export function displayName(ref: Reflection): string {
    let version = '';
    if ((ref instanceof DeclarationReflection || ref instanceof ProjectReflection) && ref.packageVersion) {
        version = ` - v${ref.packageVersion}`;
    }
    return `${ref.name}${version}`;
}


/**
 * Returns whether the reflection has type parameters
 *
 * @param ref The reflection to inspect
 *
 * @returns whether the reflection has type parameters
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/lib.tsx"
 *
 * @ignore
 */
export function hasTypeParameters(ref: Reflection): ref is Reflection & {typeParameters: TypeParameterReflection[]} {
    return ((ref instanceof DeclarationReflection || ref instanceof SignatureReflection) && ref.typeParameters != null && ref.typeParameters.length > 0);
}


/**
 * Returns the element that joined children with the given joiner
 *
 * @param joiner The joiner between elements
 * @param list The source elements to be joined
 * @param callback The callback function to execute
 *
 * @returns the element that joined children with the given joiner
 *
 * @see "https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/lib.tsx"
 *
 * @ignore
 */
export function joinElements<T>(joiner: JSX.Children, list: readonly T[], callback: (x: T) => JSX.Children): JSX.Element {
    const result: JSX.Children = [];
    for (const item of list) {
        if (result.length > 0) {
            result.push(joiner);
        }
        result.push(callback(item));
    }
    return <>{result}</>;
}
