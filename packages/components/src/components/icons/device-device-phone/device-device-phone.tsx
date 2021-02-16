import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-device-phone',
})
export class DeviceDevicePhone {
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
                  d="M16 .5a3 3 0 013 3v17a3 3 0 01-3 3H8a3 3 0 01-3-3v-17a3 3 0 013-3zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zm2-16.5h-4v1h4v-1z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M16 .5c1.65 0 3 1.35 3 3v17c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3v-17c0-1.65 1.35-3 3-3zM10 2H8c-.85 0-1.5.65-1.5 1.5v17c0 .85.65 1.5 1.5 1.5h8c.85 0 1.5-.65 1.5-1.5v-17c0-.85-.65-1.5-1.5-1.5h-2v1.5h-4zm2 16.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
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
