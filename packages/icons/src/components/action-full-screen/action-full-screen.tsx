import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-full-screen',
})
export class ActionFullScreen {
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
                d="M9.5 12.735a1.25 1.25 0 011.765 1.765L7.5 18.29l2.43 2.45L1.5 22.5l1.76-8.45 2.45 2.45zM22.5 1.5l-1.76 8.45-2.45-2.45-3.785 3.77c-.49.487-1.28.487-1.77 0a1.26 1.26 0 010-1.77l3.785-3.79-2.45-2.45z"
                fill-rule="evenodd"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M10.22 12.72a.745.745 0 011.06 0 .745.745 0 010 1.06l-4.155 4.155L9.93 20.74 1.5 22.5l1.76-8.43 2.805 2.805zM22.5 1.5l-1.76 8.43-2.805-2.805-4.155 4.155a.754.754 0 01-.53.22.754.754 0 01-.53-.22.745.745 0 010-1.06l4.155-4.155L14.07 3.26z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
