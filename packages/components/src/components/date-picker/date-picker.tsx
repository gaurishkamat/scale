import { Component, h, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { DuetDatePicker as DuetDatePickerCustomElement } from '@duetds/date-picker/custom-element';

import {
  DuetDatePickerChangeEvent,
  DuetDatePickerDirection,
  DuetDatePickerFocusEvent,
  DuetDatePicker,
} from '@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker';

if (
  typeof window !== 'undefined' &&
  typeof window.Audio !== 'undefined' &&
  !customElements.get('duet-date-picker')
) {
  customElements.define('duet-date-picker', DuetDatePickerCustomElement);
}

@Component({
  tag: 'scale-date-picker',
  shadow: false,
  styleUrl: 'date-picker.css',
})
export class DatePicker {
  duetInput: DuetDatePicker;
  /**
   * Name of the date picker input.
   */
  @Prop() name: string = 'date';

  /**
   * Adds a unique identifier for the date picker input. Use this instead of html `id` attribute.
   */
  @Prop() identifier: string = '';

  /**
   * Makes the date picker input component disabled. This prevents users from being able to
   * interact with the input, and conveys its inactive state to assistive technologies.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Defines a specific role attribute for the date picker input.
   */
  @Prop() role: string;

  /**
   * Forces the opening direction of the calendar modal to be always left or right.
   * This setting can be useful when the input is smaller than the opening date picker
   * would be as by default the picker always opens towards right.
   */
  @Prop() direction: DuetDatePickerDirection = 'right';

  /**
   * Should the input be marked as required?
   */
  @Prop() required: boolean = false;

  /**
   * Date value. Must be in IS0-8601 format: YYYY-MM-DD.
   */
  @Prop({ reflect: true }) value: string = '';

  /**
   * Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
   * This setting can be used alone or together with the max property.
   */
  @Prop() min: string = '';

  /**
   * Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
   * This setting can be used alone or together with the min property.
   */
  @Prop() max: string = '';

  /**
   * Which day is considered first day of the week? `0` for Sunday, `1` for Monday, etc.
   * Default is Monday.
   */
  @Prop() firstDayOfWeek?: any;

  /**
   * Button labels, day names, month names, etc, used for localization.
   * Default is English.
   */
  @Prop() localization?: any;

  /**
   * Date adapter, for custom parsing/formatting.
   * Must be object with a `parse` function which accepts a `string` and returns a `Date`,
   * and a `format` function which accepts a `Date` and returns a `string`.
   * Default is IS0-8601 parsing and formatting.
   */
  @Prop() dateAdapter?: any;

  /**
   * Events section.
   */

  /**
   * Event emitted when a date is selected.
   */
  @Event() scaleChange: EventEmitter<DuetDatePickerChangeEvent>;

  /**
   * Event emitted the date picker input is blurred.
   */
  @Event() scaleBlur: EventEmitter<DuetDatePickerFocusEvent>;

  /**
   * Event emitted the date picker input is focused.
   */
  @Event() scaleFocus: EventEmitter<DuetDatePickerFocusEvent>;

  /**
   * Public methods API
   */

  /**
   * Sets focus on the date picker's input. Use this method instead of the global `focus()`.
   */
  @Method() async setFocus() {
    return this.duetInput.setFocus();
  }

  /**
   * Show the calendar modal, moving focus to the calendar inside.
   */
  @Method() async show() {
    return this.duetInput.show();
  }

  /**
   * Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus
   * returning to the date picker's button. Default is true.
   */
  @Method() async hide(moveFocusToButton = true) {
    return this.duetInput.hide(moveFocusToButton);
  }

  componentDidLoad() {
    this.duetInput
      // @ts-ignore
      .querySelector('.duet-date__toggle-icon')
      .replaceWith(document.createElement('scale-icon-content-calendar'));
  }

  render() {
    return (
      <duet-date-picker
        onDuetChange={e => {
          this.scaleChange.emit(e.detail);
        }}
        onDuetFocus={e => {
          this.scaleFocus.emit(e.detail);
        }}
        onDuetBlur={e => {
          this.scaleBlur.emit(e.detail);
        }}
        name={this.name}
        identifier={this.identifier}
        role={this.role}
        direction={this.direction}
        required={this.required}
        min={this.min}
        max={this.max}
        firstDayOfWeek={this.firstDayOfWeek}
        localization={this.localization}
        dateAdapter={this.dateAdapter}
        value={this.value}
        // @ts-ignore
        ref={element => (this.duetInput = element)}
      ></duet-date-picker>
    );
  }
}
