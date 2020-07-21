import { Component, h, Prop, Host, State, Listen } from '@stencil/core';
import classNames from 'classnames';
import { CssClassMap } from '../../utils/utils';
import { renderIcon } from '../../utils/render-icon';

@Component({
  tag: 'scale-app-header',
  styleUrl: 'app-header.css',
})
export class Header {
  @Prop() customClass?: string = '';
  @Prop() mainNavigation?: any[] = [];
  @Prop() iconNavigation?: any[] = [];
  @Prop() sectorNavigation?: any[] = [];
  @Prop() addonNavigation?: any[] = [];
  @Prop({ reflect: true }) scrolled: boolean = false;
  @State() activeSegment: any = this.sectorNavigation[0];
  @State() mobileMenu: boolean = false;

  @Listen('closeMenu')
  handleCloseMenu() {
    this.mobileMenu = false;
  }

  handleMobileMenu(event) {
    event.preventDefault();
    this.mobileMenu = !this.mobileMenu;
  }

  handleSelectedSegment(event, item) {
    event.preventDefault();
    this.activeSegment = item;
  }

  menuMain() {
    return (
      <ul class="main-navigation">
        {this.mainNavigation.map(item => (
          <li class="main-navigation__item">
            <a class="main-navigation__item-link" href={item.href}>
              {item.name}
            </a>
            {item.children && item.children.length > 0 && (
              <app-mega-menu navigation={item.children}></app-mega-menu>
            )}
          </li>
        ))}
      </ul>
    );
  }

  menuMeta() {
    return (
      <ul class="meta-navigation">
        {this.iconNavigation.map(item => (
          <li class="meta-navigation__item">
            <a class="meta-navigation__item-link" href={item.href}>
              {renderIcon(item.icon, 'meta-navigation__item-link')}
              <span class="meta-navigation__item-label">{item.name}</span>
            </a>
          </li>
        ))}
        <li class="meta-navigation__item mobile-menu">
          <div
            class="meta-navigation__item-link"
            onClick={event => this.handleMobileMenu(event)}
          >
            <app-icon name={this.mobileMenu ? 'menu-close' : 'menu'}></app-icon>
            <span class="meta-navigation__item-label">
              {this.mobileMenu ? 'Close' : 'Menu'}
            </span>
          </div>
        </li>
      </ul>
    );
  }

  menuSegment() {
    return (
      <ul class="segment-navigation">
        {this.sectorNavigation.map(item => (
          <li class="segment-navigation__item">
            <a
              onClick={event => this.handleSelectedSegment(event, item)}
              class={`segment-navigation__item-link${
                this.activeSegment.href === item.href ? ' is-active' : ''
              }`}
              href={item.href}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  menuAddon() {
    return (
      <ul class="addon-navigation">
        {this.addonNavigation.map(item => (
          <li class="addon-navigation__item">
            <a class="addon-navigation__item-link" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <div class="header__brand">
            <span class="header__brand-before"></span>
            <span class="header__brand-after"></span>
            <div class="header__brand-content">
              <div class="header__brand-branding">
                <app-logo claim></app-logo>
              </div>
              <div class="header__brand-sector">{this.menuSegment()}</div>
              <div class="header__brand-meta">{this.menuAddon()}</div>
            </div>
          </div>
          <div class="header__nav">
            <span class="header__nav-before"></span>
            <span class="header__nav-after"></span>
            <div class="header__nav-content">
              <div class="header__nav-logo">
                <app-logo color="#e20074"></app-logo>
              </div>
              <div class="header__nav-menu-wrapper">
                <div class="header__nav-menu-left">{this.menuMain()}</div>
                <div class="header__nav-menu-right">{this.menuMeta()}</div>
              </div>
            </div>
          </div>
          <div
            class={`header__nav__mobile-menu${
              this.mobileMenu ? ' header__nav__mobile-menu--opened' : ''
            }`}
          >
            <app-navigation-sector-mobile
              navigation={this.sectorNavigation}
            ></app-navigation-sector-mobile>
            <app-navigation-main-mobile
              navigation={this.mainNavigation}
            ></app-navigation-main-mobile>
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return classNames(
      'header',
      this.customClass && this.customClass,
      this.scrolled && 'sticky'
    );
  }
}
