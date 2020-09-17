import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-draft-file',
})
export class ContentDraftFile {
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
                d="M22.5 3.5v17a3 3 0 01-3 3h-10A3 3 0 016.905 22H19.5a1.5 1.5 0 001.5-1.5V5h-2V3.5h3.5zm-5-3v17a3 3 0 01-3 3h-10a3 3 0 01-3-3V7h4A2.5 2.5 0 008 4.5v-4h9.5zM7 .5v4A1.5 1.5 0 015.5 6h-4L7 .5z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M22.5 3.5v17c0 1.655-1.345 3-3 3h-10A2.998 2.998 0 016.905 22H19.5c.825 0 1.5-.675 1.5-1.5V5h-2V3.5h3.5zm-5-3v17c0 1.655-1.345 3-3 3h-10c-1.655 0-3-1.345-3-3v-12l5-5h11zM16 2H7.5v3c0 .83-.67 1.5-1.5 1.5H3v11c0 .825.675 1.5 1.5 1.5h10c.825 0 1.5-.675 1.5-1.5V2z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}