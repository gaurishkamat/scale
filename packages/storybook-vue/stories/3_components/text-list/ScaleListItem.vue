<template>
  <scale-list-item
    :icon="icon"
    :icon-size="iconSize"
    :type="type"
    :styles="styles"
  >
    <slot></slot>
  </scale-list-item>
</template>

<script>
export default {
  props: {
    icon: { type: String },
    iconSize: { type: Number, default: 16 },
    type: { type: String },
    styles: { type: Object }
  }
}
</script>