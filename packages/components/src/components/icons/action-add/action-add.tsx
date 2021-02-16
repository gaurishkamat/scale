import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-add',
})
export class ActionAdd {
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
                  d="M19.5 10.75h-6.25V4.5a1.25 1.25 0 00-2.5 0v6.25H4.5a1.25 1.25 0 000 2.5h6.25v6.25a1.25 1.25 0 102.5 0v-6.25h6.25a1.25 1.25 0 100-2.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M19.5 11.25h-6.75V4.5c0-.4-.35-.75-.75-.75s-.75.35-.75.75v6.75H4.5c-.4 0-.75.35-.75.75s.35.75.75.75h6.75v6.75c0 .4.35.75.75.75s.75-.35.75-.75v-6.75h6.75c.4 0 .75-.35.75-.75s-.35-.75-.75-.75z"
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
