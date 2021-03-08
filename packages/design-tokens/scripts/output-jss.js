import camelCase from 'lodash/camelCase.js';
import kebabCase from 'lodash/kebabCase.js';
import prettier from 'prettier';

const baseFontSize = 16;
const JSS = {};

function rem(number) {
  if (number === 0) return 0;

  return number / baseFontSize + 'rem';
}

const prepareExports = (object) => {
  let exportCollection = '';
  for (const [name, props] of Object.entries(object)) {
    exportCollection = exportCollection.concat(
      `export const ${name} = ${JSON.stringify(props)}; `
    );
  }

  return exportCollection;
};

const evalValue = (categoryName, sectionName, key, value) => {
  if (typeof value === 'number' && key !== 'weight') {
    return value / baseFontSize + 'rem';
  }

  if (categoryName === 'shadow') {
    return Array.from(value)
      .map(({ x, y, blur, spread, color }) => {
        return `${rem(x)} ${rem(y)} ${rem(blur)} ${rem(spread)} ${color}`;
      })
      .join(', ');
  }

  return value;
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
    outputJSS.content = prettier.format(prepareExports(JSS), {
      semi: false,
      parser: 'babel',
    });
  },
  filename: 'design-tokens-telekom',
  ext: '.js',
  suffix: '',
  content: null,
};
