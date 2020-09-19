import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-forward',
})
export class ActionForward {
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
                  d="M22.75 6.75L16 2.33V5.5h-1.84a8.67 8.67 0 00-8.66 8.66v4.09a1.25 1.25 0 102.5 0v-4.09A6.17 6.17 0 0114.16 8H16v3.17z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M20.75 7.75L14 3.33V7h-1.84C7.66 7 4 10.66 4 15.16v4.09a.749.749 0 101.5 0v-4.09a6.664 6.664 0 016.66-6.66H14v3.67z"
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
