import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Button implements Base {
    hasSlotBefore: boolean;
    hasSlotAfter: boolean;
    hostElement: HTMLElement;
    /** (optional) Button class */
    customClass?: string;
    /** (optional) Button size */
    size?: string;
    /** (optional) Button variant */
    variant?: string;
    /** (optional) Disabled button */
    disabled?: boolean;
    /** (optional) Icon only */
    iconSize?: number;
    /** (optional) Icon only */
    icon?: string;
    /** (optional) Icon before */
    iconBefore?: string;
    /** (optional) Icon after */
    iconAfter?: string;
    /** (optional) Link button */
    href?: string;
    /** (optional) Link target button */
    target?: string;
    ariaLabel?: string;
    focusable?: boolean;
    role?: string;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    /** Button method: disable()  */
    disable(): Promise<void>;
    /** Button method: enable()  */
    enable(): Promise<void>;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
