<template>
  <scale-app-header
    :portal-name="portalName"
    :claim-lang="claimLang"
    :main-navigation="mainNavigation"
    :icon-navigation="iconNavigation"
    :sector-navigation="sectorNavigation"
    :addon-navigation="addonNavigation"
    :active-route-id="activeRouteId"
    :active-sector-id="activeRouteId"
  >
    <slot name="menu-main"></slot>
    <slot name="menu-icon"></slot>
    <slot name="menu-sector"></slot>
    <slot name="menu-addon"></slot>
    <slot></slot>
  </scale-app-header>
</template>

<script>
export default {
  props: {
    portalName: String,
    claimLang: String,
    mainNavigation: String,
    iconNavigation: String,
    sectorNavigation: String,
    addonNavigation: String,
    activeRouteId: String,
    activeSectorId: String
  }
};
</script>
