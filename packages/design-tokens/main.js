import Color from 'color';

export const EMPTY = Object.create(null);
export const SPACING = 'spacing';
export const TYPOGRAPHY = 'typography';
export const COLOR = 'color';
export const SHADOW = 'shadow';
export const RADII = 'radii';
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
  - [ ] test integration
  - [ ] add JSDoc types and type check
*/

const tokens = {};

/* SPACING */

tokens[SPACING] = {
  scale: {
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
  114: 114,
  120: 120,
  125: 125,
  133: 133,
  150: 150,
  160: 160,
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
  gray: Color(0, 0, 0).alpha(0.5),
};

tokens[COLOR] = {
  palette,
  text: {}, // TODO
  background: {}, // TODO
};

/* SHADOW */

tokens[SHADOW] = {
  level: {}, // TODO
};

/* RADII */

tokens[RADII] = {
  scale: {
    1: 1,
    2: 2,
  },
};

/* OPACITY */

tokens[OPACITY] = {
  scale: {
    50: 0.5,
  },
};

/* MOTION */

tokens[MOTION] = {
  duration: {}, // TODO
};

export default function () {
  return { ...tokens }; // a copy to avoid any outputs accidentally mutating it
}
