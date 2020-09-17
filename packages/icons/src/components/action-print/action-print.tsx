import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-print',
})
export class ActionPrint {
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
                d="M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5a3 3 0 01-3 3H20V12H4v6.5h-.5a3 3 0 01-3-3V6h5V2h13zm1 7a1 1 0 100 2 1 1 0 000-2zM17 3.5H7V6h10V3.5z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5c0 1.655-1.345 3-3 3H20V17h.5c.825 0 1.5-.675 1.5-1.5v-8H2v8c0 .825.675 1.5 1.5 1.5H4v1.5h-.5c-1.655 0-3-1.345-3-3V6h5V2h13zm1 7a1 1 0 110 2 1 1 0 010-2zM17 3.5H7V6h10V3.5z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}