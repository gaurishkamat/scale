import { Component, h, Prop, State } from '@stencil/core';
import { MenuItem } from '../app-interfaces';

@Component({
  tag: 'app-navigation-sector-mobile',
  styleUrl: 'app-navigation-sector-mobile.css',
})
export class NavigationSectorMobile {
  @Prop() navigation: MenuItem[];
  @State() selected: MenuItem = this.navigation[0];

  handleSelected(event, item) {
    event.preventDefault();
    this.selected = item;
  }

  render() {
    return (
      <ul class="sector-navigation-mobile">
        {this.navigation.map(item => (
          <li class="sector-navigation-mobile__item">
            <a
              class={`sector-navigation-mobile__item-link${
                this.selected.href === item.href
                  ? ' sector-navigation-mobile__item-link--selected'
                  : ''
              }`}
              href={item.href}
              onClick={event => this.handleSelected(event, item)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
