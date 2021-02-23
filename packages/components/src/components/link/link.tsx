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
  /** (optional) Icon size */
  @Prop() iconSize?: number = 24;
  /** (optional) Icon only */
  @Prop() icon?: string;
  /** (optional) Icon title for accessibility */
  @Prop() iconAccessibilityTitle?: string;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <a
          class={this.getCssClassMap()}
          href={this.disabled ? 'javascript:void(0)' : this.href}
          {...(!this.disabled ? { target: this.target } : {})}
          aria-disabled={this.disabled}
        >
          <span class="link__wrapper">
            <slot />
            {this.icon && this.icon !== '' && (
              <scale-icon
                accessibilityTitle={this.iconAccessibilityTitle}
                path={this.icon}
                size={this.iconSize}
              />
            )}
          </span>
        </a>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'link',
      this.variant && `$link--variant-${this.variant}`,
      this.disabled && 'link--disabled',
      this.block && 'link--block'
    );
  }
}
