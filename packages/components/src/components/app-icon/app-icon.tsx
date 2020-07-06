import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-icon',
  styleUrl: 'app-icon.css',
})
export class Icon {
  @Prop() name?: string;

  render() {
    return (
      <svg
        class={`icon icon-${this.name}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <use class={`icon-${this.name}`} xlinkHref={`#icon-${this.name}`} />
      </svg>
    );
  }
}
