import {
  Element,
  Component,
  h,
  Prop,
  State,
  Host,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './collapsible.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-collapsible',
  shadow: false,
})
export class Collapsible implements Base {
  @Element() el: HTMLElement;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('Collapsible', styles) stylesheet: StyleSheet;

  @Prop() tag?: string = 'li';
  @Prop() label: string = 'label';
  @Prop() isExpanded?: boolean;
  @Prop() iconSize: number = 16;

  @State() expanded: boolean = false;

  @Event({ eventName: 'toggler' }) onToggle: EventEmitter;
  @Event({ eventName: 'toggleHead' }) onPress: EventEmitter;

  @Method()
  async close() {
    this.expanded = false;
  }

  @Method()
  async setFocus() {
    this.el.querySelector('button').focus();
  }

  componentWillLoad() {
    this.expanded = this.isExpanded;
  }
  componentWillUpdate() {}

  componentDidUnload() {}

  handleClick() {
    this.expanded = !this.expanded;
    this.onToggle.emit({ expanded: this.expanded });
  }

  handleKeyDown(event: KeyboardEvent) {
    // tslint:disable-next-line: no-unused-expression
    event.key === `ArrowDown` && event.preventDefault();
    // tslint:disable-next-line: no-unused-expression
    event.key === `ArrowUp` && event.preventDefault();
    // tslint:disable-next-line: no-unused-expression
    event.key === `Home` && event.preventDefault();
    // tslint:disable-next-line: no-unused-expression
    event.key === `End` && event.preventDefault();

    this.onPress.emit({ key: event.key });
  }

  render() {
    const { classes } = this.stylesheet;
    const wrapperClassMap = classNames(classes['collapsible__wrapper']);
    const buttonClassMap = classNames(classes['collapsible__button']);
    const contentClassMap = classNames(classes['collapsible__content']);

    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <div class={wrapperClassMap}>
            <button
              id="button"
              class={buttonClassMap}
              onClick={this.handleClick.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
              aria-expanded={this.expanded ? 'true' : 'false'}
            >
              <svg
                width={this.iconSize}
                height={this.iconSize}
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  d="M4 9l9 9.5L22 9Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <slot name="headline" />
            </button>
          </div>
          <div hidden={!this.expanded} class={contentClassMap}>
            <slot name="content" />
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['collapsible']);
  }
}
