import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-sim-card',
})
export class ContentSimCard {
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
                  d="M21 1v19a3 3 0 01-3 3H6a3 3 0 01-3-3V7.5L9.5 1H21zm-6.5 8h-5A2.5 2.5 0 007 11.5v5A2.5 2.5 0 009.5 19h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0014.5 9zm-1 1.5a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M21 1v19c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V7.5L9.5 1zm-1.5 1.5h-9.4L4.5 8.1V20c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5zm-5 6.5c1.4 0 2.5 1.1 2.5 2.5v5c0 1.4-1.1 2.5-2.5 2.5h-5C8.1 19 7 17.9 7 16.5v-5C7 10.1 8.1 9 9.5 9zm0 1.5h-5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z"
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
