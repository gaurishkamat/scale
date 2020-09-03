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
import { findSelected, findRootNode } from '../../utils/menu-utils';

@Component({
  tag: 'app-navigation-main-mobile',
  styleUrl: 'app-navigation-main-mobile.css',
})
export class MainNavigationMobile {
  @Prop() navigation: MenuItem[];
  @Prop() activeRouteId: string;
  @State() selected: MenuItem = undefined;
  @State() parent: MenuItem = undefined;
  @Event({
    eventName: 'closeMenu',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  closeMenu: EventEmitter;
  @Watch('activeRouteId')
  handleActiveRoute(newValue) {
    this.selected = findSelected(this.navigation, newValue, null).selected;
    this.parent = findSelected(this.navigation, newValue).parent;
  }

  componentWillLoad() {
    this.selected = findSelected(
      this.navigation,
      this.activeRouteId,
      null
    ).selected;
    this.parent = findSelected(this.navigation, this.activeRouteId).parent;
  }

  closeMenuHandler() {
    this.closeMenu.emit();
  }

  handlePrevSelected(event, item) {
    event.preventDefault();

    const selected = findSelected(this.navigation, item.id).parent;
    this.selected = selected;
    this.parent = selected;
  }

  handleSelect(event, item) {
    const { selected, parent } = findSelected(this.navigation, item.id);
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

    const { selected, parent } = findSelected(
      this.navigation,
      this.activeRouteId
    );

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
                (selected && child.id === selected.id) ||
                (parent && parent.id === child.id)
                  ? 'selected'
                  : ''
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
    const { selected } = findSelected(this.navigation, this.activeRouteId);
    const rootNode = selected && findRootNode(this.navigation, selected.id);
    return (
      <div class="main-navigation-mobile">
        {this.childMenuPage()}
        <ul class="main-navigation-mobile__main-menu">
          {this.navigation.map(item => (
            <a
              class={`main-navigation-mobile__item-link${
                rootNode && rootNode.id === item.id
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
