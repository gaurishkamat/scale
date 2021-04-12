import { Component, h, Prop, State, Watch } from '@stencil/core';
import { MenuItem } from '../app-interfaces';

@Component({
  tag: 'app-navigation-sector-mobile',
  styleUrl: 'app-navigation-sector-mobile.css',
})
export class NavigationSectorMobile {
  @Prop() hide: () => void;
  @Prop() navigation: MenuItem[];
  @Prop() activeSectorId?: string;
  // @ts-ignore
  @State() selected: MenuItem = this.navigation
    ? // @ts-ignore
      this.navigation.find(({ id }) => id === this.activeSectorId) ||
      // @ts-ignore
      this.navigation[0]
    : ({} as MenuItem);

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
        {(this.navigation || []).map(item => (
          <li class="sector-navigation-mobile__item">
            <a
              class={`sector-navigation-mobile__item-link${
                this.selected.id === item.id
                  ? ' sector-navigation-mobile__item-link--selected'
                  : ''
              }`}
              href={item.href || 'javascript:void(0);'}
              onClick={event => this.handleSelected(event, item)}
              onKeyDown={event => {
                if (['Escape', 'Esc'].includes(event.key)) {
                  this.hide();
                }
              }}
              aria-current={this.selected.id === item.id ? 'true' : 'false'}
            >
              {item.name}
              {this.selected.id === item.id && (
                <span class="sr-only">active</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
