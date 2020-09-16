import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-collapse-up',
})
export class NavigationCollapseUp {
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
                d="M20.12 17.31c-.332.001-.65-.13-.885-.365L12 9.71l-7.235 7.235A1.25 1.25 0 113 15.175l9-9 9 9a1.26 1.26 0 010 1.77c-.233.234-.55.365-.88.365z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M20.1 16.8c-.2 0-.4-.05-.55-.2L12 9l-7.6 7.6c-.3.3-.75.3-1.05 0s-.3-.75 0-1.05L12 6.9l8.65 8.65c.3.3.3.75 0 1.05-.15.15-.35.2-.55.2z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
