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



import {ParameterType, type DeclarationOption} from 'typedoc';


export const logoImage: DeclarationOption = {
    name: 'logoImage',
    type: ParameterType.String,
    help: 'The logo image source',
};


export const logoWidth: DeclarationOption = {
    name: 'logoWidth',
    type: ParameterType.Number,
    help: 'The logo image width',
    validate(value) {
        if (!value || value <= 0) {
            throw new SyntaxError(`logoWidth must be a positive number value.`);
        }
    }
};


export const logoHeight: DeclarationOption = {
    name: 'logoHeight',
    type: ParameterType.Number,
    help: 'The logo image height',
    validate(value) {
        if (!value || value <= 0) {
            throw new SyntaxError(`logoHeight must be a positive number value.`);
        }
    }
};


export const logoTitle: DeclarationOption = {
    name: 'logoTitle',
    type: ParameterType.String,
    help: 'The caption for the logo',
};


export const navigationLinkTargets: DeclarationOption = {
    name: 'navigationLinkTargets',
    type: ParameterType.Mixed,
    help: 'The targets of the navigation links',
    validate(value) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) {
            throw new SyntaxError(`navigationLinkTargets must be an object with string labels as keys and string targets as values.`);
        }
        if (Object.values(value).some((item) => typeof item !== 'string')) {
            throw new SyntaxError(`All values of navigationLinkTargets must be string targets, e.g. '_self' | '_blank'.`);
        }
    },
};


export const sidebarLinkTargets: DeclarationOption = {
    name: 'sidebarLinkTargets',
    type: ParameterType.Mixed,
    help: 'The targets of the sidebar links',
    validate(value) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) {
            throw new SyntaxError(`sidebarLinkTargets must be an object with string labels as keys and string targets as values.`);
        }
        if (Object.values(value).some((item) => typeof item !== 'string')) {
            throw new SyntaxError(`All values of sidebarLinkTargets must be string targets, e.g. '_self' | '_blank'.`);
        }
    },
};


export const preventModulesLink: DeclarationOption = {
    name: 'preventModulesLink',
    type: ParameterType.Boolean,
    help: 'Whether to prevent the interaction of the modules link',
};


export const hideIndexContentTitle: DeclarationOption = {
    name: 'hideIndexContentTitle',
    type: ParameterType.Boolean,
    help: 'Whether to hide the content title from the index page',
};


export const footerAlign: DeclarationOption = {
    name: 'footerAlign',
    type: ParameterType.String,
    help: 'The alignment of the footer',
    validate(value) {
        if (!value || !['left', 'center', 'right'].includes(value)) {
            throw new SyntaxError(`footerAlign must be a position string value, e.g. 'left' | 'center' | 'right'.`);
        }
    }
};
