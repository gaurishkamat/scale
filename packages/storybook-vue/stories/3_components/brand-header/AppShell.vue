<template>
  <scale-app-shell
    :brand-title="brandTitle"
    :claim-lang="claimLang"
    :main-navigation="mainNavigation"
    :icon-navigation="iconNavigation"
    :sector-navigation="sectorNavigation"
    :addon-navigation="addonNavigation"
    :custom-class="customClass"
    :active-route-id="activeRouteId"
    :active-sector-id="activeRouteId"
  >
    <slot></slot>
  </scale-app-shell>
</template>

<script>
export default {
  props: {
    brandTitle: String,
    claimLang: String,
    mainNavigation: String,
    iconNavigation: String,
    sectorNavigation: String,
    addonNavigation: String,
    customClass: String,
    activeRouteId: String,
    activeSectorId: String
  }
};
</script>
