import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-menu',
})
export class ActionMenu {
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
                d="M14.335 16.055a1.25 1.25 0 010 2.5H4.75a1.25 1.25 0 110-2.5zM19.25 10.5a1.25 1.25 0 110 2.5H4.75a1.25 1.25 0 010-2.5zm0-5.5a1.25 1.25 0 110 2.5H4.75a1.25 1.25 0 110-2.5z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M14.75 16.5c.4 0 .75.35.75.75s-.35.75-.75.75H4.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm5-5.5c.4 0 .75.35.75.75s-.35.75-.75.75H4.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm0-5.5c.4 0 .75.35.75.75s-.35.75-.75.75H4.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
