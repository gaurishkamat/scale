import { CssClassMap } from '../../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../../utils/base-interface';
export declare class ListItem implements Base {
    /** (optional) List item icon */
    icon?: string;
    /** (optional) list Icon size */
    iconSize?: number;
    /** (optional) List item style type */
    type?: string;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillLoad(): void;
    componentDidUnload(): void;
    componentWillUpdate(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
