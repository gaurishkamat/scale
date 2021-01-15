import { JssStyle } from 'jss';

export const styles: JssStyle = {
  breadcrumb: {
    marginLeft: ({ spacing }) => `-${spacing['2']}`,
    '& ol': {
      listStyle: 'none',
      paddingLeft: 0,
      marginTop: 0,
      marginBottom: 0,
      display: 'flex',
    },
    '& li': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '0.875rem',
    },
  },
  separator: {
    display: 'flex',
    '& path': {
      fill: ({ color }) => color.breadcrumb_separator,
    },
  },
  item: {
    padding: ({ spacing }) => `${spacing['1']} ${spacing['2']}`,
  },
  link: {
    color: ({ color }) => color.text_muted,
    textDecoration: 'none',
    padding: ({ spacing }) => `${spacing['1']} ${spacing['2']}`,
    borderRadius: ({ radii }) => radii.medium,
    '&:hover': {
      color: ({ color }) => color.primary_hover,
    },
    '&:active': {
      color: ({ color }) => color.primary_active,
    },
    '&:focus': {
      boxShadow: ({ size, color }) =>
        `0 0 0 ${size.border_focus}px ${color.focus}`,
      outline: 'none',
    },
  },
  current: {
    color: ({ color }) => color.text,
  },
};
