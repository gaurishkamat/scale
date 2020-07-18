import { action } from "@storybook/addon-actions";
import TestButton from './TestButton.vue';

export default {
  title: "Test Button",
  component: TestButton
};

export const Text = () => ({
  components: { TestButton },
  template: '<test-button @click.native="action" label="Click!" />',
  methods: { action: action("clicked") }
});
