<template>
  <scale-app-shell
    :main-navigation="mainNavigation"
    :icon-navigation="iconNavigation"
    :sector-navigation="sectorNavigation"
    :addon-navigation="addonNavigation"
    :custom-class="customClass"
  >
    <slot></slot>
  </scale-app-shell>
</template>

<script>
export default {
  props: {
    mainNavigation: String,
    iconNavigation: String,
    sectorNavigation: String,
    addonNavigation: String,
    customClass: String,
  }
};
</script>
