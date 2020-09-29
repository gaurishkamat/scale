import {
  Component,
  Prop,
  Event,
  h,
  EventEmitter,
  Host,
  State,
  Watch,
  Element,
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

let i = 0;

@Component({
  tag: 'scale-input',
  shadow: false,
})
export class Input implements Base {
  @Element() el: HTMLElement;
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
  /** (optional) Active switch */
  @Prop({ reflect: true }) checked?: boolean = false;
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
  @State() customResize?: any;

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + i++;
    }
  }

  componentWillUpdate() {}
  componentDidLoad() {
    if (this.type === 'select') {
      const select = this.el.querySelector('select');
      const selectedValue = select.options[select.selectedIndex].value;
      this.value = selectedValue;
    }
  }
  componentDidUnload() {}

  @Watch('value')
  valueChanged() {
    this.scaleChange.emit({
      value: this.value == null ? this.value : this.value.toString(),
    });
  }

  checkedChanged = event => {
    if (!this.disabled) {
      this.scaleChange.emit(event);
    }
  };

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
  };

  handleFocus = () => {
    this.scaleFocus.emit();
  };

  handleBlur = () => {
    this.scaleBlur.emit();
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.scaleKeyDown.emit(event);
  };

  render() {
    if (this.type === 'checkbox') {
      return (
        <Host checked={this.checked}>
          <div class={this.getCssClassMap()}>
            <input
              type="checkbox"
              name={this.name}
              id={this.inputId}
              checked={this.checked}
              disabled={this.disabled}
              onClick={this.checkedChanged}
            />
            <div
              class={classNames('input__checkbox-container')}
              onClick={this.checkedChanged}
            >
              <span class={classNames('input__checkbox-placeholder')}></span>
              {!!this.icon && (
                <scale-icon path={this.icon} size={12}></scale-icon>
              )}
            </div>
            <label htmlFor={this.inputId}>{this.label}</label>
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
              id={this.inputId}
              onChange={this.checkedChanged}
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
            />
            <label htmlFor={this.inputId}>{this.label}</label>
          </div>
        </Host>
      );
    }
    const Tag = this.type === 'textarea' ? 'textarea' : 'input';

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
                onKeyDown={this.handleKeyDown}
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
            <Tag
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
              onKeyDown={this.handleKeyDown}
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
      this.value && 'animated'
    );
  }
}
