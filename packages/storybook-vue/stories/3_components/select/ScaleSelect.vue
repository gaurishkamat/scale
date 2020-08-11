<template>
  <scale-input
    :name="name"
    :variant="variant"
    :type="type"
    :label="label"
    :helper-text="helperText"
    :status="status"
    :disabled="disabled"
    :required="required"
    :value="value"
    :input-id="inputId"
    :visible-size="visibleSize"
    @scaleChange="scaleChange"
    @scaleFocus="scaleFocus"
    @scaleBlur="scaleBlur"
    @scaleKeyDown="scaleKeyDown"
  >
    <slot></slot>
  </scale-input>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    name: { type: String },
    variant: { type: String },
    type: { type: String },
    label: { type: String },
    helperText: { type: String },
    status: { type: String },
    disabled: { type: Boolean },
    required: { type: Boolean },
    value: { type: String },
    inputId: { type: String },
    visibleSize: { type: Number },
    styles: { type: String }
  },
  methods: {
    scaleChange($event) {
      action("scaleChange");
      this.$emit("scaleChange", $event);
    },
    scaleFocus($event) {
      action("scaleFocus");
      this.$emit("scaleFocus", $event);
    },
    scaleBlur($event) {
      action("scaleBlur");
      this.$emit("scaleBlur", $event);
    },
    scaleKeyDown($event) {
      action("scaleKeyDown");
      this.$emit("scaleKeyDown", $event);
    }
  }
};
</script>
