<template>
  <scale-input
    :name="name"
    :variant="variant"
    :type="type"
    :label="label"
    :helper-text="helperText"
    :status="status"
    :max-length="maxLength"
    :min-length="minLength"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :counter="counter"
    :value="value"
    :input-id="inputId"
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
    maxLength: { type: Number },
    minLength: { type: Number },
    placeholder: { type: String },
    disabled: { type: Boolean },
    required: { type: Boolean },
    counter: { type: Boolean },
    value: { type: String },
    inputId: { type: String },
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
