import { Component, h, Prop } from '@stencil/core';
import { MenuItem } from '../app-interfaces';

@Component({
  tag: 'app-mega-menu',
  styleUrl: 'app-mega-menu.css',
})
export class MegaMenu {
  @Prop() navigation: MenuItem[];
  @Prop() hide: () => void;
  @Prop() activeRouteId: string;
  @Prop() isActive: boolean;

  render() {
    return (
      <div class="mega-menu">
        <div class="mega-menu__wrapper">
          <ul class="mega-menu__container">
            {this.navigation.map(child => (
              <li class="mega-menu__row">
                <li class="mega-menu__row-title">{child.name}</li>
                <ul>
                  {child.children &&
                    child.children.length > 0 &&
                    child.children.map(menuItem => (
                      <li>
                        <a
                          class={`mega-menu__row-item ${
                            this.activeRouteId === menuItem.id ? 'active' : ''
                          }`}
                          aria-current={this.activeRouteId === menuItem.id}
                          href={menuItem.href || 'javascript:void(0);'}
                          tabIndex={this.isActive ? 0 : -1}
                          onClick={event => {
                            this.hide();
                            if (typeof menuItem.onClick === 'function') {
                              menuItem.onClick(event);
                            }
                          }}
                          onKeyDown={event => {
                            if (['Escape', 'Esc'].includes(event.key)) {
                              this.hide();
                            }
                          }}
                        >
                          {menuItem.name}
                          {this.activeRouteId === menuItem.id && (
                            <span class="sr-only">active</span>
                          )}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
