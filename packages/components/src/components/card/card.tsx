import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'scale-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {
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

  @Prop() clickCard?: any;

  render() {
    const Tag = !!this.to ? 'a' : 'div';

    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <div class="card-border">
          <Tag
            class={this.getCssClassMap()}
            onClick={this.clickCard}
            {...(!this.to ? { role: 'group' } : {})}
            {...(!!this.to ? { href: this.to } : {})}
            {...(!!this.target ? { target: this.target } : {})}
            {...(!!this.rel ? { rel: this.rel } : {})}
            {...(!!this.label ? { ['aria-label']: this.label } : {})}
          >
            <div class="card__body">
              <slot />
            </div>
          </Tag>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames('card', !!this.to && 'card--interactive');
  }
}
