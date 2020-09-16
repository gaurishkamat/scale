import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-search',
})
export class ActionSearch {
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
                d="M10 4.125A5.88 5.88 0 0115.875 10a5.8 5.8 0 01-1.13 3.445l-.545.755-.755.545A5.8 5.8 0 0110 15.875a5.875 5.875 0 010-11.75M10 2a8 8 0 104.7 14.465l4.915 4.92c.49.487 1.28.487 1.77 0a1.26 1.26 0 000-1.77l-4.92-4.915A8 8 0 0010 2z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M21.4 19.6l-4.9-4.9a8.02 8.02 0 001.55-4.7c0-4.4-3.6-8-8-8S2 5.6 2 10s3.6 8 8 8c1.75 0 3.4-.55 4.7-1.55l4.9 4.9c.5.5 1.3.5 1.75 0 .5-.45.5-1.25.05-1.75zM3.5 10c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
