import postcss from 'postcss';
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

const root = postcss.root();
const selector = postcss.rule({ selector: ':root' });

export const outputCSS = {
  onCategory: ({ categoryName }) => {
    selector.append(postcss.comment({ text: categoryName.toUpperCase() }));
  },
  onSection: () => {},
  onValue: ({ categoryName, sectionName, key, value }) => {
    const path = [categoryName, sectionName];
    const declaration = getDeclaration(path, key, value);
    selector.append(postcss.decl(declaration));
  },
  onComplete: () => {
    outputCSS.content = root.append([selector]).toString();
  },
  ext: '.css',
  suffix: '',
  content: null,
};

/**
 * @typedef {Object} Declaration - A CSS declaration for postcss
 * @prop {string} prop
 * @prop {string|number} value
 */

/**
 * @param {array} path
 * @param {string} key
 * @param {any} val
 * @returns {Declaration}
 */
function getDeclaration(path, key, val) {
  const pathString = path
    .filter((x) => x !== 'DEFAULT')
    .map(kebabCase)
    .join('-');

  return {
    prop: `--${NAMESPACE_PREFIX}-${pathString}-${kebabCase(key)}`,
    value: processValue(path, key, val),
  };
}

/**
 * Transform a raw value into a CSS value.
 *
 * @param {string[]} path - [{category}, {section}] e.g. ['spacing', 'size']
 * @param {string} key
 * @param {any} val
 * @returns {string|number}
 */
function processValue(path, key, val) {
  if (val == null) {
    return '';
  }
  const [categoryName, sectionName] = path;

  if (categoryName === SPACING) {
    return pxToRem(val);
  }

  if (categoryName === TYPOGRAPHY || categoryName === TYPE_VARIANT) {
    const nameOrKey = categoryName === TYPOGRAPHY ? sectionName : key;
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
    return sectionName === 'duration' ? ms(val) : val;
  }

  return val;
}
