// RAW VALUES

/* Colors */

const MAGENTA = '#E20074';
const MAGENTA_HOVER = '#F90984';
const MAGENTA_ACTIVE = '#CB0068';
const WHITE = '#FFFFFF';
const RED_FUNCTIONAL = '#D90000';
// const GREEN_FUNCTIONAL = '#46A800';
const BLUE = '#007DB3';
const BLUE_FUNCTIONAL = '#009DE0';
const BLUE_DARK = '#0070A0';

/* Grays */

const GRAY_1 = '#262626';
// const GRAY_2 = '#383838';
const GRAY_3 = '#6C6C6C';
const GRAY_4 = '#7C7C7C';
// not AA on white background
// const GRAY_5_DECORATIVE = '#A4A4A4';
const GRAY_6_DECORATIVE = '#D0D0D0';
const GRAY_7_DECORATIVE = '#DCDCDC';
// const GRAY_8_DECORATIVE = '#EDEDED';
const GRAY_9_DECORATIVE = '#F4F4F4';

/* Spacing, in rem units */

const SPACING_1 = 0.25; // 4px
const SPACING_2 = 0.5; // 8px
const SPACING_3 = 0.75; // 12px
const SPACING_4 = 1; // 16px
const SPACING_5 = 1.5; // 24px
const SPACING_6 = 2; // 32px
const SPACING_7 = 3; // 48px
const SPACING_8 = 4; // 64px
const SPACING_9 = 5; // 80px

/* Shadows */

const SHADOW_LEVEL_0 =
  '0 2px 8px 0 rgba(0,0,0,0.10), 0 1px 2px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_1 =
  '0 4px 16px 0 rgba(0,0,0,0.10), 0 2px 4px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_1_HOVER =
  '0 6px 24px 0 rgba(0,0,0,0.10), 0 3px 6px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_1_ACTIVE =
  '0 2px 8px 0 rgba(0,0,0,0.10), 0 1px 2px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_2 =
  '0 8px 32px 0 rgba(0,0,0,0.10), 0 4px 8px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_2_HOVER =
  '0 10px 40px 0 rgba(0,0,0,0.10), 0 5px 10px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_2_ACTIVE =
  '0 6px 24px 0 rgba(0,0,0,0.10), 0 3px 6px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_3 =
  '0 12px 48px 0 rgba(0,0,0,0.10), 0 6px 12px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_3_HOVER =
  '0 14px 56px 0 rgba(0,0,0,0.10), 0 7px 14px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_3_ACTIVE =
  '0 10px 40px 0 rgba(0,0,0,0.10), 0 5px 10px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_4 =
  '0 16px 64px 0 rgba(0,0,0,0.10), 0 8px 16px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_4_HOVER =
  '0 18px 72px 0 rgba(0,0,0,0.10), 0 9px 18px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_4_ACTIVE =
  '0 14px 56px 0 rgba(0,0,0,0.10), 0 7px 14px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_5 =
  '0 20px 80px 0 rgba(0,0,0,0.10), 0 10px 20px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_5_HOVER =
  '0 22px 88px 0 rgba(0,0,0,0.10), 0 11px 22px 0 rgba(0,0,0,0.10)';
const SHADOW_LEVEL_5_ACTIVE =
  '0 18px 72px 0 rgba(0,0,0,0.10), 0 9px 18px 0 rgba(0,0,0,0.10)';

/* Helpers */

const rem = (x: number) => `${x}rem`;

// ACTUAL TOKENS

const color = {
  primary: MAGENTA,
  primary_hover: MAGENTA_HOVER,
  primary_active: MAGENTA_ACTIVE,
  text: GRAY_1,
  text_contrast: WHITE,
  link: BLUE,
  link_hover: BLUE,
  link_active: BLUE_DARK,
  link_visited: BLUE_DARK,
  disabled: GRAY_4,
  error: RED_FUNCTIONAL,
  focus: BLUE_FUNCTIONAL,
  divider: GRAY_6_DECORATIVE,
  tableLine: GRAY_6_DECORATIVE,
  border_slider_thumb: GRAY_3,
  slider_track: GRAY_4,
};

const background = {
  light: GRAY_9_DECORATIVE,
  dark: GRAY_7_DECORATIVE,
  action: MAGENTA,
  action_hover: MAGENTA_HOVER,
  action_active: MAGENTA_ACTIVE,
  disabled: GRAY_6_DECORATIVE,
  card: WHITE,
};

const spacing = {
  0: 0,
  1: rem(SPACING_1),
  2: rem(SPACING_2),
  3: rem(SPACING_3),
  4: rem(SPACING_4),
  5: rem(SPACING_5),
  6: rem(SPACING_6),
  7: rem(SPACING_7),
  8: rem(SPACING_8),
  9: rem(SPACING_9),
  x_button: rem(SPACING_5),
  y_button: rem(SPACING_3),
  x_chip: rem(SPACING_2),
  y_chip: rem(SPACING_1),
  input: rem(SPACING_3),
  input_min: rem(SPACING_1),
  inline: rem(SPACING_2),
  box: rem(SPACING_5),
  flow: rem(SPACING_5),
  char: rem(SPACING_1),
  y_outer: rem(SPACING_9),
  gutter: rem(SPACING_6),
};

const size = {
  divider: '1px',
  underline: '1px',
  border_input: '1px',
  border_focus: '2px',
  modal_narrow: rem(31),
  modal: rem(44),
  modal_wide: rem(64),
};

const shadow = {
  level_0: SHADOW_LEVEL_0,
  level_1: SHADOW_LEVEL_1,
  level_1_hover: SHADOW_LEVEL_1_HOVER,
  level_1_active: SHADOW_LEVEL_1_ACTIVE,
  level_2: SHADOW_LEVEL_2,
  level_2_hover: SHADOW_LEVEL_2_HOVER,
  level_2_active: SHADOW_LEVEL_2_ACTIVE,
  level_3: SHADOW_LEVEL_3,
  level_3_hover: SHADOW_LEVEL_3_HOVER,
  level_3_active: SHADOW_LEVEL_3_ACTIVE,
  level_4: SHADOW_LEVEL_4,
  level_4_hover: SHADOW_LEVEL_4_HOVER,
  level_4_active: SHADOW_LEVEL_4_ACTIVE,
  level_5: SHADOW_LEVEL_5,
  level_5_hover: SHADOW_LEVEL_5_HOVER,
  level_5_active: SHADOW_LEVEL_5_ACTIVE,
  ground: SHADOW_LEVEL_0,
  card: SHADOW_LEVEL_1,
  card_hover: SHADOW_LEVEL_1_HOVER,
  card_active: SHADOW_LEVEL_1_ACTIVE,
  dropdown: SHADOW_LEVEL_2,
  dropdown_hover: SHADOW_LEVEL_2_HOVER,
  dropdown_active: SHADOW_LEVEL_2_ACTIVE,
  notification: SHADOW_LEVEL_3,
  notification_hover: SHADOW_LEVEL_3_HOVER,
  notification_active: SHADOW_LEVEL_3_ACTIVE,
  navigation: SHADOW_LEVEL_4,
  navigation_hover: SHADOW_LEVEL_4_HOVER,
  navigation_active: SHADOW_LEVEL_4_ACTIVE,
  modal: SHADOW_LEVEL_5,
  modal_hover: SHADOW_LEVEL_5_HOVER,
  modal_active: SHADOW_LEVEL_5_ACTIVE,
};

const radii = {
  small: rem(SPACING_1),
  medium: rem(SPACING_2),
  input: rem(SPACING_1),
  chip: rem(SPACING_1),
  button: rem(SPACING_2),
  card: rem(SPACING_2),
};

const opacity = {
  disabled: 0.5,
};

const transition = {
  generic: 'all .2s ease-in-out',
};

export const tokens = {
  color,
  background,
  spacing,
  size,
  shadow,
  radii,
  opacity,
  transition,
};
