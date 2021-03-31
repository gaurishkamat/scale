import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-clipboard'
})
export class ContentClipboard {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M6.545 3a3.32 3.32 0 00-.045.5V7h11V3.5a3.32 3.32 0 00-.045-.5H21v17.5a3 3 0 01-3 3H6a3 3 0 01-3-3V3zM16 16H8a.75.75 0 000 1.5h8a.75.75 0 100-1.5zm0-3.5H8A.75.75 0 108 14h8a.75.75 0 100-1.5zM16 9H8a.75.75 0 000 1.5h8A.75.75 0 1016 9zm-4-9a1.5 1.5 0 011.5 1.5V2h1A1.5 1.5 0 0116 3.5v2H8v-2A1.5 1.5 0 019.5 2h1v-.5A1.5 1.5 0 0112 0z"></path></g>) : (<g><path d="M6.661 3.429c-.049.147-.049.342-.049.49v.979H4.653v15.673c0 .833.637 1.47 1.47 1.47h11.755c.832 0 1.469-.637 1.469-1.47V4.898h-1.96v-.98c0-.147 0-.342-.048-.49h3.477v17.143a2.947 2.947 0 01-2.938 2.94H6.122a2.947 2.947 0 01-2.938-2.94V3.43zm9.257 12.734c.392 0 .735.343.735.735a.753.753 0 01-.735.735H8.082a.753.753 0 01-.735-.735c0-.392.343-.735.735-.735zm0-3.428c.392 0 .735.343.735.734a.753.753 0 01-.735.735H8.082a.753.753 0 01-.735-.735c0-.391.343-.734.735-.734zm0-3.429c.392 0 .735.343.735.735a.753.753 0 01-.735.735H8.082a.753.753 0 01-.735-.735c0-.392.343-.735.735-.735zM10.531 1.96c0-.881.832-1.616 1.763-1.47.686.148 1.175.784 1.175 1.52v.44h.98c.833 0 1.47.637 1.47 1.47v1.959H8.081v-1.96c0-.832.636-1.469 1.469-1.469h.98z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}