import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-changelog',
})
export class ActionChangelog {
  @Prop() size: number = 24;
  @Prop() color: string = 'currentColor';
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host style={{ display: 'inline-flex' }}>
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
                  d="M2 15.5l3.44 2.25L2 20v-4.5zm19.25 1a1.25 1.25 0 110 2.5h-13a1.25 1.25 0 110-2.5zM2 9.5l3.44 2.25L2 14V9.5zm19.25 1a1.25 1.25 0 110 2.5h-13a1.25 1.25 0 010-2.5zM2 3.5l3.44 2.25L2 8V3.5zm19.25 1a1.25 1.25 0 110 2.5h-13a1.25 1.25 0 110-2.5z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M2 15.5l3.45 2.25L2 20v-4.5zM21.25 17c.4 0 .75.35.75.75s-.35.75-.75.75H7.5V17zM2 9.5l3.45 2.25L2 14V9.5zM21.25 11c.4 0 .75.35.75.75s-.35.75-.75.75H7.5V11zM2 3.5l3.45 2.25L2 8V3.5zM21.25 5c.4 0 .75.35.75.75s-.35.75-.75.75H7.5V5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
