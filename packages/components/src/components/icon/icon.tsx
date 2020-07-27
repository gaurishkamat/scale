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

  @Prop() name?: string;
  @Prop() path?: string;
  @Prop() size?: number = 24;
  @Prop() fill?: string = 'var(--icon-color, currentColor)';
  @Prop() stroke?: string = 'transparent';
  @Prop() focusable?: boolean = false;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Icon', styles) stylesheet: StyleSheet;

  componentWillUpdate() {}
  componentDidUnload() {}

  render() {
    const pathAttributes = {
      fill: this.fill,
      stroke: this.stroke,
    };

    return (
      <Host style={{ display: 'inline-flex' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...(this.focusable ? { tabindex: 0 } : {})}
          class={this.getCssClassMap()}
          width={this.size}
          height={this.size}
          viewBox="0 0 24 24"
        >
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
