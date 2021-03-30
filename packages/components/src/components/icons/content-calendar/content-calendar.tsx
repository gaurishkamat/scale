import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-calendar',
})
export class ContentCalendar {
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
                  d="M17.5 3.5v-2H16v2H8v-2H6.5v2H2V19a3 3 0 003 3h14a3 3 0 003-3V3.5h-4.5zm-10 14a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2zm4.5 4.5a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2zm4.5 4.5a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M8 1.5v2h8v-2h1.5v2H22V19c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V3.5h4.5v-2H8zM20.5 8h-17v11c0 .85.65 1.5 1.5 1.5h14c.85 0 1.5-.65 1.5-1.5V8zm-13 7.5a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm-9-4.5a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
