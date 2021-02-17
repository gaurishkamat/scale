import merge from 'lodash/merge';

export type CssClassMap =
  | string
  | {
      [className: string]: boolean;
    };

export const combineObjects = (a: object, b: object): object => merge({}, a, b);

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

// eg isPseudoClassSupported(':focus-visible') // true for chrome, false for safari
export const isPseudoClassSupported = pseudoClass => {
  // Get the document stylesheet1
  let ss = document.styleSheets[0];

  // Create a stylesheet if one doesn't exist
  if (!ss) {
    const el = document.createElement('style');
    document.head.appendChild(el);
    ss = document.styleSheets[0];
    document.head.removeChild(el);
  }

  // Test the pseudo-class by trying to style with it
  function testPseudo() {
    try {
      if (!/^:/.test(pseudoClass)) {
        pseudoClass = ':' + pseudoClass;
      }
      ss.insertRule('html' + pseudoClass + '{}', 0);
      ss.deleteRule(0);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Run the test
  return testPseudo();
};
