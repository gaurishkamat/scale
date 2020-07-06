import { Component, h, Prop, Host, State, Listen } from '@stencil/core';
import classNames from 'classnames';
import { StyleSheet } from 'jss';
import { CssClassMap } from '../../utils/utils';
import { CssInJs } from '../../utils/css-in-js';
import Base from '../../utils/base-interface';
import { styles } from './app-shell.styles';

const levelEnhancer = (data, i = 0) =>
  data.reduce((previous, current) => {
    // console.log('reducing');
    const reducer = (prev, curr, level) => [...prev, { ...curr, level }];
    if (current.children) {
      const enhancedCurr = {
        ...current,
        children: levelEnhancer(current.children, i + 1),
      };
      return reducer(previous, enhancedCurr, i + 1);
    }
    return reducer(previous, current, i + 1);
  }, []);

@Component({
  tag: 'scale-app-shell',
})
export class Shell implements Base {
  @Prop() mainNavigation?: any[] = [];
  @Prop() iconNavigation?: any[] = [];
  @Prop() sectorNavigation?: any[] = [];
  @Prop() addonNavigation?: any[] = [];
  @Prop() customClass?: string = '';
  @Prop() styles?: StyleSheet;
  @CssInJs('AppShell', styles)
  stylesheet: StyleSheet;

  @State() scrolled: boolean = false;

  @Listen('scroll', { target: 'window' })
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
  }

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidUnload() {}

  render() {
    const { classes } = this.stylesheet;
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()}>
          <scale-app-header
            scrolled={this.scrolled}
            mainNavigation={levelEnhancer(this.mainNavigation)}
            iconNavigation={levelEnhancer(this.iconNavigation)}
            sectorNavigation={levelEnhancer(this.sectorNavigation)}
            addonNavigation={levelEnhancer(this.addonNavigation)}
          ></scale-app-header>
          <div class={classes.content}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.shell,
      this.customClass && this.customClass,
      this.scrolled && 'sticky'
    );
  }
}
