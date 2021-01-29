import { Component, h, Prop, Host, Watch } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 'scale-sidebar-nav-item',
  styleUrl: 'sidebar-nav-item.css',
  shadow: true,
})
export class SidebarNavItem {
  /** Used normally for third level items, remove the bottom border */
  @Prop() condensed: boolean = false;
  /** Bold text */
  @Prop() bold: boolean = false;
  /** Text gets the active color */
  @Prop() current: boolean = false;
  /** Nesting level within the <scale-sidebar-nav> parent, gets set automatically */
  @Prop() nestingLevel: number;
  /** (optional) Extra styles */
  @Prop() styles?: string;

  @Watch('nestingLevel')
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }

  render() {
    return (
      <Host>
        <style>{this.styles}</style>
        <li class={this.getCssClassMap()} role="listitem">
          <slot />
        </li>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return classNames(
      'sidebar-nav-item',
      this.bold && 'sidebar-nav-item--bold',
      this.condensed && 'sidebar-nav-item--condensed',
      this.current && 'sidebar-nav-item--current'
    );
  }
}
