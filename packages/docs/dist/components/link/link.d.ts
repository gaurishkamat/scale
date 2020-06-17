import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Link implements Base {
    /** (optional) Link class */
    customClass?: string;
    /** (optional) Link href */
    href: string;
    /** (optional) Disabled link */
    disabled?: boolean;
    /** (optional) Block link */
    block?: boolean;
    /** (optional) Link underline */
    underline?: boolean;
    /** (optional) Link open a new tag */
    target?: string;
    /** (optional) Link variant */
    variant?: string;
    /** (optional) Icon size */
    iconSize?: number;
    /** (optional) Icon only */
    icon?: string;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
