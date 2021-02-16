<template>
  <scale-accordion :styles="styles" :dependent="dependent">
    <slot></slot>
  </scale-accordion>
</template>

<script>
export default {
  props: {
    styles: { type: Object },
    dependent: { type: Boolean, default: false },
  },
};
</script>
