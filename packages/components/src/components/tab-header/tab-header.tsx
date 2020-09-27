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
  @Prop() selected?: boolean;
  @Prop() icon?: string;
  @Prop() iconSize?: number = 16;
  @Prop() iconOnly?: boolean;

  @Event({ eventName: 'tabclick' }) tabClick: EventEmitter;
  componentWillLoad() {}
  componentDidUnload() {}
  componentWillUpdate() {}

  handleClick() {
    this.tabClick.emit();
  }

  render() {
    const { classes } = this.stylesheet;
    const wrapperClassMap = classNames(
      classes['tab-wrapper'],
      this.selected && classes['tab-wrapper--selected']
    );
    const headerClassMap = classNames(
      classes['tab-header'],
      this.selected && classes['tab-header--selected']
    );
    const underlineClassMap = classNames(
      classes['tab-header__underline'],
      !this.selected && classes['tab-header__underline--transparent']
    );

    return (
      <Host
        class={wrapperClassMap}
        onclick={() => this.handleClick()}
        onKeyPress={event => {
          if (['Enter', 'Space'].includes(event.code)) {
            this.handleClick();
          }
        }}
        role="tab"
        tabindex="0"
      >
        <div
          class={headerClassMap}
          style={{ background: this.selected ? 'none' : '' }}
        >
          {this.icon ? (
            <scale-icon
              style={{ marginRight: this.iconOnly ? '' : '8px' }}
              path={this.icon}
              size={this.iconSize}
            />
          ) : null}
          {this.iconOnly ? null : <span>{this.label}</span>}
        </div>

        <div class={underlineClassMap}></div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['tab-header']);
  }
}
