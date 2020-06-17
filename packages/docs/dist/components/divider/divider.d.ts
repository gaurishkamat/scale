import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Divider implements Base {
    /** (optional) Divider class */
    customClass?: string;
    /** (optional) Divider size */
    size?: string;
    /** (optional) Divider vertical */
    vertical?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
