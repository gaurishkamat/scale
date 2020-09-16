import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-media-folder',
})
export class ContentMediaFolder {
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
                d="M7.5 2.5a3.755 3.755 0 012.74 1.18l.43.46c.216.228.516.358.83.36H23V19a3 3 0 01-3 3H4a3 3 0 01-3-3V2.5zm2 6.89v7.5l5.73-3.75z"
                fill-rule="evenodd"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M7.5 2.5a3.755 3.755 0 012.74 1.18l.43.46c.216.228.516.358.83.36H23V19a3 3 0 01-3 3H4a3 3 0 01-3-3V2.5zm2 6.89v7.5l5.73-3.75z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
