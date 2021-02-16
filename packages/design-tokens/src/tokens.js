import { Color, Shadow, alphaToHex } from './factories.js';

export const EMPTY = Object.create(null);
export const NAMESPACE_PREFIX = 'scl';
export const SPACING = 'spacing';
export const TYPOGRAPHY = 'type';
export const TYPE_VARIANT = 'type-variant';
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
};

const defaultVariant = {
  family: family.sans,
  size: size['16'],
  weight: weight.medium,
  leading: leading['150'],
  tracking: 'normal',
};

tokens[TYPE_VARIANT] = {
  body: {
    ...defaultVariant,
  },
  body_short: {
    leading: leading['125'],
    ...defaultVariant,
  },
  body_large: {
    size: size['20'],
    leading: leading['160'],
    ...defaultVariant,
  },
  label: {
    size: size['12'],
    leading: leading['120'],
    ...defaultVariant,
  },
  label_smaller: {
    size: size['10'],
    leading: leading['120'],
    ...defaultVariant,
  },
  caption: {
    size: size['12'],
    leading: leading['133'],
    ...defaultVariant,
  },
  smaller: {
    size: size['12'],
    leading: leading['125'],
    ...defaultVariant,
  },
  heading_6: {
    weight: weight.bold,
    leading: leading['133'],
    ...defaultVariant,
  },
  heading_5: {
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_4: {
    size: size['20'],
    leading: leading['120'],
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_3: {
    size: size['24'],
    leading: leading['133'],
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_2: {
    size: size['32'],
    leading: leading['125'],
    weight: weight.extrabold,
    ...defaultVariant,
  },
  heading_1: {
    size: size['40'],
    leading: leading['120'],
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
  grey_0: Color(alphaToHex(5)),
  grey_10: Color(alphaToHex(10)),
  grey_20: Color(alphaToHex(20)),
  grey_30: Color(alphaToHex(30)),
  grey_40: Color(alphaToHex(40)),
  grey_50: Color(alphaToHex(50)),
  grey_60: Color(alphaToHex(60)),
  grey_70: Color(alphaToHex(70)),
  grey_80: Color(alphaToHex(80)),
  grey_90: Color(alphaToHex(90)),
  grey_100: Color(alphaToHex(100)),
  orange: Color('#FC9A55'),
  orange_0: Color('#FFFCDF'),
  orange_10: Color('#FFF4C6'),
  orange_20: Color('#FFE9AE'),
  orange_30: Color('#FFDA97'),
  orange_40: Color('#FFC780'),
  orange_50: Color('#FFB26A'),
  orange_60: Color('#FC9A55'),
  orange_70: Color('#DF6D3F'),
  orange_80: Color('#AE461C'),
  orange_90: Color('#973209'),
  orange_100: Color('#7D1F09'),
  red: Color('#ED425B'),
  red_0: Color('#FFC5CB'),
  red_10: Color('#FFAAB6'),
  red_20: Color('#FE94A5'),
  red_30: Color('#F98093'),
  red_40: Color('#F36A80'),
  red_50: Color('#EF556E'),
  red_60: Color('#ED425B'),
  red_70: Color('#D82A48'),
  red_80: Color('#C31C3B'),
  red_90: Color('#AD0F31'),
  red_100: Color('#990024'),
  blue: Color('#216BFF'),
  blue_0: Color('#D6F8FF'),
  blue_10: Color('#B5EBFF'),
  blue_20: Color('#95DAFF'),
  blue_30: Color('#77C4FF'),
  blue_40: Color('#59AAFF'),
  blue_50: Color('#3D8CFF'),
  blue_60: Color('#216BFF'),
  blue_70: Color('#0D39DF'),
  blue_80: Color('#000BBF'),
  blue_90: Color('#03009F'),
  blue_100: Color('#140080'),
  teal: Color('#22ADB9'),
  teal_0: Color('#D7F6F4'),
  teal_10: Color('#B7EDEC'),
  teal_20: Color('#98E4E4'),
  teal_30: Color('#79D9DB'),
  teal_40: Color('#5CCCD0'),
  teal_50: Color('#3EBDC5'),
  teal_60: Color('#22ADB9'),
  teal_70: Color('#129CA3'),
  teal_80: Color('#068788'),
  teal_90: Color('#006967'),
  teal_100: Color('#005651'),
  green: Color('#73C354'),
  green_0: Color('#F0F7E0'),
  green_10: Color('#E0EFC7'),
  green_20: Color('#CFE8AF'),
  green_30: Color('#BBDF98'),
  green_40: Color('#A4D681'),
  green_50: Color('#8DCD6A'),
  green_60: Color('#73C354'),
  green_70: Color('#52B342'),
  green_80: Color('#32A032'),
  green_90: Color('#248B31'),
  green_100: Color('#187431'),
  clay: Color('#D2A483'),
  clay_0: Color('#F2E4DF'),
  clay_10: Color('#EDD8CE'),
  clay_20: Color('#E9CDBE'),
  clay_30: Color('#E3C2AF'),
  clay_40: Color('#DEB7A0'),
  clay_50: Color('#D9AD92'),
  clay_60: Color('#D2A483'),
  clay_70: Color('#BB8C6F'),
  clay_80: Color('#A3765D'),
  clay_90: Color('#87604E'),
  clay_100: Color('#6A4D40'),
  rose: Color('#C16F81'),
  rose_0: Color('#F6E5EB'),
  rose_10: Color('#EED1DA'),
  rose_20: Color('#E6BCC9'),
  rose_30: Color('#DDA8B8'),
  rose_40: Color('#D495A6'),
  rose_50: Color('#CB8293'),
  rose_60: Color('#C16F81'),
  rose_70: Color('#A5566A'),
  rose_80: Color('#864054'),
  rose_90: Color('#652B3E'),
  rose_100: Color('#511F31'),
  lilac: Color('#B682BD'),
  lilac_0: Color('#F7EFF6'),
  lilac_10: Color('#EFE3ED'),
  lilac_20: Color('#EAD9E7'),
  lilac_30: Color('#E4CCE0'),
  lilac_40: Color('#D5B4D5'),
  lilac_50: Color('#C59BCA'),
  lilac_60: Color('#B682BD'),
  lilac_70: Color('#9E6BA5'),
  lilac_80: Color('#84558A'),
  lilac_90: Color('#6A3E71'),
  lilac_100: Color('#502857'),
  pigeon: Color('#828AC4'),
  pigeon_0: Color('#E9ECF6'),
  pigeon_10: Color('#D7DCEF'),
  pigeon_20: Color('#C5CCE7'),
  pigeon_30: Color('#B4BCDE'),
  pigeon_40: Color('#A3ABD6'),
  pigeon_50: Color('#929BCD'),
  pigeon_60: Color('#828AC4'),
  pigeon_70: Color('#6D6EB0'),
  pigeon_80: Color('#5F5A9B'),
  pigeon_90: Color('#534785'),
  pigeon_100: Color('#46366D'),
  neptune: Color('#77B6BB'),
  neptune_0: Color('#DEEDEC'),
  neptune_10: Color('#CDE5E5'),
  neptune_20: Color('#BBDEDD'),
  neptune_30: Color('#A9D5D5'),
  neptune_40: Color('#98CBCD'),
  neptune_50: Color('#88C0C4'),
  neptune_60: Color('#77B6BB'),
  neptune_70: Color('#66A5A8'),
  neptune_80: Color('#579292'),
  neptune_90: Color('#4A7B7A'),
  neptune_100: Color('#3F6160'),
  olive: Color('#88B179'),
  olive_0: Color('#ECF3E7'),
  olive_10: Color('#DCE8D4'),
  olive_20: Color('#CCDEC2'),
  olive_30: Color('#BBD3AF'),
  olive_40: Color('#AAC89D'),
  olive_50: Color('#99BD8B'),
  olive_60: Color('#88B179'),
  olive_70: Color('#709660'),
  olive_80: Color('#597949'),
  olive_90: Color('#425B33'),
  olive_100: Color('#314724'),
};

tokens[COLOR] = {
  DEFAULT: {
    primary: palette.magenta,
    primary_hover: Color('#F90984'), // TODO remove? MAGENTA_HOVER
    primary_active: Color('#CB0068'), // TODO remove? MAGENTA_ACTIVE
    ...palette,
  },
  text: {
    default: palette.grey_90,
    offset: palette.white,
    muted: palette.grey,
    link: palette.blue,
    link_hover: palette.blue,
    link_active: palette.blue_80,
    link_visited: palette.blue_80,
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
    '1_hover': [Shadow({ y: 6, blur: 24 }), Shadow({ y: 3, blur: 6 })],
    '1_active': [Shadow({ y: 2, blur: 8 }), Shadow({ y: 1, blur: 2 })],
    2: [Shadow({ y: 8, blur: 32 }), Shadow({ y: 4, blur: 8 })],
    '2_hover': [Shadow({ y: 10, blur: 40 }), Shadow({ y: 5, blur: 10 })],
    '2_active': [Shadow({ y: 6, blur: 24 }), Shadow({ y: 3, blur: 6 })],
    3: [Shadow({ y: 12, blur: 48 }), Shadow({ y: 6, blur: 12 })],
    '3_hover': [Shadow({ y: 14, blur: 56 }), Shadow({ y: 7, blur: 14 })],
    '3_active': [Shadow({ y: 10, blur: 40 }), Shadow({ y: 5, blur: 10 })],
    4: [Shadow({ y: 16, blur: 64 }), Shadow({ y: 8, blur: 16 })],
    '4_hover': [Shadow({ y: 18, blur: 72 }), Shadow({ y: 9, blur: 18 })],
    '4_active': [Shadow({ y: 14, blur: 56 }), Shadow({ y: 7, blur: 14 })],
    5: [Shadow({ y: 20, blur: 80 }), Shadow({ y: 10, blur: 20 })],
    '5_hover': [Shadow({ y: 22, blur: 88 }), Shadow({ y: 11, blur: 22 })],
    '5_active': [Shadow({ y: 18, blur: 72 }), Shadow({ y: 9, blur: 18 })],
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
  easing: EMPTY,
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
