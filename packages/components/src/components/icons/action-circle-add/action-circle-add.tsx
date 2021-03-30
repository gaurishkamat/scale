import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-circle-add',
})
export class ActionCircleAdd {
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
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm5 11.75h-4.25V17a.75.75 0 11-1.5 0v-4.25H7a.75.75 0 110-1.5h4.25V7a.75.75 0 111.5 0v4.25H17a.75.75 0 110 1.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm0 3.75c.4 0 .75.35.75.75v4.25H17c.4 0 .75.35.75.75s-.35.75-.75.75h-4.25V17c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-4.25H7c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h4.25V7c0-.4.35-.75.75-.75z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
