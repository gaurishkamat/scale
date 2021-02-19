import { Component, h, Prop, Host, Element, State } from '@stencil/core';
import classNames from 'classnames';

/**
 * @todo styles for custom icon (no-marker prop?)
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */

@Component({
  tag: 'scale-list-item',
  styleUrl: './list-item.css',
  shadow: true,
})
export class ListItem {
  @Element() el: HTMLElement;

  /** Whether this is a child of an ordered scale-list, gets set automatically by its parent */
  @Prop() ordered?: boolean = false;
  /** Index number, useful only for styling the `ordered` type */
  @Prop({ mutable: true }) index?: number;
  /** If `false`, no marker or left padding will be visible */
  @Prop() marker: boolean = true;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  @State() hasNestedChild: boolean = false;
  @State() isNested: boolean = false;

  componentWillLoad() {
    this.isNested = this.isNestedCheck();
  }

  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'listitem');
    }
  }

  handleSlotChange = ({ target }: Event) => {
    this.hasNestedChild =
      (target as HTMLSlotElement).assignedNodes().length > 0;
    this.isNested = this.isNestedCheck();
  };

  isNestedCheck = (): boolean => {
    return this.el.closest('scale-list[slot="nested"]') != null;
  };

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()} data-index={this.index}>
          <slot />
          <div class={`list-item__nested-list`} hidden={!this.hasNestedChild}>
            <slot name="nested" onSlotchange={this.handleSlotChange}></slot>
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    const orderType = this.ordered ? 'ordered' : 'unordered';

    return classNames(
      'list-item',
      this.isNested && 'list-item--nested',
      `list-item--${orderType}`,
      !this.marker && 'list-item--no-marker'
    );
  }
}
