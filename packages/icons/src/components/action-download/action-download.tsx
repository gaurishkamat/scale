import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-download',
})
export class ActionDownload {
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
                d="M21.25 20.185a1.065 1.065 0 010 2.13H2.75a1.065 1.065 0 110-2.13zM12 1.5c.69 0 1.25.56 1.25 1.25V9.5h3.33l-4.58 7-4.58-7h3.33V2.75c0-.69.56-1.25 1.25-1.25z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M21.25 20.5c.4 0 .75.35.75.75s-.35.75-.75.75H2.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zM12 2c.4 0 .75.35.75.75V9.5h3.85l-4.6 7-4.6-7h3.85V2.75c0-.4.35-.75.75-.75z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
