/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@scaleds/components-telekom';


export declare interface AppLogo extends Components.AppLogo {}
@ProxyCmp({
  inputs: ['claim', 'claimLang', 'color', 'href']
})
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['claim', 'claimLang', 'color', 'href']
})
export class AppLogo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppMegaMenu extends Components.AppMegaMenu {}
@ProxyCmp({
  inputs: ['activeRouteId', 'hide', 'isActive', 'navigation']
})
@Component({
  selector: 'app-mega-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeRouteId', 'hide', 'isActive', 'navigation']
})
export class AppMegaMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { MainNavigationMobile as IMainNavigationMobile } from '@scaleds/components-telekom/dist/types/components/app-navigation-main-mobile/app-navigation-main-mobile';
export declare interface AppNavigationMainMobile extends Components.AppNavigationMainMobile {}
@ProxyCmp({
  inputs: ['activeRouteId', 'hide', 'navigation']
})
@Component({
  selector: 'app-navigation-main-mobile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeRouteId', 'hide', 'navigation'],
  outputs: ['closeMenu']
})
export class AppNavigationMainMobile {
  /**  */
  closeMenu!: IMainNavigationMobile['closeMenu'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeMenu']);
  }
}


export declare interface AppNavigationSectorMobile extends Components.AppNavigationSectorMobile {}
@ProxyCmp({
  inputs: ['activeSectorId', 'hide', 'navigation']
})
@Component({
  selector: 'app-navigation-sector-mobile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeSectorId', 'hide', 'navigation']
})
export class AppNavigationSectorMobile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleAccordion extends Components.ScaleAccordion {}
@ProxyCmp({
  inputs: ['dependent', 'styles']
})
@Component({
  selector: 'scale-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dependent', 'styles']
})
export class ScaleAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleAlert extends Components.ScaleAlert {}
@ProxyCmp({
  inputs: ['customClass', 'headline', 'icon', 'opened', 'size', 'styles', 'timeout', 'variant'],
  methods: ['open']
})
@Component({
  selector: 'scale-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'headline', 'icon', 'opened', 'size', 'styles', 'timeout', 'variant']
})
export class ScaleAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleAppHeader extends Components.ScaleAppHeader {}
@ProxyCmp({
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'brandTitle', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'scrolled', 'sectorNavigation']
})
@Component({
  selector: 'scale-app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'brandTitle', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'scrolled', 'sectorNavigation']
})
export class ScaleAppHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleAppShell extends Components.ScaleAppShell {}
@ProxyCmp({
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'brandTitle', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'sectorNavigation']
})
@Component({
  selector: 'scale-app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'brandTitle', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'sectorNavigation']
})
export class ScaleAppShell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleBreadcrumb extends Components.ScaleBreadcrumb {}
@ProxyCmp({
  inputs: ['separator', 'styles']
})
@Component({
  selector: 'scale-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['separator', 'styles']
})
export class ScaleBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleButton extends Components.ScaleButton {}
@ProxyCmp({
  inputs: ['ariaLabel', 'customClass', 'disabled', 'focusable', 'href', 'icon', 'iconAfter', 'iconBefore', 'iconSize', 'role', 'size', 'styles', 'target', 'type', 'variant'],
  methods: ['disable', 'enable']
})
@Component({
  selector: 'scale-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'customClass', 'disabled', 'focusable', 'href', 'icon', 'iconAfter', 'iconBefore', 'iconSize', 'role', 'size', 'styles', 'target', 'type', 'variant']
})
export class ScaleButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleCard extends Components.ScaleCard {}
@ProxyCmp({
  inputs: ['customClass', 'disabled', 'href', 'interactive', 'noPadding', 'styles', 'target']
})
@Component({
  selector: 'scale-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'disabled', 'href', 'interactive', 'noPadding', 'styles', 'target']
})
export class ScaleCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleCarousel extends Components.ScaleCarousel {}
@ProxyCmp({
  inputs: ['customClass', 'styles', 'vertical']
})
@Component({
  selector: 'scale-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'styles', 'vertical']
})
export class ScaleCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleChartStackCard extends Components.ScaleChartStackCard {}
@ProxyCmp({
  inputs: ['customClass', 'data', 'heading', 'styles']
})
@Component({
  selector: 'scale-chart-stack-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'data', 'heading', 'styles']
})
export class ScaleChartStackCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Collapsible as ICollapsible } from '@scaleds/components-telekom/dist/types/components/collapsible/collapsible';
export declare interface ScaleCollapsible extends Components.ScaleCollapsible {}
@ProxyCmp({
  inputs: ['isExpanded', 'label', 'styles', 'tag'],
  methods: ['close', 'setFocus']
})
@Component({
  selector: 'scale-collapsible',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isExpanded', 'label', 'styles', 'tag'],
  outputs: ['toggler', 'toggleHead']
})
export class ScaleCollapsible {
  /**  */
  toggler!: ICollapsible['onToggle'];
  /**  */
  toggleHead!: ICollapsible['onPress'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggler', 'toggleHead']);
  }
}


export declare interface ScaleDivider extends Components.ScaleDivider {}
@ProxyCmp({
  inputs: ['customClass', 'size', 'styles', 'vertical']
})
@Component({
  selector: 'scale-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'size', 'styles', 'vertical']
})
export class ScaleDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIcon extends Components.ScaleIcon {}
@ProxyCmp({
  inputs: ['customClass', 'fill', 'focusable', 'name', 'path', 'size', 'stroke', 'styles']
})
@Component({
  selector: 'scale-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'fill', 'focusable', 'name', 'path', 'size', 'stroke', 'styles']
})
export class ScaleIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Input as IInput } from '@scaleds/components-telekom/dist/types/components/input/input';
export declare interface ScaleInput extends Components.ScaleInput {}
@ProxyCmp({
  inputs: ['checked', 'cols', 'counter', 'customClass', 'disabled', 'helperText', 'icon', 'inputId', 'label', 'maxLength', 'minLength', 'multiple', 'name', 'placeholder', 'required', 'resize', 'rows', 'size', 'status', 'styles', 'transparent', 'type', 'value', 'variant', 'visibleSize']
})
@Component({
  selector: 'scale-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'cols', 'counter', 'customClass', 'disabled', 'helperText', 'icon', 'inputId', 'label', 'maxLength', 'minLength', 'multiple', 'name', 'placeholder', 'required', 'resize', 'rows', 'size', 'status', 'styles', 'transparent', 'type', 'value', 'variant', 'visibleSize'],
  outputs: ['scaleInput', 'scaleChange', 'scaleFocus', 'scaleBlur', 'scaleKeyDown']
})
export class ScaleInput {
  /** Emitted when a keyboard input occurred. */
  scaleInput!: IInput['scaleInput'];
  /** Emitted when the value has changed. */
  scaleChange!: IInput['scaleChange'];
  /** Emitted when the input has focus. */
  scaleFocus!: IInput['scaleFocus'];
  /** Emitted when the input loses focus. */
  scaleBlur!: IInput['scaleBlur'];
  /** Emitted on keydown. */
  scaleKeyDown!: IInput['scaleKeyDown'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleInput', 'scaleChange', 'scaleFocus', 'scaleBlur', 'scaleKeyDown']);
  }
}


export declare interface ScaleLink extends Components.ScaleLink {}
@ProxyCmp({
  inputs: ['block', 'customClass', 'disabled', 'href', 'icon', 'iconSize', 'styles', 'target', 'variant']
})
@Component({
  selector: 'scale-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'customClass', 'disabled', 'href', 'icon', 'iconSize', 'styles', 'target', 'variant']
})
export class ScaleLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleList extends Components.ScaleList {}
@ProxyCmp({
  inputs: ['styles', 'variant']
})
@Component({
  selector: 'scale-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['styles', 'variant']
})
export class ScaleList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleListItem extends Components.ScaleListItem {}
@ProxyCmp({
  inputs: ['icon', 'iconSize', 'styles', 'type']
})
@Component({
  selector: 'scale-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'iconSize', 'styles', 'type']
})
export class ScaleListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Modal as IModal } from '@scaleds/components-telekom/dist/types/components/modal/modal';
export declare interface ScaleModal extends Components.ScaleModal {}
@ProxyCmp({
  inputs: ['customClass', 'opened', 'size', 'styles', 'transitions', 'variant']
})
@Component({
  selector: 'scale-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'opened', 'size', 'styles', 'transitions', 'variant'],
  outputs: ['scaleClose']
})
export class ScaleModal {
  /** (optional) Callback fired when the component requests to be closed. */
  scaleClose!: IModal['scaleClose'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleClose']);
  }
}


export declare interface ScaleProgressBar extends Components.ScaleProgressBar {}
@ProxyCmp({
  inputs: ['customClass', 'customColor', 'disabled', 'hasError', 'icon', 'percentage', 'showStatus', 'statusDescription', 'statusInside', 'strokeWidth', 'styles']
})
@Component({
  selector: 'scale-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'customColor', 'disabled', 'hasError', 'icon', 'percentage', 'showStatus', 'statusDescription', 'statusInside', 'strokeWidth', 'styles']
})
export class ScaleProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleSidebarNav extends Components.ScaleSidebarNav {}
@ProxyCmp({
  inputs: ['ariaLabel', 'styles']
})
@Component({
  selector: 'scale-sidebar-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'styles']
})
export class ScaleSidebarNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleSidebarNavCollapsible extends Components.ScaleSidebarNavCollapsible {}
@ProxyCmp({
  inputs: ['bold', 'condensed', 'iconSize', 'isCurrent', 'isExpanded', 'label', 'styles', 'tag']
})
@Component({
  selector: 'scale-sidebar-nav-collapsible',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bold', 'condensed', 'iconSize', 'isCurrent', 'isExpanded', 'label', 'styles', 'tag']
})
export class ScaleSidebarNavCollapsible {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleSidebarNavItem extends Components.ScaleSidebarNavItem {}
@ProxyCmp({
  inputs: ['bold', 'condensed', 'isCurrent', 'styles']
})
@Component({
  selector: 'scale-sidebar-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bold', 'condensed', 'isCurrent', 'styles']
})
export class ScaleSidebarNavItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Slider as ISlider } from '@scaleds/components-telekom/dist/types/components/slider/slider';
export declare interface ScaleSlider extends Components.ScaleSlider {}
@ProxyCmp({
  inputs: ['customClass', 'customColor', 'disabled', 'label', 'max', 'min', 'showValue', 'step', 'styles', 'thumbLarge', 'trackSmall', 'value']
})
@Component({
  selector: 'scale-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'customColor', 'disabled', 'label', 'max', 'min', 'showValue', 'step', 'styles', 'thumbLarge', 'trackSmall', 'value'],
  outputs: ['scaleChange']
})
export class ScaleSlider {
  /**  */
  scaleChange!: ISlider['scaleChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleChange']);
  }
}


export declare interface ScaleSsrSlotFix extends Components.ScaleSsrSlotFix {}

@Component({
  selector: 'scale-ssr-slot-fix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ScaleSsrSlotFix {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Switch as ISwitch } from '@scaleds/components-telekom/dist/types/components/switch/switch';
export declare interface ScaleSwitch extends Components.ScaleSwitch {}
@ProxyCmp({
  inputs: ['checked', 'customClass', 'disabled', 'inputId', 'styles']
})
@Component({
  selector: 'scale-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'customClass', 'disabled', 'inputId', 'styles'],
  outputs: ['scaleChange']
})
export class ScaleSwitch {
  /** Emitted when the switch was clicked */
  scaleChange!: ISwitch['scaleChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleChange']);
  }
}

import { TabHeader as ITabHeader } from '@scaleds/components-telekom/dist/types/components/tab-header/tab-header';
export declare interface ScaleTabHeader extends Components.ScaleTabHeader {}
@ProxyCmp({
  inputs: ['icon', 'iconOnly', 'iconSize', 'label', 'selected', 'styles']
})
@Component({
  selector: 'scale-tab-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'iconOnly', 'iconSize', 'label', 'selected', 'styles'],
  outputs: ['tabclick']
})
export class ScaleTabHeader {
  /**  */
  tabclick!: ITabHeader['tabClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabclick']);
  }
}


export declare interface ScaleTabNav extends Components.ScaleTabNav {}
@ProxyCmp({
  inputs: ['ariaLabel', 'styles']
})
@Component({
  selector: 'scale-tab-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'styles']
})
export class ScaleTabNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleTabPanel extends Components.ScaleTabPanel {}
@ProxyCmp({
  inputs: ['ariaLabel', 'identifier', 'styles']
})
@Component({
  selector: 'scale-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'identifier', 'styles']
})
export class ScaleTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleTable extends Components.ScaleTable {}
@ProxyCmp({
  inputs: ['customClass', 'showSort', 'size', 'styles']
})
@Component({
  selector: 'scale-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'showSort', 'size', 'styles']
})
export class ScaleTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Tag as ITag } from '@scaleds/components-telekom/dist/types/components/tag/tag';
export declare interface ScaleTag extends Components.ScaleTag {}
@ProxyCmp({
  inputs: ['customClass', 'disabled', 'dismissable', 'href', 'size', 'styles', 'target', 'variant']
})
@Component({
  selector: 'scale-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'disabled', 'dismissable', 'href', 'size', 'styles', 'target', 'variant'],
  outputs: ['scaleClose']
})
export class ScaleTag {
  /** (optional) Close icon click event */
  scaleClose!: ITag['scaleClose'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleClose']);
  }
}


export declare interface ScaleText extends Components.ScaleText {}
@ProxyCmp({
  inputs: ['customClass', 'styles', 'tag', 'variant']
})
@Component({
  selector: 'scale-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'styles', 'tag', 'variant']
})
export class ScaleText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleToast extends Components.ScaleToast {}
@ProxyCmp({
  inputs: ['animated', 'autoHide', 'customClass', 'fadeDuration', 'opened', 'positionRight', 'positionTop', 'size', 'styles', 'time', 'variant'],
  methods: ['open']
})
@Component({
  selector: 'scale-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'autoHide', 'customClass', 'fadeDuration', 'opened', 'positionRight', 'positionTop', 'size', 'styles', 'time', 'variant']
})
export class ScaleToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
