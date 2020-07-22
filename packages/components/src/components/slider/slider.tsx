import { Component, h, State, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './slider.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-slider',
  shadow: true,
})
export class Slider implements Base {
  /** (optional) Slider class */
  @Prop() customClass?: string = '';
  /** (optional) the display value of the slider */
  @Prop() value?: number;
  /** t(optional) he minimal value of the slider */
  @Prop() min?: number = 0;
  /** (optional) the maximal value of the slider */
  @Prop() max?: number = 100;
  /** (optional) the step size to increase or decrease when dragging slider */
  @Prop() step?: number = 1;
  /** (optional) the height of slider track */
  @Prop() trackHeight?: number;
  /** (optional) slider label */
  @Prop() label?: string;
  /** (optional) slider display value */
  @Prop() showValue?: boolean = true;
  /** (optional) slider custom color */
  @Prop() customColor?: string = '';
  /** (optional) disabled  */
  @Prop() disabled?: boolean = false;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Slider', styles) stylesheet: StyleSheet;

  @State() dragging: boolean;
  @State() startX: number;
  @State() currentX: number;
  @State() startPosition: number;
  @State() newPosition: number;

  sliderTrack?: HTMLDivElement;

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidUnload() {
    window.removeEventListener('mousemove', this.onDragging.bind(this));
    window.removeEventListener('mouseup', this.onDragEnd.bind(this));
  }

  onButtonDown = (event: any) => {
    if (this.disabled) {
      return;
    }
    this.onDragStart(event);

    window.addEventListener('mousemove', this.onDragging.bind(this));
    window.addEventListener('mouseup', this.onDragEnd.bind(this));
  };

  onDragStart = (event: any) => {
    this.dragging = true;
    this.startX = event.clientX;
    this.startPosition = parseInt(this.currentPosition(), 10);
  };

  onDragging = (event: any) => {
    const { dragging, startX, startPosition, newPosition } = this;

    if (dragging) {
      this.currentX = event.clientX;

      let diff: number;

      diff = ((this.currentX - startX) / this.sliderTrack.offsetWidth) * 100;

      this.newPosition = startPosition + diff;
      this.setPosition(newPosition);
    }
  };

  onDragEnd = () => {
    const { dragging, newPosition } = this;
    if (dragging) {
      this.dragging = false;
    }
    this.setPosition(newPosition || this.startPosition);
    window.removeEventListener('mousemove', this.onDragging.bind(this));
    window.removeEventListener('mouseup', this.onDragEnd.bind(this));
  };

  setPosition = (newPosition: number) => {
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > 100) {
      newPosition = 100;
    }

    const lengthPerStep = 100 / ((this.max - this.min) / this.step);
    const steps = Math.round(newPosition / lengthPerStep);
    this.value =
      steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
  };

  currentPosition(): string {
    return `${((this.value - this.min) / (this.max - this.min)) * 100}%`;
  }

  render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()}>
          {!!this.label && <div class="slider--label">{this.label}</div>}
          <div class="slider--track-wrapper">
            <div
              class="slider--track"
              style={{
                height: `${this.trackHeight}px`,
              }}
              ref={el => (this.sliderTrack = el as HTMLDivElement)}
            >
              <div
                class="slider--bar"
                style={{
                  width: `${this.value}%`,
                  height: `${this.trackHeight}px`,
                  backgroundColor: this.customColor,
                }}
              ></div>
              <div
                class="slider--thumb-wrapper"
                style={{ left: `${this.value}%` }}
                onMouseDown={this.onButtonDown}
              >
                <div
                  class="slider--thumb"
                  style={{ borderColor: this.customColor }}
                />
              </div>
            </div>
            {this.showValue && (
              <div class="slider--display-value">{this.value}</div>
            )}
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.slider,
      this.customClass && this.customClass,
      this.disabled && classes[`slider--disabled`]
    );
  }
}
