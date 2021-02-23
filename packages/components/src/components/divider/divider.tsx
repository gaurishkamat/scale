import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'scale-divider',
  styleUrl: './divider.css',
  shadow: true,
})
export class Divider {
  /** (optional) Divider size */
  @Prop() size?: string = '';
  /** (optional) Divider vertical */
  @Prop() vertical?: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()} aria-hidden>
          {!this.vertical ? <hr /> : <span class="divider__vertical" />}
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'divider',
      this.size && `divider--size-${this.size}`,
      this.vertical && `divider--vertical`
    );
  }
}
