import { withKnobs, text, select, optionsKnob as options } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { h } from 'jsx-dom';

export default {
  title: 'Components/Button',
  component: 'scale-button',
  decorators: [ withKnobs, withA11y],
  includeStories: []
}

export const playground = () => {
    // BUTTON VALUE
    const buttonValueLabel = 'Button Value';
    const buttonValueDefault = 'Standard';
    const buttonValue = text(buttonValueLabel, buttonValueDefault);

  // BUTTON VARIANT
  const variantLabel = 'Button Variant';
  const variantOptions = {
    Default: '',
    Primary: 'primary',
    Secondary: 'secondary',
    Success: 'success',
    Error: 'error',
    Warning: 'warning',
    Info: 'info'
  };
  const variantDefault = 'Default';
  const variant = select(variantLabel, variantOptions, variantDefault);

  return (
    <scale-button
      variant={variant}
  >{buttonValue}</scale-button>
  )
}
playground.story = {
  parameters: {
    docs: {
      source: {
        code: '<scale-button variant="variant" href="url">PLAYGROUND</storm-button>'
      }
    }
  },
  includeStories: []
}

export const primary = () => {
return (
    <scale-button
      variant="primary">Primary</scale-button>
  )
}
primary.story = {
  parameters: {
    docs: {
      source: {
        code: '<scale-button variant="variant" href="url">PRIMARY</storm-button>'
      }
    }
  },
  includeStories: []
}

export const secondary = () => {
return (
    <scale-button
      variant="secondary">Secondary</scale-button>
  )
}
