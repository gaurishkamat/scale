import { withKnobs, text } from '@storybook/addon-knobs';
import { h } from 'jsx-dom';

export default {
  title: 'Components/Breadcrumb',
  component: 'scale-breadcrumb',
  decorators: [withKnobs]
}

/* TODO show focus state  */

export const Playground = () => {
  return (
    <scale-breadcrumb separator={text('Separator')}>
      <a href="#1" id="one">First link</a>
      <a href="#2">Second link</a>
      <a href="#3">Third link</a>
    </scale-breadcrumb>
  )
}

export const WithIcon = () => {
  return (
    <scale-breadcrumb>
      <a href="#1">First link</a>
      <a href="#2">Second link</a>
      <a href="#3">Third link</a>
      <span slot="separator">
        <scale-icon
          size="18"
          path="M8.306 22.679a1.137 1.137 0 01-.061-1.481l.06-.07 7.741-8.126-7.74-8.13a1.137 1.137 0 01-.061-1.481l.06-.07c.387-.406 1-.427 1.411-.064l.066.064L19 13.001 9.782 22.68a1.01 1.01 0 01-1.476 0z"
        />
      </span>
    </scale-breadcrumb>
  )
}

export const CurrentWithNoLink = () => {
  return (
    <scale-breadcrumb>
      <a href="#1">First link</a>
      <a href="#2">Second link</a>
      <span>Third, just text</span>
    </scale-breadcrumb>
  )
}
