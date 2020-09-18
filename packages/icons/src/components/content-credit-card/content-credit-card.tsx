import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-credit-card',
})
export class ContentCreditCard {
  @Prop() size: number = 24;
  @Prop() color: string = 'currentColor';
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host style={{ display: 'inline-flex' }}>
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
                  d="M23.5 11v6.5a3 3 0 01-3 3h-17a3 3 0 01-3-3V11h23zm-3-7.5a3 3 0 013 3V8H.5V6.5a3 3 0 013-3z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M20.5 3.5h-17c-1.655 0-3 1.345-3 3v11c0 1.655 1.345 3 3 3h17c1.655 0 3-1.345 3-3v-11c0-1.655-1.345-3-3-3zm1.5 14c0 .825-.675 1.5-1.5 1.5h-17c-.825 0-1.5-.675-1.5-1.5V11h20zM22 8H2V6.5C2 5.675 2.675 5 3.5 5h17c.825 0 1.5.675 1.5 1.5z"
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
