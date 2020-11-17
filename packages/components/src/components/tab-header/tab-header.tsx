import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tab-header.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

let i = 0;

@Component({
  tag: 'scale-tab-header',
  shadow: true,
})
export class TabHeader implements Base {
  generatedId: number = i++;

  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabHeader', styles) stylesheet: StyleSheet;

  @Prop() selected: boolean;

  componentDidUnload() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host
        id={`scale-tab-header-${this.generatedId}`}
        role="tab"
        aria-selected={String(this.selected)}
        tabindex={this.selected ? '0' : '-1'}
      >
        <style>{this.stylesheet.toString()}</style>
        <span class={this.getCssClassMap()}>
          <slot />
        </span>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes['tab-header'],
      this.selected && classes['tab-header--selected']
    );
  }
}
