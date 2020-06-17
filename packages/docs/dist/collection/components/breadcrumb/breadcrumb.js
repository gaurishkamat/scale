var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, State, Element, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import { styles } from './breadcrumb.styles';
import { CssInJs } from '../../utils/css-in-js';
/*
  @see https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html
*/
export class Breadcrumb {
    constructor() {
        this.separator = '\\';
        this.linksArray = [];
        this.separatorSlot = null;
    }
    componentWillLoad() {
        if (this.linksArray.length === 0) {
            this.setLinksArray();
        }
        this.separatorSlot = this.hostElement.querySelector('[slot="separator"]');
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    setLinksArray() {
        this.linksArray = Array.from(this.hostElement.children).filter(element => element.slot === '');
    }
    render() {
        const { classes } = this.stylesheet;
        const isLast = index => index === this.linksArray.length - 1;
        // Set aria-current="page" to the last item if it's a link
        const getCurrentAttr = index => isLast(index) === true ? { 'aria-current': 'page' } : undefined;
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("nav", { "aria-label": "Breadcrumb", class: this.getCssClassMap() },
                h("ol", null, this.linksArray.map((element, index) => {
                    const separator = this.separatorSlot != null ? (h("span", { class: classes.separator, innerHTML: this.separatorSlot.innerHTML })) : (h("span", { class: classes.separator }, this.separator));
                    return (h("li", null,
                        element.href ? (h("a", Object.assign({ href: element.href, class: classNames(isLast(index) && classes.current, classes.link) }, getCurrentAttr(index)), element.textContent)) : (h("span", { class: classNames(isLast(index) && classes.current, classes.item) }, element.textContent)),
                        !isLast(index) ? separator : null));
                })))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.breadcrumb);
    }
    static get is() { return "scale-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "separator": {
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
                "text": ""
            },
            "attribute": "separator",
            "reflect": false,
            "defaultValue": "'\\\\'"
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
        "linksArray": {},
        "separatorSlot": {}
    }; }
    static get elementRef() { return "hostElement"; }
}
__decorate([
    CssInJs('Breadcrumb', styles)
], Breadcrumb.prototype, "stylesheet", void 0);
