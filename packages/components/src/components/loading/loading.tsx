import { Component, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'scale-loading',
  styleUrl: './loading.css',
  shadow: true,
})
export class Loading {
  @Prop() loadingAmount: number = 90;
  @Prop() variant: string = '#e20074';
  @Prop() alignment: 'horizontal' | 'vertical' | '' = '';

  getLoadingText() {
    return this.alignment === 'horizontal' ? (
      <div class="loading-text-horizontal">Loading...</div>
    ) : (
      <div class="loading-text-vertical">Loading ...</div>
    );
  }

  styles() {
    return `:host {
        --loading-color: ${this.variant};
        --loading-amount-percentage: ${this.loadingAmount}%
      }`;
  }

  render() {
    return (
      <Host>
        <style>{this.styles()}</style>
        <div class={this.getCssClassMap()}>
          <div class="loading-spinner">
            <div class="loading-spinner-container"></div>
          </div>
          {this.alignment === '' ? '' : this.getLoadingText()}
        </div>
      </Host>
    );
  }
  getCssClassMap() {
    return (
      classNames(`loading`),
      this.alignment && `loading--alignment-${this.alignment}`
    );
  }
}
