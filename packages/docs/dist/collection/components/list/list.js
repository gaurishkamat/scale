var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './list.styles';
import { CssInJs } from '../../utils/css-in-js';
export class List {
    constructor() {
        /** (optional) List variant */
        this.variant = 'unordered';
    }
    componentWillLoad() { }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        let Tag;
        switch (this.variant) {
            case 'ordered':
                Tag = 'ol';
                break;
            case 'definition':
                Tag = 'dl';
                break;
            default:
                Tag = 'ul';
                break;
        }
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h(Tag, { class: this.getCssClassMap() },
                h("slot", null))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.list, this.variant && classes[`list--variant-${this.variant}`]);
    }
    static get is() { return "scale-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
                "text": "(optional) List variant"
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "'unordered'"
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
                "text": ""
            }
        }
    }; }
}
__decorate([
    CssInJs('List', styles)
], List.prototype, "stylesheet", void 0);
