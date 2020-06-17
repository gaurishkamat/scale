import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Table implements Base {
    hostElement: HTMLElement;
    /** (optional) Tag class */
    customClass?: string;
    /** (optional) Display sort arrows on/off */
    showSort?: boolean;
    /** (optional) Visual size */
    size?: 'default' | 'small' | string;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    /** object of the slots in use */
    slots: {
        header?: Element;
        table?: Element;
    };
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
