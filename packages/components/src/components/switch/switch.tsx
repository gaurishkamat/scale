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
  @Prop() checked?: boolean = false;
  /** (optional) Disabled switch */
  @Prop() disabled?: boolean = false;
  /** (optional) Input id */
  @Prop() inputId?: string;
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Switch', styles) stylesheet: StyleSheet;

  /** Emitted when the switch was clicked */
  @Event() scaleChange!: EventEmitter<void>;

  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + i++;
    }
  }

  componentWillUpdate() {}
  componentDidUnload() {}

  handleChange = e => {
    if (!this.disabled) {
      this.scaleChange.emit(e);
    }
  };

  render() {
    return (
      <Host onClick={this.handleChange} checked={this.checked}>
        <div class={this.getCssClassMap()}>
          <input
            type="checkbox"
            checked={this.checked}
            disabled={this.disabled}
            id={this.inputId}
          />
          <div class="container">
            <div class="toggle" />
            <div class="text" />
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
