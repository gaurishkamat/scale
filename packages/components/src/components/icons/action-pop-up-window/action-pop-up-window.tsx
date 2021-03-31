import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-pop-up-window'
})
export class ActionPopUpWindow {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M23.5 10v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9h15zM22 13H10v6a1.5 1.5 0 001.5 1.5h9A1.5 1.5 0 0022 19v-6zM18.5 2v6.5H7v9H3.5a3 3 0 01-3-3V2h18zm-16 .875a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25z"></path></g>) : (<g><path d="M23.5 10v9c0 1.65-1.35 3-3 3h-9c-1.65 0-3-1.35-3-3v-9zM22 13H10v6c0 .85.65 1.5 1.5 1.5h9c.85 0 1.5-.65 1.5-1.5zM18.5 2v6.5H17V5H2v9.5c0 .85.65 1.5 1.5 1.5H7v1.5H3.5c-1.65 0-3-1.35-3-3V2zm-12 .9c-.35 0-.6.25-.6.6s.25.65.6.65.6-.35.6-.65-.25-.6-.6-.6zm-2 0c-.35 0-.6.25-.6.6s.25.65.6.65.6-.35.6-.65-.25-.6-.6-.6zm-2 0c-.35 0-.6.25-.6.6s.25.65.6.65.6-.35.6-.65-.25-.6-.6-.6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}