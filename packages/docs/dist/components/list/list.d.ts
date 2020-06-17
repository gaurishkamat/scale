import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class List implements Base {
    /** (optional) List variant */
    variant?: string;
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
