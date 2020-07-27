import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import { h } from 'jsx-dom';

const ICON = 'M23.55 9.4c-.25-.7-.85-1.2-1.6-1.25l-6-.45-2.25-5.55C13.4 1.45 12.75 1 12 1s-1.4.45-1.7 1.15L8 7.75 2 8.2c-.75.05-1.35.55-1.6 1.25s0 1.45.55 1.95l4.6 3.9-1.4 5.8c-.15.7.1 1.45.7 1.9.3.25.7.35 1.05.35.35 0 .65-.1.95-.25L12 19.9l5.1 3.2c.65.4 1.4.35 2-.05.6-.45.85-1.2.7-1.9l-1.45-5.85 4.6-3.9c.6-.55.85-1.3.6-2zm-1.5.8l-5.3 4.5 1.65 6.75c.05.2-.05.3-.1.35-.05.05-.2.1-.35 0L12 18.1l-5.9 3.65c-.15.1-.3.05-.35 0-.05-.05-.15-.15-.1-.35l1.65-6.75-5.3-4.5c-.15-.1-.1-.25-.1-.35 0-.05.1-.2.25-.2l6.95-.5 2.65-6.45c.05-.15.15-.15.25-.15s.2.05.3.2l2.65 6.45 6.95.5c.2 0 .25.15.25.2 0 .1 0 .25-.1.35z';

/*
  `disabled="false"` is added everywhere to prevent a bug in the Storybook static build,
  it should be temporary and removed as soon as a fix in found.
*/

export default {
  title: 'Components/Button',
  component: 'scale-button',
  decorators: [withKnobs],
}

export const Standard = () => {
  const label = text('Label', 'Hello');

  return (
    <scale-button disabled="false">{label}</scale-button>
  );
}

export const Variants = () => {
  const label = text('Label', 'Hello');
  const variant = radios('Variant', {
    'Default': '',
    'Secondary': 'secondary'
  }, 'secondary');

  return (
    <scale-button variant={variant} disabled="false">{label}</scale-button>
  )
}

export const Disabled = () => {
  const label = text('Label', 'Hello');
  const variant = radios('Variant', {
    'Default': '',
    'Secondary': 'secondary'
  }, '');
  const disabled = boolean('Disabled', true)

  return (
    <scale-button variant={variant} disabled={disabled}>{label}</scale-button>
  )
}

export const WithIcon = () => {
  const label = text('Label', 'Hello');
  const variant = radios('Variant', {
    'Default': '',
    'Secondary': 'secondary'
  }, '');

  return (
    <scale-button icon-before={ICON} variant={variant} disabled="false">{label}</scale-button>
  )
}

export const IconOnly = () => {
  const label = text('Label', 'Hello');
  const variant = radios('Variant', {
    'Default': '',
    'Secondary': 'secondary'
  }, '');

  return (
    <scale-button icon={ICON} variant={variant} disabled="false">{label}</scale-button>
  )
}

export const Small = () => {
  const label = text('Label', 'Hello');
  const size = radios('Size', {
    'Default': '',
    'Small': 'small'
  }, 'small');

  return (
    <scale-button size={size} disabled="false">{label}</scale-button>
  )
}

export const Link = () => {
  const label = text('Label', 'Hello');
  const href = text('URL', 'https://example.com')
  const variant = radios('Variant', {
    'Default': '',
    'Secondary': 'secondary'
  }, '');

  return (
    <scale-button href={href} variant={variant} disabled="false">{label}</scale-button>
  )
}
