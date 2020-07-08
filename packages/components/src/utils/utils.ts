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
