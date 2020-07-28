<template>
  <scale-divider
    :custom-class="customClass"
    :vertical="vertical"
    :styles="styles"
  >
  </scale-divider>
</template>

<script>
export default {
  props: {
    customClass: String,
    vertical: Boolean,
    styles: String
  }
};
</script>
