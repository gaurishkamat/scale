<template>
  <scale-input
    :name="name"
    :variant="variant"
    :type="type"
    :label="label"
    :size="size"
    :rows="rows"
    :cols="cols"
    :helper-text="helperText"
    :status="status"
    :max-length="maxLength"
    :min-length="minLength"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :counter="counter"
    :pre-checked="preChecked"
    :resize="resize"
    :value="value"
    :input-id="inputId"
    :icon="icon"
    :multiple="multiple"
    :visible-size="visibleSize"
    :transparent="transparent"
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
    size: { type: String },
    rows: { type: Number },
    cols: { type: Number },
    helperText: { type: String },
    status: { type: String },
    maxLength: { type: Number },
    minLength: { type: Number },
    placeholder: { type: String },
    disabled: { type: Boolean },
    required: { type: Boolean },
    counter: { type: Boolean },
    preChecked: { type: Boolean },
    resize: { type: String },
    value: { type: String },
    inputId: { type: String },
    icon: { type: String },
    multiple: { type: Boolean },
    visibleSize: { type: Number },
    transparent: { type: Boolean },
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
