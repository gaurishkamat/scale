import { Component, Prop, h, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './card.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-card',
  shadow: true,
})
export class Card implements Base {
  /** (optional) Card class */
  @Prop() customClass?: string = '';
  /** (optional) Link card */
  @Prop() to?: string = '';
  /** (optional) Label of the card */
  @Prop() label?: string = '';
  /** (optional) Link card target */
  @Prop() target?: string = '_self';
  /** (optional) Link card rel */
  @Prop() rel?: string = '';
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Card', styles) stylesheet: StyleSheet;

  componentWillUpdate() {}
  disconnectedCallback() {}

  render() {
    const { classes } = this.stylesheet;
    const Tag = !!this.to ? 'a' : 'div';

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={classes.card__border}>
          <Tag
            class={this.getCssClassMap()}
            {...(!this.to ? { role: 'group', tabindex: 0 } : {})}
            {...(!!this.to ? { href: this.to } : {})}
            {...(!!this.target ? { target: this.target } : {})}
            {...(!!this.rel ? { rel: this.rel } : {})}
            {...(!!this.label ? { ['aria-label']: this.label } : {})}
          >
            <div class={classes.card__body}>
              <slot />
            </div>
          </Tag>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;

    return classNames(
      classes.card,
      this.customClass && this.customClass,
      !!this.to && classes[`card--interactive`]
    );
  }
}
