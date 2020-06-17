var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './progress-bar.styles';
import { CssInJs } from '../../utils/css-in-js';
export class ProgressBar {
    constructor() {
        /** (optional) Progress bar class */
        this.customClass = '';
        /** (required) Progress bar percentage */
        this.percentage = 0;
        /** (optional) Progress bar stroke width */
        this.strokeWidth = 6;
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const { classes } = this.stylesheet;
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("div", { class: classes['progress-bar'] },
                h("div", { class: classes['progress-bar__outer'], style: { height: `${this.strokeWidth}px` } },
                    h("div", { class: `${classes['progress-bar__inner']} ${this.getCssClassMap()}`, style: { width: `${this.percentage}%` } }, !!this.textInside && (h("div", { class: classes['progress-bar__inner-text'] }, `${this.percentage}%`)))),
                !!this.showText && (h("div", { class: classes['progress-bar__text'] }, `${this.percentage}%`)))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes['progress-bar'], this.customClass && this.customClass, this.variant && classes[`progress-bar--variant-${this.variant}`]);
    }
    static get is() { return "scale-progress-bar"; }
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
                "text": "(optional) Progress bar class"
            },
            "attribute": "custom-class",
            "reflect": false,
            "defaultValue": "''"
        },
        "percentage": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "(required) Progress bar percentage"
            },
            "attribute": "percentage",
            "reflect": false,
            "defaultValue": "0"
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
                "text": "(optional) Progress bar variant"
            },
            "attribute": "variant",
            "reflect": false
        },
        "strokeWidth": {
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
                "text": "(optional) Progress bar stroke width"
            },
            "attribute": "stroke-width",
            "reflect": false,
            "defaultValue": "6"
        },
        "showText": {
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
                "text": "(optional) Progress bar percentage text"
            },
            "attribute": "show-text",
            "reflect": false
        },
        "textInside": {
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
                "text": "(optional) Progress text display inside bar"
            },
            "attribute": "text-inside",
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
    CssInJs('ProgressBar', styles)
], ProgressBar.prototype, "stylesheet", void 0);
