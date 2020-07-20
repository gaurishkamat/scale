import {
  Element,
  Component,
  h,
  Prop,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tab-header.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-tab-header',
  shadow: false,
})
export class TabHeader implements Base {
  @Element() el: HTMLElement;
  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('TabHeader', styles) stylesheet: StyleSheet;
  @Prop() label: string = 'Label';
  @Prop() ariaLabel?: string;
  @Prop() identifier?: string;
  @Prop() selected?: boolean;
  @Prop() icon?: string;
  @Prop() iconSize?: number = 16;

  @Event({ eventName: 'tabclick' }) tabClick: EventEmitter;
  componentWillLoad() {}
  componentDidUnload() {}
  componentWillUpdate() {}

  handleClick() {
    this.tabClick.emit();
  }

  render() {
    const { classes } = this.stylesheet;
    const wrapperClassMap = classNames(
      classes['tab-header'],
      this.selected && classes['tab-']
    );

    return (
      <Host
        style={{
          backgroundColor: this.selected ? '' : '#f4f4f4',
          margin: '0 4px',
          borderRadius: '8px 8px 0 0',
        }}
        onclick={this.handleClick.bind(this)}
        role="tab"
        tabindex="0"
      >
        <div
          class={wrapperClassMap}
          style={{ background: this.selected ? 'none' : '' }}
        >
          {this.icon ? (
            <scale-icon
              style={{ marginRight: '8px' }}
              path={this.icon}
              size={this.iconSize}
            />
          ) : null}
          <span style={{ color: this.selected ? '#E20074' : '' }}>
            {this.label}
          </span>
        </div>

        <div
          style={{
            width: '100%',
            height: '4px',
            transform: 'translateY(1px)',
            backgroundColor: this.selected ? '#E20074' : 'transparent',
            borderRadius: '8px 8px 0 0',
          }}
        ></div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(classes['tab-header']);
  }
}
