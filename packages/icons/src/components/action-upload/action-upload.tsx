import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-upload',
})
export class ActionUpload {
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
                d="M21.25 20.185a1.065 1.065 0 010 2.13H2.75a1.065 1.065 0 110-2.13zM12 2l4.58 7h-3.33v6.75a1.25 1.25 0 11-2.5 0V9H7.42L12 2z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M21.25 20.5c.4 0 .75.35.75.75s-.35.75-.75.75H2.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zM12 2l4.6 7h-3.85v6.75c0 .4-.35.75-.75.75s-.75-.35-.75-.75V9H7.4L12 2z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
