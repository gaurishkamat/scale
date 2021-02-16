import { Component, h, Prop, Host, Event, EventEmitter } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './switch.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

let i = 0;

@Component({
  tag: 'scale-switch',
  shadow: false,
})
export class Switch implements Base {
  /** (optional) Switch class */
  @Prop() customClass?: string = '';
  /** (optional) Active switch */
  @Prop({ reflect: true }) checked?: boolean = false;
  /** (optional) Disabled switch */
  @Prop() disabled?: boolean = false;
  /** (optional) Input id */
  @Prop() inputId?: string;
  /** (optional) switch label */
  @Prop() label?: string;
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Switch', styles) stylesheet: StyleSheet;

  /** Emitted when the switch was clicked */
  @Event() scaleChange!: EventEmitter;

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i++;
    }
  }
  componentWillUpdate() {}
  disconnectedCallback() {}

  render() {
    const { classes } = this.stylesheet;
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()}>
          <label>
            <input
              type="checkbox"
              checked={this.checked}
              disabled={this.disabled}
              aria-pressed={this.checked}
              aria-labelledby={`${this.inputId}-label`}
              id={this.inputId}
              onChange={(e: any) => {
                this.checked = e.target.checked;
                // bubble event through the shadow dom
                this.scaleChange.emit({ value: this.checked });
              }}
            />
            <div class={classes['switch__wrapper']}>
              <div class={classes['switch__container']}>
                <div class={classes['switch__toggle']} />
                <div class={classes['switch__text']} />
              </div>
              {!!this.label && (
                <span
                  class={classes['switch__label']}
                  id={`${this.inputId}-label`}
                >
                  {this.label}
                </span>
              )}
            </div>
          </label>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.switch,
      this.customClass && this.customClass,
      this.disabled && 'disabled'
    );
  }
}
