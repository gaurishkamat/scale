var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './list-item.styles';
import { CssInJs } from '../../../utils/css-in-js';
export class ListItem {
    constructor() {
        /** (optional) list Icon size */
        this.iconSize = 16;
    }
    componentWillLoad() { }
    componentDidUnload() { }
    componentWillUpdate() { }
    render() {
        this.stylesheet.update({
            type: this.type,
        });
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("li", { class: this.getCssClassMap() },
                !!this.icon && (h("scale-icon", { path: this.icon, size: this.iconSize })),
                h("slot", null))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes['list-item'], this.type && classes['list-item--type'], !!this.icon && classes[`list-item--has-icon`]);
    }
    static get is() { return "scale-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
                "text": "(optional) List item icon"
            },
            "attribute": "icon",
            "reflect": false
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
                "text": "(optional) list Icon size"
            },
            "attribute": "icon-size",
            "reflect": false,
            "defaultValue": "16"
        },
        "type": {
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
                "text": "(optional) List item style type"
            },
            "attribute": "type",
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
    CssInJs('ListItem', styles)
], ListItem.prototype, "stylesheet", void 0);
