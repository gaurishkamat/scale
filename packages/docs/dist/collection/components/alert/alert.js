var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Method, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './alert.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Alert {
    constructor() {
        /** (optional) Alert class */
        this.customClass = '';
        /** (optional) Alert size */
        this.size = '';
        /** (optional) Alert variant */
        this.variant = '';
        /** (optional) Alert timeout */
        this.timeout = false;
        /** (optional) Alert icon */
        this.icon = '';
        this.defaultTimeout = 2000;
        this.close = () => {
            this.opened = false;
        };
        this.onCloseAlertWithTimeout = () => {
            if (this.timeout !== false) {
                if (typeof this.timeout === 'number') {
                    setTimeout(this.close, this.timeout);
                }
                else {
                    setTimeout(this.close, this.defaultTimeout);
                }
            }
            else {
                return null;
            }
        };
    }
    componentWillLoad() {
        this.hasSlotClose = !!this.hostElement.querySelector('[slot="close"]');
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    /** Alert method: open() */
    async open() {
        this.opened = true;
    }
    render() {
        const { classes } = this.stylesheet;
        this.onCloseAlertWithTimeout();
        if (!this.opened) {
            return null;
        }
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("div", { class: this.getCssClassMap() },
                h("div", { class: classes.alert__body },
                    h("div", { class: classes.alert__icon }, this.icon),
                    h("div", { class: classes.alert__content },
                        h("div", { class: classes.alert__headline }, this.headline),
                        h("slot", null))),
                h("a", { class: classes.alert__close, onClick: this.close }, this.hasSlotClose ? (h("div", { class: classes['alert__close-icon'] },
                    h("slot", { name: "close" }))) : ('x')))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.alert, this.customClass && this.customClass, this.size && classes[`alert--size-${this.size}`], this.variant && classes[`alert--variant-${this.variant}`]);
    }
    static get is() { return "scale-alert"; }
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
                "text": "(optional) Alert class"
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
                "text": "(optional) Alert size"
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
                "text": "(optional) Alert variant"
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "''"
        },
        "headline": {
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
                "text": "(optional) Alert title"
            },
            "attribute": "headline",
            "reflect": true
        },
        "opened": {
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
                "text": "(optional) Alert opened"
            },
            "attribute": "opened",
            "reflect": true
        },
        "timeout": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "boolean | number",
                "resolved": "boolean | number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Alert timeout"
            },
            "attribute": "timeout",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "(optional) Alert icon"
            },
            "attribute": "icon",
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
        "open": {
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
                "text": "Alert method: open()",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
__decorate([
    CssInJs('Alert', styles)
], Alert.prototype, "stylesheet", void 0);
