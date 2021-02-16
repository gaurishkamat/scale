import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-screen-rotate',
})
export class DeviceScreenRotate {
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
                  d="M22.153 12.678l.102.007a.76.76 0 01.665.85A11.075 11.075 0 0118 21.23L19.125 23h-5.31l2.13-4.855L17.155 20a9.575 9.575 0 004.255-6.675.75.75 0 01.845-.64zM15.258 1.5a3 3 0 012.122.88l4.24 4.24a3 3 0 010 4.245L10.865 21.62a3 3 0 01-4.245 0l-4.24-4.24a3 3 0 010-4.245L13.135 2.38a3 3 0 012.123-.88zM8.12 15.85a1.255 1.255 0 00-1.77 0 1.26 1.26 0 000 1.77c.49.487 1.28.487 1.77 0l.015.015a1.26 1.26 0 00-.015-1.785zm-.87.15a.75.75 0 11-.001 1.5.75.75 0 01.001-1.5zm2.935-15l-2.13 4.88-1.21-1.855a9.575 9.575 0 00-4.255 6.65.745.745 0 01-.74.645l-.105-.005a.76.76 0 01-.64-.85 11.075 11.075 0 014.92-7.705L4.875 1h5.31z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M22.153 12.678l.102.007c.41.06.695.44.645.845-.44 3.155-2.275 5.975-4.92 7.695l1.15 1.76-5.31-.01 2.13-4.86 1.21 1.855c2.285-1.485 3.87-3.92 4.25-6.645a.75.75 0 01.845-.64zM15.255 1.5c.77 0 1.54.295 2.12.875L21.62 6.62a3.003 3.003 0 010 4.25L10.865 21.625a2.996 2.996 0 01-4.24 0L2.38 17.38a3.006 3.006 0 010-4.245L13.135 2.38a2.987 2.987 0 012.12-.88zm0 1.5c-.4 0-.775.155-1.06.44L3.44 14.195a1.5 1.5 0 000 2.12l4.245 4.245c.285.285.66.44 1.06.44s.775-.155 1.06-.44L20.56 9.805a1.5 1.5 0 000-2.12L16.315 3.44a1.486 1.486 0 00-1.06-.44zM4.875 1.01l5.305.015-2.13 4.86L6.84 4.03c-2.285 1.485-3.87 3.92-4.25 6.645a.744.744 0 01-.74.645c-.035 0-.07 0-.105-.01a.75.75 0 01-.64-.845C1.545 7.31 3.38 4.49 6.025 2.77l-1.15-1.76z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
