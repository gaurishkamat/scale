<template>
  <div>
    <scale-app-header
      id="header"
      custom-class="customClass"
      :mainNavigation="mainNavigation"
      :iconNavigation="iconNavigation"
      :sectorNavigation="sectorNavigation"
      activeRouteId="Third Level 24"
      activeSectorId="Personal38"
    >
      <div slot="menu-addon">
        <scale-nav-segment is-active="true" href="#custom-addon-1">
          Custom Addon #1
        </scale-nav-segment>
        <scale-nav-segment href="#custom-addon-2">
          Custom Addon #2
        </scale-nav-segment>
      </div>
    </scale-app-header>
  </div>
</template>

<script>
import Vue from "vue";
import { ScaleAppHeader, ScaleNavSegment } from "@telekom/scale-components-vue";
import { mainNavigation } from "./data/mainNavigation";
import { iconNavigation } from "./data/iconNavigation";
import { sectorNavigation } from "./data/sectorNavigation";

export default Vue.extend({
  name: "TopBar",
  components: { ScaleAppHeader, ScaleNavSegment },
  data() {
    return {
      mainNavigation: mainNavigation,
      iconNavigation: iconNavigation,
      sectorNavigation: sectorNavigation,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
