import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
let i = 0;
@Component({
  tag: 'scale-progress-bar',
  styleUrl: './progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  /** (optional) Progress bar busy switch */
  @Prop() busy?: boolean = false;
  /** (required) Progress bar percentage */
  @Prop() percentage: number = 0;
  /** (optional) Progress bar customColor */
  @Prop() customColor?: string;
  /** (optional) Progress bar stroke width */
  @Prop() strokeWidth?: number = 6;
  /** (optional) Progress bar percentage text */
  @Prop() showStatus?: boolean;
  /** (optional) Progress bar icon indicator */
  @Prop() icon?: string;
  /** (optional) Progress bar status description text */
  @Prop() statusDescription?: string;
  /** (optional) Progress text display inside bar */
  @Prop() statusInside?: boolean;
  /** (optional) Progress bar error */
  @Prop() hasError?: boolean;
  /** (optional) Progress bar disabled */
  @Prop() disabled?: boolean;
  /** (optional) Progress bar id */
  @Prop() progressBarId?: string;
  /** (optional) Progress bar label */
  @Prop() label?: string;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  componentWillLoad() {
    if (this.progressBarId == null) {
      this.progressBarId = 'progress-bar-' + i++;
    }
  }
  componentWillUpdate() {}
  disconnectedCallback() {}

  transitions = (width: number) => `
    @keyframes showProgress {
      from {
        width: 0;
      }
      to {
        width: ${width}%;
      }
    }
  `;

  progressStyle = () => {
    return {
      width: `${this.percentage}%`,
      border: '1px solid transparent',
      background: this.customColor,
      animation: 'showProgress 3s ease-in-out',
    };
  };

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <style>{this.transitions(this.percentage)}</style>

        <div class={this.getCssClassMap()}>
          {!!this.label && (
            <label class="progress-bar__label" htmlFor={this.progressBarId}>
              {this.label}
            </label>
          )}
          <div class="progress-bar-wrapper">
            <div
              class="progress-bar__outer"
              style={{ height: `${this.strokeWidth}px` }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={this.percentage}
              aria-busy={this.busy}
              aria-valuetext="${this.percentage}%"
              aria-label={this.label}
              id={this.progressBarId}
            >
              <div class="progress-bar__inner" style={this.progressStyle()}>
                {!!this.statusInside && (
                  <div class="progress-bar__inner-status" aria-hidden="true">
                    '${this.percentage}%'
                  </div>
                )}
              </div>
            </div>

            {!!this.showStatus && (
              <div class="progress-bar__status" aria-hidden="true">
                '${this.percentage}%'
              </div>
            )}
            {!!this.icon && (
              <scale-icon
                class="progress-bar__status"
                aria-hidden="true"
                path={this.icon}
                size={16}
              ></scale-icon>
            )}
          </div>
        </div>
        {!!this.statusDescription && (
          <div class="progress-bar__status-description" role="alert">
            {this.statusDescription}
          </div>
        )}
        {
          <span aria-live="polite" class="progress-bar__aria-live">
            {this.percentage !== Math.round(this.percentage / 10) * 10
              ? `${Math.round(this.percentage / 10) * 10}%`
              : null}
          </span>
        }
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'progress-bar',
      this.hasError && 'progress-bar--has-error',
      this.disabled && 'progress-bar--disabled'
    );
  }
}
