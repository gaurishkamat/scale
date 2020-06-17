import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Slider implements Base {
    /** (optional) Slider class */
    customClass?: string;
    /** (optional) Slider range start value */
    min?: number;
    /** (optional) Slider range max value */
    max?: number;
    /** (optional) Slider binding value */
    value: number;
    /** (optional) Slider step */
    step: number;
    /** (optional) Slider display value */
    label: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    render(): any;
    updateValue: (event: any) => void;
    getCssClassMap(): CssClassMap;
}
