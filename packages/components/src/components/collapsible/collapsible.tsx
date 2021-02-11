import {
  Component,
  h,
  Prop,
  Host,
  Event,
  State,
  Element,
  EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';
import Base from '../../utils/base-interface';

export interface CollapsibleEventDetail {
  expanded: boolean;
}

const name = 'collapsible';
let i = 0;

@Component({
  tag: 'scale-collapsible',
  styleUrl: './collapsible.css',
  shadow: true,
})
export class Collapsible implements Base {
  headingElement: HTMLElement;
  headingId: string;
  panelId: string;

  @Element() el: HTMLElement;

  /** Set to `true` to expand */
  @Prop({ mutable: true, reflect: true }) expanded: boolean;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;

  /** Default aria-level for heading */
  @State() level: number = 2;

  /** Emitted so parent <scale-accordion> knows about it */
  @Event() scaleExpand: EventEmitter<CollapsibleEventDetail>;

  componentWillUpdate() {}
  disconnectedCallback() {}

  componentWillLoad() {
    const j = i++;
    this.headingId = 'collapsable-heading-' + j;
    this.panelId = 'collapsable-panel-' + j;
  }

  componentDidLoad() {
    this.setHeadingFromLightDOM();
  }

  /**
   * In this method we:
   * - query the first element from the light DOM, it should be a heading (e.g. h2)
   * - take its content and place it into our own heading element
   * - set aria-level to the level of that provided in the light DOM
   * - remove the original heading
   * @see https://inclusive-components.design/collapsible-sections/
   */
  setHeadingFromLightDOM() {
    const lightHeading = this.el.querySelector(':first-child');
    if (lightHeading == null) {
      return;
    }
    const level = parseInt(lightHeading.tagName.substr(1), 10);

    if (!level) {
      // tslint:disable-next-line
      console.warn(
        'The first element inside each <scale-collapsible> should be a heading of an appropriate level.'
      );
    }
    if (level !== this.level) {
      this.level = level;
    }
    this.headingElement.innerHTML = lightHeading.innerHTML;
    lightHeading.parentNode.removeChild(lightHeading);
  }

  handleClick = () => {
    this.expanded = !this.expanded;
    this.scaleExpand.emit({ expanded: this.expanded });
  };

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()}>
          <h2 aria-level={this.level} class={`${name}__heading`}>
            <button
              id={this.headingId}
              class={`${name}__button`}
              onClick={this.handleClick}
              aria-expanded={this.expanded ? 'true' : 'false'}
              aria-controls={this.panelId}
            >
              <scale-icon-navigation-collapse-down
                size={16}
                decorative
                class={`${name}__icon`}
              />
              <span ref={el => (this.headingElement = el)} />
            </button>
          </h2>
          <div
            id={this.panelId}
            role="region"
            aria-labelledby={this.headingId}
            hidden={!this.expanded}
            class={`${name}__content`}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(name, this.expanded && `${name}--expanded`);
  }
}
