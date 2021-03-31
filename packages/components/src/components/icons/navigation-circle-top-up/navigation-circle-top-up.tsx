import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-circle-top-up',
})
export class NavigationCircleTopUp {
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
                  d="M19.25 4.75a10.255 10.255 0 10-14.506 14.5A10.255 10.255 0 0019.25 4.75zm-4.3 9L12 10.6l-2.95 3.16-1.1-1L12 8.4l4.05 4.34z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M4.2 4.2c4.3-4.25 11.3-4.25 15.6 0 4.25 4.3 4.25 11.3 0 15.6-2.15 2.15-5 3.2-7.8 3.2s-5.65-1.1-7.8-3.2C-.05 15.5-.05 8.5 4.2 4.2zm14.55 1.1C15.05 1.6 9 1.6 5.3 5.3S1.6 15 5.25 18.7c3.7 3.7 9.75 3.7 13.45 0s3.7-9.7.05-13.4zM12 8.4l4.05 4.35c.25.3.25.75-.05 1.05-.3.25-.75.25-1.05-.05L12 10.6l-2.95 3.15c-.25.3-.75.35-1.05.05a.725.725 0 01-.05-1.05z"
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
