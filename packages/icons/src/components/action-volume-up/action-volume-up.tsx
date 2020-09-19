import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-volume-up',
})
export class ActionVolumeUp {
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
                  d="M13 3.5v17h-2l-4.5-4H5a3 3 0 01-3-3v-3a3 3 0 013-3h1.5l4.5-4h2zm6 4.75a.75.75 0 01.75.75v2.25H22a.75.75 0 110 1.5h-2.25V15a.75.75 0 11-1.5 0v-2.25H16a.75.75 0 010-1.5h2.25V9a.75.75 0 01.75-.75z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M13 3.5v17h-2l-4.5-4H5c-1.655 0-3-1.345-3-3v-3c0-1.655 1.345-3 3-3h1.5l4.5-4h2zm-1.5 1.56L7.07 9H5c-.825 0-1.5.675-1.5 1.5v3c0 .825.675 1.5 1.5 1.5h2.07l4.43 3.94V5.06zM19 8.25c.415 0 .75.335.75.75v2.25H22a.749.749 0 110 1.5h-2.25V15a.749.749 0 11-1.5 0v-2.25H16a.749.749 0 110-1.5h2.25V9c0-.415.335-.75.75-.75z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
