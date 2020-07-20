import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'tab-header': {
    padding: '.5rem 1.75rem .5rem 1.5rem',
    backgroundColor: '#f4f4f4',

    display: 'inline-flex',
    '&:hover': {
      '--icon-color': '#F90984',
      color: '#F90984',
      cursor: 'pointer',
    },
    '&:active': {
      '--icon-color': '#ff0033',
      color: '#ff0033',
    },
  },

  'tab-header--selected': {
    '--icon-color': '#CB0068',
    color: '#CB0068',
  },
  'tab-header__underline': {
    width: '100%',
    height: '4px',
    transform: 'translateY(1px)',
    backgroundColor: '#E20074',
    borderRadius: '8px 8px 0 0',
  },
  'tab-header__underline--transparent': {
    width: '100%',
    height: '4px',
    transform: 'translateY(1px)',
    backgroundColor: 'transparent',
    borderRadius: '8px 8px 0 0',
  },
};
