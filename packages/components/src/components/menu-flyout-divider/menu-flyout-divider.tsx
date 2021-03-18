import { Component, Prop, h, Host, Element } from '@stencil/core';
import classNames from 'classnames';

const name = 'menu-divider';
@Component({
  tag: 'scale-menu-flyout-divider',
  styleUrl: 'menu-flyout-divider.css',
  shadow: true,
})
export class MenuFlyoutDivider {
  /* 1. Host HTML Element */
  @Element() hostElement: HTMLElement;

  /* 2. State Variables (alphabetical) */

  /* 3. Public Properties (alphabetical) */
  /** (optional) Injected styles */
  @Prop() styles?: string;

  /* 4. Events (alphabetical) */

  /* 5. Private Properties (alphabetical) */

  /* 6. Lifecycle Events (call order) */
  constructor() {}
  connectedCallback() {}
  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidRender() {}
  componentDidLoad() {}
  componentDidUpdate() {}
  disconnectedCallback() {}

  /* 7. Listeners */

  /* 8. Public Methods */

  /* 9. Local Methods */
  getCssClassMap() {
    return classNames(name);
  }

  /* 10. Render */
  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <div
          class={this.getCssClassMap()}
          part="base"
          role="separator"
          aria-hidden="true"
        ></div>
      </Host>
    );
  }
}
