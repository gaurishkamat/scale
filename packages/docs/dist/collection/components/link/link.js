var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './link.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Link {
    constructor() {
        /** (optional) Link class */
        this.customClass = '';
        /** (optional) Disabled link */
        this.disabled = false;
        /** (optional) Block link */
        this.block = false;
        /** (optional) Link underline */
        this.underline = true;
        /** (optional) Link open a new tag */
        this.target = '_self';
        /** (optional) Link variant */
        this.variant = '';
        /** (optional) Icon size */
        this.iconSize = 24;
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const Tag = !this.disabled ? 'a' : 'div';
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h(Tag, Object.assign({ class: this.getCssClassMap() }, (!this.disabled ? { href: this.href } : {}), (!this.disabled ? { target: this.target } : {})),
                h("slot", null),
                this.icon && this.icon !== '' && (h("scale-icon", { path: this.icon, size: this.iconSize })))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.link, this.customClass && this.customClass, this.variant && classes[`link--variant-${this.variant}`], this.disabled && classes[`link--disabled`], this.block && classes[`link--block`], this.underline && classes[`link--underline`]);
    }
    static get is() { return "scale-link"; }
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
                "text": "(optional) Link class"
            },
            "attribute": "custom-class",
            "reflect": false,
            "defaultValue": "''"
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": "(optional) Link href"
            },
            "attribute": "href",
            "reflect": false
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
                "text": "(optional) Disabled link"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "block": {
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
                "text": "(optional) Block link"
            },
            "attribute": "block",
            "reflect": false,
            "defaultValue": "false"
        },
        "underline": {
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
                "text": "(optional) Link underline"
            },
            "attribute": "underline",
            "reflect": false,
            "defaultValue": "true"
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
                "text": "(optional) Link open a new tag"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "'_self'"
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
                "text": "(optional) Link variant"
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "''"
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
                "text": "(optional) Icon size"
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
}
__decorate([
    CssInJs('Link', styles)
], Link.prototype, "stylesheet", void 0);
