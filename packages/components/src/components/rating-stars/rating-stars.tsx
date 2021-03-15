import { Component, h, Prop } from '@stencil/core';
import { clamp, handleListeners } from './utils/utils';

@Component({
  tag: 'scale-rating-stars',
  styleUrl: 'rating-stars.css',
  shadow: true,
})
export class RatingStars {
  element: HTMLElement;
  @Prop({ mutable: true }) hoverValue = 0;
  @Prop({ mutable: true }) isHovering = false;
  @Prop({ mutable: true }) numOfStars = 5;
  @Prop({ mutable: true }) rating = 0;
  @Prop({ mutable: true }) small = false;
  @Prop({ mutable: true }) interactive = true;
  @Prop({ mutable: true }) disabled = false;
  @Prop() ariaLabel: string;
  @Prop() precision = 1;
  @Prop() getSymbolBlank = () => '<star-icon></star-icon>';
  @Prop() getSymbolFilled = () => `<star-icon colored></star-icon>`;

  connectedCallback() {
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidLoad() {
    handleListeners(this.element, 'addListeners');
  }

  disconnectedCallback() {
    handleListeners(this.element, 'removeListeners');
  }

  handleMouseLeave() {
    this.isHovering = false;
    return false;
  }

  handleMouseEnter() {
    if (this.disabled || !this.interactive) {
      return;
    }
    this.isHovering = true;
    return true;
  }

  handleMouseMove(event: MouseEvent) {
    this.hoverValue = this.getValueFromMousePosition(event);
    // console.log(this.hoverValue);
  }

  handleMouseClick(event: MouseEvent) {
    if (this.disabled || !this.interactive) {
      return;
    }

    this.isHovering = false;
    this.rating =
      this.rating === this.hoverValue
        ? 0
        : this.getValueFromMousePosition(event);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled || !this.interactive) {
      return;
    }

    if (event.key === 'ArrowRight') {
      const ratingPlus = this.rating + this.precision;
      this.rating = clamp(ratingPlus, 0, this.numOfStars);
      event.preventDefault();
    }

    if (event.key === 'ArrowLeft') {
      const ratingMinus = this.rating - this.precision;
      this.rating = clamp(ratingMinus, 0, this.numOfStars);
      event.preventDefault();
    }

    if (event.key === 'Home') {
      this.rating = 0;
      event.preventDefault();
    }

    if (event.key === 'End') {
      this.rating = this.numOfStars;
      event.preventDefault();
    }
  }

  getValueFromMousePosition(event: MouseEvent) {
    const containerLeft = this.element.getBoundingClientRect().left;
    const containerWidth = this.element.getBoundingClientRect().width;

    const numOfSections = this.numOfStars / this.precision;
    const sectionWidth = containerWidth / numOfSections;
    const positionOfMousePointer =
      (event.clientX - containerLeft) / sectionWidth;
    const star = clamp(
      this.roundToPrecision(
        positionOfMousePointer * this.precision,
        this.precision
      ),
      0,
      this.numOfStars
    );
    return star;
  }

  roundToPrecision(numberToRound: number, precision = 1) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }

  render() {
    const counter = Array.from(Array(this.numOfStars).keys());
    let displayValue = 0;
    if (!this.interactive || this.disabled) {
      displayValue = this.rating;
    } else {
      displayValue = this.isHovering ? this.hoverValue : this.rating;
    }
    return (
      <div
        class={{
          rating: true,
          'rating--interactive': !this.interactive,
          'rating--disabled': this.disabled,
        }}
        id="rating"
        ref={el => (this.element = el)}
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleMouseClick}
        onKeyDown={this.handleKeyDown}
        tabIndex={this.disabled ? -1 : 0}
        aria-label={this.ariaLabel}
      >
        <span class="rating__symbols" onMouseEnter={this.handleMouseEnter}>
          {counter.map(index => (
            <span
              style={{
                width: this.small ? '16px' : '24px',
              }}
              class={{
                rating__symbol: true,
                'rating__symbol--hover':
                  this.isHovering && Math.ceil(displayValue) === index + 1,
              }}
              innerHTML={this.getSymbolBlank()}
              id={`star-${index + 1}`}
            />
          ))}
        </span>
        <span class="rating__symbols rating__symbols--indicator">
          {counter.map(index => (
            <span
              style={{
                width: this.small ? '16px' : '24px',
                clipPath:
                  displayValue > index + 1
                    ? null
                    : `inset(0 ${100 - (displayValue - index) * 100}% 0 0)`,
              }}
              class={{
                rating__symbol: true,
                'rating__symbol--hover':
                  this.isHovering && Math.ceil(displayValue) === index + 1,
              }}
              innerHTML={this.getSymbolFilled()}
            />
          ))}
        </span>
      </div>
    );
  }
}
