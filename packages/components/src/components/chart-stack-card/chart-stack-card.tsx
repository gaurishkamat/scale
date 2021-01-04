import { Component, h, Prop, Host } from '@stencil/core';
import { styles } from './chart-stack-card.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 'scale-chart-stack-card',
  shadow: false,
})
export class ChartStackCard implements Base {
  /** (optional) Custom class */
  @Prop() customClass?: string = '';
  /** Chart Data */
  @Prop() data: string | Array<Record<'type' | 'value' | 'percentage', string>>;
  /** Chart Title */
  @Prop() heading: string;

  /** (optional) Injected jss styles */
  @Prop() styles?: any;
  /** decorator Jss stylesheet */
  @CssInJs('ChartStackCard', styles) stylesheet: StyleSheet;

  componentWillUpdate() {}
  disconnectedCallback() {}

  readData = data => {
    try {
      return Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
    } catch (error) {
      return Array.isArray(data) ? data : [];
    }
  };

  getOpacity(item, index) {
    return JSON.stringify(index === 0 ? 1 : +item.percentage / 100);
  }

  render() {
    return (
      <Host class={this.getCssClassMap()}>
        <scale-card
          styles={{
            card: {
              '&:after': {
                content: "''",
                display: 'block',
                background:
                  'linear-gradient(0deg, white, rgba(255,255,255, 0))',
                height: '2rem',
                marginTop: '-2rem',
                position: 'relative',
              },
            },
            card__body: {
              paddingBottom: '0 !important',
            },
          }}
        >
          <div class="header">{this.heading}</div>
          <div class="bar">
            {this.readData(this.data)
              .sort((a, b) => b.percentage - a.percentage)
              .map((item, index) => {
                if (+item.percentage > 0) {
                  return (
                    <div
                      class="bar__item"
                      style={{
                        opacity: this.getOpacity(item, index),
                        flex: JSON.stringify(+item.percentage),
                      }}
                    />
                  );
                }
              })}
          </div>

          <div class="legend">
            {this.readData(this.data)
              .sort((a, b) => b.percentage - a.percentage)
              .map((item, index) => (
                <div class="legend__row">
                  <div class="legend__row__item">
                    <div
                      class="legend__item"
                      style={{
                        opacity: this.getOpacity(item, index),
                      }}
                    />
                    <div class="legend__label spacer">{item.type}</div>
                  </div>
                  <div class="legend__row__item">
                    <div class="spacer">{item.value}</div>
                    <div class="spacer">{item.percentage}%</div>
                  </div>
                </div>
              ))}
          </div>
        </scale-card>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return classNames(
      this.stylesheet.classes['chart-stack'],
      this.customClass && this.customClass
    );
  }
}
