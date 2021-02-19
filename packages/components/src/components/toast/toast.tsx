import {
  Component,
  Prop,
  Method,
  h,
  State,
  Element,
  Host,
} from '@stencil/core';
import classNames from 'classnames';
import { formatDistance, subSeconds } from 'date-fns';

@Component({
  tag: 'scale-toast',
  styleUrl: './toast.css',
  shadow: true,
})
export class Toast {
  /** (optional) Toast size */
  @Prop() size?: string = '';
  /** (optional) Toast variant */
  @Prop() variant?: string = '';
  /** (optional) Toast opened */
  @Prop({ reflect: true }) opened?: boolean;
  /** (optional) Toast autohide time */
  @Prop() autoHide?: boolean | number = false;
  /** (optional) Animated toast */
  @Prop() animated?: boolean = true;
  /** (optional) Toast time */
  @Prop() time?: number;
  /** (optional) Toast position at the top */
  @Prop() positionTop?: number = 12;
  /** (optional) Toast position right */
  @Prop() positionRight?: number = 12;
  /** (optional) Toast fade duration */
  @Prop() fadeDuration?: number = 500;
  /** (optional) Injected CSS styles */
  @Prop({ reflect: true }) styles?: string;

  /** (optional) Toast state progress */
  @State() progress: number = 0;
  /** (optional) Toast state height with offset */
  @State() toastHeightWithOffset: number = 0;

  @Element() element: HTMLElement;

  hideToast: boolean = false;
  timerId = null;

  disconnectedCallback() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
      this.opened = false;
      this.progress = 0;
    }
  }

  close = () => {
    clearInterval(this.timerId);
    this.hideToast = true;
    setTimeout(() => {
      this.timerId = null;
      this.opened = false;
      this.progress = 0;
    }, this.fadeDuration);
  };

  getTime = () => {
    const formattedTime =
      this.time &&
      formatDistance(subSeconds(this.time, 3), new Date(), { addSuffix: true });
    return formattedTime;
  };

  setToastTimeout = () => {
    if (this.opened && this.autoHide !== false && !this.timerId) {
      this.timerId = setInterval(() => {
        this.progress += 1 / (this.getAutoHide() / 1000);
        if (this.progress >= 100) {
          this.close();
        }
      }, 10);
    }
  };

  /** Toast method: open() */
  @Method()
  async open() {
    this.opened = true;
    this.hideToast = false;
  }

  render() {
    this.setToastTimeout();
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <style>{this.transitions(this.toastHeightWithOffset)}</style>
        <style>{this.animationStyle(this.toastHeightWithOffset)}</style>

        <div class={this.getCssClassMap()}>
          <div class="toast__header">
            <slot name="header" />

            <small>{this.getTime()}</small>
            <a onClick={this.close}>
              <span aria-hidden="true">&times;</span>
            </a>
          </div>
          {this.autoHide && (
            <div class="toast__progress" style={{ width: `${this.progress}%` }}>
              &nbsp;
            </div>
          )}
          <div class="toast__body">
            <slot />
          </div>
        </div>
      </Host>
    );
  }

  transitions = offset => `
    @keyframes fadeIn {
      from {
        opacity: 0;
        top: -${offset}px;
      }
      to {
        opacity: 1;
        top: ${this.positionTop}px;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        top: ${this.positionTop}px;
      }
      to {
        opacity: 0;
        top: -${offset}px;
      }
    }
  `;

  animationStyle = offset => {
    return `
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeIn ${this.fadeDuration / 1000}s ease-in-out;
        top: ${this.positionTop}px;
        opacity: 1;
      },
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeOut ${this.fadeDuration / 1000}s ease-in-out;
        top: -${offset}px;
        opacity: 0;
      }
    `;
  };

  getToastHeightWithOffset() {
    const toastHeight = this.element.shadowRoot.querySelector('.toast')
      .scrollHeight;
    this.toastHeightWithOffset = toastHeight + this.positionTop;
  }

  getAutoHide() {
    if (
      typeof this.autoHide === 'number' ||
      typeof this.autoHide === 'string'
    ) {
      return Number(this.autoHide);
    } else {
      return 0;
    }
  }

  getCssClassMap() {
    return classNames(
      'toast',
      this.size && `toast--size-${this.size}`,
      this.variant && `toast--variant-${this.variant}`,
      !!this.opened && 'toast--opened',
      !!!this.hideToast && 'toast--show',
      !!this.hideToast && 'toast--hide'
    );
  }
}
