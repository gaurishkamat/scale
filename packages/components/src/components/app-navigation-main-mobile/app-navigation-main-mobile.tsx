import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { MenuItem } from '../app-interfaces';
import { findSelected } from '../../utils/menu-utils';

@Component({
  tag: 'app-navigation-main-mobile',
  styleUrl: 'app-navigation-main-mobile.css',
})
export class MainNavigationMobile {
  @Prop() navigation: MenuItem[];
  @Prop() activeRouteHref: string;
  @State() selected: MenuItem = undefined;
  @State() parent: MenuItem = undefined;
  @Event({
    eventName: 'closeMenu',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  closeMenu: EventEmitter;
  @Watch('activeRouteHref')
  handleActiveRoute(newValue) {
    this.selected = findSelected(this.navigation, newValue, null).selected;
    this.parent = findSelected(this.navigation, newValue).parent;
  }

  componentWillLoad() {
    this.selected = findSelected(
      this.navigation,
      this.activeRouteHref,
      null
    ).selected;
    this.parent = findSelected(this.navigation, this.activeRouteHref).parent;
  }

  closeMenuHandler() {
    this.closeMenu.emit();
  }

  handlePrevSelected(event, item) {
    event.preventDefault();

    const selected = findSelected(this.navigation, item.href).parent;
    this.selected = selected;
    this.parent = selected;
  }

  handleSelect(event, item) {
    event.preventDefault();

    const { selected, parent } = findSelected(this.navigation, item.href);
    this.selected = selected;
    this.parent = parent;

    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }

    if (!selected.children) {
      this.closeMenuHandler();
    }
  }

  childMenuPage() {
    const section =
      this.selected && this.selected.children ? this.selected : this.parent;

    if (!section) {
      return <div></div>;
    }
    return (
      <div class="main-navigation-mobile__child-menu">
        <a
          class="main-navigation-mobile__child-menu-current"
          href={section.href}
          onClick={event => {
            this.handlePrevSelected(event, section);
          }}
        >
          <div class="main-navigation-mobile__child-menu-current-item">
            <div class="main-navigation-mobile__child-menu-current-wrapper">
              <scale-icon name="back"></scale-icon>
              <div>{section.name}</div>
            </div>
          </div>
        </a>
        <ul class="main-navigation-mobile__child-menu-items">
          {section.children.map(child => (
            <a
              class={`main-navigation-mobile__child-menu-item-link ${
                child.href === this.selected.href ? 'selected' : ''
              }`}
              href={child.href}
            >
              <li
                class="main-navigation-mobile__child-menu-item"
                onClick={event => {
                  this.handleSelect(event, child);
                }}
              >
                <div class="main-navigation-mobile__child-menu-item-wrapper">
                  {child.name}
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div class="main-navigation-mobile">
        {this.childMenuPage()}
        <ul class="main-navigation-mobile__main-menu">
          {this.navigation.map(item => (
            <a
              class={`main-navigation-mobile__item-link${
                this.selected && this.selected.href === item.href
                  ? ' main-navigation-mobile__item-link--selected'
                  : ''
              }`}
              href={item.href}
              onClick={event => {
                this.handleSelect(event, item);
              }}
            >
              <li class="main-navigation-mobile__item">
                <div class="main-navigation-mobile__item-wrapper">
                  <span>{item.name}</span>
                  <scale-icon name="ahead"></scale-icon>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}
