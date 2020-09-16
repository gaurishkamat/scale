import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-copy-paste',
})
export class ActionCopyPaste {
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
                d="M17 7v12.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V7H17zm5.5-5.5V14a3 3 0 01-3 3h-1v-1.5h1A1.5 1.5 0 0021 14V3H8.5v2.5H7v-4h15.5z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M17 7v12.5c0 1.655-1.345 3-3 3H4.5c-1.655 0-3-1.345-3-3V7H17zm-1.5 1.5H3v11c0 .825.675 1.5 1.5 1.5H14c.825 0 1.5-.675 1.5-1.5v-11zm7-7V14c0 1.655-1.345 3-3 3h-1v-1.5h1c.825 0 1.5-.675 1.5-1.5V3H8.5v2.5H7v-4h15.5z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
