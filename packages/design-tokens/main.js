import color from 'color'

/*
  TODO
  ----
  - [ ] build CSS output
  - [ ] setup package.json files and "modules" correctly
  - [ ] add JSDoc types of TS directly
  - [ ] setup linting
  - [ ] setup prettier
*/

const Spacing = {
  scale: {
    '1': 1,
    '2': 2,
    '4': 4,
    '8': 8,
    '12': 12,
    '16': 16,
    '24': 24,
    '32': 32,
    '40': 40,
    '48': 48,
    '64': 64,
    '80': 80
  }
}

const Typography = {
  family: {
    sans: 'TeleNeoWeb, sans-serif',
    mono: 'Office Code Pro D, monospace',
    serif: null
  },
  size: {
    '10': 10,
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '32': 32,
    '40': 40,
    '56': 56
  },
  weight: {
    thin: 100,
    regular: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  leading: {
    '114': 114,
    '120': 120,
    '125': 125,
    '133': 133,
    '150': 150,
    '160': 160
  },
  tracking: null
}

const palette = {
  magenta: color('#e20074'),
  black: color('#000000'),
  white: color('#ffffff')
}

const Color = {
  palette,
  text: {},
  background: {}
}

const Shadow = {
  levels: {}
}

const Radii = {
  scale: {},
}

const Opacity = {
  scale: {}
}

const Motion = {
  duration: {}
}

export default function () {
  return {
    Spacing,
    Typography,
    Color,
    Shadow,
    Radii,
    Opacity,
    Motion
  }
}
