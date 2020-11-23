import { Component, h, State, Element, Prop, Host } from '@stencil/core';

import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './breadcrumb.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

/*
  @see https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html
*/

@Component({
  tag: 'scale-breadcrumb',
  shadow: true,
})
export class Breadcrumb implements Base {
  @Element() hostElement: HTMLElement;

  @Prop() separator?: string;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Breadcrumb', styles) stylesheet: StyleSheet;

  @State() linksArray = [];
  @State() separatorSlot: HTMLElement = null;

  componentWillLoad() {
    if (this.linksArray.length === 0) {
      this.setLinksArray();
    }
    this.separatorSlot = this.hostElement.querySelector('[slot="separator"]');
  }

  componentWillUpdate() {}
  componentDidUnload() {}

  setLinksArray() {
    this.linksArray = Array.from(this.hostElement.children).filter(
      element => element.slot === ''
    );
  }

  tmpDefaultIcon(size: number) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{ display: 'inline-flex' }}
      >
        <path
          d="M7.4 19.95c-.25-.35-.2-.8.1-1.05l8.8-6.9-8.75-6.9a.691.691 0 01-.1-1.05c.25-.3.75-.4 1.05-.1L18.7 12 8.45 20.1c-.3.25-.8.2-1.05-.15z"
          fill-rule="evenodd"
          fill="#6B6B6B"
        ></path>
      </svg>
    );
  }

  render() {
    const { classes } = this.stylesheet;
    const isLast = index => index === this.linksArray.length - 1;
    // Set aria-current="page" to the last item if it's a link
    const getCurrentAttr = index =>
      isLast(index) === true ? { 'aria-current': 'page' } : undefined;

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <nav aria-label="Breadcrumb" class={this.getCssClassMap()}>
          <ol>
            {this.linksArray.map((element, index) => {
              const separator =
                this.separatorSlot != null ? (
                  <span
                    class={classes.separator}
                    innerHTML={this.separatorSlot.innerHTML}
                  />
                ) : (
                  <span class={classes.separator}>
                    {this.separator || (
                      <scale-icon-navigation-right size={16} color="#6B6B6B" />
                    )}
                  </span>
                );
              return (
                <li>
                  {element.href ? (
                    <a
                      href={element.href}
                      class={classNames(
                        isLast(index) && classes.current,
                        classes.link
                      )}
                      {...getCurrentAttr(index)}
                    >
                      {element.textContent}
                    </a>
                  ) : (
                    <span
                      class={classNames(
                        isLast(index) && classes.current,
                        classes.item
                      )}
                    >
                      {element.textContent}
                    </span>
                  )}
                  {!isLast(index) ? separator : null}
                </li>
              );
            })}
          </ol>
        </nav>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes.breadcrumb);
  }
}
