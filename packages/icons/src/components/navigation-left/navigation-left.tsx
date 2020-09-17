import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-left',
})
export class NavigationLeft {
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
                d="M16 20.75a1.26 1.26 0 01-.775-.25L4.5 12l10.725-8.5a1.265 1.265 0 111.55 2L8.5 12l8.275 6.5A1.25 1.25 0 0116 20.75z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M15.55 20.1L5.3 12l10.25-8.1c.35-.25.8-.2 1.05.1.25.35.2.8-.1 1.05L7.7 12l8.75 6.9c.35.25.4.75.1 1.05-.2.35-.7.4-1 .15z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}