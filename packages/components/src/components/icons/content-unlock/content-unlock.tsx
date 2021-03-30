import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-unlock',
})
export class ContentUnlock {
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
                  d="M7 11V7a5 5 0 0110 0h1.5a6.5 6.5 0 10-13 0v4H3v9.5a3 3 0 003 3h12a3 3 0 003-3V11H7zm6 6.61v1.89h-2v-1.89a1.5 1.5 0 112 0z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M12 .5c2.3 0 4.45 1.25 5.6 3.2.6 1 .9 2.15.9 3.3H17c0-.9-.25-1.8-.7-2.55C15.4 2.95 13.75 2 12 2 9.25 2 7 4.25 7 7v4h14v9.5c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V11h2.5V7C5.5 3.4 8.4.5 12 .5zm7.5 12h-15v8c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5zM12 15c.85 0 1.5.65 1.5 1.5 0 .45-.2.85-.5 1.1v1.9h-2v-1.9c-.3-.25-.5-.65-.5-1.1 0-.85.65-1.5 1.5-1.5z"
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
