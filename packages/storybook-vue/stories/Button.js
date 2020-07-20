import { ScaleButton } from "@scaleds/components-telekom-vue";

// Renamed to test MDX only

export default {
  title: "Button",
  component: ScaleButton,
  parameters: {
    // controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] }
    },
    label: {
      defaultValue: 'Label',
      description: 'Description text',
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    label: 'OKOKOK',
    variant: 'primary'
  }
}

export const Text = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ScaleButton },
  template: '<scale-button :variant="variant" @click="handle">{{ label }} - {{ variant }}, {{ disabled }}</scale-button>',
  methods: { handle: action('click') }
})

export const Text2 = Text.bind({})
