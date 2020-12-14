import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-mobile-devices-combination',
})
export class DeviceMobileDevicesCombination {
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

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};

    return (
      <Host style={{ display: 'inline-flex' }}>
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
                  fill-rule="evenodd"
                  d="M10 6a2.5 2.5 0 012.5 2.5v13A2.5 2.5 0 0110 24H4a2.5 2.5 0 01-2.5-2.5v-13A2.5 2.5 0 014 6zM7 19.75a1 1 0 100 2 1 1 0 000-2zM19.5 0a3 3 0 013 3v14.5a3 3 0 01-3 3H14V19h5.5a1.5 1.5 0 001.5-1.5V3a1.5 1.5 0 00-1.5-1.5H10A1.5 1.5 0 008.5 3v1.5H7V3a3 3 0 013-3zm-4.75 16a1 1 0 110 2 1 1 0 010-2zM8.5 7.5h-3V9h3V7.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M10 6c1.4 0 2.5 1.1 2.5 2.5v13c0 1.4-1.1 2.5-2.5 2.5H4c-1.4 0-2.5-1.1-2.5-2.5v-13C1.5 7.1 2.6 6 4 6zM5.5 7.5H4c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-13c0-.55-.45-1-1-1H8.5V9h-3zM7 19.75a1 1 0 110 2 1 1 0 010-2zM19.5 0c1.65 0 3 1.35 3 3v14.5c0 1.65-1.35 3-3 3H14V19h5.5c.85 0 1.5-.65 1.5-1.5V3c0-.85-.65-1.5-1.5-1.5H10c-.85 0-1.5.65-1.5 1.5v1.5H7V3c0-1.65 1.35-3 3-3zm-4.75 16a1 1 0 110 2 1 1 0 010-2z"
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
