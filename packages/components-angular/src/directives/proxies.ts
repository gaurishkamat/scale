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
  inputs: ['dependent', 'expanded', 'styles']
})
@Component({
  selector: 'scale-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dependent', 'expanded', 'styles']
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


export declare interface ScaleAppFooter extends Components.ScaleAppFooter {}
@ProxyCmp({
  inputs: ['claimLang', 'customClass', 'footerNavigation', 'variant']
})
@Component({
  selector: 'scale-app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['claimLang', 'customClass', 'footerNavigation', 'variant']
})
export class ScaleAppFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleAppHeader extends Components.ScaleAppHeader {}
@ProxyCmp({
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'portalName', 'scrolled', 'sectorNavigation']
})
@Component({
  selector: 'scale-app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'portalName', 'scrolled', 'sectorNavigation']
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
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'brandTitle', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'portalName', 'sectorNavigation']
})
@Component({
  selector: 'scale-app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeRouteId', 'activeSectorId', 'addonNavigation', 'brandTitle', 'claimLang', 'customClass', 'iconNavigation', 'mainNavigation', 'portalName', 'sectorNavigation']
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
  inputs: ['ariaLabel', 'customClass', 'disabled', 'href', 'iconOnly', 'iconPosition', 'size', 'styles', 'target', 'type', 'variant']
})
@Component({
  selector: 'scale-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'customClass', 'disabled', 'href', 'iconOnly', 'iconPosition', 'size', 'styles', 'target', 'type', 'variant']
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
  inputs: ['customClass', 'label', 'rel', 'styles', 'target', 'to']
})
@Component({
  selector: 'scale-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'label', 'rel', 'styles', 'target', 'to']
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
  inputs: ['expanded', 'styles']
})
@Component({
  selector: 'scale-collapsible',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'styles'],
  outputs: ['scaleExpand']
})
export class ScaleCollapsible {
  /** Emitted so parent <scale-accordion> knows about it */
  scaleExpand!: ICollapsible['scaleExpand'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleExpand']);
  }
}

import { DatePicker as IDatePicker } from '@scaleds/components-telekom/dist/types/components/date-picker/date-picker';
export declare interface ScaleDatePicker extends Components.ScaleDatePicker {}
@ProxyCmp({
  inputs: ['dateAdapter', 'direction', 'disabled', 'firstDayOfWeek', 'helperText', 'identifier', 'label', 'localization', 'max', 'min', 'name', 'required', 'role', 'size', 'status', 'value'],
  methods: ['setFocus', 'show', 'hide']
})
@Component({
  selector: 'scale-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dateAdapter', 'direction', 'disabled', 'firstDayOfWeek', 'helperText', 'identifier', 'label', 'localization', 'max', 'min', 'name', 'required', 'role', 'size', 'status', 'value'],
  outputs: ['scaleChange', 'scaleBlur', 'scaleFocus']
})
export class ScaleDatePicker {
  /** Event emitted when a date is selected. */
  scaleChange!: IDatePicker['scaleChange'];
  /** Event emitted the date picker input is blurred. */
  scaleBlur!: IDatePicker['scaleBlur'];
  /** Event emitted the date picker input is focused. */
  scaleFocus!: IDatePicker['scaleFocus'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleChange', 'scaleBlur', 'scaleFocus']);
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
  inputs: ['accessibilityTitle', 'customClass', 'decorative', 'fill', 'focusable', 'name', 'path', 'size', 'stroke', 'styles']
})
@Component({
  selector: 'scale-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'customClass', 'decorative', 'fill', 'focusable', 'name', 'path', 'size', 'stroke', 'styles']
})
export class ScaleIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionAdd extends Components.ScaleIconActionAdd {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionAddCard extends Components.ScaleIconActionAddCard {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-add-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionAddCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionAutoLogin extends Components.ScaleIconActionAutoLogin {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-auto-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionAutoLogin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionBackspace extends Components.ScaleIconActionBackspace {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-backspace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionBackspace {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionChangelog extends Components.ScaleIconActionChangelog {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-changelog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionChangelog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionCircleAdd extends Components.ScaleIconActionCircleAdd {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-circle-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionCircleAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionCircleClose extends Components.ScaleIconActionCircleClose {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-circle-close',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionCircleClose {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionClose extends Components.ScaleIconActionClose {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-close',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionClose {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionCopyPaste extends Components.ScaleIconActionCopyPaste {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-copy-paste',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionCopyPaste {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionCutPaste extends Components.ScaleIconActionCutPaste {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-cut-paste',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionCutPaste {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionDisabledMicrophone extends Components.ScaleIconActionDisabledMicrophone {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-disabled-microphone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionDisabledMicrophone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionDownload extends Components.ScaleIconActionDownload {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionDownload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionDragAndDrop extends Components.ScaleIconActionDragAndDrop {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-drag-and-drop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionDragAndDrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionEdit extends Components.ScaleIconActionEdit {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionEdit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionFastForward extends Components.ScaleIconActionFastForward {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-fast-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionFastForward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionFavorite extends Components.ScaleIconActionFavorite {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-favorite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionFavorite {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionFilter extends Components.ScaleIconActionFilter {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionForward extends Components.ScaleIconActionForward {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionForward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionFullScreen extends Components.ScaleIconActionFullScreen {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-full-screen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionFullScreen {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionHidePassword extends Components.ScaleIconActionHidePassword {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-hide-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionHidePassword {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionInstall extends Components.ScaleIconActionInstall {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-install',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionInstall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionLink extends Components.ScaleIconActionLink {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionLogout extends Components.ScaleIconActionLogout {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-logout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionLogout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionLoop extends Components.ScaleIconActionLoop {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-loop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionLoop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionMenu extends Components.ScaleIconActionMenu {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionMicrophone extends Components.ScaleIconActionMicrophone {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-microphone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionMicrophone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionMinimizeScreen extends Components.ScaleIconActionMinimizeScreen {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-minimize-screen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionMinimizeScreen {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionMore extends Components.ScaleIconActionMore {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-more',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionMore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionMove extends Components.ScaleIconActionMove {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-move',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionMove {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionMute extends Components.ScaleIconActionMute {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-mute',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionMute {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionNotification extends Components.ScaleIconActionNotification {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionPause extends Components.ScaleIconActionPause {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-pause',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionPause {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionPin extends Components.ScaleIconActionPin {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionPin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionPlay extends Components.ScaleIconActionPlay {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-play',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionPlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionPopUpWindow extends Components.ScaleIconActionPopUpWindow {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-pop-up-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionPopUpWindow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionPrint extends Components.ScaleIconActionPrint {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-print',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionPrint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionRandom extends Components.ScaleIconActionRandom {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-random',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionRandom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionRefresh extends Components.ScaleIconActionRefresh {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-refresh',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionRefresh {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionRemove extends Components.ScaleIconActionRemove {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-remove',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionRemove {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionRestart extends Components.ScaleIconActionRestart {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-restart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionRestart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionSearch extends Components.ScaleIconActionSearch {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionShoppingCart extends Components.ScaleIconActionShoppingCart {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-shopping-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionShoppingCart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionShowPassword extends Components.ScaleIconActionShowPassword {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-show-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionShowPassword {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionSort extends Components.ScaleIconActionSort {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-sort',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionSort {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionSoundOn extends Components.ScaleIconActionSoundOn {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-sound-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionSoundOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionStreamOn extends Components.ScaleIconActionStreamOn {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-stream-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionStreamOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionSuccess extends Components.ScaleIconActionSuccess {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-success',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionSuccess {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionThumbsDown extends Components.ScaleIconActionThumbsDown {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-thumbs-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionThumbsDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionThumbsUp extends Components.ScaleIconActionThumbsUp {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-thumbs-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionThumbsUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionTilesAdd extends Components.ScaleIconActionTilesAdd {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-tiles-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionTilesAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionUpload extends Components.ScaleIconActionUpload {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionVolumeDown extends Components.ScaleIconActionVolumeDown {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-volume-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionVolumeDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionVolumeUp extends Components.ScaleIconActionVolumeUp {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-volume-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionVolumeUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionZoomIn extends Components.ScaleIconActionZoomIn {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-zoom-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionZoomIn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconActionZoomOut extends Components.ScaleIconActionZoomOut {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-action-zoom-out',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconActionZoomOut {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertCompliance extends Components.ScaleIconAlertCompliance {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-compliance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertCompliance {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertError extends Components.ScaleIconAlertError {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertError {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertHelp extends Components.ScaleIconAlertHelp {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-help',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertHelp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertImprintDataprivacy extends Components.ScaleIconAlertImprintDataprivacy {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-imprint-dataprivacy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertImprintDataprivacy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertInformation extends Components.ScaleIconAlertInformation {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-information',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertInformation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertLegal extends Components.ScaleIconAlertLegal {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-legal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertLegal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertSecurity extends Components.ScaleIconAlertSecurity {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-security',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertSecurity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconAlertWarning extends Components.ScaleIconAlertWarning {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-alert-warning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconAlertWarning {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationCallIncoming extends Components.ScaleIconCommunicationCallIncoming {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-call-incoming',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationCallIncoming {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationCallOutgoing extends Components.ScaleIconCommunicationCallOutgoing {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-call-outgoing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationCallOutgoing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationChat extends Components.ScaleIconCommunicationChat {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-chat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationChat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationEmail extends Components.ScaleIconCommunicationEmail {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-email',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationEmail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationEndCall extends Components.ScaleIconCommunicationEndCall {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-end-call',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationEndCall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationFeedback extends Components.ScaleIconCommunicationFeedback {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-feedback',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationFeedback {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationMessage extends Components.ScaleIconCommunicationMessage {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationPhoneNumber extends Components.ScaleIconCommunicationPhoneNumber {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-phone-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationPhoneNumber {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationRecipient extends Components.ScaleIconCommunicationRecipient {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-recipient',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationRecipient {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconCommunicationVoiceMessage extends Components.ScaleIconCommunicationVoiceMessage {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-communication-voice-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconCommunicationVoiceMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentAchievement extends Components.ScaleIconContentAchievement {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-achievement',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentAchievement {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentApplications extends Components.ScaleIconContentApplications {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-applications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentApplications {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentBiometric extends Components.ScaleIconContentBiometric {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-biometric',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentBiometric {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentBookmark extends Components.ScaleIconContentBookmark {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-bookmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentBookmark {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentCalendar extends Components.ScaleIconContentCalendar {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentCalendar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentClipboard extends Components.ScaleIconContentClipboard {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-clipboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentClipboard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentClock extends Components.ScaleIconContentClock {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentClock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentCreditCard extends Components.ScaleIconContentCreditCard {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-credit-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentCreditCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentDelivery extends Components.ScaleIconContentDelivery {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-delivery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentDelivery {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentDigitalBanking extends Components.ScaleIconContentDigitalBanking {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-digital-banking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentDigitalBanking {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentDigitalMedia extends Components.ScaleIconContentDigitalMedia {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-digital-media',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentDigitalMedia {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentDraftFile extends Components.ScaleIconContentDraftFile {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-draft-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentDraftFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentESim extends Components.ScaleIconContentESim {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-e-sim',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentESim {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentEu extends Components.ScaleIconContentEu {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-eu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentEu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentFeatures extends Components.ScaleIconContentFeatures {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentFeatures {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentFlexibleTariffs extends Components.ScaleIconContentFlexibleTariffs {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-flexible-tariffs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentFlexibleTariffs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentHeart extends Components.ScaleIconContentHeart {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-heart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentHeart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentHistory extends Components.ScaleIconContentHistory {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentHistory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentInternational extends Components.ScaleIconContentInternational {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-international',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentInternational {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentInternationalSms extends Components.ScaleIconContentInternationalSms {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-international-sms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentInternationalSms {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentInterview extends Components.ScaleIconContentInterview {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-interview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentInterview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentKey extends Components.ScaleIconContentKey {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-key',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentKey {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentLock extends Components.ScaleIconContentLock {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentMediaFolder extends Components.ScaleIconContentMediaFolder {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-media-folder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentMediaFolder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentMoneyAt extends Components.ScaleIconContentMoneyAt {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-money-at',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentMoneyAt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentMusic extends Components.ScaleIconContentMusic {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-music',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentMusic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentNews extends Components.ScaleIconContentNews {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentNews {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentPrepaidActivate extends Components.ScaleIconContentPrepaidActivate {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-prepaid-activate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentPrepaidActivate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentPriceTag extends Components.ScaleIconContentPriceTag {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-price-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentPriceTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentRss extends Components.ScaleIconContentRss {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-rss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentRss {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentShop extends Components.ScaleIconContentShop {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-shop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentShop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentSignal extends Components.ScaleIconContentSignal {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-signal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentSignal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentSimCard extends Components.ScaleIconContentSimCard {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-sim-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentSimCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentSmile extends Components.ScaleIconContentSmile {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-smile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentSmile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentTariffs extends Components.ScaleIconContentTariffs {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-tariffs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentTariffs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentTransport extends Components.ScaleIconContentTransport {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-transport',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentTransport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentUnlock extends Components.ScaleIconContentUnlock {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-unlock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentUnlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentVoucher extends Components.ScaleIconContentVoucher {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-voucher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentVoucher {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconContentWallet extends Components.ScaleIconContentWallet {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-content-wallet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconContentWallet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceAddDevice extends Components.ScaleIconDeviceAddDevice {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-add-device',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceAddDevice {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceCamera extends Components.ScaleIconDeviceCamera {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceChangeCamera extends Components.ScaleIconDeviceChangeCamera {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-change-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceChangeCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceComputer extends Components.ScaleIconDeviceComputer {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-computer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceComputer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceDevicePhone extends Components.ScaleIconDeviceDevicePhone {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-device-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceDevicePhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceDeviceRouter extends Components.ScaleIconDeviceDeviceRouter {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-device-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceDeviceRouter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceDeviceTv extends Components.ScaleIconDeviceDeviceTv {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-device-tv',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceDeviceTv {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceDeviceWatch extends Components.ScaleIconDeviceDeviceWatch {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-device-watch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceDeviceWatch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceFixedLineServices extends Components.ScaleIconDeviceFixedLineServices {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-fixed-line-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceFixedLineServices {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceMediaReceiver extends Components.ScaleIconDeviceMediaReceiver {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-media-receiver',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceMediaReceiver {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceMobileDevicesCombination extends Components.ScaleIconDeviceMobileDevicesCombination {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-mobile-devices-combination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceMobileDevicesCombination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceMobileEquipment extends Components.ScaleIconDeviceMobileEquipment {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-mobile-equipment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceMobileEquipment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceMobilePhoneInsurance extends Components.ScaleIconDeviceMobilePhoneInsurance {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-mobile-phone-insurance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceMobilePhoneInsurance {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceMobileServices extends Components.ScaleIconDeviceMobileServices {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-mobile-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceMobileServices {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceNoCamera extends Components.ScaleIconDeviceNoCamera {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-no-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceNoCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDevicePhotoCamera extends Components.ScaleIconDevicePhotoCamera {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-photo-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDevicePhotoCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceRemoteController extends Components.ScaleIconDeviceRemoteController {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-remote-controller',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceRemoteController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceReplacementMobilephone extends Components.ScaleIconDeviceReplacementMobilephone {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-replacement-mobilephone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceReplacementMobilephone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceScreenRotate extends Components.ScaleIconDeviceScreenRotate {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-screen-rotate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceScreenRotate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceSmartSpeaker extends Components.ScaleIconDeviceSmartSpeaker {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-smart-speaker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceSmartSpeaker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconDeviceTvAndMobile extends Components.ScaleIconDeviceTvAndMobile {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-device-tv-and-mobile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconDeviceTvAndMobile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconHomeHome extends Components.ScaleIconHomeHome {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconHomeHome {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconHomeInternetAtHome extends Components.ScaleIconHomeInternetAtHome {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-home-internet-at-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconHomeInternetAtHome {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconHomeIot extends Components.ScaleIconHomeIot {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-home-iot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconHomeIot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconHomeNoWifi extends Components.ScaleIconHomeNoWifi {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-home-no-wifi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconHomeNoWifi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconHomeSmarthome extends Components.ScaleIconHomeSmarthome {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-home-smarthome',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconHomeSmarthome {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconHomeWifi extends Components.ScaleIconHomeWifi {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-home-wifi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconHomeWifi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationCircleTopUp extends Components.ScaleIconNavigationCircleTopUp {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-circle-top-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationCircleTopUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationCollapseDown extends Components.ScaleIconNavigationCollapseDown {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-collapse-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationCollapseDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationCollapseUp extends Components.ScaleIconNavigationCollapseUp {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-collapse-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationCollapseUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationExternalLink extends Components.ScaleIconNavigationExternalLink {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-external-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationExternalLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationInternalLink extends Components.ScaleIconNavigationInternalLink {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-internal-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationInternalLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationLeft extends Components.ScaleIconNavigationLeft {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationLocation extends Components.ScaleIconNavigationLocation {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationLocation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationMyLocation extends Components.ScaleIconNavigationMyLocation {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-my-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationMyLocation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationRight extends Components.ScaleIconNavigationRight {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationStart extends Components.ScaleIconNavigationStart {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-start',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationStart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconNavigationTopUp extends Components.ScaleIconNavigationTopUp {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-navigation-top-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconNavigationTopUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconProcessOrderStatus extends Components.ScaleIconProcessOrderStatus {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-process-order-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconProcessOrderStatus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconProcessProcessing extends Components.ScaleIconProcessProcessing {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-process-processing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconProcessProcessing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconServiceDevicesService extends Components.ScaleIconServiceDevicesService {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-service-devices-service',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconServiceDevicesService {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconServiceMaintanance extends Components.ScaleIconServiceMaintanance {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-service-maintanance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconServiceMaintanance {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconServiceServices extends Components.ScaleIconServiceServices {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-service-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconServiceServices {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconServiceSettings extends Components.ScaleIconServiceSettings {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-service-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconServiceSettings {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconServiceSupport extends Components.ScaleIconServiceSupport {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-service-support',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconServiceSupport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconT_productMagentaCloud extends Components.ScaleIconT_productMagentaCloud {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-t_product-magenta-cloud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconT_productMagentaCloud {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconT_productMagentaTv extends Components.ScaleIconT_productMagentaTv {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-t_product-magenta-tv',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconT_productMagentaTv {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconT_productMagentaone extends Components.ScaleIconT_productMagentaone {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-t_product-magentaone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconT_productMagentaone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconT_productMeasureInternetSpeed extends Components.ScaleIconT_productMeasureInternetSpeed {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-t_product-measure-internet-speed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconT_productMeasureInternetSpeed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconT_productSeamlessConnectivity extends Components.ScaleIconT_productSeamlessConnectivity {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-t_product-seamless-connectivity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconT_productSeamlessConnectivity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconT_productTelekomShopB extends Components.ScaleIconT_productTelekomShopB {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-t_product-telekom-shop-b',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconT_productTelekomShopB {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconT_productUsage extends Components.ScaleIconT_productUsage {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-t_product-usage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconT_productUsage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileAnalytics extends Components.ScaleIconUser_fileAnalytics {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-analytics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileAnalytics {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileAttachment extends Components.ScaleIconUser_fileAttachment {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-attachment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileAttachment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileAudioFile extends Components.ScaleIconUser_fileAudioFile {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-audio-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileAudioFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileBilling extends Components.ScaleIconUser_fileBilling {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-billing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileBilling {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileBussinesUsers extends Components.ScaleIconUser_fileBussinesUsers {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-bussines-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileBussinesUsers {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileCommunities extends Components.ScaleIconUser_fileCommunities {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-communities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileCommunities {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileContacts extends Components.ScaleIconUser_fileContacts {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileContacts {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileContracts extends Components.ScaleIconUser_fileContracts {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-contracts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileContracts {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileFamilies extends Components.ScaleIconUser_fileFamilies {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-families',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileFamilies {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileHandshake extends Components.ScaleIconUser_fileHandshake {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-handshake',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileHandshake {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileIdCard extends Components.ScaleIconUser_fileIdCard {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-id-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileIdCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileImageFile extends Components.ScaleIconUser_fileImageFile {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-image-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileImageFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileLogout extends Components.ScaleIconUser_fileLogout {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-logout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileLogout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_filePdfFile extends Components.ScaleIconUser_filePdfFile {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-pdf-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_filePdfFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileSwitchUsers extends Components.ScaleIconUser_fileSwitchUsers {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-switch-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileSwitchUsers {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileUser extends Components.ScaleIconUser_fileUser {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileUser {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleIconUser_fileVideos extends Components.ScaleIconUser_fileVideos {}
@ProxyCmp({
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
@Component({
  selector: 'scale-icon-user_file-videos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accessibilityTitle', 'color', 'decorative', 'selected', 'size']
})
export class ScaleIconUser_fileVideos {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Input as IInput } from '@scaleds/components-telekom/dist/types/components/input/input';
export declare interface ScaleInput extends Components.ScaleInput {}
@ProxyCmp({
  inputs: ['checked', 'cols', 'controlled', 'counter', 'customClass', 'disabled', 'helperText', 'icon', 'inputId', 'label', 'maxLength', 'minLength', 'multiple', 'name', 'placeholder', 'required', 'resize', 'rows', 'size', 'status', 'styles', 'transparent', 'type', 'value', 'variant', 'visibleSize']
})
@Component({
  selector: 'scale-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'cols', 'controlled', 'counter', 'customClass', 'disabled', 'helperText', 'icon', 'inputId', 'label', 'maxLength', 'minLength', 'multiple', 'name', 'placeholder', 'required', 'resize', 'rows', 'size', 'status', 'styles', 'transparent', 'type', 'value', 'variant', 'visibleSize'],
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
  inputs: ['block', 'customClass', 'disabled', 'href', 'icon', 'iconAccessibilityTitle', 'iconSize', 'styles', 'target', 'variant']
})
@Component({
  selector: 'scale-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'customClass', 'disabled', 'href', 'icon', 'iconAccessibilityTitle', 'iconSize', 'styles', 'target', 'variant']
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
  inputs: ['ordered', 'styles']
})
@Component({
  selector: 'scale-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ordered', 'styles']
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
  inputs: ['index', 'marker', 'ordered', 'styles']
})
@Component({
  selector: 'scale-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['index', 'marker', 'ordered', 'styles']
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
  inputs: ['alignActions', 'closeButtonLabel', 'customClass', 'duration', 'heading', 'opened', 'size', 'styles', 'variant']
})
@Component({
  selector: 'scale-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignActions', 'closeButtonLabel', 'customClass', 'duration', 'heading', 'opened', 'size', 'styles', 'variant'],
  outputs: ['scaleOpen', 'scaleClose']
})
export class ScaleModal {
  /**  */
  scaleOpen!: IModal['scaleOpen'];
  /**  */
  scaleClose!: IModal['scaleClose'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scaleOpen', 'scaleClose']);
  }
}


export declare interface ScaleProgressBar extends Components.ScaleProgressBar {}
@ProxyCmp({
  inputs: ['busy', 'customClass', 'customColor', 'disabled', 'hasError', 'icon', 'label', 'percentage', 'progressBarId', 'showStatus', 'statusDescription', 'statusInside', 'strokeWidth', 'styles']
})
@Component({
  selector: 'scale-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['busy', 'customClass', 'customColor', 'disabled', 'hasError', 'icon', 'label', 'percentage', 'progressBarId', 'showStatus', 'statusDescription', 'statusInside', 'strokeWidth', 'styles']
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
  inputs: ['ariaLabel', 'collapsible', 'collapsibleLabel', 'collapsibleMediaQuery', 'styles']
})
@Component({
  selector: 'scale-sidebar-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'collapsible', 'collapsibleLabel', 'collapsibleMediaQuery', 'styles']
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
  inputs: ['active', 'bold', 'condensed', 'expanded', 'href', 'label', 'nestingLevel', 'styles', 'tag']
})
@Component({
  selector: 'scale-sidebar-nav-collapsible',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'bold', 'condensed', 'expanded', 'href', 'label', 'nestingLevel', 'styles', 'tag']
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
  inputs: ['active', 'bold', 'condensed', 'current', 'nestingLevel', 'styles']
})
@Component({
  selector: 'scale-sidebar-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'bold', 'condensed', 'current', 'nestingLevel', 'styles']
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
  inputs: ['customClass', 'customColor', 'disabled', 'label', 'max', 'min', 'showValue', 'sliderId', 'step', 'styles', 'thumbLarge', 'trackSmall', 'value']
})
@Component({
  selector: 'scale-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'customColor', 'disabled', 'label', 'max', 'min', 'showValue', 'sliderId', 'step', 'styles', 'thumbLarge', 'trackSmall', 'value'],
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
  inputs: ['checked', 'disabled', 'inputId', 'label']
})
@Component({
  selector: 'scale-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'inputId', 'label'],
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


export declare interface ScaleTabHeader extends Components.ScaleTabHeader {}
@ProxyCmp({
  inputs: ['selected', 'small', 'styles']
})
@Component({
  selector: 'scale-tab-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['selected', 'small', 'styles']
})
export class ScaleTabHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScaleTabNav extends Components.ScaleTabNav {}
@ProxyCmp({
  inputs: ['small', 'styles']
})
@Component({
  selector: 'scale-tab-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['small', 'styles']
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
  inputs: ['small', 'styles']
})
@Component({
  selector: 'scale-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['small', 'styles']
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
  inputs: ['customClass', 'disabled', 'dismissText', 'dismissable', 'href', 'size', 'styles', 'target', 'variant']
})
@Component({
  selector: 'scale-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'disabled', 'dismissText', 'dismissable', 'href', 'size', 'styles', 'target', 'variant'],
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
