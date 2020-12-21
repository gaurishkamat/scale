import {
  Component,
  h,
  State,
  Prop,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './slider.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

let i = 0;

@Component({
  tag: 'scale-slider',
  shadow: true,
})
export class Slider implements Base {
  sliderTrack?: HTMLDivElement;

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
  /** (optional) slider label */
  @Prop() label?: string;
  /** (optional) slider display value */
  @Prop() showValue?: boolean = true;
  /** (optional) slider custom color */
  @Prop() customColor?: string = '';
  /** (optional) disabled  */
  @Prop() disabled?: boolean = false;

  /** (optional) smaller track */
  @Prop() trackSmall?: boolean = false;
  /** (optional) larger thumb */
  @Prop() thumbLarge?: boolean = false;

  /** (optional) Slider id */
  @Prop() sliderId?: string;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Slider', styles) stylesheet: StyleSheet;

  @State() dragging: boolean;
  @State() startX: number;
  @State() currentX: number;
  @State() startPosition: number;
  @State() newPosition: number;

  @Event() scaleChange: EventEmitter<number>;

  constructor() {
    this.onDragging = this.onDragging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentWillLoad() {
    if (this.sliderId == null) {
      this.sliderId = 'slider-' + i++;
    }
  }
  componentWillUpdate() {}
  componentDidUnload() {
    this.removeGlobalListeners();
  }

  onButtonDown = (event: any) => {
    if (this.disabled) {
      return;
    }
    this.onDragStart(event);
    this.addGlobalListeners();
  };

  onDragStart = (event: any) => {
    this.dragging = true;
    this.startX = this.handleTouchEvent(event).clientX;
    this.startPosition = parseInt(this.currentPosition(), 10);
  };

  onDragging = (event: any) => {
    const { dragging, startX, startPosition } = this;

    if (dragging) {
      this.currentX = this.handleTouchEvent(event).clientX;

      let diff: number;

      diff = ((this.currentX - startX) / this.sliderTrack.offsetWidth) * 100;

      this.newPosition = startPosition + diff;
      this.setPosition(this.newPosition);
    }
  };

  onDragEnd = () => {
    const { dragging, newPosition } = this;
    if (dragging) {
      this.dragging = false;
    }
    this.setPosition(newPosition || this.startPosition);
    this.removeGlobalListeners();
  };

  addGlobalListeners() {
    window.addEventListener('mousemove', this.onDragging.bind(this));
    window.addEventListener('mouseup', this.onDragEnd.bind(this));
    window.addEventListener('touchmove', this.onDragging.bind(this));
    window.addEventListener('touchend', this.onDragEnd.bind(this));
  }

  removeGlobalListeners() {
    window.removeEventListener('mousemove', this.onDragging);
    window.removeEventListener('mouseup', this.onDragEnd);
    window.removeEventListener('touchmove', this.onDragging);
    window.removeEventListener('touchend', this.onDragEnd);
  }

  handleTouchEvent(event: any): MouseEvent | Touch {
    return event.type.indexOf('touch') === 0 ? event.touches[0] : event;
  }

  onKeyDown = event => {
    if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
      this.setPosition(
        this.value + (event.key === 'ArrowRight' ? this.step : -this.step)
      );
    }
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      this.setPosition(
        this.value +
          (event.key === 'ArrowUp' ? this.step * 10 : -this.step * 10)
      );
    }
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
    this.scaleChange.emit(Math.abs(this.value));
  };

  currentPosition(): string {
    return `${((this.value - this.min) / (this.max - this.min)) * 100}%`;
  }

  render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()}>
          {!!this.label && (
            <label
              class="slider--label"
              id={`${this.sliderId}-label`}
              htmlFor={this.sliderId}
            >
              {this.label}
            </label>
          )}
          <div class="slider--track-wrapper">
            <div
              class="slider--track"
              ref={el => (this.sliderTrack = el as HTMLDivElement)}
            >
              <div
                class="slider--bar"
                style={{
                  width: `${this.value}%`,
                  backgroundColor: this.customColor,
                }}
              ></div>
              <div
                class="slider--thumb-wrapper"
                style={{ left: `${this.value}%` }}
                onMouseDown={this.onButtonDown}
                onTouchStart={this.onButtonDown}
              >
                <div
                  class="slider--thumb"
                  tabindex="0"
                  role="slider"
                  id={this.sliderId}
                  aria-valuemin={this.min}
                  aria-valuenow={this.value}
                  aria-valuemax={this.max}
                  aria-valuetext={`${this.value}%`}
                  aria-labelledby={`${this.sliderId}-label`}
                  aria-orientation="horizontal"
                  aria-disabled={this.disabled}
                  onKeyDown={this.onKeyDown}
                />
              </div>
            </div>
            {this.showValue && (
              <div class="slider--display-value">{this.value}%</div>
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
      this.disabled && classes[`slider--disabled`],
      this.trackSmall && classes[`slider--track-small`],
      this.thumbLarge && classes[`slider--thumb-large`]
    );
  }
}
