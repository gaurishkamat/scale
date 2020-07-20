import { JssStyle } from 'jss';

export const styles: JssStyle = {
  // Wrapper li
  collapsible: {
    margin: '1rem 0',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },

  // Button
  collapsible__button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingTop: '0rem',
    paddingRight: '0rem',
    paddingBottom: '0rem',
    paddingLeft: '0rem',
    textAlign: 'left',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 4,
    color: 'currentColor',
    '&:hover': {
      color: '#E20074',
      backgroundColor: '#f4f4f4',
      cursor: 'pointer',
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
    padding: '1rem 2rem 1.5rem 2rem',
  },
};
