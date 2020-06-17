var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './card.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Card {
    constructor() {
        /** (optional) Card class */
        this.customClass = '';
        /** (optional) Link card */
        this.href = '';
        /** (optional) Link card target */
        this.target = '_self';
        /** (optional) Link interactive */
        this.interactive = false;
        /** (optional) Link disabled */
        this.disabled = false;
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const { classes } = this.stylesheet;
        const Tag = !!this.href ? 'a' : 'div';
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h(Tag, Object.assign({ class: this.getCssClassMap() }, (!!this.href ? { href: this.href } : {}), (!!this.href ? { target: this.target } : {}), (!!this.interactive ? { tabindex: 1 } : {})),
                h("div", { class: classes.card__body },
                    h("slot", null)))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.card, this.customClass && this.customClass, (!!this.href || this.interactive) && classes[`card--interactive`], this.disabled && classes['card--disabled']);
    }
    static get is() { return "scale-card"; }
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
                "text": "(optional) Card class"
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Link card"
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
                "text": "(optional) Link card target"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "'_self'"
        },
        "interactive": {
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
                "text": "(optional) Link interactive"
            },
            "attribute": "interactive",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "(optional) Link disabled"
            },
            "attribute": "disabled",
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
    CssInJs('Card', styles)
], Card.prototype, "stylesheet", void 0);
