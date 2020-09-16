import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-tiles-add',
})
export class ActionTilesAdd {
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
                d="M10.5 13.5V22H4a2 2 0 01-2-2v-6.5h8.5zm7.25 0a.75.75 0 01.75.75V17h2.75a.75.75 0 010 1.5H18.5v2.75a.75.75 0 11-1.5 0V18.5h-2.75a.75.75 0 110-1.5H17v-2.75a.75.75 0 01.75-.75zM10.5 2v8.5H2V4a2 2 0 012-2h6.5zM20 2a2 2 0 012 2v6.5h-8.5V2z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M10.5 13.5V22H4c-1.1 0-2-.9-2-2v-6.5h8.5zm7.25 0c.4 0 .75.35.75.75V17h2.75c.4 0 .75.35.75.75s-.35.75-.75.75H18.5v2.75c0 .4-.35.75-.75.75s-.75-.35-.75-.75V18.5h-2.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75H17v-2.75c0-.4.35-.75.75-.75zM9 15H3.5v5c0 .3.2.5.5.5h5V15zm1.5-13v8.5H2V4c0-1.1.9-2 2-2h6.5zM20 2c1.1 0 2 .9 2 2v6.5h-8.5V2zM9 3.5H4c-.3 0-.5.2-.5.5v5H9V3.5zm11 0h-5V9h5.5V4c0-.3-.2-.5-.5-.5z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
