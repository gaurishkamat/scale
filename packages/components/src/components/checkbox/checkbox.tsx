import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';

interface InputChangeEventDetail {
  value: string | number | boolean | undefined | null;
}

let i = 0;

@Component({
  tag: 'scale-checkbox',
  styleUrl: './checkbox.css',
  shadow: false,
})
export class Checkbox {
  @Element() el: HTMLElement;
  /** (optional) Input name */
  @Prop() name?: string = '';
  /** (optional) Input label */
  @Prop() label: string = '';
  /** (optional) Input helper text */
  @Prop() helperText?: string = '';
  /** (optional) Input status */
  @Prop() status?: string = '';
  /** (optional) Input disabled */
  @Prop() disabled?: boolean;
  /** (optional) Active switch */
  @Prop({ reflect: true }) checked?: boolean = false;
  /** (optional) Input value */
  @Prop({ mutable: true }) value?: string | number | null = '';
  /** (optional) Input checkbox id */
  @Prop() inputId?: string;
  /** (optional) Input checkbox checked icon */
  @Prop() icon?: string;
  /** (optional) Makes type `select` behave as a controlled component in React */
  @Prop() controlled?: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;
  /** Emitted when the value has changed. */
  @Event() scaleChange!: EventEmitter<InputChangeEventDetail>;

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + i++;
    }
  }

  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    this.scaleChange.emit({
      value: this.value == null ? this.value : this.value.toString(),
    });
  }

  @Watch('checked')
  checkedChanged() {
    this.scaleChange.emit({ value: this.checked });
  }

  // Handle checkbox/radio change (click on label)
  handleCheckChange = event => {
    this.checked = event.target.checked;
  };

  // Handle click on checkbox visual element
  handleCheckboxClick = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  };

  render() {
    const ariaInvalidAttr =
      this.status === 'error' ? { 'aria-invalid': true } : {};
    const helperTextId = `helper-message-${i}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };

    return (
      <Host checked={this.checked}>
        <div class={this.getCssClassMap()}>
          <input
            type="checkbox"
            name={this.name}
            id={this.inputId}
            onChange={this.handleCheckChange}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            {...ariaInvalidAttr}
            {...ariaDescribedByAttr}
          />
          <div
            class={classNames('input__checkbox-container')}
            onClick={this.handleCheckboxClick}
          >
            <span class={classNames('input__checkbox-placeholder')}></span>
            {/* Accessibility: rendering the icon *only* when checked, otherwise is always visible in HCM */}
            {!!this.icon && this.checked && (
              <scale-icon path={this.icon} size={12}></scale-icon>
            )}
          </div>
          <label htmlFor={this.inputId}>{this.label}</label>
          {!!this.helperText && (
            <div
              class="input__meta"
              id={helperTextId}
              aria-live="polite"
              aria-relevant="additions removals"
            >
              <div class="input__helper-text">{this.helperText}</div>
            </div>
          )}
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'input',
      'input--type-checkbox',
      this.checked && `input--checked`,
      this.disabled && `input--disabled`,
      this.status && `input--status-${this.status}`
    );
  }
}
