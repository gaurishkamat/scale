import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-id-card',
})
export class UserFileIdCard {
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
                  d="M.5 3.5v14a3 3 0 003 3h17a3 3 0 003-3v-14H.5zm7.755 4.47a2 2 0 012.08 2.095c0 1.265-.875 2.5-2.08 2.5s-2.085-1.225-2.085-2.5A2 2 0 018.255 7.97zM4.5 15.47l.13-.72a1.665 1.665 0 011.64-1.365h.815L8.25 14.55l1.16-1.165h.815a1.665 1.665 0 011.64 1.365l.135.72H4.5zM19.25 14h-5a.75.75 0 110-1.5h5a.75.75 0 110 1.5zm0-3h-5a.75.75 0 110-1.5h5a.75.75 0 110 1.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M23.5 3.5v14c0 1.65-1.35 3-3 3h-17c-1.65 0-3-1.35-3-3v-14zM22 5H2v12.5c0 .85.65 1.5 1.5 1.5h17c.85 0 1.5-.65 1.5-1.5zM7.15 13.5l1.15 1.1 1.1-1.1h.75c.75 0 1.4.55 1.55 1.3l.1.7H4.7l.15-.7c.15-.75.8-1.3 1.55-1.3zm12.1-1c.4 0 .75.35.75.75s-.35.75-.75.75h-5c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm-11-4.45c1.15 0 2.1.85 2.1 2.1s-.9 2.5-2.1 2.5-2.1-1.25-2.1-2.5.95-2.1 2.1-2.1zm11 1.45c.4 0 .75.35.75.75s-.35.75-.75.75h-5c-.4 0-.75-.35-.75-.75s.35-.75.75-.75z"
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
