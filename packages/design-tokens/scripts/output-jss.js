import getTokens from '../src/tokens.js';
import camelCase from 'lodash/camelCase.js';
import kebabCase from 'lodash/kebabCase.js';

const tokens = getTokens();
// const fontVariants = tokens['font-variant'];
// const prefix = '--scl-font-variant';

// function generateFontVariants(fontVariants) {
//   const variants = {};

//   for (const [name, props] of Object.entries(fontVariants)) {
//     const variant = {};
//     const variantKey = camelCase(name);
//     const variantName = kebabCase(name);

//     for (const [prop, value] of Object.entries(props)) {
//       variant[camelCase(prop)] = `var(${prefix}-${variantName}, ${value})`;
//     }

//     variants[variantKey] = variant;
//   }

//   return variants;
// }

const JSS = {};

const prepareExports = (bigObject) => {
  let exportCollection = '';
  for (const [name, props] of Object.entries(bigObject)) {
    exportCollection = exportCollection.concat(
      `export const ${name} = ${JSON.stringify(props)}; `
    );
  }

  return exportCollection;
};

const evalValue = (categoryName, sectionName, key, value) => {
  let temp = value;

  if (typeof value === 'number' && key !== 'weight') {
    temp = temp / 16 + 'rem';
  }

  if (categoryName === 'shadow') {
    function px(number) {
      if (number === 0) return 0;

      return number / 16 + 'rem';
    }
    temp = Array.from(value)
      .map(({ x, y, blur, spread, color }) => {
        return `${px(x)} ${px(y)} ${px(blur)} ${px(spread)} ${color}`;
      })
      .join(', ');
  }

  // if (typeof value === 'object') {
  //   temp = JSON.stringify(value);
  // }

  return temp;
};

export const outputJSS = {
  onCategory: ({ categoryName }) => {
    JSS[camelCase(categoryName)] = {};
  },
  onSection: ({ categoryName, sectionName, tokens }) => {
    JSS[camelCase(categoryName)][camelCase(sectionName)] = {};
  },
  onValue: ({ categoryName, sectionName, key, value }) => {
    JSS[camelCase(categoryName)][camelCase(sectionName)][
      camelCase(key)
    ] = `var(--scl-${kebabCase(categoryName)}-${kebabCase(
      sectionName
    )}-${kebabCase(key)}, ${evalValue(categoryName, sectionName, key, value)})`;
  },
  onComplete: () => {
    outputJSS.content = prepareExports(JSS);
  },
  filename: 'design-tokens-telekom',
  ext: '.js',
  suffix: '',
  content: null,
};
