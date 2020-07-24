<template>
  <scale-accordion :styles="styles" :dependend="dependend">
    <slot></slot>
  </scale-accordion>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    styles: { type: Object },
    dependend: { type: Boolean, default: false },
  },
};
</script>
