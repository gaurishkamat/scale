import { Component, h, Prop, Host, Element, State } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './list-item.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

/**
 * @todo styles for custom icon (no-marker prop?)
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */
@Component({
  tag: 'scale-list-item',
  shadow: true,
})
export class ListItem implements Base {
  @Element() el: HTMLElement;

  /** Whether this is a child of an ordered scale-list, gets set automatically by its parent */
  @Prop() ordered?: boolean = false;
  /** Index number, useful only for `ordered` type */
  @Prop({ mutable: true }) index?: number;
  /** If `false`, no marker or left padding will be visible */
  @Prop() marker: boolean = true;
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('ListItem', styles) stylesheet: StyleSheet;

  @State() hasNestedChild: boolean = false;
  @State() isNested: boolean = false;

  componentWillUpdate() {}
  componentDidUnload() {}

  componentWillLoad() {
    this.isNested = this.isNestedCheck();
  }

  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'listitem');
    }
  }

  handleSlotChange = ({ target }: Event) => {
    this.hasNestedChild =
      (target as HTMLSlotElement).assignedNodes().length > 0;
    this.isNested = this.isNestedCheck();
  };

  isNestedCheck = (): boolean => {
    return this.el.closest('scale-list[slot="nested"]') != null;
  };

  render() {
    const { classes } = this.stylesheet;

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()} data-index={this.index}>
          <slot />
          <div
            class={classes['list-item__nested-list']}
            hidden={!this.hasNestedChild}
          >
            <slot name="nested" onSlotchange={this.handleSlotChange}></slot>
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes['list-item'],
      this.isNested && classes['list-item--nested'],
      classes[`list-item--${!this.ordered ? 'un' : ''}ordered`],
      this.marker === false && classes['list-item--no-marker']
    );
  }
}
