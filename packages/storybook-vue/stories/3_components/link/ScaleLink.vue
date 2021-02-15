<template>
  <scale-link
    :block="block"
    :disabled="JSON.stringify(disabled)"
    :href="href"
    :icon="icon"
    :icon-size="iconSize"
    :icon-accessibility-title="iconAccessibilityTitle"
    :target="target"
    :variant="variant"
    :styles="styles"
  >
    <slot></slot>
  </scale-link>
</template>

<script>
export default {
  props: {
    block: { type: Boolean, default: false },
    customClass: String,
    disabled: { type: Boolean, default: false },
    href: String,
    icon: String,
    iconSize: { type: Number, default: 16 },
    iconAccessibilityTitle: { type: String },
    target: { type: String, default: "_self" },
    variant: String,
    styles: String,
  },
};
</script>
