var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './text.styles';
import { CssInJs } from '../../utils/css-in-js';
import { getTheme } from '../../theme/theme';
const variants = () => {
    const variantClasses = {};
    const themeVariants = getTheme().typography.variants;
    Object.keys(themeVariants).map(variant => {
        variantClasses[`text--variant-${variant}`] = themeVariants[variant];
    });
    return variantClasses;
};
export class Text {
    constructor() {
        /** (optional) Text class */
        this.customClass = '';
        /** (optional) Text variant */
        this.variant = 'body';
        /** (optional) Text tag */
        this.tag = '';
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        this.stylesheet.addRules(variants());
        const Tag = this.tag || 'p';
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h(Tag, { class: this.getCssClassMap() },
                h("slot", null))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.text, this.customClass && this.customClass, this.variant && classes[`text--variant-${this.variant}`]);
    }
    static get is() { return "scale-text"; }
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
                "text": "(optional) Text class"
            },
            "attribute": "custom-class",
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
                "text": "(optional) Text variant"
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "'body'"
        },
        "tag": {
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
                "text": "(optional) Text tag"
            },
            "attribute": "tag",
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
}
__decorate([
    CssInJs('Text', styles)
], Text.prototype, "stylesheet", void 0);
