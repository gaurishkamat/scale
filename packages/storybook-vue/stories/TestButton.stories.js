import { action } from "@storybook/addon-actions";
import TestButton from './TestButton.vue';
import { Template } from './TestButton.stories.mdx';

export default {
  title: "Test Button",
  component: TestButton
};

/* const Template = (args) => ({
  components: { TestButton },
  data() {
    return { args }
  },
  template: '<test-button v-bind="args"></test-button>'
}) */

export const Text = () => ({
  components: { TestButton },
  template: '<test-button @click.native="action" label="Click!" />',
  methods: { action: action("clicked") }
});

export const WithArgs = Template.bind(null)
