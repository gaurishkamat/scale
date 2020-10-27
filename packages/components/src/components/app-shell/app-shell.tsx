import { Component, h, Prop, Host, State, Listen } from '@stencil/core';
import classNames from 'classnames';
import { CssClassMap } from '../../utils/utils';

const levelEnhancer = (data, i = 0) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch (error) {
    parsedData = data;
  }
  return parsedData.reduce((previous, current) => {
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
};

@Component({
  tag: 'scale-app-shell',
  styleUrl: 'app-shell.css',
  shadow: true,
})
export class Shell {
  @Prop() brandTitle?: string = '';
  @Prop() mainNavigation?: any = [];
  @Prop() iconNavigation?: any = [];
  @Prop() sectorNavigation?: any = [];
  @Prop() addonNavigation?: any = [];
  @Prop() customClass?: string = '';
  @Prop() activeRouteId?: string = '';
  @Prop() activeSectorId?: string = '';
  @State() scrolled: boolean = false;

  @Listen('scroll', { target: 'window' })
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
  }

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidUnload() {}

  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <scale-app-header
            scrolled={this.scrolled}
            brandTitle={this.brandTitle}
            mainNavigation={levelEnhancer(this.mainNavigation)}
            iconNavigation={levelEnhancer(this.iconNavigation)}
            sectorNavigation={levelEnhancer(this.sectorNavigation)}
            addonNavigation={levelEnhancer(this.addonNavigation)}
            activeRouteId={this.activeRouteId}
            activeSectorId={this.activeSectorId}
          ></scale-app-header>
          <main class="content">
            <slot></slot>
          </main>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return classNames(
      'shell',
      this.customClass && this.customClass,
      this.scrolled && 'sticky'
    );
  }
}
