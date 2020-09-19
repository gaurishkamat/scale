import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-transport',
})
export class ContentTransport {
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
                  d="M6.5 15.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm12.5 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM6.5 17a1 1 0 100 2 1 1 0 000-2zM19 17a1 1 0 100 2 1 1 0 000-2zM16.25 4.25V7.5h.25l.25-.25h5L23 11c.162.484.247.99.25 1.5v4.75h-.84a3.5 3.5 0 00-6.825 0h-5.67a3.5 3.5 0 00-6.83 0H3A2.245 2.245 0 01.75 15V4.25h15.5zM20.5 9H18v4h3.5v-.5a2.88 2.88 0 00-.145-.95L20.5 9z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M19 15.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5zm-12.5 0C7.9 15.5 9 16.6 9 18s-1.1 2.5-2.5 2.5S4 19.4 4 18s1.1-2.5 2.5-2.5zM19 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6.5 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm9.35-.5c-.2.45-.35.95-.35 1.5H10c0-.55-.1-1.05-.35-1.5zM17 3.5v3h4.75c.3 0 .6.2.7.5l1.25 3.75c.2.55.3 1.15.3 1.75V18h-1.5v-5.5c0-.4-.05-.85-.2-1.25L21.2 8H17v6c0 .4-.35.75-.75.75s-.75-.35-.75-.75V5h-14v10c0 .85.65 1.5 1.5 1.5h.35c-.2.45-.35.95-.35 1.5-1.65 0-3-1.35-3-3V3.5zM20.5 9l.85 2.55c.1.3.15.65.15.95v.5H18V9z"
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
