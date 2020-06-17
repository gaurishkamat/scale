import { EventEmitter } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Tag implements Base {
    /** (optional) Tag class */
    customClass?: string;
    /** (optional) Tag size */
    size?: string;
    /** (optional) Tag variant */
    variant?: string;
    /** (optional) Tag href */
    href?: string;
    /** (optional) Tag target */
    target?: string;
    /** (optional) Tag dismissable */
    dismissable?: boolean;
    /** (optional) Tag disabled */
    disabled?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    /** (optional) Close icon click event */
    scaleClose: EventEmitter<MouseEvent>;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    handleClose(event: any): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
