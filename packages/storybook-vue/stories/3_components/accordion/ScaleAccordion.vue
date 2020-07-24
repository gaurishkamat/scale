<template>
  <scale-accordion :styles="styles" :dependent="dependent">
    <slot></slot>
  </scale-accordion>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    styles: { type: Object },
    dependent: { type: Boolean, default: false },
  },
};
</script>
