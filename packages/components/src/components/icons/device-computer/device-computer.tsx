import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-computer',
})
export class DeviceComputer {
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
                  d="M24 17a2 2 0 01-2 2H2a2 2 0 01-2-2zM18.5 4.25a2.245 2.245 0 012.25 2.25v9H3.25v-9A2.245 2.245 0 015.5 4.25zm-11 3.505v5.09l1.08-1.29 1 2.385.92-.39-1-2.38 1.645.14z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M24 17c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2zM18.5 3.5c1.65 0 3 1.35 3 3v9H20v-9c0-.85-.65-1.5-1.5-1.5h-13C4.65 5 4 5.65 4 6.5v9H2.5v-9c0-1.65 1.35-3 3-3zm-11 4.25l3.65 3.55-1.65-.15 1 2.4-.95.4-1-2.4-1.05 1.3z"
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
