import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import { h } from 'jsx-dom';

const ICON = 'M16.471,8.321 L12.613594,0.502886112 L8.755,8.321 L0.126435258,9.57533801 L6.37,15.66 L4.89610548,24.2548735 L12.613,20.197 L20.3310826,24.2548735 L18.856,15.66 L25.1007528,9.57533801 L16.471,8.321 Z M9.41891527,9.23556376 L12.613,2.761 L15.8082728,9.23556376 L22.951,10.273 L17.7826928,15.3122039 L19.003,22.427 L12.613594,19.067774 L6.223,22.427 L7.44449521,15.3122039 L2.275,10.273 L9.41891527,9.23556376 Z';

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
