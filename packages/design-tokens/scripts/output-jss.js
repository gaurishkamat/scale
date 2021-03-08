import getTokens from '../src/tokens.js';
import camelCase from 'lodash/camelCase.js';
import kebabCase from 'lodash/kebabCase.js';

const tokens = getTokens();
const fontVariants = tokens['font-variant'];
const prefix = '--scl-font-variant';

function generateFontVariants(fontVariants) {
  const variants = {};

  for (const [name, props] of Object.entries(fontVariants)) {
    const variant = {};
    const variantKey = camelCase(name);
    const variantName = kebabCase(name);

    for (const [prop, value] of Object.entries(props)) {
      variant[camelCase(prop)] = `var(${prefix}-${variantName}, ${value})`;
    }

    variants[variantKey] = variant;
  }

  return variants;
}

export const outputJSSFontVariants = {
  onCategory: ({ categoryName }) => {
    // ..
  },
  onSection: ({ categoryName, sectionName, tokens }) => {},
  onValue: ({ categoryName, sectionName, key, value }) => {},
  onComplete: () => {
    outputJSSFontVariants.content = `export default ${JSON.stringify(
      generateFontVariants(fontVariants)
    )}`; // results
  },
  filename: 'design-tokens-telekom',
  ext: '.js',
  suffix: '',
  content: null,
};
