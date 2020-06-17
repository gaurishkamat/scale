import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Icon implements Base {
    /** (optional) Tag class */
    customClass?: string;
    /** (optional) Tag theme */
    name?: string;
    path: string;
    size?: number;
    height?: number;
    width?: number;
    viewBox?: string;
    focusable?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
