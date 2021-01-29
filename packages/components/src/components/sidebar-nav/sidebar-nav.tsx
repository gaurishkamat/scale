import { Component, h, Prop, Host, Element } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';

/*
TODO
----
- [x] new icon
- [x] remove classNames() outside "map"
- [x] use plain CSS, ~~with variables~~
- [x] auto styles (Tim) (autoset and propagate `condensed`?)
- [ ] "current" styles (vertical line + color) + new padding
- [ ] mobile version toggle
- [ ] mobile version styles
- [ ] aria-selected="true" ? (current – we already have?)
- [ ] sr-only (for screenreader), "she suggested this" (below)

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
  /** (optional) Extra styles */
  @Prop() styles?: string;

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

  render() {
    const label = this.ariaLabel ? { 'aria-label': this.ariaLabel } : {};

    return (
      <Host>
        <style>{this.styles}</style>
        <nav class={this.getCssClassMap()} {...label}>
          <ul class="sidebar-nav__list" role="list">
            <slot />
          </ul>
        </nav>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return 'sidebar-nav';
  }
}
