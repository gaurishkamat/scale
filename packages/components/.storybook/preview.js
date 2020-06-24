import { defineCustomElements } from '../dist/esm/loader';
import { addParameters } from '@storybook/html';

defineCustomElements();

addParameters({
  a11y: {}
})
