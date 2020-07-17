import { JssStyle } from 'jss';

export const styles: JssStyle = {
  // Wrapper li
  collapsible: {
    margin: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  'collapsible--condensed': {
    borderColor: '#E6E6E6', // ({ colors }) => colors.grey['300'],
  },
  collapsible__wrapper: {
    backgroundColor: `#E6E6E6`,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6E6E6', // ({ colors }) => colors.grey['300'],
  },

  // Button
  collapsible__button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '1rem',
    paddingRight: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '2rem',
    textAlign: 'left',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 4,
    color: 'currentColor',
    '&:hover': {
      color: '#E20074',
    },
    '&:active': {
      color: '#CB0068',
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#009DE0',
    },
    '&[aria-expanded="true"] svg': {
      transform: 'rotate(0deg)',
    },
    '& svg': {
      marginRight: '1rem',
      transform: 'rotate(270deg)',
      transition: ({ transitions }) =>
        `opacity ${transitions.duration.shortest}ms`,
    },
  },

  // List
  collapsible__content: {
    marginTop: 0,
    marginBottom: 0,
    padding: '1rem',
    border: '1px solid #E6E6E6',
  },
};
