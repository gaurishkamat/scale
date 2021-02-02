import { Component, h, Prop, Host, Element, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'scale-sidebar-nav',
  styleUrl: 'sidebar-nav.css',
  shadow: true,
})
export class SidebarNav {
  mq: MediaQueryList;

  @Element() el: HTMLElement;

  /**
   * From mdn: A brief description of the purpose of the navigation,
   * omitting the term "navigation", as the screen reader will read
   * both the role and the contents of the label.
   */
  @Prop() ariaLabel?: string;
  /** Set to `true` to make the sidebar toggleable (useful for small screens) */
  @Prop({ mutable: true, reflect: true }) collapsible?: boolean = false;
  /** Automatically set `collapsible` based on this media query */
  @Prop() collapsibleMediaQuery?: string = '(max-width: 30em)';
  /** Label for toggle button */
  @Prop() collapsibleLabel?: string = 'Menu';
  /** (optional) Extra styles */
  @Prop() styles?: string;

  @State() collapsed: boolean = true;

  componentDidLoad() {
    this.setNestingLevelOnChildren();
    this.setMatchMedia();
  }

  disconnectedCallback() {
    if (this.mq != null) {
      this.mq.removeListener(this.handleMediaQueryChange);
    }
  }

  /**
   * Set `nesting-level` and `condensed` attributes in
   * <scale-sidebar-nav-collapsible> and <scale-sidebar-nav-item> children,
   * so styling different levels "automatically" is possible.
   */
  setNestingLevelOnChildren() {
    function setNestingLevel(el: Element, level: number = 1) {
      Array.from(el.children).forEach(child => {
        if (child.tagName.toUpperCase() === 'SCALE-SIDEBAR-NAV-COLLAPSIBLE') {
          setNestingLevel(child, level + 1);
          if (!child.hasAttribute('nesting-level')) {
            child.setAttribute('nesting-level', String(level));
          }
          if (level === 2 && !child.hasAttribute('condensed')) {
            child.setAttribute('condensed', 'true');
          }
        }
        if (child.tagName.toUpperCase() === 'SCALE-SIDEBAR-NAV-ITEM') {
          if (!child.hasAttribute('nesting-level')) {
            child.setAttribute('nesting-level', String(level));
          }
          if (level === 3 && !child.hasAttribute('condensed')) {
            child.setAttribute('condensed', 'true');
          }
        }
      });
    }

    setNestingLevel(this.el);
  }

  setMatchMedia() {
    if (this.collapsibleMediaQuery) {
      this.mq = window.matchMedia(this.collapsibleMediaQuery);
      // Recent versions of Safari throw with `addEventListener`
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
      this.mq.addListener(this.handleMediaQueryChange);
    }
  }

  handleMediaQueryChange = (event: MediaQueryListEvent) => {
    this.collapsible = event.matches;
  };

  toggle = () => {
    this.collapsed = !this.collapsed;
  };

  render() {
    const label = this.ariaLabel ? { 'aria-label': this.ariaLabel } : {};
    const hidden = this.collapsible ? { hidden: this.collapsed } : {};

    return (
      <Host>
        <style>{this.styles}</style>
        <div class={this.getCssClassMap()}>
          {this.collapsible === true && (
            <button
              class="sidebar-nav__toggle-button"
              aria-expanded={this.collapsed ? 'false' : 'true'}
              onClick={this.toggle}
            >
              {this.collapsibleLabel}
              <scale-icon-navigation-collapse-down
                class="sidebar-nav__icon"
                size={16}
              />
            </button>
          )}
          <nav {...label} {...hidden}>
            <ul class="sidebar-nav__list" role="list">
              <slot />
            </ul>
          </nav>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'sidebar-nav',
      this.collapsible && 'sidebar-nav--collapsible'
    );
  }
}
