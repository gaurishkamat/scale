import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
import { renderIcon } from '../../utils/render-icon';

@Component({
  tag: 'scale-nav-icon',
  styleUrl: './nav-icon.css',
})
export class NavIcon {
  /** (optional) if this item is active */
  @Prop() isActive?: boolean = false;
  /** (optional) href value */
  @Prop() href?: string = 'javascript:void(0);';
  @Prop() clickLink: any;
  @Prop() icon: string;
  @Prop() isMobileMenuOpen?: boolean = false;
  @Prop() refMobileMenuToggle?: any;

  render() {
    return (
      <li class={this.getCssClassMap()}>
        <a
          class="meta-navigation__item-link"
          ref={this.refMobileMenuToggle}
          href={this.href}
          onClick={this.clickLink}
          onKeyDown={event => {
            if (!this.refMobileMenuToggle) {
              return;
            }
            if (['Enter', ' ', 'Escape', 'Esc'].includes(event.key)) {
              event.preventDefault();
              this.clickLink(event);
            }
          }}
        >
          {renderIcon({
            tag: `scale-icon-${this.icon}`,
            attributes: { class: 'meta-navigation__item-link-icon' },
          })}
          <span class="meta-navigation__item-label">
            <slot></slot>
          </span>
        </a>
      </li>
    );
  }

  getCssClassMap() {
    return classNames(
      'meta-navigation__item',
      !!this.refMobileMenuToggle && 'mobile-menu',
      this.isMobileMenuOpen && 'open'
    );
  }
}
