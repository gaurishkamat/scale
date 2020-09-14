import { Component, h, Prop, State, Watch } from '@stencil/core';
import { MenuItem } from '../app-interfaces';

@Component({
  tag: 'app-navigation-sector-mobile',
  styleUrl: 'app-navigation-sector-mobile.css',
})
export class NavigationSectorMobile {
  @Prop() navigation: MenuItem[];
  @Prop() activeSectorId?: string;
  @State() selected: MenuItem =
    this.navigation.find(({ id }) => id === this.activeSectorId) ||
    this.navigation[0];

  @Watch('activeSectorId')
  handleActiveSegment(newValue) {
    this.selected =
      this.navigation.find(({ id }) => id === newValue) || this.navigation[0];
  }

  handleSelected(event, item) {
    this.selected = item;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
  }

  render() {
    return (
      <ul class="sector-navigation-mobile">
        {this.navigation.map(item => (
          <li class="sector-navigation-mobile__item">
            <a
              class={`sector-navigation-mobile__item-link${
                this.selected.id === item.id
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
