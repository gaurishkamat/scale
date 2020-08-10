<template>
  <scale-sidebar-nav-collapsible
    :tag="tag"
    :label="label"
    :is-expanded="isExpanded"
    :is-current="isCurrent"
    :condensed="condensed"
    :bold="bold"
    :icon-size="iconSize"
    :styles="styles"
  >
    <slot></slot>
  </scale-sidebar-nav-collapsible>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: 'li' },
    label: { type: String },
    isExpanded: { type: Boolean },
    isCurrent: { type: Boolean, default: false },
    bold: { type: Boolean, default: false },
    condensed: { type: Boolean, default: false },
    iconSize: { type: Number, default: 16 },
    styles: { type: Object }
  }
}
</script>