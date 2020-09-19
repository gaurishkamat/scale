import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-tv-and-mobile',
})
export class DeviceTvAndMobile {
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
                  d="M21.5 9.5a2 2 0 012 2v10a2 2 0 01-2 2H17a2 2 0 01-2-2v-10a2 2 0 012-2zM18.09 11H17a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-1.09v1.035h-2.32V11zm1.16 9a.75.75 0 110 1.5.75.75 0 010-1.5zM14 17v1.5H5V17h9zM22.5.5v8.22a3 3 0 00-1-.175H17a3 3 0 00-3 3V16H3.5a3 3 0 01-3-3V.5h22zM10 5.96v4.58l3.5-2.29L10 5.96z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M21.5 9.5c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H17c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2zM18 11h-1c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h4.5c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5h-1v1H18zm1.25 9a.75.75 0 110 1.5.75.75 0 010-1.5zM22.5.5v7.65c-.3-.1-.65-.15-1-.15H21V2H2v11c0 .85.65 1.5 1.5 1.5h10v4H5V17h2.498c.278-.003.884-.059 1.402-1H3.5c-1.65 0-3-1.35-3-3V.5zM9 4.65l5.5 3.6-5.5 3.6z"
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
