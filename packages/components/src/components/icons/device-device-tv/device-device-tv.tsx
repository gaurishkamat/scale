import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-device-tv',
})
export class DeviceDeviceTv {
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
      <Host class="scl-icon">
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
                  d="M1 3.5V16a3 3 0 003 3h5.44l-.11.21A1.5 1.5 0 018 20H5.5v1.5h13V20H16a1.5 1.5 0 01-1.325-.79L14.56 19H20a3 3 0 003-3V3.5H1zm8.5 11.35v-7.2l5.5 3.6-5.5 3.6z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M1 3.5V16a3 3 0 003 3h5.44l-.11.21A1.5 1.5 0 018 20H5.5v1.5h13V20H16a1.5 1.5 0 01-1.325-.79L14.56 19H20a3 3 0 003-3V3.5H1zm8.5 11.35v-7.2l5.5 3.6-5.5 3.6z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
