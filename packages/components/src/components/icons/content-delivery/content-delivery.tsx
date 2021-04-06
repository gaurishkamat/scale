import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-delivery',
})
export class ContentDelivery {
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
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};

    return (
      <Host>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={this.size}
          height={this.size}
          viewBox="0 0 24 24"
          {...ariaHidden}
        >
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={this.color}>
            {this.selected ? (
              <g>
                <filter id="a">
                  <feColorMatrix
                    in="SourceGraphic"
                    values="0 0 0 0 0.149020 0 0 0 0 0.149020 0 0 0 0 0.149020 0 0 0 1.000000 0"
                  ></feColorMatrix>
                </filter>
                <g fill="none" fill-rule="evenodd" filter="url(#a)">
                  <path d="M0 0h24v24H0z"></path>
                  <g fill="#000" fill-rule="nonzero">
                    <path d="M.5 5h9V1.5h-6zM17 1.5h-6V5h9zM.5 17.5a3 3 0 003 3h6v-14h-9zM17.75 10c.762 0 1.52.113 2.25.335V6.5h-9v7.45A7.745 7.745 0 0117.75 10z"></path>
                    <path d="M17.75 11.5a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zm3.145 5.095L17 20.5 14.545 18a.75.75 0 011.06-1.06L17 18.355l2.82-2.82a.745.745 0 011.06 0c.294.29.3.762.015 1.06z"></path>
                  </g>
                </g>
              </g>
            ) : (
              <g>
                <path
                  d="M17.25 11.5c3.45 0 6.25 2.8 6.25 6.25S20.7 24 17.25 24 11 21.2 11 17.75s2.8-6.25 6.25-6.25zm3.1 4.05c-.3-.3-.75-.3-1.05 0l-2.8 2.8-1.4-1.4c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05l2.45 2.5 3.9-3.9c.3-.3.25-.75-.05-1.05zM16.5 1.5l3 3.5v5.35c-.5-.15-1-.25-1.5-.3V6.5h-7.5v3H9v-3H1.5v11c0 .85.65 1.5 1.5 1.5h6.6c.1.5.2 1 .4 1.5H3c-1.65 0-3-1.35-3-3V5l3-3.5zM15.8 3h-5.3v2h7.05zM9 3H3.7L2 5h7z"
                  fill-rule="evenodd"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
