var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Host, Event } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './tag.styles';
import { CssInJs } from '../../utils/css-in-js';
import { defaultTheme } from '../../theme/defaultTheme';
export class Tag {
    constructor() {
        /** (optional) Tag class */
        this.customClass = '';
        /** (optional) Tag size */
        this.size = '';
        /** (optional) Tag variant */
        this.variant = '';
        /** (optional) Tag href */
        this.href = '';
        /** (optional) Tag target */
        this.target = '_self';
        /** (optional) Tag dismissable */
        this.dismissable = false;
        /** (optional) Tag disabled */
        this.disabled = false;
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    handleClose(event) {
        event.preventDefault();
        event.stopPropagation();
        this.scaleClose.emit(event);
    }
    render() {
        const Element = !!this.href && !this.disabled ? 'a' : 'span';
        const linkProps = !!this.href
            ? {
                href: this.href,
                target: this.target,
            }
            : {};
        const iconProps = !this.disabled
            ? {
                focusable: true,
                onClick: event => this.handleClose(event),
            }
            : {};
        const theme = typeof window !== 'undefined' &&
            window.scale &&
            window.scale.theme;
        const { icons } = theme || defaultTheme;
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h(Element, Object.assign({ class: this.getCssClassMap() }, linkProps),
                h("slot", null),
                this.dismissable && (h("scale-icon", Object.assign({ size: 16, path: icons.close }, iconProps))))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.tag, this.customClass && this.customClass, this.size && classes[`tag--size-${this.size}`], this.variant && classes[`tag--variant-${this.variant}`], !!this.href && classes[`tag--link`], !!this.dismissable && classes[`tag--dismissable`], !!this.disabled && classes[`tag--disabled`]);
    }
    static get is() { return "scale-tag"; }
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
                "text": "(optional) Tag class"
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
                "text": "(optional) Tag size"
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
                "text": "(optional) Tag variant"
            },
            "attribute": "variant",
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
                "text": "(optional) Tag href"
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
                "text": "(optional) Tag target"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "'_self'"
        },
        "dismissable": {
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
                "text": "(optional) Tag dismissable"
            },
            "attribute": "dismissable",
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
                "text": "(optional) Tag disabled"
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
    static get events() { return [{
            "method": "scaleClose",
            "name": "scaleClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "(optional) Close icon click event"
            },
            "complexType": {
                "original": "MouseEvent",
                "resolved": "MouseEvent",
                "references": {
                    "MouseEvent": {
                        "location": "global"
                    }
                }
            }
        }]; }
}
__decorate([
    CssInJs('Tag', styles)
], Tag.prototype, "stylesheet", void 0);
