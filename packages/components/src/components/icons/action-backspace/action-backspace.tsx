import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-backspace',
})
export class ActionBackspace {
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
                  d="M20.5 3.5h-12L1 12l7.5 8.5h12a3 3 0 003-3v-11a3 3 0 00-3-3zm-2 10.925a.745.745 0 010 1.075.75.75 0 01-1.06 0L15 13.06l-2.425 2.44a.75.75 0 01-1.075 0 .745.745 0 010-1.06L13.94 12 11.5 9.575A.76.76 0 0112.575 8.5L15 10.94l2.425-2.44A.76.76 0 0118.5 9.575L16.06 12l2.44 2.425z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M20 3.5c1.65 0 3 1.35 3 3v11c0 1.65-1.35 3-3 3H8L.5 12 8 3.5zM20 5H8.7l-6.2 7 6.2 7H20c.85 0 1.5-.65 1.5-1.5v-11c0-.85-.65-1.5-1.5-1.5zm-8.95 3.5c.3-.3.75-.3 1.05 0l2.4 2.45 2.45-2.45c.3-.3.75-.3 1.05 0s.3.8-.05 1.1l-2.4 2.4 2.35 2.4c.3.3.3.75 0 1.05s-.75.3-1.05 0l-2.4-2.4-2.4 2.4c-.3.3-.75.3-1.05 0s-.3-.75 0-1.05l2.45-2.45-2.4-2.4c-.3-.3-.3-.75 0-1.05z"
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
