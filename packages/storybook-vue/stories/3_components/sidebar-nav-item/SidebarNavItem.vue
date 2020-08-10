<template>
  <scale-sidebar-nav-item
    :condensed="condensed"
    :bold="bold"
    :is-current="isCurrent"
    :styles="styles"
  >
    <slot></slot>
  </scale-sidebar-nav-item>
</template>

<script>
export default {
  props: {
    condensed: { type: Boolean, default: false },
    bold: { type: Boolean, default: false },
    isCurrent: { type: Boolean, default: false },
    styles: { type: Object }
  }
}
</script>