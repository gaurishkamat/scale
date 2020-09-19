import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-communication-email',
})
export class CommunicationEmail {
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
                  d="M23.5 6.665V17.5a3 3 0 01-3 3h-17a3 3 0 01-3-3V6.715l8.97 7.61a3.89 3.89 0 005.06 0zm0-3.165v1.19l-9.945 8.49a2.395 2.395 0 01-3.115 0L.5 4.745V3.5z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  d="M.5 3.5v14c0 1.65 1.35 3 3 3h17c1.65 0 3-1.35 3-3v-14zM22 5v.95l-8.45 7.25c-.9.75-2.2.75-3.1 0L2 5.95V5zm-1.5 14h-17c-.85 0-1.5-.65-1.5-1.5V7.95l7.45 6.4c.75.65 1.65.95 2.55.95s1.8-.3 2.55-.95L22 7.95v9.55c0 .85-.65 1.5-1.5 1.5z"
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
