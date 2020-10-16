import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

@Component({
  tag: 'scale-line',
  shadow: false,
})
export class ChartLine {
  /** Chart Data */
  @Prop() data: string | Array<Record<'type' | 'value' | 'percentage', string>>;
  componentWillUpdate() {}
  componentDidUnload() {}
  readData = data => {
    try {
      return Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
    } catch (error) {
      return Array.isArray(data) ? data : [];
    }
  };
  render() {
    return <Host class={this.getCssClassMap()}></Host>;
  }

  getCssClassMap(): CssClassMap {
    return classNames();
  }
}
