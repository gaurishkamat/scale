import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-filter',
})
export class ActionFilter {
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
                d="M12.25 16.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM8.19 18a4.205 4.205 0 000 2.5H2V18zM22 18v2.5h-5.685a4.295 4.295 0 000-2.5H22zM4.75 9.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM22 11v2.5H8.815a4.295 4.295 0 000-2.5H22zm-7.25-8.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM10.69 4a4.135 4.135 0 00-.19 1.25c-.001.424.063.846.19 1.25H2V4zM22 4v2.5h-3.185a4.315 4.315 0 000-2.5H22z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                fill-rule="evenodd"
                d="M12.25 16.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm-4.18 2c-.045.245-.07.495-.07.75s.025.505.07.75H2v-1.5zm13.93 0V20h-5.57c.045-.245.07-.495.07-.75s-.025-.505-.07-.75H22zm-17.25-9a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm17.25 2V13H8.93c.045-.245.07-.495.07-.75s-.025-.505-.07-.75H22zm-7.25-9a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm-4.18 2c-.045.245-.07.495-.07.75s.025.505.07.75H2V4.5zM22 4.5V6h-3.07c.045-.245.07-.495.07-.75s-.025-.505-.07-.75H22z"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}
