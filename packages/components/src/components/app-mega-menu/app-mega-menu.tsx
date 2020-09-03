import { Component, h, Prop } from '@stencil/core';
import { MenuItem } from '../app-interfaces';

@Component({
  tag: 'app-mega-menu',
  styleUrl: 'app-mega-menu.css',
})
export class MegaMenu {
  @Prop() navigation: MenuItem[];
  @Prop() hide: () => void;
  @Prop() activeRouteHref: string;

  render() {
    return (
      <div class="mega-menu">
        <div class="mega-menu__container">
          {this.navigation.map(child => (
            <div class="mega-menu__row">
              <div class="mega-menu__row-title">{child.name}</div>
              {child.children &&
                child.children.length > 0 &&
                child.children.map(menuItem => (
                  <div>
                    <a
                      class={`mega-menu__row-item ${
                        this.activeRouteHref === menuItem.href ? 'active' : ''
                      }`}
                      href={menuItem.href}
                      onClick={event => {
                        this.hide();
                        if (typeof menuItem.onClick === 'function') {
                          menuItem.onClick(event);
                        }
                      }}
                    >
                      {menuItem.name}
                    </a>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
