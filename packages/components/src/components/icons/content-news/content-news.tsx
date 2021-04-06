import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-news',
})
export class ContentNews {
  @Element() hostElement: HTMLElement;

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

  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};

    return (
      <Host>
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
                  d="M22.5 3v15.5a3 3 0 01-3 3h-15a3 3 0 01-3-3V3h21zm-4.75 13h-4a.75.75 0 000 1.5h4a.75.75 0 100-1.5zM11 11H5.5v6.5H11V11zm6.75 2.5h-4a.75.75 0 100 1.5h4a.75.75 0 100-1.5zm0-2.5h-4a.75.75 0 000 1.5h4a.75.75 0 100-1.5zm.75-4h-13v2h13V7z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M22.5 3v15.5c0 1.65-1.35 3-3 3h-15c-1.65 0-3-1.35-3-3V3zM21 4.5H3v14c0 .85.65 1.5 1.5 1.5h15c.85 0 1.5-.65 1.5-1.5zM17.75 16c.4 0 .75.35.75.75s-.35.75-.75.75h-4c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zM11 11v6.5H5.5V11zm6.75 2.5c.4 0 .75.35.75.75s-.35.75-.75.75h-4c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm0-2.5c.4 0 .75.35.75.75s-.35.75-.75.75h-4c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm.75-4v2h-13V7z"
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
