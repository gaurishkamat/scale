import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'scale-link',
  styleUrl: './link.css',
  shadow: true,
})
export class Link {
  /** (optional) Link href */
  @Prop() href: string;
  /** (optional) Disabled link */
  @Prop() disabled?: boolean = false;
  /** (optional) Block link */
  @Prop() block?: boolean = false;
  /** (optional) Link underline */
  // @Prop() underline?: boolean = true;
  /** (optional) Link open a new tag */
  @Prop() target?: string = '_self';
  /** (optional) Link variant */
  @Prop() variant?: string = '';
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <a
          class={this.getCssClassMap()}
          part={classNames('base', this.disabled && 'disabled')}
          href={this.disabled ? 'javascript:void(0)' : this.href}
          {...(!this.disabled ? { target: this.target } : {})}
          aria-disabled={this.disabled}
        >
          <span class="link__wrapper" part="wrapper">
            <slot />
            <slot name="icon" />
          </span>
        </a>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'link',
      this.disabled && 'link--disabled',
      this.block && 'link--block'
    );
  }
}
