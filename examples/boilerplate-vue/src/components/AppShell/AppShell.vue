<template>
  <div>
    <scale-app-shell>
      <div slot="header">
        <top-bar />
      </div>
      <div slot="footer">
        <scale-footer />
      </div>
    </scale-app-shell>
  </div>
</template>

<script>
import Vue from "vue";
import { ScaleAppShell } from "@telekom/scale-components-vue";
import TopBar from "../components/TopBar/TopBar.vue";
import ScaleFooter from "../components/Footer/Footer.vue";

export default Vue.extend({
  name: "AppShell",
  components: { ScaleAppShell, TopBar, ScaleFooter },
  data() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
