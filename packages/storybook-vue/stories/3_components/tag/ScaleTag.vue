<template>
  <scale-tag
    :custom-class="customClass"
    :disabled="disabled"
    :dismissable="dismissable"
    :dismiss-text="dismissText"
    :href="href"
    :size="size"
    :target="target"
    :variant="variant"
    @click="click"
    @scaleClose="click"
  >
    <slot></slot>
  </scale-tag>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    customClass: String,
    disabled: { type: Boolean, default: false },
    dismissable: { type: Boolean, default: false },
    href: String,
    dismissText: String,
    size: String,
    target: { type: String, default: "_self" },
    variant: String
  },
  methods: {
    click: function($event) {
      action("click");
      this.$emit("click", $event);
    }
  }
};
</script>
