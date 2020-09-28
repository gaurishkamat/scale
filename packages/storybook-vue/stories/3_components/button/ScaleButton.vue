<template>
  <scale-button
    :alt="alt"
    :ariaLabel="ariaLabel"
    :disabled="disabled"
    :focusable="focusable"
    :icon="icon"
    :icon-after="iconAfter"
    :icon-before="iconBefore"
    :icon-size="iconSize"
    :href="href"
    :role="role"
    :size="size"
    :target="target"
    :type="type"
    :variant="variant"
    @click="click"
  >
    <slot></slot>
  </scale-button>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    alt: String,
    ariaLabel: String,
    disabled: Boolean,
    focusable: Boolean,
    icon: String,
    iconAfter: String,
    iconBefore: String,
    iconSize: String,
    href: String,
    type: String,
    role: String,
    size: String,
    target: String,
    variant: String
  },
  methods: {
    click($event) {
      /**
       * Emitted when the button is clicked.
       * @event click
       * @type {Event}
       */
      action("click");
      this.$emit("click", $event);
    }
  }
};
</script>
