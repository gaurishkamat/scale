import { JssStyle } from 'jss';

export const styles: JssStyle = {
  button: {
    // Accessibility: allows some "external" typographic styles to leak in
    // https://www.w3.org/TR/WCAG21/#text-spacing
    lineHeight: 'inherit',
    wordSpacing: 'inherit',
    letterSpacing: 'inherit',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
    border: 0,
    paddingLeft: ({ spacing }) => spacing.x_button,
    paddingRight: ({ spacing }) => spacing.x_button,
    fontFamily: 'inherit',
    fontWeight: ({ type }) => type.weight_bold,
    fontSize: ({ type }) => type.size_3,
    // @ts-ignore
    lineHeight: ({ type }) => type.leading_5,
    minHeight: ({ size }) => size.button,
    transition: ({ transition }) => transition.generic,

    // Focus state, the same for all variants
    '&:not($button--disabled):focus': {
      boxShadow: ({ size, color }) =>
        `0 0 0 ${size.border_focus}px ${color.focus}`,
    },

    // Spacing for inline icons
    '&$button--icon-before ::slotted(*)': {
      marginRight: ({ spacing }) => spacing[2],
    },
    '&$button--icon-after ::slotted(*)': {
      marginLeft: ({ spacing }) => spacing[2],
    },

    // Accessibility: Windows High Contrast Mode transparent border
    '&:after': {
      content: '""',
      display: 'block',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '1px solid transparent',
      borderRadius: ({ radii }) => radii.button,
      pointerEvents: 'none',
    },
  },

  'button--size-small': {
    fontSize: ({ type }) => type.size_2,
    lineHeight: ({ type }) => type.leading_4,
    minHeight: ({ size }) => size.button_small,
  },

  'button--variant-primary': {
    borderRadius: ({ radii }) => radii.button,
    background: ({ color }) => color.primary,
    color: ({ color }) => color.text_contrast,
    textAlign: 'center',

    '&:not($button--disabled):hover': {
      background: ({ color }) => color.primary_hover,
    },
    '&:not($button--disabled):active': {
      background: ({ color }) => color.primary_active,
    },
    '$button--disabled&': {
      background: ({ background }) => background.disabled,
      color: ({ color }) => color.disabled_low_contrast,
    },
  },

  'button--variant-secondary': {
    borderRadius: ({ radii }) => radii.button,
    border: ({ size }) => `${size.border}px solid currentColor`,
    background: 'transparent',
    color: ({ color }) => color.text,
    textAlign: 'center',

    '&:not($button--disabled):hover': {
      borderColor: ({ color }) => color.primary_hover,
      color: ({ color }) => color.primary_hover,
    },
    '&:not($button--disabled):active': {
      borderColor: ({ color }) => color.primary_active,
      color: ({ color }) => color.primary_active,
    },
    '$button--disabled&': {
      borderColor: ({ background }) => background.disabled,
      color: ({ background }) => background.disabled,
    },
  },

  'button--icon-before': {},
  'button--icon-after': {},

  'button--icon-only': {
    paddingLeft: ({ spacing }) => spacing[2],
    paddingRight: ({ spacing }) => spacing[2],
  },

  'button--disabled': {
    cursor: 'not-allowed',
  },
};
