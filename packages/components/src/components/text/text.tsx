import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';
import { getTheme } from '../../theme/theme';

const name = 'text';

const variantStyles = () => {
  const result = {};
  const themeVariants = getTheme().type_variants;

  Object.keys(themeVariants).forEach(key => {
    const variantName = key.replace('_', '-');
    result[`text--variant-${variantName}`] = themeVariants[key];
  });
  return result;
};

@Component({
  tag: 'scale-text',
  styleUrl: './text.css',
  shadow: true,
})
export class Text implements Base {
  variants: object = variantStyles();
  /** (optional) Text variant */
  @Prop() variant?: string = 'body';
  /** (optional) Text tag */
  @Prop() tag?: string = '';
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  componentWillUpdate() {}
  disconnectedCallback() {}
  componentWillRender() {}

  render() {
    const Tag = this.tag || 'p';

    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <Tag class={this.getCssClassMap()}>
          <slot />
        </Tag>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(name, this.variant && `${name}--variant-${this.variant}`);
  }
}
