import {
  Component,
  h,
  Prop,
  Host,
  State,
  Listen,
  Watch,
  Element,
} from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import classNames from 'classnames';
import { renderIcon } from '../../utils/render-icon';
import { findRootNode } from '../../utils/menu-utils';

const maybeJSONParse = data => {
  let parsedData;

  try {
    parsedData = JSON.parse(data);
  } catch (error) {
    parsedData = data;
  }

  return parsedData;
};

@Component({
  tag: 'scale-app-header',
  styleUrl: 'app-header.css',
})
export class Header {
  @Element() hostElement: HTMLStencilElement;
  mobileMenuToggle?: HTMLAnchorElement;
  @Prop() claimLang: string;
  @Prop() portalName?: string = '';
  @Prop() mainNavigation?: any[] = [];
  @Prop() iconNavigation?: any[] = [];
  @Prop() sectorNavigation?: any[] = [];
  @Prop() addonNavigation?: any[] = [];
  @Prop() activeRouteId: string;
  @Prop() activeSectorId?: string;
  @State() activeSegment: any =
    maybeJSONParse(this.sectorNavigation).find(
      ({ id }) => id === this.activeSectorId
    ) || maybeJSONParse(this.sectorNavigation)[0];
  @State() mobileMenu: boolean = false;
  @State() visibleMegaMenu: string = '';
  @State() scrolled: boolean = false;
  data: Record<string, any[]>;
  hasSlotMenuLeft: boolean;
  hasSlotMenuRight: boolean;
  hasSlotMenuSector: boolean;
  hasSlotMenuMeta: boolean;

  @Listen('scroll', { target: 'window' })
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
  }

  @Listen('closeMenu')
  handleCloseMenu() {
    this.mobileMenu = false;
  }

  @Watch('activeSectorId')
  handleActiveSegment(newValue) {
    this.activeSegment =
      this.data.sectorNavigation.find(({ id }) => id === newValue) || {};
  }

  handleMobileMenu(event?: KeyboardEvent | MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    this.mobileMenu = !this.mobileMenu;
  }

  handleSelectedSegment(event, item) {
    this.activeSegment = item;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
  }

  menuMain() {
    const rootNode = findRootNode(this.data.mainNavigation, this.activeRouteId);
    const isActive = item =>
      rootNode &&
      rootNode.id === item.id &&
      !this.visibleMegaMenu &&
      this.visibleMegaMenu !== null;
    return (
      <ul class="main-navigation">
        {this.hasSlotMenuLeft ? (
          <slot name="menu-left"></slot>
        ) : (
          this.data.mainNavigation.map(item => (
            <li
              class={classNames(
                'main-navigation__item',
                this.visibleMegaMenu === item.id && 'mega-menu--visible',
                isActive(item) && 'selected'
              )}
              onMouseEnter={() => {
                this.visibleMegaMenu = item.children ? item.id : null;
              }}
              onMouseLeave={() => {
                this.visibleMegaMenu = '';
              }}
            >
              <a
                class="main-navigation__item-link"
                href={item.href || 'javascript:void(0);'}
                aria-current={isActive(item) ? 'true' : 'false'}
                aria-haspopup={item.children ? 'true' : 'false'}
                onClick={event => {
                  if (item.href) {
                    this.visibleMegaMenu = '';
                  }

                  if (typeof item.onClick === 'function') {
                    item.onClick(event);
                  }
                  this.visibleMegaMenu = item.children ? item.name : null;
                }}
                onKeyDown={event => {
                  if (['Enter', ' '].includes(event.key)) {
                    event.preventDefault();
                    this.visibleMegaMenu = item.children ? item.name : null;
                  }
                  if (['Escape', 'Esc'].includes(event.key)) {
                    this.visibleMegaMenu = null;
                  }
                }}
                tabIndex={0}
              >
                <span class="main-navigation__item-link-text">{item.name}</span>
                {isActive(item) && <span class="sr-only">active</span>}
              </a>
              {item.children && item.children.length > 0 && (
                <app-mega-menu
                  navigation={item.children}
                  hide={() => {
                    this.visibleMegaMenu = '';
                  }}
                  activeRouteId={this.activeRouteId}
                  isActive={this.visibleMegaMenu === item.id}
                ></app-mega-menu>
              )}
            </li>
          ))
        )}
      </ul>
    );
  }

  menuMeta() {
    const { defaultName, openedName } = this.data.iconNavigation.find(
      ({ id }) => id === 'menu'
    ) || { defaultName: 'Menu', openedName: 'Close' };
    return (
      <ul class="meta-navigation">
        {this.hasSlotMenuRight ? (
          <slot name="menu-right"></slot>
        ) : (
          this.data.iconNavigation
            .filter(({ id }) => id !== 'menu')
            .map(item => (
              <li class="meta-navigation__item">
                <a
                  class="meta-navigation__item-link"
                  href={item.href || 'javascript:void(0);'}
                >
                  {renderIcon(item.icon, 'meta-navigation__item-link')}
                  <span class="meta-navigation__item-label">{item.name}</span>
                </a>
              </li>
            ))
        )}
        <li
          class={classNames(
            'meta-navigation__item mobile-menu',
            this.mobileMenu && 'open'
          )}
        >
          <a
            ref={el => (this.mobileMenuToggle = el)}
            class="meta-navigation__item-link"
            onClick={event => this.handleMobileMenu(event)}
            tabIndex={0}
            onKeyDown={event => {
              if (['Enter', ' ', 'Escape', 'Esc'].includes(event.key)) {
                event.preventDefault();
                this.handleMobileMenu(event);
              }
            }}
          >
            <scale-icon
              name={this.mobileMenu ? 'menu-close' : 'menu'}
            ></scale-icon>
            <span class="meta-navigation__item-label">
              {this.mobileMenu ? openedName : defaultName}
            </span>
          </a>
        </li>
      </ul>
    );
  }

  menuSegment() {
    return (
      <ul class="segment-navigation">
        {this.hasSlotMenuSector ? (
          <slot name="menu-sector"></slot>
        ) : this.portalName ? (
          <li class="segment-navigation__portal-name">{this.portalName}</li>
        ) : (
          this.data.sectorNavigation.map(item => (
            <li class="segment-navigation__item">
              <a
                onClick={event => this.handleSelectedSegment(event, item)}
                class={classNames(
                  'segment-navigation__item-link',
                  this.activeSegment.id === item.id && 'active'
                )}
                href={item.href || 'javascript:void(0);'}
                onFocus={() => {
                  window.scrollTo({ top: 0 });
                }}
                aria-current={
                  this.activeSegment.id === item.id ? 'true' : 'false'
                }
              >
                {item.name}
                {this.activeSegment.id === item.id && (
                  <span class="sr-only">active</span>
                )}
              </a>
            </li>
          ))
        )}
      </ul>
    );
  }

  menuAddon() {
    return (
      <ul class="addon-navigation">
        {this.hasSlotMenuSector ? (
          <slot name="menu-meta"></slot>
        ) : (
          this.data.addonNavigation.map(item => (
            <li class="addon-navigation__item">
              <a
                class="addon-navigation__item-link"
                href={item.href || 'javascript:void(0);'}
                onClick={event => {
                  if (typeof item.onClick === 'function') {
                    item.onClick(event);
                  }
                }}
                onFocus={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                {item.name}
              </a>
            </li>
          ))
        )}
      </ul>
    );
  }

  iconDefs() {
    return (
      <template>
        <svg>
          <defs>
            <g id="icon-profile">
              <path
                d="M8.9 16.5l3.1 3.1 3.1-3.1h2.25c2.35 0 4.3 1.65 4.7 3.95l.15 1.05H1.8l.15-1.05c.4-2.3 2.35-3.95 4.7-3.95H8.9zM12 2c3.5 0 6 2.5 6 6 0 1.25-.35 2.55-.95 3.65-1 1.9-2.8 3.35-5.05 3.35s-4.05-1.45-5.05-3.35C6.35 10.55 6 9.25 6 8c0-3.5 2.5-6 6-6zm0 1.5C9.4 3.5 7.5 5.4 7.5 8c0 .85.2 1.75.55 2.55.7 1.65 2.15 2.95 3.95 2.95 1.8 0 3.25-1.3 3.95-2.95.35-.8.55-1.7.55-2.55 0-2.6-1.9-4.5-4.5-4.5z"
                fill-rule="nonzero"
              />
            </g>
            <g id="icon-search">
              <path
                d="M10 2a8 8 0 016.472 12.703l4.912 4.913.06.065a1.25 1.25 0 01-1.726 1.794l-.102-.091-4.913-4.912A8 8 0 1110 2zm0 1.5A6.508 6.508 0 003.5 10c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5z"
                fill-rule="nonzero"
              />
            </g>
            <g id="icon-shopping-bag">
              <path
                d="M11.84 1.5a4.5 4.5 0 014.495 4.288l.004.212v.749l4.45.001.883 12.794a3 3 0 01-2.993 3.206H5a3 3 0 01-2.992-3.206L2.89 6.75h4.45V6l.002-.133A4.5 4.5 0 0111.84 1.5zm7.549 6.75h-15.1l-.785 11.397A1.5 1.5 0 005 21.25h13.68l.088-.003a1.5 1.5 0 001.407-1.6L19.39 8.25zM8.089 9.5a1 1 0 11.002 1.999A1 1 0 018.089 9.5zm7.5 0a1 1 0 11.002 1.999 1 1 0 01-.002-1.999zM11.84 3a3 3 0 00-2.994 2.824L8.839 6v.75l6-.001V6l-.002-.112A3 3 0 0011.84 3z"
                fill-rule="nonzero"
              />
            </g>
            <g id="icon-menu">
              <path
                d="M20.5,16.5 L20.5,18.5 L3.5,18.5 L3.5,16.5 L20.5,16.5 Z M20.5,11 L20.5,13 L3.5,13 L3.5,11 L20.5,11 Z M20.5,5.5 L20.5,7.5 L3.5,7.5 L3.5,5.5 L20.5,5.5 Z"
                fill-rule="nonzero"
              ></path>
            </g>
            <g id="icon-menu-close">
              <path
                d="M12,1 C18.075,1 23,5.925 23,12 C23,18.075 18.075,23 12,23 C5.925,23 1,18.075 1,12 C1,5.925 5.925,1 12,1 Z M12,2.5 C6.7615,2.5 2.5,6.7615 2.5,12 C2.5,17.2385 6.7615,21.5 12,21.5 C17.2385,21.5 21.5,17.2385 21.5,12 C21.5,6.7615 17.2385,2.5 12,2.5 Z M8.91056165,7.86140176 L8.99468009,7.93401991 L11.999,10.939 L15.0055199,7.93381991 C15.2984131,7.6409267 15.7732869,7.6409267 16.0661801,7.93381991 C16.3324466,8.20008648 16.3566527,8.61675016 16.1387982,8.91036165 L16.0661801,8.99448009 L13.06,11.999 L16.0661801,15.0055199 C16.3590733,15.2984131 16.3590733,15.7732869 16.0661801,16.0661801 C15.7999135,16.3324466 15.3832498,16.3566527 15.0896383,16.1387982 L15.0055199,16.0661801 L11.999,13.06 L8.99468009,16.0659801 C8.70178687,16.3588733 8.22691313,16.3588733 7.93401991,16.0659801 C7.66775335,15.7997135 7.6435473,15.3830498 7.86140176,15.0894383 L7.93401991,15.0053199 L10.939,12 L7.93401991,8.99468009 C7.6411267,8.70178687 7.6411267,8.22691313 7.93401991,7.93401991 C8.20028648,7.66775335 8.61695016,7.6435473 8.91056165,7.86140176 Z"
                fill-rule="nonzero"
              ></path>
            </g>
            <g id="icon-back">
              <path
                d="M2.94055746,7.14522899 C3.31057234,6.77530311 3.89831675,6.75590167 4.29117065,7.08697505 L4.35477101,7.14539908 L11.7662198,14.5589678 L19.1807065,7.14531405 C19.5506769,6.77534366 20.138419,6.75587152 20.5313127,7.08689764 L20.5949201,7.14531401 C20.9648905,7.51528439 20.9843626,8.10302646 20.6533365,8.49592019 L20.5949201,8.55952758 L11.7666348,17.3878133 L2.94038737,8.55944254 C2.54991005,8.16887128 2.5499862,7.53570631 2.94055746,7.14522899 Z"
                fill-rule="nonzero"
                transform="translate(11.767696, 12.120117) rotate(90.000000) translate(-11.767696, -12.120117)"
              ></path>
            </g>
            <g id="icon-ahead">
              <path
                d="M2.94055746,7.14522899 C3.31057234,6.77530311 3.89831675,6.75590167 4.29117065,7.08697505 L4.35477101,7.14539908 L11.7662198,14.5589678 L19.1807065,7.14531405 C19.5506769,6.77534366 20.138419,6.75587152 20.5313127,7.08689764 L20.5949201,7.14531401 C20.9648905,7.51528439 20.9843626,8.10302646 20.6533365,8.49592019 L20.5949201,8.55952758 L11.7666348,17.3878133 L2.94038737,8.55944254 C2.54991005,8.16887128 2.5499862,7.53570631 2.94055746,7.14522899 Z"
                fill-rule="nonzero"
                transform="translate(11.767696, 12.120117) rotate(-90.000000) translate(-11.767696, -12.120117)"
              ></path>
            </g>
          </defs>
        </svg>
      </template>
    );
  }

  componentWillLoad() {
    this.data = {
      mainNavigation: maybeJSONParse(this.mainNavigation),
      iconNavigation: maybeJSONParse(this.iconNavigation),
      sectorNavigation: maybeJSONParse(this.sectorNavigation),
      addonNavigation: maybeJSONParse(this.addonNavigation),
    };

    this.hasSlotMenuLeft = !!this.hostElement.querySelector(
      '[slot="menu-left"]'
    );

    this.hasSlotMenuRight = !!this.hostElement.querySelector(
      '[slot="menu-right"]'
    );
    this.hasSlotMenuSector = !!this.hostElement.querySelector(
      '[slot="menu-sector"]'
    );
    this.hasSlotMenuMeta = !!this.hostElement.querySelector(
      '[slot="menu-meta"]'
    );
  }

  render() {
    return (
      <Host>
        <header class={this.getCssClassMap()}>
          {this.iconDefs()}
          <div class="header__brand">
            <span class="header__brand-before"></span>
            <span class="header__brand-after"></span>
            <div class="header__brand-content">
              <div class="header__brand-branding">
                <app-logo claim claimLang={this.claimLang}></app-logo>
              </div>
              <div class="header__brand-sector">{this.menuSegment()}</div>
              <div class="header__brand-meta">{this.menuAddon()}</div>
            </div>
          </div>
          <nav class="header__nav" aria-label="top">
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
          </nav>
          <nav
            class={`header__nav__mobile-menu${
              this.mobileMenu ? ' header__nav__mobile-menu--opened' : ''
            }`}
            aria-label="main"
          >
            <app-navigation-sector-mobile
              navigation={this.data.sectorNavigation}
              activeSectorId={this.activeSectorId}
              hide={() => {
                this.handleMobileMenu();
                this.mobileMenuToggle.focus();
              }}
            ></app-navigation-sector-mobile>
            <app-navigation-main-mobile
              navigation={this.data.mainNavigation}
              activeRouteId={this.activeRouteId}
              hide={() => {
                this.handleMobileMenu();
                this.mobileMenuToggle.focus();
              }}
            ></app-navigation-main-mobile>
          </nav>
        </header>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'header',
      this.scrolled && 'sticky',
      (this.visibleMegaMenu || this.mobileMenu) && 'menu--open'
    );
  }
}
