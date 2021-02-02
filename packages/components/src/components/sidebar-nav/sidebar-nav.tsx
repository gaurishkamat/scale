import { Component, h, Prop, Host, Element, State } from '@stencil/core';
import classNames from 'classnames';

/*
TODO
----
- [x] new icon
- [x] remove classNames() outside "map"
- [x] use plain CSS, ~~with variables~~
- [x] auto styles (Tim) (autoset and propagate `condensed`?)
- [x] new styles (padding)
- [x] "current" styles (vertical line + color)
- [x] mobile version styles
  - [x] arrow opacity
  - [x] inner padding
  - [x] outer padding
- [x] mobile version toggle
- [ ] current -> sr-only (for screenreader), "she suggested this" (below)
- [-] aria-selected="true" ? (current – we already have?)
- [ ] implement `collapsibleMediaQuery` via matchMedia
- [ ] add -collapsible and -item to storybook

---
<style>.sr-only { position:absolute; left:-10000px; overflow:hidden; }</style>
<a href="#">Menüeintrag<span class="sr-only"> Zurzeit aktiv</span></a>

https://www.w3.org/TR/wai-aria-1.1/#aria-current
*/

@Component({
  tag: 'scale-sidebar-nav',
  styleUrl: 'sidebar-nav.css',
  shadow: true,
})
export class SidebarNav {
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
  @Prop() collapsibleMediaQuery?: string;
  /** Label for toggle button */
  @Prop() collapsibleLabel?: string = 'Menu';
  /** (optional) Extra styles */
  @Prop() styles?: string;

  @State() collapsed: boolean = true;

  componentDidLoad() {
    this.setNestingLevelOnChildren();
  }

  /**
   * Set `nesting-level` and `condensed` attributes in
   * <scale-sidebar-nav-collapsible> and <scale-sidebar-nav-item> children,
   * so styling different levels "automatically" is possible.
   */
  setNestingLevelOnChildren() {
    function setNestingLevel(el: Element, level: number = 1) {
      Array.from(el.children).forEach(child => {
        if (child.tagName === 'SCALE-SIDEBAR-NAV-COLLAPSIBLE') {
          setNestingLevel(child, level + 1);
          if (!child.hasAttribute('nesting-level')) {
            child.setAttribute('nesting-level', String(level));
          }
          if (level === 2 && !child.hasAttribute('condensed')) {
            child.setAttribute('condensed', 'true');
          }
        }
        if (child.tagName === 'SCALE-SIDEBAR-NAV-ITEM') {
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
