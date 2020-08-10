<template>
  <scale-list :variant="variant">
    <slot></slot>
  </scale-list>
</template>

<script>
export default {
  props: {
    variant: { type: String, default: 'unordered' },
    styles: { type: Object }
  }
}
</script>