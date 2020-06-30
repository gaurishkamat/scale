import {
  Element,
  Component,
  h,
  Prop,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tab-header.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-tab-header',
  shadow: false,
})
export class TabHeader implements Base {
  @Element() el: HTMLElement;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabHeader', styles) stylesheet: StyleSheet;
  @Prop() label: string = 'Label';
  @Prop() ariaLabel?: string;
  @Prop() identifier?: string;
  @Prop() selected?: boolean;
  @Event({ eventName: 'tabclick' }) tabClick: EventEmitter;
  componentWillLoad() {}
  componentDidUnload() {}
  componentWillUpdate() {}

  handleClick() {
    this.tabClick.emit();
  }

  render() {
    return (
      <Host onclick={this.handleClick.bind(this)} role="tab">
        {this.label}
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['tab-header']);
  }
}
