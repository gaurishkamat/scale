var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './divider.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Divider {
    constructor() {
        /** (optional) Divider class */
        this.customClass = '';
        /** (optional) Divider size */
        this.size = '';
        /** (optional) Divider vertical */
        this.vertical = false;
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const { classes } = this.stylesheet;
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("div", { class: this.getCssClassMap() }, !this.vertical ? h("hr", null) : h("span", { class: classes.divider__vertical }))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.divider, this.customClass && this.customClass, this.size && classes[`divider--size-${this.size}`], this.vertical && classes[`divider--vertical`]);
    }
    static get is() { return "scale-divider"; }
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
                "text": "(optional) Divider class"
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
                "text": "(optional) Divider size"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "''"
        },
        "vertical": {
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
                "text": "(optional) Divider vertical"
            },
            "attribute": "vertical",
            "reflect": false,
            "defaultValue": "false"
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
    CssInJs('Divider', styles)
], Divider.prototype, "stylesheet", void 0);
