import { Component, h, State, Element, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';
import { CssClassMap } from '../../utils/utils';

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

  tmpDefaultIcon(size: number) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{ display: 'inline-flex' }}
      >
        <path
          d="M7.4 19.95c-.25-.35-.2-.8.1-1.05l8.8-6.9-8.75-6.9a.691.691 0 01-.1-1.05c.25-.3.75-.4 1.05-.1L18.7 12 8.45 20.1c-.3.25-.8.2-1.05-.15z"
          fill-rule="evenodd"
          fill="#6B6B6B"
        ></path>
      </svg>
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

  getCssClassMap(): CssClassMap {
    const name = 'breadcrumb';

    return classNames(name);
  }
}
