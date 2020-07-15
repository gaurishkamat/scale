import { action } from "@storybook/addon-actions";

export default {
  title: "Button"
};

export const Text = () => ({
  template: '<scale-button @click="action">Click!</scale-button>',
  methods: { action: action("clicked") }
});
