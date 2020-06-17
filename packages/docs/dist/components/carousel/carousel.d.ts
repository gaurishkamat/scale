import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Carousel implements Base {
    hostElement: HTMLElement;
    /** (optional) Carousel class */
    customClass?: string;
    /** (optional) carousel display direction */
    vertical?: boolean;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    slidesArray: any[];
    value: number;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    handleSlideChange: (direction: any) => void;
    setActiveSlide: (index: any) => void;
    setTransformValue: () => string;
    setActiveCssClass: (index: any) => "" | "carousel__indicator--active";
    render(): any;
    getCssClassMap(): CssClassMap;
}
