import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-alert-information',
})
export class AlertInformation {
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
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm1 16h-2v-6.5h2V17zm-1-8a1.25 1.25 0 110-2.5A1.25 1.25 0 0112 9z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fill-rule="evenodd"
                  d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm1 8V17h-2v-6.5h2zm-1-4A1.25 1.25 0 1112 9a1.25 1.25 0 010-2.5z"
                ></path>
              </g>
            )}
          </g>
        </svg>
      </Host>
    );
  }
}
