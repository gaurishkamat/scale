var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, Event, h, Host, State, } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './input.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Input {
    constructor() {
        /** (optional) Input text class */
        this.customClass = '';
        /** (optional) Input type */
        this.type = 'text';
        /** (optional) Input name */
        this.name = '';
        /** (optional) Input label */
        this.label = '';
        /** (optional) Input size */
        this.size = '';
        /** (optional) Input helper text */
        this.helperText = '';
        /** (optional) Input status */
        this.status = '';
        /** (optional) Input placeHolder */
        this.placeholder = '';
        /** (optional) Input checkbox checked */
        this.checked = this.preChecked;
    }
    componentWillLoad() { }
    componentWillUpdate() { }
    componentDidUnload() { }
    handleChange(event) {
        this.value = event.target ? event.target.value : this.value;
        this.checked = event.target.checked;
        this.checkedValue = event.target.value;
        this.scaleChange.emit(event);
    }
    handleFocus(event) {
        this.scaleFocus.emit(event);
    }
    handleBlur(event) {
        this.scaleBlur.emit(event);
    }
    handleKeyDown(event) {
        this.scaleKeyDown.emit(event);
    }
    render() {
        if (this.type === 'checkbox') {
            return (h(Host, null,
                h("style", null, this.stylesheet.toString()),
                h("div", { class: this.getCssClassMap() },
                    h("div", { class: classNames('input__checkbox-container') },
                        h("input", { type: "checkbox", name: this.name, class: classNames('input__checkbox'), id: this.inputId, onChange: event => this.handleChange(event), value: this.value, checked: this.checked, disabled: this.disabled }),
                        h("span", { class: classNames('input__checkbox-placeholder'), tabIndex: 1 }),
                        !!this.checked && !!this.icon && (h("scale-icon", { path: this.icon }))),
                    h("label", { class: "input__label", htmlFor: this.name }, this.label))));
        }
        if (this.type === 'radio') {
            return (h(Host, null,
                h("style", null, this.stylesheet.toString()),
                h("div", { class: this.getCssClassMap() },
                    h("input", { type: "radio", name: this.name, class: classNames('input__radio'), id: this.inputId, onChange: event => this.handleChange(event), value: this.value, checked: this.preChecked, disabled: this.disabled }),
                    h("label", { class: "input__label", htmlFor: this.inputId }, this.label))));
        }
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("div", { class: this.getCssClassMap() },
                !!this.label && this.variant === 'static' && (h("label", { class: "input__label" }, this.label)),
                h("input", { type: this.type, class: classNames('input__input', this.label && 'has-label'), value: this.value, name: this.name, required: this.required, minLength: this.minLength, maxLength: this.maxLength, onInput: event => this.handleChange(event), onFocus: event => this.handleFocus(event), onBlur: event => this.handleBlur(event), onKeyDown: event => this.handleKeyDown(event), placeholder: this.placeholder, disabled: this.disabled }),
                !!this.label && this.variant === 'animated' && (h("label", { class: "input__label" }, this.label)),
                (!!this.helperText || !!this.counter) && (h("div", { class: "input__meta" },
                    !!this.helperText && (h("div", { class: "input__helper-text" }, this.helperText)),
                    this.counter && (h("div", { class: "input__counter" },
                        !!this.value ? this.value.length : 0,
                        " / ",
                        this.maxLength)))))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        const isAnimated = (!!this.placeholder || !!this.value) &&
            !!this.label &&
            this.variant === 'animated';
        return classNames(classes.input, this.customClass && this.customClass, this.type && classes[`input--type-${this.type}`], this.checked && classes[`input--checked`], this.size && classes[`input--size-${this.size}`], this.variant && classes[`input--variant-${this.variant}`], this.disabled && classes[`input--disabled`], this.status && classes[`input--status-${this.status}`], isAnimated && 'animated');
    }
    static get is() { return "scale-input"; }
    static get properties() { return {
        "customClass": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input text class"
            },
            "attribute": "custom-class",
            "reflect": false,
            "defaultValue": "''"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| 'email'\n    | 'hidden'\n    | 'number'\n    | 'password'\n    | 'tel'\n    | 'text'\n    | 'checkbox'\n    | 'radio'\n    | 'url'",
                "resolved": "\"checkbox\" | \"email\" | \"hidden\" | \"number\" | \"password\" | \"radio\" | \"tel\" | \"text\" | \"url\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input type"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'text'"
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input name"
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "''"
        },
        "variant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'animated' | 'static'",
                "resolved": "\"animated\" | \"static\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input label variant"
            },
            "attribute": "variant",
            "reflect": false
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input label"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input size"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "''"
        },
        "helperText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input helper text"
            },
            "attribute": "helper-text",
            "reflect": false,
            "defaultValue": "''"
        },
        "status": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input status"
            },
            "attribute": "status",
            "reflect": false,
            "defaultValue": "''"
        },
        "maxLength": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input max length"
            },
            "attribute": "max-length",
            "reflect": false
        },
        "minLength": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input min length"
            },
            "attribute": "min-length",
            "reflect": false
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input placeHolder"
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "''"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input disabled"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input required"
            },
            "attribute": "required",
            "reflect": false
        },
        "counter": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input counter"
            },
            "attribute": "counter",
            "reflect": false
        },
        "preChecked": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) radio checked value"
            },
            "attribute": "pre-checked",
            "reflect": false
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input value"
            },
            "attribute": "value",
            "reflect": false
        },
        "inputId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input checkbox id"
            },
            "attribute": "input-id",
            "reflect": false
        },
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input checkbox checked icon"
            },
            "attribute": "icon",
            "reflect": false
        },
        "styles": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "StyleSheet",
                "resolved": "StyleSheet<string | number | symbol>",
                "references": {
                    "StyleSheet": {
                        "location": "import",
                        "path": "jss"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Injected jss styles"
            }
        }
    }; }
    static get states() { return {
        "checked": {},
        "checkedValue": {}
    }; }
    static get events() { return [{
            "method": "scaleChange",
            "name": "scaleChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input text event changed"
            },
            "complexType": {
                "original": "InputEvent",
                "resolved": "InputEvent",
                "references": {
                    "InputEvent": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "scaleFocus",
            "name": "scaleFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input focus event"
            },
            "complexType": {
                "original": "FocusEvent",
                "resolved": "FocusEvent",
                "references": {
                    "FocusEvent": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "scaleBlur",
            "name": "scaleBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input blur event"
            },
            "complexType": {
                "original": "FocusEvent",
                "resolved": "FocusEvent",
                "references": {
                    "FocusEvent": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "scaleKeyDown",
            "name": "scaleKeyDown",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "(optional) Input keyDown event"
            },
            "complexType": {
                "original": "KeyboardEvent",
                "resolved": "KeyboardEvent",
                "references": {
                    "KeyboardEvent": {
                        "location": "global"
                    }
                }
            }
        }]; }
}
__decorate([
    CssInJs('Input', styles)
], Input.prototype, "stylesheet", void 0);
