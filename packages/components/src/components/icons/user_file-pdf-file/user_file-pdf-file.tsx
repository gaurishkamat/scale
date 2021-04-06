import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-pdf-file',
})
export class UserFilePdfFile {
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
                  d="M21 17.5L15.5 23v-4a1.5 1.5 0 011.5-1.5h4zM21 1v15.5h-4a2.5 2.5 0 00-2.5 2.5v4H6a3 3 0 01-3-3V1h18zM8.545 6.877L8.4 6.88H6.605v4.845h.975v-1.63h.82A1.5 1.5 0 0010 8.5a1.5 1.5 0 00-1.6-1.62zm3.83.003H10.69v4.845h1.685c1.26 0 2.05-.845 2.05-2.42s-.79-2.425-2.05-2.425zm5.625 0h-2.805v4.845h1V9.79h1.73v-.91h-1.73V7.79H18v-.91zm-5.7.91c.7 0 1.11.48 1.11 1.53s-.435 1.5-1.11 1.5h-.63V7.79zm-3.965 0A.635.635 0 019 8.5a.635.635 0 01-.665.685H7.58V7.79z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M21 1v17l-5 5H6c-1.655 0-3-1.345-3-3V1zm-1.5 1.5h-15V20c0 .825.675 1.5 1.5 1.5h9v-3c0-.83.67-1.5 1.5-1.5h3zM8.315 7.05c.94 0 1.6.58 1.6 1.61s-.66 1.6-1.6 1.6H7.5v1.63h-.98V7.05zm3.885 0c1.26 0 2.05.845 2.05 2.42 0 1.57-.79 2.42-2.05 2.42h-1.68V7.05zm5.59-.005v.91h-1.795v1.09h1.73v.91h-1.73v1.935h-.98V7.045zm-5.665.91h-.63v3.03h.63c.675 0 1.11-.45 1.11-1.515s-.435-1.515-1.11-1.515zm-3.875 0h-.755v1.4h.755c.365 0 .65-.245.65-.695 0-.46-.28-.705-.65-.705z"
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
