import { Element, Component, h, Prop, Host, Listen } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
import { CssInJs } from '../../utils/css-in-js';
import { styles } from './accordion.styles';

@Component({
  tag: 'scale-accordion',
  shadow: true,
})
export class Accordion implements Base {
  @Element() el: HTMLElement;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Accordion', styles) stylesheet: StyleSheet;

  /** If `true`, only one scale-collapsible within the accordion can be open at a time */
  @Prop() dependent: boolean = false;

  /**
   * Handle `dependent`
   */
  @Listen('scaleExpand')
  collapsibleHandler(event: CustomEvent) {
    event.stopPropagation();
    const { expanded } = event.detail;
    if (!this.dependent || expanded === false) {
      return;
    }
    this.getCollapsibleChildren().forEach(child => {
      if (child !== event.target && child.hasAttribute('expanded')) {
        child.expanded = false;
      }
    });
  }

  getCollapsibleChildren(): HTMLScaleCollapsibleElement[] {
    return Array.from(this.el.querySelectorAll('scale-collapsible'));
  }

  disconnectedCallback() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <slot />
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['accordion']);
  }
}
