import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-content-history',
})
export class ContentHistory {
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
                d="M12 1.25a10.75 10.75 0 012.31 21.25 1.255 1.255 0 11-.52-2.455 8.24 8.24 0 10-7-1.675l1.315-2 2.68 6.13H4.11l1.305-2A10.75 10.75 0 0112 1.25zm0 4a.75.75 0 01.75.75v5.55l3.85 2.035A.75.75 0 0116.25 15a.785.785 0 01-.35-.085l-4.65-2.465V6a.75.75 0 01.75-.75z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M12 1.75c5.65 0 10.25 4.6 10.3 10.3 0 4.75-3.4 9-8.05 10h-.15c-.35 0-.65-.25-.75-.6-.1-.4.15-.8.55-.9 3.95-.85 6.85-4.45 6.85-8.55 0-4.8-3.95-8.75-8.75-8.75S3.25 7.2 3.25 12c0 2.65 1.25 5.15 3.25 6.8l1.55-2.4 2.7 6.1H4.1l1.6-2.45C3.25 18.15 1.75 15.2 1.75 12 1.75 6.35 6.35 1.75 12 1.75zm0 3.5c.4 0 .75.35.75.75v5.55l3.85 2.05c.35.2.5.65.3 1-.1.25-.4.4-.65.4-.1 0-.25-.05-.35-.1l-4.65-2.45V6c0-.4.35-.75.75-.75z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}