import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Switch implements Base {
    /** (optional) Switch class */
    customClass?: string;
    /** (optional) Active switch */
    active?: boolean;
    /** (optional) Disabled switch */
    disabled?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    toggleSwitch: () => void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
