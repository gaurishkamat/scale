import { Element, Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tab-panel.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-tab-panel',
  shadow: false,
})
export class TabPanel implements Base {
  @Element() el: HTMLElement;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabPanel', styles) stylesheet: StyleSheet;

  @Prop() ariaLabel?: string;
  @Prop() identifier?: string;

  componentWillLoad() {}
  componentDidUnload() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['tab-panel']);
  }
}
