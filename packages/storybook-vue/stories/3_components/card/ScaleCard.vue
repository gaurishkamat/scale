<template>
  <scale-card
    :custom-class="customClass"
    :label="label"
    :to="to"
    :target="target"
    :rel="rel"
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
    to: String,
    target: { type: String, default: "_self" },
    rel: { type: String, default: "_self" },
    styles: { type: Object }
  }
};
</script>
