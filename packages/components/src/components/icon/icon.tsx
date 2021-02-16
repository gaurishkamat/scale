import { Component, Prop, h, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './icon.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-icon',
  // shadow: true,
})
export class Icon implements Base {
  /** (optional) Tag custom class */
  @Prop() customClass?: string = '';

  /**
   * A name that will be used to reference an SVG object defined elsewhere,
   * via `<use xlink:href="">`. `icon-` will be prepended to the name, so if
   * you pass `circle`, it will look for for the `icon-circle` id
   * e.g. `<use xlink:href="#icon-circle">`.
   * If there is no element in the document with the id by the name provided,
   * this component will render empty.
   */
  @Prop() name?: string;
  /**
   * A path shape to be used in the `d` attribute of a path element.
   */
  @Prop() path?: string;
  /**
   * Will be used for both `width` and `height`, all icons are square.
   * Keep in mind the `viewBox` attribute is set to "0 0 24 24".
   */
  @Prop() size?: number = 24;
  /** The SVG `fill` attribute */
  @Prop() fill?: string = 'var(--icon-color, currentColor)';
  /** The SVG `stroke` attribute */
  @Prop() stroke?: string = 'transparent';
  /** (optional) If `true` the icon can receive focus */
  @Prop() focusable?: boolean = false;
  /** (optional) If `true` the svg element will get aria-hidden="true" */
  @Prop() decorative?: boolean = false;
  /** (optional) When using the icon as standalone, make it meaningful for accessibility */
  @Prop() accessibilityTitle?: string;
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Icon', styles) stylesheet: StyleSheet;

  componentWillUpdate() {}
  disconnectedCallback() {}

  render() {
    const pathAttributes = {
      fill: this.fill,
      stroke: this.stroke,
    };
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};

    return (
      <Host style={{ display: 'inline-flex' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...(this.focusable ? { tabindex: 0 } : {})}
          class={this.getCssClassMap()}
          width={this.size}
          height={this.size}
          viewBox="0 0 24 24"
          role="img"
          {...ariaHidden}
        >
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          {this.path ? (
            <path d={this.path} {...pathAttributes} />
          ) : (
            <use xlinkHref={`#icon-${this.name}`} {...pathAttributes} />
          )}
        </svg>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.icon,
      this.name && this.name,
      this.customClass && this.customClass
    );
  }
}
