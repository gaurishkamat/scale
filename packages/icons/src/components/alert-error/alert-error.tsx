import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-alert-error',
})
export class AlertError {
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
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm-1 5.75h2v6.5h-2zm1 10.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                  fill-rule="evenodd"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zM12 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1-8v6.5h-2V7h2z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
