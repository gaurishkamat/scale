import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-move'
})
export class ActionMove {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M23.5 12L18 8.4v2.35h-4.75V6h2.35L12 .5 8.4 6h2.35v4.75H6V8.4L.5 12 6 15.6v-2.35h4.75V18H8.4l3.6 5.5 3.6-5.5h-2.35v-4.75H18v2.35z"></path></g>) : (<g><path fill-rule="evenodd" d="M23.5 12L18 8.4v2.85h-5.25V6h2.85L12 .5 8.4 6h2.85v5.25H6V8.4L.5 12 6 15.6v-2.85h5.25V18H8.4l3.6 5.5 3.6-5.5h-2.85v-5.25H18v2.85z"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}