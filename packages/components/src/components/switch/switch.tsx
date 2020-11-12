import {
  Component,
  h,
  Prop,
  Host,
  Event,
  EventEmitter,
  Watch,
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

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i++;
    }
  }
  componentWillUpdate() {}
  componentDidUnload() {}

  @Watch('checked')
  checkedChanged() {
    this.scaleChange.emit({ value: this.checked });
  }

  handleChange = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  };

  render() {
    const { classes } = this.stylesheet;
    return (
      <Host>
        {/* This needs a proper "text" label, either with aria-label, arial-labeledby or some text, otherwise is weird */}
        <div class={this.getCssClassMap()}>
          <input
            type="checkbox"
            checked={this.checked}
            disabled={this.disabled}
            onChange={this.handleChange}
            aria-pressed={this.checked}
            aria-labelledby={`${this.inputId}-label`}
            id={this.inputId}
          />
          <div class={classes['switch__wrapper']}>
            <div class={classes['switch__container']}>
              <div class={classes['switch__toggle']} />
              <div class={classes['switch__text']} />
            </div>
            {!!this.label && (
              <label
                class={classes['switch__label']}
                id={`${this.inputId}-label`}
                htmlFor={this.inputId}
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
