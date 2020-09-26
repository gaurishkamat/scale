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
 'scale-icon-action-add',
 'scale-icon-action-add-card',
 'scale-icon-action-auto-login',
 'scale-icon-action-backspace',
 'scale-icon-action-changelog',
 'scale-icon-action-circle-add',
 'scale-icon-action-circle-close',
 'scale-icon-action-close',
 'scale-icon-action-copy-paste',
 'scale-icon-action-cut-paste',
 'scale-icon-action-disabled-microphone',
 'scale-icon-action-download',
 'scale-icon-action-drag-and-drop',
 'scale-icon-action-edit',
 'scale-icon-action-fast-forward',
 'scale-icon-action-favorite',
 'scale-icon-action-filter',
 'scale-icon-action-forward',
 'scale-icon-action-full-screen',
 'scale-icon-action-hide-password',
 'scale-icon-action-install',
 'scale-icon-action-link',
 'scale-icon-action-logout',
 'scale-icon-action-loop',
 'scale-icon-action-menu',
 'scale-icon-action-microphone',
 'scale-icon-action-minimize-screen',
 'scale-icon-action-more',
 'scale-icon-action-move',
 'scale-icon-action-mute',
 'scale-icon-action-notification',
 'scale-icon-action-pause',
 'scale-icon-action-pin',
 'scale-icon-action-play',
 'scale-icon-action-pop-up-window',
 'scale-icon-action-print',
 'scale-icon-action-random',
 'scale-icon-action-refresh',
 'scale-icon-action-remove',
 'scale-icon-action-restart',
 'scale-icon-action-search',
 'scale-icon-action-shopping-cart',
 'scale-icon-action-show-password',
 'scale-icon-action-sort',
 'scale-icon-action-sound-on',
 'scale-icon-action-stream-on',
 'scale-icon-action-success',
 'scale-icon-action-thumbs-down',
 'scale-icon-action-thumbs-up',
 'scale-icon-action-tiles-add',
 'scale-icon-action-upload',
 'scale-icon-action-volume-down',
 'scale-icon-action-volume-up',
 'scale-icon-action-zoom-in',
 'scale-icon-action-zoom-out',
 'scale-icon-alert-compliance',
 'scale-icon-alert-error',
 'scale-icon-alert-help',
 'scale-icon-alert-imprint-dataprivacy',
 'scale-icon-alert-information',
 'scale-icon-alert-legal',
 'scale-icon-alert-security',
 'scale-icon-alert-warning',
 'scale-icon-communication-call-incoming',
 'scale-icon-communication-call-outgoing',
 'scale-icon-communication-chat',
 'scale-icon-communication-email',
 'scale-icon-communication-end-call',
 'scale-icon-communication-feedback',
 'scale-icon-communication-message',
 'scale-icon-communication-phone-number',
 'scale-icon-communication-recipient',
 'scale-icon-communication-voice-message',
 'scale-icon-content-achievement',
 'scale-icon-content-applications',
 'scale-icon-content-biometric',
 'scale-icon-content-bookmark',
 'scale-icon-content-calendar',
 'scale-icon-content-clipboard',
 'scale-icon-content-clock',
 'scale-icon-content-credit-card',
 'scale-icon-content-delivery',
 'scale-icon-content-digital-banking',
 'scale-icon-content-digital-media',
 'scale-icon-content-draft-file',
 'scale-icon-content-e-sim',
 'scale-icon-content-eu',
 'scale-icon-content-features',
 'scale-icon-content-flexible-tariffs',
 'scale-icon-content-heart',
 'scale-icon-content-history',
 'scale-icon-content-international',
 'scale-icon-content-international-sms',
 'scale-icon-content-interview',
 'scale-icon-content-key',
 'scale-icon-content-lock',
 'scale-icon-content-media-folder',
 'scale-icon-content-money-at',
 'scale-icon-content-music',
 'scale-icon-content-news',
 'scale-icon-content-prepaid-activate',
 'scale-icon-content-price-tag',
 'scale-icon-content-rss',
 'scale-icon-content-shop',
 'scale-icon-content-signal',
 'scale-icon-content-sim-card',
 'scale-icon-content-smile',
 'scale-icon-content-tariffs',
 'scale-icon-content-transport',
 'scale-icon-content-unlock',
 'scale-icon-content-voucher',
 'scale-icon-content-wallet',
 'scale-icon-device-add-device',
 'scale-icon-device-camera',
 'scale-icon-device-change-camera',
 'scale-icon-device-computer',
 'scale-icon-device-device-phone',
 'scale-icon-device-device-router',
 'scale-icon-device-device-tv',
 'scale-icon-device-device-watch',
 'scale-icon-device-fixed-line-services',
 'scale-icon-device-media-receiver',
 'scale-icon-device-mobile-devices-combination',
 'scale-icon-device-mobile-equipment',
 'scale-icon-device-mobile-phone-insurance',
 'scale-icon-device-mobile-services',
 'scale-icon-device-no-camera',
 'scale-icon-device-photo-camera',
 'scale-icon-device-remote-controller',
 'scale-icon-device-replacement-mobilephone',
 'scale-icon-device-screen-rotate',
 'scale-icon-device-smart-speaker',
 'scale-icon-device-tv-and-mobile',
 'scale-icon-home-home',
 'scale-icon-home-internet-at-home',
 'scale-icon-home-iot',
 'scale-icon-home-no-wifi',
 'scale-icon-home-smarthome',
 'scale-icon-home-wifi',
 'scale-icon-navigation-circle-top-up',
 'scale-icon-navigation-collapse-down',
 'scale-icon-navigation-collapse-up',
 'scale-icon-navigation-external-link',
 'scale-icon-navigation-internal-link',
 'scale-icon-navigation-left',
 'scale-icon-navigation-location',
 'scale-icon-navigation-my-location',
 'scale-icon-navigation-right',
 'scale-icon-navigation-start',
 'scale-icon-navigation-top-up',
 'scale-icon-process-order-status',
 'scale-icon-process-processing',
 'scale-icon-service-devices-service',
 'scale-icon-service-maintanance',
 'scale-icon-service-services',
 'scale-icon-service-settings',
 'scale-icon-service-support',
 'scale-icon-t_product-magenta-cloud',
 'scale-icon-t_product-magenta-tv',
 'scale-icon-t_product-magentaone',
 'scale-icon-t_product-measure-internet-speed',
 'scale-icon-t_product-seamless-connectivity',
 'scale-icon-t_product-telekom-shop-b',
 'scale-icon-t_product-usage',
 'scale-icon-user_file-analytics',
 'scale-icon-user_file-attachment',
 'scale-icon-user_file-audio-file',
 'scale-icon-user_file-billing',
 'scale-icon-user_file-bussines-users',
 'scale-icon-user_file-communities',
 'scale-icon-user_file-contacts',
 'scale-icon-user_file-contracts',
 'scale-icon-user_file-families',
 'scale-icon-user_file-handshake',
 'scale-icon-user_file-id-card',
 'scale-icon-user_file-image-file',
 'scale-icon-user_file-logout',
 'scale-icon-user_file-pdf-file',
 'scale-icon-user_file-switch-users',
 'scale-icon-user_file-user',
 'scale-icon-user_file-videos',
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
    activeRouteId: {} as PropOptions<Components.AppMegaMenu['activeRouteId']>,
  },


  render: createCommonRender('app-mega-menu', []),
});


export const AppNavigationMainMobile = /*@__PURE__*/ Vue.extend({

  props: {
    navigation: {} as PropOptions<Components.AppNavigationMainMobile['navigation']>,
    activeRouteId: {} as PropOptions<Components.AppNavigationMainMobile['activeRouteId']>,
  },


  render: createCommonRender('app-navigation-main-mobile', ['closeMenu']),
});


export const AppNavigationSectorMobile = /*@__PURE__*/ Vue.extend({

  props: {
    navigation: {} as PropOptions<Components.AppNavigationSectorMobile['navigation']>,
    activeSectorId: {} as PropOptions<Components.AppNavigationSectorMobile['activeSectorId']>,
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
    activeRouteId: {} as PropOptions<Components.ScaleAppHeader['activeRouteId']>,
    activeSectorId: {} as PropOptions<Components.ScaleAppHeader['activeSectorId']>,
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
    activeRouteId: {} as PropOptions<Components.ScaleAppShell['activeRouteId']>,
    activeSectorId: {} as PropOptions<Components.ScaleAppShell['activeSectorId']>,
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
    noPadding: {} as PropOptions<Components.ScaleCard['noPadding']>,
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


export const ScaleIconActionAdd = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionAdd['size']>,
    color: {} as PropOptions<Components.ScaleIconActionAdd['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionAdd['selected']>,
  },


  render: createCommonRender('scale-icon-action-add', []),
});


export const ScaleIconActionAddCard = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionAddCard['size']>,
    color: {} as PropOptions<Components.ScaleIconActionAddCard['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionAddCard['selected']>,
  },


  render: createCommonRender('scale-icon-action-add-card', []),
});


export const ScaleIconActionAutoLogin = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionAutoLogin['size']>,
    color: {} as PropOptions<Components.ScaleIconActionAutoLogin['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionAutoLogin['selected']>,
  },


  render: createCommonRender('scale-icon-action-auto-login', []),
});


export const ScaleIconActionBackspace = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionBackspace['size']>,
    color: {} as PropOptions<Components.ScaleIconActionBackspace['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionBackspace['selected']>,
  },


  render: createCommonRender('scale-icon-action-backspace', []),
});


export const ScaleIconActionChangelog = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionChangelog['size']>,
    color: {} as PropOptions<Components.ScaleIconActionChangelog['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionChangelog['selected']>,
  },


  render: createCommonRender('scale-icon-action-changelog', []),
});


export const ScaleIconActionCircleAdd = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionCircleAdd['size']>,
    color: {} as PropOptions<Components.ScaleIconActionCircleAdd['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionCircleAdd['selected']>,
  },


  render: createCommonRender('scale-icon-action-circle-add', []),
});


export const ScaleIconActionCircleClose = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionCircleClose['size']>,
    color: {} as PropOptions<Components.ScaleIconActionCircleClose['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionCircleClose['selected']>,
  },


  render: createCommonRender('scale-icon-action-circle-close', []),
});


export const ScaleIconActionClose = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionClose['size']>,
    color: {} as PropOptions<Components.ScaleIconActionClose['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionClose['selected']>,
  },


  render: createCommonRender('scale-icon-action-close', []),
});


export const ScaleIconActionCopyPaste = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionCopyPaste['size']>,
    color: {} as PropOptions<Components.ScaleIconActionCopyPaste['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionCopyPaste['selected']>,
  },


  render: createCommonRender('scale-icon-action-copy-paste', []),
});


export const ScaleIconActionCutPaste = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionCutPaste['size']>,
    color: {} as PropOptions<Components.ScaleIconActionCutPaste['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionCutPaste['selected']>,
  },


  render: createCommonRender('scale-icon-action-cut-paste', []),
});


export const ScaleIconActionDisabledMicrophone = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionDisabledMicrophone['size']>,
    color: {} as PropOptions<Components.ScaleIconActionDisabledMicrophone['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionDisabledMicrophone['selected']>,
  },


  render: createCommonRender('scale-icon-action-disabled-microphone', []),
});


export const ScaleIconActionDownload = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionDownload['size']>,
    color: {} as PropOptions<Components.ScaleIconActionDownload['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionDownload['selected']>,
  },


  render: createCommonRender('scale-icon-action-download', []),
});


export const ScaleIconActionDragAndDrop = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionDragAndDrop['size']>,
    color: {} as PropOptions<Components.ScaleIconActionDragAndDrop['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionDragAndDrop['selected']>,
  },


  render: createCommonRender('scale-icon-action-drag-and-drop', []),
});


export const ScaleIconActionEdit = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionEdit['size']>,
    color: {} as PropOptions<Components.ScaleIconActionEdit['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionEdit['selected']>,
  },


  render: createCommonRender('scale-icon-action-edit', []),
});


export const ScaleIconActionFastForward = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionFastForward['size']>,
    color: {} as PropOptions<Components.ScaleIconActionFastForward['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionFastForward['selected']>,
  },


  render: createCommonRender('scale-icon-action-fast-forward', []),
});


export const ScaleIconActionFavorite = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionFavorite['size']>,
    color: {} as PropOptions<Components.ScaleIconActionFavorite['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionFavorite['selected']>,
  },


  render: createCommonRender('scale-icon-action-favorite', []),
});


export const ScaleIconActionFilter = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionFilter['size']>,
    color: {} as PropOptions<Components.ScaleIconActionFilter['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionFilter['selected']>,
  },


  render: createCommonRender('scale-icon-action-filter', []),
});


export const ScaleIconActionForward = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionForward['size']>,
    color: {} as PropOptions<Components.ScaleIconActionForward['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionForward['selected']>,
  },


  render: createCommonRender('scale-icon-action-forward', []),
});


export const ScaleIconActionFullScreen = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionFullScreen['size']>,
    color: {} as PropOptions<Components.ScaleIconActionFullScreen['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionFullScreen['selected']>,
  },


  render: createCommonRender('scale-icon-action-full-screen', []),
});


export const ScaleIconActionHidePassword = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionHidePassword['size']>,
    color: {} as PropOptions<Components.ScaleIconActionHidePassword['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionHidePassword['selected']>,
  },


  render: createCommonRender('scale-icon-action-hide-password', []),
});


export const ScaleIconActionInstall = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionInstall['size']>,
    color: {} as PropOptions<Components.ScaleIconActionInstall['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionInstall['selected']>,
  },


  render: createCommonRender('scale-icon-action-install', []),
});


export const ScaleIconActionLink = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionLink['size']>,
    color: {} as PropOptions<Components.ScaleIconActionLink['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionLink['selected']>,
  },


  render: createCommonRender('scale-icon-action-link', []),
});


export const ScaleIconActionLogout = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionLogout['size']>,
    color: {} as PropOptions<Components.ScaleIconActionLogout['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionLogout['selected']>,
  },


  render: createCommonRender('scale-icon-action-logout', []),
});


export const ScaleIconActionLoop = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionLoop['size']>,
    color: {} as PropOptions<Components.ScaleIconActionLoop['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionLoop['selected']>,
  },


  render: createCommonRender('scale-icon-action-loop', []),
});


export const ScaleIconActionMenu = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionMenu['size']>,
    color: {} as PropOptions<Components.ScaleIconActionMenu['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionMenu['selected']>,
  },


  render: createCommonRender('scale-icon-action-menu', []),
});


export const ScaleIconActionMicrophone = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionMicrophone['size']>,
    color: {} as PropOptions<Components.ScaleIconActionMicrophone['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionMicrophone['selected']>,
  },


  render: createCommonRender('scale-icon-action-microphone', []),
});


export const ScaleIconActionMinimizeScreen = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionMinimizeScreen['size']>,
    color: {} as PropOptions<Components.ScaleIconActionMinimizeScreen['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionMinimizeScreen['selected']>,
  },


  render: createCommonRender('scale-icon-action-minimize-screen', []),
});


export const ScaleIconActionMore = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionMore['size']>,
    color: {} as PropOptions<Components.ScaleIconActionMore['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionMore['selected']>,
  },


  render: createCommonRender('scale-icon-action-more', []),
});


export const ScaleIconActionMove = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionMove['size']>,
    color: {} as PropOptions<Components.ScaleIconActionMove['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionMove['selected']>,
  },


  render: createCommonRender('scale-icon-action-move', []),
});


export const ScaleIconActionMute = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionMute['size']>,
    color: {} as PropOptions<Components.ScaleIconActionMute['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionMute['selected']>,
  },


  render: createCommonRender('scale-icon-action-mute', []),
});


export const ScaleIconActionNotification = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionNotification['size']>,
    color: {} as PropOptions<Components.ScaleIconActionNotification['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionNotification['selected']>,
  },


  render: createCommonRender('scale-icon-action-notification', []),
});


export const ScaleIconActionPause = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionPause['size']>,
    color: {} as PropOptions<Components.ScaleIconActionPause['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionPause['selected']>,
  },


  render: createCommonRender('scale-icon-action-pause', []),
});


export const ScaleIconActionPin = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionPin['size']>,
    color: {} as PropOptions<Components.ScaleIconActionPin['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionPin['selected']>,
  },


  render: createCommonRender('scale-icon-action-pin', []),
});


export const ScaleIconActionPlay = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionPlay['size']>,
    color: {} as PropOptions<Components.ScaleIconActionPlay['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionPlay['selected']>,
  },


  render: createCommonRender('scale-icon-action-play', []),
});


export const ScaleIconActionPopUpWindow = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionPopUpWindow['size']>,
    color: {} as PropOptions<Components.ScaleIconActionPopUpWindow['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionPopUpWindow['selected']>,
  },


  render: createCommonRender('scale-icon-action-pop-up-window', []),
});


export const ScaleIconActionPrint = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionPrint['size']>,
    color: {} as PropOptions<Components.ScaleIconActionPrint['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionPrint['selected']>,
  },


  render: createCommonRender('scale-icon-action-print', []),
});


export const ScaleIconActionRandom = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionRandom['size']>,
    color: {} as PropOptions<Components.ScaleIconActionRandom['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionRandom['selected']>,
  },


  render: createCommonRender('scale-icon-action-random', []),
});


export const ScaleIconActionRefresh = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionRefresh['size']>,
    color: {} as PropOptions<Components.ScaleIconActionRefresh['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionRefresh['selected']>,
  },


  render: createCommonRender('scale-icon-action-refresh', []),
});


export const ScaleIconActionRemove = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionRemove['size']>,
    color: {} as PropOptions<Components.ScaleIconActionRemove['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionRemove['selected']>,
  },


  render: createCommonRender('scale-icon-action-remove', []),
});


export const ScaleIconActionRestart = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionRestart['size']>,
    color: {} as PropOptions<Components.ScaleIconActionRestart['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionRestart['selected']>,
  },


  render: createCommonRender('scale-icon-action-restart', []),
});


export const ScaleIconActionSearch = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionSearch['size']>,
    color: {} as PropOptions<Components.ScaleIconActionSearch['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionSearch['selected']>,
  },


  render: createCommonRender('scale-icon-action-search', []),
});


export const ScaleIconActionShoppingCart = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionShoppingCart['size']>,
    color: {} as PropOptions<Components.ScaleIconActionShoppingCart['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionShoppingCart['selected']>,
  },


  render: createCommonRender('scale-icon-action-shopping-cart', []),
});


export const ScaleIconActionShowPassword = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionShowPassword['size']>,
    color: {} as PropOptions<Components.ScaleIconActionShowPassword['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionShowPassword['selected']>,
  },


  render: createCommonRender('scale-icon-action-show-password', []),
});


export const ScaleIconActionSort = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionSort['size']>,
    color: {} as PropOptions<Components.ScaleIconActionSort['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionSort['selected']>,
  },


  render: createCommonRender('scale-icon-action-sort', []),
});


export const ScaleIconActionSoundOn = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionSoundOn['size']>,
    color: {} as PropOptions<Components.ScaleIconActionSoundOn['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionSoundOn['selected']>,
  },


  render: createCommonRender('scale-icon-action-sound-on', []),
});


export const ScaleIconActionStreamOn = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionStreamOn['size']>,
    color: {} as PropOptions<Components.ScaleIconActionStreamOn['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionStreamOn['selected']>,
  },


  render: createCommonRender('scale-icon-action-stream-on', []),
});


export const ScaleIconActionSuccess = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionSuccess['size']>,
    color: {} as PropOptions<Components.ScaleIconActionSuccess['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionSuccess['selected']>,
  },


  render: createCommonRender('scale-icon-action-success', []),
});


export const ScaleIconActionThumbsDown = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionThumbsDown['size']>,
    color: {} as PropOptions<Components.ScaleIconActionThumbsDown['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionThumbsDown['selected']>,
  },


  render: createCommonRender('scale-icon-action-thumbs-down', []),
});


export const ScaleIconActionThumbsUp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionThumbsUp['size']>,
    color: {} as PropOptions<Components.ScaleIconActionThumbsUp['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionThumbsUp['selected']>,
  },


  render: createCommonRender('scale-icon-action-thumbs-up', []),
});


export const ScaleIconActionTilesAdd = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionTilesAdd['size']>,
    color: {} as PropOptions<Components.ScaleIconActionTilesAdd['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionTilesAdd['selected']>,
  },


  render: createCommonRender('scale-icon-action-tiles-add', []),
});


export const ScaleIconActionUpload = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionUpload['size']>,
    color: {} as PropOptions<Components.ScaleIconActionUpload['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionUpload['selected']>,
  },


  render: createCommonRender('scale-icon-action-upload', []),
});


export const ScaleIconActionVolumeDown = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionVolumeDown['size']>,
    color: {} as PropOptions<Components.ScaleIconActionVolumeDown['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionVolumeDown['selected']>,
  },


  render: createCommonRender('scale-icon-action-volume-down', []),
});


export const ScaleIconActionVolumeUp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionVolumeUp['size']>,
    color: {} as PropOptions<Components.ScaleIconActionVolumeUp['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionVolumeUp['selected']>,
  },


  render: createCommonRender('scale-icon-action-volume-up', []),
});


export const ScaleIconActionZoomIn = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionZoomIn['size']>,
    color: {} as PropOptions<Components.ScaleIconActionZoomIn['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionZoomIn['selected']>,
  },


  render: createCommonRender('scale-icon-action-zoom-in', []),
});


export const ScaleIconActionZoomOut = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconActionZoomOut['size']>,
    color: {} as PropOptions<Components.ScaleIconActionZoomOut['color']>,
    selected: {} as PropOptions<Components.ScaleIconActionZoomOut['selected']>,
  },


  render: createCommonRender('scale-icon-action-zoom-out', []),
});


export const ScaleIconAlertCompliance = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertCompliance['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertCompliance['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertCompliance['selected']>,
  },


  render: createCommonRender('scale-icon-alert-compliance', []),
});


export const ScaleIconAlertError = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertError['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertError['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertError['selected']>,
  },


  render: createCommonRender('scale-icon-alert-error', []),
});


export const ScaleIconAlertHelp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertHelp['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertHelp['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertHelp['selected']>,
  },


  render: createCommonRender('scale-icon-alert-help', []),
});


export const ScaleIconAlertImprintDataprivacy = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertImprintDataprivacy['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertImprintDataprivacy['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertImprintDataprivacy['selected']>,
  },


  render: createCommonRender('scale-icon-alert-imprint-dataprivacy', []),
});


export const ScaleIconAlertInformation = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertInformation['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertInformation['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertInformation['selected']>,
  },


  render: createCommonRender('scale-icon-alert-information', []),
});


export const ScaleIconAlertLegal = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertLegal['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertLegal['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertLegal['selected']>,
  },


  render: createCommonRender('scale-icon-alert-legal', []),
});


export const ScaleIconAlertSecurity = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertSecurity['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertSecurity['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertSecurity['selected']>,
  },


  render: createCommonRender('scale-icon-alert-security', []),
});


export const ScaleIconAlertWarning = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconAlertWarning['size']>,
    color: {} as PropOptions<Components.ScaleIconAlertWarning['color']>,
    selected: {} as PropOptions<Components.ScaleIconAlertWarning['selected']>,
  },


  render: createCommonRender('scale-icon-alert-warning', []),
});


export const ScaleIconCommunicationCallIncoming = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationCallIncoming['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationCallIncoming['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationCallIncoming['selected']>,
  },


  render: createCommonRender('scale-icon-communication-call-incoming', []),
});


export const ScaleIconCommunicationCallOutgoing = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationCallOutgoing['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationCallOutgoing['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationCallOutgoing['selected']>,
  },


  render: createCommonRender('scale-icon-communication-call-outgoing', []),
});


export const ScaleIconCommunicationChat = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationChat['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationChat['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationChat['selected']>,
  },


  render: createCommonRender('scale-icon-communication-chat', []),
});


export const ScaleIconCommunicationEmail = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationEmail['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationEmail['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationEmail['selected']>,
  },


  render: createCommonRender('scale-icon-communication-email', []),
});


export const ScaleIconCommunicationEndCall = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationEndCall['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationEndCall['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationEndCall['selected']>,
  },


  render: createCommonRender('scale-icon-communication-end-call', []),
});


export const ScaleIconCommunicationFeedback = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationFeedback['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationFeedback['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationFeedback['selected']>,
  },


  render: createCommonRender('scale-icon-communication-feedback', []),
});


export const ScaleIconCommunicationMessage = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationMessage['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationMessage['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationMessage['selected']>,
  },


  render: createCommonRender('scale-icon-communication-message', []),
});


export const ScaleIconCommunicationPhoneNumber = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationPhoneNumber['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationPhoneNumber['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationPhoneNumber['selected']>,
  },


  render: createCommonRender('scale-icon-communication-phone-number', []),
});


export const ScaleIconCommunicationRecipient = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationRecipient['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationRecipient['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationRecipient['selected']>,
  },


  render: createCommonRender('scale-icon-communication-recipient', []),
});


export const ScaleIconCommunicationVoiceMessage = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconCommunicationVoiceMessage['size']>,
    color: {} as PropOptions<Components.ScaleIconCommunicationVoiceMessage['color']>,
    selected: {} as PropOptions<Components.ScaleIconCommunicationVoiceMessage['selected']>,
  },


  render: createCommonRender('scale-icon-communication-voice-message', []),
});


export const ScaleIconContentAchievement = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentAchievement['size']>,
    color: {} as PropOptions<Components.ScaleIconContentAchievement['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentAchievement['selected']>,
  },


  render: createCommonRender('scale-icon-content-achievement', []),
});


export const ScaleIconContentApplications = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentApplications['size']>,
    color: {} as PropOptions<Components.ScaleIconContentApplications['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentApplications['selected']>,
  },


  render: createCommonRender('scale-icon-content-applications', []),
});


export const ScaleIconContentBiometric = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentBiometric['size']>,
    color: {} as PropOptions<Components.ScaleIconContentBiometric['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentBiometric['selected']>,
  },


  render: createCommonRender('scale-icon-content-biometric', []),
});


export const ScaleIconContentBookmark = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentBookmark['size']>,
    color: {} as PropOptions<Components.ScaleIconContentBookmark['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentBookmark['selected']>,
  },


  render: createCommonRender('scale-icon-content-bookmark', []),
});


export const ScaleIconContentCalendar = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentCalendar['size']>,
    color: {} as PropOptions<Components.ScaleIconContentCalendar['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentCalendar['selected']>,
  },


  render: createCommonRender('scale-icon-content-calendar', []),
});


export const ScaleIconContentClipboard = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentClipboard['size']>,
    color: {} as PropOptions<Components.ScaleIconContentClipboard['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentClipboard['selected']>,
  },


  render: createCommonRender('scale-icon-content-clipboard', []),
});


export const ScaleIconContentClock = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentClock['size']>,
    color: {} as PropOptions<Components.ScaleIconContentClock['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentClock['selected']>,
  },


  render: createCommonRender('scale-icon-content-clock', []),
});


export const ScaleIconContentCreditCard = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentCreditCard['size']>,
    color: {} as PropOptions<Components.ScaleIconContentCreditCard['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentCreditCard['selected']>,
  },


  render: createCommonRender('scale-icon-content-credit-card', []),
});


export const ScaleIconContentDelivery = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentDelivery['size']>,
    color: {} as PropOptions<Components.ScaleIconContentDelivery['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentDelivery['selected']>,
  },


  render: createCommonRender('scale-icon-content-delivery', []),
});


export const ScaleIconContentDigitalBanking = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentDigitalBanking['size']>,
    color: {} as PropOptions<Components.ScaleIconContentDigitalBanking['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentDigitalBanking['selected']>,
  },


  render: createCommonRender('scale-icon-content-digital-banking', []),
});


export const ScaleIconContentDigitalMedia = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentDigitalMedia['size']>,
    color: {} as PropOptions<Components.ScaleIconContentDigitalMedia['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentDigitalMedia['selected']>,
  },


  render: createCommonRender('scale-icon-content-digital-media', []),
});


export const ScaleIconContentDraftFile = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentDraftFile['size']>,
    color: {} as PropOptions<Components.ScaleIconContentDraftFile['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentDraftFile['selected']>,
  },


  render: createCommonRender('scale-icon-content-draft-file', []),
});


export const ScaleIconContentESim = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentESim['size']>,
    color: {} as PropOptions<Components.ScaleIconContentESim['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentESim['selected']>,
  },


  render: createCommonRender('scale-icon-content-e-sim', []),
});


export const ScaleIconContentEu = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentEu['size']>,
    color: {} as PropOptions<Components.ScaleIconContentEu['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentEu['selected']>,
  },


  render: createCommonRender('scale-icon-content-eu', []),
});


export const ScaleIconContentFeatures = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentFeatures['size']>,
    color: {} as PropOptions<Components.ScaleIconContentFeatures['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentFeatures['selected']>,
  },


  render: createCommonRender('scale-icon-content-features', []),
});


export const ScaleIconContentFlexibleTariffs = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentFlexibleTariffs['size']>,
    color: {} as PropOptions<Components.ScaleIconContentFlexibleTariffs['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentFlexibleTariffs['selected']>,
  },


  render: createCommonRender('scale-icon-content-flexible-tariffs', []),
});


export const ScaleIconContentHeart = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentHeart['size']>,
    color: {} as PropOptions<Components.ScaleIconContentHeart['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentHeart['selected']>,
  },


  render: createCommonRender('scale-icon-content-heart', []),
});


export const ScaleIconContentHistory = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentHistory['size']>,
    color: {} as PropOptions<Components.ScaleIconContentHistory['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentHistory['selected']>,
  },


  render: createCommonRender('scale-icon-content-history', []),
});


export const ScaleIconContentInternational = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentInternational['size']>,
    color: {} as PropOptions<Components.ScaleIconContentInternational['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentInternational['selected']>,
  },


  render: createCommonRender('scale-icon-content-international', []),
});


export const ScaleIconContentInternationalSms = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentInternationalSms['size']>,
    color: {} as PropOptions<Components.ScaleIconContentInternationalSms['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentInternationalSms['selected']>,
  },


  render: createCommonRender('scale-icon-content-international-sms', []),
});


export const ScaleIconContentInterview = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentInterview['size']>,
    color: {} as PropOptions<Components.ScaleIconContentInterview['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentInterview['selected']>,
  },


  render: createCommonRender('scale-icon-content-interview', []),
});


export const ScaleIconContentKey = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentKey['size']>,
    color: {} as PropOptions<Components.ScaleIconContentKey['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentKey['selected']>,
  },


  render: createCommonRender('scale-icon-content-key', []),
});


export const ScaleIconContentLock = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentLock['size']>,
    color: {} as PropOptions<Components.ScaleIconContentLock['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentLock['selected']>,
  },


  render: createCommonRender('scale-icon-content-lock', []),
});


export const ScaleIconContentMediaFolder = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentMediaFolder['size']>,
    color: {} as PropOptions<Components.ScaleIconContentMediaFolder['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentMediaFolder['selected']>,
  },


  render: createCommonRender('scale-icon-content-media-folder', []),
});


export const ScaleIconContentMoneyAt = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentMoneyAt['size']>,
    color: {} as PropOptions<Components.ScaleIconContentMoneyAt['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentMoneyAt['selected']>,
  },


  render: createCommonRender('scale-icon-content-money-at', []),
});


export const ScaleIconContentMusic = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentMusic['size']>,
    color: {} as PropOptions<Components.ScaleIconContentMusic['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentMusic['selected']>,
  },


  render: createCommonRender('scale-icon-content-music', []),
});


export const ScaleIconContentNews = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentNews['size']>,
    color: {} as PropOptions<Components.ScaleIconContentNews['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentNews['selected']>,
  },


  render: createCommonRender('scale-icon-content-news', []),
});


export const ScaleIconContentPrepaidActivate = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentPrepaidActivate['size']>,
    color: {} as PropOptions<Components.ScaleIconContentPrepaidActivate['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentPrepaidActivate['selected']>,
  },


  render: createCommonRender('scale-icon-content-prepaid-activate', []),
});


export const ScaleIconContentPriceTag = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentPriceTag['size']>,
    color: {} as PropOptions<Components.ScaleIconContentPriceTag['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentPriceTag['selected']>,
  },


  render: createCommonRender('scale-icon-content-price-tag', []),
});


export const ScaleIconContentRss = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentRss['size']>,
    color: {} as PropOptions<Components.ScaleIconContentRss['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentRss['selected']>,
  },


  render: createCommonRender('scale-icon-content-rss', []),
});


export const ScaleIconContentShop = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentShop['size']>,
    color: {} as PropOptions<Components.ScaleIconContentShop['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentShop['selected']>,
  },


  render: createCommonRender('scale-icon-content-shop', []),
});


export const ScaleIconContentSignal = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentSignal['size']>,
    color: {} as PropOptions<Components.ScaleIconContentSignal['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentSignal['selected']>,
  },


  render: createCommonRender('scale-icon-content-signal', []),
});


export const ScaleIconContentSimCard = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentSimCard['size']>,
    color: {} as PropOptions<Components.ScaleIconContentSimCard['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentSimCard['selected']>,
  },


  render: createCommonRender('scale-icon-content-sim-card', []),
});


export const ScaleIconContentSmile = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentSmile['size']>,
    color: {} as PropOptions<Components.ScaleIconContentSmile['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentSmile['selected']>,
  },


  render: createCommonRender('scale-icon-content-smile', []),
});


export const ScaleIconContentTariffs = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentTariffs['size']>,
    color: {} as PropOptions<Components.ScaleIconContentTariffs['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentTariffs['selected']>,
  },


  render: createCommonRender('scale-icon-content-tariffs', []),
});


export const ScaleIconContentTransport = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentTransport['size']>,
    color: {} as PropOptions<Components.ScaleIconContentTransport['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentTransport['selected']>,
  },


  render: createCommonRender('scale-icon-content-transport', []),
});


export const ScaleIconContentUnlock = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentUnlock['size']>,
    color: {} as PropOptions<Components.ScaleIconContentUnlock['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentUnlock['selected']>,
  },


  render: createCommonRender('scale-icon-content-unlock', []),
});


export const ScaleIconContentVoucher = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentVoucher['size']>,
    color: {} as PropOptions<Components.ScaleIconContentVoucher['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentVoucher['selected']>,
  },


  render: createCommonRender('scale-icon-content-voucher', []),
});


export const ScaleIconContentWallet = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconContentWallet['size']>,
    color: {} as PropOptions<Components.ScaleIconContentWallet['color']>,
    selected: {} as PropOptions<Components.ScaleIconContentWallet['selected']>,
  },


  render: createCommonRender('scale-icon-content-wallet', []),
});


export const ScaleIconDeviceAddDevice = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceAddDevice['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceAddDevice['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceAddDevice['selected']>,
  },


  render: createCommonRender('scale-icon-device-add-device', []),
});


export const ScaleIconDeviceCamera = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceCamera['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceCamera['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceCamera['selected']>,
  },


  render: createCommonRender('scale-icon-device-camera', []),
});


export const ScaleIconDeviceChangeCamera = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceChangeCamera['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceChangeCamera['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceChangeCamera['selected']>,
  },


  render: createCommonRender('scale-icon-device-change-camera', []),
});


export const ScaleIconDeviceComputer = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceComputer['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceComputer['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceComputer['selected']>,
  },


  render: createCommonRender('scale-icon-device-computer', []),
});


export const ScaleIconDeviceDevicePhone = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceDevicePhone['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceDevicePhone['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceDevicePhone['selected']>,
  },


  render: createCommonRender('scale-icon-device-device-phone', []),
});


export const ScaleIconDeviceDeviceRouter = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceDeviceRouter['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceDeviceRouter['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceDeviceRouter['selected']>,
  },


  render: createCommonRender('scale-icon-device-device-router', []),
});


export const ScaleIconDeviceDeviceTv = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceDeviceTv['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceDeviceTv['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceDeviceTv['selected']>,
  },


  render: createCommonRender('scale-icon-device-device-tv', []),
});


export const ScaleIconDeviceDeviceWatch = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceDeviceWatch['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceDeviceWatch['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceDeviceWatch['selected']>,
  },


  render: createCommonRender('scale-icon-device-device-watch', []),
});


export const ScaleIconDeviceFixedLineServices = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceFixedLineServices['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceFixedLineServices['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceFixedLineServices['selected']>,
  },


  render: createCommonRender('scale-icon-device-fixed-line-services', []),
});


export const ScaleIconDeviceMediaReceiver = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceMediaReceiver['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceMediaReceiver['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceMediaReceiver['selected']>,
  },


  render: createCommonRender('scale-icon-device-media-receiver', []),
});


export const ScaleIconDeviceMobileDevicesCombination = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceMobileDevicesCombination['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceMobileDevicesCombination['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceMobileDevicesCombination['selected']>,
  },


  render: createCommonRender('scale-icon-device-mobile-devices-combination', []),
});


export const ScaleIconDeviceMobileEquipment = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceMobileEquipment['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceMobileEquipment['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceMobileEquipment['selected']>,
  },


  render: createCommonRender('scale-icon-device-mobile-equipment', []),
});


export const ScaleIconDeviceMobilePhoneInsurance = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceMobilePhoneInsurance['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceMobilePhoneInsurance['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceMobilePhoneInsurance['selected']>,
  },


  render: createCommonRender('scale-icon-device-mobile-phone-insurance', []),
});


export const ScaleIconDeviceMobileServices = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceMobileServices['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceMobileServices['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceMobileServices['selected']>,
  },


  render: createCommonRender('scale-icon-device-mobile-services', []),
});


export const ScaleIconDeviceNoCamera = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceNoCamera['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceNoCamera['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceNoCamera['selected']>,
  },


  render: createCommonRender('scale-icon-device-no-camera', []),
});


export const ScaleIconDevicePhotoCamera = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDevicePhotoCamera['size']>,
    color: {} as PropOptions<Components.ScaleIconDevicePhotoCamera['color']>,
    selected: {} as PropOptions<Components.ScaleIconDevicePhotoCamera['selected']>,
  },


  render: createCommonRender('scale-icon-device-photo-camera', []),
});


export const ScaleIconDeviceRemoteController = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceRemoteController['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceRemoteController['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceRemoteController['selected']>,
  },


  render: createCommonRender('scale-icon-device-remote-controller', []),
});


export const ScaleIconDeviceReplacementMobilephone = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceReplacementMobilephone['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceReplacementMobilephone['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceReplacementMobilephone['selected']>,
  },


  render: createCommonRender('scale-icon-device-replacement-mobilephone', []),
});


export const ScaleIconDeviceScreenRotate = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceScreenRotate['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceScreenRotate['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceScreenRotate['selected']>,
  },


  render: createCommonRender('scale-icon-device-screen-rotate', []),
});


export const ScaleIconDeviceSmartSpeaker = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceSmartSpeaker['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceSmartSpeaker['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceSmartSpeaker['selected']>,
  },


  render: createCommonRender('scale-icon-device-smart-speaker', []),
});


export const ScaleIconDeviceTvAndMobile = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconDeviceTvAndMobile['size']>,
    color: {} as PropOptions<Components.ScaleIconDeviceTvAndMobile['color']>,
    selected: {} as PropOptions<Components.ScaleIconDeviceTvAndMobile['selected']>,
  },


  render: createCommonRender('scale-icon-device-tv-and-mobile', []),
});


export const ScaleIconHomeHome = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconHomeHome['size']>,
    color: {} as PropOptions<Components.ScaleIconHomeHome['color']>,
    selected: {} as PropOptions<Components.ScaleIconHomeHome['selected']>,
  },


  render: createCommonRender('scale-icon-home-home', []),
});


export const ScaleIconHomeInternetAtHome = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconHomeInternetAtHome['size']>,
    color: {} as PropOptions<Components.ScaleIconHomeInternetAtHome['color']>,
    selected: {} as PropOptions<Components.ScaleIconHomeInternetAtHome['selected']>,
  },


  render: createCommonRender('scale-icon-home-internet-at-home', []),
});


export const ScaleIconHomeIot = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconHomeIot['size']>,
    color: {} as PropOptions<Components.ScaleIconHomeIot['color']>,
    selected: {} as PropOptions<Components.ScaleIconHomeIot['selected']>,
  },


  render: createCommonRender('scale-icon-home-iot', []),
});


export const ScaleIconHomeNoWifi = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconHomeNoWifi['size']>,
    color: {} as PropOptions<Components.ScaleIconHomeNoWifi['color']>,
    selected: {} as PropOptions<Components.ScaleIconHomeNoWifi['selected']>,
  },


  render: createCommonRender('scale-icon-home-no-wifi', []),
});


export const ScaleIconHomeSmarthome = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconHomeSmarthome['size']>,
    color: {} as PropOptions<Components.ScaleIconHomeSmarthome['color']>,
    selected: {} as PropOptions<Components.ScaleIconHomeSmarthome['selected']>,
  },


  render: createCommonRender('scale-icon-home-smarthome', []),
});


export const ScaleIconHomeWifi = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconHomeWifi['size']>,
    color: {} as PropOptions<Components.ScaleIconHomeWifi['color']>,
    selected: {} as PropOptions<Components.ScaleIconHomeWifi['selected']>,
  },


  render: createCommonRender('scale-icon-home-wifi', []),
});


export const ScaleIconNavigationCircleTopUp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationCircleTopUp['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationCircleTopUp['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationCircleTopUp['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-circle-top-up', []),
});


export const ScaleIconNavigationCollapseDown = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationCollapseDown['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationCollapseDown['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationCollapseDown['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-collapse-down', []),
});


export const ScaleIconNavigationCollapseUp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationCollapseUp['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationCollapseUp['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationCollapseUp['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-collapse-up', []),
});


export const ScaleIconNavigationExternalLink = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationExternalLink['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationExternalLink['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationExternalLink['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-external-link', []),
});


export const ScaleIconNavigationInternalLink = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationInternalLink['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationInternalLink['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationInternalLink['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-internal-link', []),
});


export const ScaleIconNavigationLeft = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationLeft['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationLeft['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationLeft['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-left', []),
});


export const ScaleIconNavigationLocation = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationLocation['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationLocation['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationLocation['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-location', []),
});


export const ScaleIconNavigationMyLocation = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationMyLocation['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationMyLocation['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationMyLocation['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-my-location', []),
});


export const ScaleIconNavigationRight = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationRight['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationRight['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationRight['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-right', []),
});


export const ScaleIconNavigationStart = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationStart['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationStart['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationStart['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-start', []),
});


export const ScaleIconNavigationTopUp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconNavigationTopUp['size']>,
    color: {} as PropOptions<Components.ScaleIconNavigationTopUp['color']>,
    selected: {} as PropOptions<Components.ScaleIconNavigationTopUp['selected']>,
  },


  render: createCommonRender('scale-icon-navigation-top-up', []),
});


export const ScaleIconProcessOrderStatus = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconProcessOrderStatus['size']>,
    color: {} as PropOptions<Components.ScaleIconProcessOrderStatus['color']>,
    selected: {} as PropOptions<Components.ScaleIconProcessOrderStatus['selected']>,
  },


  render: createCommonRender('scale-icon-process-order-status', []),
});


export const ScaleIconProcessProcessing = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconProcessProcessing['size']>,
    color: {} as PropOptions<Components.ScaleIconProcessProcessing['color']>,
    selected: {} as PropOptions<Components.ScaleIconProcessProcessing['selected']>,
  },


  render: createCommonRender('scale-icon-process-processing', []),
});


export const ScaleIconServiceDevicesService = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconServiceDevicesService['size']>,
    color: {} as PropOptions<Components.ScaleIconServiceDevicesService['color']>,
    selected: {} as PropOptions<Components.ScaleIconServiceDevicesService['selected']>,
  },


  render: createCommonRender('scale-icon-service-devices-service', []),
});


export const ScaleIconServiceMaintanance = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconServiceMaintanance['size']>,
    color: {} as PropOptions<Components.ScaleIconServiceMaintanance['color']>,
    selected: {} as PropOptions<Components.ScaleIconServiceMaintanance['selected']>,
  },


  render: createCommonRender('scale-icon-service-maintanance', []),
});


export const ScaleIconServiceServices = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconServiceServices['size']>,
    color: {} as PropOptions<Components.ScaleIconServiceServices['color']>,
    selected: {} as PropOptions<Components.ScaleIconServiceServices['selected']>,
  },


  render: createCommonRender('scale-icon-service-services', []),
});


export const ScaleIconServiceSettings = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconServiceSettings['size']>,
    color: {} as PropOptions<Components.ScaleIconServiceSettings['color']>,
    selected: {} as PropOptions<Components.ScaleIconServiceSettings['selected']>,
  },


  render: createCommonRender('scale-icon-service-settings', []),
});


export const ScaleIconServiceSupport = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconServiceSupport['size']>,
    color: {} as PropOptions<Components.ScaleIconServiceSupport['color']>,
    selected: {} as PropOptions<Components.ScaleIconServiceSupport['selected']>,
  },


  render: createCommonRender('scale-icon-service-support', []),
});


export const ScaleIconT_productMagentaCloud = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconT_productMagentaCloud['size']>,
    color: {} as PropOptions<Components.ScaleIconT_productMagentaCloud['color']>,
    selected: {} as PropOptions<Components.ScaleIconT_productMagentaCloud['selected']>,
  },


  render: createCommonRender('scale-icon-t_product-magenta-cloud', []),
});


export const ScaleIconT_productMagentaTv = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconT_productMagentaTv['size']>,
    color: {} as PropOptions<Components.ScaleIconT_productMagentaTv['color']>,
    selected: {} as PropOptions<Components.ScaleIconT_productMagentaTv['selected']>,
  },


  render: createCommonRender('scale-icon-t_product-magenta-tv', []),
});


export const ScaleIconT_productMagentaone = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconT_productMagentaone['size']>,
    color: {} as PropOptions<Components.ScaleIconT_productMagentaone['color']>,
    selected: {} as PropOptions<Components.ScaleIconT_productMagentaone['selected']>,
  },


  render: createCommonRender('scale-icon-t_product-magentaone', []),
});


export const ScaleIconT_productMeasureInternetSpeed = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconT_productMeasureInternetSpeed['size']>,
    color: {} as PropOptions<Components.ScaleIconT_productMeasureInternetSpeed['color']>,
    selected: {} as PropOptions<Components.ScaleIconT_productMeasureInternetSpeed['selected']>,
  },


  render: createCommonRender('scale-icon-t_product-measure-internet-speed', []),
});


export const ScaleIconT_productSeamlessConnectivity = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconT_productSeamlessConnectivity['size']>,
    color: {} as PropOptions<Components.ScaleIconT_productSeamlessConnectivity['color']>,
    selected: {} as PropOptions<Components.ScaleIconT_productSeamlessConnectivity['selected']>,
  },


  render: createCommonRender('scale-icon-t_product-seamless-connectivity', []),
});


export const ScaleIconT_productTelekomShopB = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconT_productTelekomShopB['size']>,
    color: {} as PropOptions<Components.ScaleIconT_productTelekomShopB['color']>,
    selected: {} as PropOptions<Components.ScaleIconT_productTelekomShopB['selected']>,
  },


  render: createCommonRender('scale-icon-t_product-telekom-shop-b', []),
});


export const ScaleIconT_productUsage = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconT_productUsage['size']>,
    color: {} as PropOptions<Components.ScaleIconT_productUsage['color']>,
    selected: {} as PropOptions<Components.ScaleIconT_productUsage['selected']>,
  },


  render: createCommonRender('scale-icon-t_product-usage', []),
});


export const ScaleIconUser_fileAnalytics = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileAnalytics['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileAnalytics['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileAnalytics['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-analytics', []),
});


export const ScaleIconUser_fileAttachment = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileAttachment['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileAttachment['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileAttachment['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-attachment', []),
});


export const ScaleIconUser_fileAudioFile = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileAudioFile['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileAudioFile['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileAudioFile['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-audio-file', []),
});


export const ScaleIconUser_fileBilling = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileBilling['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileBilling['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileBilling['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-billing', []),
});


export const ScaleIconUser_fileBussinesUsers = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileBussinesUsers['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileBussinesUsers['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileBussinesUsers['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-bussines-users', []),
});


export const ScaleIconUser_fileCommunities = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileCommunities['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileCommunities['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileCommunities['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-communities', []),
});


export const ScaleIconUser_fileContacts = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileContacts['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileContacts['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileContacts['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-contacts', []),
});


export const ScaleIconUser_fileContracts = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileContracts['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileContracts['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileContracts['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-contracts', []),
});


export const ScaleIconUser_fileFamilies = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileFamilies['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileFamilies['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileFamilies['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-families', []),
});


export const ScaleIconUser_fileHandshake = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileHandshake['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileHandshake['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileHandshake['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-handshake', []),
});


export const ScaleIconUser_fileIdCard = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileIdCard['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileIdCard['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileIdCard['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-id-card', []),
});


export const ScaleIconUser_fileImageFile = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileImageFile['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileImageFile['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileImageFile['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-image-file', []),
});


export const ScaleIconUser_fileLogout = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileLogout['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileLogout['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileLogout['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-logout', []),
});


export const ScaleIconUser_filePdfFile = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_filePdfFile['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_filePdfFile['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_filePdfFile['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-pdf-file', []),
});


export const ScaleIconUser_fileSwitchUsers = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileSwitchUsers['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileSwitchUsers['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileSwitchUsers['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-switch-users', []),
});


export const ScaleIconUser_fileUser = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileUser['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileUser['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileUser['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-user', []),
});


export const ScaleIconUser_fileVideos = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.ScaleIconUser_fileVideos['size']>,
    color: {} as PropOptions<Components.ScaleIconUser_fileVideos['color']>,
    selected: {} as PropOptions<Components.ScaleIconUser_fileVideos['selected']>,
  },


  render: createCommonRender('scale-icon-user_file-videos', []),
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
    checked: {} as PropOptions<Components.ScaleInput['checked']>,
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
    label: {} as PropOptions<Components.ScaleSlider['label']>,
    showValue: {} as PropOptions<Components.ScaleSlider['showValue']>,
    customColor: {} as PropOptions<Components.ScaleSlider['customColor']>,
    disabled: {} as PropOptions<Components.ScaleSlider['disabled']>,
    trackSmall: {} as PropOptions<Components.ScaleSlider['trackSmall']>,
    thumbLarge: {} as PropOptions<Components.ScaleSlider['thumbLarge']>,
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
    checked: {} as PropOptions<Components.ScaleSwitch['checked']>,
    disabled: {} as PropOptions<Components.ScaleSwitch['disabled']>,
    inputId: {} as PropOptions<Components.ScaleSwitch['inputId']>,
    styles: {} as PropOptions<Components.ScaleSwitch['styles']>,
  },


  render: createCommonRender('scale-switch', ['scaleChange']),
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

