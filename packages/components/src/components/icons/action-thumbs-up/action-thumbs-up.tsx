import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-thumbs-up',
})
export class ActionThumbsUp {
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
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};

    return (
      <Host>
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
                  d="M18.96 9.25h-3.625a1 1 0 01-1-1.14s.395-3 .5-4A1.535 1.535 0 0012 3.15c-.365.715-.54 1.095-1.305 2.825-1.045 2.37-2.24 4.595-4.17 5.145v-.62H2V22h4.5v-2.64a5.5 5.5 0 012 .64 8.87 8.87 0 004.555 1.265h3.195c1.615 0 3-.95 2.71-2.38a2.315 2.315 0 001.115-2.91A2.255 2.255 0 0020.79 13c1.26-1.315.21-3.75-1.83-3.75zM5 20.5H3.5V12H5v8.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M21.655 13.13c.505-.79.58-1.8.175-2.735-.51-1.17-1.605-1.895-2.87-1.895h-3.625a.25.25 0 01-.245-.295l.525-4c.155-1.19-.505-2.26-1.605-2.6-1.08-.335-2.165.15-2.7 1.21-.375.735-.56 1.135-1.32 2.86-1.28 2.9-2.525 4.83-4.425 4.83H2v11.5h4.5V20.12c.565.09 1.115.245 1.61.52 1 .555 2.575 1.36 4.905 1.36h.015l3.22-.005c1.215 0 2.315-.45 2.945-1.215.36-.44.55-.98.555-1.535.97-.74 1.425-1.935 1.185-3.06.825-.86 1.09-1.985.72-3.055zM20.3 14.315c-.11.62-.545.935-1.145 1.405.27.62.455.93.27 1.51-.12.37-.24.655-1.31 1.245.125.62.245.95-.085 1.355-.335.415-1.02.67-1.78.67l-3.22.005h-.01c-1.62 0-2.85-.435-4.175-1.18-.755-.42-1.545-.625-2.34-.725v-6.71c2.41-.545 3.77-3.15 4.855-5.615.755-1.71.925-2.075 1.285-2.79.3-.595.78-.495.92-.455.305.095.635.405.56.975L13.605 8c-.15 1.055.665 2 1.735 2h3.625c.785 0 1.285.51 1.495.99.51 1.18-.47 1.71-.57 1.91.285.56.505.895.41 1.415z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
