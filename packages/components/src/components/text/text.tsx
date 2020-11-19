import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './text.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
import { getTheme } from '../../theme/theme';

const variantStyles = () => {
  const result = {};
  const themeVariants = getTheme().type_variants;

  Object.keys(themeVariants).map(key => {
    const name = key.replace('_', '-');
    result[`text--variant-${name}`] = themeVariants[key];
  });
  return result;
};

@Component({
  tag: 'scale-text',
  shadow: true,
})
export class Text implements Base {
  /** (optional) Text class */
  @Prop() customClass?: string = '';
  /** (optional) Text variant */
  @Prop() variant?: string = 'body';
  /** (optional) Text tag */
  @Prop() tag?: string = '';

  /** (optional) Injected jss styles */
  @Prop() styles?: any = {};
  /** decorator Jss stylesheet */
  @CssInJs('Text', styles) stylesheet: StyleSheet;

  componentWillUpdate() {}
  componentDidUnload() {}

  componentWillRender() {
    this.styles = Object.assign(this.styles, variantStyles());
  }

  render() {
    const Tag = this.tag || 'p';

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <Tag class={this.getCssClassMap()}>
          <slot />
        </Tag>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.text,
      this.customClass && this.customClass,
      this.variant && classes[`text--variant-${this.variant}`]
    );
  }
}
