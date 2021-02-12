import { Color, Shadow } from './factories.js';

export const EMPTY = Object.create(null);
export const NAMESPACE_PREFIX = 'scl';
export const SPACING = 'spacing';
export const TYPOGRAPHY = 'typography';
export const COLOR = 'color';
export const SHADOW = 'shadow';
export const RADIUS = 'radius';
export const OPACITY = 'opacity';
export const MOTION = 'motion';

/*
  TODO
  ----
  - [x] build CSS output
  - [x] setup package.json files and "modules" correctly
  - [x] setup prettier
  - [ ] add all tokens - with output processing
  - [ ] add type variants
  - [x] test integration
  - [ ] add JSDoc types and type check
  - [ ] README
*/

const tokens = {};

/* SPACING */

tokens[SPACING] = {
  size: {
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

/* TYPOGRAPHY */

const family = {
  sans: 'TeleNeoWeb, sans-serif',
  mono: '"Office Code Pro D", monospace',
  serif: null,
};
const size = {
  10: 10,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  56: 56,
};
const weight = {
  thin: 100,
  regular: 400,
  medium: 500,
  bold: 700,
  extrabold: 800,
};
const leading = {
  114: '114%',
  120: '120%',
  125: '125%',
  133: '133%',
  150: '150%',
  160: '160%',
};
const tracking = EMPTY;

tokens[TYPOGRAPHY] = {
  family,
  size,
  weight,
  leading,
  tracking,
  variants: {}, // TODO
};

/* COLOR */

const palette = {
  magenta: Color('#e20074'),
  black: Color('#000000'),
  white: Color('#ffffff'),
};

tokens[COLOR] = {
  palette,
  text: {}, // TODO
  background: {}, // TODO
};

/* SHADOW */

tokens[SHADOW] = {
  level: {
    '0': [Shadow({ y: 2, blur: 8 }), Shadow({ y: 1, blur: 2 })],
    '1': [Shadow({ y: 4, blur: 16 }), Shadow({ y: 2, blur: 4 })],
    // TODO
    '1_hover': [],
    '1_active': [],
  },
};

/* RADIUS */

tokens[RADIUS] = {
  size: {
    1: 1,
    2: 2,
  },
};

/* OPACITY */

tokens[OPACITY] = {
  alpha: {
    50: 0.5,
  },
};

/* MOTION */

tokens[MOTION] = {
  duration: {
    immediate: 100,
    fast: 200,
    slower: 600,
    deliberate: 800
  },
  easing: EMPTY // TODO
};

export default function () {
  return { ...tokens }; // a copy to avoid any outputs accidentally mutating it
}
