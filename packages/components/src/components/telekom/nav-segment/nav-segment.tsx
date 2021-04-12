import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'scale-nav-segment',
  styleUrl: './nav-segment.css',
})
export class NavSegment {
  /** (optional) if this item is active */
  @Prop() isActive?: boolean = false;
  /** (optional) href value */
  @Prop() href?: string = 'javascript:void(0);';

  render() {
    return (
      <li class={this.getCssClassMap()}>
        <a
          class={classNames(
            'segment-navigation__item-link',
            this.isActive && 'active'
          )}
          href={this.href}
          onFocus={() => {
            window.scrollTo({ top: 0 });
          }}
          aria-current={this.isActive ? 'true' : 'false'}
        >
          <slot></slot>
          {this.isActive && <span class="sr-only">active</span>}
        </a>
      </li>
    );
  }

  getCssClassMap() {
    return classNames('segment-navigation__item');
  }
}
