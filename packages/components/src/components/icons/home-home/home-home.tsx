import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-home-home',
})
export class HomeHome {
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
                  d="M12 5.11l7.75 7.75V19a2.245 2.245 0 01-2.25 2.25h-4.75v-4.5a.75.75 0 10-1.5 0v4.5H6.5A2.245 2.245 0 014.25 19v-6.14zm0-4.24l11.565 11.565-1.06 1.06L12 2.99 1.495 13.495l-1.06-1.06z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M19 12.1l1.5 1.5V19c0 1.65-1.35 3-3 3h-11c-1.65 0-3-1.35-3-3v-5.4L5 12.1V19c0 .85.65 1.5 1.5 1.5h4.75v-3.75c0-.4.35-.75.75-.75s.75.35.75.75v3.75h4.75c.85 0 1.5-.65 1.5-1.5zM12 .85l11.55 11.6-1.05 1.05L12 3 1.5 13.5.45 12.45z"
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
