import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './sidebar-nav-item.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-sidebar-nav-item',
  shadow: true,
})
export class SidebarNavItem implements Base {
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('SidebarNavItem', styles) stylesheet: StyleSheet;

  /** Used normally for third level items, remove the bottom border */
  @Prop() condensed: boolean = false;
  /** Bold text */
  @Prop() bold: boolean = false;
  /** Text gets the active color */
  @Prop() isCurrent: boolean = false;

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidUnload() {}

  render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <li class={this.getCssClassMap()}>
          <slot />
        </li>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes['sidebar-nav-item'],
      this.bold && classes['sidebar-nav-item--bold'],
      this.condensed && classes['sidebar-nav-item--condensed'],
      this.isCurrent && classes['sidebar-nav-item--current']
    );
  }
}
