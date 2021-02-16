import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-add-device',
})
export class DeviceAddDevice {
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
                  d="M8.5 6a3 3 0 013 3v3.22a7.97 7.97 0 00-.335 10.155A3 3 0 018.5 24h-5a3 3 0 01-3-3V9a3 3 0 013-3zm9 5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zM6 19.75a1 1 0 100 2 1 1 0 000-2zm11.5-5.5a.75.75 0 01.75.75v1.75H20a.75.75 0 010 1.5h-1.75V20a.75.75 0 11-1.5 0v-1.75H15a.75.75 0 110-1.5h1.75V15a.75.75 0 01.75-.75zM17.5 1a3 3 0 013 3v6.085a8 8 0 00-7.5.8V9a4.5 4.5 0 00-4.5-4.5H3.97V4a3 3 0 013-3zm-10 6.5h-3V9h3V7.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M8 6c1.65 0 3 1.35 3 3v3.25c-.65.7-1.15 1.55-1.5 2.5V9c0-.85-.65-1.5-1.5-1.5H7V9H4V7.5H3c-.85 0-1.5.65-1.5 1.5v12c0 .85.65 1.5 1.5 1.5h5c.85 0 1.5-.65 1.5-1.5v-.75c.25.75.65 1.45 1.15 2.1-.5 1-1.5 1.65-2.65 1.65H3c-1.65 0-3-1.35-3-3V9c0-1.65 1.35-3 3-3zm9 5c3.6 0 6.5 2.9 6.5 6.5S20.6 24 17 24s-6.5-2.9-6.5-6.5S13.4 11 17 11zM5.5 19.75a1 1 0 110 2 1 1 0 010-2zm11.5-5.5c-.4 0-.75.35-.75.75v1.75H14.5c-.4 0-.75.35-.75.75s.35.75.75.75h1.75V20c0 .4.35.75.75.75s.75-.35.75-.75v-1.75h1.75c.4 0 .75-.35.75-.75s-.35-.75-.75-.75h-1.75V15c0-.4-.35-.75-.75-.75zM17 1c1.65 0 3 1.35 3 3v6.1c-.5-.2-1-.35-1.5-.45V4c0-.85-.65-1.5-1.5-1.5H6.5C5.65 2.5 5 3.15 5 4v.5H3.5V4c0-1.65 1.35-3 3-3z"
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
