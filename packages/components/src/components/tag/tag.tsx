import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tag.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-tag',
  shadow: true,
})
export class Tag implements Base {
  /** (optional) Tag class */
  @Prop() customClass?: string = '';
  /** (optional) Tag size */
  @Prop() size?: string = '';
  /** (optional) Tag variant */
  @Prop() variant?: string = '';
  /** (optional) Tag href */
  @Prop() href?: string = '';
  /** (optional) Tag target */
  @Prop() target?: string = '_self';
  /** (optional) Tag dismissable */
  @Prop() dismissable?: boolean = false;
  /** (optional) Tag disabled */
  @Prop() disabled?: boolean = false;
  /** (optional) Dismiss label */
  @Prop() dismissText?: string = 'dismiss';

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Tag', styles) stylesheet: StyleSheet;
  /** (optional) Close icon click event */
  @Event() scaleClose: EventEmitter<MouseEvent>;

  componentWillUpdate() {}
  componentDidUnload() {}

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
          onClick: event => this.handleClose(event),
        }
      : {};

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <Element class={this.getCssClassMap()} {...linkProps}>
          <slot />

          {this.dismissable && (
            <button disabled={this.disabled} aria-label={this.dismissText}>
              <scale-icon
                size={this.size === 'small' ? 20 : 24}
                path="M13.77 12l4.415-4.42a1.25 1.25 0 10-1.765-1.765L12 10.23 7.58 5.815A1.25 1.25 0 105.815 7.58L10.23 12l-4.415 4.42a1.245 1.245 0 000 1.765c.232.237.549.37.88.37.332 0 .65-.134.885-.37L12 13.77l4.42 4.415c.234.236.553.37.885.37.331 0 .648-.133.88-.37a1.245 1.245 0 000-1.765L13.77 12z"
                {...iconProps}
              />
            </button>
          )}
        </Element>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.tag,
      this.customClass && this.customClass,
      this.size && classes[`tag--size-${this.size}`],
      this.variant && classes[`tag--variant-${this.variant}`],
      !!this.href && classes[`tag--link`],
      !!this.dismissable && classes[`tag--dismissable`],
      !!this.disabled && classes[`tag--disabled`]
    );
  }
}
