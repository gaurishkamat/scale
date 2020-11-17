import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tab-panel.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

let i = 0;

@Component({
  tag: 'scale-tab-panel',
  shadow: true,
})
export class TabPanel implements Base {
  generatedId: number = i++;

  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabPanel', styles) stylesheet: StyleSheet;

  componentDidUnload() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host id={`scale-tab-panel-${this.generatedId}`} role="tabpanel">
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()}>
          <slot />
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['tab-panel']);
  }
}
