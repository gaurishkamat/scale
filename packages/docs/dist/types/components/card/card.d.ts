import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Card implements Base {
    /** (optional) Card class */
    customClass?: string;
    /** (optional) Link card */
    href?: string;
    /** (optional) Link card target */
    target?: string;
    /** (optional) Link interactive */
    interactive?: boolean;
    /** (optional) Link disabled */
    disabled?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
