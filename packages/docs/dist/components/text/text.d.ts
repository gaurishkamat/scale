import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Text implements Base {
    /** (optional) Text class */
    customClass?: string;
    /** (optional) Text variant */
    variant?: string;
    /** (optional) Text tag */
    tag?: string;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
