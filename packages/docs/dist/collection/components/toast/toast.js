var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, Method, h, State, Element, Host, } from '@stencil/core';
import classNames from 'classnames';
import { formatDistance, subSeconds } from 'date-fns';
import { styles } from './toast.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Toast {
    constructor() {
        /** (optional) Toast class */
        this.customClass = '';
        /** (optional) Toast size */
        this.size = '';
        /** (optional) Toast variant */
        this.variant = '';
        /** (optional) Toast autohide time */
        this.autoHide = false;
        /** (optional) Animated toast */
        this.animated = true;
        /** (optional) Toast position at the top */
        this.positionTop = 12;
        /** (optional) Toast position right */
        this.positionRight = 12;
        /** (optional) Toast fade duration */
        this.fadeDuration = 500;
        /** (optional) Toast state progress */
        this.progress = 0;
        /** (optional) Toast state height with offset */
        this.toastHeightWithOffset = 0;
        this.hideToast = false;
        this.timerId = null;
        this.close = () => {
            clearInterval(this.timerId);
            this.hideToast = true;
            setTimeout(() => {
                this.timerId = null;
                this.opened = false;
                this.progress = 0;
            }, this.fadeDuration);
        };
        this.getTime = () => {
            const formattedTime = this.time &&
                formatDistance(subSeconds(this.time, 3), new Date(), { addSuffix: true });
            return formattedTime;
        };
        this.setToastTimeout = () => {
            if (this.opened && this.autoHide !== false && !this.timerId) {
                this.timerId = setInterval(() => {
                    this.progress += 1 / (this.getAutoHide() / 1000);
                    if (this.progress >= 100) {
                        this.close();
                    }
                }, 10);
            }
        };
        this.transitions = offset => `
    @keyframes fadeIn {
      from {
        opacity: 0;
        top: -${offset}px;
      }
      to {
        opacity: 1;
        top: ${this.positionTop}px;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        top: ${this.positionTop}px;
      }
      to {
        opacity: 0;
        top: -${offset}px;
      }
    }
  `;
        this.animationStyle = offset => {
            this.stylesheet.addRule('toast--show', {
                right: `${this.positionRight}px`,
                animation: `fadeIn ${this.fadeDuration / 1000}s ease-in-out`,
                top: `${this.positionTop}px`,
                opacity: 1,
            });
            this.stylesheet.addRule('toast--hide', {
                right: `${this.positionRight}px`,
                animation: `fadeOut ${this.fadeDuration / 1000}s ease-in-out`,
                top: `-${offset}px`,
                opacity: 0,
            });
        };
    }
    componentDidUnload() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
            this.opened = false;
            this.progress = 0;
        }
    }
    componentWillUpdate() { }
    /** Toast method: open() */
    async open() {
        this.opened = true;
        this.hideToast = false;
    }
    render() {
        const { classes } = this.stylesheet;
        this.setToastTimeout();
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("style", null, this.transitions(this.toastHeightWithOffset)),
            h("style", null, this.animationStyle(this.toastHeightWithOffset)),
            h("div", { class: this.getCssClassMap() },
                h("div", { class: classes.toast__header },
                    h("slot", { name: "header" }),
                    "header",
                    h("small", null, this.getTime()),
                    h("a", { onClick: this.close },
                        h("span", { "aria-hidden": "true" }, "\u00D7"))),
                this.autoHide && (h("div", { class: classes.toast__progress, style: { width: `${this.progress}%` } }, "\u00A0")),
                h("div", { class: classes.toast__body },
                    h("slot", null)))));
    }
    getToastHeightWithOffset() {
        const { classes } = this.stylesheet;
        const toastHeight = this.element.shadowRoot.querySelector(`.${classes.toast}`).scrollHeight;
        this.toastHeightWithOffset = toastHeight + this.positionTop;
    }
    getAutoHide() {
        if (typeof this.autoHide === 'number' ||
            typeof this.autoHide === 'string') {
            return Number(this.autoHide);
        }
        else {
            return 0;
        }
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.toast, this.customClass && this.customClass, this.size && classes[`toast--size-${this.size}`], this.variant && classes[`toast--variant-${this.variant}`], !!this.opened && classes[`toast--opened`], !!!this.hideToast && classes[`toast--show`], !!this.hideToast && classes[`toast--hide`]);
    }
    static get is() { return "scale-toast"; }
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
                "text": "(optional) Toast class"
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
                "text": "(optional) Toast size"
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
                "text": "(optional) Toast variant"
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "''"
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Toast opened"
            },
            "attribute": "opened",
            "reflect": true
        },
        "autoHide": {
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
                "text": "(optional) Toast autohide time"
            },
            "attribute": "auto-hide",
            "reflect": false,
            "defaultValue": "false"
        },
        "animated": {
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
                "text": "(optional) Animated toast"
            },
            "attribute": "animated",
            "reflect": false,
            "defaultValue": "true"
        },
        "time": {
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
                "text": "(optional) Toast time"
            },
            "attribute": "time",
            "reflect": false
        },
        "positionTop": {
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
                "text": "(optional) Toast position at the top"
            },
            "attribute": "position-top",
            "reflect": false,
            "defaultValue": "12"
        },
        "positionRight": {
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
                "text": "(optional) Toast position right"
            },
            "attribute": "position-right",
            "reflect": false,
            "defaultValue": "12"
        },
        "fadeDuration": {
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
                "text": "(optional) Toast fade duration"
            },
            "attribute": "fade-duration",
            "reflect": false,
            "defaultValue": "500"
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
    static get states() { return {
        "progress": {},
        "toastHeightWithOffset": {}
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
                "text": "Toast method: open()",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
__decorate([
    CssInJs('Toast', styles)
], Toast.prototype, "stylesheet", void 0);
