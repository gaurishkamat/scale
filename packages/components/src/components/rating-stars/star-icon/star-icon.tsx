import { Component, Prop } from '@stencil/core';
import { logoFilled, logoBlank } from '../stars';

@Component({
  tag: 'star-icon',
  styleUrl: 'star-icon.css',
  /* shadow: true, */
})
export class SlIcon {
  @Prop({mutable: true, reflect: true }) colored: boolean;

  render() {
    return this.colored ? logoFilled() : logoBlank();
  }
}
