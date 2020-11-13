import {
  Component,
  h,
  Prop,
  Host,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';
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

  @Listen('click', { capture: true })
  handleClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i++;
    }
  }
  componentWillUpdate() {}
  componentDidUnload() {}

  render() {
    const { classes } = this.stylesheet;
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <input
            type="checkbox"
            checked={this.checked}
            disabled={this.disabled}
            aria-pressed={this.checked}
            aria-labelledby={`${this.inputId}-label`}
            id={this.inputId}
            onChange={() => {
              if (!this.disabled) {
                this.scaleChange.emit({ value: this.checked });
              }
            }}
          />
          <div
            class={classes['switch__wrapper']}
            onClick={() => {
              if (!this.disabled) {
                this.scaleChange.emit({ value: this.checked });
              }
            }}
          >
            <div class={classes['switch__container']}>
              <div class={classes['switch__toggle']} />
              <div class={classes['switch__text']} />
            </div>
            {!!this.label && (
              <label
                class={classes['switch__label']}
                id={`${this.inputId}-label`}
                htmlFor={this.inputId}
                onClick={event => {
                  event.preventDefault();
                }}
              >
                {this.label}
              </label>
            )}
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes.switch, this.customClass && this.customClass);
  }
}
