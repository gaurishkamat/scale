import {
  Component,
  Prop,
  State,
  h,
  Element,
  Host,
  Watch,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';
import classNames from 'classnames';
import { StyleSheet } from 'jss';
import { CssClassMap } from '../../utils/utils';
import { styles } from './modal.styles';
import { CssInJs } from '../../utils/css-in-js';
import Base from '../../utils/base-interface';
import { queryShadowRoot, isHidden, isFocusable } from '../../utils/focus-trap';

function animateTo(
  element: HTMLElement,
  keyframes: Keyframe,
  options?: KeyframeAnimationOptions
) {
  const anim = element.animate(keyframes, { ...options, fill: 'both' });
  anim.addEventListener('finish', () => {
    // @ts-ignore
    anim.commitStyles();
    anim.cancel();
  });

  return anim;
}

/*
  TODO
  ====
  - [x] hide .modal__actions if no slot
  - [x] close on backdrop click
  - [ ] add styles
  - [ ] handle scrolling (styles)
  - [ ] make sure modal content is visible in mobile-landscape
  - [ ] add close-label prop and use it
  - [ ] add HCM border
  - [ ] add align-right prop

  - [ ] trigger events
  - [ ] save focus of last element previous to opening the modal
  - [ ] move animateTo to utils, document source
 */

@Component({
  tag: 'scale-modal',
  shadow: true,
})
export class Modal implements Base {
  closeButton: HTMLButtonElement | HTMLScaleButtonElement;
  modalContainer: HTMLElement;
  focusableElements: HTMLElement[] = [];

  @Element() hostElement: HTMLElement;
  /** (optional) Custom class */
  @Prop() customClass?: string = '';
  /** Modal heading */
  @Prop() heading: string;
  /** (optional) Modal size */
  @Prop() size?: string = 'default';
  /** (optional) Modal variant */
  @Prop() variant?: string;
  /** (optional) If `true`, the Modal is open. */
  @Prop({ reflect: true }) opened?: boolean = false;
  /** (optional) Transition duration */
  @Prop() duration?: number = 200;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('Modal', styles) stylesheet: StyleSheet;

  @State() isOpen: boolean = false;
  @State() hasActionsSlot: boolean = false;

  @Event() scaleOpen?: EventEmitter;
  @Event() scaleClose?: EventEmitter;

  @Listen('keydown', { target: 'window' })
  handleKeypress(event: KeyboardEvent) {
    if (!this.isOpen) {
      return;
    }
    if (event.key === 'Escape') {
      this.opened = false;
    }
  }

  componentDidUnload() {}
  componentWillUpdate() {}

  componentWillLoad() {
    this.hasActionsSlot =
      this.hostElement.querySelector('[slot="actions"]') != null;
  }

  componentDidLoad() {
    this.focusableElements = queryShadowRoot(
      this.hostElement.shadowRoot,
      el => isHidden(el) || el.matches('[data-focus-trap-edge]'),
      isFocusable
    );
  }

  getFirstFocusableElement(): HTMLElement | null {
    return this.focusableElements[0];
  }

  getLastFocusableElement(): HTMLElement | null {
    return this.focusableElements[this.focusableElements.length - 1];
  }

  handleTopFocus = () => {
    this.attemptFocus(this.getLastFocusableElement());
  };

  handleBottomFocus = () => {
    this.attemptFocus(this.getFirstFocusableElement());
  };

  attemptFocus(element: HTMLElement | null) {
    if (element == null) {
      this.closeButton.focus();
      return;
    }
    element.focus();
  }

  @Watch('opened')
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.isOpen = true;
    try {
      const anim = animateTo(
        this.modalContainer,
        { opacity: 1 },
        { duration: this.duration }
      );
      anim.addEventListener('finish', () => {
        this.attemptFocus(this.getFirstFocusableElement());
      });
    } catch (err) {}
  }

  close() {
    try {
      const anim = animateTo(
        this.modalContainer,
        { opacity: 0 },
        { duration: this.duration }
      );
      anim.addEventListener('finish', () => {
        this.isOpen = false;
      });
    } catch (err) {
      this.isOpen = false;
    }
  }

  render() {
    const { classes } = this.stylesheet;

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div
          ref={el => (this.modalContainer = el)}
          class={this.getCssClassMap()}
        >
          <div
            class={classes['modal__backdrop']}
            onClick={() => (this.opened = false)}
          ></div>
          <div
            data-focus-trap-edge
            onFocus={this.handleTopFocus}
            tabindex="0"
          ></div>
          <div class={classes['modal__window']} role="dialog" aria-modal="true">
            <div class={classes['modal__header']}>
              <h2>{this.heading}</h2>
              <button
                ref={el => (this.closeButton = el)}
                class={classes['modal__close-button']}
                onClick={() => (this.opened = false)}
              >
                <slot name="close-icon">
                  {/* <scale-icon-action-circle-close /> */}
                  <span>(x)</span>
                </slot>
              </button>
            </div>
            <div class={classes['modal__body']}>
              <slot></slot>
            </div>
            <div class={classes['modal__actions']}>
              <slot name="actions"></slot>
            </div>
          </div>
          <div
            data-focus-trap-edge
            onFocus={this.handleBottomFocus}
            tabindex="0"
          ></div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.modal,
      this.customClass && this.customClass,
      this.isOpen && classes['modal--is-open'],
      this.hasActionsSlot && classes['modal--has-actions'],
      this.size && classes[`modal--size-${this.size}`],
      this.variant && classes[`modal--variant-${this.variant}`]
    );
  }
}
