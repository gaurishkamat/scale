import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-fixed-line-services',
})
export class DeviceFixedLineServices {
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
                  d="M19.75 11.5a3 3 0 013 3V24H1.25v-9.5a3 3 0 013-3V13a1.5 1.5 0 00-1.5 1.5v8h18.5v-8a1.5 1.5 0 00-1.5-1.5zM15.25 0a3 3 0 013 3v15a3 3 0 01-3 3h-6.5a3 3 0 01-3-3V3a3 3 0 013-3zM12 15a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5-2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-5 0a.75.75 0 100 1.5.75.75 0 000-1.5zM12 10a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm5.75-5h-6.5v3.5h6.5V5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M20 11.5c1.65 0 3 1.35 3 3V24H1.5v-9.5c0-1.65 1.35-3 3-3V13c-.85 0-1.5.65-1.5 1.5v8h18.5v-8c0-.85-.65-1.5-1.5-1.5zM15.5 0c1.65 0 3 1.35 3 3v15c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3V3c0-1.65 1.35-3 3-3zm0 1.5H9c-.85 0-1.5.65-1.5 1.5v15c0 .85.65 1.5 1.5 1.5h6.5c.85 0 1.5-.65 1.5-1.5V3c0-.85-.65-1.5-1.5-1.5zM14.75 15a.75.75 0 110 1.5.75.75 0 010-1.5zm-5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5-2.5a.75.75 0 110 1.5.75.75 0 010-1.5zm-5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zM9.75 10a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm.75-5v3.5H9V5h6.5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
