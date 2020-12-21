import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-user',
})
export class UserFileUser {
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
                  d="M8.905 15.5L12 18.595l3.095-3.095h2.265a4.73 4.73 0 014.685 3.97l.175 1.03H1.78l.175-1.03A4.73 4.73 0 016.64 15.5h2.265zM12 1.75A5.08 5.08 0 0117.25 7c0 3.175-2.21 6.25-5.25 6.25S6.75 10.175 6.75 7A5.08 5.08 0 0112 1.75z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M8.9 16.5l3.1 3.1 3.1-3.1h2.25c2.35 0 4.3 1.65 4.7 3.95l.2 1.05H1.8l.15-1.05c.4-2.3 2.35-3.95 4.7-3.95zM12 2c3.5 0 6 2.5 6 6 0 3.4-2.4 7-6 7s-6-3.6-6-7c0-3.5 2.5-6 6-6zm0 1.5C9.4 3.5 7.5 5.4 7.5 8c0 2.65 1.8 5.5 4.5 5.5s4.5-2.85 4.5-5.5c0-2.6-1.9-4.5-4.5-4.5z"
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
