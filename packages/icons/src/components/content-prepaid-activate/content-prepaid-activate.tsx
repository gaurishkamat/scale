import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-prepaid-activate',
})
export class ContentPrepaidActivate {
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
                d="M17.5 11a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zM19 0v9.645a8.205 8.205 0 00-1.5-.145 7.94 7.94 0 00-2.57.43A2.5 2.5 0 0012.5 8h-5A2.5 2.5 0 005 10.5v5A2.5 2.5 0 007.5 18h2.025a7.96 7.96 0 001.36 4H4a3 3 0 01-3-3V6.5L7.5 0H19zm.655 15.215a.751.751 0 011.065 1.06l-4 4-2.55-2.545a.751.751 0 011.065-1.06l1.5 1.5 2.95-2.95zM12.5 9.5a1 1 0 011 1v.08a8 8 0 00-3.93 5.92H7.5a1 1 0 01-1-1v-5a1 1 0 011-1z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M17.75 11.5c3.45 0 6.25 2.8 6.25 6.25S21.2 24 17.75 24s-6.25-2.8-6.25-6.25 2.8-6.25 6.25-6.25zM19 0v10.1c-.4-.05-.8-.1-1.25-.1h-.25V1.5H8.1L2.5 7.1V19c0 .85.65 1.5 1.5 1.5h6.5c.2.55.45 1.05.75 1.5H4c-1.65 0-3-1.35-3-3V6.5L7.5 0H19zm1.85 15.55c-.3-.3-.75-.3-1.05 0l-2.8 2.8-1.4-1.4c-.3-.3-.75-.3-1.05 0-.3.3-.3.75 0 1.05L17 20.5l3.9-3.9c.3-.3.25-.75-.05-1.05zM12.5 8c1.4 0 2.5 1.1 2.5 2.5l-.324.126a6.842 6.842 0 00-1.176.624v-.75c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2.6c-.05.4-.1.8-.1 1.25V18H7.5C6.1 18 5 16.9 5 15.5v-5C5 9.1 6.1 8 7.5 8z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}