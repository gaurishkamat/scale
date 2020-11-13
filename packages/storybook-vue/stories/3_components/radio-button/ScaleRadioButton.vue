<template>
  <scale-input
    :name="name"
    :status="status"
    :type="type"
    :label="label"
    :helper-text="helperText"
    :disabled="disabled"
    :checked="checked"
    :value="value"
    :input-id="inputId"
    @scaleChange="scaleChange"
  >
    <slot></slot>
  </scale-input>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    status: { type: String },
    name: { type: String },
    type: { type: String },
    label: { type: String },
    helperText: { type: String },
    disabled: { type: Boolean },
    checked: { type: Boolean },
    value: { type: String },
    inputId: { type: String },
    styles: { type: String }
  },
  methods: {
    scaleChange($event) {
      action("scaleChange");
      this.$emit("scaleChange", $event);
    }
  }
};
</script>
