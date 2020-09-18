import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-success',
})
export class ActionSuccess {
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
                  d="M9 20.215L1.695 12.91a1.25 1.25 0 011.765-1.77L9 16.68l12-12a1.25 1.25 0 011.765 1.765z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M22.4 5.05c-.3-.3-.75-.3-1.05 0L9 17.4l-5.9-5.9c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05L9 19.5 22.4 6.1c.3-.3.3-.75 0-1.05z"
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
