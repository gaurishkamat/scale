import { Element, Component, h, Prop, Host, Listen } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
import { CssInJs } from '../../utils/css-in-js';
import { styles } from './accordion.styles';
import { Collapsible } from '../collapsible/collapsible';

@Component({
  tag: 'scale-accordion',
  shadow: false,
})
export class Accordion implements Base {
  @Element() el: HTMLElement;
  @Prop() styles?: StyleSheet;
  @CssInJs('Accordion', styles) stylesheet: StyleSheet;
  @Prop() headline?: string;

  @Prop() dependend: boolean = false;

  @Listen('toggler')
  collapsibleHandler(event: CustomEvent<Collapsible>) {
    if (this.dependend) {
      const current = event.target;
      const children = this.el.querySelectorAll('scale-collapsible');
      Array.from(children).forEach(child => {
        // tslint:disable-next-line: no-unused-expression
        child !== current && child.close();
      });
    }
  }

  @Listen('toggleHead')
  collapsibleKeyHandler(event: CustomEvent) {
    const current = event.target;
    const children = this.el.querySelectorAll('scale-collapsible');

    switch (event.detail.key) {
      case `ArrowDown`:
        Array.from(children).forEach((child, i) => {
          if (child === current) {
            i === children.length - 1
              ? children[0].setFocus()
              : children[i + 1].setFocus();
          }
        });
        break;

      case `ArrowUp`:
        event.preventDefault();
        Array.from(children).forEach((child, i) => {
          if (child === current) {
            i === 0
              ? children[children.length - 1].setFocus()
              : children[i - 1].setFocus();
          }
        });
        break;

      case `Home`:
        children[0].setFocus();
        break;

      case `End`:
        children[children.length - 1].setFocus();
        break;
    }
  }

  componentWillLoad() {}

  componentDidLoad() {}
  componentDidUnload() {}
  componentWillUpdate() {}
  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['accordion']);
  }

  render() {
    const { classes } = this.stylesheet;

    return (
      <Host>
        <div class={classes.accordionContainer}>
          {/* {this.headline ? (
            <scale-text tag="h3" variant="h3">
              {this.headline}
            </scale-text>
          ) : null} */}

          <div class="accordion-container">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
