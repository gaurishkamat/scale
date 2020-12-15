import { Component, h, Prop, Host, Element, Watch } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './list.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

/**
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */
@Component({
  tag: 'scale-list',
  shadow: true,
})
export class List implements Base {
  isNested: boolean = false;

  @Element() el: HTMLElement;

  /** (optional) Make the list ordered (ol) */
  @Prop() ordered?: boolean = false;
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('List', styles) stylesheet: StyleSheet;

  @Watch('ordered')
  orderedChanged(newValue) {
    this.propagatePropsToChildren(newValue);
  }

  componentWillUpdate() {}
  componentDidUnload() {}

  componentDidLoad() {
    this.propagatePropsToChildren(this.ordered);
  }

  connectedCallback() {
    this.isNested = this.el.closest('scale-list-item') != null;

    if (this.isNested) {
      this.el.setAttribute('slot', 'nested');
    } else {
      this.el.removeAttribute('slot');
    }
  }

  propagatePropsToChildren(ordered: boolean) {
    const items = Array.from(this.el.children).filter(child =>
      child.matches('scale-list-item')
    );
    (items as HTMLScaleListItemElement[]).forEach((item, index) => {
      item.ordered = ordered;
      item.index = index + 1;
    });
  }

  render() {
    const Tag = this.ordered ? 'ol' : 'ul';

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
      classes.list,
      this.ordered && classes['list--type-ordered'],
      this.isNested && classes['list--nested']
    );
  }
}
