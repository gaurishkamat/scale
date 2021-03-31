import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-circle-close'
})
export class ActionCircleClose {
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
            {this.selected ? (<g><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm4.065 14a.745.745 0 010 1.06.75.75 0 01-1.06 0l-3-3-3 3a.755.755 0 01-.53.22.75.75 0 01-.54-1.28l3-3-3-3A.753.753 0 019 7.935l3 3 3-3A.753.753 0 0116.065 9l-3 3 3 3z"></path></g>) : (<g><path d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zM7.95 7.95c.3-.3.75-.3 1.05 0l3 3 3-3c.3-.3.75-.3 1.05 0s.3.75 0 1.05l-3 3 3 3c.3.3.3.75 0 1.05s-.75.3-1.05 0l-3-3-3 3c-.3.3-.75.3-1.05 0s-.3-.75 0-1.05l3-3-3-3c-.3-.3-.3-.75 0-1.05z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}