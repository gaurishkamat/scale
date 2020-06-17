import { HTMLStencilElement } from '@stencil/core/internal';
import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Modal implements Base {
    hostElement: HTMLStencilElement;
    /** (optional) Modal class */
    customClass?: string;
    /** (optional) Modal size */
    size?: string;
    /** (optional) Modal variant */
    variant?: string;
    /** (required) Modal opened */
    opened?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    hasSlotHeader: boolean;
    hasSlotClose: boolean;
    hasSlotActions: boolean;
    /** Modal method: open() */
    open(): Promise<void>;
    closeModal: () => void;
    /** Modal method: onCloseModal() */
    close(): Promise<void>;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
