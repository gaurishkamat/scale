import { withKnobs, text, number, boolean, radios } from '@storybook/addon-knobs';
import { withActions, action } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

const CHECKBOX_ICON = 'M21.15,4.85 L9,17.05 L3.3,11.3 C2.9,10.9 2.3,10.9 1.9,11.3 C1.5,11.7 1.5,12.3 1.9,12.7 L9,19.85 L22.6,6.25 C23,5.85 23,5.25 22.6,4.85 C22.2,4.45 21.55,4.5 21.15,4.85 Z';

export default {
  title: 'Components/Input',
  component: 'scale-input',
  decorators: [withKnobs, withActions]
}

export const Standard = () => {
  const variant = radios('Variant', {
    'Static': 'static',
    'Animated': 'animated'
  }, 'static');
  const label = text('Label', 'Label text');
  const placeholder = text('Placeholder', '');
  const disabled = boolean('Disabled', false);

  return (
    <scale-input variant={variant} label={label} disabled={disabled} placeholder={placeholder}></scale-input>
  );
}

export const TextTypes = () => {
  const label = text('Label', 'Label text');
  const types = radios('Type', {
    'Text': 'text',
    'Email': 'email',
    'Number': 'number',
    'Password': 'password',
    'Tel': 'tel',
    'Url': 'url',
    'Hidden': 'hidden'
  }, 'text');

  return (
    <scale-input label={label} type={types}></scale-input>
  );
}

export const WithError = () => {
  const label = text('Label', 'Label text');
  const err = boolean('Error', true);
  const message = text('Helper text', 'Lorem ipsum dolor sit amet');

  return (
    <scale-input label={label} helper-text={message} status={err === true ? 'error' : undefined}></scale-input>
  );
}


export const Events = () => {
  const label = text('Label', 'Label text');

  requestAnimationFrame(() => {
    const el = document.querySelector('#input-events');
    if (el != null) {
      el.addEventListener('scaleChange', action('scaleChange'))
      el.addEventListener('scaleFocus', action('scaleFocus'))
      el.addEventListener('scaleBlur', action('scaleBlur'))
      el.addEventListener('scaleKeyDown', action('scaleKeyDown'))
    }
  });

  return (
    <div>
      <p><scale-input id="input-events" label={label}></scale-input></p>
      <p>Open the addons' Actions tab to see the events.</p>
    </div>
  );
}

export const Small = () => {
  const variant = radios('Variant', {
    'Static': 'static',
    'Animated': 'animated'
  }, 'static');
  const label = text('Label', 'Label text');

  return (
    <scale-input size="small" variant={variant} label={label}></scale-input>
  );
}

export const HelperText = () => {
  const label = text('Label', 'Label text');
  const helperText = text('Helper text', 'Lorem ipsum dolor sit amet');

  return (
    <scale-input variant="static" label={label} helper-text={helperText}></scale-input>
  );
}

export const MaxLengthWithCounter = () => {
  const label = text('Label', 'Label text');
  const max = number('Max length', 50)
  const counter = boolean('Counter', true)

  return (
    <scale-input label={label} max-length={max} counter={counter}></scale-input>
  );
}

export const Checkbox = () => {
  const disabled = boolean('Disabled', false);
  const err = boolean('Error', false);

  requestAnimationFrame(() => {
    const els = Array.from(document.querySelectorAll('scale-input'));
    els.forEach((el) => {
      if (el != null) {
        el.addEventListener('scaleChange', action('scaleChange'))
      }
    });
  });

  return (
    <p>
      <scale-input label="Apple" type="checkbox" icon={CHECKBOX_ICON} status={err ? 'error' : undefined} disabled={disabled} />
      <scale-input label="Orange" type="checkbox" icon={CHECKBOX_ICON} status={err ? 'error' : undefined} disabled={disabled} />
      <scale-input label="Watermelon" type="checkbox" icon={CHECKBOX_ICON} status={err ? 'error' : undefined} disabled={disabled} />
      <scale-input label="Banana" type="checkbox" icon={CHECKBOX_ICON} status={err ? 'error' : undefined} disabled={disabled} />
    </p>
  );
}

export const Radio = () => {
  const disabled = boolean('Disabled', false);
  const err = boolean('Error', false);

  requestAnimationFrame(() => {
    const els = Array.from(document.querySelectorAll('scale-input'));
    const result = document.querySelector('#value');
    const renderValue = (event) => {
      result.textContent = '';
      els.forEach((el) => {
        // `checked` is not a public prop, this doesn't work
        if (el.checked) result.textContent = el.value;
        result.textContent = event.target.value; // workaround
      });
    }

    // Would be nice if the event bubbled?
    els.forEach((el) => {
      if (el != null) {
        el.addEventListener('scaleChange', action('scaleChange'))
        el.addEventListener('scaleChange', renderValue);
      }
    });
  });

  return (
    <div>
      <p>
        <scale-input name="fruit" value="apple" label="Apple" type="radio" status={err ? 'error' : undefined} disabled={disabled} />
        <scale-input name="fruit" value="orange" label="Orange" type="radio" status={err ? 'error' : undefined} disabled={disabled} />
        <scale-input name="fruit" value="watermelon" label="Watermelon" type="radio" status={err ? 'error' : undefined} disabled={disabled} />
        <scale-input name="fruit" value="banana" label="Banana" type="radio" status={err ? 'error' : undefined} disabled={disabled} />
      </p>
      <p>
        Value: <code id="value"></code>
      </p>
    </div>
  );
}

export const RadioPrechecked = () => {
  return (
    <p>
      <scale-input name="fruit" value="apple" label="Apple" type="radio" pre-checked />
      <scale-input name="fruit" value="orange" label="Orange" type="radio" />
      <scale-input name="fruit" value="watermelon" label="Watermelon" type="radio" />
      <scale-input name="fruit" value="banana" label="Banana" type="radio" />
    </p>
  );
}