import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Breadcrumb implements Base {
    hostElement: HTMLElement;
    separator?: string;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    linksArray: any[];
    separatorSlot: HTMLElement;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    setLinksArray(): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
