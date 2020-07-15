import { Component, Prop, h, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './progress-bar.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-progress-bar',
  shadow: true,
})
export class ProgressBar implements Base {
  /** (optional) Progress bar class */
  @Prop() customClass?: string = '';
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
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('ProgressBar', styles) stylesheet: StyleSheet;

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
          <div class={classes['progress-bar-wrapper']}>
            <div
              class={classes['progress-bar__outer']}
              style={{ height: `${this.strokeWidth}px` }}
            >
              <div
                class={classes['progress-bar__inner']}
                style={this.progressStyle()}
              >
                {!!this.statusInside && (
                  <div
                    class={classes['progress-bar__inner-status']}
                  >{`${this.percentage}%`}</div>
                )}
              </div>
            </div>

            {!!this.showStatus && (
              <div
                class={classes['progress-bar__status']}
              >{`${this.percentage}%`}</div>
            )}
            {!!this.icon && (
              <scale-icon
                class={classes['progress-bar__status']}
                path={this.icon}
              ></scale-icon>
            )}
          </div>
          {!!this.statusDescription && (
            <div class={classes['progress-bar__status-description']}>
              {this.statusDescription}
            </div>
          )}
        </div>
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
