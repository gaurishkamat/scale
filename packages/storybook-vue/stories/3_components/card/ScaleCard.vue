<template>
  <scale-card
    :custom-class="customClass"
    :label="label"
    :href="href"
    :target="target"
    :interactive="interactive"
    :no-padding="noPadding"
    :disabled="disabled"
    :styles="styles"
  >
    <slot></slot>
  </scale-card>
</template>

<script>
export default {
  props: {
    customClass: String,
    label: String,
    href: String,
    target: { type: String, default: "_self" },
    interactive: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    styles: { type: Object }
  }
};
</script>
