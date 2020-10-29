import { JssStyle } from 'jss';

export const styles: JssStyle = {
  // Wrapper li
  collapsible: {
    margin: ({ spacing }) => `calc(0.5 * ${spacing['5']}) 0`,
  },
  'collapsible--expanded': {
    marginBottom: 0,
  },

  // Button
  collapsible__button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    textAlign: 'left',
    borderWidth: ({ size }) => size.border_focus,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: ({ radii }) => radii.chip,
    color: 'currentColor',
    fontFamily: 'inherit',
    '&:hover': {
      color: ({ color }) => color.primary,
      backgroundColor: ({ background }) => background.light,
      cursor: 'pointer',
    },
    '&:active': {
      color: ({ color }) => color.primary_active,
    },
    '&:focus': {
      outline: 'none',
      borderColor: ({ color }) => color.focus,
    },
    '&[aria-expanded="true"] svg': {
      transform: 'rotate(0deg)',
    },
    '& svg': {
      flexShrink: '0',
      marginRight: ({ spacing }) => spacing.inline,
      transform: 'rotate(270deg)',
      transition: ({ transitions }) =>
        `opacity ${transitions.duration.shortest}ms`, // TODO use token
    },
  },

  // List
  collapsible__content: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: ({ spacing }) => spacing['4'],
    paddingRight: ({ spacing }) => spacing['7'],
    paddingBottom: ({ spacing }) => `calc(0.5 * ${spacing['5']})`,
    paddingLeft: ({ spacing }) => spacing['6'],
    '& ::slotted(*)': {
      marginTop: 0,
      marginBottom: 0,
    },
  },
};
