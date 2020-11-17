import { Component, h, Prop, Host, Watch } from '@stencil/core';
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
  container: HTMLElement;

  /** True for smaller height and font size */
  @Prop() small: boolean = false;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabHeader', styles) stylesheet: StyleSheet;

  @Prop() selected: boolean;

  @Watch('selected')
  selectedChanged(newValue: boolean) {
    if (newValue === true) {
      this.container.focus();
    }
  }

  componentDidUnload() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host
        id={`scale-tab-header-${this.generatedId}`}
        role="tab"
        aria-selected={String(this.selected)}
      >
        <style>{this.stylesheet.toString()}</style>
        <span
          ref={el => (this.container = el)}
          class={this.getCssClassMap()}
          tabindex={this.selected ? '0' : '-1'}
        >
          <slot />
        </span>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes['tab-header'],
      this.selected && classes['tab-header--selected'],
      this.small && classes['tab-header--small']
    );
  }
}
