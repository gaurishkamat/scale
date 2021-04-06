<template>
  <scale-rating-stars
    :num-of-stars="numOfStars"
    :rating="rating"
    :small="small"
    :interactive="interactive"
    :disabled="disabled"
    :color-fill="colorFill"
    :aria-translation="ariaTranslation"
  >
  </scale-rating-stars>
</template>

<script>
export default {
  props: {
    numOfStars: { type: Number, default: 5 },
    rating: { type: Number, default: 3 },
    small: { type: Boolean, default: false },
    interactive: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    colorFill: { type: String },
    ariaTranslation: { type: String },
  },
};
</script>
