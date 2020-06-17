import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Toast implements Base {
    /** (optional) Toast class */
    customClass?: string;
    /** (optional) Toast size */
    size?: string;
    /** (optional) Toast variant */
    variant?: string;
    /** (optional) Toast opened */
    opened?: boolean;
    /** (optional) Toast autohide time */
    autoHide?: boolean | number;
    /** (optional) Animated toast */
    animated?: boolean;
    /** (optional) Toast time */
    time?: number;
    /** (optional) Toast position at the top */
    positionTop?: number;
    /** (optional) Toast position right */
    positionRight?: number;
    /** (optional) Toast fade duration */
    fadeDuration?: number;
    /** (optional) Toast state progress */
    progress: number;
    /** (optional) Toast state height with offset */
    toastHeightWithOffset: number;
    element: HTMLElement;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    hideToast: boolean;
    timerId: any;
    componentDidUnload(): void;
    componentWillUpdate(): void;
    close: () => void;
    getTime: () => string;
    setToastTimeout: () => void;
    /** Toast method: open() */
    open(): Promise<void>;
    render(): any;
    transitions: (offset: any) => string;
    animationStyle: (offset: any) => void;
    getToastHeightWithOffset(): void;
    getAutoHide(): number;
    getCssClassMap(): CssClassMap;
}
