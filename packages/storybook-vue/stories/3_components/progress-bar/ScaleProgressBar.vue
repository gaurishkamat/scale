<template>
    <scale-progress-bar
      :icon="icon"
      :custom-class="customClass"
      :custom-color="customColor"
      :disabled="disabled"
      :has-error="hasError"
      :status-inside="statusInside"
      :status-description="statusDescription"
      :show-status="showStatus"
      :stroke-width="strokeWidth"
      :percentage="percentage"
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
      statusInside: Boolean,
      hasError: Boolean,
      statusDescription: String,
      styles: String,
      showStatus: { type: Boolean, default: true },
      strokeWidth: Number,
      percentage: Number,
    }
  }
</script>




