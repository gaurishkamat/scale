import { action } from "@storybook/addon-actions";
import { ScaleButton} from "@scaleds/components-telekom-vue";

export default {
  title: "Button",
  component: ScaleButton
};

export const Text = () => ({
  components: {ScaleButton},
  template: '<scale-button @click="action">Click!</scale-button>',
  methods: { action: action("clicked") }
});


