import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-communication-call-incoming',
})
export class CommunicationCallIncoming {
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
                  d="M5.5 4.31l2.805 5.045-1.28 1.28a1.5 1.5 0 00-.105 2A29.66 29.66 0 009.035 15l.458.442c.616.583 1.258 1.14 1.922 1.668a1.5 1.5 0 002-.11l1.305-1.275 5 2.805c-.59 5.135-4.67 4.315-6 3.86-2.415-.825-4.965-2.695-7.17-4.905l-.329-.334c-2.065-2.13-3.792-4.542-4.576-6.841C1.19 8.965.37 4.885 5.5 4.31zm16.405-2.966c.2 0 .39.08.53.221a.745.745 0 010 1.06L16.78 8.28l2.19 2.19-6.875 1.435L13.53 5.03l2.19 2.19 5.655-5.655a.745.745 0 01.53-.221z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M5.9 3.5l3.4 5.95-1.7 1.7c-.25.25-.3.7-.05 1 .45.55 1.15 1.4 2.05 2.3s1.75 1.6 2.3 2.05c.3.25.75.2 1-.05l1.6-1.65 5.95 3.35c-.1 1.15-.35 3.5-2.25 4.7-.8.5-1.7.65-2.5.65-1 0-1.9-.3-2.25-.4-2.3-.8-4.95-2.6-7.45-5.1-2.45-2.5-4.25-5.15-5.1-7.5-.2-.65-.85-2.9.3-4.75C2.45 3.85 4.8 3.6 5.9 3.5zm-.75 1.6c-1.25.2-2.15.7-2.6 1.45-.8 1.25-.3 2.95-.15 3.45.7 2.15 2.4 4.6 4.7 6.9 2.35 2.35 4.8 4.05 6.9 4.75.45.15 2.2.65 3.45-.15.75-.45 1.25-1.35 1.45-2.6l-4.05-2.3-.9.9c-.8.8-2.1.85-3 .15-.6-.45-1.5-1.2-2.45-2.15l-.242-.258A52.645 52.645 0 016.35 13.05c-.75-.9-.65-2.2.15-3l.95-.9zM21.4 1.55c.3-.3.75-.3 1.05 0s.3.8 0 1.05l-5.7 5.65 2.2 2.2-6.9 1.45L13.5 5l2.2 2.2z"
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
