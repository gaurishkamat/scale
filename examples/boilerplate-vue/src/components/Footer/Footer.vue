<template>
  <div>
    <scale-app-footer
    claim-lang="en"
    :footerNavigation="footerNavigation"
    >
    </scale-app-footer>
  </div>
</template>

<script>
import Vue from "vue";
import { ScaleAppFooter } from "@telekom/scale-components-vue";
import { footerNavigation } from "./footerNavigation";

export default Vue.extend({
  name: "ScaleFooter",
  components: { ScaleAppFooter },
  data() {
    return {
      footerNavigation: footerNavigation,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
