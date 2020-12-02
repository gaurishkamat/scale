import { Component, Prop, h, Host, Element } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './button.styles';
import { CssInJs } from '../../utils/css-in-js';
import { hasShadowDom } from '../../utils/utils';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

/*
  TODO
  - [ ] update storybook (remove link disabled?)
*/

@Component({
  tag: 'scale-button',
  shadow: true,
})
export class Button implements Base {
  @Element() hostElement: HTMLElement;

  /** (optional) Custom class */
  @Prop() customClass?: string = '';
  /** (optional) The size of the button */
  @Prop() size?: 'small' | 'large' = 'large';
  /** (optional) Button variant */
  @Prop() variant?: string = 'primary';
  /** (optional) If `true`, the button is disabled */
  @Prop() disabled?: boolean = false;
  /** (optional) Button type */
  @Prop() type?: 'reset' | 'submit' | 'button';
  /** (optional) Set to `true` when the button contains only an icon */
  @Prop() iconOnly?: boolean = false;
  /** (optional) Icon position related to the label */
  @Prop({ reflect: true }) iconPosition: 'before' | 'after' = 'before';
  /** (optional) aria-label attribute needed for icon-only buttons */
  @Prop() ariaLabel: string;
  /** (optional) When present, an <a> tag will be used */
  @Prop() href?: string;
  /** (optional) The target attribute for the <a> tag */
  @Prop() target?: string = '_self';

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Button', styles) stylesheet: StyleSheet;

  /**
   * Hack to make the button behave has expected when inside forms.
   * @see https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/button/button.tsx#L155-L175
   */
  handleClick = (ev: Event) => {
    if (hasShadowDom(this.hostElement) && this.disabled === false) {
      const form = this.hostElement.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        if (this.type) {
          fakeButton.type = this.type;
        }
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  };

  componentWillUpdate() {}
  componentDidUnload() {}

  connectedCallback() {
    this.setIconPositionProp();
  }

  /**
   * Detect whether the last node is an element (not text).
   * If so, it's probably an icon, so we set `iconPosition` to `after`.
   */
  setIconPositionProp() {
    const nodes = Array.from(this.hostElement.childNodes);
    if (nodes.length < 2) {
      return;
    }
    const lastNode = nodes[nodes.length - 1];
    if (lastNode != null && lastNode.nodeType === 1) {
      this.iconPosition = 'after';
    }
  }

  render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        {this.href ? (
          <a
            class={this.getCssClassMap()}
            href={this.href}
            target={this.target}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
            aria-label={this.ariaLabel}
          >
            <slot />
          </a>
        ) : (
          <button
            class={this.getCssClassMap()}
            onClick={this.handleClick}
            disabled={this.disabled}
            type={this.type}
            aria-label={this.ariaLabel}
          >
            <slot />
          </button>
        )}
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.button,
      this.customClass && classes[this.customClass],
      this.size && classes[`button--size-${this.size}`],
      this.variant && classes[`button--variant-${this.variant}`],
      this.iconOnly && classes[`button--icon-only`],
      !this.iconOnly &&
        this.iconPosition &&
        classes[`button--icon-${this.iconPosition}`],
      this.disabled && !this.href && classes[`button--disabled`]
    );
  }
}
