import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'tab-wrapper': {
    backgroundColor: ({ background }) => background.light,
    marginRight: 8,
    borderRadius: '8px 8px 0 0',
  },
  'tab-wrapper--selected': {
    backgroundColor: 'transparent',
  },
  'tab-header': {
    padding: '.75rem 1.5rem .5rem 1.5rem',
    // backgroundColor: '#f4f4f4',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: ({ type }) => type.weight_bold,
    color: ({ color }) => color.text,
    '&:hover': {
      '--icon-color': '#F90984',
      color: '#F90984',
      cursor: 'pointer',
    },
    '&:active': {
      '--icon-color': '#CB0068',
      color: '#CB0068',
    },
  },

  'tab-header--selected': {
    '--icon-color': ' #E20074',
    color: '#E20074',
  },
  'tab-header__underline': {
    width: '100%',
    height: '4px',
    transform: 'translateY(1px)',
    backgroundColor: '#E20074',
    borderRadius: '8px 8px 0 0',
    opacity: 1,
    transition: 'all 0.2s ease-in-out',
  },
  'tab-header__underline--transparent': {
    opacity: 0,
  },
};
