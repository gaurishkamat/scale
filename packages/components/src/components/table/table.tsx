import { Component, Prop, h, Element, Host } from '@stencil/core';
import classNames from 'classnames';

import Base from '../../utils/base-interface';

const name = ' table';
@Component({
  tag: 'scale-table',
  styleUrl: './table.css',
  shadow: false,
})
export class Table implements Base {
  @Element() hostElement: HTMLElement;
  /** (optional) Display sort arrows on/off */
  @Prop() showSort?: boolean = false;
  /** (optional) Visual size */
  @Prop() size?: 'default' | 'small' | string = 'default';
  /** object of the slots in use */
  slots: { header?: Element; table?: Element } = {};

  componentWillLoad() {
    this.hostElement.querySelectorAll('th').forEach(th => {
      th.insertAdjacentHTML(
        'afterbegin',
        `
          <span class="scale-sort-indicator" aria-hidden>
            <svg viewBox="0 0 16 16">
             <polygon transform="translate(8.242641, 10.242641) rotate(45.000000) translate(-8.242641, -10.242641) " points="5.24264069 7.24264069 11.2426407 7.24264069 5.24264069 13.2426407"/></polygon>
             <polygon transform="translate(8.242641, 6.242641) scale(1, -1) rotate(45.000000) translate(-8.242641, -6.242641) " points="5.24264069 3.24264069 11.2426407 3.24264069 5.24264069 9.24264069"/>
            </svg>
          </span>`
      );
    });
  }
  componentWillUpdate() {}
  disconnectedCallback() {}

  render() {
    return (
      <Host class={this.getCssClassMap()}>
        <slot />
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      name,
      this.size && `${name}--size${this.size}`,
      this.showSort && `${name}--sortable`
    );
  }
}
