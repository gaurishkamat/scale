<template>
  <scale-logo
    :variant="variant"
    :transparent="transparent"
    :language="language"
    :size="size"
    :click-handler="clickHandler"
    :href="href"
    :accessibility-title="accessibilityTitle"
  >
  </scale-logo>
</template>

<script>
export default {
  props: {
    variant: { type: "magenta" | "white", default: "magenta" },
    transparent: { type: Boolean, default: false },
    language: {
      type:
        "de" |
        "en" |
        "cz" |
        "hr" |
        "hu" |
        "me" |
        "mk_kyr" |
        "mk_lat" |
        "ro" |
        "sk" |
        "",
      default: "en",
    },
    size: { type: Number, default: 36 },
    href: { type: String },
    accessibilityTitle: { type: String, default: "Telekom Logo" },
  },
};
</script>
