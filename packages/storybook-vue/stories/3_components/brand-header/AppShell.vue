<template>
  <scale-app-shell
    :portal-name="portalName"
    :claim-lang="claimLang"
    :main-navigation="mainNavigation"
    :icon-navigation="iconNavigation"
    :sector-navigation="sectorNavigation"
    :addon-navigation="addonNavigation"
    :active-route-id="activeRouteId"
    :active-sector-id="activeRouteId"
  >
    <slot></slot>
  </scale-app-shell>
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
