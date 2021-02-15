import { Component, h, Prop, Host, Element, State } from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';

/**
 * @todo styles for custom icon (no-marker prop?)
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */

const name = 'list-item';
@Component({
  tag: 'scale-list-item',
  styleUrl: './list-item.css',
  shadow: true,
})
export class ListItem implements Base {
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

  componentWillUpdate() {}
  disconnectedCallback() {}

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
          <div class={`${name}__nested-list`} hidden={!this.hasNestedChild}>
            <slot name="nested" onSlotchange={this.handleSlotChange}></slot>
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    const orderType = this.ordered ? 'ordered' : 'unordered';

    return classNames(
      name,
      this.isNested && `${name}--nested`,
      `${name}--${orderType}`,
      !this.marker && `${name}--no-marker`
    );
  }
}
