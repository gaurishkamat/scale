import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import classNames from 'classnames';

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
  @Prop() icon?: string =
    'M9 20.215L1.695 12.91a1.25 1.25 0 011.765-1.77L9 16.68l12-12a1.25 1.25 0 011.765 1.765z';
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;
  /** Emitted when the value has changed. */
  @Event() scaleChange!: EventEmitter;

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + i++;
    }
  }

  render() {
    const ariaInvalidAttr =
      this.status === 'error' ? { 'aria-invalid': true } : {};
    const helperTextId = `helper-message-${i}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };

    return (
      <Host checked={this.checked}>
        <div class={this.getCssClassMap()}>
          <label class="input__checkbox-label-wrapper" htmlFor={this.inputId}>
            <input
              type="checkbox"
              name={this.name}
              id={this.inputId}
              onChange={(e: any) => {
                this.checked = e.target.checked;
                // bubble event through the shadow dom
                this.scaleChange.emit({ value: this.checked });
              }}
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
              {...ariaInvalidAttr}
              {...ariaDescribedByAttr}
            />
            <div class={classNames('input__checkbox-container')}>
              <span class={classNames('input__checkbox-placeholder')}></span>
              {/* Accessibility: rendering the icon *only* when checked, otherwise is always visible in HCM */}
              {!!this.icon && this.checked && (
                <scale-icon path={this.icon} size={12}></scale-icon>
              )}
            </div>
            <span class="input__checkbox-label">{this.label}</span>
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
          </label>
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
