import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-top-up',
})
export class NavigationTopUp {
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
                  d="M20.12 17.31c-.332.001-.65-.13-.885-.365L12 9.71l-7.235 7.235A1.25 1.25 0 113 15.175l9-9 9 9a1.26 1.26 0 010 1.77c-.233.234-.55.365-.88.365z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M20.65 15.55L12 6.9l-8.65 8.65c-.3.3-.3.75 0 1.05s.75.3 1.05 0L12 9l7.6 7.6c.3.3.75.3 1.05 0s.3-.8 0-1.05z"
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
