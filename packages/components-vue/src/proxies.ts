/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@scaleds/components-telekom';




const customElementTags: string[] = [
 'app-logo',
 'app-mega-menu',
 'app-navigation-main-mobile',
 'app-navigation-sector-mobile',
 'scale-accordion',
 'scale-alert',
 'scale-app-header',
 'scale-app-shell',
 'scale-breadcrumb',
 'scale-button',
 'scale-card',
 'scale-carousel',
 'scale-collapsible',
 'scale-divider',
 'scale-icon',
 'scale-input',
 'scale-link',
 'scale-list',
 'scale-list-item',
 'scale-modal',
 'scale-progress-bar',
 'scale-sidebar-nav',
 'scale-sidebar-nav-collapsible',
 'scale-sidebar-nav-item',
 'scale-slider',
 'scale-ssr-slot-fix',
 'scale-switch',
 'scale-tab-header',
 'scale-tab-nav',
 'scale-tab-panel',
 'scale-table',
 'scale-tag',
 'scale-text',
 'scale-toast',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const AppLogo = /*@__PURE__*/ Vue.extend({

  props: {
    href: {} as PropOptions<Components.AppLogo['href']>,
    color: {} as PropOptions<Components.AppLogo['color']>,
    claim: {} as PropOptions<Components.AppLogo['claim']>,
  },


  render: createCommonRender('app-logo', []),
});


export const AppMegaMenu = /*@__PURE__*/ Vue.extend({

  props: {
    navigation: {} as PropOptions<Components.AppMegaMenu['navigation']>,
    hide: {} as PropOptions<Components.AppMegaMenu['hide']>,
    activeRoute: {} as PropOptions<Components.AppMegaMenu['activeRoute']>,
  },


  render: createCommonRender('app-mega-menu', []),
});


export const AppNavigationMainMobile = /*@__PURE__*/ Vue.extend({

  props: {
    navigation: {} as PropOptions<Components.AppNavigationMainMobile['navigation']>,
    activeRoute: {} as PropOptions<Components.AppNavigationMainMobile['activeRoute']>,
  },


  render: createCommonRender('app-navigation-main-mobile', ['closeMenu']),
});


export const AppNavigationSectorMobile = /*@__PURE__*/ Vue.extend({

  props: {
    navigation: {} as PropOptions<Components.AppNavigationSectorMobile['navigation']>,
    activeSectorName: {} as PropOptions<Components.AppNavigationSectorMobile['activeSectorName']>,
  },


  render: createCommonRender('app-navigation-sector-mobile', []),
});


export const ScaleAccordion = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleAccordion['styles']>,
    dependent: {} as PropOptions<Components.ScaleAccordion['dependent']>,
  },


  render: createCommonRender('scale-accordion', []),
});


export const ScaleAlert = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleAlert['customClass']>,
    size: {} as PropOptions<Components.ScaleAlert['size']>,
    variant: {} as PropOptions<Components.ScaleAlert['variant']>,
    headline: {} as PropOptions<Components.ScaleAlert['headline']>,
    opened: {} as PropOptions<Components.ScaleAlert['opened']>,
    timeout: {} as PropOptions<Components.ScaleAlert['timeout']>,
    icon: {} as PropOptions<Components.ScaleAlert['icon']>,
    styles: {} as PropOptions<Components.ScaleAlert['styles']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.ScaleAlert['open'],
  },
  render: createCommonRender('scale-alert', []),
});


export const ScaleAppHeader = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleAppHeader['customClass']>,
    mainNavigation: {} as PropOptions<Components.ScaleAppHeader['mainNavigation']>,
    iconNavigation: {} as PropOptions<Components.ScaleAppHeader['iconNavigation']>,
    sectorNavigation: {} as PropOptions<Components.ScaleAppHeader['sectorNavigation']>,
    addonNavigation: {} as PropOptions<Components.ScaleAppHeader['addonNavigation']>,
    activeRoute: {} as PropOptions<Components.ScaleAppHeader['activeRoute']>,
    activeSectorName: {} as PropOptions<Components.ScaleAppHeader['activeSectorName']>,
    scrolled: {} as PropOptions<Components.ScaleAppHeader['scrolled']>,
  },


  render: createCommonRender('scale-app-header', []),
});


export const ScaleAppShell = /*@__PURE__*/ Vue.extend({

  props: {
    mainNavigation: {} as PropOptions<Components.ScaleAppShell['mainNavigation']>,
    iconNavigation: {} as PropOptions<Components.ScaleAppShell['iconNavigation']>,
    sectorNavigation: {} as PropOptions<Components.ScaleAppShell['sectorNavigation']>,
    addonNavigation: {} as PropOptions<Components.ScaleAppShell['addonNavigation']>,
    customClass: {} as PropOptions<Components.ScaleAppShell['customClass']>,
    activeRoute: {} as PropOptions<Components.ScaleAppShell['activeRoute']>,
    activeSectorName: {} as PropOptions<Components.ScaleAppShell['activeSectorName']>,
  },


  render: createCommonRender('scale-app-shell', []),
});


export const ScaleBreadcrumb = /*@__PURE__*/ Vue.extend({

  props: {
    separator: {} as PropOptions<Components.ScaleBreadcrumb['separator']>,
    styles: {} as PropOptions<Components.ScaleBreadcrumb['styles']>,
  },


  render: createCommonRender('scale-breadcrumb', []),
});


export const ScaleButton = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleButton['customClass']>,
    size: {} as PropOptions<Components.ScaleButton['size']>,
    variant: {} as PropOptions<Components.ScaleButton['variant']>,
    disabled: {} as PropOptions<Components.ScaleButton['disabled']>,
    iconSize: {} as PropOptions<Components.ScaleButton['iconSize']>,
    icon: {} as PropOptions<Components.ScaleButton['icon']>,
    iconBefore: {} as PropOptions<Components.ScaleButton['iconBefore']>,
    iconAfter: {} as PropOptions<Components.ScaleButton['iconAfter']>,
    href: {} as PropOptions<Components.ScaleButton['href']>,
    target: {} as PropOptions<Components.ScaleButton['target']>,
    type: {} as PropOptions<Components.ScaleButton['type']>,
    ariaLabel: {} as PropOptions<Components.ScaleButton['ariaLabel']>,
    focusable: {} as PropOptions<Components.ScaleButton['focusable']>,
    role: {} as PropOptions<Components.ScaleButton['role']>,
    styles: {} as PropOptions<Components.ScaleButton['styles']>,
  },


  methods: {
    disable: createCommonMethod('disable') as Components.ScaleButton['disable'],
    enable: createCommonMethod('enable') as Components.ScaleButton['enable'],
  },
  render: createCommonRender('scale-button', []),
});


export const ScaleCard = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleCard['customClass']>,
    href: {} as PropOptions<Components.ScaleCard['href']>,
    target: {} as PropOptions<Components.ScaleCard['target']>,
    interactive: {} as PropOptions<Components.ScaleCard['interactive']>,
    disabled: {} as PropOptions<Components.ScaleCard['disabled']>,
    styles: {} as PropOptions<Components.ScaleCard['styles']>,
  },


  render: createCommonRender('scale-card', []),
});


export const ScaleCarousel = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleCarousel['customClass']>,
    vertical: {} as PropOptions<Components.ScaleCarousel['vertical']>,
    styles: {} as PropOptions<Components.ScaleCarousel['styles']>,
  },


  render: createCommonRender('scale-carousel', []),
});


export const ScaleCollapsible = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleCollapsible['styles']>,
    tag: {} as PropOptions<Components.ScaleCollapsible['tag']>,
    label: {} as PropOptions<Components.ScaleCollapsible['label']>,
    isExpanded: {} as PropOptions<Components.ScaleCollapsible['isExpanded']>,
    iconSize: {} as PropOptions<Components.ScaleCollapsible['iconSize']>,
  },


  methods: {
    close: createCommonMethod('close') as Components.ScaleCollapsible['close'],
    setFocus: createCommonMethod('setFocus') as Components.ScaleCollapsible['setFocus'],
  },
  render: createCommonRender('scale-collapsible', ['toggler', 'toggleHead']),
});


export const ScaleDivider = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleDivider['customClass']>,
    size: {} as PropOptions<Components.ScaleDivider['size']>,
    vertical: {} as PropOptions<Components.ScaleDivider['vertical']>,
    styles: {} as PropOptions<Components.ScaleDivider['styles']>,
  },


  render: createCommonRender('scale-divider', []),
});


export const ScaleIcon = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleIcon['customClass']>,
    name: {} as PropOptions<Components.ScaleIcon['name']>,
    path: {} as PropOptions<Components.ScaleIcon['path']>,
    size: {} as PropOptions<Components.ScaleIcon['size']>,
    fill: {} as PropOptions<Components.ScaleIcon['fill']>,
    stroke: {} as PropOptions<Components.ScaleIcon['stroke']>,
    focusable: {} as PropOptions<Components.ScaleIcon['focusable']>,
    styles: {} as PropOptions<Components.ScaleIcon['styles']>,
  },


  render: createCommonRender('scale-icon', []),
});


export const ScaleInput = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleInput['customClass']>,
    type: {} as PropOptions<Components.ScaleInput['type']>,
    name: {} as PropOptions<Components.ScaleInput['name']>,
    variant: {} as PropOptions<Components.ScaleInput['variant']>,
    label: {} as PropOptions<Components.ScaleInput['label']>,
    size: {} as PropOptions<Components.ScaleInput['size']>,
    rows: {} as PropOptions<Components.ScaleInput['rows']>,
    cols: {} as PropOptions<Components.ScaleInput['cols']>,
    helperText: {} as PropOptions<Components.ScaleInput['helperText']>,
    status: {} as PropOptions<Components.ScaleInput['status']>,
    maxLength: {} as PropOptions<Components.ScaleInput['maxLength']>,
    minLength: {} as PropOptions<Components.ScaleInput['minLength']>,
    placeholder: {} as PropOptions<Components.ScaleInput['placeholder']>,
    disabled: {} as PropOptions<Components.ScaleInput['disabled']>,
    required: {} as PropOptions<Components.ScaleInput['required']>,
    counter: {} as PropOptions<Components.ScaleInput['counter']>,
    preChecked: {} as PropOptions<Components.ScaleInput['preChecked']>,
    resize: {} as PropOptions<Components.ScaleInput['resize']>,
    value: {} as PropOptions<Components.ScaleInput['value']>,
    inputId: {} as PropOptions<Components.ScaleInput['inputId']>,
    icon: {} as PropOptions<Components.ScaleInput['icon']>,
    multiple: {} as PropOptions<Components.ScaleInput['multiple']>,
    visibleSize: {} as PropOptions<Components.ScaleInput['visibleSize']>,
    transparent: {} as PropOptions<Components.ScaleInput['transparent']>,
    styles: {} as PropOptions<Components.ScaleInput['styles']>,
  },

  model: {
    prop: 'value',
    event: 'scaleChange'
  },

  render: createCommonRender('scale-input', ['scaleInput', 'scaleChange', 'scaleFocus', 'scaleBlur', 'scaleKeyDown']),
});


export const ScaleLink = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleLink['customClass']>,
    href: {} as PropOptions<Components.ScaleLink['href']>,
    disabled: {} as PropOptions<Components.ScaleLink['disabled']>,
    block: {} as PropOptions<Components.ScaleLink['block']>,
    underline: {} as PropOptions<Components.ScaleLink['underline']>,
    target: {} as PropOptions<Components.ScaleLink['target']>,
    variant: {} as PropOptions<Components.ScaleLink['variant']>,
    iconSize: {} as PropOptions<Components.ScaleLink['iconSize']>,
    icon: {} as PropOptions<Components.ScaleLink['icon']>,
    styles: {} as PropOptions<Components.ScaleLink['styles']>,
  },


  render: createCommonRender('scale-link', []),
});


export const ScaleList = /*@__PURE__*/ Vue.extend({

  props: {
    variant: {} as PropOptions<Components.ScaleList['variant']>,
    styles: {} as PropOptions<Components.ScaleList['styles']>,
  },


  render: createCommonRender('scale-list', []),
});


export const ScaleListItem = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.ScaleListItem['icon']>,
    iconSize: {} as PropOptions<Components.ScaleListItem['iconSize']>,
    type: {} as PropOptions<Components.ScaleListItem['type']>,
    styles: {} as PropOptions<Components.ScaleListItem['styles']>,
  },


  render: createCommonRender('scale-list-item', []),
});


export const ScaleModal = /*@__PURE__*/ Vue.extend({

  props: {
    transitions: {} as PropOptions<Components.ScaleModal['transitions']>,
    customClass: {} as PropOptions<Components.ScaleModal['customClass']>,
    size: {} as PropOptions<Components.ScaleModal['size']>,
    variant: {} as PropOptions<Components.ScaleModal['variant']>,
    opened: {} as PropOptions<Components.ScaleModal['opened']>,
    styles: {} as PropOptions<Components.ScaleModal['styles']>,
  },


  render: createCommonRender('scale-modal', ['scaleClose']),
});


export const ScaleProgressBar = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleProgressBar['customClass']>,
    percentage: {} as PropOptions<Components.ScaleProgressBar['percentage']>,
    customColor: {} as PropOptions<Components.ScaleProgressBar['customColor']>,
    strokeWidth: {} as PropOptions<Components.ScaleProgressBar['strokeWidth']>,
    showStatus: {} as PropOptions<Components.ScaleProgressBar['showStatus']>,
    icon: {} as PropOptions<Components.ScaleProgressBar['icon']>,
    statusDescription: {} as PropOptions<Components.ScaleProgressBar['statusDescription']>,
    statusInside: {} as PropOptions<Components.ScaleProgressBar['statusInside']>,
    hasError: {} as PropOptions<Components.ScaleProgressBar['hasError']>,
    disabled: {} as PropOptions<Components.ScaleProgressBar['disabled']>,
    styles: {} as PropOptions<Components.ScaleProgressBar['styles']>,
  },


  render: createCommonRender('scale-progress-bar', []),
});


export const ScaleSidebarNav = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleSidebarNav['styles']>,
    ariaLabel: {} as PropOptions<Components.ScaleSidebarNav['ariaLabel']>,
  },


  render: createCommonRender('scale-sidebar-nav', []),
});


export const ScaleSidebarNavCollapsible = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleSidebarNavCollapsible['styles']>,
    tag: {} as PropOptions<Components.ScaleSidebarNavCollapsible['tag']>,
    label: {} as PropOptions<Components.ScaleSidebarNavCollapsible['label']>,
    isExpanded: {} as PropOptions<Components.ScaleSidebarNavCollapsible['isExpanded']>,
    isCurrent: {} as PropOptions<Components.ScaleSidebarNavCollapsible['isCurrent']>,
    bold: {} as PropOptions<Components.ScaleSidebarNavCollapsible['bold']>,
    condensed: {} as PropOptions<Components.ScaleSidebarNavCollapsible['condensed']>,
    iconSize: {} as PropOptions<Components.ScaleSidebarNavCollapsible['iconSize']>,
  },


  render: createCommonRender('scale-sidebar-nav-collapsible', []),
});


export const ScaleSidebarNavItem = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleSidebarNavItem['styles']>,
    condensed: {} as PropOptions<Components.ScaleSidebarNavItem['condensed']>,
    bold: {} as PropOptions<Components.ScaleSidebarNavItem['bold']>,
    isCurrent: {} as PropOptions<Components.ScaleSidebarNavItem['isCurrent']>,
  },


  render: createCommonRender('scale-sidebar-nav-item', []),
});


export const ScaleSlider = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleSlider['customClass']>,
    value: {} as PropOptions<Components.ScaleSlider['value']>,
    min: {} as PropOptions<Components.ScaleSlider['min']>,
    max: {} as PropOptions<Components.ScaleSlider['max']>,
    step: {} as PropOptions<Components.ScaleSlider['step']>,
    trackHeight: {} as PropOptions<Components.ScaleSlider['trackHeight']>,
    label: {} as PropOptions<Components.ScaleSlider['label']>,
    showValue: {} as PropOptions<Components.ScaleSlider['showValue']>,
    customColor: {} as PropOptions<Components.ScaleSlider['customColor']>,
    disabled: {} as PropOptions<Components.ScaleSlider['disabled']>,
    styles: {} as PropOptions<Components.ScaleSlider['styles']>,
  },

  model: {
    prop: 'value',
    event: 'scaleChange'
  },

  render: createCommonRender('scale-slider', ['scaleChange']),
});


export const ScaleSsrSlotFix = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('scale-ssr-slot-fix', []),
});


export const ScaleSwitch = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleSwitch['customClass']>,
    active: {} as PropOptions<Components.ScaleSwitch['active']>,
    disabled: {} as PropOptions<Components.ScaleSwitch['disabled']>,
    iconOn: {} as PropOptions<Components.ScaleSwitch['iconOn']>,
    iconOff: {} as PropOptions<Components.ScaleSwitch['iconOff']>,
    iconSize: {} as PropOptions<Components.ScaleSwitch['iconSize']>,
    textOn: {} as PropOptions<Components.ScaleSwitch['textOn']>,
    textOff: {} as PropOptions<Components.ScaleSwitch['textOff']>,
    styles: {} as PropOptions<Components.ScaleSwitch['styles']>,
  },


  render: createCommonRender('scale-switch', []),
});


export const ScaleTabHeader = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleTabHeader['styles']>,
    label: {} as PropOptions<Components.ScaleTabHeader['label']>,
    selected: {} as PropOptions<Components.ScaleTabHeader['selected']>,
    icon: {} as PropOptions<Components.ScaleTabHeader['icon']>,
    iconSize: {} as PropOptions<Components.ScaleTabHeader['iconSize']>,
    iconOnly: {} as PropOptions<Components.ScaleTabHeader['iconOnly']>,
  },


  render: createCommonRender('scale-tab-header', ['tabclick']),
});


export const ScaleTabNav = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleTabNav['styles']>,
    ariaLabel: {} as PropOptions<Components.ScaleTabNav['ariaLabel']>,
  },


  render: createCommonRender('scale-tab-nav', []),
});


export const ScaleTabPanel = /*@__PURE__*/ Vue.extend({

  props: {
    styles: {} as PropOptions<Components.ScaleTabPanel['styles']>,
    ariaLabel: {} as PropOptions<Components.ScaleTabPanel['ariaLabel']>,
    identifier: {} as PropOptions<Components.ScaleTabPanel['identifier']>,
  },


  render: createCommonRender('scale-tab-panel', []),
});


export const ScaleTable = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleTable['customClass']>,
    showSort: {} as PropOptions<Components.ScaleTable['showSort']>,
    size: {} as PropOptions<Components.ScaleTable['size']>,
    styles: {} as PropOptions<Components.ScaleTable['styles']>,
  },


  render: createCommonRender('scale-table', []),
});


export const ScaleTag = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleTag['customClass']>,
    size: {} as PropOptions<Components.ScaleTag['size']>,
    variant: {} as PropOptions<Components.ScaleTag['variant']>,
    href: {} as PropOptions<Components.ScaleTag['href']>,
    target: {} as PropOptions<Components.ScaleTag['target']>,
    dismissable: {} as PropOptions<Components.ScaleTag['dismissable']>,
    disabled: {} as PropOptions<Components.ScaleTag['disabled']>,
    styles: {} as PropOptions<Components.ScaleTag['styles']>,
  },


  render: createCommonRender('scale-tag', ['scaleClose']),
});


export const ScaleText = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleText['customClass']>,
    variant: {} as PropOptions<Components.ScaleText['variant']>,
    tag: {} as PropOptions<Components.ScaleText['tag']>,
    styles: {} as PropOptions<Components.ScaleText['styles']>,
  },


  render: createCommonRender('scale-text', []),
});


export const ScaleToast = /*@__PURE__*/ Vue.extend({

  props: {
    customClass: {} as PropOptions<Components.ScaleToast['customClass']>,
    size: {} as PropOptions<Components.ScaleToast['size']>,
    variant: {} as PropOptions<Components.ScaleToast['variant']>,
    opened: {} as PropOptions<Components.ScaleToast['opened']>,
    autoHide: {} as PropOptions<Components.ScaleToast['autoHide']>,
    animated: {} as PropOptions<Components.ScaleToast['animated']>,
    time: {} as PropOptions<Components.ScaleToast['time']>,
    positionTop: {} as PropOptions<Components.ScaleToast['positionTop']>,
    positionRight: {} as PropOptions<Components.ScaleToast['positionRight']>,
    fadeDuration: {} as PropOptions<Components.ScaleToast['fadeDuration']>,
    styles: {} as PropOptions<Components.ScaleToast['styles']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.ScaleToast['open'],
  },
  render: createCommonRender('scale-toast', []),
});

