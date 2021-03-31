import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-copy-paste'
})
export class ActionCopyPaste {
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
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {}

    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.size} height={this.size} viewBox="0 0 24 24" {...ariaHidden}>
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={this.color}>
            {this.selected ? (<g><path fill-rule="evenodd" d="M17 7v12.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V7H17zm5.5-5.5V14a3 3 0 01-3 3h-1v-1.5h1A1.5 1.5 0 0021 14V3H8.5v2.5H7v-4h15.5z"></path></g>) : (<g><path fill-rule="evenodd" d="M17 7v12.5c0 1.655-1.345 3-3 3H4.5c-1.655 0-3-1.345-3-3V7H17zm-1.5 1.5H3v11c0 .825.675 1.5 1.5 1.5H14c.825 0 1.5-.675 1.5-1.5v-11zm7-7V14c0 1.655-1.345 3-3 3h-1v-1.5h1c.825 0 1.5-.675 1.5-1.5V3H8.5v2.5H7v-4h15.5z"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}