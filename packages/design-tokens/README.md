# Scale Design Tokens

> The actual source of truth.

Some ideas:

- platform-agnostic
- strict naming convention
- keep differentiation between *choices* (raw values) and *decisions* (assignments with meaning) in mind ([ref](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab))
- promote consciousness about the friction between _flexibility_ and _consistency_ within the system

## Installation

Install with npm (or yarn): `npm install @scaleds/design-tokens-telekom`

## Usage

Currently the tokens are available as CSS variables only. Other "targets" are possible.

### CSS

If you're using the Scale component library (`@scaleds/components-telekom`), the variables are already available for you.

If you want to use the tokens independently, import the `design-tokens-telekom.css` file in your CSS .

```css
@import '@scaleds/design-tokens-telekom/dist/design-tokens-telekom.css';
```

## Internals

The source is written in (type-checked, not yet) JavaScript, in `src/tokens.js`.

The `yarn build` command triggers a custom script that builds the output files in the dist/ folder.

### Example

```js
tokens.spacing = {
  DEFAULT: {
    1: 1,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
    80: 80,
  },
};
```

Yields the following CSS:

```css
:root {
    /* SPACING */
    --scl-spacing-1: 0.0625rem;
    --scl-spacing-2: 0.125rem;
    --scl-spacing-4: 0.25rem;
    --scl-spacing-8: 0.5rem;
    --scl-spacing-12: 0.75rem;
    --scl-spacing-16: 1rem;
    --scl-spacing-24: 1.5rem;
    --scl-spacing-32: 2rem;
    --scl-spacing-40: 2.5rem;
    --scl-spacing-48: 3rem;
    --scl-spacing-64: 4rem;
    --scl-spacing-80: 5rem;
}
```

## TODO

- [ ] add JSDoc types and "type check" command