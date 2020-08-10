<template>
  <scale-tab-nav>
    <scale-tab-header
      slot="headings"
      :label="label1"
      :icon="icon1"
      :icon-only="iconOnly"
    ></scale-tab-header>
    <scale-tab-panel slot="content">
      <p>This is FOO</p>
    </scale-tab-panel>
    <scale-tab-header
      slot="headings"
      :label="label2"
      :icon-only="iconOnly"
      :icon="icon2"
    ></scale-tab-header>
    <scale-tab-panel slot="content">
      <p>This is BAR</p>
    </scale-tab-panel>
  </scale-tab-nav>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    styles: { type: Object },
    iconOnly: { type: Boolean },
    label1: { type: String, default: "Foo" },
    icon1: { type: String },
    label2: { type: String, default: "Bar" },
    icon2: { type: String },
  },
};
</script>
