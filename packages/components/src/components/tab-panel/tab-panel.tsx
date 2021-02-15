import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';

let i = 0;
const name = 'tab-panel';
@Component({
  tag: 'scale-tab-panel',
  styleUrl: './tab-panel.css',
  shadow: true,
})
export class TabPanel implements Base {
  generatedId: number = i++;

  /** True for smaller height and font size */
  @Prop() small: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  disconnectedCallback() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host id={`scale-tab-panel-${this.generatedId}`} role="tabpanel">
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()}>
          <slot />
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(name, this.small && `${name}--small`);
  }
}
