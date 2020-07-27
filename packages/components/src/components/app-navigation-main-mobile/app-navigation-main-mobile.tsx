import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { MenuItem } from '../app-interfaces';

@Component({
  tag: 'app-navigation-main-mobile',
  styleUrl: 'app-navigation-main-mobile.css',
})
export class MainNavigationMobile {
  @Prop() navigation: MenuItem[];
  @State() prevSelected: MenuItem = undefined;
  @State() selected: MenuItem = undefined;
  @State() pageStack: any = {};
  @Event({
    eventName: 'closeMenu',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  closeMenu: EventEmitter;

  closeMenuHandler() {
    this.closeMenu.emit();
  }

  handlePrevSelected(event) {
    event.preventDefault();
    if (this.prevSelected) {
      this.selected = this.prevSelected;
      this.prevSelected = undefined;
    } else {
      this.selected = undefined;
    }
  }

  handleStack(event, item) {
    event.preventDefault();
    if (!item) {
      return (this.pageStack = {});
    }
    const keys = Object.keys(this.pageStack);
    if (item.children) {
      this.pageStack[item.level] = item;
      if (keys.length > item.level) {
        keys.map(key => {
          if (key > item.level) {
            delete this.pageStack[key];
          }
        });
      }
    }
  }

  handleSelected(event, item) {
    event.preventDefault();
    if (this.selected) {
      if (this.selected.children && this.selected.children.length > 0) {
        this.prevSelected = this.selected;
      } else {
        this.prevSelected = undefined;
      }
    }
    this.selected = item;
    if (!item.children || item.children.length === 0) {
      this.prevSelected = undefined;
      this.closeMenuHandler();
    }
  }

  childMenuPage(section) {
    return (
      <div class="main-navigation-mobile__child-menu">
        <a
          class="main-navigation-mobile__child-menu-current"
          href={section.href}
          onClick={event => {
            this.handlePrevSelected(event);
            this.handleStack(event, this.selected);
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
              class="main-navigation-mobile__child-menu-item-link"
              href={child.href}
            >
              <li
                class="main-navigation-mobile__child-menu-item"
                onClick={event => {
                  this.handleSelected(event, child);
                  this.handleStack(event, child);
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
        {this.selected &&
          this.selected.children &&
          this.selected.children.length > 0 &&
          this.childMenuPage(this.selected)}
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
                this.handleSelected(event, item);
                this.handleStack(event, item);
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
