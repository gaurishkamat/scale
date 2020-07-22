<template>
  <scale-card
    :custom-class="customClass"
    :href="href"
    :target="target"
    :interactive="interactive"
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
    href: String,
    target: { type: String, default: '_self' },
    interactive: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    styles: { type: Object }
  }
}
</script>