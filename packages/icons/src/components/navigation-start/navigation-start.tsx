import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-navigation-start',
})
export class NavigationStart {
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
                  d="M12.19 22.87l-2.56-8.5-8.5-2.56a.05.05 0 010-.09l20.13-9.045a.05.05 0 01.065.065L12.28 22.88a.05.05 0 01-.09-.01z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M21.85 2.15c-.25-.25-.6-.3-.9-.15L.8 11.05c-.3.15-.5.45-.5.8s.25.6.55.7L8.95 15l2.45 8.1c.1.3.4.55.7.55h.05c.3 0 .6-.2.75-.45L22 3.05c.15-.3.1-.65-.15-.9zm-9.5 18.7l-2.15-7.1-7.05-2.1 16.75-7.5z"
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
