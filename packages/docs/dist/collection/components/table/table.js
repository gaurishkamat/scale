var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './table.styles';
import { CssInJs } from '../../utils/css-in-js';
export class Table {
    constructor() {
        /** (optional) Tag class */
        this.customClass = '';
        /** (optional) Display sort arrows on/off */
        this.showSort = false;
        /** (optional) Visual size */
        this.size = 'default';
        /** object of the slots in use */
        this.slots = {};
    }
    componentWillLoad() {
        this.hostElement.querySelectorAll('th').forEach(th => {
            th.insertAdjacentHTML('afterbegin', `
          <span class="scale-sort-indicator">
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <polygon points="11.8284271 16.6568542 14.6568542 13.8284271 9 13.8284271" />
              <polygon points="11.8284271 8 14.6568542 10.8284271 9 10.8284271" />
            </svg>
          </span>`);
        });
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        return (h(Host, { class: this.getCssClassMap() },
            h("style", null, this.stylesheet.toString()),
            h("slot", null)));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.table, this.customClass && this.customClass, this.size && classes[`table--size-${this.size}`], this.showSort && classes[`table--sortable`]);
    }
    static get is() { return "scale-table"; }
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
        "showSort": {
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
                "text": "(optional) Display sort arrows on/off"
            },
            "attribute": "show-sort",
            "reflect": false,
            "defaultValue": "false"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'default' | 'small' | string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(optional) Visual size"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'default'"
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
    static get elementRef() { return "hostElement"; }
}
__decorate([
    CssInJs('Table', styles)
], Table.prototype, "stylesheet", void 0);
