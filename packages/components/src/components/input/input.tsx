import {
  Component,
  Prop,
  Event,
  h,
  EventEmitter,
  Host,
  State,
  Watch,
} from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './input.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

export interface InputChangeEventDetail {
  value: string | number | boolean | undefined | null;
}

@Component({
  tag: 'scale-input',
  shadow: false,
})
export class Input implements Base {
  /** (optional) Input text class */
  @Prop() customClass?: string = '';
  /** (optional) Input type */
  @Prop() type?:
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'textarea'
    | 'url' = 'text';
  /** (optional) Input name */
  @Prop() name?: string = '';
  /** (optional) Input label variant */
  @Prop() variant?: 'animated' | 'static' = 'static';
  /** (optional) Input label */
  @Prop() label: string = '';
  /** (optional) Input size */
  @Prop() size?: string = '';
  /** (optional) textarea row */
  @Prop() rows?: number;
  /** (optional) textarea column */
  @Prop() cols?: number;
  /** (optional) Input helper text */
  @Prop() helperText?: string = '';
  /** (optional) Input status */
  @Prop() status?: string = '';
  /** (optional) Input max length */
  @Prop() maxLength?: number;
  /** (optional) Input min length */
  @Prop() minLength?: number;
  /** (optional) Input placeHolder */
  @Prop() placeholder?: string = '';
  /** (optional) Input disabled */
  @Prop() disabled?: boolean;
  /** (optional) Input required */
  @Prop() required?: boolean;
  /** (optional) Input counter */
  @Prop() counter?: boolean;
  /** (optional) radio checked value */
  @Prop() preChecked?: boolean;
  /** (optional) textarea resize */
  @Prop() resize?: 'unset' | 'none' | 'vertical' | 'horizontal';
  /** (optional) Input value */
  @Prop({ mutable: true }) value?: string | number | null = '';
  /** (optional) Input checkbox id */
  @Prop() inputId?: string;
  /** (optional) Input checkbox checked icon */
  @Prop() icon?: string;
  /** (optional) select multiple options */
  @Prop() multiple?: boolean;
  /** (optional) the number of visible options in a select drop-down list */
  @Prop() visibleSize?: number;
  /** (optional) input background transparent */
  @Prop() transparent?: boolean;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Input', styles) stylesheet: StyleSheet;

  /** Emitted when a keyboard input occurred. */
  @Event() scaleInput!: EventEmitter<KeyboardEvent>;
  /** Emitted when the value has changed. */
  @Event() scaleChange!: EventEmitter<InputChangeEventDetail>;
  /** Emitted when the input has focus. */
  @Event() scaleFocus!: EventEmitter<void>;
  /** Emitted when the input loses focus. */
  @Event() scaleBlur!: EventEmitter<void>;
  /** Emitted on keydown. */
  @Event() scaleKeyDown!: EventEmitter<KeyboardEvent>;

  /** (optional) Input checkbox checked */
  @State() checked?: boolean = this.preChecked;
  @State() customResize?: any;

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidLoad() {}
  componentDidUnload() {}

  @Watch('value')
  valueChanged() {
    this.scaleChange.emit({
      value: this.value == null ? this.value : this.value.toString(),
    });
  }

  @Watch('checked')
  checkedChanged() {
    this.scaleChange.emit({ value: this.checked });
  }

  handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.value || '';
    }
    this.scaleInput.emit(event as KeyboardEvent);
  };

  handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.value || '';
    }
    if (this.type === 'radio' || this.type === 'checkbox') {
      this.checked = target.checked;
    }
  };

  handleFocus = () => {
    this.scaleFocus.emit();
  };

  handleBlur = () => {
    this.scaleBlur.emit();
  };

  handleKeyDown(event: KeyboardEvent) {
    this.scaleKeyDown.emit(event);
  }

  render() {
    if (this.type === 'checkbox') {
      return (
        <Host>
          <div class={this.getCssClassMap()}>
            <div class={classNames('input__checkbox-container')}>
              <input
                type="checkbox"
                name={this.name}
                class={classNames('input__checkbox')}
                id={this.inputId}
                onChange={this.handleChange}
                value={this.value}
                checked={this.checked}
                disabled={this.disabled}
              />
              <span
                class={classNames('input__checkbox-placeholder')}
                tabIndex={1}
              ></span>
              {!!this.checked && !!this.icon && (
                <scale-icon path={this.icon} size={12}></scale-icon>
              )}
            </div>
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          </div>
        </Host>
      );
    }

    if (this.type === 'radio') {
      return (
        <Host>
          <div class={this.getCssClassMap()}>
            <input
              type="radio"
              name={this.name}
              class={classNames('input__radio')}
              id={this.inputId}
              onChange={this.handleChange}
              value={this.value}
              checked={this.preChecked}
              disabled={this.disabled}
            />
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          </div>
        </Host>
      );
    }
    const Element = this.type === 'textarea' ? 'textarea' : 'input';

    return (
      <Host>
        <div class={this.getCssClassMap()}>
          {this.variant === 'static' && (
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          )}
          {this.type === 'select' ? (
            <div class="input__select-wrapper">
              <select
                class={classNames('input__select')}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                disabled={this.disabled}
                required={this.required}
                multiple={this.multiple}
                id={this.inputId}
                size={this.visibleSize}
              >
                <slot />
              </select>
              {!!this.icon && <scale-icon path={this.icon}></scale-icon>}
            </div>
          ) : (
            <Element
              type={this.type}
              class={classNames(
                `input__${this.type === 'textarea' ? 'textarea' : 'input'}`,
                this.customResize && this.customResize.id
              )}
              style={!!this.resize && { resize: this.resize }}
              value={this.value}
              {...(!!this.name ? { name: this.name } : {})}
              required={this.required}
              minLength={this.minLength}
              maxLength={this.maxLength}
              id={this.inputId}
              onInput={this.handleInput}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              {...(!!this.placeholder ? { placeholder: this.placeholder } : {})}
              disabled={this.disabled}
              {...(!!this.rows ? { rows: this.rows } : {})}
              {...(!!this.cols ? { cols: this.cols } : {})}
            />
          )}

          {this.variant === 'animated' && (
            <label class="input__label" htmlFor={this.inputId}>
              {this.label}
            </label>
          )}
          {(!!this.helperText || !!this.counter) && (
            <div class="input__meta">
              {!!this.helperText && (
                <div class="input__helper-text">{this.helperText}</div>
              )}
              {this.counter && (
                <div class="input__counter">
                  {!!this.value ? String(this.value).length : 0} /{' '}
                  {this.maxLength}
                </div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    const isAnimated =
      (!!this.placeholder || !!this.value) && this.variant === 'animated';
    return classNames(
      classes.input,
      this.customClass && this.customClass,
      this.type && classes[`input--type-${this.type}`],
      this.checked && classes[`input--checked`],
      this.resize && classes[`input--resize-${this.resize}`],
      this.variant && classes[`input--variant-${this.variant}`],
      this.disabled && classes[`input--disabled`],
      this.transparent && classes['input--transparent'],
      this.status && classes[`input--status-${this.status}`],
      this.size && classes[`input--size-${this.size}`],
      isAnimated && 'animated'
    );
  }
}
