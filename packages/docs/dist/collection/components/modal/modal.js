var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Method, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './modal.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Modal {
    constructor() {
        /** (optional) Modal class */
        this.customClass = '';
        /** (optional) Modal size */
        this.size = '';
        /** (optional) Modal variant */
        this.variant = '';
        /** (required) Modal opened */
        this.opened = false;
        this.closeModal = () => {
            this.opened = false;
        };
    }
    /** Modal method: open() */
    async open() {
        this.opened = true;
    }
    /** Modal method: onCloseModal() */
    async close() {
        this.closeModal();
    }
    componentWillLoad() {
        this.hasSlotHeader = !!this.hostElement.querySelector('[slot="header"]');
        this.hasSlotClose = !!this.hostElement.querySelector('[slot="close"]');
        this.hasSlotActions = !!this.hostElement.querySelector('[slot="modal-actions"]');
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const { classes } = this.stylesheet;
        if (!this.opened) {
            return null;
        }
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("div", { class: this.getCssClassMap() },
                h("div", { class: classes.modal__backdrop, onClick: this.closeModal }),
                h("div", { class: classes.modal__content },
                    this.hasSlotHeader /* istanbul ignore next */ && (h("div", { class: classes.modal__header },
                        h("slot", { name: "header" }),
                        h("a", { class: classes.modal__close, onClick: this.closeModal }, this.hasSlotClose ? (h("div", { class: classes['modal__close-icon'] },
                            h("slot", { name: "close" }))) : ('x')))),
                    h("div", { class: classes.modal__body },
                        h("slot", null)),
                    this.hasSlotActions /* istanbul ignore next */ && (h("div", { class: classes.modal__actions },
                        h("slot", { name: "modal-actions" })))))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.modal, this.customClass && this.customClass, this.size && classes[`modal--size-${this.size}`], this.variant && classes[`modal--variant-${this.variant}`], this.opened && classes[`modal--opened`]);
    }
    static get is() { return "scale-modal"; }
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
                "text": "(optional) Modal class"
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
                "text": "(optional) Modal size"
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
                "text": "(optional) Modal variant"
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
                "text": "(required) Modal opened"
            },
            "attribute": "opened",
            "reflect": true,
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
                "text": "Modal method: open()",
                "tags": []
            }
        },
        "close": {
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
                "text": "Modal method: onCloseModal()",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
__decorate([
    CssInJs('Modal', styles)
], Modal.prototype, "stylesheet", void 0);
