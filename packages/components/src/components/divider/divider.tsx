import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';

const name = 'divider';
@Component({
  tag: 'scale-divider',
  styleUrl: './divider.css',
  shadow: true,
})
export class Divider implements Base {
  /** (optional) Divider size */
  @Prop() size?: string = '';
  /** (optional) Divider vertical */
  @Prop() vertical?: boolean = false;

  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  componentWillUpdate() {}
  disconnectedCallback() {}

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()} aria-hidden>
          {!this.vertical ? <hr /> : <span class={`${name}__vertical`} />}
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      name,
      this.size && `${name}--size-${this.size}`,
      this.vertical && `${name}--vertical`
    );
  }
}
