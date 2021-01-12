import { Component, h, Prop, Host, Watch, State, Element } from '@stencil/core';
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

  @Element() el: HTMLElement;

  /** True for smaller height and font size */
  @Prop() small: boolean = false;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabHeader', styles) stylesheet: StyleSheet;

  @Prop() selected: boolean;

  @State() hasFocus: boolean = false;

  @Watch('selected')
  selectedChanged(newValue: boolean) {
    if (newValue === true) {
      // Having focus on the host element, and not on inner elements,
      // is required because screen readers.
      this.el.focus();
    }
    this.updateSlottedIcon();
  }

  /**
   * Find slotted icons, and if any, add the `selected` attribute accordingly.
   */
  updateSlottedIcon() {
    const slot = this.container.querySelector('slot') as HTMLSlotElement;
    if (slot === null) {
      return;
    }
    const children = Array.from(slot.assignedNodes())
      .filter(node => node.nodeType === 1)
      .filter(node => node.nodeName.toUpperCase().indexOf('ICON') > -1);
    if (children.length === 0) {
      return;
    }
    const action = this.selected ? 'setAttribute' : 'removeAttribute';
    children.forEach(child => child[action]('selected', ''));
  }

  componentDidUnload() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host
        id={`scale-tab-header-${this.generatedId}`}
        role="tab"
        aria-selected={String(this.selected)}
        tabindex={this.selected ? '0' : '-1'}
        onFocus={() => this.hasFocus = true}
        onBlur={() => this.hasFocus = false}
      >
        <style>{this.stylesheet.toString()}</style>
        <span
          ref={el => (this.container = el)}
          class={this.getCssClassMap()}
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
      this.small && classes['tab-header--small'],
      this.hasFocus && classes['tab-header--has-focus']
    );
  }
}
