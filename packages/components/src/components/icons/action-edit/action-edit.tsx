import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-edit'
})
export class ActionEdit {
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
            {this.selected ? (<g><path d="M21.25 19.5a.75.75 0 010 1.5H8.045l1.05-1.5zM3.355 17.15l3.14 2.205L3 20.995l.35-3.84zM15.46 1.29v.02a1.915 1.915 0 011.57 3L7.355 18.125l-3.14-2.2 9.67-13.815a1.92 1.92 0 011.575-.82z" fill-rule="evenodd"></path></g>) : (<g><path d="M21.25 19.5c.4 0 .75.35.75.75s-.35.75-.75.75H8.05l1.05-1.5zm-17.9-2.35l3.15 2.2L3 21zM13.9 2.1c.55-.8 1.8-1.05 2.65-.45l.136.1c.783.625.932 1.745.364 2.55l-9.7 13.8-3.15-2.2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}