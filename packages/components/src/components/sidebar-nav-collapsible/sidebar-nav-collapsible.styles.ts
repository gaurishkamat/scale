import { JssStyle } from 'jss';

import { padding } from '../sidebar-nav/sidebar-nav.styles';

export const styles: JssStyle = {
  // Wrapper li
  'sidebar-nav-collapsible': {
    margin: 0,
    borderBottomWidth: 0,
    borderBottomStyle: 'solid',
    borderBottomColor: '#E6E6E6',
    // Firefox
    /* '& ::-moz-focus-inner': {
      border: 0,
    }, */
  },
  'sidebar-nav-collapsible--condensed': {
    borderBottomWidth: 1,
  },
  'sidebar-nav-collapsible__wrapper': {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#E6E6E6',
  },
  'sidebar-nav-collapsible__wrapper--condensed': {
    borderBottomWidth: 0,
  },
  // Button
  'sidebar-nav-collapsible__button': {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    borderRadius: 2,
    fontFamily: ({ type }) => type.family,
    textDecoration: 'none',
    color: 'currentColor',
    '&:hover': {
      color: '#E20074',
    },
    '&:active': {
      color: '#CB0068',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'inset 0 0 0 2px #009DE0',
    },
    '&[aria-expanded="true"] $sidebar-nav-collapsible__icon': {
      transform: 'rotate(180deg)',
    },
    '& $sidebar-nav-collapsible__icon': {
      transition: ({ transitions }) =>
        `opacity ${transitions.duration.shortest}ms`,
    },
    ...padding.normal,
  },
  'sidebar-nav-collapsible__button--current': {
    color: '#E20074',
  },
  '@media (hover: hover)': {
    'sidebar-nav-collapsible__button': {
      '&[aria-expanded="false"] $sidebar-nav-collapsible__icon': {
        opacity: 0,
      },
      '&:hover $sidebar-nav-collapsible__icon': {
        opacity: 1,
      },
      '&:focus $sidebar-nav-collapsible__icon': {
        opacity: 1,
      },
    },
  },
  'sidebar-nav-collapsible__button--bold': {
    fontWeight: ({ type }) => type.weight_bold,
  },
  'sidebar-nav-collapsible__icon': {},
  // List
  'sidebar-nav-collapsible__list': {
    marginTop: 0,
    marginBottom: 0,
    listStyle: 'none',
    paddingLeft: 0,
    borderBottomWidth: 1,
  },
  'sidebar-nav-collapsible__list--condensed': {
    marginTop: '1em',
    marginBottom: '2em',
    marginLeft: '2em',
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    borderLeftColor: '#4B4B4B',
  },
};
