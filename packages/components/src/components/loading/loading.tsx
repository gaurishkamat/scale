import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'scale-loading',
  styleUrl: './loading.css',
  shadow: true,
})
export class Loading {
  render() {
    return <Host></Host>;
  }
}
