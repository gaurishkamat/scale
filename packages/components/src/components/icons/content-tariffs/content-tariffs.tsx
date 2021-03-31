import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-tariffs',
})
export class ContentTariffs {
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
                  d="M21.061 2.836l-8.62-1.274L2.346 11.657a2.988 2.988 0 000 4.232l5.643 5.662a2.993 2.993 0 004.256 0l10.075-10.11zm-6.343 10.52l-1.087-1.087a1.043 1.043 0 00-.078-1.43c-.46-.46-1.01-.49-1.734-.034l1.112 1.112-.764.764-1.2-1.2-.191.19-.196.202 1.2 1.2-.764.759-1.112-1.097c-.446.715-.422 1.263.039 1.724.38.4 1.006.436 1.43.083l1.087 1.087a2.586 2.586 0 01-3.497-.19c-1.023-1.024-1.033-2.386-.117-3.762l-.49-.466.764-.764.382.382.196-.2.191-.191-.377-.382.774-.75.49.465c1.38-.92 2.733-.92 3.766.113a2.581 2.581 0 01.176 3.473zm3.502-6.283a.98.98 0 11-1.36-1.411.98.98 0 011.36 1.41z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M12.45 1.55l8.75 1.3 1.3 8.75-10.3 10.3c-.6.6-1.4.9-2.15.9s-1.55-.3-2.15-.9l-5.75-5.75c-1.2-1.15-1.2-3.1 0-4.3l10.3-10.3zm.5 1.6L3.2 12.9c-.6.6-.6 1.6 0 2.2l5.75 5.75c.3.3.7.45 1.1.45s.8-.15 1.1-.45l9.8-9.7L19.9 4.2zm-2.2 6.75c1.4-.95 2.75-.95 3.8.15 1 .95 1.1 2.35.2 3.55l-1.1-1.1c.35-.55.3-1.05-.1-1.45-.45-.5-1-.5-1.75-.05l1.15 1.15-.8.8-1.2-1.2-.4.4 1.2 1.2-.8.8L9.8 13c-.45.7-.4 1.3.05 1.75.4.4.9.45 1.45.1l1.1 1.1c-1.2.85-2.6.75-3.55-.2-1-1.05-1.05-2.45-.1-3.85l-.5-.5.8-.8.4.4.4-.4-.4-.4.8-.8zm6.85-4.5c.3 0 .55.1.7.3.4.4.4 1.05 0 1.45-.2.2-.45.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1.05 0-1.45.2-.2.45-.3.7-.3z"
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
