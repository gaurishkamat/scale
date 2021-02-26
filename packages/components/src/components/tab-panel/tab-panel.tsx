import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';

let i = 0;

@Component({
  tag: 'scale-tab-panel',
  styleUrl: './tab-panel.css',
  shadow: true,
})
export class TabPanel {
  generatedId: number = i++;

  /** True for smaller height and font size */
  @Prop() small: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

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
    return classNames('tab-panel', this.small && 'tab-panel--small');
  }
}
