<template>
  <scale-collapsible
    :styles="styles"
    :is-expanded="isExpanded"
    @scaleClick="scaleClick"
    @scaleKeyDown="scaleKeyDown"
  >
    <slot name="headline"></slot>
    <slot name="content"></slot>
  </scale-collapsible>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    styles: { type: Object },
    isExpanded: { type: Boolean },
  },
  // TODO make sure this is working
  methods: {
    scaleClick($event) {
      action("scaleClick");
      this.$emit("scaleClick", $event);
    },
    scaleKeyDown($event) {
      action("scaleKeyDown");
      this.$emit("scaleKeyDown", $event.key);
    },
  },
};
</script>
