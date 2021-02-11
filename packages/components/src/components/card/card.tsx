import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';

const name = 'card';
@Component({
  tag: 'scale-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card implements Base {
  /** (optional) Link card */
  @Prop() to?: string = '';
  /** (optional) Label of the card */
  @Prop() label?: string = '';
  /** (optional) Link card target */
  @Prop() target?: string = '_self';
  /** (optional) Link card rel */
  @Prop() rel?: string = '';
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  componentWillUpdate() {}
  disconnectedCallback() {}

  render() {
    const Tag = !!this.to ? 'a' : 'div';

    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <Tag
          class={this.getCssClassMap()}
          role="group"
          {...(!!this.to ? { tabindex: 0, href: this.to } : {})}
          {...(!!this.target ? { target: this.target } : {})}
          {...(!!this.rel ? { rel: this.rel } : {})}
          {...(!!this.label ? { ['aria-label']: this.label } : {})}
        >
          <div class={`${name}__body`}>
            <slot />
          </div>
        </Tag>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(name, !!this.to && `${name}--interactive`);
  }
}
