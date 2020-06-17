import { HTMLStencilElement } from '../../stencil-public-runtime';
import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Alert implements Base {
    hostElement: HTMLStencilElement;
    /** (optional) Alert class */
    customClass?: string;
    /** (optional) Alert size */
    size?: string;
    /** (optional) Alert variant */
    variant?: string;
    /** (optional) Alert title */
    headline: string;
    /** (optional) Alert opened */
    opened: boolean;
    /** (optional) Alert timeout */
    timeout?: boolean | number;
    /** (optional) Alert icon */
    icon?: string;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    defaultTimeout: number;
    hasSlotClose: boolean;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    close: () => void;
    /** Alert method: open() */
    open(): Promise<void>;
    onCloseAlertWithTimeout: () => any;
    render(): any;
    getCssClassMap(): CssClassMap;
}
