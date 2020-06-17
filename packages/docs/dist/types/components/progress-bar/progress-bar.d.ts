import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class ProgressBar implements Base {
    /** (optional) Progress bar class */
    customClass?: string;
    /** (required) Progress bar percentage */
    percentage: number;
    /** (optional) Progress bar variant */
    variant?: string;
    /** (optional) Progress bar stroke width */
    strokeWidth?: number;
    /** (optional) Progress bar percentage text */
    showText?: boolean;
    /** (optional) Progress text display inside bar */
    textInside?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
