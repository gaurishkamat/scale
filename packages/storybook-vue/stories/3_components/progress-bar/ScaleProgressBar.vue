<template>
  <scale-progress-bar
    :icon="icon"
    :custom-color="customColor"
    :disabled="disabled"
    :label="label"
    :has-error="hasError"
    :status-inside="statusInside"
    :status-description="statusDescription"
    :show-status="showStatus"
    :stroke-width="strokeWidth"
    :percentage="percentage"
    :message="message"
    :styles="styles"
  >
  </scale-progress-bar>
</template>

<script>
export default {
  props: {
    icon: String,
    customClass: String,
    customColor: String,
    disabled: { type: Boolean, default: false },
    label: String,
    statusInside: Boolean,
    hasError: Boolean,
    statusDescription: String,
    styles: String,
    showStatus: { type: Boolean, default: true },
    strokeWidth: Number,
    percentage: Number,
    message: String,
  },
};
</script>
