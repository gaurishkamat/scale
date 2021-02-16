import { JssStyle } from 'jss';

export const styles: JssStyle = {
  '@global scale-tab-header:focus': {
    outline: 'none',
  },

  'tab-header': {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    height: ({ size }) => size.height_tab,
    marginRight: ({ spacing }) => spacing[5],
    paddingLeft: 0,
    paddingRight: ({ spacing }) => spacing[5],
    fontFamily: ({ type }) => type.family,
    fontSize: ({ type }) => type.size_4,
    fontWeight: ({ type }) => type.weight_bold,
    borderRadius: ({ radii }) => radii.small,
    outline: 'none',
    cursor: 'pointer',

    // Bottom border
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: ({ size }) => size.border_tab,
      backgroundColor: ({ color }) => color.border_tab,
    },

    /* Accessiblity: Windows "High Contrast Mode" border */
    '&::before': {
      content: '""',
      zIndex: 1,
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: 0,
      borderTop: '1px solid transparent',
    },

    '&:hover': {
      color: ({ color }) => color.primary_hover,
    },
    '&:hover::after': {
      backgroundColor: ({ color }) => color.primary_hover,
    },

    '&:active': {
      color: ({ color }) => color.primary_active,
    },
    '&:active::after': {
      backgroundColor: ({ color }) => color.primary_active,
    },

    // For the icon
    '& ::slotted(*)': {
      marginRight: ({ spacing }) => spacing[2],
    },
  },

  'tab-header--has-focus': {
    boxShadow: ({ size, color }) =>
      `0 0 0 ${size.border_focus}px ${color.focus}`,
  },

  'tab-header--selected': {
    color: ({ color }) => color.primary,

    '&::after': {
      borderTopLeftRadius: ({ radii }) => radii.medium,
      borderTopRightRadius: ({ radii }) => radii.medium,
      height: ({ size }) => size.border_tab_selected,
      backgroundColor: ({ color }) => color.primary,
    },

    '&::before': {
      borderTop: ({ size }) =>
        `${size.border_tab_selected}px solid transparent`,
    },
  },

  'tab-header--small': {
    height: ({ size }) => size.height_tab_small,
    fontSize: ({ type }) => type.size_3,
  },
};
