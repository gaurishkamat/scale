import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-volume-down',
})
export class ActionVolumeDown {
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
                  d="M13 3.5v17h-2l-4.5-4H5a3 3 0 01-3-3v-3a3 3 0 013-3h1.5l4.5-4h2zm9 7.75a.75.75 0 110 1.5h-6a.75.75 0 010-1.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M13 3.5v17h-2l-4.5-4H5c-1.655 0-3-1.345-3-3v-3c0-1.655 1.345-3 3-3h1.5l4.5-4h2zm-1.5 1.56L7.07 9H5c-.825 0-1.5.675-1.5 1.5v3c0 .825.675 1.5 1.5 1.5h2.07l4.43 3.94V5.06zM22 11.25a.749.749 0 110 1.5h-6a.749.749 0 110-1.5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}