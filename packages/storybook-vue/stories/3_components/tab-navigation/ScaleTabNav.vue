<template>
  <scale-tab-nav>
    <scale-tab-header
      slot="headings"
      :label="label1"
      :icon="icon1"
      :icon-only="iconOnly"
    ></scale-tab-header>
    <scale-tab-panel slot="content">
      <p>This is General</p>
    </scale-tab-panel>
    <scale-tab-header
      slot="headings"
      :label="label2"
      :icon-only="iconOnly"
      :icon="icon2"
    ></scale-tab-header>
    <scale-tab-panel slot="content">
      <p>This is Usage</p>
    </scale-tab-panel>
    <scale-tab-header
      slot="headings"
      :label="label3"
      :icon-only="iconOnly"
      :icon="icon3"
    ></scale-tab-header>
    <scale-tab-panel slot="content">
      <p>This is Style</p>
    </scale-tab-panel>
    <scale-tab-header
      slot="headings"
      :label="label4"
      :icon-only="iconOnly"
      :icon="icon4"
    ></scale-tab-header>
    <scale-tab-panel slot="content">
      <p>This is Code</p>
    </scale-tab-panel>
  </scale-tab-nav>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    styles: { type: Object },
    iconOnly: { type: Boolean },
    label1: { type: String, default: "General" },
    icon1: { type: String },
    label2: { type: String, default: "Usage" },
    icon2: { type: String },
    label3: { type: String, default: "Style" },
    icon3: { type: String },
    label4: { type: String, default: "Code" },
    icon4: { type: String },
  },
};
</script>
