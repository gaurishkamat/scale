import { Component, Prop, h, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './progress-bar.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

let i = 0;

@Component({
  tag: 'scale-progress-bar',
  shadow: true,
})
export class ProgressBar implements Base {
  /** (optional) Progress bar class */
  @Prop() customClass?: string = '';
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
  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('ProgressBar', styles) stylesheet: StyleSheet;

  componentWillLoad() {
    if (this.progressBarId == null) {
      this.progressBarId = 'progress-bar-' + i++;
    }
  }
  componentWillUpdate() {}
  componentDidUnload() {}

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
    const { classes } = this.stylesheet;

    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <style>{this.transitions(this.percentage)}</style>
        <div class={this.getCssClassMap()}>
          {!!this.label && (
            <label
              class={classes['progress-bar__label']}
              htmlFor={this.progressBarId}
            >
              {this.label}
            </label>
          )}
          <div class={classes['progress-bar-wrapper']}>
            <div
              class={classes['progress-bar__outer']}
              style={{ height: `${this.strokeWidth}px` }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={this.percentage}
              aria-busy={this.busy}
              aria-valuetext={`${this.percentage}%`}
              aria-label={this.label}
              id={this.progressBarId}
            >
              <div
                class={classes['progress-bar__inner']}
                style={this.progressStyle()}
              >
                {!!this.statusInside && (
                  <div
                    class={classes['progress-bar__inner-status']}
                    aria-hidden="true"
                  >{`${this.percentage}%`}</div>
                )}
              </div>
            </div>

            {!!this.showStatus && (
              <div
                class={classes['progress-bar__status']}
                aria-hidden="true"
              >{`${this.percentage}%`}</div>
            )}
            {!!this.icon && (
              <scale-icon
                class={classes['progress-bar__status']}
                path={this.icon}
                size={16}
              ></scale-icon>
            )}
          </div>
        </div>
        {!!this.statusDescription && (
          <div class={classes['progress-bar__status-description']} role="alert">
            {this.statusDescription}
          </div>
        )}
        {
          <span aria-live="polite" class={classes['progress-bar__aria-live']}>
            {this.percentage !== Math.round(this.percentage / 10) * 10
              ? `${Math.round(this.percentage / 10) * 10}%`
              : null}
          </span>
        }
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;

    return classNames(
      classes['progress-bar'],
      this.customClass && this.customClass,
      this.hasError && classes[`progress-bar--has-error`],
      this.disabled && classes[`progress-bar--disabled`]
    );
  }
}
