import { Component, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'scale-loading',
  styleUrl: './loading.css',
  shadow: true,
})
export class Loading {
  @Prop() variant: 'white' | 'magenta' = 'magenta';
  @Prop() alignment: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() text: boolean = false;

  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <div class="spinner__container">
            <div
              class={`spinner__circle_background spinner__circle_background--variant-${this.variant}`}
            ></div>
            <div
              class={`spinner__circle spinner__circle--alignment-${this.alignment} spinner__circle--variant-${this.variant}`}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          {this.text ? (
            <div
              class={`spinner__text spinner__text--alignment-${this.alignment} spinner__text--variant-${this.variant} `}
            >
              Loading ...
            </div>
          ) : (
            false
          )}
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return (
      classNames(`spinner`),
      this.alignment && `spinner--alignment-${this.alignment}`
    );
  }
}
