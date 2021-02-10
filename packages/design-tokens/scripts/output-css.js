import postcss from 'postcss';
import each from 'lodash/each.js';
import kebabCase from 'lodash/kebabCase.js';
import {
  EMPTY,
  NAMESPACE_PREFIX,
  SPACING,
  TYPOGRAPHY,
  COLOR,
  RADIUS,
  SHADOW,
} from '../src/tokens.js';

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
      prop: `--${NAMESPACE_PREFIX}-${path.join('-')}-${kebabCase(key)}`,
      value: procressValue(path, key, val),
    });
  });

  return declarations;
}

const pxToRem = (x) => `${x / 16}rem`;
const pctToUnitless = (x) => `${parseFloat(x, 10) / 100}`;
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
    return val;
  }

  if (category === SHADOW) {
    return Array.from(val)
      .map(({ x, y, blur, spread, color }) => {
        return `${px(x)} ${px(y)} ${px(blur)} ${px(spread)} ${color}`;
      })
      .join(', ');
  }

  if (category === RADIUS) {
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
