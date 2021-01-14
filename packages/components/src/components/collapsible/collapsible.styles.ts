import { JssStyle } from 'jss';

export const styles: JssStyle = {
  collapsible: {
    position: 'relative',
    marginTop: ({ spacing }) => spacing['4'],
    marginBottom: ({ spacing }) => spacing['4'],
  },

  'collapsible--expanded': {
    // Accessibility: transparent border for High Contrast Mode in Windows
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: ({ spacing }) => `calc(-1 * ${spacing['4']})`,
      border: '1px solid transparent',
      pointerEvents: 'none',
    },
  },

  collapsible__heading: {
    margin: 0,
  },

  // Button
  collapsible__button: {
    // Accessibility: allows some "external" typographic styles to leak in
    // https://www.w3.org/TR/WCAG21/#text-spacing
    fontFamily: 'inherit',
    wordSpacing: 'inherit',
    letterSpacing: 'inherit',

    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: 'currentColor',
    fontSize: ({ type }) => type.size_4,
    fontWeight: ({ type }) => type.weight_extrabold,
    lineHeight: ({ type }) => type.leading_3,
    borderWidth: ({ size }) => size.border_focus,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: ({ radii }) => radii.chip,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: ({ spacing }) => spacing['1'],

    '& > span': {
      marginLeft: ({ spacing }) => spacing.inline,
    },

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
  },

  collapsible__icon: {
    flexShrink: '0',
    marginTop: ({ spacing }) => `calc(${spacing['1']} + 1px)`,

    '$collapsible__button[aria-expanded="true"] &': {
      transform: 'rotate(180deg)',
    },
  },

  collapsible__content: {
    paddingRight: ({ spacing }) => spacing['7'],
    paddingLeft: ({ spacing }) => spacing['6'],
    /* These should collapse with tags like p, that's what we want */
    marginTop: ({ spacing }) => spacing['4'],
    marginBottom: ({ spacing }) => spacing['5'],
  },
};
