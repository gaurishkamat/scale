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

        <div part={this.getBasePartMap()} class={this.getCssClassMap()}>
          <slot />
        </div>
      </Host>
    );
  }

  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }

  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }

  getCssOrBasePartMap(mode: 'basePart' | 'css') {
    const component = 'tab-panel';
    const prefix = mode === 'basePart' ? '' : `${component}--`;

    return classNames(component, this.small && `${prefix}small`);
  }
}
