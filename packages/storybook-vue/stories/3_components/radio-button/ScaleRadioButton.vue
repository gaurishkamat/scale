<template>
  <scale-input
    :name="name"
    :type="type"
    :label="label"
    :disabled="disabled"
    :pre-checked="preChecked"
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
    name: { type: String },
    type: { type: String },
    label: { type: String },
    disabled: { type: Boolean },
    preChecked: { type: Boolean },
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
