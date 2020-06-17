import { EventEmitter } from '../../stencil-public-runtime';
import { CssClassMap } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
export declare class Input implements Base {
    /** (optional) Input text class */
    customClass?: string;
    /** (optional) Input type */
    type?: 'email' | 'hidden' | 'number' | 'password' | 'tel' | 'text' | 'checkbox' | 'radio' | 'url';
    /** (optional) Input name */
    name?: string;
    /** (optional) Input label variant */
    variant?: 'animated' | 'static';
    /** (optional) Input label */
    label?: string;
    /** (optional) Input size */
    size?: string;
    /** (optional) Input helper text */
    helperText?: string;
    /** (optional) Input status */
    status?: string;
    /** (optional) Input max length */
    maxLength?: number;
    /** (optional) Input min length */
    minLength?: number;
    /** (optional) Input placeHolder */
    placeholder?: string;
    /** (optional) Input disabled */
    disabled?: boolean;
    /** (optional) Input required */
    required?: boolean;
    /** (optional) Input counter */
    counter?: boolean;
    /** (optional) radio checked value */
    preChecked?: boolean;
    /** (optional) Input value */
    value?: string;
    /** (optional) Input checkbox id */
    inputId?: string;
    /** (optional) Input checkbox checked icon */
    icon?: string;
    /** (optional) Input text event changed */
    scaleChange: EventEmitter<InputEvent>;
    /** (optional) Input focus event */
    scaleFocus: EventEmitter<FocusEvent>;
    /** (optional) Input blur event */
    scaleBlur: EventEmitter<FocusEvent>;
    /** (optional) Input keyDown event */
    scaleKeyDown: EventEmitter<KeyboardEvent>;
    /** (optional) Injected jss styles */
    styles?: StyleSheet;
    /** decorator Jss stylesheet */
    stylesheet: StyleSheet;
    /** (optional) Input checkbox checked */
    checked?: boolean;
    checkedValue?: string;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidUnload(): void;
    handleChange(event: any): void;
    handleFocus(event: any): void;
    handleBlur(event: any): void;
    handleKeyDown(event: any): void;
    render(): any;
    getCssClassMap(): CssClassMap;
}
