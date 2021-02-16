import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-media-folder',
})
export class ContentMediaFolder {
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
                  d="M7.5 2.5a3.755 3.755 0 012.74 1.18l.43.46c.216.228.516.358.83.36H23V19a3 3 0 01-3 3H4a3 3 0 01-3-3V2.5zm2 6.89v7.5l5.73-3.75z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M7.5 2.5a3.755 3.755 0 012.74 1.18l.43.46c.216.228.516.358.83.36H23V19a3 3 0 01-3 3H4a3 3 0 01-3-3V2.5zm2 6.89v7.5l5.73-3.75z"
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
