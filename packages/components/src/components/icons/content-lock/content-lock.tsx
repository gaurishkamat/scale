import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-lock',
})
export class ContentLock {
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
                  d="M18.5 9.5v-2a6.5 6.5 0 10-13 0v2H3V19a3 3 0 003 3h12a3 3 0 003-3V9.5h-2.5zM13 16.11V18h-2v-1.89a1.5 1.5 0 112 0zm4-6.61H7v-2a5 5 0 0110 0v2z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M12 1c3.6 0 6.5 2.9 6.5 6.5v2H21V19c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V9.5h2.5v-2C5.5 3.9 8.4 1 12 1zm7.5 10h-15v8c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5zM12 13.5c.85 0 1.5.65 1.5 1.5 0 .45-.2.85-.5 1.1V18h-2v-1.9c-.3-.25-.5-.65-.5-1.1 0-.85.65-1.5 1.5-1.5zm0-11c-2.75 0-5 2.25-5 5v2h10v-2c0-2.75-2.25-5-5-5z"
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
