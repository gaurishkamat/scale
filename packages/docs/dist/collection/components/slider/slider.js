var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './slider.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Slider {
    constructor() {
        /** (optional) Slider class */
        this.customClass = '';
        /** (optional) Slider range start value */
        this.min = 0;
        /** (optional) Slider range max value */
        this.max = 100;
        /** (optional) Slider binding value */
        this.value = 0;
        /** (optional) Slider step */
        this.step = 1;
        /** (optional) Slider display value */
        this.label = false;
        this.updateValue = event => {
            this.value = event.target.value;
        };
    }
    componentWillLoad() {
        if (this.min > this.value) {
            this.value = this.min;
        }
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const { classes } = this.stylesheet;
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("div", { class: this.getCssClassMap() },
                h("input", { class: classes.slider__input, type: "range", min: this.min, max: this.max, value: this.value, step: this.step, onInput: this.updateValue }),
                this.label && h("span", { class: classes.slider__text }, this.value))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.slider, this.customClass && this.customClass);
    }
    static get is() { return "scale-slider"; }
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
                "text": "(optional) Slider class"
            },
            "attribute": "custom-class",
            "reflect": false,
            "defaultValue": "''"
        },
        "min": {
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
                "text": "(optional) Slider range start value"
            },
            "attribute": "min",
            "reflect": false,
            "defaultValue": "0"
        },
        "max": {
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
                "text": "(optional) Slider range max value"
            },
            "attribute": "max",
            "reflect": false,
            "defaultValue": "100"
        },
        "value": {
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
                "text": "(optional) Slider binding value"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        },
        "step": {
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
                "text": "(optional) Slider step"
            },
            "attribute": "step",
            "reflect": false,
            "defaultValue": "1"
        },
        "label": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "(optional) Slider display value"
            },
            "attribute": "label",
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
    CssInJs('Slider', styles)
], Slider.prototype, "stylesheet", void 0);
