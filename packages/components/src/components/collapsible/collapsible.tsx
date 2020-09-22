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
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Collapsible', styles) stylesheet: StyleSheet;

  @Prop() tag?: string = 'li';
  @Prop() label: string = 'label';
  @Prop() isExpanded?: boolean;

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

    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <div class={classes['collapsible__wrapper']}>
            <button
              class={classes['collapsible__button']}
              onClick={this.handleClick.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
              aria-expanded={this.expanded ? 'true' : 'false'}
            >
              {/* TODO use scale-icon */}
              <svg
                height="16"
                width="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m20.65 7.4c-.3-.3-.75-.3-1.05 0l-7.6 7.6-7.6-7.6c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05l8.65 8.65 8.65-8.65c.3-.25.3-.75 0-1.05z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
              <slot name="headline" />
            </button>
          </div>
          <div hidden={!this.expanded} class={classes['collapsible__content']}>
            <slot name="content" />
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes['collapsible'],
      this.expanded && classes['collapsible--expanded']
    );
  }
}
