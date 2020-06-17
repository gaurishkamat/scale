var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Method, Host, Element } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './button.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Button {
    constructor() {
        /** (optional) Button class */
        this.customClass = '';
        /** (optional) Button size */
        this.size = '';
        /** (optional) Button variant */
        this.variant = '';
        /** (optional) Disabled button */
        this.disabled = false;
        /** (optional) Icon only */
        this.iconSize = 24;
        /** (optional) Link button */
        this.href = '';
        /** (optional) Link target button */
        this.target = '_self';
        this.ariaLabel = '';
        this.focusable = true;
        this.role = '';
    }
    /** Button method: disable()  */
    async disable() {
        this.disabled = true;
    }
    /** Button method: enable()  */
    async enable() {
        this.disabled = false;
    }
    componentWillLoad() {
        this.hasSlotBefore = !!this.hostElement.querySelector('[slot="before"]');
        this.hasSlotAfter = !!this.hostElement.querySelector('[slot="after"]');
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const { classes } = this.stylesheet;
        const Tag = this.href ? 'a' : 'button';
        const role = this.href
            ? { role: this.role || 'button' }
            : this.role
                ? { role: this.role }
                : {};
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h(Tag, Object.assign({ class: this.getCssClassMap(), tabindex: this.focusable ? 0 : -1 }, (!!this.href ? { href: this.href } : {}), (!!this.href ? { target: this.target } : {}), (!!!this.href ? { disabled: this.disabled } : {}), (!!this.ariaLabel ? { 'aria-label': this.ariaLabel } : {}), role),
                !!this.icon === false &&
                    (!!this.iconBefore === true || this.hasSlotBefore) && (h("div", { class: classes.button__before }, !!this.iconBefore ? (h("scale-icon", { path: this.iconBefore, size: this.iconSize })) : (h("slot", { name: "before" })))),
                this.icon && this.icon !== '' ? (h("scale-icon", { path: this.icon, size: this.iconSize })) : (h("slot", null)),
                !!this.icon === false &&
                    (!!this.iconAfter === true || this.hasSlotAfter) && (h("div", { class: classes.button__after }, !!this.iconAfter ? (h("scale-icon", { path: this.iconAfter, size: this.iconSize })) : (h("slot", { name: "after" })))))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.button, this.customClass && this.customClass, this.size && classes[`button--size-${this.size}`], this.variant && classes[`button--variant-${this.variant}`], this.icon && this.icon !== '' && classes[`button--icon-only`], this.disabled && classes[`button--disabled`]);
    }
    static get is() { return "scale-button"; }
    static get encapsulation() { return "shadow"; }
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
                "text": "(optional) Button class"
            },
            "attribute": "custom-class",
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
                "text": "(optional) Button size"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "''"
        },
        "variant": {
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
                "text": "(optional) Button variant"
            },
            "attribute": "variant",
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
                "text": "(optional) Disabled button"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "iconSize": {
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
                "text": "(optional) Icon only"
            },
            "attribute": "icon-size",
            "reflect": false,
            "defaultValue": "24"
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
                "text": "(optional) Icon only"
            },
            "attribute": "icon",
            "reflect": false
        },
        "iconBefore": {
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
                "text": "(optional) Icon before"
            },
            "attribute": "icon-before",
            "reflect": false
        },
        "iconAfter": {
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
                "text": "(optional) Icon after"
            },
            "attribute": "icon-after",
            "reflect": false
        },
        "href": {
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
                "text": "(optional) Link button"
            },
            "attribute": "href",
            "reflect": false,
            "defaultValue": "''"
        },
        "target": {
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
                "text": "(optional) Link target button"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "'_self'"
        },
        "ariaLabel": {
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
                "text": ""
            },
            "attribute": "aria-label",
            "reflect": false,
            "defaultValue": "''"
        },
        "focusable": {
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
                "text": ""
            },
            "attribute": "focusable",
            "reflect": false,
            "defaultValue": "true"
        },
        "role": {
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
                "text": ""
            },
            "attribute": "role",
            "reflect": false,
            "defaultValue": "''"
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
    static get methods() { return {
        "disable": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Button method: disable()",
                "tags": []
            }
        },
        "enable": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Button method: enable()",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
__decorate([
    CssInJs('Button', styles)
], Button.prototype, "stylesheet", void 0);
