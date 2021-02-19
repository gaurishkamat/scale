import postcss from 'postcss';
import each from 'lodash/each.js';
import kebabCase from 'lodash/kebabCase.js';
import {
  NAMESPACE_PREFIX,
  SPACING,
  TYPOGRAPHY,
  TYPE_VARIANT,
  COLOR,
  SHADOW,
  RADIUS,
  MOTION,
} from '../src/tokens.js';

const pxToRem = (x) => `${x / 16}rem`;
const pctToUnitless = (x) => `${parseFloat(x, 10) / 100}`;
const px = (x) => `${x}px`;
const ms = (x) => `${x}ms`;

export function generateCSS(tokens) {
  const root = postcss.root();
  const selector = postcss.rule({ selector: ':root' });

  // Loop thru categories (first level)
  each(tokens, (group, categoryName) => {
    // Append a CSS comment
    selector.append(postcss.comment({ text: categoryName.toUpperCase() }));

    // Loop thru groups (second level)
    each(group, (values, groupName) => {
      if (values == null) {
        return;
      }
      const path = [categoryName, groupName];

      // Handle and set the actual values
      getDeclarationsArrayForPath(path, values).forEach((declaration) => {
        selector.append(postcss.decl(declaration));
      });
    });
  });

  return {
    ext: 'css',
    suffix: '',
    content: root.append([selector]).toString(),
  };
}

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
  const pathString = path
    .filter((x) => x !== 'DEFAULT')
    .map(kebabCase)
    .join('-');

  each(values, (val, key) => {
    declarations.push({
      prop: `--${NAMESPACE_PREFIX}-${pathString}-${kebabCase(key)}`,
      value: processValue(path, key, val),
    });
  });

  return declarations;
}

/**
 * Transform a raw value into a CSS value.
 *
 * @param {string[]} path - [{category}, {group}] e.g. ['spacing', 'size']
 * @param {string} key
 * @param {any} val
 * @returns {string|number}
 */
function processValue(path, key, val) {
  if (val == null) {
    return '';
  }
  const [categoryName, groupName] = path;

  if (categoryName === SPACING) {
    return pxToRem(val);
  }

  if (categoryName === TYPOGRAPHY || categoryName === TYPE_VARIANT) {
    const nameOrKey = categoryName === TYPOGRAPHY ? groupName : key;
    switch (nameOrKey) {
      case 'size':
        return pxToRem(val);
      case 'leading':
        return pctToUnitless(val);
      default:
        return val;
    }
  }

  if (categoryName === COLOR) {
    return val;
  }

  if (categoryName === SHADOW) {
    return Array.from(val)
      .map(({ x, y, blur, spread, color }) => {
        return `${px(x)} ${px(y)} ${px(blur)} ${px(spread)} ${color}`;
      })
      .join(', ');
  }

  if (categoryName === RADIUS) {
    return px(val);
  }

  if (categoryName === MOTION) {
    return ms(val);
  }

  return val;
}
