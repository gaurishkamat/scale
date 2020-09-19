import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-bookmark',
})
export class ContentBookmark {
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
                  d="M19.5 3.5v20L12 18.24 4.5 23.5v-20a3 3 0 013-3h9a3 3 0 013 3z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M16.5.5h-9c-1.655 0-3 1.345-3 3v20l7.5-5.26 7.5 5.26v-20c0-1.655-1.345-3-3-3zM18 20.615l-6-4.21-6 4.21V3.5C6 2.675 6.675 2 7.5 2h9c.825 0 1.5.675 1.5 1.5z"
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
