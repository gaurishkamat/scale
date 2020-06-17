var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h, State, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import { CssInJs } from '../../utils/css-in-js';
import { styles } from './carousel.styles';
export class Carousel {
    constructor() {
        /** (optional) Carousel class */
        this.customClass = '';
        /** (optional) carousel display direction */
        this.vertical = false;
        this.slidesArray = [];
        this.value = 0;
        this.handleSlideChange = direction => {
            const val = this.value;
            if (direction === 'prev') {
                val === 0
                    ? (this.value = -100 * (this.slidesArray.length - 1))
                    : (this.value = val + 100);
            }
            if (direction === 'next') {
                val === -100 * (this.slidesArray.length - 1)
                    ? (this.value = 0)
                    : (this.value = val - 100);
            }
        };
        this.setActiveSlide = index => {
            this.value = -100 * index;
        };
        this.setTransformValue = () => {
            if (!!this.vertical) {
                return `translateY(${this.value}%)`;
            }
            return `translateX(${this.value}%)`;
        };
        this.setActiveCssClass = index => {
            if (Math.abs(this.value) / 100 === index) {
                return 'carousel__indicator--active';
            }
            return '';
        };
    }
    componentWillLoad() {
        if (this.slidesArray.length === 0) {
            const children = this.hostElement.children;
            // tslint:disable-next-line: prefer-for-of
            for (let childIndex = 0; childIndex < children.length; childIndex++) {
                if (children[childIndex].slot === '') {
                    // tslint:disable-next-line: prefer-for-of
                    for (let slideIndex = 0; slideIndex < children[childIndex].children.length; slideIndex++) {
                        const element = children[childIndex].children[slideIndex];
                        this.slidesArray.push(element);
                    }
                }
            }
        }
    }
    componentWillUpdate() { }
    componentDidUnload() { }
    render() {
        const { classes } = this.stylesheet;
        return (h(Host, null,
            h("style", null, this.stylesheet.toString()),
            h("div", { class: this.getCssClassMap() },
                h("div", { class: classes.carousel__container },
                    h("div", { class: `${classes.carousel__arrow} ${classes['carousel__arrow--left']}`, onClick: () => this.handleSlideChange('prev') },
                        h("slot", { name: "arrow-left" })),
                    this.slidesArray.map(element => (h("div", { class: classes.carousel__slide, style: { transform: this.setTransformValue() } },
                        h("div", { innerHTML: element.outerHTML })))),
                    h("div", { class: `${classes.carousel__arrow} ${classes['carousel__arrow--right']}`, onClick: () => this.handleSlideChange('next') },
                        h("slot", { name: "arrow-right" }))),
                h("ul", { class: classes.carousel__indicators }, Array.from(Array(this.slidesArray.length).keys()).map(index => (h("li", { key: index, class: `${classes.carousel__indicator} ${this.setActiveCssClass(index)}`, onClick: () => this.setActiveSlide(index) })))))));
    }
    getCssClassMap() {
        const { classes } = this.stylesheet;
        return classNames(classes.carousel, this.customClass && this.customClass, this.vertical && classes['carousel--vertical']);
    }
    static get is() { return "scale-carousel"; }
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
                "text": "(optional) Carousel class"
            },
            "attribute": "custom-class",
            "reflect": false,
            "defaultValue": "''"
        },
        "vertical": {
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
                "text": "(optional) carousel display direction"
            },
            "attribute": "vertical",
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
    static get states() { return {
        "slidesArray": {},
        "value": {}
    }; }
    static get elementRef() { return "hostElement"; }
}
__decorate([
    CssInJs('Carousel', styles)
], Carousel.prototype, "stylesheet", void 0);
