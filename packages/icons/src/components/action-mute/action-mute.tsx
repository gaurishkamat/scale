import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-mute',
})
export class ActionMute {
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
                d="M4.76 3.349c.2 0 .39.08.53.221l15.74 15.74a.745.745 0 010 1.06.75.75 0 01-1.06 0L4.23 4.63a.755.755 0 010-1.06.745.745 0 01.53-.221zM5.87 8.39L16 18.5v2h-2l-4.5-4H8a3 3 0 01-3-3v-3a2.97 2.97 0 01.87-2.11zM16 3.5v8.655l-5.525-5.52L14 3.5h2z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M4.23 3.57a.745.745 0 011.06 0l15.74 15.74a.745.745 0 010 1.06.754.754 0 01-.53.22.754.754 0 01-.53-.22L4.23 4.63a.75.75 0 010-1.06zm1.64 4.82l1.06 1.06c-.265.27-.43.64-.43 1.05v3c0 .825.675 1.5 1.5 1.5h2.07l4.43 3.94v-1.92l1.5 1.5v1.98h-2l-4.5-4H8c-1.655 0-3-1.345-3-3v-3c0-.825.33-1.57.87-2.11zM16 3.5v8.655l-1.5-1.5V5.06l-2.96 2.635-1.065-1.06L14 3.5h2z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
