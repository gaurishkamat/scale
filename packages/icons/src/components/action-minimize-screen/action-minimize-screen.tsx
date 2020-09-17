import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-minimize-screen',
})
export class ActionMinimizeScreen {
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
                d="M11.245 12.755l-1.76 8.43-2.45-2.45L2.88 22.89a1.252 1.252 0 11-1.77-1.77l4.155-4.155-2.45-2.465zM22.005.743c.332 0 .65.132.885.367a1.25 1.25 0 010 1.785L18.735 7.05l2.45 2.45-8.43 1.745 1.745-8.43 2.465 2.45L21.12 1.11a1.25 1.25 0 01.885-.367z"
                fill-rule="evenodd"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M11.245 12.755l-1.76 8.43L6.68 18.38l-4.155 4.155a.754.754 0 01-.53.22.754.754 0 01-.53-.22.745.745 0 010-1.06L5.62 17.32l-2.805-2.805zm10.23-11.29a.745.745 0 011.06 0 .745.745 0 010 1.06L18.38 6.68l2.805 2.805-8.43 1.76 1.76-8.43L17.32 5.62z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}