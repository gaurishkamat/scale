import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './sidebar-nav.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-sidebar-nav',
  shadow: true,
})
export class SidebarNav implements Base {
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('SidebarNav', styles) stylesheet: StyleSheet;

  /**
   * From mdn: A brief description of the purpose of the navigation,
   * omitting the term "navigation", as the screen reader will read
   * both the role and the contents of the label.
   */
  @Prop() ariaLabel?: string;

  componentWillLoad() {}
  componentDidUnload() {}
  componentWillUpdate() {}

  render() {
    const { classes } = this.stylesheet;
    const label = this.ariaLabel ? { 'aria-label': this.ariaLabel } : {};

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <nav class={this.getCssClassMap()} {...label}>
          <ul class={classes['sidebar-nav__list']}>
            <slot />
          </ul>
        </nav>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['sidebar-nav']);
  }
}
