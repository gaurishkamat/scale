import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-applications',
})
export class ContentApplications {
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
                  d="M9 13a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a2 2 0 012-2h5zm11 0a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5a2 2 0 012-2h5zM9 2a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5zm11 0a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V4a2 2 0 012-2h5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M8 13c1.4 0 2.5 1.1 2.5 2.5v4c0 1.4-1.1 2.5-2.5 2.5H4c-1.4 0-2.5-1.1-2.5-2.5v-4C1.5 14.1 2.6 13 4 13zm11 0c1.4 0 2.5 1.1 2.5 2.5v4c0 1.4-1.1 2.5-2.5 2.5h-4c-1.4 0-2.5-1.1-2.5-2.5v-4c0-1.4 1.1-2.5 2.5-2.5zM8 14.5H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm11 0h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zM8 2c1.4 0 2.5 1.1 2.5 2.5v4C10.5 9.9 9.4 11 8 11H4c-1.4 0-2.5-1.1-2.5-2.5v-4C1.5 3.1 2.6 2 4 2zm11 0c1.4 0 2.5 1.1 2.5 2.5v4c0 1.4-1.1 2.5-2.5 2.5h-4c-1.4 0-2.5-1.1-2.5-2.5v-4C12.5 3.1 13.6 2 15 2zM8 3.5H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm11 0h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"
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
