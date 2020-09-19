import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-logout',
})
export class ActionLogout {
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
                  d="M13.25 2.75v7.5h-6a1.5 1.5 0 000 3h6v7.5h-7.5a3 3 0 01-3-3v-12a3 3 0 013-3zm3.25 4.58l6.75 4.42-6.75 4.42V12.5H7.25a.75.75 0 110-1.5h9.25z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M14 2v5h-1.5V3.5H5.75c-1.25 0-2.25 1-2.25 2.25v12C3.5 19 4.5 20 5.75 20h6.75v-3.5H14v5H5.75C3.7 21.5 2 19.8 2 17.75v-12C2 3.7 3.7 2 5.75 2H14zm2.5 5.35l6.75 4.4-6.75 4.4V12.5H7.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h9.25V7.35z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
