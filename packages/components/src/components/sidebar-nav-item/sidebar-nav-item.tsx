import { Component, h, Prop, Host, Watch, Element } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

const SR_ACTIVE_TEXT = ' Zurzeit aktiv';

@Component({
  tag: 'scale-sidebar-nav-item',
  styleUrl: 'sidebar-nav-item.css',
  shadow: true,
})
export class SidebarNavItem {
  srOnlyElement: HTMLElement;

  @Element() el: HTMLElement;

  /** Used normally for third level items, remove the bottom border */
  @Prop() condensed: boolean = false;
  /** Bold text */
  @Prop() bold: boolean = false;
  /** Text gets the active color */
  @Prop() active: boolean = false;
  /**
   * Mark the child link as "current" with `aria-current=page`.
   * Provide the text hint if needed, default is: "Zurzeit aktiv"
   */
  @Prop() current: string | null = null;
  /** Nesting level within the <scale-sidebar-nav> parent, gets set automatically */
  @Prop() nestingLevel: number;
  /** (optional) Extra styles */
  @Prop() styles?: string;

  @Watch('nestingLevel')
  nestingLevelChanged(newValue: number) {
    if (newValue === 1) {
      this.bold = true;
    }
  }

  @Watch('current')
  currentChanged(newValue: string | null) {
    this.handleAriaCurrentInSlottedA(newValue);
  }

  componentDidLoad() {
    this.handleAriaCurrentInSlottedA(this.current);
  }

  /**
   * When `current` is set, this will:
   * - set the aria-current=page attribute on the link
   * - append a text-only hint for screen readers
   * so we end up with something like this:
   * <a href="..." aria-current="page">
   *    Example<span style="...visible to SR only..."> Active link</span>
   * </a>
   * @param current this.current
   */
  handleAriaCurrentInSlottedA(current: string | null) {
    const a = this.el.querySelector('a');

    if (this.srOnlyElement != null) {
      a.removeChild(this.srOnlyElement);
      this.srOnlyElement = null;
    }
    if (current === null && a != null) {
      a.removeAttribute('aria-current');
      return;
    }
    if (current != null && a != null) {
      this.srOnlyElement = this.createScreenReaderOnlySpan();
      a.appendChild(this.srOnlyElement);
      a.setAttribute('aria-current', 'page');
    }
  }

  createScreenReaderOnlySpan() {
    const text = this.current !== '' ? ` ${this.current}` : SR_ACTIVE_TEXT;
    const span = document.createElement('span');
    // .sr-only but inline
    Object.assign(span.style, {
      position: 'absolute',
      left: '-10000px',
      overflow: 'hidden',
    });
    span.textContent = text;

    return span;
  }

  render() {
    return (
      <Host>
        <style>{this.styles}</style>
        <li class={this.getCssClassMap()} role="listitem">
          <slot />
        </li>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return classNames(
      'sidebar-nav-item',
      this.bold && 'sidebar-nav-item--bold',
      this.condensed && 'sidebar-nav-item--condensed',
      this.active && 'sidebar-nav-item--active'
    );
  }
}
