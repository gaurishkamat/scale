<template>
  <scale-button 
    :ariaLabel="ariaLabel"
    :disabled="disabled"
    :focusable="focusable"
    :icon="icon"
    :iconAfter="iconAfter"
    :iconBefore="iconBefore"
    :iconSize="iconSize"
    :href="href"
    :role="role"
    :target="target"
    :type="type"
    :variant="variant"
    @click="handle"
    >
    <slot></slot>
  </scale-button>
</template>

<script>
import { action } from "@storybook/addon-actions"

export default {
  props: {
    ariaLabel: String,
    disabled: Boolean,
    focusable: Boolean,
    icon: String,
    iconAfter: String,
    iconBefore: String,
    iconSize: String,
    href: String,
    role: String,
    target: String,
    variant: String
  },
  methods: {
    handle($event){
      /**
       * Emitted when the button is clicked.
       * @event click
       * @type {Event}
       */
      action('click')
      this.$emit('click', $event)
    },
    crystal($method){
      /**
      * The Crystal Method
      * @method Crystal
      * @type {Method}
      */
      alert('The crystal method')
      this.$emit('crystal', $method)
    }
  }
}
</script>
