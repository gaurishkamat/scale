import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'scale-divider',
  styleUrl: './divider.css',
  shadow: true,
})
export class Divider {
  /** (optional) Divider vertical */
  @Prop() vertical?: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div
          class={this.getCssClassMap()}
          aria-hidden
          part={classNames('base', this.vertical && 'vertical')}
        >
          {!this.vertical ? (
            <hr class="divider__horizontal" part="rule-horizontal" />
          ) : (
            <span class="divider__vertical" part="rule-vertical" />
          )}
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames('divider', this.vertical && `divider--vertical`);
  }
}
