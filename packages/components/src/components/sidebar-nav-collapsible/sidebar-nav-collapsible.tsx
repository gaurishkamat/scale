import { Component, h, Prop, State, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './sidebar-nav-collapsible.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-sidebar-nav-collapsible',
  shadow: true,
})
export class SidebarNavCollapsible implements Base {
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('SidebarNavCollapsible', styles) stylesheet: StyleSheet;

  /** The parent wrapper */
  @Prop() tag?: string = 'li';
  /** The text for the button */
  @Prop() label: string;
  /** Set this to `true` to expand */
  @Prop() isExpanded?: boolean;
  /** Label and icon get the active color */
  @Prop() isCurrent?: boolean = false;
  /** Bold label and icon */
  @Prop() bold: boolean = false;
  /** Used normally for third level items */
  @Prop() condensed: boolean = false;
  /** The width and height of the icon in pixels */
  @Prop() iconSize: number = 16;

  @State() expanded: boolean = false;

  componentWillLoad() {
    this.expanded = this.isExpanded;
  }
  componentWillUpdate() {}

  handleClick() {
    this.expanded = !this.expanded;
  }

  render() {
    const { classes } = this.stylesheet;
    const wrapperClassMap = classNames(
      classes['sidebar-nav-collapsible__wrapper'],
      this.condensed && classes['sidebar-nav-collapsible__wrapper--condensed']
    );
    const buttonClassMap = classNames(
      classes['sidebar-nav-collapsible__button'],
      this.bold && classes['sidebar-nav-collapsible__button--bold'],
      this.isCurrent && classes['sidebar-nav-collapsible__button--current']
    );
    const listClassMap = classNames(
      classes['sidebar-nav-collapsible__list'],
      this.condensed && classes['sidebar-nav-collapsible__list--condensed']
    );
    const Tag = this.tag;

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <Tag class={this.getCssClassMap()}>
          <div class={wrapperClassMap}>
            <button
              class={buttonClassMap}
              onClick={this.handleClick.bind(this)}
              aria-expanded={this.expanded ? 'true' : 'false'}
            >
              {this.label}
              <svg
                width={this.iconSize}
                height={this.iconSize}
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  stroke-width={this.bold ? 3 : 1.5}
                  d="M4 9l9 9.5L22 9"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul hidden={!this.expanded} class={listClassMap}>
            <slot />
          </ul>
        </Tag>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes['sidebar-nav-collapsible'],
      this.condensed && classes['sidebar-nav-collapsible--condensed']
    );
  }
}
