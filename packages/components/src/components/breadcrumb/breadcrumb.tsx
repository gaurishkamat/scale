import { Component, h, State, Element, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';
/*
  @see https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html
*/

@Component({
  tag: 'scale-breadcrumb',
  styleUrl: 'breadcrumb.css',
  shadow: true,
})
export class Breadcrumb implements Base {
  @Element() hostElement: HTMLElement;

  @Prop() separator?: string;

  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  @State() linksArray = [];
  @State() separatorSlot: HTMLElement = null;

  componentWillLoad() {
    if (this.linksArray.length === 0) {
      this.setLinksArray();
    }
    this.separatorSlot = this.hostElement.querySelector('[slot="separator"]');
  }

  componentWillUpdate() {}
  disconnectedCallback() {}

  setLinksArray() {
    this.linksArray = Array.from(this.hostElement.children).filter(
      element => element.slot === ''
    );
  }

  render() {
    const isLast = index => index === this.linksArray.length - 1;
    // Set aria-current="page" to the last item if it's a link
    const getCurrentAttr = index =>
      isLast(index) === true ? { 'aria-current': 'page' } : undefined;

    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <nav aria-label="Breadcrumb" class={this.getCssClassMap()}>
          <ol>
            {this.linksArray.map((element, index) => {
              const separator =
                this.separatorSlot != null ? (
                  <span
                    class="separator"
                    innerHTML={this.separatorSlot.innerHTML}
                  />
                ) : (
                  <span class="separator">
                    {this.separator || (
                      <scale-icon-navigation-right size={12} color="#6B6B6B" />
                    )}
                  </span>
                );
              return (
                <li>
                  {element.href ? (
                    <a
                      href={element.href}
                      class={classNames(isLast(index) && 'current', 'link')}
                      {...getCurrentAttr(index)}
                    >
                      {element.textContent}
                    </a>
                  ) : (
                    <span
                      class={classNames(isLast(index) && 'current', 'item')}
                    >
                      {element.textContent}
                    </span>
                  )}
                  {isLast(index) ? null : separator}
                </li>
              );
            })}
          </ol>
        </nav>
      </Host>
    );
  }

  getCssClassMap() {
    const name = 'breadcrumb';

    return classNames(name);
  }
}
