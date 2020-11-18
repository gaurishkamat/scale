import { JssStyle } from 'jss';

export const styles: JssStyle = {
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

    '&:focus': {
      boxShadow: ({ size, color }) =>
        `0 0 0 ${size.border_focus}px ${color.focus}`,
    },

    // For the icon
    '& ::slotted(*)': {
      marginRight: ({ spacing }) => spacing[2],
    },
  },

  'tab-header--selected': {
    color: ({ color }) => color.primary,

    '&::after': {
      borderTopLeftRadius: ({ radii }) => radii.medium,
      borderTopRightRadius: ({ radii }) => radii.medium,
      height: ({ size }) => size.border_tab_selected,
      backgroundColor: ({ color }) => color.primary,
    },
  },

  'tab-header--small': {
    height: ({ size }) => size.height_tab_small,
    fontSize: ({ type }) => type.size_3,
  },
};
