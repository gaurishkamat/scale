import postcss from 'postcss';
import each from 'lodash/each.js';
import { EMPTY, SPACING, TYPOGRAPHY, COLOR, RADII } from '../main.js';

/**
 * @typedef {Object} Declaration - A CSS declaration for postcss
 * @prop {string} prop
 * @prop {string|number} value
 */

/**
 * @param {array} path
 * @param {Object<string.any>} values
 * @returns {Declaration[]}
 */
function getDeclarationsArrayForPath(path, values) {
  const declarations = [];

  each(values, (val, key) => {
    declarations.push({
      prop: `--${path.join('-')}-${key}`,
      value: procressValue(path, key, val),
    });
  });

  return declarations;
}

const pxToRem = (x) => `${x / 16}rem`;
const pctToUnitless = (x) => `${x / 100}`;
const px = (x) => `${x}px`;

/**
 * Transform a raw value into a CSS value.
 *
 * @param {string[]} path
 * @param {string} key
 * @param {any} val
 * @returns {string|number}
 */
function procressValue(path, key, val) {
  if (val == null) {
    return '';
  }
  const [category, group] = path;

  if (category === SPACING) {
    return pxToRem(val);
  }

  if (category === TYPOGRAPHY) {
    switch (group) {
      case 'size':
        return pxToRem(val);
      case 'leading':
        return pctToUnitless(val);
      default:
        return val;
    }
  }

  if (category === COLOR) {
    return val.hsl(); // default is `rgb()`
  }

  if (category === RADII) {
    return px(val);
  }

  return val;
}

export function generateCSS(tokens) {
  const root = postcss.root();
  const selector = postcss.rule({ selector: ':root' });

  // Loop thru categories (first level)
  each(tokens, (group, category) => {
    // Append a CSS comment
    selector.append(postcss.comment({ text: category.toUpperCase() }));

    // Loop thru groups (second level)
    each(group, (values, key) => {
      if (values === EMPTY || values == null) {
        return;
      }
      const path = [category, key];

      // Handle and set the actual values
      getDeclarationsArrayForPath(path, values).forEach((declaration) =>
        selector.append(postcss.decl(declaration))
      );
    });
  });

  return {
    ext: 'css',
    content: root.append([selector]).toString(),
  };
}
