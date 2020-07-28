<template>
  <scale-table
    :customClass="customClass"
    :show-sort="showSort"
    :size="size"
    :styles="styles"
  >
    <slot></slot>
  </scale-table>
</template>

<script>
export default {
  props: {
    customClass: String,
    showSort: Boolean,
    size: String,
    styles: String
  }
};
</script>
