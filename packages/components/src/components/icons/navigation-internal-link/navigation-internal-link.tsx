import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-internal-link'
})
export class NavigationInternalLink {
  @Element() hostElement: HTMLElement;

  /** (optional) The width and height in pixels */
  @Prop() size?: number = 24;
  /** (optional) Sets the icon color via the `fill` attribute */
  @Prop() color?: string = 'currentColor'; 
  /** (optional) If `true`, the icon changes visually */
  @Prop() selected?: boolean = false;
  /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
  @Prop() decorative?: boolean = false;
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  @Prop() accessibilityTitle?: string;

  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {}

    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.size} height={this.size} viewBox="0 0 24 24" {...ariaHidden}>
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={this.color}>
            {this.selected ? (<g><path fill-rule="evenodd" d="M18.525 3L13.07 8.44 9.875 5.245 9.5 7.055 7.865 14.95l-.315 1.5 1.5-.315 7.895-1.635 1.81-.39-3.195-3.195L21 5.5V18a3 3 0 01-3 3H6a3 3 0 01-3-3V3h15.525zm2.63-.906c.2 0 .39.08.53.221a.745.745 0 010 1.06l-7.54 7.53L16.74 13.5l-7.895 1.655L10.5 7.26l2.585 2.595 7.54-7.54a.745.745 0 01.53-.221z"></path></g>) : (<g><path d="M17.8 3l-1.5 1.5H4.5V18c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5V7.7L21 6.2V18c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V3zm2.85-.7c.3-.3.75-.3 1.05 0s.3.8 0 1.05l-7.55 7.55 2.6 2.6-7.9 1.65 1.65-7.9 2.6 2.6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}