import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-stream-on',
})
export class ActionStreamOn {
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
                  d="M1.75 18a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0-3.5a4.755 4.755 0 014.75 4.75c-.003.422-.06.842-.17 1.25H4.75A3.25 3.25 0 00.5 16.25v-1.58c.408-.11.828-.167 1.25-.17zm0-3.5A8.26 8.26 0 0110 19.25c-.007.42-.047.837-.12 1.25h-1.5c.078-.412.118-.83.12-1.25a6.76 6.76 0 00-6.75-6.75 6.88 6.88 0 00-1.25.105v-1.5c.414-.065.831-.1 1.25-.105zM20.5 3.5a3 3 0 013 3v11a3 3 0 01-3 3h-9.09a9.37 9.37 0 00.09-1.25A9.75 9.75 0 001.75 9.5a9.37 9.37 0 00-1.25.09V6.5a3 3 0 013-3z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M1.75 11C6.3 11 10 14.7 10 19.25c0 .45-.05.85-.1 1.25H8.4c.05-.4.1-.8.1-1.25 0-3.7-3.05-6.75-6.75-6.75-.45 0-.85.05-1.25.1v-1.5c.4-.05.8-.1 1.25-.1zm0 3.5c2.6 0 4.75 2.15 4.75 4.75 0 .45-.05.85-.15 1.25h-1.6c.15-.4.25-.8.25-1.25C5 17.45 3.55 16 1.75 16c-.45 0-.85.1-1.25.25v-1.6c.4-.1.8-.15 1.25-.15zm0 3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM20.5 3.5c1.65 0 3 1.35 3 3v11c0 1.65-1.35 3-3 3h-9.1c.15-.85.1-1.15.1-1.5h9c.85 0 1.5-.65 1.5-1.5v-11c0-.85-.65-1.5-1.5-1.5h-17C2.7 5 2 5.65 2 6.5v3s-.45-.05-1.5.1V6.5c0-1.65 1.35-3 3-3z"
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
