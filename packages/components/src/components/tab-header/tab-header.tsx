import { Component, h, Prop, Host, Watch, State, Element } from '@stencil/core';
import classNames from 'classnames';

let i = 0;

@Component({
  tag: 'scale-tab-header',
  styleUrl: './tab-header.css',
  shadow: true,
})
export class TabHeader {
  generatedId: number = i++;
  container: HTMLElement;

  @Element() el: HTMLElement;

  /** True for smaller height and font size */
  @Prop() small: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;
  @Prop() selected: boolean;

  @State() hasFocus: boolean = false;

  @Watch('selected')
  selectedChanged(newValue: boolean) {
    if (newValue === true) {
      // Having focus on the host element, and not on inner elements,
      // is required because screen readers.
      this.el.focus();
    }
    this.updateSlottedIcon();
  }

  /**
   * Find slotted icons, and if any, add the `selected` attribute accordingly.
   */
  updateSlottedIcon() {
    const slot = this.container.querySelector('slot') as HTMLSlotElement;
    if (slot === null) {
      return;
    }
    const children = Array.from(slot.assignedNodes())
      .filter(node => node.nodeType === 1)
      .filter(node => node.nodeName.toUpperCase().indexOf('ICON') > -1);
    if (children.length === 0) {
      return;
    }
    const action = this.selected ? 'setAttribute' : 'removeAttribute';
    children.forEach(child => child[action]('selected', ''));
  }

  render() {
    return (
      <Host
        id={`scale-tab-header-${this.generatedId}`}
        role="tab"
        aria-selected={String(this.selected)}
        tabindex={this.selected ? '0' : '-1'}
        onFocus={() => (this.hasFocus = true)}
        onBlur={() => (this.hasFocus = false)}
      >
        {this.styles && <style>{this.styles}</style>}

        <span ref={el => (this.container = el)} class={this.getCssClassMap()}>
          <slot />
        </span>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'tab-header',
      this.selected && 'tab-header--selected',
      this.small && 'tab-header--small',
      this.hasFocus && 'tab-header--has-focus'
    );
  }
}
