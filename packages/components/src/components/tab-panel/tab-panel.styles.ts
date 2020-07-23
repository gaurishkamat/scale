import { JssStyle } from 'jss';

export const padding = {
  normal: {
    paddingTop: '1rem',
    paddingRight: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '2rem',
  },
  condensed: {
    paddingTop: '0.5rem',
    paddingRight: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0.75rem',
  },
};

export const styles: JssStyle = {
  'sidebar-panel': {},
  'sidebar-panel__list': {
    marginTop: 0,
    marginBottom: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
};
