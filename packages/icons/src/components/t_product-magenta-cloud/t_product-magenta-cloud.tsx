import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-t_product-magenta-cloud',
})
export class TProductMagentaCloud {
  @Prop() size: number = 24;
  @Prop() color: string = 'currentColor';
  @Prop() selected: boolean = false;

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.size}
        height={this.size}
        viewBox="0 0 24 24"
      >
        <g fill={this.color}>
          {this.selected ? (
            <g>
              <path
                fill-rule="evenodd"
                d="M20.575 9.265A6.86 6.86 0 009.405 6.21 3.915 3.915 0 008.12 6a3.96 3.96 0 00-3.955 3.865 4.375 4.375 0 002.25 8.37 8.225 8.225 0 005.335 2V15.03H8.43l4.07-5 4.075 5H13.25v5.09a8.23 8.23 0 003.61-1.62 5 5 0 003.715-9.245v.01z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M20.7 8.75c-.45-1.3-1.25-2.4-2.25-3.25-1.35-1.15-3.05-1.8-4.95-1.8-1.75 0-3.45.6-4.8 1.7-.35-.1-.75-.15-1.1-.15-2.4 0-4.4 1.8-4.65 4.15-1.65.9-2.7 2.6-2.7 4.5 0 1.7.8 3.15 2.05 4.1 1 .75 2.2 1.1 3.35 1 1.6 1.3 3.6 2 5.65 2 1.9 0 3.65-.55 5.2-1.65.5.15 1 .2 1.5.2 3.15 0 5.75-2.6 5.75-5.75 0-2.1-1.2-4.1-3.05-5.05zm-2.7 9.3c-.9 0-1.55-.3-1.8-.4-.3.2-1.3 1.25-3.45 1.7V15h3.3L12 10l-4.05 5h3.3v4.5c-.85 0-1.65-.15-2.45-.45a7.49 7.49 0 01-2.65-1.65c-.6.05-1.95.3-3.25-.9-.7-.65-1.2-1.6-1.2-2.65 0-2.75 2.6-3.5 2.65-3.55.05-.2-.2-1.65 1.1-2.8C6.4 6.7 7.7 6.45 9 7c1.55-1.55 3.35-1.9 4.45-1.9 1.5 0 2.85.5 3.95 1.4 1.5 1.25 1.9 2.85 2 3.2 0 0 2.8 1 2.8 4 .05 2.45-1.85 4.35-4.2 4.35z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}