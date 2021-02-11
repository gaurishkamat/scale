import { Element, Component, h, Prop, Host, Listen } from '@stencil/core';
import classnames from 'classnames';
import Base from '../../utils/base-interface';
@Component({
  tag: 'scale-accordion',
  shadow: true,
})
export class Accordion implements Base {
  @Element() el: HTMLElement;

  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  /** If `true`, only one scale-collapsible within the accordion can be open at a time */
  @Prop() dependent: boolean = false;

  /** If `true`, scale-collapsibles within the accordion will all be open initially, unless this is dependant */
  @Prop() expanded: boolean = false;

  /**
   * Handle `dependent`
   */
  @Listen('scaleExpand')
  collapsibleHandler(event: CustomEvent) {
    event.stopPropagation();
    const { expanded } = event.detail;
    if (!this.dependent || expanded === false) {
      return;
    }
    this.getCollapsibleChildren().forEach(child => {
      if (child !== event.target && child.hasAttribute('expanded')) {
        child.expanded = false;
      }
    });
  }

  connectedCallback() {
    /**
     * Handle `expanded`
     */
    if (!this.dependent) {
      this.getCollapsibleChildren().forEach(child => {
        child.expanded = this.expanded;
      });
    }
  }

  getCollapsibleChildren(): HTMLScaleCollapsibleElement[] {
    return Array.from(this.el.querySelectorAll('scale-collapsible'));
  }

  disconnectedCallback() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()}>
          <slot />
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    const name = 'accordion';
    return classnames(name);
  }
}
