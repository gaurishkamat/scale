import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-user_file-videos',
})
export class UserFileVideos {
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
                d="M21 17.5L15.5 23v-4a1.5 1.5 0 011.5-1.5zM21 1v15.5h-4a2.5 2.5 0 00-2.5 2.5v4H6a3 3 0 01-3-3V1zM9.5 8.25v7.5L15.24 12z"
                fill-rule="evenodd"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M21 1v17l-5 5H6c-1.65 0-3-1.35-3-3V1zm-1.5 1.5h-15V20c0 .85.65 1.5 1.5 1.5h9v-3c0-.85.65-1.5 1.5-1.5h3zm-10 5.75L15.25 12 9.5 15.75z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
