import {
  Component,
  h,
  Prop,
  Host,
  State,
  Listen,
  Element,
} from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import classNames from 'classnames';

@Component({
  tag: 'scale-app-shell',
  styleUrl: 'app-shell.css',
  shadow: true,
})
export class Shell {
  @Element() hostElement: HTMLStencilElement;
  @Prop() portalName?: string = '';
  @Prop() claimLang?: string = 'de';
  @Prop() logoHref?: string;
  @Prop() logoTitle?: string;
  @Prop() logoClick?: any;
  @Prop() mainNavigation?: any = [];
  @Prop() iconNavigation?: any = [];
  @Prop() sectorNavigation?: any = [];
  @Prop() addonNavigation?: any = [];
  @Prop() activeRouteId?: string = '';
  @Prop() activeSectorId?: string = '';
  @State() scrolled: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;
  hasSlotHeader: boolean;

  @Listen('scroll', { target: 'window' })
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
  }

  componentWillLoad() {
    this.hasSlotHeader = !!this.hostElement.querySelector('[slot="header"]');
  }
  componentWillUpdate() {}
  disconnectedCallback() {}

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class={this.getCssClassMap()}>
          {this.hasSlotHeader ? (
            <slot name="header"></slot>
          ) : (
            <scale-app-header
              logoClick={this.logoClick}
              logoHref={this.logoHref}
              logoTitle={this.logoTitle}
              portalName={this.portalName}
              mainNavigation={this.mainNavigation}
              iconNavigation={this.iconNavigation}
              sectorNavigation={this.sectorNavigation}
              addonNavigation={this.addonNavigation}
              activeRouteId={this.activeRouteId}
              activeSectorId={this.activeSectorId}
              claimLang={this.claimLang}
            ></scale-app-header>
          )}
          <main class="content">
            <slot></slot>
          </main>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames('shell', this.scrolled && 'shell--sticky');
  }
}
