import { withKnobs, text } from '@storybook/addon-knobs';
import { withActions, action } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

export default {
  title: 'Components/Input',
  component: 'scale-input',
  decorators: [withKnobs, withActions]
}

/* TODO figure out why the label is not rendering */

export const Standard = () => {
  requestAnimationFrame(() => {
    const el = document.querySelector('#input1');
    if (el != null) {
      el.addEventListener('scaleChange', action('scaleChange'))
    }
  });

  return (
    <scale-input id="input1" label="Label" placeholder="Placeholder text"></scale-input>
  );
}
