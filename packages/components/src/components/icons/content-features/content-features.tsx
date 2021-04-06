import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-features',
})
export class ContentFeatures {
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
                <path
                  d="M9.725 3.925l9.695 9.695a2.88 2.88 0 010 4.065L14 23.105a2.885 2.885 0 01-4.07 0L.235 13.41l1.22-8.26 2.66-.395-1.215.18 1.6-.24zm2.835 7.17l-2 1.745-2.465-1.035 1.035 2.46-1.745 2 2.665-.22 1.365 2.275.61-2.605 2.595-.575-2.285-1.385zM9.5.16l12.035 5.375a2.365 2.365 0 011.215 3.12l-1.915 4.28a5.878 5.878 0 00-.335-.38l-.81-.785 1.67-3.725a.865.865 0 00-.435-1.14L9.58 1.84l-1.425.795L4 3.255zm-3.975 7.7a.96.96 0 10-1.36 1.355.96.96 0 001.36-1.355z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M9.7 3.9l9.75 9.75c1.1 1.1 1.1 2.95 0 4.05l-5.4 5.4c-.6.55-1.3.85-2.05.85s-1.5-.3-2.05-.85l-9.7-9.7 1.2-8.25zm-.5 1.6l-6.4 1-.95 6.4 9.2 9.15c.25.25.6.4.95.4s.7-.15.95-.4l5.4-5.45c.55-.5.55-1.4 0-1.95zm3.4 5.55l-.25 2.7 2.3 1.35-2.6.65-.6 2.6-1.4-2.3-2.65.2 1.75-2L8.1 11.8l2.45 1zM9.5.15l12.05 5.4c1.15.5 1.7 1.9 1.2 3.15l-1.9 4.3c-.1-.15-.25-.3-.35-.4l-.8-.8 1.65-3.75c.2-.45 0-.95-.45-1.15L9.55 1.85l-1.4.8-4.15.6zm-5.35 7.7c.4-.35 1-.35 1.35 0s.35 1 0 1.35-1 .35-1.35 0-.35-1 0-1.35z"
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
