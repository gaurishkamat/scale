import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-more',
})
export class ActionMore {
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
                d="M12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm7 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-14 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M12 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-14 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
