import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-alert-imprint-dataprivacy'
})
export class AlertImprintDataprivacy {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M12 1.75l-8.75 2v7.4c0 5.386 3.571 10.12 8.75 11.6a12.065 12.065 0 008.75-11.6v-7.4l-8.75-2zm0 4.75A2.425 2.425 0 0114.5 9c0 1.5-1.055 3-2.5 3s-2.5-1.47-2.5-3A2.425 2.425 0 0112 6.5zm-4.5 9l.16-.865A2 2 0 019.625 13h1L12 14.395 13.395 13h1a2 2 0 011.965 1.635l.14.865h-9z"></path></g>) : (<g><path d="M12 1l9.5 2.15v8c0 2.85-.95 5.55-2.6 7.75-2.6 3.4-5.85 4.35-6.9 4.65-4.2-1.2-6.25-3.8-6.7-4.4-1.75-2.25-2.8-5.05-2.8-8v-8zm0 1.5L4 4.35v6.8c0 4.95 3.3 9.35 8 10.8 4.7-1.45 8-5.85 8-10.8v-6.8zM10.6 13l1.4 1.4 1.4-1.4h1c.95 0 1.75.7 1.95 1.65l.15.85h-9l.15-.85C7.8 13.7 8.65 13 9.6 13zM12 6.5c1.4 0 2.5 1 2.5 2.5 0 1.55-1.05 3-2.5 3s-2.5-1.5-2.5-3 1.1-2.5 2.5-2.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}