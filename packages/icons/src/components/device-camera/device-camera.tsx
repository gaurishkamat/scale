import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-device-camera',
})
export class DeviceCamera {
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
                  d="M21.78 7L20 8.785V5H2v1.5H.5v4H2V17a3 3 0 003 3h12a3 3 0 003-3v-1.785L21.78 17h1.72V7h-1.72zM9 15.775v-6.55l5 3.275-5 3.275z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M20 5v3.8L21.8 7h1.7v10h-1.7L20 15.2V17c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3v-6.5H.5v-4H2V5zm-1.5 1.5h-15V17c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5zM9 9.25l5 3.25-5 3.25zm13-.35l-2 2v2.2l2 2z"
                  fill-rule="evenodd"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
