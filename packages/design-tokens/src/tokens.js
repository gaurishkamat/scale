import { Color, Shadow, alphaToHex } from './factories.js';

export const NAMESPACE_PREFIX = 'scl';
export const SPACING = 'spacing';
export const TYPOGRAPHY = 'font';
export const TYPE_VARIANT = 'font-variant';
export const COLOR = 'color';
export const SHADOW = 'shadow';
export const RADIUS = 'radius';
export const OPACITY = 'opacity';
export const MOTION = 'motion';
export const Z_INDEX = 'z-index';

const tokens = {};

/* SPACING */

tokens[SPACING] = {
  DEFAULT: {
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
  mono: 'monospace',
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
const lineHeight = {
  114: '114%',
  120: '120%',
  125: '125%',
  133: '133%',
  150: '150%',
  160: '160%',
};
const letterSpacing = null;

tokens[TYPOGRAPHY] = {
  family,
  size,
  weight,
  lineHeight,
  letterSpacing,
};

const defaultVariant = {
  family: family.sans,
  size: size['16'],
  weight: weight.medium,
  lineHeight: lineHeight['150'],
  letterSpacing: 'normal',
};

tokens[TYPE_VARIANT] = {
  body: {
    ...defaultVariant,
  },
  body_short: {
    lineHeight: lineHeight['125'],
    ...defaultVariant,
  },
  body_large: {
    size: size['20'],
    lineHeight: lineHeight['160'],
    ...defaultVariant,
  },
  label: {
    size: size['12'],
    lineHeight: lineHeight['120'],
    ...defaultVariant,
  },
  label_smaller: {
    size: size['10'],
    lineHeight: lineHeight['120'],
    ...defaultVariant,
  },
  caption: {
    size: size['12'],
    lineHeight: lineHeight['133'],
    ...defaultVariant,
  },
  smaller: {
    size: size['12'],
    lineHeight: lineHeight['125'],
    ...defaultVariant,
  },
  heading_6: {
    weight: weight.bold,
    lineHeight: lineHeight['133'],
    ...defaultVariant,
  },
  heading_5: {
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_4: {
    size: size['20'],
    lineHeight: lineHeight['120'],
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_3: {
    size: size['24'],
    lineHeight: lineHeight['133'],
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_2: {
    size: size['32'],
    lineHeight: lineHeight['125'],
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_1: {
    size: size['40'],
    lineHeight: lineHeight['120'],
    weight: weight.extrabold,
    ...defaultVariant,
  },
};

/* COLOR */

const palette = {
  magenta: Color('#e20074'),
  black: Color('#000000'),
  white: Color('#ffffff'),
  grey: Color(alphaToHex(60)),
  grey0: Color(alphaToHex(5)),
  grey10: Color(alphaToHex(10)),
  grey20: Color(alphaToHex(20)),
  grey30: Color(alphaToHex(30)),
  grey40: Color(alphaToHex(40)),
  grey50: Color(alphaToHex(50)),
  grey60: Color(alphaToHex(60)),
  grey70: Color(alphaToHex(70)),
  grey80: Color(alphaToHex(80)),
  grey90: Color(alphaToHex(90)),
  grey100: Color(alphaToHex(100)),
  orange: Color('#FC9A55'),
  orange0: Color('#FFFCDF'),
  orange10: Color('#FFF4C6'),
  orange20: Color('#FFE9AE'),
  orange30: Color('#FFDA97'),
  orange40: Color('#FFC780'),
  orange50: Color('#FFB26A'),
  orange60: Color('#FC9A55'),
  orange70: Color('#DF6D3F'),
  orange80: Color('#AE461C'),
  orange90: Color('#973209'),
  orange100: Color('#7D1F09'),
  red: Color('#ED425B'),
  red0: Color('#FFC5CB'),
  red10: Color('#FFAAB6'),
  red20: Color('#FE94A5'),
  red30: Color('#F98093'),
  red40: Color('#F36A80'),
  red50: Color('#EF556E'),
  red60: Color('#ED425B'),
  red70: Color('#D82A48'),
  red80: Color('#C31C3B'),
  red90: Color('#AD0F31'),
  red100: Color('#990024'),
  blue: Color('#216BFF'),
  blue0: Color('#D6F8FF'),
  blue10: Color('#B5EBFF'),
  blue20: Color('#95DAFF'),
  blue30: Color('#77C4FF'),
  blue40: Color('#59AAFF'),
  blue50: Color('#3D8CFF'),
  blue60: Color('#216BFF'),
  blue70: Color('#0D39DF'),
  blue80: Color('#000BBF'),
  blue90: Color('#03009F'),
  blue100: Color('#140080'),
  teal: Color('#22ADB9'),
  teal0: Color('#D7F6F4'),
  teal10: Color('#B7EDEC'),
  teal20: Color('#98E4E4'),
  teal30: Color('#79D9DB'),
  teal40: Color('#5CCCD0'),
  teal50: Color('#3EBDC5'),
  teal60: Color('#22ADB9'),
  teal70: Color('#129CA3'),
  teal80: Color('#068788'),
  teal90: Color('#006967'),
  teal100: Color('#005651'),
  green: Color('#73C354'),
  green0: Color('#F0F7E0'),
  green10: Color('#E0EFC7'),
  green20: Color('#CFE8AF'),
  green30: Color('#BBDF98'),
  green40: Color('#A4D681'),
  green50: Color('#8DCD6A'),
  green60: Color('#73C354'),
  green70: Color('#52B342'),
  green80: Color('#32A032'),
  green90: Color('#248B31'),
  green100: Color('#187431'),
  clay: Color('#D2A483'),
  clay0: Color('#F2E4DF'),
  clay10: Color('#EDD8CE'),
  clay20: Color('#E9CDBE'),
  clay30: Color('#E3C2AF'),
  clay40: Color('#DEB7A0'),
  clay50: Color('#D9AD92'),
  clay60: Color('#D2A483'),
  clay70: Color('#BB8C6F'),
  clay80: Color('#A3765D'),
  clay90: Color('#87604E'),
  clay100: Color('#6A4D40'),
  rose: Color('#C16F81'),
  rose0: Color('#F6E5EB'),
  rose10: Color('#EED1DA'),
  rose20: Color('#E6BCC9'),
  rose30: Color('#DDA8B8'),
  rose40: Color('#D495A6'),
  rose50: Color('#CB8293'),
  rose60: Color('#C16F81'),
  rose70: Color('#A5566A'),
  rose80: Color('#864054'),
  rose90: Color('#652B3E'),
  rose100: Color('#511F31'),
  lilac: Color('#B682BD'),
  lilac0: Color('#F7EFF6'),
  lilac10: Color('#EFE3ED'),
  lilac20: Color('#EAD9E7'),
  lilac30: Color('#E4CCE0'),
  lilac40: Color('#D5B4D5'),
  lilac50: Color('#C59BCA'),
  lilac60: Color('#B682BD'),
  lilac70: Color('#9E6BA5'),
  lilac80: Color('#84558A'),
  lilac90: Color('#6A3E71'),
  lilac100: Color('#502857'),
  pigeon: Color('#828AC4'),
  pigeon0: Color('#E9ECF6'),
  pigeon10: Color('#D7DCEF'),
  pigeon20: Color('#C5CCE7'),
  pigeon30: Color('#B4BCDE'),
  pigeon40: Color('#A3ABD6'),
  pigeon50: Color('#929BCD'),
  pigeon60: Color('#828AC4'),
  pigeon70: Color('#6D6EB0'),
  pigeon80: Color('#5F5A9B'),
  pigeon90: Color('#534785'),
  pigeon100: Color('#46366D'),
  neptune: Color('#77B6BB'),
  neptune0: Color('#DEEDEC'),
  neptune10: Color('#CDE5E5'),
  neptune20: Color('#BBDEDD'),
  neptune30: Color('#A9D5D5'),
  neptune40: Color('#98CBCD'),
  neptune50: Color('#88C0C4'),
  neptune60: Color('#77B6BB'),
  neptune70: Color('#66A5A8'),
  neptune80: Color('#579292'),
  neptune90: Color('#4A7B7A'),
  neptune100: Color('#3F6160'),
  olive: Color('#88B179'),
  olive0: Color('#ECF3E7'),
  olive10: Color('#DCE8D4'),
  olive20: Color('#CCDEC2'),
  olive30: Color('#BBD3AF'),
  olive40: Color('#AAC89D'),
  olive50: Color('#99BD8B'),
  olive60: Color('#88B179'),
  olive70: Color('#709660'),
  olive80: Color('#597949'),
  olive90: Color('#425B33'),
  olive100: Color('#314724'),
};

tokens[COLOR] = {
  DEFAULT: {
    primary: palette.magenta,
    primaryHover: Color('#F90984'), // TODO remove? MAGENTA_HOVER
    primaryActive: Color('#CB0068'), // TODO remove? MAGENTA_ACTIVE
    ...palette,
  },
  text: {
    default: palette.grey_90,
    offset: palette.white,
    muted: palette.grey,
    link: palette.blue,
    linkHover: palette.blue,
    linkActive: palette.blue_80,
    linkVisited: palette.blue_80,
    error: palette.red_80,
  },
  background: {
    default: palette.white,
    light: palette.grey_0,
    darker: palette.grey_20,
    disabled: palette.grey_20,
    error: palette.red,
    success: palette.green,
    pending: palette.orange,
  },
};

/* SHADOW */

/*
  - ground: 0
  - card: 1
  - dropdown: 2
  - notification: 3
  - navigation: 4
  - modal: 5
*/
tokens[SHADOW] = {
  level: {
    0: [Shadow({ y: 2, blur: 8 }), Shadow({ y: 1, blur: 2 })],
    1: [Shadow({ y: 4, blur: 16 }), Shadow({ y: 2, blur: 4 })],
    '1Hover': [Shadow({ y: 6, blur: 24 }), Shadow({ y: 3, blur: 6 })],
    '1Active': [Shadow({ y: 2, blur: 8 }), Shadow({ y: 1, blur: 2 })],
    2: [Shadow({ y: 8, blur: 32 }), Shadow({ y: 4, blur: 8 })],
    '2Hover': [Shadow({ y: 10, blur: 40 }), Shadow({ y: 5, blur: 10 })],
    '2Active': [Shadow({ y: 6, blur: 24 }), Shadow({ y: 3, blur: 6 })],
    3: [Shadow({ y: 12, blur: 48 }), Shadow({ y: 6, blur: 12 })],
    '3Hover': [Shadow({ y: 14, blur: 56 }), Shadow({ y: 7, blur: 14 })],
    '3Active': [Shadow({ y: 10, blur: 40 }), Shadow({ y: 5, blur: 10 })],
    4: [Shadow({ y: 16, blur: 64 }), Shadow({ y: 8, blur: 16 })],
    '4Hover': [Shadow({ y: 18, blur: 72 }), Shadow({ y: 9, blur: 18 })],
    '4Active': [Shadow({ y: 14, blur: 56 }), Shadow({ y: 7, blur: 14 })],
    5: [Shadow({ y: 20, blur: 80 }), Shadow({ y: 10, blur: 20 })],
    '5Hover': [Shadow({ y: 22, blur: 88 }), Shadow({ y: 11, blur: 22 })],
    '5Active': [Shadow({ y: 18, blur: 72 }), Shadow({ y: 9, blur: 18 })],
  },
};

/* RADIUS */

tokens[RADIUS] = {
  DEFAULT: {
    1: 1,
    2: 2,
  },
};

/* OPACITY */

tokens[OPACITY] = {
  DEFAULT: {
    50: 0.5,
  },
};

/* MOTION */

tokens[MOTION] = {
  duration: {
    immediate: 100,
    fast: 200,
    slower: 600,
    deliberate: 800,
  },
  easing: null,
};

/* Z-INDEX */

tokens[Z_INDEX] = {
  DEFAULT: {
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
  },
};

export default function () {
  return { ...tokens }; // a copy to avoid any outputs accidentally mutating it
}
