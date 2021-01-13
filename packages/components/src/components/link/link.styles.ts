import { JssStyle } from 'jss';

export const styles: JssStyle = {
  link: {
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
    color: ({ color }) => color.link,
    borderBottom: ({ size }) => `${size.underline}px solid currentColor`,
    '&:hover&:not($link--disabled)': {
      color: ({ color }) => color.link_hover,
    },
    '&:focus:not($link--disabled)': {
      borderBottom: ({ size }) => `${size.border_focus}px solid currentColor`,
    },
    '&:active&:not($link--disabled)': {
      color: ({ color }) => color.link_active,
    },
    '&:visited&:not($link--disabled)': {
      color: ({ color }) => color.link_visited,
    },
  },
  link__wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    '& > *:not(:first-child)': {
      marginInlineStart: ({ spacing }) => spacing.char,
    },
  },
  'link--block': {
    display: 'block',
  },
  'link--disabled': {
    cursor: 'not-allowed',
    color: ({ color }) => color.disabled,
  },
};
