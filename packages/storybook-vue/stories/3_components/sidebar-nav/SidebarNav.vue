<template>
  <scale-sidebar-nav
    :aria-label="ariaLabel"
    :styles="styles"
  >
    <slot></slot>
  </scale-sidebar-nav>
</template>

<script>
export default {
  props: {
    ariaLabel: String,
    styles: { type: Object }
  }
}
</script>